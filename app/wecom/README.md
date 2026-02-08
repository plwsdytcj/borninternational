# 企业微信回调

## 回调 URL 校验（echostr）

- **路径**: `GET /wecom/callback`
- **用途**: 企业微信在保存「接收消息服务器配置」时会对该 URL 发起 GET 校验，需原样返回解密后的 echostr 明文。

### 环境变量（必填）

在 `.env.local` 或部署环境中配置，且需与企业微信后台「接收消息」中的配置一致：

| 变量 | 说明 |
|------|------|
| `WECOM_TOKEN` | 后台设置的 Token |
| `WECOM_ENCODING_AES_KEY` | 后台设置的 EncodingAESKey（43 位） |

### 验收

1. **企业微信后台**：在应用「接收消息」里填 `https://你的域名/wecom/callback`，点保存，应提示校验成功。
2. **禁止**：该路径不要做 301/302、Basic Auth、Cloudflare Access、登录页拦截等，否则企业微信无法访问。
3. **手动测试**（需真实参数，可从后台保存时抓包获取）：
   ```bash
   curl -i "https://你的域名/wecom/callback?msg_signature=xxx&timestamp=xxx&nonce=xxx&echostr=xxx"
   ```
   响应应为 `200`，`Content-Type: text/plain`，body 为解密后的明文 echostr，无 JSON、无引号、无多余换行。

### 常见问题排查

- 签名通过但解密报错（ERR_OSSL_BAD_DECRYPT）
  - 99% 是 `WECOM_ENCODING_AES_KEY` 与企业微信后台配置不一致。
  - 确认环境变量中 `WECOM_ENCODING_AES_KEY` 与后台完全一致（43 位），且未多空格、未换行。
  - 确认 `WECOM_TOKEN` 也与后台一致；签名仅依赖 Token，不依赖 AES Key。
  - echostr Base64 中 `+` 符号在传输中可能变为空格；本实现已自动修复，但请确保中间代理不改写查询串。
  - 若你的场景为“智能助手/机器人”等新接口，部分平台仅要求验签后原样回显 `echostr`（无需解密）。本实现已在解密失败时自动回退到原样回显，以确保能通过 URL 校验；实际收消息时仍需使用 AES 解密。
