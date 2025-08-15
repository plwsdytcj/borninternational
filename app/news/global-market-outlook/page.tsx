"use client"
import { ArrowLeft, Calendar, ExternalLink, Share2, Bookmark, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getSmartRelatedArticles, getArticlePath, type Article } from "../utils/relatedArticles"

// Real news article data for Global Market Outlook 2024
const articleData = {
  id: "global-market-outlook",
  date: "January 5, 2024",
  title: "Global Market Outlook 2024: Navigating Innovation and Emerging Opportunities",
  subtitle: "Our comprehensive analysis of global markets and strategic investment opportunities in the year ahead",
  author: "Born International Investment Team",
  readTime: "8 min read",
  category: "Market Analysis",
  image: "/news/20250815/3.jpg",
  content: `
    <p class="text-lg text-slate-700 leading-relaxed mb-6">
      As we enter 2024, global markets present a complex landscape shaped by technological innovation, 
      geopolitical shifts, and evolving economic dynamics. Our analysis reveals significant opportunities 
      across emerging markets and technology sectors, while highlighting the importance of strategic 
      positioning in an increasingly interconnected world.
    </p>

    <!-- Market Overview Image -->
    <div class="my-8">
      <div class="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
        <img src="/global-connections-map.png" alt="Global market connections and investment flows" class="w-full h-full object-cover" />
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Global investment flows and market connectivity patterns</p>
    </div>

    <h2 class="text-2xl font-medium text-slate-900 mb-4 mt-8">Key Market Trends</h2>
    
    <p class="text-slate-700 mb-4">
      The convergence of artificial intelligence, renewable energy, and biotechnology is creating 
      unprecedented investment opportunities. Our research indicates that companies at the intersection 
      of these sectors are positioned for exponential growth, particularly in emerging markets where 
      infrastructure development and digital transformation are accelerating.
    </p>

    <!-- Technology Trends Images -->
    <div class="my-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="relative h-48 rounded-lg overflow-hidden">
          <img src="/ai-background.png" alt="Artificial Intelligence and machine learning trends" class="w-full h-full object-cover" />
        </div>
        <div class="relative h-48 rounded-lg overflow-hidden">
          <img src="/new-energy-background.png" alt="Renewable energy and sustainability investments" class="w-full h-full object-cover" />
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">AI innovation and renewable energy sectors driving market growth</p>
    </div>

    <h2 class="text-2xl font-medium text-slate-900 mb-4 mt-8">Emerging Market Opportunities</h2>
    
    <p class="text-slate-700 mb-4">
      Southeast Asia continues to emerge as a powerhouse for technological innovation, with Singapore 
      and Hong Kong leading the region's transformation into a global fintech and digital economy hub. 
      Our strategic investments in these markets reflect our confidence in their long-term growth potential.
    </p>

    <blockquote class="border-l-4 border-blue-200 pl-6 py-4 my-6 bg-blue-50/30 rounded-r-lg">
      <p class="text-lg text-slate-700 italic">
        "The combination of rapid digital adoption, favorable regulatory environments, and strong 
        talent pools makes Southeast Asia one of the most attractive investment destinations for 
        technology companies globally."
      </p>
      <p class="text-sm text-slate-600 mt-2">— Born International Market Analysis Team</p>
    </blockquote>

    <!-- Regional Performance Chart -->
    <div class="my-8">
      <div class="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
        <img src="/financial-charts-graphs.png" alt="Regional market performance and growth projections" class="w-full h-full object-cover" />
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Regional market performance analysis and 2024 projections</p>
    </div>

    <h2 class="text-2xl font-medium text-slate-900 mb-4 mt-8">Technology Sector Outlook</h2>
    
    <p class="text-slate-700 mb-4">
      Quantum computing, biotechnology, and space technology represent the next frontier of innovation. 
      Our portfolio companies in these sectors are achieving breakthrough milestones that position them 
      for market leadership in their respective domains.
    </p>

    <!-- Technology Sectors -->
    <div class="my-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="relative h-40 rounded-lg overflow-hidden">
          <img src="/quantum-computing-background.png" alt="Quantum computing developments" class="w-full h-full object-cover" />
        </div>
        <div class="relative h-40 rounded-lg overflow-hidden">
          <img src="/biotechnology-background.png" alt="Biotechnology innovations" class="w-full h-full object-cover" />
        </div>
        <div class="relative h-40 rounded-lg overflow-hidden">
          <img src="/space-technology-background.png" alt="Space technology advancements" class="w-full h-full object-cover" />
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Quantum computing, biotechnology, and space technology sectors</p>
    </div>

    <h2 class="text-2xl font-medium text-slate-900 mb-4 mt-8">Investment Strategy for 2024</h2>
    
    <p class="text-slate-700 mb-4">
      Our investment strategy for 2024 focuses on three core pillars: technological innovation, 
      sustainable development, and emerging market growth. We believe this approach will deliver 
      superior returns while contributing to positive global impact.
    </p>

    <!-- Strategy Visualization -->
    <div class="my-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div class="relative h-64 rounded-lg overflow-hidden">
          <img src="/modern-financial-office.png" alt="Strategic investment planning and execution" class="w-full h-full object-cover" />
        </div>
        <div>
          <h3 class="text-lg font-medium text-slate-900 mb-2">Strategic Focus Areas</h3>
          <ul class="text-slate-600 space-y-2">
            <li>• Early-stage technology companies with breakthrough potential</li>
            <li>• Sustainable and ESG-focused investment opportunities</li>
            <li>• Emerging market infrastructure and digital transformation</li>
            <li>• Cross-border technology transfer and innovation</li>
          </ul>
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Strategic investment framework for 2024</p>
    </div>

    <h2 class="text-2xl font-medium text-slate-900 mb-4 mt-8">Risk Management and Outlook</h2>
    
    <p class="text-slate-700 mb-4">
      While we remain optimistic about market opportunities, we acknowledge the importance of 
      robust risk management in navigating geopolitical uncertainties and market volatility. 
      Our diversified portfolio approach and active management strategies position us well 
      for various market scenarios.
    </p>

    <!-- Full Width Market Outlook -->
    <div class="my-8">
      <div class="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
        <img src="/robotics-background.png" alt="Future market outlook and automation trends" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div class="text-center text-white">
            <h3 class="text-xl font-medium mb-2">2024 Market Outlook</h3>
            <p class="text-sm">Strategic positioning for long-term growth and innovation</p>
          </div>
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Future market trends and automation impact on investment strategies</p>
    </div>

    <h2 class="text-2xl font-medium text-slate-900 mb-4 mt-8">Conclusion</h2>
    
    <p class="text-slate-700 mb-6">
      2024 presents unprecedented opportunities for investors who can navigate the complex 
      landscape of technological innovation, geopolitical shifts, and emerging market dynamics. 
      Our strategic approach, combined with deep market insights and strong partnerships, 
      positions us to capture these opportunities while managing risks effectively.
    </p>

    <p class="text-slate-700">
      As we move forward, we remain committed to our mission of driving technology globalization 
      and creating sustainable value for our investors and portfolio companies. The year ahead 
      promises to be transformative, and we are excited to be at the forefront of these developments.
    </p>
  `,
  tags: ["Market Analysis", "Global Markets", "Investment Strategy", "Technology", "Emerging Markets", "2024 Outlook"],
}

export default function GlobalMarketOutlookPage() {
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
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={articleData.image}
          alt={articleData.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-white">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{articleData.date}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>{articleData.readTime}</span>
              <span className="hidden sm:inline">•</span>
              <span className="bg-blue-600 px-2 py-1 rounded-full text-xs">
                {articleData.category}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-3 sm:mb-4 leading-tight">
              {articleData.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200 max-w-3xl">
              {articleData.subtitle}
            </p>
            <div className="flex items-center mt-4 sm:mt-6">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-medium">
                    {articleData.author?.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="text-xs sm:text-sm">{articleData.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <div 
              className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: articleData.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {articleData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share and Bookmark */}
            <div className="mt-8 flex items-center justify-between">
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
              <div className="flex items-center space-x-2 text-sm text-slate-500">
                <Eye className="w-4 h-4" />
                <span>1,247 views</span>
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
              <div className="bg-blue-50 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-medium text-slate-900 mb-2">Stay Updated</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Get the latest market insights and investment opportunities delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
          </div>
        </div>
      </footer>
    </div>
  )
} 