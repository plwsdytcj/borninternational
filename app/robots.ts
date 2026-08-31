import type { MetadataRoute } from "next"

import { SITE_URL } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "Applebot",
          "YandexBot",
          "Baiduspider",
        ],
        allow: "/",
      },
      // Training crawler policy is intentionally separate from search/citation crawlers.
      // It is currently allowed to support the company's AI discoverability objective.
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/wecom/", "/news/template", "/portfolio/new-company"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
