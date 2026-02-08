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
  const keyB64 = key.length % 4 === 0 ? key : key + "="
  const aesKey = Buffer.from(keyB64, "base64")
  console.log("[wecom-crypto] key decode", {
    keyB64AddedPad: keyB64.endsWith("=") ? 1 : 0,
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
  const decipher = crypto.createDecipheriv("aes-256-cbc", aesKey, iv)
  // 显式开启 PKCS#7 填充，确保在不同 OpenSSL 版本下一致
  decipher.setAutoPadding(true)
  let randMsg: Buffer
  try {
    randMsg = Buffer.concat([decipher.update(cipher), decipher.final()])
  } catch (e) {
    console.error("[wecom-crypto] decrypt failure", {
      err: (e as any)?.message,
      code: (e as any)?.code,
      name: (e as any)?.name,
    })
    throw e
  }
  const content = randMsg.subarray(16)
  const msgLen = content.readUInt32BE(0)
  const msg = content.subarray(4, 4 + msgLen)
  return msg.toString("utf8")
}
