"use client"
import { ArrowLeft, Calendar, ExternalLink, Share2, Bookmark, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getSmartRelatedArticles, getArticlePath, type Article } from "../utils/relatedArticles"

// Article data for Moscow Startup Village 2025
const articleData = {
  id: "moscow-startup-village-2025",
  date: "May 30, 2025",
  title: "Dr. Wencheng Li Leads Chinese Tech Delegation at 2025 Moscow Startup Village",
  subtitle: "Russia's flagship innovation summit focuses on deepening high-tech collaboration with Chinese ventures",
  author: "Born International Editorial Team",
  readTime: "4 min read",
  category: "Company News",
  image: "/news/20250816/23401755338215_.pic_hd.jpg",
  content: `
    <!-- Lead Paragraph -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
      <p class="text-lg leading-relaxed text-slate-700 font-medium">
        Moscow, 30 May 2025 — Russia's flagship innovation summit, Startup Village, returned to Skolkovo on 29–30 May with a single focus: deepening high-tech collaboration. Born International was invited to present Chinese companies at the heart of the venue, spanning AI, quantum computing, solid-state batteries and MedTech.
      </p>
    </div>
    
    <!-- Main Story -->
    <p class="text-lg leading-relaxed text-slate-700 mb-6">
      Over the past three years, Born International has guided Chinese tech ventures through Russia's regulatory, funding and talent landscape. That track record secured the invitation and a brief exchange with Deputy Chairman of the Russian Security Council Dmitry Medvedev, who emphasized that long-term, company-level ties will define the next chapter of bilateral innovation.
    </p>
    
    <!-- Hero Image Section -->
    <div class="my-12">
      <div class="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
        <img src="/news/20250816/23401755338215_.pic_hd.jpg" alt="Dr. Wencheng Li speaking with Deputy Chairman Dmitry Medvedev inside Skolkovo Technopark" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>
      <p class="text-sm text-slate-500 mt-3 text-center italic">Dr. Wencheng Li speaking with Deputy Chairman Dmitry Medvedev inside Skolkovo Technopark.</p>
    </div>
    
    <!-- Key Quote -->
    <div class="my-12 bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-400 p-8 rounded-r-lg">
      <blockquote class="text-xl md:text-2xl font-light text-slate-700 italic leading-relaxed">
        "Every conversation builds on three years of groundwork here in Russia," Dr. Li noted. "Startup Village simply turned the spotlight on what was already taking shape in labs and co-working spaces across both countries."
      </blockquote>
      <div class="mt-4 text-sm text-slate-600 font-medium">— Dr. Wencheng Li, Born International</div>
    </div>
    
    <!-- Strategic Partnership Section -->
    <div class="my-12">
      <h2 class="text-2xl md:text-3xl font-light text-slate-900 mb-6 border-b border-slate-200 pb-3">Strategic Partnership Development</h2>
      <p class="text-lg leading-relaxed text-slate-700 mb-6">
        The invitation to Startup Village 2025 represents a significant milestone in Born International's strategic approach to fostering Sino-Russian technological cooperation. The event provided a platform for showcasing the innovative capabilities of Chinese technology companies while strengthening bilateral relationships in key emerging technology sectors.
      </p>
    </div>
    
    <!-- Event Venue Images -->
    <div class="my-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="relative h-64 rounded-xl overflow-hidden shadow-md">
            <img src="/news/20250816/23411755338218_.pic_hd.jpg" alt="Startup Village 2025 venue and participants" class="w-full h-full object-cover" />
          </div>
          <p class="text-sm text-slate-500 text-center">Event venue and participants</p>
        </div>
        <div class="space-y-4">
          <div class="relative h-64 rounded-xl overflow-hidden shadow-md">
            <img src="/news/20250816/23441755338387_.pic_hd.jpg" alt="Technology showcase and networking at the event" class="w-full h-full object-cover" />
          </div>
          <p class="text-sm text-slate-500 text-center">Technology showcase and networking</p>
        </div>
      </div>
    </div>
    
    <!-- Urban Landscape Section -->
    <div class="my-12">
      <h3 class="text-xl font-medium text-slate-900 mb-4">Modern Innovation Hub</h3>
      <div class="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
        <img src="/news/20250816/23451755338471_.pic_hd.jpg" alt="Modern urban landscape at Startup Village 2025 with i.moscow pavilion and contemporary architecture" class="w-full h-full object-cover" />
      </div>
      <p class="text-sm text-slate-500 mt-3 text-center">The modern urban landscape of Startup Village 2025 featuring the i.moscow pavilion and contemporary architecture along the waterfront.</p>
    </div>
    
    <!-- Key Participants Section -->
    <div class="my-12">
      <h3 class="text-xl font-medium text-slate-900 mb-4">Key Participants</h3>
      <div class="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
        <img src="/news/20250816/23461755338473_.pic_hd.jpg" alt="Key participants and delegates at Startup Village 2025 including Dmitry Medvedev" class="w-full h-full object-cover" />
      </div>
      <p class="text-sm text-slate-500 mt-3 text-center">Key participants and delegates at Startup Village 2025, including Deputy Chairman Dmitry Medvedev and other prominent figures.</p>
    </div>
    
    <!-- Technology Sectors Section -->
    <div class="my-12">
      <h2 class="text-2xl md:text-3xl font-light text-slate-900 mb-6 border-b border-slate-200 pb-3">Key Technology Sectors</h2>
      <p class="text-lg leading-relaxed text-slate-700 mb-8">
        The Chinese delegation presented innovations across four critical technology domains that represent the future of bilateral cooperation:
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h4 class="text-lg font-medium text-slate-900 mb-3 flex items-center">
            <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            Artificial Intelligence
          </h4>
          <p class="text-slate-600">Advanced machine learning algorithms and AI applications for industrial automation</p>
        </div>
        
        <div class="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h4 class="text-lg font-medium text-slate-900 mb-3 flex items-center">
            <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            Quantum Computing
          </h4>
          <p class="text-slate-600">Next-generation quantum processors and quantum-resistant cryptography solutions</p>
        </div>
        
        <div class="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h4 class="text-lg font-medium text-slate-900 mb-3 flex items-center">
            <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Solid-State Batteries
          </h4>
          <p class="text-slate-600">Revolutionary energy storage technology with enhanced safety and performance</p>
        </div>
        
        <div class="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h4 class="text-lg font-medium text-slate-900 mb-3 flex items-center">
            <span class="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
            Medical Technology
          </h4>
          <p class="text-slate-600">Cutting-edge diagnostic tools and therapeutic devices</p>
        </div>
      </div>
    </div>
    
    <!-- Bilateral Framework Section -->
    <div class="my-12">
      <h2 class="text-2xl md:text-3xl font-light text-slate-900 mb-6 border-b border-slate-200 pb-3">Bilateral Innovation Framework</h2>
      <div class="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-lg">
        <p class="text-lg leading-relaxed text-slate-700 mb-6">
          The meeting with Deputy Chairman Medvedev underscored the importance of establishing sustainable, long-term partnerships between Chinese and Russian technology companies. This framework aims to create a robust ecosystem for innovation that benefits both nations while contributing to global technological advancement.
        </p>
        <p class="text-lg leading-relaxed text-slate-700">
          The three-year track record mentioned by Dr. Li reflects Born International's systematic approach to navigating the complex regulatory and business environments in both countries, ensuring that partnerships are built on solid foundations of mutual understanding and shared objectives.
        </p>
      </div>
    </div>
    
    <!-- Future Outlook Section -->
    <div class="my-12">
      <h2 class="text-2xl md:text-3xl font-light text-slate-900 mb-6 border-b border-slate-200 pb-3">Future Outlook</h2>
      <div class="space-y-6">
        <p class="text-lg leading-relaxed text-slate-700">
          Startup Village 2025 has set the stage for increased collaboration between Chinese and Russian technology sectors. The event's success demonstrates the potential for meaningful partnerships that can drive innovation and economic growth in both countries while contributing to global technological progress.
        </p>
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p class="text-lg leading-relaxed text-slate-700 font-medium">
            Born International remains committed to facilitating these connections and supporting the development of a vibrant, collaborative technology ecosystem between China and Russia.
          </p>
        </div>
      </div>
    </div>
  `,
  tags: ["Technology", "Innovation", "International Relations", "Startup Village", "Sino-Russian Cooperation"],
  relatedArticles: [
    {
      id: "fourth-quarter-results",
      title: "Fourth quarter 2023 results",
      excerpt: "The fund returned 4.9% in the fourth quarter, corresponding to a gain of NOK 980 billion...",
      image: "/news/20250815/1.jpg",
      date: "January 15, 2024",
      category: "Financial Results"
    },
    {
      id: "global-market-outlook", 
      title: "Global market outlook 2024",
      excerpt: "Our expectations for global markets and investment opportunities in the year ahead...",
      image: "/news/20250815/3.jpg",
      date: "January 5, 2024",
      category: "Market Analysis"
    }
  ]
}

export default function MoscowStartupVillagePage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([])

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
    
    // Get related articles using smart recommendation
    const currentArticle: Article = {
      id: articleData.id,
      title: articleData.title,
      excerpt: articleData.subtitle || "",
      image: articleData.image,
      date: articleData.date,
      category: articleData.category,
      tags: articleData.tags,
      author: articleData.author
    }
    
    const related = getSmartRelatedArticles(currentArticle, 3)
    setRelatedArticles(related)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gray-100">
        <div className="flex items-center">
          <Image
            src="/logo/born_logo_white.png"
            alt="BORN International logo"
            width={120}
            height={48}
            className="h-8 sm:h-12 w-auto"
          />
        </div>
        <div className="flex items-center">
          <button
            onClick={() => router.push("/news")}
            className="flex items-center space-x-1 sm:space-x-2 text-slate-700 hover:text-slate-900 text-xs sm:text-sm"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Back to News</span>
            <span className="sm:hidden">Back</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src={articleData.image}
            alt={articleData.title}
            fill
            className="object-cover"
            priority
          />
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
                <div 
                  dangerouslySetInnerHTML={{ __html: articleData.content }}
                  className="text-slate-700 leading-relaxed"
                />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-medium text-slate-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {articleData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
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
                  <div className="text-sm text-slate-500">
                    Published on {articleData.date}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Related Articles */}
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.length > 0 ? (
                      relatedArticles.map((article) => (
                        <Link key={article.id} href={getArticlePath(article.id)}>
                          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            <CardContent className="p-0">
                              <div className="relative h-24">
                                <Image
                                  src={article.image}
                                  alt={article.title}
                                  fill
                                  className="object-cover rounded-t-lg"
                                />
                              </div>
                              <div className="p-3">
                                <p className="text-xs text-slate-500 mb-1">{article.date}</p>
                                <h4 className="text-sm font-medium text-slate-900 mb-1 line-clamp-2">
                                  {article.title}
                                </h4>
                                <p className="text-xs text-slate-600 line-clamp-2">
                                  {article.excerpt}
                                </p>
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
                  <p className="text-sm text-slate-600 mb-4">
                    Subscribe to our newsletter for the latest news and insights.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Subscribe
                  </Button>
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
                <Image
                  src="/logo/born_logo_white.png"
                  alt="BORN International logo"
                  width={120}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-slate-400 text-sm">
                A global investment platform focusing on early-stage high-tech startups.
              </p>
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