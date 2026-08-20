"use client"
import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { HomeSectionBackground } from "@/components/home-section-background"
import { ContactSection } from "@/components/contact-section"

// 客户端检测hook
function useIsClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

function useCountUp(end: number, duration = 2000, suffix = "", restartToken = 0) {
  const start = Math.round(end * 0.7)
  const [count, setCount] = useState(start)
  const isClient = useIsClient()

  useEffect(() => {
    if (!isClient) return

    setCount(start)
    let startTime: number
    let animationFrame: number

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setCount(end)
      return
    }

    const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3)

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = easeOut(progress)

      setCount(Math.round(start + (end - start) * easedProgress))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, isClient, restartToken, start])

  // Return just the count number, don't concatenate suffix here
  return { count, suffix }
}

function formatNumber(num: number): string {
  // 避免hydration错误，使用简单的数字格式化
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default function HomePage() {
  const language: "en" | "ru" = "en"
  const [counterRun, setCounterRun] = useState(0)
  const portfolioCount = useCountUp(125, 7000, "+", counterRun)
  const fundScale = useCountUp(280000000, 7000, "", counterRun)
  const techGlobalization = useCountUp(100, 7000, "+", counterRun)

  useEffect(() => {
    let scrolling = false
    let idleTimer: ReturnType<typeof setTimeout> | undefined

    const handleScroll = () => {
      if (!scrolling) {
        scrolling = true
        setCounterRun((run) => run + 1)
      }

      if (idleTimer) clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        scrolling = false
      }, 350)
    }

    const handleNavigationKey = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
        handleScroll()
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("wheel", handleScroll, { passive: true })
    window.addEventListener("touchmove", handleScroll, { passive: true })
    window.addEventListener("keydown", handleNavigationKey)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("wheel", handleScroll)
      window.removeEventListener("touchmove", handleScroll)
      window.removeEventListener("keydown", handleNavigationKey)
      if (idleTimer) clearTimeout(idleTimer)
    }
  }, [])

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
      heroStatFoot1: "Portfolio",
      heroStatFoot2: "USD",
      heroStatFoot3: "Tech Globalization",
      investmentInChina: "Investment",
      investmentInChinaLead: "Delivering 50x+ value creation across our portfolio Company.",
      investmentInChinaDescription:
        "Focused on technology, we have invested in 100+ companies, with multiple achieving exceptional, multi-fold growth.",
      learnMoreInvestments: "Explore our investments →",
      globalInvestment: "Global Expansion",
      globalExpansionDirection: "China → Global",
      globalInvestmentDescription:
        "Enabling leading companies to scale globally. We support market entry and operations in Russia and the European Union—achieving exponential returns with capital-efficient strategies.",
      exploreGlobalExpansion: "Explore our global expansion →",
      chinaAccessTitle: "China Access",
      chinaAccessDirection: "Global → China",
      chinaAccessDescription:
        "Direct access to China's suppliers, technologies and industrial partners—backed by our investment ecosystem and China-side execution team.",
      exploreChinaAccess: "Explore China Access →",
      aiCompanyTitle: "AI Company",
      aiCompanySubtitle: "Driving efficiency. Reducing costs.",
      aiCompanyDescription:
        "We build proprietary AI systems that transform operations and enhance performance for financial institutions.",
      exploreAiCapabilities: "Explore our AI capabilities→",

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
      heroStatFoot1: "Портфель",
      heroStatFoot2: "USD",
      heroStatFoot3: "Технологическая глобализация",
      investmentInChina: "Инвестиции",
      investmentInChinaLead: "Создаем 50x+ прирост стоимости в портфельных компаниях.",
      investmentInChinaDescription:
        "Фокусируясь на технологиях, мы инвестировали в 100+ компаний, многие из которых достигли исключительного многократного роста.",
      learnMoreInvestments: "Посмотреть наши инвестиции →",
      globalInvestment: "Глобальная экспансия",
      globalExpansionDirection: "Китай → мир",
      globalInvestmentDescription:
        "Помогаем ведущим компаниям масштабироваться глобально. Мы поддерживаем выход на рынки России и Евросоюза — обеспечивая экспоненциальную доходность при капиталоэффективных стратегиях.",
      exploreGlobalExpansion: "Посмотреть глобальную экспансию →",
      chinaAccessTitle: "China Access",
      chinaAccessDirection: "Мир → Китай",
      chinaAccessDescription:
        "Прямой доступ к китайским поставщикам, технологиям и промышленным партнёрам при поддержке нашей инвестиционной экосистемы и команды исполнения в Китае.",
      exploreChinaAccess: "Открыть China Access →",
      aiCompanyTitle: "AI-компания",
      aiCompanySubtitle: "Повышение эффективности. Снижение затрат.",
      aiCompanyDescription:
        "Мы создаем собственные AI-системы, которые трансформируют операции и повышают эффективность для финансовых организаций.",
      exploreAiCapabilities: "Посмотреть AI-возможности→",

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
    <div className="min-h-screen scroll-smooth bg-white pb-[env(safe-area-inset-bottom,0px)] snap-container">
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
      <main className="relative h-[100svh] min-h-[100svh] snap-section md:h-screen md:min-h-screen">
        <div className="absolute inset-0">
          <HomeSectionBackground
            mobileSrc="/vi-reference/born_cover_mobile.png"
            desktopSrc="/vi-reference/born_cover.png"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/22 via-slate-950/26 to-slate-950/40 md:from-slate-950/16 md:via-slate-950/20 md:to-slate-950/30" />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(58%,480px)] bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-transparent max-md:from-slate-950/92 max-md:via-slate-950/65 md:h-[min(48%,380px)]"
            aria-hidden
          />
        </div>

        <div className="relative z-10 h-full px-4 sm:px-5">
          {/* Top-left corner content */}
          <div className="absolute left-[max(1rem,env(safe-area-inset-left,0px))] top-[max(1rem,env(safe-area-inset-top,0px))] sm:left-8 sm:top-8">
            <Image
              src="/logo/born_logo_white.png"
              alt="BORN International logo"
              width={120}
              height={48}
              className="h-8 w-auto sm:h-10"
            />
          </div>
          


          {/* Hero stats: single column until md so phone / narrow widths never triple-stack huge figures */}
          <div className="flex h-full min-h-0 flex-col items-center justify-end px-3 pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] pt-20 text-center sm:px-4 sm:pb-14 sm:pt-24 md:pb-16 md:pt-28">
            <div className="mx-auto w-full min-w-0 max-w-5xl translate-y-1 px-2 sm:translate-y-2 sm:px-3 md:translate-y-4 md:px-2">
              <div className="w-full min-w-0">
                {/* Glowing axis — hide connectors on very small screens to reduce visual noise */}
                <div className="mx-auto grid w-full max-w-5xl grid-cols-3 items-center max-md:max-w-xs max-md:mx-auto">
                  {[
                    { left: false, right: true },
                    { left: true, right: true },
                    { left: true, right: false },
                  ].map((seg, i) => (
                    <div key={i} className="flex min-h-[2.25rem] items-center max-md:min-h-[2rem] md:min-h-[2.75rem]">
                      {seg.left ? <div className="h-px min-w-0 flex-1 rounded-full bg-white/88 max-md:opacity-80" /> : null}
                      <span className="relative mx-0.5 flex h-4 w-4 shrink-0 items-center justify-center sm:mx-1 sm:h-5 sm:w-5 md:h-6 md:w-6">
                        <span className="absolute inset-0 rounded-full bg-cyan-400/45 blur-[6px] sm:blur-[7px] md:blur-[9px]" />
                        <span className="relative h-2 w-2 rounded-full bg-[#ecfeff] shadow-[0_0_12px_3px_rgba(34,211,238,0.72)] sm:h-2.5 sm:w-2.5 sm:shadow-[0_0_14px_4px_rgba(34,211,238,0.72)] md:h-3 md:w-3" />
                      </span>
                      {seg.right ? <div className="h-px min-w-0 flex-1 rounded-full bg-white/88 max-md:opacity-80" /> : null}
                    </div>
                  ))}
                </div>

                {/* Mobile: each pillar = title → number → caption (e.g. Portfolio under 125+) */}
                <div className="mx-auto mt-3 w-full min-w-0 max-w-5xl space-y-6 md:hidden">
                  <div className="flex flex-col items-center text-center">
                    <p className="heading-serif px-0.5 text-xs font-light leading-snug tracking-wide text-white/92 sm:px-1 sm:text-sm">
                      {content.homeHeroLine1}
                    </p>
                    <h3
                      className="mt-2 break-words text-[clamp(1.75rem,9vw,2.5rem)] font-black tabular-nums tracking-tight drop-shadow-lg"
                      style={{ color: "#f0f2ff" }}
                    >
                      {portfolioCount.count}
                      {portfolioCount.suffix}
                    </h3>
                    <p className="mt-1.5 text-xs font-semibold tracking-wide text-white/90 sm:text-sm" style={{ color: "#ebeff2" }}>
                      {content.heroStatFoot1}
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <p className="heading-serif px-0.5 text-[0.7rem] font-light leading-snug tracking-wide text-white/92 sm:px-1 sm:text-xs">
                      {content.homeHeroLine2}
                    </p>
                    <h3
                      className="mt-2 break-all text-[clamp(1rem,5.2vw,1.65rem)] font-black tabular-nums leading-tight tracking-tight drop-shadow-lg sm:break-normal sm:text-[clamp(1.1rem,5vw,1.85rem)]"
                      style={{ color: "#ebeff2" }}
                    >
                      {formatNumber(fundScale.count)}
                    </h3>
                    <p className="mt-1.5 text-xs font-semibold tracking-[0.12em] text-white/90 sm:text-sm" style={{ color: "#f2f2f2" }}>
                      {content.heroStatFoot2}
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <p className="heading-serif px-0.5 text-xs font-light leading-snug tracking-wide text-white/92 sm:px-1 sm:text-sm">
                      {content.homeHeroLine3}
                    </p>
                    <h3
                      className="mt-2 break-words text-[clamp(1.75rem,9vw,2.5rem)] font-black tabular-nums tracking-tight drop-shadow-lg"
                      style={{ color: "#f2f2f2" }}
                    >
                      {techGlobalization.count}
                      {techGlobalization.suffix}
                    </h3>
                    <p className="mt-1.5 text-xs font-semibold tracking-wide text-white/90 sm:text-sm" style={{ color: "#ffffff" }}>
                      {content.heroStatFoot3}
                    </p>
                  </div>
                </div>

                {/* Desktop: three rows (labels / figures / captions) */}
                <div className="mx-auto mt-3 hidden w-full min-w-0 max-w-5xl md:mt-4 md:block">
                  <div className="grid w-full grid-cols-3 gap-4">
                    <p className="heading-serif px-0.5 text-center text-base font-light leading-snug tracking-wide text-white/92">
                      {content.homeHeroLine1}
                    </p>
                    <p className="heading-serif px-0.5 text-center text-sm font-light leading-snug tracking-wide text-white/92">
                      {content.homeHeroLine2}
                    </p>
                    <p className="heading-serif px-0.5 text-center text-base font-light leading-snug tracking-wide text-white/92">
                      {content.homeHeroLine3}
                    </p>
                  </div>

                  <div className="mx-auto mt-7 grid w-full min-w-0 grid-cols-3 gap-8">
                    <div className="min-w-0 text-center">
                      <h3
                        className="break-words text-6xl font-black tabular-nums tracking-tight drop-shadow-lg lg:text-6xl"
                        style={{ color: "#f0f2ff" }}
                      >
                        {portfolioCount.count}
                        {portfolioCount.suffix}
                      </h3>
                    </div>
                    <div className="min-w-0 text-center">
                      <h3
                        className="break-words text-5xl font-black tabular-nums leading-tight tracking-tight drop-shadow-lg lg:text-6xl"
                        style={{ color: "#ebeff2" }}
                      >
                        {formatNumber(fundScale.count)}
                      </h3>
                    </div>
                    <div className="min-w-0 text-center">
                      <h3
                        className="break-words text-6xl font-black tabular-nums tracking-tight drop-shadow-lg lg:text-6xl"
                        style={{ color: "#f2f2f2" }}
                      >
                        {techGlobalization.count}
                        {techGlobalization.suffix}
                      </h3>
                    </div>
                  </div>

                  <div className="mx-auto mt-5 grid w-full min-w-0 grid-cols-3 gap-4">
                    <p className="text-center text-base font-semibold tracking-wide text-white/90 lg:text-lg" style={{ color: "#ebeff2" }}>
                      {content.heroStatFoot1}
                    </p>
                    <p className="text-center text-base font-semibold tracking-[0.12em] text-white/90 lg:text-lg" style={{ color: "#f2f2f2" }}>
                      {content.heroStatFoot2}
                    </p>
                    <p className="text-center text-base font-semibold tracking-wide text-white/90 lg:text-lg" style={{ color: "#ffffff" }}>
                      {content.heroStatFoot3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Investment */}
      <section className="relative flex min-h-[100svh] snap-section items-start py-8 sm:py-10 md:min-h-screen md:py-0">
        <div className="absolute inset-0">
          <HomeSectionBackground
            mobileSrc="/vi-reference/fck/investment_removed_globe_mobile.png"
            desktopSrc="/vi-reference/fck/investment_removed_globe_2x_high_resolution.png"
            className="object-cover object-[center_38%] lg:object-center"
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex w-[92px] max-lg:hidden lg:flex-col items-center justify-between border-r border-white/30 bg-gradient-to-b from-slate-950/94 via-slate-900/84 to-slate-950/94 py-8 shadow-[inset_-1px_0_0_rgba(255,255,255,0.18)]">
          <Image src="/logo/born_logo_white.png" alt="" width={70} height={24} className="h-5 w-auto opacity-95" />
          <span className="text-[11px] font-semibold tracking-[0.24em] text-white/85 uppercase" style={{ writingMode: "vertical-rl" }}>
            Born
          </span>
        </div>
        <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-col px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(5rem,env(safe-area-inset-bottom,0px))] pt-6 sm:px-6 sm:pt-8 md:px-8 md:pt-12 lg:pl-[calc(5.75rem+0.5rem)] lg:pr-10">
          <div className="flex flex-col rounded-2xl border border-transparent bg-transparent p-0 max-lg:border-white/10 max-lg:bg-slate-950/85 max-lg:p-4 sm:max-lg:p-5 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
          <h2 className="heading-serif max-w-full break-words text-[clamp(1.875rem,8.5vw,2.75rem)] font-light leading-[1.06] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.95)] sm:max-w-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {content.investmentInChina}
          </h2>
          <div className="mt-6 max-w-lg space-y-4 sm:max-w-xl sm:space-y-5 md:mt-10 md:max-w-xl md:space-y-6 [&_p]:break-words [&_p]:text-white [&_p]:[text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_2px_24px_rgba(0,0,0,0.75)]">
            <p className="text-[0.9375rem] font-medium leading-relaxed sm:text-base md:text-lg">{content.investmentInChinaLead}</p>
            <p className="text-[0.9375rem] leading-relaxed sm:text-base md:text-lg">{content.investmentInChinaDescription}</p>
            <Link
              href="/portfolio"
              className="group inline-flex min-h-[44px] items-center self-start bg-transparent py-2 text-base font-medium text-white transition-colors duration-500 hover:text-cyan-100 md:text-lg"
            >
              <span className="border-b border-white/55 pb-0.5 [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_18px_rgba(0,0,0,0.85)] transition-colors group-hover:border-cyan-200/90">
                {content.learnMoreInvestments}
              </span>
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* Global Expansion — desktop: type on art; mobile: dark read panel for legibility */}
      <section className="relative flex min-h-[100svh] snap-section items-start py-8 sm:py-10 md:min-h-screen md:py-0">
        <div className="absolute inset-0">
          <HomeSectionBackground
            mobileSrc="/vi-reference/fck/global_expansion_removed_mobile.png"
            desktopSrc="/vi-reference/fck/global_expansion_removed_2x_high_resolution.png"
            className="object-cover max-lg:object-center lg:object-[14%_center]"
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex w-[92px] max-lg:hidden lg:flex-col items-center justify-between border-r border-white/30 bg-gradient-to-b from-slate-950/94 via-slate-900/84 to-slate-950/94 py-8 shadow-[inset_-1px_0_0_rgba(255,255,255,0.18)]">
          <Image src="/logo/born_logo_white.png" alt="" width={70} height={24} className="h-5 w-auto opacity-95" />
          <span className="text-[11px] font-semibold tracking-[0.24em] text-white/85 uppercase" style={{ writingMode: "vertical-rl" }}>
            Born
          </span>
        </div>
        <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-col px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(5rem,env(safe-area-inset-bottom,0px))] pt-6 sm:px-6 sm:pt-8 md:px-8 md:pt-12 lg:pl-[calc(5.75rem+0.5rem)] lg:pr-14">
          <div className="flex w-full justify-end max-lg:justify-stretch">
            <div className="flex w-full max-w-2xl flex-col items-end space-y-4 text-right max-lg:max-w-none max-lg:items-stretch max-lg:rounded-2xl max-lg:border max-lg:border-white/12 max-lg:bg-slate-950/88 max-lg:px-4 max-lg:py-6 max-lg:text-left max-lg:shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:max-lg:px-6 sm:max-lg:py-8 sm:max-w-3xl sm:space-y-6 md:space-y-8 lg:max-w-[min(36rem,42vw)] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:text-right lg:shadow-none [&_p]:break-words [&_p]:text-white lg:[&_p]:[text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_2px_24px_rgba(0,0,0,0.75)] max-lg:[&_p]:[text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">
              <h2 className="heading-serif w-full break-words text-[clamp(1.875rem,8vw,2.75rem)] font-light leading-[1.08] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.95)] sm:text-5xl md:text-6xl lg:text-7xl">
                {content.globalInvestment}
              </h2>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100 sm:text-base">
                {content.globalExpansionDirection}
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-white/95 sm:text-base md:text-lg">{content.globalInvestmentDescription}</p>
              <Link
                href="/business-new"
                className="group inline-flex min-h-[44px] items-center bg-transparent py-2 text-base font-medium text-white transition-colors duration-500 hover:text-cyan-100 max-lg:self-start md:text-lg lg:self-end"
              >
                <span className="border-b border-white/55 pb-0.5 [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_18px_rgba(0,0,0,0.85)] transition-colors group-hover:border-cyan-200/90">
                  {content.exploreGlobalExpansion}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* China Access — mirror of Global Expansion: Global → China */}
      <section className="relative flex min-h-[100svh] snap-section items-start py-8 sm:py-10 md:min-h-screen md:py-0">
        <div className="absolute inset-0">
          <HomeSectionBackground
            mobileSrc="/china-access/hero-factory.jpg"
            desktopSrc="/china-access/hero-factory.jpg"
            className="object-cover object-center lg:object-[58%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/72 to-slate-950/18 max-lg:bg-slate-950/58" aria-hidden />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex w-[92px] max-lg:hidden lg:flex-col items-center justify-between border-r border-white/30 bg-gradient-to-b from-slate-950/94 via-slate-900/84 to-slate-950/94 py-8 shadow-[inset_-1px_0_0_rgba(255,255,255,0.18)]">
          <Image src="/logo/born_logo_white.png" alt="" width={70} height={24} className="h-5 w-auto opacity-95" />
          <span className="text-[11px] font-semibold tracking-[0.24em] text-white/85 uppercase" style={{ writingMode: "vertical-rl" }}>
            Born
          </span>
        </div>
        <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-col px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(5rem,env(safe-area-inset-bottom,0px))] pt-6 sm:px-6 sm:pt-8 md:px-8 md:pt-12 lg:pl-[calc(5.75rem+0.5rem)] lg:pr-10">
          <div className="flex w-full max-w-2xl flex-col rounded-2xl border border-white/10 bg-slate-950/88 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:p-7 lg:max-w-[min(37rem,46vw)] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
            <h2 className="heading-serif max-w-full break-words text-[clamp(1.875rem,8.5vw,2.75rem)] font-light leading-[1.06] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.95)] sm:text-5xl md:text-6xl lg:text-7xl">
              {content.chinaAccessTitle}
            </h2>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-amber-300 [text-shadow:0_1px_8px_rgba(0,0,0,0.9)] sm:text-base">
              {content.chinaAccessDirection}
            </p>
            <p className="mt-5 max-w-xl break-words text-[0.9375rem] leading-relaxed text-white/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_2px_24px_rgba(0,0,0,0.75)] sm:text-base md:text-lg">
              {content.chinaAccessDescription}
            </p>
            <Link
              href="/china-access"
              className="group mt-5 inline-flex min-h-[44px] items-center self-start bg-transparent py-2 text-base font-medium text-white transition-colors duration-500 hover:text-amber-200 md:text-lg"
            >
              <span className="border-b border-white/55 pb-0.5 [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_18px_rgba(0,0,0,0.85)] transition-colors group-hover:border-amber-200/90">
                {content.exploreChinaAccess}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Company — same pattern as Investment: full-bleed art, copy under baked-in title */}
      <section className="relative flex min-h-[100svh] snap-section items-start py-8 sm:py-10 md:min-h-screen md:py-0">
        <div className="absolute inset-0">
          <HomeSectionBackground
            mobileSrc="/vi-reference/fck/ai_company_removed_mobile.png"
            desktopSrc="/vi-reference/fck/ai_company_removed_2x_high_resolution.png"
            className="object-cover object-[center_35%] lg:object-center"
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex w-[92px] max-lg:hidden lg:flex-col items-center justify-between border-r border-white/30 bg-gradient-to-b from-slate-950/94 via-slate-900/84 to-slate-950/94 py-8 shadow-[inset_-1px_0_0_rgba(255,255,255,0.18)]">
          <Image src="/logo/born_logo_white.png" alt="" width={70} height={24} className="h-5 w-auto opacity-95" />
          <span className="text-[11px] font-semibold tracking-[0.24em] text-white/85 uppercase" style={{ writingMode: "vertical-rl" }}>
            Born
          </span>
        </div>
        <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-col px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(5rem,env(safe-area-inset-bottom,0px))] pt-6 sm:px-6 sm:pt-8 md:px-8 md:pt-12 lg:pl-[calc(5.75rem+0.25rem)] lg:pr-10">
          <div className="flex flex-col rounded-2xl border border-transparent bg-transparent p-0 max-lg:border-white/10 max-lg:bg-slate-950/85 max-lg:p-4 sm:max-lg:p-5 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
          <h2 className="heading-serif max-w-full break-words text-[clamp(1.875rem,8.5vw,2.75rem)] font-light leading-[1.06] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.95)] sm:max-w-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {content.aiCompanyTitle}
          </h2>
          <div className="mt-6 max-w-lg space-y-4 sm:max-w-xl sm:space-y-5 md:mt-10 md:max-w-xl md:space-y-6 [&_p]:break-words [&_p]:text-white [&_p]:[text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_2px_24px_rgba(0,0,0,0.75)]">
            <p className="text-[0.9375rem] font-medium leading-relaxed sm:text-base md:text-lg">{content.aiCompanySubtitle}</p>
            <p className="text-[0.9375rem] leading-relaxed sm:text-base md:text-lg">{content.aiCompanyDescription}</p>
            <Link
              href="/ai-company"
              className="group inline-flex min-h-[44px] items-center self-start bg-transparent py-2 text-base font-medium text-white transition-colors duration-500 hover:text-cyan-100 md:text-lg"
            >
              <span className="border-b border-white/55 pb-0.5 [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_18px_rgba(0,0,0,0.85)] transition-colors group-hover:border-cyan-200/90">
                {content.exploreAiCapabilities}
              </span>
            </Link>
          </div>
          </div>
        </div>
      </section>

      
      {/* News & Updates Section */}
      <section className="relative overflow-hidden py-10 sm:py-12 md:py-20">
        <div className="absolute inset-0">
          <HomeSectionBackground
            mobileSrc="/blank_dark_ui_mobile.png"
            desktopSrc="/blank_dark_ui_2x_high_resolution.png"
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:px-6">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/12 bg-white/[0.06] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md md:flex-row md:items-center md:gap-0 md:px-6 md:py-5">
            <h2 className="heading-serif text-3xl font-light text-white/95 md:text-4xl">{content.latestNews}</h2>
            <Link href="/news">
              <button className="group relative flex transform items-center text-base font-medium text-cyan-200/90 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:text-cyan-100">
                <span className="relative border-b-2 border-cyan-400/40 pb-1 transition-all duration-500 group-hover:border-cyan-300/70 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]">
                  {content.viewAllNews}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-300 transition-all duration-700 ease-out group-hover:w-full"></span>
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transition-all duration-500 group-hover:translate-x-3 group-hover:scale-110 group-hover:text-cyan-200" />
              </button>
            </Link>
          </div>

                    {/* Fixed Top News Row - Alternating Layout */}
          <div className="space-y-4 mb-6">
            {/* First News Item - Latest 1 from /news */}
            <div className="flex min-h-[140px] flex-col items-stretch gap-4 rounded-xl border border-white/10 bg-white/[0.07] p-4 shadow-sm backdrop-blur-md transition-shadow hover:border-white/16 hover:bg-white/[0.09] hover:shadow-md sm:flex-row sm:gap-5 md:gap-8 md:p-6">
              <div className="relative h-48 w-full flex-shrink-0 self-center sm:h-32 sm:w-32 md:h-44 md:w-44">
                <Image 
                  src="/news/ranepa-emba-china-study-tour-2026/cover.jpg"
                  alt="RANEPA EMBA China study tour across Shanghai, Hangzhou and Wuzhen"
                  fill 
                  className="rounded-lg object-cover ring-1 ring-white/10" 
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-xs text-zinc-400">July 21, 2026</p>
                <h3 className="mb-2 line-clamp-2 text-base font-medium text-white/95">Born International Organizes RANEPA EMBA China Study Tour</h3>
                <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-zinc-300/95">Eighteen Russian business leaders explored finance, advanced manufacturing, robotics and cultural innovation across three Chinese cities.</p>
                <Link href="/news/ranepa-emba-china-study-tour-2026">
                  <Button variant="ghost" className="h-auto p-0 text-xs text-cyan-300 hover:bg-transparent hover:text-cyan-200">
                    {content.readMore}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Second News Item - Latest 2 from /news */}
            <div className="flex min-h-[140px] flex-col items-stretch gap-4 rounded-xl border border-white/10 bg-white/[0.07] p-4 shadow-sm backdrop-blur-md transition-shadow hover:border-white/16 hover:bg-white/[0.09] hover:shadow-md sm:flex-row-reverse sm:gap-5 md:gap-8 md:p-6">
              <div className="relative h-48 w-full flex-shrink-0 self-center sm:h-32 sm:w-32 md:h-44 md:w-44">
                <Image 
                  src="/news/apec-healthcare-digitalization-forum-2026/image1.jpg"
                  alt="Dr. Li Wencheng speaks at the APEC healthcare digitalization forum"
                  fill 
                  className="rounded-lg object-cover ring-1 ring-white/10" 
                  style={{ objectPosition: "32% center" }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-xs text-zinc-400">July 18, 2026</p>
                <h3 className="mb-2 line-clamp-2 text-base font-medium text-white/95">Dr. Li Wencheng Speaks at APEC Healthcare Digitalization Forum</h3>
                <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-zinc-300/95">A commercialization framework for bringing China's digital health technologies to Russia, Central Asia and emerging APEC markets.</p>
                <Link href="/news/apec-healthcare-digitalization-forum-2026">
                  <Button variant="ghost" className="h-auto p-0 text-xs text-cyan-300 hover:bg-transparent hover:text-cyan-200">
                    {content.readMore}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scrolling News Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-3 pb-1 [-webkit-overflow-scrolling:touch]">
              {/* Dynamic items from /news; duplicated for seamless loop */}
              {[
                { href: "/news/ranepa-emba-china-study-tour-2026", img: "/news/ranepa-emba-china-study-tour-2026/cover.jpg", date: "July 21, 2026", title: "RANEPA EMBA China Study Tour", desc: "Eighteen Russian business leaders visit Shanghai, Hangzhou and Wuzhen." },
                { href: "/news/apec-healthcare-digitalization-forum-2026", img: "/news/apec-healthcare-digitalization-forum-2026/image1.jpg", date: "July 18, 2026", title: "APEC Healthcare Digitalization Forum", desc: "Cross-border commercialization opportunities for China's digital health technologies." },
                { href: "/news/spief-2026-strategic-cooperation", img: "/news/spief-2026-strategic-cooperation/image3.jpg", date: "June 19, 2026", title: "Strategic Cooperation at SPIEF 2026", desc: "Born International signs a tripartite agreement advancing AI, life sciences and healthcare innovation." },
                { href: "/news/muhammad-yunus-meeting-2026", img: "/news/muhammad-yunus-meeting-2026/image1.jpg", date: "May 19, 2026", title: "Muhammad Yunus Meets Dr. Li Wencheng", desc: "Localized medical technology, biopharmaceuticals and inclusive healthcare." },
                { href: "/news/hong-kong-health-week-2026", img: "/news/hong-kong-health-week-2026/image1.png", date: "May 11, 2026", title: "Hong Kong International Healthcare Week", desc: "Healthcare innovation, global market access and China-Russia medical cooperation." },
                { href: "/news/brics-municipal-forum-2025", img: "/news/brics-municipal-forum-2025/image1.jpeg", date: "November 21, 2025", title: "BRICS International Municipal Forum", desc: "Dr. Li Wencheng signs cooperation MOUs on behalf of SCO Business Council." },
                { href: "/news/institute-of-experimental-medicine-2025", img: "/news/institute-of-experimental-medicine-2025/image1.jpeg", date: "November 22, 2025", title: "Institute of Experimental Medicine Visit", desc: "SCO+ Medical & Biotechnology Park progresses in St. Petersburg." },
                { href: "/news/china-russia-investment-committee-2025", img: "/news/china-russia-investment-committee-2025/image1.jpeg", date: "November 1, 2025", title: "China–Russia Investment Committee", desc: "$200bn+ pipeline; Arctic & NSR opportunities." },
                { href: "/news/murmansk-governor-meeting-2025", img: "/news/murmansk-governor-meeting-2025/image1.jpeg", date: "November 2, 2025", title: "Murmansk Governor Meeting", desc: "Arctic, NSR logistics and sector cooperation." },
              ]
                .concat([
                  { href: "/news/ranepa-emba-china-study-tour-2026", img: "/news/ranepa-emba-china-study-tour-2026/cover.jpg", date: "July 21, 2026", title: "RANEPA EMBA China Study Tour", desc: "Eighteen Russian business leaders visit Shanghai, Hangzhou and Wuzhen." },
                  { href: "/news/apec-healthcare-digitalization-forum-2026", img: "/news/apec-healthcare-digitalization-forum-2026/image1.jpg", date: "July 18, 2026", title: "APEC Healthcare Digitalization Forum", desc: "Cross-border commercialization opportunities for China's digital health technologies." },
                { href: "/news/spief-2026-strategic-cooperation", img: "/news/spief-2026-strategic-cooperation/image3.jpg", date: "June 19, 2026", title: "Strategic Cooperation at SPIEF 2026", desc: "Born International signs a tripartite agreement advancing AI, life sciences and healthcare innovation." },
                  { href: "/news/muhammad-yunus-meeting-2026", img: "/news/muhammad-yunus-meeting-2026/image1.jpg", date: "May 19, 2026", title: "Muhammad Yunus Meets Dr. Li Wencheng", desc: "Localized medical technology, biopharmaceuticals and inclusive healthcare." },
                  { href: "/news/hong-kong-health-week-2026", img: "/news/hong-kong-health-week-2026/image1.png", date: "May 11, 2026", title: "Hong Kong International Healthcare Week", desc: "Healthcare innovation, global market access and China-Russia medical cooperation." },
                  { href: "/news/brics-municipal-forum-2025", img: "/news/brics-municipal-forum-2025/image1.jpeg", date: "November 21, 2025", title: "BRICS International Municipal Forum", desc: "Dr. Li Wencheng signs cooperation MOUs on behalf of SCO Business Council." },
                  { href: "/news/institute-of-experimental-medicine-2025", img: "/news/institute-of-experimental-medicine-2025/image1.jpeg", date: "November 22, 2025", title: "Institute of Experimental Medicine Visit", desc: "SCO+ Medical & Biotechnology Park progresses in St. Petersburg." },
                  { href: "/news/china-russia-investment-committee-2025", img: "/news/china-russia-investment-committee-2025/image1.jpeg", date: "November 1, 2025", title: "China–Russia Investment Committee", desc: "$200bn+ pipeline; Arctic & NSR opportunities." },
                  { href: "/news/murmansk-governor-meeting-2025", img: "/news/murmansk-governor-meeting-2025/image1.jpeg", date: "November 2, 2025", title: "Murmansk Governor Meeting", desc: "Arctic, NSR logistics and sector cooperation." },
                ])
                .map((n, idx) => (
                  <Link key={`${n.href}-${idx}`} href={n.href} className="min-w-0 flex-shrink-0 snap-start">
                    <Card className="w-[min(100vw-2.5rem,14rem)] cursor-pointer gap-0 border border-white/10 bg-white/[0.07] py-0 text-zinc-100 shadow-sm backdrop-blur-md transition-shadow hover:border-white/18 hover:bg-white/10 hover:shadow-md sm:w-56">
                      <CardContent className="p-0">
                        <div className="relative h-20">
                          <Image
                            src={n.img}
                            alt={n.title}
                            fill
                            className="rounded-t-lg object-cover ring-1 ring-inset ring-white/10"
                            style={{
                              objectPosition:
                                n.href === "/news/apec-healthcare-digitalization-forum-2026"
                                  ? "32% center"
                                  : n.href === "/news/spief-2026-strategic-cooperation"
                                    ? "center 38%"
                                  : n.href === "/news/muhammad-yunus-meeting-2026"
                                    ? "center 14%"
                                    : undefined,
                            }}
                          />
                        </div>
                        <div className="p-2">
                          <p className="mb-1 text-xs text-zinc-400">{n.date}</p>
                          <h4 className="mb-1 text-xs font-medium text-white/95">{n.title}</h4>
                          <p className="mb-1 text-xs leading-snug text-zinc-400">{n.desc}</p>
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

      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-900/90 pb-[max(4rem,env(safe-area-inset-bottom,0px))] pt-12 text-white backdrop-blur-md sm:py-16">
        <div className="mx-auto max-w-7xl px-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
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
                  <a href="/portfolio" className="hover:text-white">
                    {content.aboutTheFund}
                  </a>
                </li>
                <li>
                  <a href="/portfolio#our-edge" className="hover:text-white">
                    {content.investmentStrategy}
                  </a>
                </li>
                <li>
                  <a href="/portfolio#portfolio-companies" className="hover:text-white">
                    {content.returns}
                  </a>
                </li>
                <li>
                  <a href="/portfolio#portfolio-companies" className="hover:text-white">
                    {content.holdings}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">{content.responsibleInvestment}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#responsible-investment" className="hover:text-white">
                    {content.ourApproach}
                  </a>
                </li>
                <li>
                  <a href="#responsible-investment" className="hover:text-white">
                    {content.climate}
                  </a>
                </li>
                <li>
                  <a href="#responsible-investment" className="hover:text-white">
                    {content.ownership}
                  </a>
                </li>
                <li>
                  <a href="#responsible-investment" className="hover:text-white">
                    {content.exclusions}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">{content.aboutNbim}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="/global" className="hover:text-white">
                    {content.organization}
                  </a>
                </li>
                <li>
                  <Link href="/china-access" className="hover:text-white">
                    China Access
                  </Link>
                </li>
                <li>
                  <a href="mailto:azmatjan@bornpe.com?subject=Career%20Enquiry" className="hover:text-white">
                    {content.careers}
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    {content.contact}
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-white">
                    {content.press}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2026 Born International. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-slate-500 text-sm">
                {content.privacyPolicy}
              </span>
              <span className="text-slate-500 text-sm">
                {content.termsOfUse}
              </span>
              <span className="text-slate-500 text-sm">
                {content.accessibility}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
