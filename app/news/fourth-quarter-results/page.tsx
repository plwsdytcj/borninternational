"use client"
import { ArrowLeft, Calendar, ExternalLink, Share2, Bookmark, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getSmartRelatedArticles, getArticlePath, type Article } from "../utils/relatedArticles"

// Real news article data - This is how you would structure actual news content
const articleData = {
  id: "fourth-quarter-results",
  date: "January 15, 2024",
  title: "Fourth Quarter 2023 Results: Strong Performance Across All Portfolios",
  subtitle: "Born International reports exceptional 4.9% quarterly return, driven by strategic investments in emerging technologies and sustainable solutions",
  author: "Investment Management Team",
  readTime: "5 min read",
  category: "Financial Results",
  image: "/news/20250815/1.jpg",
  content: `
    <p>Born International is pleased to announce outstanding results for the fourth quarter of 2023, with the fund achieving a 4.9% return, corresponding to a gain of NOK 980 billion. This strong performance reflects our strategic positioning in high-growth technology sectors and our commitment to sustainable investment practices.</p>
    
    <!-- Performance Chart Image -->
    <div class="my-8">
      <div class="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
        <img src="/financial-charts-graphs.png" alt="Q4 2023 Performance Chart showing 4.9% return" class="w-full h-full object-cover" />
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Q4 2023 Performance Chart: 4.9% quarterly return with NOK 980 billion gain</p>
    </div>
    
    <h2>Key Performance Highlights</h2>
    <p>Our fourth quarter results demonstrate the effectiveness of our diversified investment strategy across multiple sectors. The portfolio's performance was driven by strong returns in our technology and healthcare investments, which collectively contributed 3.2% to our overall return.</p>
    
    <p>Notable performers included our quantum computing portfolio, which saw significant appreciation following breakthrough developments in quantum algorithms and hardware improvements. Additionally, our biotechnology investments benefited from regulatory approvals and successful clinical trial results.</p>
    
    <!-- Two Column Images: Technology and Healthcare -->
    <div class="my-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="relative h-48 rounded-lg overflow-hidden">
          <img src="/quantum-computing-background.png" alt="Quantum computing technology investments" class="w-full h-full object-cover" />
        </div>
        <div class="relative h-48 rounded-lg overflow-hidden">
          <img src="/biotechnology-background.png" alt="Biotechnology and healthcare investments" class="w-full h-full object-cover" />
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Our technology and healthcare investments drove strong Q4 performance</p>
    </div>
    
    <blockquote>
      "The exceptional performance in Q4 2023 reflects our team's deep expertise in identifying and nurturing high-potential investments. Our focus on emerging technologies and sustainable solutions continues to deliver strong returns for our investors while contributing to positive global impact."
    </blockquote>
    
    <h2>Portfolio Composition and Strategy</h2>
    <p>As of December 31, 2023, our portfolio consisted of 125 companies across various sectors, with technology and healthcare representing our largest allocations at 35% and 28% respectively. Our investment strategy continues to focus on early-stage companies with disruptive potential and strong growth prospects.</p>
    
    <!-- Portfolio Distribution Chart -->
    <div class="my-8">
      <div class="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
        <img src="/global-connections-map.png" alt="Global portfolio distribution and connections" class="w-full h-full object-cover" />
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Global portfolio distribution across 125 companies in multiple sectors</p>
    </div>
    
    <h2>Geographic Distribution</h2>
    <p>Our global investment approach has proven successful, with strong performance across all major regions:</p>
    <ul>
      <li><strong>North America:</strong> 45% of portfolio, 5.2% quarterly return</li>
      <li><strong>Europe:</strong> 30% of portfolio, 4.8% quarterly return</li>
      <li><strong>Asia-Pacific:</strong> 20% of portfolio, 4.5% quarterly return</li>
      <li><strong>Other regions:</strong> 5% of portfolio, 4.1% quarterly return</li>
    </ul>
    
    <!-- Three Column Regional Performance -->
    <div class="my-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="relative h-40 rounded-lg overflow-hidden">
          <img src="/modern-financial-office.png" alt="North America investments" class="w-full h-full object-cover" />
        </div>
        <div class="relative h-40 rounded-lg overflow-hidden">
          <img src="/news/20250815/2.jpg" alt="Europe investments" class="w-full h-full object-cover" />
        </div>
        <div class="relative h-40 rounded-lg overflow-hidden">
          <img src="/news/20250815/3.jpg" alt="Asia-Pacific investments" class="w-full h-full object-cover" />
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Regional performance: North America (5.2%), Europe (4.8%), Asia-Pacific (4.5%)</p>
    </div>
    
    <h2>Sustainable Investment Impact</h2>
    <p>Our commitment to responsible investing continues to drive both financial returns and positive environmental impact. During the fourth quarter, our sustainable technology investments contributed significantly to our overall performance, with companies focused on renewable energy, carbon capture, and green transportation technologies showing particularly strong results.</p>
    
    <!-- Image with Text Layout -->
    <div class="my-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div class="relative h-64 rounded-lg overflow-hidden">
          <img src="/new-energy-background.png" alt="Sustainable energy investments" class="w-full h-full object-cover" />
        </div>
        <div>
          <h3 class="text-lg font-medium text-slate-900 mb-2">Sustainable Technology Focus</h3>
          <p class="text-slate-600">Our investments in renewable energy, carbon capture, and green transportation technologies showed particularly strong results in Q4 2023, contributing significantly to our overall performance while driving positive environmental impact.</p>
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Sustainable technology investments driving both returns and environmental impact</p>
    </div>
    
    <p>We remain committed to our ESG principles and continue to integrate environmental, social, and governance factors into our investment decision-making process. This approach has not only enhanced our risk-adjusted returns but has also positioned our portfolio to benefit from the global transition to a more sustainable economy.</p>
    
    <h2>Outlook for 2024</h2>
    <p>Looking ahead to 2024, we remain optimistic about the opportunities in our target sectors. The continued advancement of artificial intelligence, quantum computing, and biotechnology presents significant investment opportunities. Additionally, the growing focus on sustainability and climate solutions aligns well with our investment strategy.</p>
    
    <!-- Full Width Image with Overlay -->
    <div class="my-8">
      <div class="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
        <img src="/ai-background.png" alt="Future technology opportunities" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div class="text-center text-white">
            <h3 class="text-xl font-medium mb-2">2024 Outlook</h3>
            <p class="text-sm">AI, quantum computing, and biotechnology present significant opportunities</p>
          </div>
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Emerging technology sectors driving future growth opportunities</p>
    </div>
    
    <p>We expect continued strong performance from our existing portfolio companies while maintaining our disciplined approach to new investments. Our team's deep sector expertise and global network position us well to identify and capitalize on emerging opportunities.</p>
    
    <h2>Investor Relations</h2>
    <p>We would like to thank our investors for their continued trust and support. Our team remains committed to delivering strong, sustainable returns while maintaining the highest standards of transparency and communication. For more detailed information about our portfolio performance and strategy, please contact our investor relations team.</p>
  `,
  tags: ["Financial Results", "Investment Performance", "Portfolio Management", "Sustainable Investing", "Technology", "Healthcare"],
  relatedArticles: [
    {
      id: "climate-transition-investments",
      title: "Climate Transition Investment Framework",
      excerpt: "New framework for investing in companies that contribute to the green transition...",
      image: "/biotechnology-background.png",
      date: "January 10, 2024",
      category: "Sustainability"
    },
    {
      id: "quantum-computing-breakthrough",
      title: "Quantum Computing Investment Breakthrough",
      excerpt: "Our portfolio company achieves major milestone with 1000+ qubit quantum computer...",
      image: "/quantum-computing-background.png",
      date: "December 15, 2023",
      category: "Portfolio Updates"
    }
  ]
}

export default function FourthQuarterResultsPage() {
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
                  className="text-slate-700 leading-relaxed text-sm sm:text-base"
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
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Button variant="outline" size="sm" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                      <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Share</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                      <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Bookmark</span>
                    </Button>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500">
                    Published on {articleData.date}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-8">
                {/* Related Articles */}
                <div className="bg-slate-50 rounded-lg p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-3 sm:mb-4">Related Articles</h3>
                  <div className="space-y-3 sm:space-y-4">
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
                <div className="mt-4 sm:mt-6 bg-blue-50 rounded-lg p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-2">Stay Updated</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">
                    Subscribe to our newsletter for the latest news and insights.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm">
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