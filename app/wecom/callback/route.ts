import { NextRequest } from "next/server"
import { verifySignature, decryptEchostr } from "@/lib/wecom-crypto"

// 企业微信后台「接收消息」配置（与后台保持一致）
const WECOM_TOKEN = "qtDzQYy7IIIHs07DL3bANNnOyQqh370"
const WECOM_ENCODING_AES_KEY = "EufHpcu5rYlv3OSfkbjl1pyRXZPHAjrcyxokoFQB2A1"

/**
 * 从原始 query 手动解析，避免 URLSearchParams 把 + 当空格导致 echostr base64 损坏
 */
function parseQuery(rawUrl: string): Record<string, string> {
  const q = rawUrl.indexOf("?")
  if (q < 0) return {}
  const out: Record<string, string> = {}
  const search = rawUrl.slice(q + 1)
  for (const part of search.split("&")) {
    const eq = part.indexOf("=")
    if (eq < 0) continue
    const key = part.slice(0, eq)
    const rawVal = part.slice(eq + 1)
    try {
      out[key] = decodeURIComponent(rawVal)
    } catch {
      out[key] = rawVal
    }
  }
  return out
}

/**
 * 企业微信回调 URL 校验（GET）
 * 企业微信保存回调时会请求：GET /wecom/callback?msg_signature=...&timestamp=...&nonce=...&echostr=...
 * 需校验签名并解密 echostr，返回明文 echostr（text/plain，无 JSON/引号/换行）。
 * 本路径请勿做 301/302、鉴权、Basic Auth、登录页拦截。
 */
export async function GET(request: NextRequest) {
  try {
    const params = parseQuery(request.url ?? "")
    const msgSignature = params.msg_signature
    const timestamp = params.timestamp
    const nonce = params.nonce
    const echostr = params.echostr

    if (!msgSignature || !timestamp || !nonce || !echostr) {
      console.error("[wecom/callback] 400: missing query param", {
        hasMsgSig: !!msgSignature,
        hasTimestamp: !!timestamp,
        hasNonce: !!nonce,
        hasEchostr: !!echostr,
      })
      return new Response("fail", { status: 400 })
    }

    const token = (process.env.WECOM_TOKEN ?? WECOM_TOKEN).trim()
    const encodingAESKey = (process.env.WECOM_ENCODING_AES_KEY ?? WECOM_ENCODING_AES_KEY).trim()
    if (!token || !encodingAESKey) {
      console.error("[wecom/callback] 400: token or encodingAESKey empty")
      return new Response("fail", { status: 400 })
    }
    if (encodingAESKey.length !== 43) {
      console.error("[wecom/callback] 400: WECOM_ENCODING_AES_KEY length must be 43, got", encodingAESKey.length)
      return new Response("fail", { status: 400 })
    }

    if (!verifySignature(token, timestamp, nonce, echostr, msgSignature)) {
      console.error("[wecom/callback] 400: signature verify failed (Token/参数与后台不一致?)")
      return new Response("fail", { status: 400 })
    }

    const plainEchostr = decryptEchostr(encodingAESKey, echostr)

    return new Response(plainEchostr, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    })
  } catch (e) {
    console.error("[wecom/callback] 400: decrypt or other error", e)
    return new Response("fail", { status: 400 })
  }
}
