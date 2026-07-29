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

// Articles database restricted to real pages under /app/news
export const allArticles: Article[] = [
  {
    id: "apec-healthcare-digitalization-forum-2026",
    title: "Dr. Li Wencheng Speaks at APEC Healthcare Digitalization Forum on New Cross-Border Opportunities",
    excerpt: "Born International chairman shares a commercialization framework for bringing China's digital health technologies to Russia, Central Asia and emerging APEC markets.",
    image: "/news/apec-healthcare-digitalization-forum-2026/image1.jpg",
    date: "July 18, 2026",
    category: "Company News",
    tags: ["APEC", "Digital Health", "Medical Technology", "Cross-Border Commercialization", "Russia", "Central Asia"],
  },
  {
    id: "muhammad-yunus-meeting-2026",
    title: "Nobel Peace Prize Laureate Muhammad Yunus Meets Born International Founder Dr. Li Wencheng",
    excerpt: "Talks in Dhaka focus on localized medical technology, biopharmaceutical cooperation and inclusive healthcare.",
    image: "/news/muhammad-yunus-meeting-2026/image1.jpg",
    date: "May 19, 2026",
    category: "Company News",
    tags: ["Bangladesh", "Muhammad Yunus", "Healthcare", "Medical Technology", "Biopharmaceuticals", "Localization"],
  },
  {
    id: "hong-kong-health-week-2026",
    title: "Global Healthcare Leaders Discuss New Breakthroughs as Dr. Li Wencheng Attends Hong Kong International Healthcare Week",
    excerpt: "Born International explores healthcare innovation, international market access and China-Russia medical cooperation during the three-day event.",
    image: "/news/hong-kong-health-week-2026/image1.png",
    date: "May 11, 2026",
    category: "Company News",
    tags: ["Healthcare", "Hong Kong", "ASGH", "China-Russia Cooperation", "Medical Technology"],
  },
  // Real: Moscow Startup Village 2025
  {
    id: "moscow-startup-village-2025",
    title: "Dr. Wencheng Li Leads Chinese Tech Delegation at 2025 Moscow Startup Village",
    excerpt: "Russia's flagship innovation summit focuses on deepening high‑tech collaboration with Chinese ventures spanning AI, quantum computing, solid‑state batteries and MedTech.",
    image: "/news/20250816/23401755338215_.pic_hd.jpg",
    date: "May 30, 2025",
    category: "Company News",
    tags: [
      "Technology",
      "Innovation",
      "International Relations",
      "Startup Village",
      "Sino-Russian Cooperation",
      "AI",
      "Quantum Computing",
      "MedTech",
    ],
  },

  // Real: BRICS Municipal Forum 2025
  {
    id: "brics-municipal-forum-2025",
    title:
      "Dr. Li Wencheng Invited to Attend BRICS International Municipal Forum, Signs Series of Cooperation Memoranda on Behalf of SCO Business Council",
    excerpt:
      "Deepening practical cooperation and signing MOUs at St. Petersburg BRICS International Municipal Forum.",
    image: "/news/brics-municipal-forum-2025/image1.jpeg",
    date: "November 21, 2025",
    category: "Company News",
    tags: ["BRICS", "SCO", "St. Petersburg", "Municipal Forum", "Cooperation"],
  },

  // Real: China–Russia Intergovernmental Investment Committee 2025
  {
    id: "china-russia-investment-committee-2025",
    title:
      "China–Russia Intergovernmental Investment Cooperation Committee Holds Meeting in Beijing; Murmansk Governor Andrey Chibis Delivers Speech",
    excerpt:
      "Talks highlight $200bn+ project pipeline, Arctic development and Northern Sea Route opportunities.",
    image: "/news/china-russia-investment-committee-2025/image1.jpeg",
    date: "November 1, 2025",
    category: "Company News",
    tags: ["Investment", "Committee", "Beijing", "Murmansk", "Arctic", "Northern Sea Route"],
  },

  // Real: Murmansk Governor Meeting 2025
  {
    id: "murmansk-governor-meeting-2025",
    title: "Murmansk Governor Andrey Chibis Meets Born International Representatives in Beijing",
    excerpt: "Arctic development, Northern Sea Route logistics and sector cooperation discussed.",
    image: "/news/murmansk-governor-meeting-2025/image1.jpeg",
    date: "November 2, 2025",
    category: "Company News",
    tags: ["Murmansk", "Arctic", "NSR", "Logistics", "Investment"],
  },

  // Real: Institute of Experimental Medicine 2025
  {
    id: "institute-of-experimental-medicine-2025",
    title:
      "Dr. Li Wencheng Leads Delegation to Visit Institute of Experimental Medicine, Holds Talks with Board Members",
    excerpt:
      "SCO+ Medical and Biotechnology Park progresses with strategic cooperation discussions in St. Petersburg.",
    image: "/news/institute-of-experimental-medicine-2025/image1.jpeg",
    date: "November 22, 2025",
    category: "Company News",
    tags: ["SCO+", "Biotech", "St. Petersburg", "Institute of Experimental Medicine"],
  },

  // Real: Global Market Outlook 2024
  {
    id: "global-market-outlook",
    title: "Global Market Outlook 2024: Navigating Innovation and Emerging Opportunities",
    excerpt:
      "Our comprehensive analysis of global markets and strategic investment opportunities in the year ahead.",
    image: "/news/20250815/3.jpg",
    date: "January 5, 2024",
    category: "Market Analysis",
    tags: [
      "Market Analysis",
      "Global Markets",
      "Investment Strategy",
      "Technology",
      "Emerging Markets",
    ],
  },

  // Real: Fourth Quarter Results 2023
  {
    id: "fourth-quarter-results",
    title: "Fourth Quarter 2023 Results: Strong Performance Across All Portfolios",
    excerpt:
      "Born International reports exceptional 4.9% quarterly return, driven by strategic investments in emerging technologies and sustainable solutions.",
    image: "/news/20250815/1.jpg",
    date: "January 15, 2024",
    category: "Financial Results",
    tags: [
      "Financial Results",
      "Investment Performance",
      "Portfolio Management",
      "Sustainable Investing",
      "Technology",
      "Healthcare",
    ],
  },
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
    "apec-healthcare-digitalization-forum-2026": "/news/apec-healthcare-digitalization-forum-2026",
    "muhammad-yunus-meeting-2026": "/news/muhammad-yunus-meeting-2026",
    "hong-kong-health-week-2026": "/news/hong-kong-health-week-2026",
    "moscow-startup-village-2025": "/news/moscow-startup-village-2025",
    "brics-municipal-forum-2025": "/news/brics-municipal-forum-2025",
    "china-russia-investment-committee-2025": "/news/china-russia-investment-committee-2025",
    "murmansk-governor-meeting-2025": "/news/murmansk-governor-meeting-2025",
    "institute-of-experimental-medicine-2025": "/news/institute-of-experimental-medicine-2025",
    "global-market-outlook": "/news/global-market-outlook",
    "fourth-quarter-results": "/news/fourth-quarter-results",
  }
  
  return articlePathMap[articleId] || "/news"
}
