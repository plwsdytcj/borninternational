"use client"
import { ArrowLeft, Calendar, ExternalLink, Share2, Bookmark, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { getSmartRelatedArticles, getArticlePath, type Article } from "../utils/relatedArticles"
import { NewsArticleLayout } from "@/components/news-article-layout"

// Template data - This will be replaced with actual data for each news article
const templateData = {
  id: "template",
  date: "January 15, 2024",
  title: "Template News Article Title",
  subtitle: "A compelling subtitle that provides additional context",
  author: "Born International Editorial Team",
  readTime: "5 min read",
  category: "Company News",
  image: "/news/20250815/1.jpg",
  content: `
    <p>This is a template news article that demonstrates the layout and structure for Born International news content. Replace this content with your actual news article text.</p>
    
    <!-- First Image Section -->
    <div class="my-8">
      <div class="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
        <img src="/news/20250815/2.jpg" alt="First section image description" class="w-full h-full object-cover" />
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Caption for the first image - describe what this image shows</p>
    </div>
    
    <h2>First Section Heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    <!-- Second Image Section - Two Column Layout -->
    <div class="my-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="relative h-48 rounded-lg overflow-hidden">
          <img src="/news/20250815/3.jpg" alt="Second image description" class="w-full h-full object-cover" />
        </div>
        <div class="relative h-48 rounded-lg overflow-hidden">
          <img src="/modern-financial-office.png" alt="Third image description" class="w-full h-full object-cover" />
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Caption for the second and third images - describe what these images show</p>
    </div>
    
    <h2>Second Section Heading</h2>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    
    <blockquote>
      "This is an important quote that highlights key information or insights from the article. It should be visually distinct and draw attention."
    </blockquote>
    
    <!-- Third Image Section - Large Feature Image -->
    <div class="my-8">
      <div class="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
        <img src="/quantum-computing-background.png" alt="Feature image description" class="w-full h-full object-cover" />
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Caption for the feature image - this is a larger, more prominent image</p>
    </div>
    
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    
    <!-- Fourth Image Section - Three Column Layout -->
    <div class="my-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="relative h-40 rounded-lg overflow-hidden">
          <img src="/financial-charts-graphs.png" alt="Fourth image description" class="w-full h-full object-cover" />
        </div>
        <div class="relative h-40 rounded-lg overflow-hidden">
          <img src="/global-connections-map.png" alt="Fifth image description" class="w-full h-full object-cover" />
        </div>
        <div class="relative h-40 rounded-lg overflow-hidden">
          <img src="/ai-background.png" alt="Sixth image description" class="w-full h-full object-cover" />
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Caption for the three images - describe what these images show</p>
    </div>
    
    <h2>Key Takeaways</h2>
    <ul>
      <li>First key point or takeaway from the article</li>
      <li>Second important insight or finding</li>
      <li>Third significant development or conclusion</li>
      <li>Fourth actionable item or next step</li>
    </ul>
    
    <!-- Fifth Image Section - Side by Side with Text -->
    <div class="my-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div class="relative h-64 rounded-lg overflow-hidden">
          <img src="/biotechnology-background.png" alt="Seventh image description" class="w-full h-full object-cover" />
        </div>
        <div>
          <h3 class="text-lg font-medium text-slate-900 mb-2">Image with Text</h3>
          <p class="text-slate-600">This is an example of an image placed next to explanatory text. You can use this layout to provide context or additional information about the image.</p>
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Caption for the image with text layout</p>
    </div>
    
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
    
    <!-- Sixth Image Section - Full Width with Overlay -->
    <div class="my-8">
      <div class="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
        <img src="/space-technology-background.png" alt="Eighth image description" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div class="text-center text-white">
            <h3 class="text-xl font-medium mb-2">Overlay Text</h3>
            <p class="text-sm">You can add text overlays on images for emphasis</p>
          </div>
        </div>
      </div>
      <p class="text-sm text-slate-500 mt-2 text-center">Caption for the image with overlay text</p>
    </div>
  `,
  tags: ["Investment", "Technology", "Innovation", "Global Markets"],
  relatedArticles: [
    {
      id: "related-1",
      title: "Related Article Title 1",
      excerpt: "Brief description of the related article...",
      image: "/news/20250815/2.jpg",
      date: "January 10, 2024",
      category: "Market Analysis"
    },
    {
      id: "related-2", 
      title: "Related Article Title 2",
      excerpt: "Brief description of the related article...",
      image: "/news/20250815/3.jpg",
      date: "January 5, 2024",
      category: "Portfolio Updates"
    }
  ]
}

export default function NewsTemplatePage() {
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
      id: templateData.id,
      title: templateData.title,
      excerpt: templateData.subtitle || "",
      image: templateData.image,
      date: templateData.date,
      category: templateData.category,
      tags: templateData.tags,
      author: templateData.author
    }
    
    const related = getSmartRelatedArticles(currentArticle, 3)
    setRelatedArticles(related)
  }, [])

  if (!isClient) {
    return null
  }

  return <NewsArticleLayout article={templateData} relatedArticles={relatedArticles} getArticlePath={getArticlePath} />

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
          <Image
            src={templateData.image}
            alt={templateData.title}
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
                {templateData.category}
              </span>
              <div className="flex items-center space-x-1 sm:space-x-2 text-white/80">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{templateData.date}</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 text-white/80">
                <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{templateData.readTime}</span>
              </div>
            </div>
            <h1 className="heading-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-white mb-3 sm:mb-4 leading-tight">
              {templateData.title}
            </h1>
            {templateData.subtitle && (
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-3 sm:mb-4 max-w-3xl">
                {templateData.subtitle}
              </p>
            )}
            <div className="flex items-center text-white/80">
              <span className="text-xs sm:text-sm">By {templateData.author}</span>
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
                  dangerouslySetInnerHTML={{ __html: templateData.content }}
                  className="text-slate-700 leading-relaxed"
                />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-medium text-slate-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {templateData.tags.map((tag, index) => (
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
                    Published on {templateData.date}
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
                Investing in Chinese hard tech and building operating routes into Russia, the CIS, and adjacent markets.
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
            <p className="text-slate-400 text-sm">© 2026 Born International. All rights reserved.</p>
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
