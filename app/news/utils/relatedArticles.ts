// Related Articles Recommendation System
// This utility helps determine which articles are most related to the current article

export interface Article {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  tags: string[]
  author?: string
}

export interface RelatedArticleConfig {
  maxArticles?: number
  weightCategories?: number
  weightTags?: number
  weightDate?: number
  weightAuthor?: number
  excludeCurrent?: boolean
}

// Sample articles database - in a real app, this would come from a CMS or database
export const allArticles: Article[] = [
  {
    id: "moscow-startup-village-2025",
    title: "Dr. Wencheng Li Leads Chinese Tech Delegation at 2025 Moscow Startup Village",
    excerpt: "Russia's flagship innovation summit focuses on deepening high-tech collaboration with Chinese ventures spanning AI, quantum computing, solid-state batteries and MedTech.",
    image: "/news/20250816/23401755338215_.pic_hd.jpg",
    date: "May 30, 2025",
    category: "Company News",
    tags: ["Technology", "Innovation", "International Relations", "Startup Village", "Sino-Russian Cooperation", "AI", "Quantum Computing", "MedTech"]
  },
  {
    id: "fourth-quarter-results",
    title: "Fourth Quarter 2023 Results: Strong Performance Across All Portfolios",
    excerpt: "Born International reports exceptional 4.9% quarterly return, driven by strategic investments in emerging technologies and sustainable solutions",
    image: "/news/20250815/1.jpg",
    date: "January 15, 2024",
    category: "Financial Results",
    tags: ["Financial Results", "Investment Performance", "Portfolio Management", "Sustainable Investing", "Technology", "Healthcare"]
  },
  {
    id: "climate-transition-investments",
    title: "Climate Transition Investment Framework",
    excerpt: "New framework for investing in companies that contribute to the green transition. We are committed to supporting sustainable business practices.",
    image: "/biotechnology-background.png",
    date: "January 10, 2024",
    category: "Sustainability",
    tags: ["Sustainability", "Climate", "Green Technology", "ESG", "Investment Strategy"]
  },
  {
    id: "quantum-computing-breakthrough",
    title: "Quantum Computing Investment Breakthrough",
    excerpt: "Our portfolio company QBoson achieves major milestone with 1000+ qubit quantum computer, attracting global attention from tech giants.",
    image: "/quantum-computing-background.png",
    date: "December 15, 2023",
    category: "Portfolio Updates",
    tags: ["Quantum Computing", "Technology", "Portfolio Updates", "Innovation", "AI"]
  },
  {
    id: "global-market-outlook",
    title: "Global Market Outlook 2024",
    excerpt: "Our expectations for global markets and investment opportunities in the year ahead. Key trends include technological innovation and emerging market growth.",
    image: "/news/20250815/3.jpg",
    date: "January 5, 2024",
    category: "Market Analysis",
    tags: ["Market Analysis", "Global Markets", "Investment Strategy", "Technology", "Emerging Markets"]
  },
  {
    id: "born-international-expands",
    title: "Born International Expands to Southeast Asia",
    excerpt: "Strategic expansion into Singapore and Hong Kong markets, establishing new partnerships with local investment firms and technology companies.",
    image: "/modern-financial-office.png",
    date: "December 20, 2023",
    category: "Company News",
    tags: ["Company News", "Expansion", "Southeast Asia", "Partnerships", "Global Markets"]
  },
  {
    id: "annual-investor-conference",
    title: "Annual Investor Conference Highlights",
    excerpt: "Key insights from our annual investor conference, featuring presentations from portfolio companies and market outlook discussions.",
    image: "/financial-charts-graphs.png",
    date: "December 10, 2023",
    category: "Events",
    tags: ["Events", "Investor Relations", "Portfolio Companies", "Market Outlook", "Conference"]
  },
  {
    id: "ai-investment-trends",
    title: "AI Investment Trends 2024",
    excerpt: "Emerging opportunities in artificial intelligence sector. Analysis of key trends and investment opportunities in AI and machine learning.",
    image: "/ai-background.png",
    date: "December 5, 2023",
    category: "Technology",
    tags: ["AI", "Technology", "Investment Trends", "Machine Learning", "Innovation"]
  },
  {
    id: "sustainability-impact-report",
    title: "Sustainability Impact Report",
    excerpt: "Our commitment to environmental responsibility. Comprehensive report on our ESG initiatives and their impact on portfolio performance.",
    image: "/new-energy-background.png",
    date: "November 30, 2023",
    category: "Sustainability",
    tags: ["Sustainability", "ESG", "Environmental Impact", "Responsible Investing", "Climate"]
  }
]

/**
 * Calculate similarity score between two articles
 */
function calculateSimilarity(article1: Article, article2: Article, weights: Required<RelatedArticleConfig>): number {
  let score = 0

  // Category similarity (highest weight)
  if (article1.category === article2.category) {
    score += weights.weightCategories
  }

  // Tag similarity
  const commonTags = article1.tags.filter(tag => article2.tags.includes(tag))
  const tagSimilarity = commonTags.length / Math.max(article1.tags.length, article2.tags.length)
  score += tagSimilarity * weights.weightTags

  // Date similarity (recent articles get higher score)
  const date1 = new Date(article1.date)
  const date2 = new Date(article2.date)
  const daysDiff = Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24)
  const dateSimilarity = Math.max(0, 1 - daysDiff / 365) // Decay over a year
  score += dateSimilarity * weights.weightDate

  // Author similarity (if available)
  if (article1.author && article2.author && article1.author === article2.author) {
    score += weights.weightAuthor
  }

  return score
}

/**
 * Get related articles for a given article
 */
export function getRelatedArticles(
  currentArticle: Article,
  config: RelatedArticleConfig = {}
): Article[] {
  const {
    maxArticles = 3,
    weightCategories = 5,
    weightTags = 3,
    weightDate = 2,
    weightAuthor = 1,
    excludeCurrent = true
  } = config

  // Filter out current article if needed
  const candidateArticles = excludeCurrent 
    ? allArticles.filter(article => article.id !== currentArticle.id)
    : allArticles

  // Calculate similarity scores
  const articlesWithScores = candidateArticles.map(article => ({
    article,
    score: calculateSimilarity(currentArticle, article, {
      weightCategories,
      weightTags,
      weightDate,
      weightAuthor
    })
  }))

  // Sort by score (highest first) and take top N
  const sortedArticles = articlesWithScores
    .sort((a, b) => b.score - a.score)
    .slice(0, maxArticles)
    .map(item => item.article)

  return sortedArticles
}

/**
 * Get related articles by category
 */
export function getRelatedArticlesByCategory(
  category: string,
  excludeArticleId?: string,
  maxArticles: number = 3
): Article[] {
  let filtered = allArticles.filter(article => article.category === category)
  
  if (excludeArticleId) {
    filtered = filtered.filter(article => article.id !== excludeArticleId)
  }

  return filtered
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, maxArticles)
}

/**
 * Get related articles by tags
 */
export function getRelatedArticlesByTags(
  tags: string[],
  excludeArticleId?: string,
  maxArticles: number = 3
): Article[] {
  let filtered = allArticles.filter(article => 
    article.tags.some(tag => tags.includes(tag))
  )
  
  if (excludeArticleId) {
    filtered = filtered.filter(article => article.id !== excludeArticleId)
  }

  // Sort by number of matching tags, then by date
  const articlesWithScore = filtered.map(article => ({
    article,
    matchingTags: article.tags.filter(tag => tags.includes(tag)).length
  }))

  return articlesWithScore
    .sort((a, b) => {
      if (b.matchingTags !== a.matchingTags) {
        return b.matchingTags - a.matchingTags
      }
      return new Date(b.article.date).getTime() - new Date(a.article.date).getTime()
    })
    .slice(0, maxArticles)
    .map(item => item.article)
}

/**
 * Get latest articles (excluding current)
 */
export function getLatestArticles(
  excludeArticleId?: string,
  maxArticles: number = 3
): Article[] {
  let filtered = allArticles
  
  if (excludeArticleId) {
    filtered = filtered.filter(article => article.id !== excludeArticleId)
  }

  return filtered
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, maxArticles)
}

/**
 * Smart related articles selection with fallback strategy
 */
export function getSmartRelatedArticles(
  currentArticle: Article,
  maxArticles: number = 3
): Article[] {
  // First try: Get related articles by similarity
  let related = getRelatedArticles(currentArticle, { maxArticles })
  
  // If not enough articles, add by category
  if (related.length < maxArticles) {
    const categoryArticles = getRelatedArticlesByCategory(
      currentArticle.category,
      currentArticle.id,
      maxArticles - related.length
    )
    related = [...related, ...categoryArticles]
  }
  
  // If still not enough, add by tags
  if (related.length < maxArticles) {
    const tagArticles = getRelatedArticlesByTags(
      currentArticle.tags,
      currentArticle.id,
      maxArticles - related.length
    )
    related = [...related, ...tagArticles]
  }
  
  // If still not enough, add latest articles
  if (related.length < maxArticles) {
    const latestArticles = getLatestArticles(
      currentArticle.id,
      maxArticles - related.length
    )
    related = [...related, ...latestArticles]
  }
  
  // Remove duplicates and limit to maxArticles
  const uniqueArticles = related.filter((article, index, self) => 
    index === self.findIndex(a => a.id === article.id)
  )
  
  return uniqueArticles.slice(0, maxArticles)
}

/**
 * Get the correct page path for an article ID
 */
export function getArticlePath(articleId: string): string {
  // Map article IDs to their actual page paths
  const articlePathMap: Record<string, string> = {
    "moscow-startup-village-2025": "/news/moscow-startup-village-2025",
    "fourth-quarter-results": "/news/fourth-quarter-results",
    "climate-transition-investments": "/news/template",
    "quantum-computing-breakthrough": "/news/template", 
    "global-market-outlook": "/news/global-market-outlook",
    "born-international-expands": "/news/template",
    "annual-investor-conference": "/news/template",
    "ai-investment-trends": "/news/template",
    "sustainability-impact-report": "/news/template"
  }
  
  return articlePathMap[articleId] || "/news/template"
} 