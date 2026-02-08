import crypto from "node:crypto"

/**
 * 企业微信回调：签名校验与 echostr 解密
 * 文档：https://developer.work.weixin.qq.com/document/path/90968
 */

function sha1Hex(text: string): string {
  return crypto.createHash("sha1").update(text, "utf8").digest("hex")
}

/**
 * 计算签名（用于调试对比）
 * dev_msg_signature = sha1(sort(token, timestamp, nonce, echostr).join(''))
 */
export function computeSignature(
  token: string,
  timestamp: string,
  nonce: string,
  echostr: string
): string {
  const sorted = [token, timestamp, nonce, echostr].sort()
  const str = sorted.join("")
  return sha1Hex(str)
}

/**
 * 校验 URL 参数签名
 */
export function verifySignature(
  token: string,
  timestamp: string,
  nonce: string,
  echostr: string,
  msgSignature: string
): boolean {
  return computeSignature(token, timestamp, nonce, echostr) === msgSignature
}

/**
 * 使用 EncodingAESKey 解密 echostr
 * AESKey = Base64_Decode(EncodingAESKey + "=")，IV 为 AESKey 前 16 字节
 * 解密后：16 随机字节 + 4 字节 msg_len(大端) + msg + receiveid
 */
export function decryptEchostr(encodingAESKey: string, echostrBase64: string): string {
  const key = encodingAESKey.trim()
  console.log("[wecom-crypto] decryptEchostr input", {
    keyLen: key.length,
    keyPreview: key ? key.slice(0, 6) + "..." + key.slice(-6) : "",
    echostrLen: echostrBase64?.length ?? 0,
    echostrHasPlus: echostrBase64?.includes("+") ?? false,
    echostrHasSpace: echostrBase64?.includes(" ") ?? false,
  })
  // 官方：43 字符，Base64 解码时补 "="
  const keyB64Padded = key.length % 4 === 0 ? key : key + "="
  const tryKeys: { label: string; buf: Buffer }[] = []
  try {
    tryKeys.push({ label: "padded", buf: Buffer.from(keyB64Padded, "base64") })
  } catch {}
  try {
    tryKeys.push({ label: "raw", buf: Buffer.from(key, "base64") })
  } catch {}
  // 去重无效项，仅保留长度为 32 的候选
  const keyCandidates = tryKeys.filter(k => k.buf?.length).map(k => ({ label: k.label, buf: Buffer.from(k.buf) }))
  console.log("[wecom-crypto] key candidates", keyCandidates.map(k => ({ label: k.label, len: k.buf.length })))
  let aesKey: Buffer | null = null
  let aesKeyLabel = ""
  for (const k of keyCandidates) {
    if (k.buf.length === 32) { aesKey = k.buf; aesKeyLabel = k.label; break }
  }
  if (!aesKey) {
    throw new Error(`Invalid EncodingAESKey: decoded length ${keyCandidates.map(k=>k.buf.length).join(',')}, expected 32`)
  }
  console.log("[wecom-crypto] key decode", {
    picked: aesKeyLabel,
    aesKeyLen: aesKey.length,
    aesKeyPreview: aesKey.subarray(0, 2).toString("hex") + "..." + aesKey.subarray(-2).toString("hex"),
  })
  if (aesKey.length !== 32) {
    throw new Error(`Invalid EncodingAESKey: decoded length ${aesKey.length}, expected 32`)
  }
  const iv = aesKey.subarray(0, 16)
  // query 里 + 可能被解析成空格，base64 需把空格还原为 +
  const cipherB64 = echostrBase64.trim().replace(/ /g, "+")
  console.log("[wecom-crypto] cipher b64", {
    preview: cipherB64.slice(0, 8) + "..." + cipherB64.slice(-8),
  })
  const cipher = Buffer.from(cipherB64, "base64")
  console.log("[wecom-crypto] aes", {
    aesKeyLen: aesKey.length,
    ivPreview: iv.subarray(0, 4).toString("hex") + "...",
    cipherLen: cipher.length,
  })
  const tryDec = (ivToUse: Buffer, keyToUse: Buffer = aesKey) => {
    const d = crypto.createDecipheriv("aes-256-cbc", keyToUse, ivToUse)
    d.setAutoPadding(true)
    return Buffer.concat([d.update(cipher), d.final()])
  }

  let randMsg: Buffer
  let ivVariant = "key-prefix"
  try {
    randMsg = tryDec(iv)
  } catch (e) {
    console.error("[wecom-crypto] decrypt failure (key-prefix iv)", {
      err: (e as any)?.message,
      code: (e as any)?.code,
    })
    // 调试备用：尝试零 IV
    try {
      ivVariant = "zeros"
      randMsg = tryDec(Buffer.alloc(16, 0))
    } catch (e2) {
      console.error("[wecom-crypto] decrypt failure (zero iv)", {
        err: (e2 as any)?.message,
        code: (e2 as any)?.code,
      })
      // 再尝试以密文前 16 字节作为 IV（某些实现会这样做）
      try {
        ivVariant = "cipher-head"
        randMsg = tryDec(cipher.subarray(0, 16))
      } catch (e3) {
        console.error("[wecom-crypto] decrypt failure (cipher-head iv)", {
          err: (e3 as any)?.message,
          code: (e3 as any)?.code,
        })
        // 再最后尝试：若挑选的 key 是 padded 版本，再尝试 raw 版本（或相反）
        try {
          const altKey = keyCandidates.find(k => k.label !== aesKeyLabel && k.buf.length === 32)?.buf
          if (!altKey) throw e3
          ivVariant = `altKey:${aesKeyLabel}=>${keyCandidates.find(k => k.label !== aesKeyLabel)?.label}`
          randMsg = tryDec(iv, altKey)
        } catch (e4) {
          console.error("[wecom-crypto] decrypt failure (altKey)", {
            err: (e4 as any)?.message,
            code: (e4 as any)?.code,
          })
          throw e3
        }
      }
    }
  }
  console.log("[wecom-crypto] decrypt ivVariant", { ivVariant })
  // 额外调试：不启用填充，获取原始明文尾部用于判断是否像有效 PKCS#7
  try {
    const dnp = crypto.createDecipheriv("aes-256-cbc", aesKey, iv)
    dnp.setAutoPadding(false)
    const raw = dnp.update(cipher)
    const tail = raw.subarray(-16)
    console.log("[wecom-crypto] raw tail(no padding)", {
      last16: tail.toString("hex"),
      lastByte: tail[15],
      uniqBytes: Array.from(new Set([...tail])).length,
      rawLen: raw.length,
    })
  } catch {}

  // 进一步调试：尝试 AES-128-CBC（极少数场景/文档误配）
  try {
    const key128 = aesKey.subarray(0, 16)
    const try128 = (ivToUse: Buffer) => {
      const d = crypto.createDecipheriv("aes-128-cbc", key128, ivToUse)
      d.setAutoPadding(true)
      return Buffer.concat([d.update(cipher), d.final()])
    }
    try {
      try128(iv)
      console.log("[wecom-crypto] aes-128-cbc works with key-prefix iv")
    } catch (e) {
      console.log("[wecom-crypto] aes-128-cbc failed (key-prefix iv)")
      try {
        try128(Buffer.alloc(16, 0))
        console.log("[wecom-crypto] aes-128-cbc works with zero iv")
      } catch (e2) {
        console.log("[wecom-crypto] aes-128-cbc failed (zero iv)")
        try {
          try128(cipher.subarray(0, 16))
          console.log("[wecom-crypto] aes-128-cbc works with cipher-head iv")
        } catch (e3) {
          console.log("[wecom-crypto] aes-128-cbc failed (cipher-head iv)")
        }
      }
    }
  } catch {}
  const content = randMsg.subarray(16)
  const msgLen = content.readUInt32BE(0)
  const msg = content.subarray(4, 4 + msgLen)
  return msg.toString("utf8")
}
