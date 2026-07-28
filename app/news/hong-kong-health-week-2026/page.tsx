"use client"

import { useEffect, useState } from "react"
import { NewsArticleLayout } from "@/components/news-article-layout"
import { getArticlePath, getSmartRelatedArticles, type Article } from "../utils/relatedArticles"

const articleData = {
  id: "hong-kong-health-week-2026",
  date: "May 11, 2026",
  title: "Global Healthcare Leaders Discuss New Breakthroughs as Dr. Li Wencheng Attends Hong Kong International Healthcare Week",
  subtitle: "Born International explores healthcare innovation, international market access and China-Russia medical cooperation during the three-day event",
  author: "Born International Editorial Team",
  readTime: "7 min read",
  category: "Company News",
  image: "/news/hong-kong-health-week-2026/image1.png",
  content: `
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
  <p class="text-lg leading-relaxed text-slate-700 font-medium">Hong Kong, May 11–13, 2026 — The fifth International Healthcare Week opened at the Hong Kong Convention and Exhibition Centre under the theme “Fostering Medical Innovation.” Dr. Li Wencheng, founder of Born International and Vice Chairman in St. Petersburg of the SCO Industrialists Committee, attended the three-day programme as a representative engaged in China–Russia healthcare cooperation.</p>
</div>

<p>The event brought together more than 90 healthcare officials, research leaders, industry executives and investment representatives from over 30 countries and regions. It was held alongside the sixth Asia Summit on Global Health and the 17th Hong Kong International Medical and Healthcare Fair.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
    <img src="/news/hong-kong-health-week-2026/image2.jpeg" alt="Opening session of the Asia Summit on Global Health" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">The opening programme highlighted Hong Kong's role in connecting healthcare innovation with international markets.</p>
</div>

<h2>Following global healthcare priorities</h2>
<p>Dr. Li attended the principal forum sessions and reviewed policy and industry discussions covering medical robotics, artificial-intelligence-assisted diagnosis and cross-border healthcare cooperation. The programme provided Born International with a direct view of emerging technologies, regulatory priorities and international partnership models.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/hong-kong-health-week-2026/image3.webp" alt="Opening remarks at the Asia Summit on Global Health" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Opening remarks at the Asia Summit on Global Health in Hong Kong.</p>
</div>

<h2>Industry dialogue on international market access</h2>
<p>During the event, Dr. Li exchanged views with healthcare industry representatives from Russia, Southeast Asia and Europe. The discussions covered the overseas expansion of Chinese medical equipment, international market-access requirements and the development of local sales and service systems.</p>

<p>In exchanges with representatives of the Russian biopharmaceutical sector, the parties examined the market prospects for Chinese high-end medical equipment, registration procedures and channel development. The conversations created a foundation for continued work on automatic blood-collection robots, laboratory equipment and other healthcare projects.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
    <img src="/news/hong-kong-health-week-2026/image4.webp" alt="Healthcare business matching sessions during International Healthcare Week" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Business matching sessions connected healthcare companies, investors and operating partners.</p>
</div>

<h2>Reviewing medical robotics and diagnostic technologies</h2>
<p>Dr. Li also visited the 17th Hong Kong International Medical and Healthcare Fair, which gathered more than 300 exhibitors from ten countries and regions. He focused on automatic blood-collection robots, surgical robots and rehabilitation robots, examining their technical parameters and application scenarios.</p>

<p>These technologies combine artificial intelligence, computer vision and precision control and are directly relevant to Born International's work on introducing automated blood-collection solutions to Russia. Dr. Li also reviewed developments in biopharmaceuticals, in-vitro diagnostics and telemedicine and exchanged views with exhibiting companies.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
    <img src="/news/hong-kong-health-week-2026/image5.webp" alt="Born International representatives at the Asia Summit on Global Health" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Born International representatives attended the summit's policy, industry and cooperation programme.</p>
</div>

<h2>Advancing China-Russia healthcare cooperation</h2>
<p>The visit supported Born International's continuing work to connect Chinese medical companies with Russia and the CIS. The company plans to use the findings from Hong Kong to refine product selection, accelerate registration work and build local market and after-sales partnerships for suitable Chinese medical equipment.</p>

<p>Born International will also continue identifying Russian biomedical technologies and research outcomes that may support two-way cooperation with China, strengthening a practical healthcare collaboration network between the two markets.</p>

<p class="text-sm text-slate-500">Source article published by Born Capital International Department on May 19, 2026. The date above reflects the event opening rather than the publication date.</p>
  `,
  tags: ["Healthcare", "Hong Kong", "ASGH", "Medical Robotics", "China-Russia Cooperation", "Market Access"],
}

export default function HongKongHealthWeek2026Page() {
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([])
  useEffect(() => {
    const currentArticle: Article = { ...articleData, excerpt: articleData.subtitle }
    setRelatedArticles(getSmartRelatedArticles(currentArticle, 3))
    window.scrollTo(0, 0)
  }, [])
  return <NewsArticleLayout article={articleData} relatedArticles={relatedArticles} getArticlePath={getArticlePath} />
}
