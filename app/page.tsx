"use client"
import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
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
  const [language, setLanguage] = useState<"en" | "ru">("en")
  const [enableInertialScroll, setEnableInertialScroll] = useState<boolean>(true) // 控制惯性滑动效果，默认开启
  const isClient = useIsClient()
  // Prefer the provided JPEG; gracefully fallback to JPG, then a default
  const [businessBgSrc, setBusinessBgSrc] = useState<string>("/backgrounds/business-bg-1920x1080.jpeg")

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
      portfolio: "Portfolio",
      fundScale: "Fund Scale",
      techGlobalization: "Technology Globalization",
      businessOverviewTitle: "Business Overview",
      businessOverviewSubtitle: "“One-Stop” Access to the Russian-Speaking Market",
      viewBusinessOverview: "View business overview",
      businessOverviewDescription:
        "We offer one‑stop access to the Russian‑speaking market for Chinese and global tech companies — from strategy and compliance to localization and go‑to‑market execution.",
      businessPoint1: "Market strategy, due diligence and localization",
      businessPoint2: "Regulatory, legal and finance coordination",
      businessPoint3: "Fundraising, partnerships and cross‑border M&A",
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
      portfolio: "Портфолио",
      fundScale: "Масштаб фонда",
      techGlobalization: "Технологическая глобализация",
      businessOverviewTitle: "Обзор бизнеса",
      businessOverviewSubtitle: "«Единое окно» доступа к русскоязычному рынку",
      viewBusinessOverview: "Смотреть обзор бизнеса",
      businessOverviewDescription:
        "Мы предоставляем «единое окно» для выхода на русскоязычный рынок для китайских и глобальных технокомпаний — стратегия, соответствие требованиям, локализация и вывод на рынок.",
      businessPoint1: "Стратегия выхода, due diligence и локализация",
      businessPoint2: "Регуляторика, юридическое и финансовое сопровождение",
      businessPoint3: "Привлечение капитала, партнерства и трансграничные M&A",
    },
  }

  const content = languageContent[language]
  const currentLanguage = languages.find((lang) => lang.code === language)

  // Disable inertial/snap scrolling on mobile to improve UX
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setEnableInertialScroll(false)
    }
  }, [])

  useEffect(() => {
    // 只在客户端渲染时执行
    if (!isClient) {
      return
    }
    
    // 如果惯性滑动效果被禁用，直接返回
    if (!enableInertialScroll) {
      return
    }
    
    // 增强惯性滚动效果
    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout
    let lastScrollY = 0
    let scrollVelocity = 0
    
    // 初始化lastScrollY
    if (typeof window !== 'undefined') {
      lastScrollY = window.scrollY
    }
    
          const handleScroll = () => {
        if (typeof window === 'undefined') return
        
        const currentScrollY = window.scrollY
        scrollVelocity = currentScrollY - lastScrollY
        lastScrollY = currentScrollY
        
        if (!isScrolling) {
          isScrolling = true
          document.body.classList.add('scrolling')
          // 为所有 section 添加 scrolling 类
          document.querySelectorAll('.snap-section, section').forEach(section => {
            section.classList.add('scrolling')
          })
        }
        
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          isScrolling = false
          document.body.classList.remove('scrolling')
          // 移除所有 section 的 scrolling 类
          document.querySelectorAll('.snap-section, section').forEach(section => {
            section.classList.remove('scrolling')
          })
        
        // 检测是否为移动设备
        const isMobile = isClient && typeof window !== 'undefined' ? window.innerWidth <= 768 : false
        
        // 根据滚动方向决定吸附行为
        const sections = Array.from(document.querySelectorAll('.snap-section, section')).filter(section => section.tagName !== 'FOOTER')
        const currentScrollY = typeof window !== 'undefined' ? window.scrollY : 0
        const viewportCenter = typeof window !== 'undefined' ? window.innerHeight / 2 : 0
        
        // 检查是否在footer区域
        const footer = document.querySelector('footer')
        let isInFooterArea = false
        if (footer) {
          const footerRect = footer.getBoundingClientRect()
          const footerTop = footerRect.top + currentScrollY
          // 如果视口中心已经接近footer，就不进行吸附
          if (currentScrollY + viewportCenter > footerTop - 200) {
            isInFooterArea = true
          }
        }
        
        // 如果在footer区域，不进行吸附
        if (isInFooterArea) {
          return
        }
        
        // 重新计算滚动速度（基于最后一次滚动）
        const finalScrollVelocity = scrollVelocity
        
        // 找到所有section的位置信息
        const sectionPositions = sections.map((section, index) => {
          const rect = section.getBoundingClientRect()
          return {
            element: section,
            index: index,
            top: rect.top + currentScrollY,
            bottom: rect.top + currentScrollY + rect.height,
            center: rect.top + currentScrollY + rect.height / 2
          }
        })
        
        // 根据滚动方向决定目标section
        let targetSection: Element | null = null
        
        // 移动端使用更高的滚动速度阈值
        const velocityThreshold = isMobile ? 15 : 5
        
        if (finalScrollVelocity > velocityThreshold) {
          // 向下滚动，找到下一个section
          for (let i = 0; i < sectionPositions.length; i++) {
            const section = sectionPositions[i]
            if (currentScrollY + viewportCenter < section.center) {
              targetSection = section.element
              break
            }
          }
          // 如果没找到下一个，就不进行吸附（让用户可以滚动到footer）
          if (!targetSection) {
            return
          }
        } else if (finalScrollVelocity < -velocityThreshold) {
          // 向上滚动，找到上一个section
          for (let i = sectionPositions.length - 1; i >= 0; i--) {
            const section = sectionPositions[i]
            if (currentScrollY + viewportCenter > section.center) {
              targetSection = section.element
              break
            }
          }
          // 如果没找到上一个，就选择第一个section
          if (!targetSection && sectionPositions.length > 0) {
            targetSection = sectionPositions[0].element
          }
        } else {
          // 滚动速度不够，找到最近的section
          let minDistance = Infinity
          for (const section of sectionPositions) {
            const distance = Math.abs(currentScrollY + viewportCenter - section.center)
            if (distance < minDistance) {
              minDistance = distance
              targetSection = section.element
            }
          }
        }
        
        if (targetSection) {
          // 平滑滚动到目标 section
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 150) // 减少延迟时间，让响应更快
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll)
      }
      clearTimeout(scrollTimeout)
    }
  }, [enableInertialScroll, isClient]) // 当控制变量或客户端状态改变时重新设置

  return (
    <div className="min-h-screen bg-white scroll-smooth snap-container">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
        }
        
        .snap-container {
          scroll-behavior: smooth;
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
        
        /* 滚动时禁用交互 */
        .snap-section.scrolling {
          pointer-events: none;
        }
        

        
        /* 惯性滚动效果 */
        .snap-container {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        /* 滚动时的过渡效果 */
        body.scrolling {
          transition: all 0.2s ease-out;
        }
        
        /* 平滑的滚动效果 */
        .snap-section {
          transition: none;
        }
        
        /* 滚动时禁用 hover 效果 */
        .snap-section.scrolling {
          pointer-events: none;
        }
        

        
        /* 确保每个section之间有适当的间距 */
        .snap-section:not(:last-child) {
          margin-bottom: 0;
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
            src="/backgrounds/mount_watermarked_background.jpeg"
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
              src="/logo/born_logo_white.png"
              alt="BORN International logo"
              width={120}
              height={48}
              className="h-10 w-auto"
            />
          </div>
          


          {/* Centered statistics cards */}
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="mb-8"></div>
            <div className="mb-12 max-w-2xl"></div>

            {/* Key Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-80 mb-8 md:mb-12 max-w-4xl w-full px-6 md:px-4">
              <div className="text-center group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-4">
                <h3
                  className="tabular-nums text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 tracking-tighter drop-shadow-lg transition-all duration-500 group-hover:text-yellow-200 group-hover:scale-105"
                  style={{ color: "#f0f2ff" }}
                >
                  {portfolioCount.count}
                  {portfolioCount.suffix}
                </h3>
                <p
                  className="text-base md:text-base lg:text-lg font-semibold tracking-wide transition-all duration-500 group-hover:text-yellow-100 group-hover:scale-105"
                  style={{ color: "#ebeff2" }}
                >
                  {content.portfolio}
                </p>
                <div className="w-0 h-1 bg-yellow-300 mx-auto mt-2 transition-all duration-500 group-hover:w-full"></div>
              </div>

              <div className="text-center group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-4">
                <div className="flex items-baseline justify-center space-x-2 mb-3 md:mb-4">
                  <h3
                    className="tabular-nums text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter drop-shadow-lg transition-all duration-500 group-hover:text-blue-200 group-hover:scale-105"
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
                  className="text-base md:text-base lg:text-lg font-semibold tracking-wide transition-all duration-500 group-hover:text-blue-100 group-hover:scale-105"
                  style={{ color: "#f2f2f2" }}
                >
                  {content.fundScale}
                </p>
                <div className="w-0 h-1 bg-blue-300 mx-auto mt-2 transition-all duration-500 group-hover:w-full"></div>
              </div>

              <div className="text-center group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-4">
                <h3
                  className="tabular-nums text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 tracking-tighter drop-shadow-lg transition-all duration-500 group-hover:text-green-200 group-hover:scale-105"
                  style={{ color: "#f2f2f2" }}
                >
                  {techGlobalization.count}
                  {techGlobalization.suffix}
                </h3>
                <p
                  className="text-base md:text-base lg:text-lg font-semibold tracking-wide transition-all duration-500 group-hover:text-green-100 group-hover:scale-105"
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
      <section className="h-screen relative flex items-center snap-section">
        <div className="absolute inset-0">
          <Image
            src="/backgrounds/bg-project-1.jpg"
            alt="Investment landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-4 md:mb-6">{content.investmentInChina}</h2>
              <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">{content.investmentInChinaDescription}</p>
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
                <button className="mt-6 md:mt-8 group relative flex items-center text-base md:text-lg font-medium text-slate-900 hover:text-slate-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative border-b-2 border-slate-300 group-hover:border-slate-500 pb-1 transition-all duration-500 group-hover:shadow-lg">
                    {content.learnMoreInvestments}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-700 ease-out"></span>
                  </span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-500 group-hover:text-blue-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg -z-10"></div>
                </button>
              </Link>
            </div>
            <div className="relative h-64 md:h-96">
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
      <section className="h-screen relative flex items-center snap-section">
        <div className="absolute inset-0">
          <Image
            src="/backgrounds/bg-team.jpg"
            alt="Rock climbing adventure landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative h-64 md:h-96">
              <Image
                src="/backgrounds/worldmap.jpg"
                alt="Global technology network connections world map"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-4 md:mb-6">{content.globalInvestment}</h2>
              <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">{content.globalInvestmentDescription}</p>
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
                <button className="mt-6 md:mt-8 group relative flex items-center text-base md:text-lg font-medium text-slate-900 hover:text-slate-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative border-b-2 border-slate-300 group-hover:border-slate-500 pb-1 transition-all duration-500 group-hover:shadow-lg">
                    Learn more about technology globalization
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





      {/* Business Overview Teaser (from /business) */}
      <section className="h-screen relative flex items-center snap-section">
        <div className="absolute inset-0">
          <Image
            src={businessBgSrc}
            alt="Business city skyline light background"
            fill
            className="object-cover"
            onError={() =>
              setBusinessBgSrc((prev) =>
                prev.endsWith(".jpeg")
                  ? "/backgrounds/business-bg-1920x1080.jpg"
                  : "/backgrounds/bg-about.jpg"
              )
            }
          />
          <div className="absolute inset-0 bg-white/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-4 md:mb-6">{content.businessOverviewTitle}</h2>
              <p className="text-base md:text-lg text-slate-600 mb-3 md:mb-4 leading-relaxed">{content.businessOverviewSubtitle}</p>
              <p className="text-sm md:text-base text-slate-700 mb-4 md:mb-6 leading-relaxed">{content.businessOverviewDescription}</p>
              <div className="space-y-3 md:space-y-4 mb-2 md:mb-4">
                <div className="flex items-center space-x-3"><div className="w-2.5 h-2.5 bg-blue-600 rounded-full" /><span className="text-slate-700 text-sm md:text-base">{content.businessPoint1}</span></div>
                <div className="flex items-center space-x-3"><div className="w-2.5 h-2.5 bg-green-600 rounded-full" /><span className="text-slate-700 text-sm md:text-base">{content.businessPoint2}</span></div>
                <div className="flex items-center space-x-3"><div className="w-2.5 h-2.5 bg-purple-600 rounded-full" /><span className="text-slate-700 text-sm md:text-base">{content.businessPoint3}</span></div>
              </div>
              <Link href="/business">
                <button className="mt-2 md:mt-4 group relative flex items-center text-base md:text-lg font-medium text-slate-900 hover:text-slate-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative border-b-2 border-slate-300 group-hover:border-slate-500 pb-1 transition-all duration-500 group-hover:shadow-lg">
                    {content.viewBusinessOverview}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-700 ease-out"></span>
                  </span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-500 group-hover:text-blue-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg -z-10"></div>
                </button>
              </Link>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/business/英文版业务简介_00.jpg"
                alt="Business overview preview"
                fill
                className="object-cover rounded-lg"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* News & Updates Section */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="/backgrounds/bg-about.jpg"
            alt="Expansive mountain news background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0">
            <h2 className="text-3xl font-light text-slate-900">{content.latestNews}</h2>
            <Link href="/news">
              <button className="group relative flex items-center text-base font-medium text-slate-900 hover:text-slate-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                <span className="relative border-b-2 border-slate-300 group-hover:border-slate-500 pb-1 transition-all duration-500 group-hover:shadow-lg">
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
            <div className="flex gap-4 items-center bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
              <div className="relative w-28 h-28 flex-shrink-0">
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
            <div className="flex flex-row-reverse gap-4 items-center bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
              <div className="relative w-28 h-28 flex-shrink-0">
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
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <p className="text-slate-400 text-sm">© 2024 Born International. All rights reserved.</p>
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
