"use client"

import { useEffect, useState } from "react"
import { NewsArticleLayout } from "@/components/news-article-layout"
import { getArticlePath, getSmartRelatedArticles, type Article } from "../utils/relatedArticles"

const articleData = {
  id: "spief-2026-strategic-cooperation",
  date: "June 19, 2026",
  title: "Born International Signs Tripartite Strategic Cooperation Agreement at SPIEF 2026",
  subtitle:
    "Born International, the Institute of Experimental Medicine and the Center for Artificial Intelligence for SCO+ Countries establish a long-term cooperation framework",
  author: "Born International Editorial Team",
  readTime: "6 min read",
  category: "Company News",
  image: "/news/spief-2026-strategic-cooperation/image1.jpg",
  content: `
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
  <p class="text-lg leading-relaxed text-slate-700 font-medium">St. Petersburg, June 3-6, 2026 - During the 29th St. Petersburg International Economic Forum, Born International signed a strategic cooperation agreement with Russia's Institute of Experimental Medicine and the Center for Artificial Intelligence for SCO+ Countries. The agreement establishes a long-term framework for collaboration in artificial intelligence, life sciences, biomedical research, pharmaceutical development and healthcare innovation.</p>
</div>

<p>The agreement was signed by Born International founder Dr. Li Wencheng, Institute of Experimental Medicine representative Oleg Ergashev and Center for Artificial Intelligence for SCO+ Countries representative Alexander Anufriev.</p>

<p>The signing marked an important outcome of Born International's programme at SPIEF 2026 and expanded the company's work connecting Chinese enterprises with scientific institutions, technology platforms and industrial partners in Russia and the wider SCO region.</p>

<div class="my-8">
  <div class="relative w-full h-80 md:h-[32rem] rounded-lg overflow-hidden">
    <img src="/news/spief-2026-strategic-cooperation/image2.jpg" alt="Dr. Li Wencheng signs the tripartite strategic cooperation agreement at SPIEF 2026" class="w-full h-full object-cover object-center" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Representatives of Born International, the Institute of Experimental Medicine and the Center for Artificial Intelligence for SCO+ Countries sign the agreement at SPIEF 2026.</p>
</div>

<h2>A tripartite framework for scientific and medical cooperation</h2>
<p>The three parties agreed to build a stable cooperation mechanism across natural sciences, life-science research, biomedicine, pharmaceutical research and development, AI-enabled healthcare, international academic exchange and the commercialization of scientific results.</p>
<p>The framework brings together scientific research institutions, artificial-intelligence platforms and international industrial resources. Its purpose is to accelerate the movement of promising research from laboratories into practical medical applications and support a more modern, intelligent and efficient healthcare system.</p>

<div class="my-8">
  <div class="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/spief-2026-strategic-cooperation/image3.jpg" alt="SPIEF 2026 forum participants in St. Petersburg" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">SPIEF 2026 brought together government, research and business leaders from around the world.</p>
</div>

<h2>From research collaboration to real-world healthcare applications</h2>
<p>The agreement sets out cooperation in scientific research, professional exchange and the transfer of innovation into clinical and industrial use. The parties will explore joint work in biomedicine, pharmacology, medical AI and other areas where advanced research can improve diagnosis, treatment and healthcare delivery.</p>
<p>By combining complementary capabilities in research, artificial intelligence and international project implementation, the partnership aims to create a practical route for applying scientific outcomes across borders.</p>
<blockquote>
  <p>The cooperation demonstrates the potential created when scientific research and artificial intelligence develop together. The parties will work to move innovation from the laboratory into practical use and provide new momentum for a more intelligent and efficient healthcare system.</p>
</blockquote>

<div class="my-8">
  <div class="relative w-full h-80 md:h-[32rem] rounded-lg overflow-hidden">
    <img src="/news/spief-2026-strategic-cooperation/image4.jpg" alt="Dr. Li Wencheng and partner representatives after signing the SPIEF 2026 agreement" class="w-full h-full object-cover object-center" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">The partners exchange views after completing the signing ceremony.</p>
</div>

<h2>Building on cooperation with the Institute of Experimental Medicine</h2>
<p>Founded in 1890, the Institute of Experimental Medicine is one of Russia's longest-established and most influential life-science and medical research institutions. Its work spans neuroscience, immunology, biomedicine, pharmacology and clinical research.</p>
<p>The SPIEF agreement builds on Born International's continuing engagement with the institute and creates a broader platform for combining Russian scientific expertise with Chinese industrial capabilities, investment resources and international market access.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
    <img src="/news/spief-2026-strategic-cooperation/image5.jpg" alt="Institute of Experimental Medicine in St. Petersburg" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">The Institute of Experimental Medicine in St. Petersburg, established in 1890.</p>
</div>

<h2>Born International's role in cross-border innovation</h2>
<p>Born International will continue using its international operating network to connect governments, research institutes, technology platforms, industrial capital and companies. The company will support project development, resource coordination and the cross-border transfer of suitable innovations between China, Russia and other SCO markets.</p>
<p>The new cooperation framework represents another step in Born International's strategy of advancing international scientific collaboration and helping high-potential technologies move from research into scalable industrial and healthcare applications.</p>

<div class="my-8">
  <div class="relative w-full h-80 md:h-[32rem] rounded-lg overflow-hidden">
    <img src="/news/spief-2026-strategic-cooperation/image6.jpg" alt="Dr. Li Wencheng speaks during the SPIEF 2026 signing programme" class="w-full h-full object-cover object-center" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Born International founder Dr. Li Wencheng speaks during the cooperation programme at SPIEF 2026.</p>
</div>

<p class="text-sm text-slate-500">Source article published by Born Capital International Department on June 19, 2026. The cooperation agreement was signed during SPIEF 2026, held from June 3 to June 6 in St. Petersburg.</p>
  `,
  tags: ["SPIEF 2026", "Artificial Intelligence", "Healthcare", "Life Sciences", "Institute of Experimental Medicine", "SCO+", "China-Russia Cooperation"],
}

export default function Spief2026StrategicCooperationPage() {
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([])
  useEffect(() => {
    const currentArticle: Article = { ...articleData, excerpt: articleData.subtitle }
    setRelatedArticles(getSmartRelatedArticles(currentArticle, 3))
    window.scrollTo(0, 0)
  }, [])
  return <NewsArticleLayout article={articleData} relatedArticles={relatedArticles} getArticlePath={getArticlePath} />
}