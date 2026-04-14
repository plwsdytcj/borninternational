"use client"
import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
import { ResponsibleInvestmentBlurb } from "@/components/responsible-investment-blurb"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

// 客户端检测hook
function useIsClient() {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  return isClient
}

function useCountUp(end: number, duration = 2000, suffix = "") {
  const [count, setCount] = useState(0)
  const isClient = useIsClient()

  useEffect(() => {
    if (!isClient) return
    
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
  }, [end, duration, isClient])

  // Return just the count number, don't concatenate suffix here
  return { count, suffix }
}

function formatNumber(num: number): string {
  // 避免hydration错误，使用简单的数字格式化
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default function HomePage() {
  const language: "en" | "ru" = "en"
  const portfolioCount = useCountUp(125, 5000, "+")
  const fundScale = useCountUp(280000000, 5000)
  const techGlobalization = useCountUp(100, 5000, "+")

  const languageContent = {
    en: {
      fundValueLabel: "THE FUND'S VALUE",
      heroDescription:
        "We invest in Chinese hard-tech companies and build operating routes into Russia, the CIS, and adjacent markets.",
      annualizedIRR: "Annualized IRR",
      portfolioCompanies: "Portfolio companies",
      investors: "Investors",
      valueDevelopment: "Value development",
      homeHeroLine1: "Investment",
      homeHeroLine2: "Enterprise Global Expansion",
      homeHeroLine3: "AI Company",
      investmentInChina: "Investment",
      investmentInChinaLead: "We back Chinese hard-tech founders before overseas demand becomes obvious.",
      investmentInChinaDescription:
        "Our portfolio concentrates on AI, robotics, blockchain, quantum, climate, and industrial technology, with underwriting tied to real cross-border commercialization potential.",
      learnMoreInvestments: "See our investment thesis →",
      globalInvestment: "Russia & CIS Expansion",
      globalInvestmentDescription:
        "We turn cross-border expansion into execution: feasibility work, policy access, local entities, banking, hiring, and customer introductions across the Russian-speaking market.",
      exploreGlobalExpansion: "See the Russia & CIS playbook →",
      aiCompanyTitle: "AI Systems",
      aiCompanySubtitle: "For diligence, underwriting, and cross-border execution.",
      aiCompanyDescription:
        "We build proprietary AI tools for financial institutions to speed screening, due diligence, and operating workflows tied to real transactions.",
      exploreAiCapabilities: "See our AI systems →",

      latestNews: "Latest news",
      viewAllNews: "View all news",
      moscowStartupVillage: "Dr. Wencheng Li Leads Chinese Tech Delegation at 2025 Moscow Startup Village",
      moscowStartupVillageDescription:
        "Russia's flagship innovation summit focuses on deepening high-tech collaboration with Chinese ventures spanning AI, quantum computing, solid-state batteries and MedTech.",
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
      aboutNbim: "About Born International",
      organization: "Organization",
      careers: "Careers",
      contact: "Contact",
      press: "Press",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
      accessibility: "Accessibility",
      portfolio: "Investment",
      fundScale: "Enterprise Global Expansion",
      techGlobalization: "AI Company",
    },
    ru: {
      fundValueLabel: "СТОИМОСТЬ ФОНДА",
      heroDescription:
        "Мы инвестируем в китайские hard-tech компании и строим для них маршруты выхода в Россию, СНГ и соседние рынки.",
      annualizedIRR: "Годовая IRR",
      portfolioCompanies: "Портфельные компании",
      investors: "Инвесторы",
      valueDevelopment: "Развитие стоимости",
      homeHeroLine1: "Инвестиции",
      homeHeroLine2: "Глобальная экспансия предприятий",
      homeHeroLine3: "AI-компания",
      investmentInChina: "Инвестиции",
      investmentInChinaLead: "Мы входим в китайский hard tech на ранней стадии, до того как зарубежный спрос становится очевидным.",
      investmentInChinaDescription:
        "Наш портфель сосредоточен на AI, робототехнике, блокчейне, квантовых технологиях, климатических и промышленных решениях, где инвестиционный тезис связан с реальной трансграничной коммерциализацией.",
      learnMoreInvestments: "Посмотреть инвестиционный тезис →",
      globalInvestment: "Выход в Россию и СНГ",
      globalInvestmentDescription:
        "Мы превращаем трансграничную экспансию в конкретные шаги: исследование рынка, доступ к регуляторам, локальная компания, банки, найм и выход к клиентам на русскоязычном рынке.",
      exploreGlobalExpansion: "Посмотреть модель выхода в Россию и СНГ →",
      aiCompanyTitle: "AI-системы",
      aiCompanySubtitle: "Для анализа сделок, due diligence и трансграничного исполнения.",
      aiCompanyDescription:
        "Мы создаем собственные AI-инструменты для финансовых организаций, чтобы ускорять скрининг, due diligence и операционные процессы по реальным сделкам.",
      exploreAiCapabilities: "Посмотреть AI-системы →",

      latestNews: "Последние новости",
      viewAllNews: "Посмотреть все новости",
      moscowStartupVillage: "Доктор Вэньчэн Ли возглавляет китайскую технологическую делегацию на Startup Village 2025 в Москве",
      moscowStartupVillageDescription:
        "Флагманский саммит инноваций России сосредоточен на углублении высокотехнологичного сотрудничества с китайскими предприятиями в области ИИ, квантовых вычислений, твердотельных батарей и медицинских технологий.",
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
      aboutNbim: "О Born International",
      organization: "Организация",
      careers: "Карьера",
      contact: "Контакт",
      press: "Пресса",
      privacyPolicy: "Политика конфиденциальности",
      termsOfUse: "Условия использования",
      accessibility: "Доступность",
      portfolio: "Investment",
      fundScale: "Enterprise Global Expansion",
      techGlobalization: "AI Company",
    },
  }

  const content = languageContent[language]

  return (
    <div className="min-h-screen bg-white scroll-smooth snap-container">
      <div className="pointer-events-none fixed right-2 top-1/2 z-30 hidden -translate-y-1/2 md:flex flex-col items-center gap-4 pr-1">
        {["Investment", "Enterprise Global Expansion", "AI Company"].map((label, index) => (
          <span
            key={label}
            className={`text-[10px] tracking-[0.24em] uppercase ${index === 0 ? "text-slate-500/85" : "text-slate-400/75"}`}
            style={{ writingMode: "vertical-rl" }}
          >
            {label}
          </span>
        ))}
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
        }
        
        .snap-section {
          transition: none;
          min-height: 100vh;
        }
        
        /* 手机端优化 */
        @media (max-width: 768px) {
          .snap-section {
            height: auto !important;
            min-height: 100svh;
            padding: 0.5rem 0;
          }
          
          /* 移动端触摸滚动优化 */
          .snap-container {
            -webkit-overflow-scrolling: touch;
            scroll-behavior: auto;
          }
          
          /* 移动端禁用hover效果 */
          .snap-section:hover {
            transform: none;
          }
        }

        .snap-container {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        /* 自定义滚动条 */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        
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
          width: max-content;
          display: flex;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        /* Line clamp utilities */
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
      {/* Hero Section */}
      <main className="relative h-screen snap-section">
        <div className="absolute inset-0">
          <Image
            src="/vi-reference/image1.jpeg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/22 via-slate-950/26 to-slate-950/40 md:from-slate-950/16 md:via-slate-950/20 md:to-slate-950/30" />
        </div>

        <div className="relative z-10 h-full px-4">
          {/* Top-left corner content */}
          <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
            <Image
              src="/logo/born_logo_white.png"
              alt="BORN International logo"
              width={120}
              height={48}
              className="h-8 w-auto sm:h-10"
            />
          </div>
          


          {/* Centered headline + statistics */}
          <div className="flex h-full flex-col items-center justify-center px-2 pb-8 pt-20 text-center sm:px-4 md:pb-12 md:pt-24">
            <div className="w-full max-w-5xl rounded-[28px] border border-white/12 bg-slate-950/18 px-4 py-6 backdrop-blur-[3px] sm:px-6 sm:py-8 md:border-0 md:bg-transparent md:px-2 md:py-0 md:backdrop-blur-0">

              {/* Key Statistics Cards */}
              <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-6">
                <div className="group rounded-2xl border border-white/12 bg-black/18 px-4 py-4 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-yellow-200/40">
                  <h3
                    className="tabular-nums mb-1 text-3xl font-black tracking-tighter drop-shadow-lg sm:text-[2rem] md:mb-3 md:text-4xl lg:text-5xl"
                    style={{ color: "#f0f2ff" }}
                  >
                    {portfolioCount.count}
                    {portfolioCount.suffix}
                  </h3>
                  <p
                    className="text-sm font-semibold tracking-wide text-white/90 sm:text-sm md:text-base lg:text-lg"
                    style={{ color: "#ebeff2" }}
                  >
                    {content.portfolio}
                  </p>
                </div>

                <div className="group rounded-2xl border border-white/12 bg-black/18 px-4 py-4 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200/40">
                  <div className="mb-1 flex flex-col items-center justify-center gap-1 sm:mb-3">
                    <h3
                      className="tabular-nums text-[2rem] font-black tracking-tighter drop-shadow-lg sm:text-[2rem] md:text-4xl lg:text-5xl"
                      style={{ color: "#ebeff2" }}
                    >
                      {formatNumber(fundScale.count)}
                    </h3>
                    <span
                      className="text-sm font-semibold tracking-[0.16em] text-white/90 sm:text-sm md:text-base lg:text-lg"
                      style={{ color: "#f2f2f2" }}
                    >
                      USD
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold tracking-wide text-white/90 sm:text-sm md:text-base lg:text-lg"
                    style={{ color: "#f2f2f2" }}
                  >
                    {content.fundScale}
                  </p>
                </div>

                <div className="group rounded-2xl border border-white/12 bg-black/18 px-4 py-4 text-center shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-green-200/40">
                  <h3
                    className="tabular-nums mb-1 text-3xl font-black tracking-tighter drop-shadow-lg sm:text-[2rem] md:mb-3 md:text-4xl lg:text-5xl"
                    style={{ color: "#f2f2f2" }}
                  >
                    {techGlobalization.count}
                    {techGlobalization.suffix}
                  </h3>
                  <p
                    className="text-sm font-semibold tracking-wide text-white/90 sm:text-sm md:text-base lg:text-lg"
                    style={{ color: "#ffffff" }}
                  >
                    {content.techGlobalization}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Investment */}
      <section className="min-h-screen relative flex items-center snap-section py-12 md:py-0">
        <div className="absolute inset-0">
          <Image
            src="/home/investment-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/65" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-[92px] lg:flex flex-col items-center justify-between border-r border-white/30 bg-gradient-to-b from-slate-950/94 via-slate-900/84 to-slate-950/94 py-8 shadow-[inset_-1px_0_0_rgba(255,255,255,0.18)]">
          <Image src="/logo/born_logo_white.png" alt="" width={70} height={24} className="h-5 w-auto opacity-95" />
          <span className="text-[11px] font-semibold tracking-[0.24em] text-white/85 uppercase" style={{ writingMode: "vertical-rl" }}>
            Born
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:pl-28 w-full py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 md:gap-12 lg:gap-14 items-center">
            <div className="rounded-2xl border border-white/80 bg-white/95 backdrop-blur-md shadow-sm px-6 py-8 md:px-8 md:py-10">
              <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-950 mb-4 md:mb-6">{content.investmentInChina}</h2>
              <p className="text-base md:text-lg text-slate-800 mb-3 md:mb-4 leading-relaxed">{content.investmentInChinaLead}</p>
              <p className="text-base md:text-lg text-slate-800 mb-6 md:mb-8 leading-relaxed">{content.investmentInChinaDescription}</p>
              <Link href="/portfolio">
                <button className="mt-6 md:mt-8 group relative flex items-center text-base md:text-lg font-medium text-slate-950 hover:text-slate-800 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative border-b-2 border-slate-400 group-hover:border-slate-600 pb-1 transition-all duration-500 group-hover:shadow-lg">
                    {content.learnMoreInvestments}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-700 ease-out"></span>
                  </span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-500 group-hover:text-blue-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg -z-10"></div>
                </button>
              </Link>
            </div>
            <div className="relative w-full aspect-video max-h-[min(52vh,520px)] rounded-xl overflow-hidden border border-slate-300/60 shadow-lg">
              <Image
                src="/home/investment-panel.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Expansion */}
      <section className="min-h-screen relative flex items-center snap-section py-12 md:py-0">
        <div className="absolute inset-0">
          <Image
            src="/home/global-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/65" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-[92px] lg:flex flex-col items-center justify-between border-r border-white/30 bg-gradient-to-b from-slate-950/94 via-slate-900/84 to-slate-950/94 py-8 shadow-[inset_-1px_0_0_rgba(255,255,255,0.18)]">
          <Image src="/logo/born_logo_white.png" alt="" width={70} height={24} className="h-5 w-auto opacity-95" />
          <span className="text-[11px] font-semibold tracking-[0.24em] text-white/85 uppercase" style={{ writingMode: "vertical-rl" }}>
            Born
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:pl-28 w-full py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 md:gap-12 lg:gap-14 items-center">
            <div className="relative w-full aspect-video max-h-[min(52vh,520px)] rounded-xl overflow-hidden border border-slate-300/60 shadow-lg order-2 lg:order-1">
              <Image
                src="/home/global-panel.jpg"
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="order-1 lg:order-2 rounded-2xl border border-white/80 bg-white/95 backdrop-blur-md shadow-sm px-6 py-8 md:px-8 md:py-10">
              <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-950 mb-4 md:mb-6">{content.globalInvestment}</h2>
              <p className="text-base md:text-lg text-slate-800 mb-6 md:mb-8 leading-relaxed">{content.globalInvestmentDescription}</p>
              <Link href="/business-new">
                <button className="mt-6 md:mt-8 group relative flex items-center text-base md:text-lg font-medium text-slate-950 hover:text-slate-800 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative border-b-2 border-slate-400 group-hover:border-slate-600 pb-1 transition-all duration-500 group-hover:shadow-lg">
                    {content.exploreGlobalExpansion}
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





      {/* AI Company */}
      <section className="min-h-screen relative flex items-center snap-section py-12 md:py-0">
        <div className="absolute inset-0">
          <Image
            src="/home/ai-tech.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/68" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-[92px] lg:flex flex-col items-center justify-between border-r border-white/30 bg-gradient-to-b from-slate-950/94 via-slate-900/84 to-slate-950/94 py-8 shadow-[inset_-1px_0_0_rgba(255,255,255,0.18)]">
          <Image src="/logo/born_logo_white.png" alt="" width={70} height={24} className="h-5 w-auto opacity-95" />
          <span className="text-[11px] font-semibold tracking-[0.24em] text-white/85 uppercase" style={{ writingMode: "vertical-rl" }}>
            Born
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:pl-28 w-full py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 md:gap-12 lg:gap-14 items-center">
            <div className="rounded-2xl border border-white/80 bg-white/95 backdrop-blur-md shadow-sm px-6 py-8 md:px-8 md:py-10">
              <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-950 mb-4 md:mb-6">{content.aiCompanyTitle}</h2>
              <p className="text-base md:text-lg text-slate-800 mb-3 md:mb-4 leading-relaxed font-medium">{content.aiCompanySubtitle}</p>
              <p className="text-base md:text-lg text-slate-800 mb-6 md:mb-8 leading-relaxed">{content.aiCompanyDescription}</p>
              <Link href="/ai-company">
                <button className="mt-6 md:mt-8 group relative flex items-center text-base md:text-lg font-medium text-slate-950 hover:text-slate-800 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative border-b-2 border-slate-400 group-hover:border-slate-600 pb-1 transition-all duration-500 group-hover:shadow-lg">
                    {content.exploreAiCapabilities}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-700 ease-out"></span>
                  </span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-500 group-hover:text-blue-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg -z-10"></div>
                </button>
              </Link>
            </div>
            <div className="relative w-full aspect-video max-h-[min(52vh,520px)] rounded-xl overflow-hidden border border-slate-300/60 shadow-lg">
              <Image
                src="/home/ai-tech.jpg"
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* News & Updates Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/home/news-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/72" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-[92px] lg:flex flex-col items-center justify-between border-r border-white/30 bg-gradient-to-b from-slate-950/94 via-slate-900/84 to-slate-950/94 py-8 shadow-[inset_-1px_0_0_rgba(255,255,255,0.18)]">
          <Image src="/logo/born_logo_white.png" alt="" width={70} height={24} className="h-5 w-auto opacity-95" />
          <span className="text-[11px] font-semibold tracking-[0.24em] text-white/85 uppercase" style={{ writingMode: "vertical-rl" }}>
            Born
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:pl-28">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0 rounded-2xl border border-white/80 bg-white/90 backdrop-blur-md shadow-sm px-5 py-4 md:px-6 md:py-5">
            <h2 className="heading-serif text-3xl md:text-4xl font-light text-slate-950">{content.latestNews}</h2>
            <Link href="/news">
              <button className="group relative flex items-center text-base font-medium text-slate-950 hover:text-slate-800 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                <span className="relative border-b-2 border-slate-400 group-hover:border-slate-600 pb-1 transition-all duration-500 group-hover:shadow-lg">
                  {content.viewAllNews}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-700 ease-out"></span>
                </span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-500 group-hover:text-purple-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg -z-10"></div>
              </button>
            </Link>
          </div>

                    {/* Fixed Top News Row - Alternating Layout */}
          <div className="space-y-4 mb-6">
            {/* First News Item - Latest 1 from /news */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5 md:gap-8 items-stretch bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 md:p-6 min-h-[140px]">
              <div className="relative w-full h-48 sm:w-32 sm:h-32 md:w-44 md:h-44 flex-shrink-0 self-center">
                <Image 
                  src="/news/murmansk-governor-meeting-2025/image1.jpeg" 
                  alt="Murmansk Governor meets Born International in Beijing" 
                  fill 
                  className="object-cover rounded-lg" 
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 mb-1">November 2, 2025</p>
                <h3 className="text-base font-medium text-slate-900 mb-2 line-clamp-2">Murmansk Governor Andrey Chibis Meets Born International Representatives in Beijing</h3>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2 leading-relaxed">Arctic development, Northern Sea Route logistics and sector cooperation discussed.</p>
                <Link href="/news/murmansk-governor-meeting-2025">
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 text-xs">
                    {content.readMore}
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Second News Item - Latest 2 from /news */}
            <div className="flex flex-col gap-4 sm:flex-row-reverse sm:gap-5 md:gap-8 items-stretch bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 md:p-6 min-h-[140px]">
              <div className="relative w-full h-48 sm:w-32 sm:h-32 md:w-44 md:h-44 flex-shrink-0 self-center">
                <Image 
                  src="/news/china-russia-investment-committee-2025/image1.jpeg" 
                  alt="China–Russia Investment Committee in Beijing" 
                  fill 
                  className="object-cover rounded-lg" 
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 mb-1">November 1, 2025</p>
                <h3 className="text-base font-medium text-slate-900 mb-2 line-clamp-2">China–Russia Intergovernmental Investment Cooperation Committee Holds Meeting in Beijing; Murmansk Governor Andrey Chibis Delivers Speech</h3>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2 leading-relaxed">Talks highlight $200bn+ project pipeline, Arctic development and Northern Sea Route opportunities.</p>
                <Link href="/news/china-russia-investment-committee-2025">
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 text-xs">
                    {content.readMore}
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scrolling News Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-3">
              {/* Dynamic items from /news; duplicated for seamless loop */}
              {[
                { href: "/news/brics-municipal-forum-2025", img: "/news/brics-municipal-forum-2025/image1.jpeg", date: "November 21, 2025", title: "BRICS International Municipal Forum", desc: "Dr. Li Wencheng signs cooperation MOUs on behalf of SCO Business Council." },
                { href: "/news/institute-of-experimental-medicine-2025", img: "/news/institute-of-experimental-medicine-2025/image1.jpeg", date: "November 22, 2025", title: "Institute of Experimental Medicine Visit", desc: "SCO+ Medical & Biotechnology Park progresses in St. Petersburg." },
                { href: "/news/china-russia-investment-committee-2025", img: "/news/china-russia-investment-committee-2025/image1.jpeg", date: "November 1, 2025", title: "China–Russia Investment Committee", desc: "$200bn+ pipeline; Arctic & NSR opportunities." },
                { href: "/news/murmansk-governor-meeting-2025", img: "/news/murmansk-governor-meeting-2025/image1.jpeg", date: "November 2, 2025", title: "Murmansk Governor Meeting", desc: "Arctic, NSR logistics and sector cooperation." },
              ]
                .concat([
                  { href: "/news/brics-municipal-forum-2025", img: "/news/brics-municipal-forum-2025/image1.jpeg", date: "November 21, 2025", title: "BRICS International Municipal Forum", desc: "Dr. Li Wencheng signs cooperation MOUs on behalf of SCO Business Council." },
                  { href: "/news/institute-of-experimental-medicine-2025", img: "/news/institute-of-experimental-medicine-2025/image1.jpeg", date: "November 22, 2025", title: "Institute of Experimental Medicine Visit", desc: "SCO+ Medical & Biotechnology Park progresses in St. Petersburg." },
                  { href: "/news/china-russia-investment-committee-2025", img: "/news/china-russia-investment-committee-2025/image1.jpeg", date: "November 1, 2025", title: "China–Russia Investment Committee", desc: "$200bn+ pipeline; Arctic & NSR opportunities." },
                  { href: "/news/murmansk-governor-meeting-2025", img: "/news/murmansk-governor-meeting-2025/image1.jpeg", date: "November 2, 2025", title: "Murmansk Governor Meeting", desc: "Arctic, NSR logistics and sector cooperation." },
                ])
                .map((n, idx) => (
                  <Link key={`${n.href}-${idx}`} href={n.href} className="flex-shrink-0">
                    <Card className="w-56 border-0 shadow-sm hover:shadow-md transition-shadow bg-white/95 cursor-pointer">
                      <CardContent className="p-0">
                        <div className="relative h-20">
                          <Image src={n.img} alt={n.title} fill className="object-cover rounded-t-lg" />
                        </div>
                        <div className="p-2">
                          <p className="text-xs text-slate-500 mb-1">{n.date}</p>
                          <h4 className="text-xs font-medium text-slate-900 mb-1">{n.title}</h4>
                          <p className="text-xs text-slate-600 mb-1">{n.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              
              

              

              

              

              {/* end dynamic duplicated items */}
            </div>
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/90 backdrop-blur-md text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-[1fr_0.95fr_1.55fr_0.95fr]">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/logo/born_logo_white.png"
                  alt="BORN International Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-slate-400 text-sm">
                Investing in Chinese hard tech and building operating routes into Russia, the CIS, and adjacent markets.
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

            <ResponsibleInvestmentBlurb language={language} theme="dark" />

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
            <p className="text-slate-400 text-sm">© 2026 Born International. All rights reserved.</p>
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
