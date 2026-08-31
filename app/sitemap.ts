import type { MetadataRoute } from "next"

import { SITE_URL } from "@/lib/seo"

const pages = [
  ["/", "2026-08-31", "weekly", 1],
  ["/business-new", "2026-08-31", "weekly", 0.95],
  ["/portfolio", "2026-08-31", "weekly", 0.9],
  ["/global", "2026-08-31", "monthly", 0.85],
  ["/mother-fund", "2026-08-31", "monthly", 0.8],
  ["/ai-company", "2026-08-31", "monthly", 0.8],
  ["/china-access", "2026-08-31", "monthly", 0.85],
  ["/contact", "2026-08-31", "monthly", 0.7],
  ["/case-studies/geospatial-russia-market-entry", "2026-08-31", "monthly", 0.9],
  ["/news", "2026-08-31", "weekly", 0.9],
  ["/news/ranepa-emba-china-study-tour-2026", "2026-07-21", "yearly", 0.8],
  ["/news/apec-healthcare-digitalization-forum-2026", "2026-07-18", "yearly", 0.8],
  ["/news/spief-2026-strategic-cooperation", "2026-06-19", "yearly", 0.8],
  ["/news/muhammad-yunus-meeting-2026", "2026-05-19", "yearly", 0.75],
  ["/news/hong-kong-health-week-2026", "2026-05-11", "yearly", 0.75],
  ["/news/moscow-startup-village-2025", "2025-05-29", "yearly", 0.7],
  ["/news/brics-municipal-forum-2025", "2025-11-21", "yearly", 0.75],
  ["/news/institute-of-experimental-medicine-2025", "2025-11-22", "yearly", 0.75],
  ["/news/china-russia-investment-committee-2025", "2025-11-01", "yearly", 0.75],
  ["/news/murmansk-governor-meeting-2025", "2025-11-02", "yearly", 0.7],
  ["/news/global-market-outlook", "2024-01-15", "yearly", 0.5],
  ["/news/fourth-quarter-results", "2024-01-20", "yearly", 0.5],
  ["/portfolio/boson-quantum", "2026-08-31", "monthly", 0.7],
  ["/portfolio/bubi-blockchain", "2026-08-31", "monthly", 0.7],
  ["/portfolio/chengdu-zhongkang-dacheng-environmental-protection-technology-co-ltd", "2026-08-31", "monthly", 0.65],
  ["/portfolio/china-carbon-zero-and-technology-group", "2026-08-31", "monthly", 0.65],
  ["/portfolio/kunwei-technology", "2026-08-31", "monthly", 0.7],
  ["/portfolio/shanghai-droid-robotics-co-ltd-droidup", "2026-08-31", "monthly", 0.7],
  ["/portfolio/shenzhen-huazhi-intelligent-manufacturing-technology-co-ltd", "2026-08-31", "monthly", 0.65],
  ["/portfolio/token-cloud-shanghai-technology-co-ltd", "2026-08-31", "monthly", 0.65],
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(([path, lastModified, changeFrequency, priority]) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }))
}
