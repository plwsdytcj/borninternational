"use client"
import { ArrowLeft, Calendar, Eye, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getSmartRelatedArticles, getArticlePath, type Article } from "../utils/relatedArticles"
import { NewsArticleLayout } from "@/components/news-article-layout"

const articleData = {
  id: "murmansk-governor-meeting-2025",
  date: "November 2, 2025",
  title: "Murmansk Governor Andrey Chibis Meets Born International Representatives in Beijing",
  subtitle: "Arctic development, Northern Sea Route logistics and sector cooperation discussed",
  author: "Born International Editorial Team",
  readTime: "4 min read",
  category: "Company News",
  image: "/news/murmansk-governor-meeting-2025/image1.jpeg",
  content: `
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
  <p class="text-lg leading-relaxed text-slate-700 font-medium">
    Beijing — Murmansk Region Governor Andrey Chibis met with Born International to explore Arctic investment potential and cooperation in logistics, fisheries, mining and shipbuilding.
  </p>
</div>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/murmansk-governor-meeting-2025/image1.jpeg" alt="Meeting in Beijing with Murmansk Governor Andrey Chibis" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Born International meets with Murmansk Region Governor Andrey Chibis in Beijing</p>
</div>

<p>The Murmansk Region is a key Russian Arctic territory, home to Russia's largest ice‑free port and a strategic hub for the Northern Sea Route.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/murmansk-governor-meeting-2025/image2.png" alt="Murmansk government promotes Arctic development projects" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Murmansk regional government promotes Arctic development projects</p>
</div>

<p>Discussion covered container shipping via Murmansk’s ice‑free port, fisheries, mining and shipbuilding (including vessels for NSR cargo). The region welcomes Chinese investment, offering tax incentives and free customs zones.</p>

<p>Born International expressed strong interest in enabling Chinese capital and technology participation across energy, shipping, infrastructure and tourism to support sustainable Arctic development.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/murmansk-governor-meeting-2025/image3.jpeg" alt="Group photo after the meeting" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Group photo of Born International and the Murmansk delegation</p>
</div>
`,
  tags: ["Murmansk", "Arctic", "NSR", "Logistics", "Investment"],
}

export default function MurmanskGovernorMeetingPage() {
  const [isClient, setIsClient] = useState(false)
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([])

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }

    const currentArticle: Article = {
      id: articleData.id,
      title: articleData.title,
      excerpt: articleData.subtitle || "",
      image: articleData.image,
      date: articleData.date,
      category: articleData.category,
      tags: articleData.tags,
      author: articleData.author,
    }

    const related = getSmartRelatedArticles(currentArticle, 3)
    setRelatedArticles(related)
  }, [])

  if (!isClient) return null

  return <NewsArticleLayout article={articleData} relatedArticles={relatedArticles} getArticlePath={getArticlePath} />
}
