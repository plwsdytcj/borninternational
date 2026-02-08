import crypto from "node:crypto"

/**
 * 企业微信回调：签名校验与 echostr 解密
 * 文档：https://developer.work.weixin.qq.com/document/path/90968
 */

function sha1Hex(text: string): string {
  return crypto.createHash("sha1").update(text, "utf8").digest("hex")
}

/**
 * 校验 URL 参数签名
 * dev_msg_signature = sha1(sort(token, timestamp, nonce, echostr).join(''))
 */
export function verifySignature(
  token: string,
  timestamp: string,
  nonce: string,
  echostr: string,
  msgSignature: string
): boolean {
  const sorted = [token, timestamp, nonce, echostr].sort()
  const str = sorted.join("")
  const devSignature = sha1Hex(str)
  return devSignature === msgSignature
}

/**
 * 使用 EncodingAESKey 解密 echostr
 * AESKey = Base64_Decode(EncodingAESKey + "=")，IV 为 AESKey 前 16 字节
 * 解密后：16 随机字节 + 4 字节 msg_len(大端) + msg + receiveid
 */
export function decryptEchostr(encodingAESKey: string, echostrBase64: string): string {
  const keyWithPad = encodingAESKey.length % 4 === 0 ? encodingAESKey : encodingAESKey + "="
  const aesKey = Buffer.from(keyWithPad, "base64")
  if (aesKey.length !== 32) {
    throw new Error("Invalid EncodingAESKey: decoded length must be 32")
  }
  const iv = aesKey.subarray(0, 16)
  const cipher = Buffer.from(echostrBase64, "base64")
  const decipher = crypto.createDecipheriv("aes-256-cbc", aesKey, iv)
  const randMsg = Buffer.concat([decipher.update(cipher), decipher.final()])
  const content = randMsg.subarray(16)
  const msgLen = content.readUInt32BE(0)
  const msg = content.subarray(4, 4 + msgLen)
  return msg.toString("utf8")
}
