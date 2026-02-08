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
