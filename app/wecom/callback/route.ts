import { NextRequest } from "next/server"
import { verifySignature, decryptEchostr, computeSignature } from "@/lib/wecom-crypto"
import { WECOM_TOKEN as CODE_WECOM_TOKEN, WECOM_ENCODING_AES_KEY as CODE_WECOM_ENCODING_AES_KEY } from "@/lib/wecom-config"

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
    // 轻量调试：当 ?debug=1 时，直接输出当前配置指纹，便于确认命中的是哪个部署/配置
    if (params.debug === "1") {
      const token = (CODE_WECOM_TOKEN || process.env.WECOM_TOKEN || "").trim()
      const encodingAESKey = (CODE_WECOM_ENCODING_AES_KEY || process.env.WECOM_ENCODING_AES_KEY || "").trim()
      const body = JSON.stringify({
        tokenLen: token.length,
        tokenPreview: token ? token.slice(0, 4) + "..." + token.slice(-4) : "",
        encodingAESKeyLen: encodingAESKey.length,
        encodingAESKeyPreview: encodingAESKey ? encodingAESKey.slice(0, 6) + "..." + encodingAESKey.slice(-6) : "",
        commit: process.env.VERCEL_GIT_COMMIT_SHA || process.env.VERCEL_DEPLOYMENT_ID || "",
        fromCode: {
          token: !!CODE_WECOM_TOKEN,
          key: !!CODE_WECOM_ENCODING_AES_KEY,
        },
      })
      return new Response(body, {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      })
    }
    const msgSignature = params.msg_signature
    const timestamp = params.timestamp
    const nonce = params.nonce
    const echostr = params.echostr

    // 打印完整原始参数，便于离线复现
    try {
      const sampleUrl = `${request.nextUrl.origin}${request.nextUrl.pathname}?msg_signature=${encodeURIComponent(
        msgSignature ?? ""
      )}&timestamp=${encodeURIComponent(timestamp ?? "")}&nonce=${encodeURIComponent(nonce ?? "")}&echostr=${encodeURIComponent(
        echostr ?? ""
      )}`
      console.log("[wecom/callback] rawParams", {
        msg_signature: msgSignature,
        timestamp,
        nonce,
        echostr,
        sampleUrl,
      })
    } catch {}

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

    // 优先读取代码里写死的常量，其次回退到环境变量
    const token = (CODE_WECOM_TOKEN || process.env.WECOM_TOKEN || "").trim()
    const encodingAESKey = (CODE_WECOM_ENCODING_AES_KEY || process.env.WECOM_ENCODING_AES_KEY || "").trim()
    console.log("[wecom/callback] config", {
      tokenLen: token.length,
      encodingAESKeyLen: encodingAESKey.length,
      tokenFromCode: !!CODE_WECOM_TOKEN,
      keyFromCode: !!CODE_WECOM_ENCODING_AES_KEY,
      tokenFromEnv: !!process.env.WECOM_TOKEN,
      keyFromEnv: !!process.env.WECOM_ENCODING_AES_KEY,
    })

    if (!token || !encodingAESKey) {
      console.error("[wecom/callback] 400: token or encodingAESKey empty (must set WECOM_TOKEN and WECOM_ENCODING_AES_KEY in env, same as WeCom backend)")
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
    let plainEchostr: string | null = null
    try {
      plainEchostr = decryptEchostr(encodingAESKey, echostr)
    } catch (e) {
      console.warn("[wecom/callback] decrypt failed, fallback to raw echostr (compat mode)")
      plainEchostr = echostr
    }
    console.log("[wecom/callback] 200 ok", { plainEchostrLen: plainEchostr.length })

    return new Response(plainEchostr, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Wecom-Key-Preview": encodingAESKey.slice(0, 6) + "..." + encodingAESKey.slice(-6),
        "X-Wecom-Commit": process.env.VERCEL_GIT_COMMIT_SHA || process.env.VERCEL_DEPLOYMENT_ID || "",
        "X-Wecom-Echostr-Mode": plainEchostr === echostr ? "raw" : "decrypted",
      },
    })
  } catch (e) {
    console.error("[wecom/callback] 400: decrypt or other error", e)
    // 失败时也带上配置指纹，助于定位是否命中旧部署
    const token = (CODE_WECOM_TOKEN || process.env.WECOM_TOKEN || "").trim()
    const encodingAESKey = (CODE_WECOM_ENCODING_AES_KEY || process.env.WECOM_ENCODING_AES_KEY || "").trim()
    return new Response("fail", {
      status: 400,
      headers: {
        "X-Wecom-Key-Preview": encodingAESKey ? encodingAESKey.slice(0, 6) + "..." + encodingAESKey.slice(-6) : "",
        "X-Wecom-Token-Len": String(token.length),
        "X-Wecom-Commit": process.env.VERCEL_GIT_COMMIT_SHA || process.env.VERCEL_DEPLOYMENT_ID || "",
      },
    })
  }
}
