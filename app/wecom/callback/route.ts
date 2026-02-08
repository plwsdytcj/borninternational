import { NextRequest } from "next/server"
import { verifySignature, decryptEchostr, computeSignature } from "@/lib/wecom-crypto"

// 企业微信后台「接收消息」配置（与后台保持一致，下面为生成好的示例）
const WECOM_TOKEN = "BornWecom2025CallbackToken"
const WECOM_ENCODING_AES_KEY = "K8mN2pQ5rT9vX3yZ7bD1fH4jL6nP0sU8wA2cE5gI9k"

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
    const hasQueryInUrl = (request.url ?? "").includes("?")
    const urlWithQuery =
      hasQueryInUrl ? request.url! : request.nextUrl.origin + request.nextUrl.pathname + request.nextUrl.search
    console.log("[wecom/callback] GET", {
      requestUrlHasQuery: hasQueryInUrl,
      nextUrlSearchLen: request.nextUrl.search?.length ?? 0,
      urlUsedLen: urlWithQuery.length,
    })

    const params = parseQuery(urlWithQuery)
    const msgSignature = params.msg_signature
    const timestamp = params.timestamp
    const nonce = params.nonce
    const echostr = params.echostr

    console.log("[wecom/callback] params", {
      keys: Object.keys(params),
      msgSignatureLen: msgSignature?.length,
      timestamp,
      nonce,
      echostrLen: echostr?.length,
      echostrHasPlus: echostr?.includes("+"),
    })

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
    console.log("[wecom/callback] config", {
      tokenLen: token.length,
      encodingAESKeyLen: encodingAESKey.length,
      tokenFromEnv: !!process.env.WECOM_TOKEN,
      keyFromEnv: !!process.env.WECOM_ENCODING_AES_KEY,
    })

    if (!token || !encodingAESKey) {
      console.error("[wecom/callback] 400: token or encodingAESKey empty")
      return new Response("fail", { status: 400 })
    }
    if (encodingAESKey.length !== 43) {
      console.error("[wecom/callback] 400: WECOM_ENCODING_AES_KEY length must be 43, got", encodingAESKey.length)
      return new Response("fail", { status: 400 })
    }

    if (!verifySignature(token, timestamp, nonce, echostr, msgSignature)) {
      const expectedSig = computeSignature(token, timestamp, nonce, echostr)
      console.error("[wecom/callback] 400: signature verify failed", {
        timestamp,
        nonce,
        msgSignatureReceived: msgSignature,
        msgSignatureExpected: expectedSig,
        tokenLen: token.length,
        tokenFirst3: token.slice(0, 3),
        tokenLast3: token.slice(-3),
      })
      return new Response("fail", { status: 400 })
    }

    console.log("[wecom/callback] signature ok, decrypting")
    const plainEchostr = decryptEchostr(encodingAESKey, echostr)
    console.log("[wecom/callback] 200 ok", { plainEchostrLen: plainEchostr.length })

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
