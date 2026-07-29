"use client"

import { useEffect, useState } from "react"
import { NewsArticleLayout } from "@/components/news-article-layout"
import { getArticlePath, getSmartRelatedArticles, type Article } from "../utils/relatedArticles"

const articleData = {
  id: "muhammad-yunus-meeting-2026",
  date: "May 19, 2026",
  title: "Nobel Peace Prize Laureate Muhammad Yunus Meets Born International Founder Dr. Li Wencheng",
  subtitle:
    "Talks in Dhaka focus on localized medical technology, biopharmaceutical cooperation and inclusive healthcare",
  author: "Born International Editorial Team",
  readTime: "6 min read",
  category: "Company News",
  image: "/news/muhammad-yunus-meeting-2026/image1.jpg",
  imagePosition: "center top",
  content: `
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
  <p class="text-lg leading-relaxed text-slate-700 font-medium">Dhaka, May 19, 2026 — Dr. Li Wencheng, founder of Born International and Lifetime Honorary Vice Chairman of the SCO Industrialists Committee, met Professor Muhammad Yunus, 2006 Nobel Peace Prize laureate and former Chief Adviser of Bangladesh's interim government, at the Chief Adviser's Office in Dhaka.</p>
</div>

<p>The two sides held in-depth talks on the development of Chinese healthcare industries, the localization of advanced medical technology and the creation of more inclusive healthcare systems in developing markets. The meeting established a clear shared objective: cooperation should build sustainable local capabilities, not stop at product sales.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-[32rem] rounded-lg overflow-hidden bg-slate-100">
    <img src="/news/muhammad-yunus-meeting-2026/image1.jpg" alt="Dr. Li Wencheng meets Professor Muhammad Yunus in Dhaka on May 19, 2026" class="w-full h-full object-cover object-top" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Dr. Li Wencheng and Professor Muhammad Yunus during their meeting in Dhaka on May 19, 2026.</p>
</div>

<h2>A shared approach to localized development</h2>
<p>During the discussion, Dr. Li introduced Born International's work in building industrial cooperation bridges between China and developing countries. The company combines mature Chinese medical technologies and products with localized production, technical services, talent development and supply-chain construction.</p>

<p>Dr. Li emphasized that Born International's goal is not simply to conduct trade. Its model is designed to transfer suitable technologies to local markets and enable partners to develop long-term healthcare capacity. He also outlined the company's practical experience in Russia and the CIS, including cooperation involving automated blood-collection robots and high-end laboratory equipment.</p>

<p>Professor Yunus expressed strong support for this localization principle. He said that the model could help address Bangladesh's shortage of clinical resources and its dependence on imported high-end medical equipment, while making healthcare technology more accessible to local communities.</p>

<h2>Three areas of cooperation</h2>
<div class="grid gap-4 my-8 md:grid-cols-3">
  <div class="rounded-xl border border-blue-100 bg-blue-50 p-5">
    <h3 class="mt-0 text-lg font-semibold text-blue-900">Medical devices</h3>
    <p class="mb-0 text-sm text-slate-700">Introduce suitable high-end Chinese medical equipment and strengthen the diagnostic and treatment capabilities of local hospitals.</p>
  </div>
  <div class="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
    <h3 class="mt-0 text-lg font-semibold text-emerald-900">Biopharmaceuticals</h3>
    <p class="mb-0 text-sm text-slate-700">Explore cooperation in research, manufacturing and localization to support the development of Bangladesh's biopharmaceutical industry.</p>
  </div>
  <div class="rounded-xl border border-violet-100 bg-violet-50 p-5">
    <h3 class="mt-0 text-lg font-semibold text-violet-900">Inclusive healthcare</h3>
    <p class="mb-0 text-sm text-slate-700">Evaluate POCT and in-vitro diagnostic solutions that can bring more convenient and affordable services to grassroots communities.</p>
  </div>
</div>

<p>Professor Yunus also expressed willingness to support deeper cooperation between Born International and Bangladesh in medical equipment and biopharmaceuticals. He noted that mutually beneficial projects could create wider international opportunities for Chinese companies while helping developing countries improve essential healthcare services.</p>

<h2>A milestone for Born International in South Asia</h2>
<p>The meeting marks an important milestone in Born International's expansion in South Asia. Building on the consensus reached in Dhaka, the company will accelerate discussions with prospective local partners, identify projects suitable for localization and assess how its experience in other international markets can be adapted to Bangladesh.</p>

<p>Born International will continue working to connect Chinese healthcare capabilities with practical local needs. Through technology transfer, talent training, localized services and supply-chain development, the company aims to support sustainable healthcare capacity and bring high-quality medical services to more people.</p>

<h2>About Professor Muhammad Yunus</h2>
<p>Professor Muhammad Yunus is a Bangladeshi economist and social entrepreneur best known as the founder of Grameen Bank and a pioneer of modern microcredit. He and Grameen Bank received the 2006 Nobel Peace Prize for their work advancing economic and social development from below. His experience in inclusive finance has influenced development programmes in more than 100 countries.</p>

<p class="text-sm text-slate-500">Source: Born Capital International Department. Original Chinese article published May 20, 2026; the date above reflects the meeting date.</p>
  `,
  tags: [
    "Bangladesh",
    "Muhammad Yunus",
    "Healthcare",
    "Medical Technology",
    "Biopharmaceuticals",
    "Localization",
    "Inclusive Healthcare",
  ],
}

export default function MuhammadYunusMeeting2026Page() {
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([])

  useEffect(() => {
    const currentArticle: Article = { ...articleData, excerpt: articleData.subtitle }
    setRelatedArticles(getSmartRelatedArticles(currentArticle, 3))
    window.scrollTo(0, 0)
  }, [])

  return (
    <NewsArticleLayout
      article={articleData}
      relatedArticles={relatedArticles}
      getArticlePath={(id) => getArticlePath(String(id))}
    />
  )
}
