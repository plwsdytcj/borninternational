// 企业微信「接收消息」配置（可直接在此处写死）
// 注意：必须与企业微信后台配置完全一致，否则解密会失败。

// 示例：将下面两行替换为你自己的真实值
export const WECOM_TOKEN = "90a2fbf77d922b132add6f9d7ef93a3b" // 例如："YourWecomToken"
export const WECOM_ENCODING_AES_KEY = "vko1eh5SZamivMqfD6sRSVUHjfNYUiNKwdo8zu96tQk" // 43 位，例如："abcdefghijklmnopqrstuvwxyz0123456789ABCDEFG"

// 提示：若保留空字符串，将回退到读取环境变量 WECOM_TOKEN / WECOM_ENCODING_AES_KEY。
