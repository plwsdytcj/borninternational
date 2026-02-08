import { NextRequest } from "next/server"
import { verifySignature, decryptEchostr } from "@/lib/wecom-crypto"

/**
 * 企业微信回调 URL 校验（GET）
 * 企业微信保存回调时会请求：GET /wecom/callback?msg_signature=...&timestamp=...&nonce=...&echostr=...
 * 需校验签名并解密 echostr，返回明文 echostr（text/plain，无 JSON/引号/换行）。
 * 本路径请勿做 301/302、鉴权、Basic Auth、登录页拦截。
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const msgSignature = searchParams.get("msg_signature")
    const timestamp = searchParams.get("timestamp")
    const nonce = searchParams.get("nonce")
    let echostr = searchParams.get("echostr")

    if (!msgSignature || !timestamp || !nonce || echostr == null || echostr === "") {
      console.error("[wecom/callback] 400: missing query param", {
        hasMsgSig: !!msgSignature,
        hasTimestamp: !!timestamp,
        hasNonce: !!nonce,
        hasEchostr: echostr != null && echostr !== "",
      })
      return new Response("fail", { status: 400 })
    }

    const token = (process.env.WECOM_TOKEN ?? "").trim()
    const encodingAESKey = (process.env.WECOM_ENCODING_AES_KEY ?? "").trim()
    if (!token || !encodingAESKey) {
      console.error("[wecom/callback] 400: env WECOM_TOKEN or WECOM_ENCODING_AES_KEY not set")
      return new Response("fail", { status: 400 })
    }

    // 企业微信文档：echostr 需先 urldecode 再参与签名与解密
    try {
      echostr = decodeURIComponent(echostr)
    } catch {
      console.error("[wecom/callback] 400: echostr decodeURIComponent failed")
      return new Response("fail", { status: 400 })
    }
    // query 中 + 常被解析为空格，base64 参与签名时用原始值；解密前在 wecom-crypto 里会把空格还原为 +
    const echostrForSign = echostr.replace(/ /g, "+")

    if (!verifySignature(token, timestamp, nonce, echostrForSign, msgSignature)) {
      console.error("[wecom/callback] 400: signature verify failed (Token/参数与后台不一致?)")
      return new Response("fail", { status: 400 })
    }

    const plainEchostr = decryptEchostr(encodingAESKey, echostrForSign)

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
