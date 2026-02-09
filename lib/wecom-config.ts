// 企业微信「接收消息」配置（可直接在此处写死）
// 注意：必须与企业微信后台配置完全一致，否则解密会失败。

// 示例：将下面两行替换为你自己的真实值
export const WECOM_TOKEN = "BdnidBbHb1Re6xHKG1bk6AibT" // 例如："YourWecomToken"
export const WECOM_ENCODING_AES_KEY = "epfdxenoR0sy97oImHix7QVDaqvVA1toLO1zXKDnUPG" // 43 位，例如："abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG"
// 可选：历史/备用 AESKey（43 位），用于平台出现旧 Key 仍在加密的过渡期时的兼容尝试
export const WECOM_ENCODING_AES_KEY_FALLBACKS: string[] = [
  "vko1eh5SZamivMqfD6sRSVUhjfNYUiNKwdo8zu96tQk",
  "vko1eh5SZamivMqfD6sRSVUHjfNYUiNKwdo8zu96tQk",
]

// 提示：若保留空字符串，将回退到读取环境变量 WECOM_TOKEN / WECOM_ENCODING_AES_KEY。
