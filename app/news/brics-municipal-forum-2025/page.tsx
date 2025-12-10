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
  id: "brics-municipal-forum-2025",
  date: "November 21, 2025",
  title:
    "Dr. Li Wencheng Invited to Attend BRICS International Municipal Forum, Signs Series of Cooperation Memoranda on Behalf of SCO Business Council",
  subtitle:
    "Deepening practical cooperation and signing MOUs at St. Petersburg BRICS International Municipal Forum",
  author: "Born International Editorial Team",
  readTime: "5 min read",
  category: "Company News",
  image: "/news/brics-municipal-forum-2025/image1.jpeg",
  content: `
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
  <p class="text-lg leading-relaxed text-slate-700 font-medium">
    St. Petersburg — The International Municipal BRICS Forum successfully concluded in Russia, bringing together government representatives, business leaders, and experts from over 70 countries to deepen practical cooperation. Projects between China and Russia occupied a prominent place in the forum’s discussions.
  </p>
</div>

<p class="text-lg leading-relaxed text-slate-700 mb-6">Dr. Li Wencheng, founder of Born International, was invited to participate in the forum and signed a cooperation memorandum on behalf of the Business Council of the Shanghai Cooperation Organization (SCO).</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/brics-municipal-forum-2025/image2.jpeg" alt="Dr. Li Wencheng was invited to participate in the forum" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Dr. Li Wencheng was invited to participate in the forum</p>
</div>

<p>Veronika Arapova, CGTN correspondent in Russia: "Thousands of participants from dozens of countries—behind these numbers lie clear objectives, from seeking business partners to establishing new supply chains. The mission of this forum is not only to discuss topics but to build a stable and efficient cooperation network and exchange cutting-edge development experiences".</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/brics-municipal-forum-2025/image3.jpeg" alt="Forum Focused on Pressing Urban Challenges" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Forum Focused on Pressing Urban Challenges</p>
</div>

<p>Delegates focused on the most pressing issues in urban governance, including smart technology applications, transport development, green energy transition, and environmental protection. Innovative practices from megacities and successful cases from smaller cities sparked lively discussions.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/brics-municipal-forum-2025/image4.jpeg" alt="Dr. Li Wencheng attended the official agreement signing ceremony" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Dr. Li Wencheng attended the official agreement signing ceremony</p>
</div>

<p>Mikhail Cherepanov, Chairman of the Organizing Committee of the International Municipal BRICS Forum: "The core topic of this forum is discussing new regional cooperation agreements. We aim to create platforms for businesses to connect with global metropolitan markets, thereby boosting import-export cooperation—this is a key goal".</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/brics-municipal-forum-2025/image5.jpeg" alt="Mikhail Cherepanov, Chairman of the Organizing Committee" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Mikhail Cherepanov, Chairman of the Organizing Committee</p>
</div>

<h2>Practical Outcomes: Agreements and MOUs Signed</h2>
<p>The forum emphasized tangible outcomes, with one of the key achievements being the signing of a memorandum to establish a Business Center for SCO countries. This new structure is designed to catalyze economic interaction.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/brics-municipal-forum-2025/image6.jpeg" alt="Dr. Li Wencheng signed a cooperation memorandum on behalf of the SCO Business Council" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Dr. Li Wencheng signed a cooperation memorandum on behalf of the SCO Business Council</p>
</div>

<p>Alexey Bykov, Head of the SCO Business Center: "The center is tasked with building communication infrastructure between partners and SCO member states. Its purpose is to establish horizontal business and non-business ties, serving as a dialogue platform within the SCO framework".</p>

<h2>Deepening China-Russia Strategic Partnership</h2>
<p>Deepening the China-Russia strategic partnership was a central theme. Chinese delegates presented projects poised to become key platforms for bilateral business cooperation. Under signed agreements, St. Petersburg will soon host Russia’s first large-scale exhibition and convention center dedicated to SCO countries.</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/brics-municipal-forum-2025/image7.jpeg" alt="Dr. Li Wencheng signed a cooperation memorandum on behalf of the SCO Business Council" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Dr. Li Wencheng signed a cooperation memorandum on behalf of the SCO Business Council</p>
</div>

<h2>Investment and Tech Cooperation Reaches New Level</h2>
<p>Investment and technological cooperation among participating countries reached a new level, as evidenced by dozens of contracts and agreements concluded on the forum's sidelines.</p>

<p>Dr. Li Wencheng, Chinese Partner of the SCO+ Regional Center for Industrial Cooperation, noted in an interview with CGTN: "China and Russia are currently in a honeymoon phase of relations. This forum has not only advanced cross-border trade but also facilitated technology exchange—enabling Chinese high-tech companies to localize in Russia and Russian firms to enter China, thereby deepening bilateral cooperation".</p>

<div class="my-8">
  <div class="relative w-full h-72 md:h-80 rounded-lg overflow-hidden">
    <img src="/news/brics-municipal-forum-2025/image8.jpeg" alt="Dr. Li Wencheng interviewed by CGTN" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Dr. Li Wencheng interviewed by CGTN</p>
</div>

<p>Despite new challenges, the trust built over the forum’s seven-year history remains unwavering. Today, the International Municipal BRICS Forum has evolved beyond a political dialogue platform into a hub for actionable collaboration aimed at common development.</p>
`,
  tags: ["BRICS", "SCO", "St. Petersburg", "Municipal Forum", "Cooperation"],
}

export default function BricsMunicipalForumPage() {
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
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gray-100">
        <div className="flex items-center">
          <Image src="/logo/born_logo_white.png" alt="BORN International logo" width={120} height={48} className="h-8 sm:h-12 w-auto" />
        </div>
        <div className="flex items-center">
          <button onClick={() => router.push('/news')} className="flex items-center space-x-1 sm:space-x-2 text-slate-700 hover:text-slate-900 text-xs sm:text-sm">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Back to News</span>
            <span className="sm:hidden">Back</span>
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

                {/* Newsletter Signup */}
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
