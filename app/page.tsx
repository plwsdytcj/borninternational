"use client"
import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

function useCountUp(end: number, duration = 2000, suffix = "") {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  // Return just the count number, don't concatenate suffix here
  return { count, suffix }
}

function formatNumber(num: number): string {
  return num.toLocaleString("en-US")
}

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "ru">("en")

  const portfolioCount = useCountUp(125, 5000, "+")
  const fundScale = useCountUp(280000000, 5000)
  const techGlobalization = useCountUp(100, 5000, "+")

  const annualizedIRR = useCountUp(24, 5000, "%+")
  const portfolioCompanies = useCountUp(100, 5000, "+")
  const investors = useCountUp(30, 5000, "+")
  const fundValue = useCountUp(140, 5000)

  const languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
  ]

  const languageContent = {
    en: {
      fundValueLabel: "THE FUND'S VALUE",
      heroDescription: "A global investment platform focusing on early-stage\nhigh-tech startups and value investing",
      annualizedIRR: "Annualized IRR",
      portfolioCompanies: "Portfolio companies",
      investors: "Investors",
      valueDevelopment: "Value development",
      investmentInChina: "Investment in Chinese Mainland",
      investmentInChinaDescription:
        "Born Capital is a well-known early-stage investment institution in Chinese Mainland with management of 10 RMB VC funds. We have invested directly or indirectly in more than 100 enterprises, most of which are high-tech startups.",
      learnMoreInvestments: "Learn more about our investments",
      globalInvestment: "Technology Globalization",
      globalInvestmentDescription:
        "We drive technology globalization through strategic investments across multiple global markets including Hong Kong, Singapore, Dubai, Saudi Arabia, London, Oxford, Germany, Japan, Russia, Israel, and the United States, fostering cross-border innovation and technology transfer.",
      ourGlobalNetwork: "Our global network",
      globalReach: "Global Network",
      globalReachDescription:
        "Our worldwide presence enables us to identify opportunities and manage investments across diverse markets and sectors",
      exploreOurHoldings: "Explore our holdings",
      riskManagement: "Risk management",
      riskManagementDescription:
        "Our comprehensive risk management framework ensures we can navigate market volatility while protecting the fund's long-term value. We continuously monitor and assess various risk factors across our portfolio.",
      riskFrameworkDetails: "Risk framework details",
      latestNews: "Latest news",
      viewAllNews: "View all news",
      fourthQuarterResults: "Fourth quarter 2023 results",
      fourthQuarterResultsDescription:
        "The fund returned 4.9% in the fourth quarter, corresponding to a gain of NOK 980 billion.",
      readMore: "Read more",
      climateTransitionInvestments: "Climate transition investments",
      climateTransitionInvestmentsDescription:
        "New framework for investing in companies that contribute to the green transition.",
      globalMarketOutlook: "Global market outlook 2024",
      globalMarketOutlookDescription:
        "Our expectations for global markets and investment opportunities in the year ahead.",
      bornInternationalExpands: "Born International expands to Southeast Asia",
      bornInternationalExpandsDescription: "Strategic expansion into Singapore and Hong Kong markets.",
      quantumComputingBreakthrough: "Quantum computing investment breakthrough",
      quantumComputingBreakthroughDescription: "Portfolio company achieves major quantum milestone.",
      annualInvestorConference: "Annual investor conference highlights",
      annualInvestorConferenceDescription: "Key insights from our annual investor conference.",
      aiInvestmentTrends: "AI investment trends 2024",
      aiInvestmentTrendsDescription: "Emerging opportunities in artificial intelligence sector.",
      sustainabilityImpactReport: "Sustainability impact report",
      sustainabilityImpactReportDescription: "Our commitment to environmental responsibility.",
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
      aboutNbim: "About NBIM",
      organization: "Organization",
      careers: "Careers",
      contact: "Contact",
      press: "Press",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
      accessibility: "Accessibility",
      portfolio: "Portfolio",
      fundScale: "Fund Scale",
      techGlobalization: "Technology Globalization",
    },
    ru: {
      fundValueLabel: "СТОИМОСТЬ ФОНДА",
      heroDescription:
        "Глобальная инвестиционная платформа, ориентированная на стартапы на ранней стадии\nвысоких технологий и стоимостное инвестирование",
      annualizedIRR: "Годовая IRR",
      portfolioCompanies: "Портфельные компании",
      investors: "Инвесторы",
      valueDevelopment: "Развитие стоимости",
      investmentInChina: "Инвестиции в материковом Китае",
      investmentInChinaDescription:
        "Born Capital — известное инвестиционное учреждение на ранней стадии в материковом Китае, управляющее 10 фондами венчурного капитала в юанях. Мы инвестировали напрямую или косвенно в более чем 100 предприятий, большинство из которых являются высокотехнологичными стартапами.",
      learnMoreInvestments: "Узнайте больше о наших инвестициях",
      globalInvestment: "Технологическая глобализация",
      globalInvestmentDescription:
        "Мы способствуем технологической глобализации через стратегические инвестиции на многих мировых рынках, включая Гонконг, Сингапур, Дубай, Саудовскую Аравию, Лондон, Оксфорд, Германию, Японию, Россию, Израиль и США, способствуя трансграничным инновациям и передаче технологий.",
      ourGlobalNetwork: "Наша глобальная сеть",
      globalReach: "Глобальная сеть",
      globalReachDescription:
        "Наше всемирное присутствие позволяет нам выявлять возможности и управлять инвестициями на различных рынках и в различных секторах",
      exploreOurHoldings: "Изучите наши активы",
      riskManagement: "Управление рисками",
      riskManagementDescription:
        "Наша комплексная система управления рисками гарантирует, что мы сможем справиться с волатильностью рынка, защищая при этом долгосрочную стоимость фонда. Мы постоянно отслеживаем и оцениваем различные факторы риска в нашем портфеле.",
      riskFrameworkDetails: "Подробности структуры рисков",
      latestNews: "Последние новости",
      viewAllNews: "Посмотреть все новости",
      fourthQuarterResults: "Результаты за четвертый квартал 2023 г.",
      fourthQuarterResultsDescription:
        "Фонд вернул 4,9% в четвертом квартале, что соответствует прибыли в 980 миллиардов норвежских крон.",
      readMore: "Читать далее",
      climateTransitionInvestments: "Инвестиции в переход к экологически чистой экономике",
      climateTransitionInvestmentsDescription:
        "Новая структура для инвестиций в компании, которые вносят вклад в экологический переход.",
      globalMarketOutlook: "Обзор мирового рынка на 2024 год",
      globalMarketOutlookDescription:
        "Наши ожидания относительно мировых рынков и инвестиционных возможностей в предстоящем году.",
      bornInternationalExpands: "Born International расширяется в Юго-Восточную Азию",
      bornInternationalExpandsDescription: "Стратегическое расширение на рынки Сингапура и Гонконга.",
      quantumComputingBreakthrough: "Прорыв в инвестициях в квантовые вычисления",
      quantumComputingBreakthroughDescription: "Портфельная компания достигает важной вехи в квантовой области.",
      annualInvestorConference: "Основные моменты ежегодной конференции инвесторов",
      annualInvestorConferenceDescription: "Ключевые выводы нашей ежегодной конференции инвесторов.",
      aiInvestmentTrends: "Тенденции инвестиций в ИИ в 2024 году",
      aiInvestmentTrendsDescription: "Новые возможности в секторе искусственного интеллекта.",
      sustainabilityImpactReport: "Отчет о воздействии на устойчивое развитие",
      sustainabilityImpactReportDescription: "Наша приверженность экологической ответственности.",
      theFund: "Фонд",
      aboutTheFund: "О фонде",
      investmentStrategy: "Инвестиционная стратегия",
      returns: "Доходы",
      holdings: "Активы",
      responsibleInvestment: "Ответственные инвестиции",
      ourApproach: "Наш подход",
      climate: "Климат",
      ownership: "Собственность",
      exclusions: "Исключения",
      aboutNbim: "О NBIM",
      organization: "Организация",
      careers: "Карьера",
      contact: "Контакт",
      press: "Пресса",
      privacyPolicy: "Политика конфиденциальности",
      termsOfUse: "Условия использования",
      accessibility: "Доступность",
      portfolio: "Портфолио",
      fundScale: "Масштаб фонда",
      techGlobalization: "Технологическая глобализация",
    },
  }

  const content = languageContent[language]
  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <main className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1e7bf0ca-be1d-4e74-b8ef-e0974969b114.jpg-qAVXbwgwgITOqZMjAl9bh2n5kKbUnf.jpeg"
            alt="BORN Capital mountain landscape with snow-capped peaks and blue sky"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 h-full px-4">
          {/* Top-left corner content */}
          <div className="absolute top-8 left-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-24061R04040P1-WBqINdwaKn97yhsgNwo0aK3epgI9VP.png"
              alt="BORN International logo"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
          </div>

          {/* Centered statistics cards */}
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="mb-8"></div>
            <div className="mb-12 max-w-2xl"></div>

            {/* Key Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-60 md:mt-80 mb-8 md:mb-12 max-w-4xl w-full px-4">
              <div className="text-center group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-4">
                <h3
                  className="text-2xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-4 tracking-tighter drop-shadow-lg transition-all duration-500 group-hover:text-yellow-200 group-hover:scale-105"
                  style={{ color: "#f0f2ff" }}
                >
                  {portfolioCount.count}
                  {portfolioCount.suffix}
                </h3>
                <p
                  className="text-sm md:text-base lg:text-lg font-semibold tracking-wide transition-all duration-500 group-hover:text-yellow-100 group-hover:scale-105"
                  style={{ color: "#ebeff2" }}
                >
                  {content.portfolio}
                </p>
                <div className="w-0 h-1 bg-yellow-300 mx-auto mt-2 transition-all duration-500 group-hover:w-full"></div>
              </div>

              <div className="text-center group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-4">
                <div className="flex items-baseline justify-center space-x-2 mb-2 md:mb-4">
                  <h3
                    className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter drop-shadow-lg transition-all duration-500 group-hover:text-blue-200 group-hover:scale-105"
                    style={{ color: "#ebeff2" }}
                  >
                    {formatNumber(fundScale.count)}
                  </h3>
                  <span
                    className="text-base md:text-lg lg:text-xl font-semibold tracking-wide transition-all duration-500 group-hover:text-blue-100 group-hover:scale-105"
                    style={{ color: "#f2f2f2" }}
                  >
                    USD
                  </span>
                </div>
                <p
                  className="text-sm md:text-base lg:text-lg font-semibold tracking-wide transition-all duration-500 group-hover:text-blue-100 group-hover:scale-105"
                  style={{ color: "#f2f2f2" }}
                >
                  {content.fundScale}
                </p>
                <div className="w-0 h-1 bg-blue-300 mx-auto mt-2 transition-all duration-500 group-hover:w-full"></div>
              </div>

              <div className="text-center group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-4">
                <h3
                  className="text-2xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-4 tracking-tighter drop-shadow-lg transition-all duration-500 group-hover:text-green-200 group-hover:scale-105"
                  style={{ color: "#f2f2f2" }}
                >
                  {techGlobalization.count}
                  {techGlobalization.suffix}
                </h3>
                <p
                  className="text-sm md:text-base lg:text-lg font-semibold tracking-wide transition-all duration-500 group-hover:text-green-100 group-hover:scale-105"
                  style={{ color: "#ffffff" }}
                >
                  {content.techGlobalization}
                </p>
                <div className="w-0 h-1 bg-green-300 mx-auto mt-2 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Investment Strategy Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-project-1.jpg-tV09kNqFLM1dZKM96BCVwuCWLZAO9y.jpeg"
            alt="Investment landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-slate-900 mb-6">{content.investmentInChina}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{content.investmentInChinaDescription}</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  <span className="text-slate-700">100+ Portfolio companies</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full" />
                  <span className="text-slate-700">24%+ Annualized IRR</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-600 rounded-full" />
                  <span className="text-slate-700">30+ Investors</span>
                </div>
              </div>
              <Link href="/portfolio">
                <button className="mt-8 group relative flex items-center text-lg font-medium text-slate-900 hover:text-slate-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative border-b-2 border-slate-300 group-hover:border-slate-500 pb-1 transition-all duration-500 group-hover:shadow-lg">
                    {content.learnMoreInvestments}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-700 ease-out"></span>
                  </span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-500 group-hover:text-blue-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg -z-10"></div>
                </button>
              </Link>
            </div>
            <div className="relative h-96">
              <Image
                src="/modern-financial-office.png"
                alt="Modern financial district"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Investment Section - Text on Right */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-team.jpg-OoZveCWDeOjHeN6l2Np9ve51u4sqN7.jpeg"
            alt="Rock climbing adventure landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/worldmap.jpg-MLpAjtteFWsfx1UFAXo9pFZSQYqNYI.jpeg"
                alt="Global technology network connections world map"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-light text-slate-900 mb-6">{content.globalInvestment}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{content.globalInvestmentDescription}</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full" />
                  <span className="text-slate-700">Silicon Valley & New York</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  <span className="text-slate-700">London & Oxford</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-purple-600 rounded-full" />
                  <span className="text-slate-700">Asia-Pacific presence</span>
                </div>
              </div>
              <Link href="/global">
                <button className="mt-8 group relative flex items-center text-lg font-medium text-slate-900 hover:text-slate-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative border-b-2 border-slate-300 group-hover:border-slate-500 pb-1 transition-all duration-500 group-hover:shadow-lg">
                    {content.ourGlobalNetwork}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-700 ease-out"></span>
                  </span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-500 group-hover:text-green-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg -z-10"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section - Text on Left */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-news.jpg-l5ngZiDwXZS3hRRKK6BsoyGNdyegyL.jpeg"
            alt="Modern urban architecture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-slate-900 mb-6">{content.globalReach}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{content.globalReachDescription}</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full" />
                  <span className="text-slate-700">North America: 45%</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  <span className="text-slate-700">Europe: 30%</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-yellow-600 rounded-full" />
                  <span className="text-slate-700">Asia-Pacific: 25%</span>
                </div>
              </div>
              <button className="mt-8 group relative flex items-center text-lg font-medium text-slate-900 hover:text-slate-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                <span className="relative border-b-2 border-slate-300 group-hover:border-slate-500 pb-1 transition-all duration-500 group-hover:shadow-lg">
                  {content.exploreOurHoldings}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-700 ease-out"></span>
                </span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-500 group-hover:text-yellow-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg -z-10"></div>
              </button>
            </div>
            <div className="relative h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Digital-thumb.jpg-dBDj7hHgQ8efZNKI44qpRNjWYbsQJy.jpeg"
                alt="3D globe with digital network icons and global connectivity visualization"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management Section - Text on Right */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-case.jpg-TBjEPgDXpPqKT9TJkQB0HxDlyTfFdp.jpeg"
            alt="Serene mountain landscape for strategic planning"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96">
              <Image
                src="/financial-charts-graphs.png"
                alt="Risk management and analysis"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-light text-slate-900 mb-6">{content.riskManagement}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{content.riskManagementDescription}</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-600 rounded-full" />
                  <span className="text-slate-700">Market risk assessment</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full" />
                  <span className="text-slate-700">Credit risk monitoring</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full" />
                  <span className="text-slate-700">Operational risk controls</span>
                </div>
              </div>
              <button className="mt-8 group relative flex items-center text-lg font-medium text-slate-900 hover:text-slate-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                <span className="relative border-b-2 border-slate-300 group-hover:border-slate-500 pb-1 transition-all duration-500 group-hover:shadow-lg">
                  {content.riskFrameworkDetails}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-700 ease-out"></span>
                </span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-500 group-hover:text-red-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg -z-10"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-about.jpg-ytx0bPGlCecDLJktCv9FlH9G7g4wlz.jpeg"
            alt="Expansive mountain news background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-light text-slate-900">{content.latestNews}</h2>
            <Link href="/news">
              <button className="group relative flex items-center text-lg font-medium text-slate-900 hover:text-slate-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                <span className="relative border-b-2 border-slate-300 group-hover:border-slate-500 pb-1 transition-all duration-500 group-hover:shadow-lg">
                  {content.viewAllNews}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-700 ease-out"></span>
                </span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-500 group-hover:text-purple-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg -z-10"></div>
              </button>
            </Link>
          </div>

          {/* Fixed Top News Row - Horizontal Alternating Layout */}
          <div className="space-y-12 mb-12">
            {/* First News Item - Left Image, Right Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-center bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full lg:w-1/2 h-64">
                <Image src="/financial-charts-graphs.png" alt="Financial charts" fill className="object-cover" />
              </div>
              <div className="w-full lg:w-1/2 p-8">
                <p className="text-sm text-slate-500 mb-2">January 15, 2024</p>
                <h3 className="text-2xl font-medium text-slate-900 mb-4">{content.fourthQuarterResults}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{content.fourthQuarterResultsDescription}</p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  {content.readMore}
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Second News Item - Right Image, Left Content */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full lg:w-1/2 h-64">
                <Image src="/modern-financial-office.png" alt="Sustainable energy" fill className="object-cover" />
              </div>
              <div className="w-full lg:w-1/2 p-8">
                <p className="text-sm text-slate-500 mb-2">January 10, 2024</p>
                <h3 className="text-2xl font-medium text-slate-900 mb-4">{content.climateTransitionInvestments}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{content.climateTransitionInvestmentsDescription}</p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  {content.readMore}
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Third News Item - Left Image, Right Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-center bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full lg:w-1/2 h-64">
                <Image src="/global-connections-map.png" alt="Global investments" fill className="object-cover" />
              </div>
              <div className="w-full lg:w-1/2 p-8">
                <p className="text-sm text-slate-500 mb-2">January 5, 2024</p>
                <h3 className="text-2xl font-medium text-slate-900 mb-4">{content.globalMarketOutlook}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{content.globalMarketOutlookDescription}</p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  {content.readMore}
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Scrolling News Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {/* First set of scrolling news */}
              <Card className="flex-shrink-0 w-80 border-0 shadow-sm hover:shadow-md transition-shadow bg-white/95">
                <CardContent className="p-0">
                  <div className="relative h-32">
                    <Image
                      src="/modern-financial-office.png"
                      alt="Financial office"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-500 mb-1">December 20, 2023</p>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">{content.bornInternationalExpands}</h4>
                    <p className="text-xs text-slate-600 mb-2">{content.bornInternationalExpandsDescription}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-shrink-0 w-80 border-0 shadow-sm hover:shadow-md transition-shadow bg-white/95">
                <CardContent className="p-0">
                  <div className="relative h-32">
                    <Image
                      src="/global-connections-map.png"
                      alt="Technology breakthrough"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-500 mb-1">December 15, 2023</p>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">{content.quantumComputingBreakthrough}</h4>
                    <p className="text-xs text-slate-600 mb-2">{content.quantumComputingBreakthroughDescription}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-shrink-0 w-80 border-0 shadow-sm hover:shadow-md transition-shadow bg-white/95">
                <CardContent className="p-0">
                  <div className="relative h-32">
                    <Image
                      src="/financial-charts-graphs.png"
                      alt="Conference highlights"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-500 mb-1">December 10, 2023</p>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">{content.annualInvestorConference}</h4>
                    <p className="text-xs text-slate-600 mb-2">{content.annualInvestorConferenceDescription}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-shrink-0 w-80 border-0 shadow-sm hover:shadow-md transition-shadow bg-white/95">
                <CardContent className="p-0">
                  <div className="relative h-32">
                    <Image
                      src="/global-connections-map.png"
                      alt="Market analysis"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-500 mb-1">December 5, 2023</p>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">{content.aiInvestmentTrends}</h4>
                    <p className="text-xs text-slate-600 mb-2">{content.aiInvestmentTrendsDescription}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-shrink-0 w-80 border-0 shadow-sm hover:shadow-md transition-shadow bg-white/95">
                <CardContent className="p-0">
                  <div className="relative h-32">
                    <Image
                      src="/modern-financial-office.png"
                      alt="Sustainability report"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-500 mb-1">November 30, 2023</p>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">{content.sustainabilityImpactReport}</h4>
                    <p className="text-xs text-slate-600 mb-2">{content.sustainabilityImpactReportDescription}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Duplicate set for seamless loop */}
              <Card className="flex-shrink-0 w-80 border-0 shadow-sm hover:shadow-md transition-shadow bg-white/95">
                <CardContent className="p-0">
                  <div className="relative h-32">
                    <Image
                      src="/modern-financial-office.png"
                      alt="Financial office"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-500 mb-1">December 20, 2023</p>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">{content.bornInternationalExpands}</h4>
                    <p className="text-xs text-slate-600 mb-2">{content.bornInternationalExpandsDescription}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex-shrink-0 w-80 border-0 shadow-sm hover:shadow-md transition-shadow bg-white/95">
                <CardContent className="p-0">
                  <div className="relative h-32">
                    <Image
                      src="/global-connections-map.png"
                      alt="Technology breakthrough"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-500 mb-1">December 15, 2023</p>
                    <h4 className="text-sm font-medium text-slate-900 mb-2">{content.quantumComputingBreakthrough}</h4>
                    <p className="text-xs text-slate-600 mb-2">{content.quantumComputingBreakthroughDescription}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-24061R04040P1-WBqINdwaKn97yhsgNwo0aK3epgI9VP.png"
                  alt="BORN International Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-slate-400 text-sm">
                A global investment platform focusing on early-stage high-tech startups.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">{content.theFund}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    {content.aboutTheFund}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {content.investmentStrategy}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {content.returns}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {content.holdings}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">{content.responsibleInvestment}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    {content.ourApproach}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {content.climate}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {content.ownership}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {content.exclusions}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">{content.aboutNbim}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    {content.organization}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {content.careers}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {content.contact}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    {content.press}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 Norges Bank Investment Management. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                {content.privacyPolicy}
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                {content.termsOfUse}
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                {content.accessibility}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
