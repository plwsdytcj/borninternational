"use client"

import { useEffect, useState } from "react"
import { NewsArticleLayout } from "@/components/news-article-layout"
import { getArticlePath, getSmartRelatedArticles, type Article } from "../utils/relatedArticles"

const articleData = {
  id: "ranepa-emba-china-study-tour-2026",
  date: "July 21, 2026",
  title: "Born International Organizes RANEPA EMBA China Study Tour Across Shanghai, Hangzhou and Wuzhen",
  subtitle:
    "An 18-member delegation of Russian business leaders explored finance, advanced manufacturing, robotics and cultural innovation during a six-day programme",
  author: "Born International Editorial Team",
  readTime: "7 min read",
  category: "Company News",
  image: "/news/ranepa-emba-china-study-tour-2026/cover.jpg",
  imagePosition: "center 38%",
  content: `
<div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg mb-8">
  <p class="text-lg leading-relaxed text-slate-700 font-medium">From June 28 to July 3, 2026, Born International organized and delivered the China study programme for an Executive MBA delegation from the Russian Presidential Academy of National Economy and Public Administration (RANEPA). The delegation brought together 18 senior Russian business leaders for six days of company visits and industry dialogue in Shanghai, Hangzhou and Wuzhen.</p>
</div>

<p>The participants represented strategic sectors including oil and gas, logistics, information technology, finance and law, and hospitality management. Across three cities, they visited more than eight benchmark companies and innovation institutions to examine how Chinese businesses combine financial technology, intelligent manufacturing, cultural heritage and future-facing technology.</p>

<div class="my-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
  <div class="rounded-xl bg-slate-50 p-4 text-center"><p class="text-3xl font-semibold text-slate-900">6</p><p class="mt-1 text-sm text-slate-600">programme days</p></div>
  <div class="rounded-xl bg-slate-50 p-4 text-center"><p class="text-3xl font-semibold text-slate-900">3</p><p class="mt-1 text-sm text-slate-600">Chinese cities</p></div>
  <div class="rounded-xl bg-slate-50 p-4 text-center"><p class="text-3xl font-semibold text-slate-900">18</p><p class="mt-1 text-sm text-slate-600">business leaders</p></div>
  <div class="rounded-xl bg-slate-50 p-4 text-center"><p class="text-3xl font-semibold text-slate-900">8+</p><p class="mt-1 text-sm text-slate-600">company visits</p></div>
</div>

<h2>Shanghai: finance and manufacturing in dialogue</h2>
<p>Shanghai was the delegation's first stop. As one of China's leading economic and financial centres, the city offered a close look at the relationship between the real economy, financial technology and advanced manufacturing.</p>

<div class="my-8">
  <img src="/news/ranepa-emba-china-study-tour-2026/spd-bank-group.jpg" alt="RANEPA EMBA delegation and hosts at the SPD Bank Financial Technology Centre in Shanghai" class="h-auto w-full rounded-lg" />
  <p class="mt-2 text-center text-sm text-slate-500">The RANEPA EMBA delegation and hosts at the SPD Bank Financial Technology Centre in Shanghai.</p>
</div>

<h3>Digital finance at SPD Bank's Financial Technology Centre</h3>
<p>At the Financial Technology Centre of Shanghai Pudong Development Bank, the delegation studied how a major Chinese bank approaches digital transformation. The visit focused on practical applications of artificial intelligence in risk control, customer service and operational management.</p>
<p>The two sides exchanged views on fintech innovation, cross-border financial services and digital transformation. Delegates expressed strong interest in the depth of technology deployment across China's banking sector and in potential cooperation with Russian enterprises.</p>

<div class="my-8">
  <img src="/news/ranepa-emba-china-study-tour-2026/spd-bank-session.jpg" alt="Welcome and briefing session for the RANEPA delegation at the SPD Bank Financial Technology Centre" class="h-auto w-full rounded-lg" />
  <p class="mt-2 text-center text-sm text-slate-500">A welcome and briefing session at the SPD Bank Financial Technology Centre.</p>
</div>

<h3>Industrial motion control and intelligent manufacturing</h3>
<p>The delegation also visited Weihong, a Chinese provider of industrial motion-control solutions. From the showroom to the production line, participants examined digital-control systems, servo-drive technologies and the capabilities supporting China's high-end equipment manufacturing sector.</p>
<p>Discussions covered industrial automation, digital factories and the complementary strengths of Russian and Chinese manufacturing. The programme also included a visit to a national-level industrial innovation platform in the Yangtze River Delta, where delegates explored technology transfer, industry-university-research collaboration and the commercialization of advanced materials, smart manufacturing and green-energy solutions.</p>

<div class="my-8 grid gap-4 md:grid-cols-2">
  <div>
    <img src="/news/ranepa-emba-china-study-tour-2026/weihong-factory.jpg" alt="RANEPA EMBA delegation visits Weihong's intelligent manufacturing facilities" class="h-auto w-full rounded-lg" />
    <p class="mt-2 text-center text-sm text-slate-500">A tour of Weihong's intelligent manufacturing facilities.</p>
  </div>
  <div>
    <img src="/news/ranepa-emba-china-study-tour-2026/weihong-exchange.jpg" alt="Technical exchange between the RANEPA EMBA delegation and Weihong representatives" class="h-auto w-full rounded-lg" />
    <p class="mt-2 text-center text-sm text-slate-500">Technical exchange with Weihong representatives.</p>
  </div>
</div>

<div class="my-8 grid gap-4 md:grid-cols-2">
  <div>
    <img src="/news/ranepa-emba-china-study-tour-2026/innovation-center.jpg" alt="National Innovation Center in the Yangtze River Delta" class="h-auto w-full rounded-lg" />
    <p class="mt-2 text-center text-sm text-slate-500">The delegation visits a national industrial innovation platform.</p>
  </div>
  <div>
    <img src="/news/ranepa-emba-china-study-tour-2026/innovation-platform-visit.png" alt="Delegates study the development of the Yangtze River Delta innovation platform" class="h-auto w-full rounded-lg" />
    <p class="mt-2 text-center text-sm text-slate-500">Delegates review the platform's development and industrial capabilities.</p>
  </div>
</div>

<h2>Hangzhou: cultural heritage meets future technology</h2>
<p>After Shanghai, the group travelled by high-speed rail to Hangzhou. The city combined a deep cultural legacy with the energy of China's digital economy, giving the Russian business leaders another perspective on the country's development.</p>

<h3>Wensli Silk: heritage renewed through modern production</h3>
<p>At Wensli Silk, delegates moved from displays of traditional silk craftsmanship to automated and intelligent production lines. The visit showed how a centuries-old industry can use technology and new business models to create contemporary value while preserving cultural identity.</p>
<p>A hands-on workshop allowed participants to experience the character of bespoke silk and better understand the relationship between craftsmanship, design and modern manufacturing.</p>

<div class="my-8">
  <img src="/news/ranepa-emba-china-study-tour-2026/wensli-silk.jpg" alt="RANEPA EMBA delegation during its cultural and production visit to Wensli Silk in Hangzhou" class="h-auto w-full rounded-lg" />
  <p class="mt-2 text-center text-sm text-slate-500">The delegation during its cultural and production visit to Wensli Silk in Hangzhou.</p>
</div>

<h3>China's robotics industry</h3>
<p>The delegation then visited two leading Chinese quadruped-robotics companies. Live demonstrations and technical presentations covered industrial inspection, special operations, consumer applications and enterprise-level solutions.</p>
<p>Senior representatives from the delegation's oil and gas, logistics and construction sectors highlighted the potential of robotics in Russian industrial settings and expressed interest in deeper engagement with Chinese technology partners.</p>

<h2>Wuzhen: the internet economy and the culture of a water town</h2>
<p>Wuzhen, the permanent venue of the World Internet Conference, was the final stop. At the Light of Internet Expo Centre, the delegation reviewed the development of China's digital economy and the ways emerging technologies are moving into practical use.</p>
<p>The programme also connected innovation with culture. Among Wuzhen's tiled roofs, canals and stone lanes, delegates joined traditional craft activities and experienced the cultural character of the Jiangnan water towns. This balance between technology and heritage brought the six-day programme to a distinctive close.</p>

<div class="my-8 grid gap-4 md:grid-cols-2">
  <div>
    <img src="/news/ranepa-emba-china-study-tour-2026/wuzhen-boat.jpg" alt="Members of the RANEPA EMBA delegation experience Wuzhen by boat" class="h-auto w-full rounded-lg" />
    <p class="mt-2 text-center text-sm text-slate-500">Delegation members experience Wuzhen's canal culture by boat.</p>
  </div>
  <div>
    <img src="/news/ranepa-emba-china-study-tour-2026/wuzhen-night.jpg" alt="Wuzhen water town illuminated at night" class="h-auto w-full rounded-lg" />
    <p class="mt-2 text-center text-sm text-slate-500">Wuzhen's historic water-town landscape at night.</p>
  </div>
</div>

<h2>A platform for long-term China-Russia business exchange</h2>
<p>The study tour was designed as more than a sequence of visits. It created direct dialogue between Russian decision-makers and Chinese companies across finance, manufacturing, robotics, innovation and culture, helping participants identify practical areas for future cooperation.</p>
<blockquote>
  <p>Six days, three cities and more than eight benchmark companies gave the delegation a multidimensional view of China's business ecosystem - from fintech and industrial production to cultural innovation and future robotics.</p>
</blockquote>
<p>Born International provided full-cycle programme planning, company matching, visit coordination and on-the-ground delivery. The project reflects the company's continuing role as a bridge between China and Russia, supporting premium business delegations, cross-border market development and investment and commercial consulting.</p>

<p class="text-sm text-slate-500">Source material published by the Born Capital International Department on July 21, 2026. The RANEPA EMBA China study programme took place from June 28 to July 3, 2026.</p>
  `,
  tags: ["RANEPA", "EMBA", "China-Russia Cooperation", "Business Delegation", "Shanghai", "Hangzhou", "Wuzhen", "Advanced Manufacturing"],
}

export default function RanepaEmbaChinaStudyTour2026Page() {
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
