'use client'
import { useState, useEffect } from 'react'
import { Search, Globe, Menu, ArrowRight, TrendingUp, Users, Shield, ExternalLink, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"

function useCountUp(end: number, duration: number = 2000, suffix: string = '') {
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
  
  return count + suffix
}

export default function HomePage() {
  const [language, setLanguage] = useState<'en' | 'ru'>('en')

  const annualizedIRR = useCountUp(24, 5000, '%+')
  const portfolioCompanies = useCountUp(100, 5000, '+')
  const investors = useCountUp(30, 5000, '+')
  const fundValue = useCountUp(140, 5000)

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' }
  ]

  const languageContent = {
    en: {
      fundValueLabel: "THE FUND'S VALUE",
      millionUSD: "Million USD",
      heroDescription: "A global investment platform focusing on early-stage\nhigh-tech startups and value investing",
      annualizedIRR: "Annualized IRR",
      portfolioCompanies: "Portfolio companies",
      investors: "Investors",
      valueDevelopment: "Value development",
      investmentInChina: "Investment in Chinese Mainland",
      investmentInChinaDescription: "Born Capital is a well-known early-stage investment institution in Chinese Mainland with management of 10 RMB VC funds. We have invested directly or indirectly in more than 100 enterprises, most of which are high-tech startups.",
      learnMoreInvestments: "Learn more about our investments",
      globalInvestment: "Global Investment",
      globalInvestmentDescription: "We have established investment presence across multiple global markets including Hong Kong, Singapore, Dubai, Saudi Arabia, London, Oxford, Germany, Japan, Russia, Israel, and the United States.",
      ourGlobalNetwork: "Our global network",
      globalReach: "Global reach",
      globalReachDescription: "With investments across 70 countries and over 9,000 companies, we have a truly global investment footprint. Our international presence allows us to identify opportunities and manage risks worldwide.",
      exploreOurHoldings: "Explore our holdings",
      riskManagement: "Risk management",
      riskManagementDescription: "Our comprehensive risk management framework ensures we can navigate market volatility while protecting the fund's long-term value. We continuously monitor and assess various risk factors across our portfolio.",
      riskFrameworkDetails: "Risk framework details",
      latestNews: "Latest news",
      viewAllNews: "View all news",
      fourthQuarterResults: "Fourth quarter 2023 results",
      fourthQuarterResultsDescription: "The fund returned 4.9% in the fourth quarter, corresponding to a gain of NOK 980 billion.",
      readMore: "Read more",
      climateTransitionInvestments: "Climate transition investments",
      climateTransitionInvestmentsDescription: "New framework for investing in companies that contribute to the green transition.",
      globalMarketOutlook: "Global market outlook 2024",
      globalMarketOutlookDescription: "Our expectations for global markets and investment opportunities in the year ahead.",
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
    },
    ru: {
      fundValueLabel: "СТОИМОСТЬ ФОНДА",
      millionUSD: "Миллион долларов США",
      heroDescription: "Глобальная инвестиционная платформа, ориентированная на стартапы на ранней стадии\nвысоких технологий и стоимостное инвестирование",
      annualizedIRR: "Годовая IRR",
      portfolioCompanies: "Портфельные компании",
      investors: "Инвесторы",
      valueDevelopment: "Развитие стоимости",
      investmentInChina: "Инвестиции в материковом Китае",
      investmentInChinaDescription: "Born Capital — известное инвестиционное учреждение на ранней стадии в материковом Китае, управляющее 10 фондами венчурного капитала в юанях. Мы инвестировали напрямую или косвенно в более чем 100 предприятий, большинство из которых являются высокотехнологичными стартапами.",
      learnMoreInvestments: "Узнайте больше о наших инвестициях",
      globalInvestment: "Глобальные инвестиции",
      globalInvestmentDescription: "Мы создали инвестиционное присутствие на многих мировых рынках, включая Гонконг, Сингапур, Дубай, Саудовскую Аравию, Лондон, Оксфорд, Германию, Японию, Россию, Израиль и США.",
      ourGlobalNetwork: "Наша глобальная сеть",
      globalReach: "Глобальный охват",
      globalReachDescription: "Имея инвестиции в 70 странах и более чем в 9000 компаний, мы имеем поистине глобальный инвестиционный след. Наше международное присутствие позволяет нам выявлять возможности и управлять рисками во всем мире.",
      exploreOurHoldings: "Изучите наши активы",
      riskManagement: "Управление рисками",
      riskManagementDescription: "Наша комплексная система управления рисками гарантирует, что мы сможем справиться с волатильностью рынка, защищая при этом долгосрочную стоимость фонда. Мы постоянно отслеживаем и оцениваем различные факторы риска в нашем портфеле.",
      riskFrameworkDetails: "Подробности структуры рисков",
      latestNews: "Последние новости",
      viewAllNews: "Посмотреть все новости",
      fourthQuarterResults: "Результаты за четвертый квартал 2023 г.",
      fourthQuarterResultsDescription: "Фонд вернул 4,9% в четвертом квартале, что соответствует прибыли в 980 миллиардов норвежских крон.",
      readMore: "Читать далее",
      climateTransitionInvestments: "Инвестиции в переход к экологически чистой экономике",
      climateTransitionInvestmentsDescription: "Новая структура для инвестиций в компании, которые вносят вклад в экологический переход.",
      globalMarketOutlook: "Обзор мирового рынка на 2024 год",
      globalMarketOutlookDescription: "Наши ожидания относительно мировых рынков и инвестиционных возможностей в предстоящем году.",
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
    },
  };

  const content = languageContent[language];
  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-100">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/born-logo.png"
            alt="BORN International Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-slate-700 hover:text-slate-900">
            <Search className="w-4 h-4" />
            <span className="text-sm">Search</span>
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 text-slate-700 hover:text-slate-900">
                <Globe className="w-4 h-4" />
                <span className="text-sm">{currentLanguage?.name}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as 'en' | 'ru')}
                  className={`flex items-center space-x-2 cursor-pointer ${
                    language === lang.code ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                >
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button className="flex items-center space-x-2 text-slate-700 hover:text-slate-900">
            <Menu className="w-4 h-4" />
            <span className="text-sm">Menu</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f4d3d2fe-c5fa-43f9-99d5-11dea92fd8a7.jpg-B4uyIHVBHdX8sq8HAQOl86H9PY0EdQ.jpeg"
            alt="Mountain landscape with BORN text overlay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="flex items-center space-x-2 mb-8">
            
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
          </div>

          <div className="mb-8">
            
          </div>

          <div className="mb-12 max-w-2xl">
            
          </div>

          {/* Key Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-60 md:mt-80 mb-8 md:mb-12 max-w-4xl w-full px-4">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-4 md:mb-8 drop-shadow-lg" style={{color: '#f0f2ff'}} />
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-2 md:mb-4 tracking-tighter drop-shadow-lg" style={{color: '#f0f2ff'}}>{annualizedIRR}</h3>
              <p className="text-sm md:text-base lg:text-lg font-semibold tracking-wide" style={{color: '#ebeff2'}}>{content.annualizedIRR}</p>
            </div>

            <div className="text-center">
              <Users className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-4 md:mb-8 drop-shadow-lg" style={{color: '#ebeff2'}} />
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-2 md:mb-4 tracking-tighter drop-shadow-lg" style={{color: '#ebeff2'}}>{portfolioCompanies}</h3>
              <p className="text-sm md:text-base lg:text-lg font-semibold tracking-wide" style={{color: '#f2f2f2'}}>{content.portfolioCompanies}</p>
            </div>

            <div className="text-center">
              <Shield className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-4 md:mb-8 drop-shadow-lg" style={{color: '#f2f2f2'}} />
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-2 md:mb-4 tracking-tighter drop-shadow-lg" style={{color: '#f2f2f2'}}>{investors}</h3>
              <p className="text-sm md:text-base lg:text-lg font-semibold tracking-wide" style={{color: '#ffffff'}}>{content.investors}</p>
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
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {content.investmentInChinaDescription}
              </p>
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
              <Button variant="outline" className="mt-8">
                {content.learnMoreInvestments}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
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
                src="/global-connections-map.png"
                alt="Sustainable energy and environmental responsibility"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-light text-slate-900 mb-6">{content.globalInvestment}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {content.globalInvestmentDescription}
              </p>
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
              <Button variant="outline" className="mt-8">
                {content.ourGlobalNetwork}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
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
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {content.globalReachDescription}
              </p>
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
              <Button variant="outline" className="mt-8">
                {content.exploreOurHoldings}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="relative h-96">
              <Image
                src="/global-connections-map.png"
                alt="Global investment network"
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
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {content.riskManagementDescription}
              </p>
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
              <Button variant="outline" className="mt-8">
                {content.riskFrameworkDetails}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
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
              <Button variant="outline">
                {content.viewAllNews}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          {/* Fixed Top News Row - Horizontal Alternating Layout */}
          <div className="space-y-12 mb-12">
            {/* First News Item - Left Image, Right Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-center bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full lg:w-1/2 h-64">
                <Image
                  src="/financial-charts-graphs.png"
                  alt="Financial charts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 p-8">
                <p className="text-sm text-slate-500 mb-2">January 15, 2024</p>
                <h3 className="text-2xl font-medium text-slate-900 mb-4">
                  {content.fourthQuarterResults}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {content.fourthQuarterResultsDescription}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  {content.readMore}
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Second News Item - Right Image, Left Content */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full lg:w-1/2 h-64">
                <Image
                  src="/modern-financial-office.png"
                  alt="Sustainable energy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 p-8">
                <p className="text-sm text-slate-500 mb-2">January 10, 2024</p>
                <h3 className="text-2xl font-medium text-slate-900 mb-4">
                  {content.climateTransitionInvestments}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {content.climateTransitionInvestmentsDescription}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  {content.readMore}
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Third News Item - Left Image, Right Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-center bg-white/95 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="relative w-full lg:w-1/2 h-64">
                <Image
                  src="/global-connections-map.png"
                  alt="Global investments"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 p-8">
                <p className="text-sm text-slate-500 mb-2">January 5, 2024</p>
                <h3 className="text-2xl font-medium text-slate-900 mb-4">
                  {content.globalMarketOutlook}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {content.globalMarketOutlookDescription}
                </p>
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
                    <h4 className="text-sm font-medium text-slate-900 mb-2">
                      {content.bornInternationalExpands}
                    </h4>
                    <p className="text-xs text-slate-600 mb-2">
                      {content.bornInternationalExpandsDescription}
                    </p>
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
                    <h4 className="text-sm font-medium text-slate-900 mb-2">
                      {content.quantumComputingBreakthrough}
                    </h4>
                    <p className="text-xs text-slate-600 mb-2">
                      {content.quantumComputingBreakthroughDescription}
                    </p>
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
                    <h4 className="text-sm font-medium text-slate-900 mb-2">
                      {content.annualInvestorConference}
                    </h4>
                    <p className="text-xs text-slate-600 mb-2">
                      {content.annualInvestorConferenceDescription}
                    </p>
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
                    <h4 className="text-sm font-medium text-slate-900 mb-2">
                      {content.aiInvestmentTrends}
                    </h4>
                    <p className="text-xs text-slate-600 mb-2">
                      {content.aiInvestmentTrendsDescription}
                    </p>
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
                    <h4 className="text-sm font-medium text-slate-900 mb-2">
                      {content.sustainabilityImpactReport}
                    </h4>
                    <p className="text-xs text-slate-600 mb-2">
                      {content.sustainabilityImpactReportDescription}
                    </p>
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
                    <h4 className="text-sm font-medium text-slate-900 mb-2">
                      {content.bornInternationalExpands}
                    </h4>
                    <p className="text-xs text-slate-600 mb-2">
                      {content.bornInternationalExpandsDescription}
                    </p>
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
                    <h4 className="text-sm font-medium text-slate-900 mb-2">
                      {content.quantumComputingBreakthrough}
                    </h4>
                    <p className="text-xs text-slate-600 mb-2">
                      {content.quantumComputingBreakthroughDescription}
                    </p>
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
                  src="/born-logo.png"
                  alt="BORN International Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-slate-400 text-sm">
                A global investment platform focusing on early-stage high-tech startups.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">{content.theFund}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">{content.aboutTheFund}</a></li>
                <li><a href="#" className="hover:text-white">{content.investmentStrategy}</a></li>
                <li><a href="#" className="hover:text-white">{content.returns}</a></li>
                <li><a href="#" className="hover:text-white">{content.holdings}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">{content.responsibleInvestment}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">{content.ourApproach}</a></li>
                <li><a href="#" className="hover:text-white">{content.climate}</a></li>
                <li><a href="#" className="hover:text-white">{content.ownership}</a></li>
                <li><a href="#" className="hover:text-white">{content.exclusions}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">{content.aboutNbim}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">{content.organization}</a></li>
                <li><a href="#" className="hover:text-white">{content.careers}</a></li>
                <li><a href="#" className="hover:text-white">{content.contact}</a></li>
                <li><a href="#" className="hover:text-white">{content.press}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Norges Bank Investment Management. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm">{content.privacyPolicy}</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">{content.termsOfUse}</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">{content.accessibility}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
