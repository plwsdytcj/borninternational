"use client"
import { ArrowLeft, Calendar, Eye, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getSmartRelatedArticles, getArticlePath, type Article } from "../utils/relatedArticles"

const articleData = {
  id: "china-russia-investment-committee-2025",
  date: "November 1, 2025",
  title: "China–Russia Intergovernmental Investment Cooperation Committee Holds Meeting in Beijing; Murmansk Governor Andrey Chibis Delivers Speech",
  subtitle: "Talks highlight $200bn+ project pipeline, Arctic development and Northern Sea Route opportunities",
  author: "Born International Editorial Team",
  readTime: "6 min read",
  category: "Company News",
  image: "/news/china-russia-investment-committee-2025/image1.jpeg",
  content: `
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
  <p class="text-lg leading-relaxed text-slate-700 font-medium">
    Beijing — The China–Russia Intergovernmental Investment Cooperation Committee convened in Beijing. First Deputy Prime Minister Denis Manturov led the Russian delegation. Both sides reviewed joint investment projects and measures to expand practical cooperation. Murmansk Region Governor Andrey Chibis addressed Arctic development priorities.
  </p>
  <p class="text-sm text-slate-600 mt-3">Bilateral trade has more than doubled in four years to $245bn. A renewed agreement on promotion and mutual protection of investments is expected to take effect in December, easing approvals and strengthening investor safeguards.</p>
  </div>

<h2>Key Points from Denis Manturov</h2>
<p>“The Committee's current priority portfolio exceeds $200bn. Over half is concentrated in 63 major projects, 46 already in practical implementation.” Sectors include transport and logistics, metallurgy, chemicals, machinery, forestry, agriculture and trade. New initiatives this year include automotive production across three Russian regions and alumina production in Hebei, China.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/china-russia-investment-committee-2025/image2.jpeg" alt="Murmansk Region Governor Andrey Chibis addresses the conference" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Murmansk Region Governor Andrey Chibis addresses the conference</p>
</div>

<h2>Arctic Strategy and the Northern Sea Route</h2>
<p>Governor Chibis emphasized Murmansk’s role as a flagship of Russian Arctic development and a key deep‑water, ice‑free port on the Northern Sea Route. The region maintains strong trade growth with China, with exports spanning nickel products, fish and seafood, and iron ore concentrate.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/china-russia-investment-committee-2025/image3.jpeg" alt="Murmansk—largest ice‑free port on the Arctic Ocean coast" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Murmansk — the largest ice‑free port on the Arctic Ocean coast</p>
</div>

<p>Incentives across the Russian Arctic include tax preferences for investment projects and free customs zones. Projects tied to the Trans‑Arctic Transport Corridor and the Northern Sea Route are accelerating. A dedicated State Council Commission is driving capacity expansion.</p>

<h2>Infrastructure and Industrial Development</h2>
<p>Murmansk is expanding as a transport hub: port handling is set to reach 45 million tons annually by 2026 and triple by 2030. The Lavna coal terminal (18 million tons annually) is operational, with new rail and bridge infrastructure delivered. The region is also growing shipbuilding and repair capabilities.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/china-russia-investment-committee-2025/image4.png" alt="Project map and logistics development along the Northern Sea Route" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Logistics and industrial projects supporting the Northern Sea Route</p>
</div>

<p>Murmansk Arctic University, with industry partners, is strengthening maritime education to meet the workforce needs of the expanding Arctic economy.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/china-russia-investment-committee-2025/image5.jpeg" alt="Beijing meeting venue for the Intergovernmental Investment Cooperation Committee" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">China–Russia Intergovernmental Investment Cooperation Committee meeting in Beijing</p>
</div>
`,
  tags: ["Investment", "Committee", "Beijing", "Murmansk", "Arctic", "Northern Sea Route"],
}

export default function ChinaRussiaInvestmentCommitteePage() {
  const router = useRouter()
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 shadow-md">
        <button onClick={() => router.push("/")} className="flex items-center focus:outline-none" aria-label="Back to Home">
          <Image src="/logo/born_logo_white.png" alt="BORN International logo" width={120} height={48} className="h-12 w-auto" />
        </button>
        <div className="flex items-center space-x-6">
          <button onClick={() => router.push("/")} className="flex items-center space-x-2 text-white/90 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <Image src={articleData.image} alt={articleData.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Article Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
              <span className="bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                {articleData.category}
              </span>
              <div className="flex items-center space-x-1 sm:space-x-2 text-white/80">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{articleData.date}</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 text-white/80">
                <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{articleData.readTime}</span>
              </div>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-3 sm:mb-4 leading-tight">
              {articleData.title}
            </h1>
            {articleData.subtitle && (
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-3 sm:mb-4 max-w-3xl">
                {articleData.subtitle}
              </p>
            )}
            <div className="flex items-center text-white/80">
              <span className="text-xs sm:text-sm">By {articleData.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                <div className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: articleData.content }} />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-medium text-slate-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {articleData.tags.map((tag, index) => (
                    <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover:bg-slate-200 transition-colors cursor-pointer">#{tag}</span>
                  ))}
                </div>
              </div>

              {/* Share and Actions */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-2">
                      <Bookmark className="w-4 h-4" />
                      <span>Bookmark</span>
                    </Button>
                  </div>
                  <div className="text-sm text-slate-500">Published on {articleData.date}</div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.length > 0 ? (
                      relatedArticles.map((article) => (
                        <Link key={article.id} href={getArticlePath(article.id)}>
                          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            <CardContent className="p-0">
                              <div className="relative h-24">
                                <Image src={article.image} alt={article.title} fill className="object-cover rounded-t-lg" />
                              </div>
                              <div className="p-3">
                                <p className="text-xs text-slate-500 mb-1">{article.date}</p>
                                <h4 className="text-sm font-medium text-slate-900 mb-1 line-clamp-2">{article.title}</h4>
                                <p className="text-xs text-slate-600 line-clamp-2">{article.excerpt}</p>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-sm text-slate-500">No related articles found</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-6 bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Stay Updated</h3>
                  <p className="text-sm text-slate-600 mb-4">Subscribe to our newsletter for the latest news and insights.</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Image src="/logo/born_logo_white.png" alt="BORN International logo" width={120} height={48} className="h-12 w-auto" />
              </div>
              <p className="text-slate-400 text-sm">A global investment platform focusing on early-stage high-tech startups.</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">The Fund</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">About the fund</a></li>
                <li><a href="#" className="hover:text-white">Investment strategy</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-white">Holdings</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Responsible Investment</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">Our approach</a></li>
                <li><a href="#" className="hover:text-white">Climate</a></li>
                <li><a href="#" className="hover:text-white">Ownership</a></li>
                <li><a href="#" className="hover:text-white">Exclusions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">About Born International</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">Organization</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><Link href="/news" className="hover:text-white">Press</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 Born International. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">Terms of Use</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
