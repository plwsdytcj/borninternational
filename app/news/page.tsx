"use client"
import { ArrowLeft, Calendar, ExternalLink, Search, Globe, ChevronDown, ArrowUpDown } from "lucide-react"
import { ResponsibleInvestmentBlurb } from "@/components/responsible-investment-blurb"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// Function to map article IDs to their page paths
function getArticlePathFromId(id: number): string {
  const articlePathMap: Record<number, string> = {
    16: "/news/spief-2026-strategic-cooperation",
    15: "/news/apec-healthcare-digitalization-forum-2026",
    14: "/news/muhammad-yunus-meeting-2026",
    13: "/news/hong-kong-health-week-2026",
    10: "/news/murmansk-governor-meeting-2025",
    9: "/news/china-russia-investment-committee-2025",
    8: "/news/institute-of-experimental-medicine-2025",
    7: "/news/brics-municipal-forum-2025",
    0: "/news/moscow-startup-village-2025",
    1: "/news/fourth-quarter-results",
    3: "/news/global-market-outlook",
    // Add more mappings as new articles are created
  }
  return articlePathMap[id] || "/news/template"
}

const newsArticles = [
  {
    id: 16,
    date: "June 19, 2026",
    title_en: "Born International Signs Tripartite Strategic Cooperation Agreement at SPIEF 2026",
    title_ru: "Born International Signs Tripartite Strategic Cooperation Agreement at SPIEF 2026",
    excerpt_en: "Born International, the Institute of Experimental Medicine and the Center for Artificial Intelligence for SCO+ Countries establish a long-term cooperation framework.",
    excerpt_ru: "Born International, the Institute of Experimental Medicine and the Center for Artificial Intelligence for SCO+ Countries establish a long-term cooperation framework.",
    image: "/news/spief-2026-strategic-cooperation/image1.jpg",
    category_en: "Company News",
    category_ru: "Company News",
    readTime: "6 min read",
  },
  {
    id: 15,
    date: "July 18, 2026",
    title_en: "Dr. Li Wencheng Speaks at APEC Healthcare Digitalization Forum on New Cross-Border Opportunities",
    title_ru: "Dr. Li Wencheng Speaks at APEC Healthcare Digitalization Forum on New Cross-Border Opportunities",
    excerpt_en:
      "Born International chairman shares a commercialization framework for bringing China's digital health technologies to Russia, Central Asia and emerging APEC markets.",
    excerpt_ru:
      "Born International chairman shares a commercialization framework for bringing China's digital health technologies to Russia, Central Asia and emerging APEC markets.",
    image: "/news/apec-healthcare-digitalization-forum-2026/image1.jpg",
    category_en: "Company News",
    category_ru: "Company News",
    readTime: "8 min read",
  },
  {
    id: 14,
    date: "May 19, 2026",
    title_en: "Nobel Peace Prize Laureate Muhammad Yunus Meets Born International Founder Dr. Li Wencheng",
    title_ru: "Nobel Peace Prize Laureate Muhammad Yunus Meets Born International Founder Dr. Li Wencheng",
    excerpt_en:
      "Talks in Dhaka focus on localized medical technology, biopharmaceutical cooperation and inclusive healthcare.",
    excerpt_ru:
      "Talks in Dhaka focus on localized medical technology, biopharmaceutical cooperation and inclusive healthcare.",
    image: "/news/muhammad-yunus-meeting-2026/image1.jpg",
    category_en: "Company News",
    category_ru: "Company News",
    readTime: "6 min read",
  },
  {
    id: 13,
    date: "May 11, 2026",
    title_en: "Global Healthcare Leaders Discuss New Breakthroughs as Dr. Li Wencheng Attends Hong Kong International Healthcare Week",
    title_ru: "Global Healthcare Leaders Discuss New Breakthroughs as Dr. Li Wencheng Attends Hong Kong International Healthcare Week",
    excerpt_en: "Born International explores healthcare innovation, international market access and China-Russia medical cooperation during the three-day event.",
    excerpt_ru: "Born International explores healthcare innovation, international market access and China-Russia medical cooperation during the three-day event.",
    image: "/news/hong-kong-health-week-2026/image1.png",
    category_en: "Company News",
    category_ru: "Company News",
    readTime: "7 min read",
  },
  {
    id: 10,
    date: "November 2, 2025",
    title_en: "Murmansk Governor meets Born International in Beijing",
    title_ru: "Murmansk Governor meets Born International in Beijing",
    excerpt_en:
      "Arctic development, Northern Sea Route logistics and sector cooperation discussed.",
    excerpt_ru:
      "Arctic development, Northern Sea Route logistics and sector cooperation discussed.",
    image: "/news/murmansk-governor-meeting-2025/image1.jpeg",
    category_en: "Company News",
    category_ru: "Company News",
    readTime: "4 min read",
  },
  {
    id: 9,
    date: "November 1, 2025",
    title_en:
      "China–Russia Investment Committee meets in Beijing; Murmansk Governor speaks",
    title_ru:
      "China–Russia Investment Committee meets in Beijing; Murmansk Governor speaks",
    excerpt_en:
      "$200bn+ project pipeline highlighted; Arctic development and Northern Sea Route opportunities discussed.",
    excerpt_ru:
      "$200bn+ project pipeline highlighted; Arctic development and Northern Sea Route opportunities discussed.",
    image: "/news/china-russia-investment-committee-2025/image1.jpeg",
    category_en: "Company News",
    category_ru: "Company News",
    readTime: "6 min read",
  },
  {
    id: 8,
    date: "November 22, 2025",
    title_en:
      "Dr. Li Wencheng Leads Delegation to Institute of Experimental Medicine",
    title_ru:
      "Dr. Li Wencheng Leads Delegation to Institute of Experimental Medicine",
    excerpt_en:
      "SCO+ Medical & Biotechnology Park progresses as Dr. Li meets with the Institute of Experimental Medicine in St. Petersburg.",
    excerpt_ru:
      "SCO+ Medical & Biotechnology Park progresses as Dr. Li meets with the Institute of Experimental Medicine in St. Petersburg.",
    image: "/news/institute-of-experimental-medicine-2025/image1.jpeg",
    category_en: "Company News",
    category_ru: "Company News",
    readTime: "5 min read",
  },
  {
    id: 7,
    date: "November 21, 2025",
    title_en:
      "Dr. Li Wencheng Invited to Attend BRICS International Municipal Forum, Signs Series of Cooperation Memoranda on Behalf of SCO Business Council",
    title_ru:
      "Dr. Li Wencheng Invited to Attend BRICS International Municipal Forum, Signs Series of Cooperation Memoranda on Behalf of SCO Business Council",
    excerpt_en:
      "Born International founder Dr. Li Wencheng attended the BRICS International Municipal Forum in St. Petersburg and signed a series of cooperation MOUs on behalf of the SCO Business Council.",
    excerpt_ru:
      "Born International founder Dr. Li Wencheng attended the BRICS International Municipal Forum in St. Petersburg and signed a series of cooperation MOUs on behalf of the SCO Business Council.",
    image: "/news/brics-municipal-forum-2025/image1.jpeg",
    category_en: "Company News",
    category_ru: "Company News",
    readTime: "5 min read",
  },
  {
    id: 0,
    date: "May 30, 2025",
    title_en: "Dr. Wencheng Li Leads Chinese Tech Delegation at 2025 Moscow Startup Village",
    title_ru: "Доктор Вэньчэн Ли возглавляет китайскую технологическую делегацию на Startup Village 2025 в Москве",
    excerpt_en:
      "Russia's flagship innovation summit focuses on deepening high-tech collaboration with Chinese ventures spanning AI, quantum computing, solid-state batteries and MedTech.",
    excerpt_ru:
      "Флагманский саммит инноваций России сосредоточен на углублении высокотехнологичного сотрудничества с китайскими предприятиями в области ИИ, квантовых вычислений, твердотельных батарей и медицинских технологий.",
    image: "/news/20250816/23401755338215_.pic_hd.jpg",
    category_en: "Company News",
    category_ru: "Новости компании",
    readTime: "4 min read",
  },
]

export default function NewsPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"en" | "ru">("en")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"date" | "title" | "category">("date")
  const [filteredArticles, setFilteredArticles] = useState(newsArticles)

  const languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
  ]

  // Search and sort functionality
  useEffect(() => {
    let filtered = newsArticles
    
    // Apply search filter
    if (searchQuery.trim() !== "") {
      filtered = newsArticles.filter((article) => {
        const searchLower = searchQuery.toLowerCase()
        const titleEn = article.title_en.toLowerCase()
        const titleRu = article.title_ru.toLowerCase()
        const excerptEn = article.excerpt_en.toLowerCase()
        const excerptRu = article.excerpt_ru.toLowerCase()
        const categoryEn = article.category_en.toLowerCase()
        const categoryRu = article.category_ru.toLowerCase()
        
        return (
          titleEn.includes(searchLower) ||
          titleRu.includes(searchLower) ||
          excerptEn.includes(searchLower) ||
          excerptRu.includes(searchLower) ||
          categoryEn.includes(searchLower) ||
          categoryRu.includes(searchLower)
        )
      })
    }
    
    // Separate pinned articles (first 2) from others
    const pinnedArticles = filtered.slice(0, 2)
    const otherArticles = filtered.slice(2)
    
    // Sort other articles based on sortBy
    const sortedOtherArticles = [...otherArticles].sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "title":
          return (language === "en" ? a.title_en : a.title_ru).localeCompare(
            language === "en" ? b.title_en : b.title_ru
          )
        case "category":
          return (language === "en" ? a.category_en : a.category_ru).localeCompare(
            language === "en" ? b.category_en : b.category_ru
          )
        default:
          return 0
      }
    })
    
    // Combine pinned articles with sorted others
    setFilteredArticles([...pinnedArticles, ...sortedOtherArticles])
  }, [searchQuery, sortBy, language])

  const languageContent = {
    en: {
      latestNews: "Latest News",
      newsDescription: "Stay updated with the latest developments, insights, and achievements from Born International",
      searchPlaceholder: "Search news articles...",
      readFullArticle: "Read full article",
      loadMoreArticles: "Load More Articles",
      stayInformed: "Stay Informed",
      newsletterDescription:
        "Subscribe to our newsletter to receive the latest news and insights directly in your inbox",
      enterYourEmail: "Enter your email",
      subscribe: "Subscribe",
      backToHome: "Back to Home",
      sortBy: "Sort by",
      sortByDate: "Date",
      sortByTitle: "Title", 
      sortByCategory: "Category",
      theFund: "The Fund",
      aboutTheFund: "About the fund",
      investmentStrategy: "Investment strategy",
      returns: "Returns",
      holdings: "Holdings",
      responsibleInvestment: "Responsible Investment",
      ourApproach: "Our approach",
      climate: "Climate",
      ownership: "Ownership",
      exclusions: "Exclusions",
      aboutBornInternational: "About Born International",
      organization: "Organization",
      careers: "Careers",
      contact: "Contact",
      press: "Press",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
      accessibility: "Accessibility",
    },
    ru: {
      latestNews: "Последние новости",
      newsDescription: "Будьте в курсе последних событий, аналитики и достижений Born International",
      searchPlaceholder: "Поиск новостных статей...",
      readFullArticle: "Читать статью полностью",
      loadMoreArticles: "Загрузить больше статей",
      stayInformed: "Будьте в курсе",
      newsletterDescription:
        "Подпишитесь на нашу рассылку, чтобы получать последние новости и аналитику прямо в ваш почтовый ящик",
      enterYourEmail: "Введите свой адрес электронной почты",
      subscribe: "Подписаться",
      backToHome: "Вернуться на главную",
      sortBy: "Сортировать по",
      sortByDate: "Дате",
      sortByTitle: "Заголовку",
      sortByCategory: "Категории",
      theFund: "Фонд",
      aboutTheFund: "О фонде",
      investmentStrategy: "Инвестиционная стратегия",
      returns: "Доходность",
      holdings: "Активы",
      responsibleInvestment: "Ответственное инвестирование",
      ourApproach: "Наш подход",
      climate: "Климат",
      ownership: "Собственность",
      exclusions: "Исключения",
      aboutBornInternational: "О Born International",
      organization: "Организация",
      careers: "Карьера",
      contact: "Контакты",
      press: "Пресса",
      privacyPolicy: "Политика конфиденциальности",
      termsOfUse: "Условия использования",
      accessibility: "Доступность",
    },
  }

  const currentLanguage = languages.find((lang) => lang.code === language)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 shadow-md">
        {/* Logo */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center focus:outline-none"
          aria-label="Back to Home"
        >
          <Image
            src="/logo/born_logo_white.png"
            alt="BORN International logo"
            width={120}
            height={48}
            className="h-9 w-auto sm:h-12"
          />
        </button>

        {/* Navigation */}
        <div className="flex items-center space-x-3 sm:space-x-6">
          <button
            onClick={() => router.push("/")}
            className="flex items-center space-x-2 text-white/90 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{languageContent[language].backToHome}</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="news-top" className="py-12 sm:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3 sm:mb-4">{languageContent[language].latestNews}</h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">{languageContent[language].newsDescription}</p>
          </div>

          {/* Search and Sort Controls */}
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4 sm:w-5 sm:h-5" />
              <Input 
                placeholder={languageContent[language].searchPlaceholder} 
                className="pl-10 py-2 sm:py-3 text-sm sm:text-lg bg-white/95 border-white/20 text-slate-900 placeholder-slate-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Search Results Info and Sort Controls */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              {/* Search Results Info */}
              {searchQuery.trim() !== "" && (
                <p className="text-slate-600">
                  {filteredArticles.length === 0 
                    ? `No articles found for "${searchQuery}"`
                    : `Found ${filteredArticles.length} article${filteredArticles.length === 1 ? '' : 's'} for "${searchQuery}"`
                  }
                </p>
              )}
              

            </div>
            
            {/* Sort Dropdown - Positioned in top right */}
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <span className="text-sm text-slate-600">{languageContent[language].sortBy}:</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex w-full items-center justify-between gap-2 sm:w-auto">
                    <ArrowUpDown className="w-4 h-4" />
                    <span>
                      {sortBy === "date" && languageContent[language].sortByDate}
                      {sortBy === "title" && languageContent[language].sortByTitle}
                      {sortBy === "category" && languageContent[language].sortByCategory}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem 
                    onClick={() => setSortBy("date")}
                    className={sortBy === "date" ? "bg-blue-50 text-blue-700" : ""}
                  >
                    {languageContent[language].sortByDate}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setSortBy("title")}
                    className={sortBy === "title" ? "bg-blue-50 text-blue-700" : ""}
                  >
                    {languageContent[language].sortByTitle}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => setSortBy("category")}
                    className={sortBy === "category" ? "bg-blue-50 text-blue-700" : ""}
                  >
                    {languageContent[language].sortByCategory}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className={`border-0 shadow-sm hover:shadow-lg transition-all duration-300 group ${
                  index < 2 ? 'ring-2 ring-blue-200 bg-blue-50/30' : ''
                }`}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title_en}
                      fill
                      className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {language === "en" ? article.category_en : article.category_ru}
                      </span>
                      {index < 2 && (
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          📌 Pinned
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-medium text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {language === "en" ? article.title_en : article.title_ru}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {language === "en" ? article.excerpt_en : article.excerpt_ru}
                    </p>
                    <Link href={getArticlePathFromId(article.id)}>
                      <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 group">
                        {languageContent[language].readFullArticle}
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 py-3 bg-transparent">
              {languageContent[language].loadMoreArticles}
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl font-light mb-4">{languageContent[language].stayInformed}</h2>
          <p className="text-slate-300 mb-8">{languageContent[language].newsletterDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder={languageContent[language].enterYourEmail} className="flex-1 bg-white text-slate-900" />
            <Button className="bg-blue-600 hover:bg-blue-700">{languageContent[language].subscribe}</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-[1fr_0.95fr_1.55fr_0.95fr]">
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
              <h4 className="font-medium mb-4">{languageContent[language].theFund}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    {languageContent[language].aboutTheFund}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {languageContent[language].investmentStrategy}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {languageContent[language].returns}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {languageContent[language].holdings}
                  </a>
                </li>
              </ul>
            </div>

            <ResponsibleInvestmentBlurb language={language} theme="dark" />

            <div>
              <h4 className="font-medium mb-4">{languageContent[language].aboutBornInternational}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    {languageContent[language].organization}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {languageContent[language].careers}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {languageContent[language].contact}
                  </a>
                </li>
                <li>
                  <Link href="/news" className="hover:text-white">
                    {languageContent[language].press}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2026 Born International. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                {languageContent[language].privacyPolicy}
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                {languageContent[language].termsOfUse}
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                {languageContent[language].accessibility}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
