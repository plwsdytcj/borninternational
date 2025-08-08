'use client'
import { useState, useEffect } from 'react'
import { ArrowLeft, Globe, ChevronDown, User, TrendingUp, Building, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function PortfolioPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<'en' | 'ru'>('en')

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ]

  const languageContent = {
    en: {
      portfolioTitle: "Investment Portfolio",
      portfolioDescription: "Discover our comprehensive investment approach through our dedicated teams and diversified fund structures",
      backToHome: "Back to Home",
      investmentTeam: "Investment Team",
      teamDescription: "Our experienced professionals bring deep expertise across sectors and regions",
      fundStructure: "Fund Structure",
      fundDescription: "Diversified investment vehicles designed to capture opportunities across different stages and sectors",
      viewDetails: "View Details",
      // Team Members
      seniorPartner: "Senior Partner",
      managingDirector: "Managing Director",
      principalInvestor: "Principal Investor",
      investmentDirector: "Investment Director",
      portfolioManager: "Portfolio Manager",
      researchAnalyst: "Research Analyst",
      // Fund Types
      motherFund: "Mother Fund",
      motherFundDesc: "Diversified fund of funds investing in multiple asset classes and strategies across global markets",
      directInvestment: "Direct Investment",
      directInvestmentDesc: "Technology-focused direct investments in AI, IoT, blockchain, and emerging technologies",
      specialFund: "Special Fund",
      specialFundDesc: "Specialized funds including environmental funds and new energy investment vehicles",
      moreFunds: "More Funds",
      moreFundsDesc: "Explore additional investment opportunities and future fund structures",
      // Team member names and details
      teamMember1: "Dr. Sarah Johnson",
      teamMember1Title: "Senior Partner - Technology",
      teamMember1Desc: "15+ years in tech investments, former Google executive",
      teamMember2: "Michael Zhang",
      teamMember2Title: "Managing Director - Asia",
      teamMember2Desc: "Expert in Asian markets and cross-border investments",
      teamMember3: "Elena Petrov",
      teamMember3Title: "Principal - Healthcare",
      teamMember3Desc: "Biotech and medical device investment specialist",
      teamMember4: "David Kim",
      teamMember4Title: "Investment Director - FinTech",
      teamMember4Desc: "Digital finance and blockchain technology expert",
      teamMember5: "Lisa Chen",
      teamMember5Title: "Portfolio Manager - Energy",
      teamMember5Desc: "Renewable energy and sustainability investments",
      teamMember6: "Robert Smith",
      teamMember6Title: "Research Analyst - AI",
      teamMember6Desc: "Machine learning and artificial intelligence research"
    },
    ru: {
      portfolioTitle: "Инвестиционный портфель",
      portfolioDescription: "Откройте для себя наш комплексный инвестиционный подход через наши специализированные команды и диверсифицированные структуры фондов",
      backToHome: "Вернуться на главную",
      investmentTeam: "Инвестиционная команда",
      teamDescription: "Наши опытные профессионалы обладают глубокой экспертизой в различных секторах и регионах",
      fundStructure: "Структура фондов",
      fundDescription: "Диверсифицированные инвестиционные инструменты, предназначенные для использования возможностей на разных этапах и в разных секторах",
      viewDetails: "Посмотреть детали",
      // Team Members
      seniorPartner: "Старший партнер",
      managingDirector: "Управляющий директор",
      principalInvestor: "Главный инвестор",
      investmentDirector: "Директор по инвестициям",
      portfolioManager: "Портфельный менеджер",
      researchAnalyst: "Аналитик-исследователь",
      // Fund Types
      motherFund: "Материнский фонд",
      motherFundDesc: "Диверсифицированный фонд фондов, инвестирующий в несколько классов активов и стратегий на мировых рынках",
      directInvestment: "Прямые инвестиции",
      directInvestmentDesc: "Технологически ориентированные прямые инвестиции в ИИ, IoT, блокчейн и новые технологии",
      specialFund: "Специальный фонд",
      specialFundDesc: "Специализированные фонды, включая экологические фонды и инвестиционные инструменты новой энергетики",
      moreFunds: "Больше фондов",
      moreFundsDesc: "Изучите дополнительные инвестиционные возможности и будущие структуры фондов",
      // Team member names and details
      teamMember1: "Доктор Сара Джонсон",
      teamMember1Title: "Старший партнер - Технологии",
      teamMember1Desc: "15+ лет в технологических инвестициях, бывший руководитель Google",
      teamMember2: "Майкл Чжан",
      teamMember2Title: "Управляющий директор - Азия",
      teamMember2Desc: "Эксперт по азиатским рынкам и трансграничным инвестициям",
      teamMember3: "Елена Петров",
      teamMember3Title: "Принципал - Здравоохранение",
      teamMember3Desc: "Специалист по инвестициям в биотехнологии и медицинские устройства",
      teamMember4: "Дэвид Ким",
      teamMember4Title: "Директор по инвестициям - ФинТех",
      teamMember4Desc: "Эксперт по цифровым финансам и блокчейн-технологиям",
      teamMember5: "Лиза Чен",
      teamMember5Title: "Портфельный менеджер - Энергетика",
      teamMember5Desc: "Инвестиции в возобновляемую энергию и устойчивое развитие",
      teamMember6: "Роберт Смит",
      teamMember6Title: "Аналитик-исследователь - ИИ",
      teamMember6Desc: "Исследования машинного обучения и искусственного интеллекта"
    }
  }

  const currentLanguage = languages.find(lang => lang.code === language);
  const content = languageContent[language];

  const teamMembers = [
    {
      name: content.teamMember1,
      title: content.teamMember1Title,
      description: content.teamMember1Desc,
      image: "/placeholder-user.jpg"
    },
    {
      name: content.teamMember2,
      title: content.teamMember2Title,
      description: content.teamMember2Desc,
      image: "/placeholder-user.jpg"
    },
    {
      name: content.teamMember3,
      title: content.teamMember3Title,
      description: content.teamMember3Desc,
      image: "/placeholder-user.jpg"
    },
    {
      name: content.teamMember4,
      title: content.teamMember4Title,
      description: content.teamMember4Desc,
      image: "/placeholder-user.jpg"
    },
    {
      name: content.teamMember5,
      title: content.teamMember5Title,
      description: content.teamMember5Desc,
      image: "/placeholder-user.jpg"
    },
    {
      name: content.teamMember6,
      title: content.teamMember6Title,
      description: content.teamMember6Desc,
      image: "/placeholder-user.jpg"
    }
  ]

  const funds = [
    {
      number: "01",
      title: content.motherFund,
      description: content.motherFundDesc,
      color: "bg-gradient-to-br from-amber-400 to-amber-600",
      textColor: "text-white"
    },
    {
      number: "02", 
      title: content.directInvestment,
      description: content.directInvestmentDesc,
      color: "bg-gradient-to-br from-amber-400 to-amber-600",
      textColor: "text-white"
    },
    {
      number: "03",
      title: content.specialFund,
      description: content.specialFundDesc,
      color: "bg-gradient-to-br from-amber-400 to-amber-600",
      textColor: "text-white"
    },
    {
      number: "04",
      title: content.moreFunds,
      description: content.moreFundsDesc,
      color: "bg-gradient-to-br from-amber-400 to-amber-600",
      textColor: "text-white"
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleViewDetails = (index: number) => {
    if (index === 0) {
      router.push('/mother-fund')
    }
  }

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 text-slate-700 hover:text-slate-900">
                <Globe className="w-4 h-4" />
                <span className="text-sm">{currentLanguage?.flag} {currentLanguage?.name}</span>
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
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button 
            onClick={() => router.push('/')} 
            className="flex items-center space-x-2 text-slate-700 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{content.backToHome}</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="py-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-210Z92040591c-AQL5YitVBwqKZKgTdSidtYiJsPDuyf.png')"
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-light text-white mb-4">{content.portfolioTitle}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {content.portfolioDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Investment Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">{content.investmentTeam}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.teamDescription}
            </p>
          </div>

          {/* Team Members Grid - 2 rows of 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamMembers.slice(0, 3).map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.slice(3, 6).map((member, index) => (
              <Card key={index + 3} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Structure Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">{content.fundStructure}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.fundDescription}
            </p>
          </div>

          {/* Funds List - Mobile Optimized */}
          <div className="space-y-6">
            {funds.map((fund, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] ${fund.color}`}>
                <CardContent className="p-6 md:p-8">
                  {/* Mobile Layout */}
                  <div className="block md:hidden">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`text-4xl font-light ${fund.textColor} opacity-80`}>
                        {fund.number}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className={`${fund.textColor} hover:${fund.textColor} px-3 py-2`}
                        onClick={() => handleViewDetails(index)}
                      >
                        {content.viewDetails}
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-3 ${fund.textColor}`}>
                        {fund.title}
                      </h3>
                      <p className={`${fund.textColor} opacity-90 leading-relaxed text-sm`}>
                        {fund.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                      <div className={`text-6xl font-light ${fund.textColor} opacity-80`}>
                        {fund.number}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-semibold mb-2 ${fund.textColor}`}>
                          {fund.title}
                        </h3>
                        <p className={`${fund.textColor} opacity-90 leading-relaxed max-w-2xl`}>
                          {fund.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      <Button 
                        variant="ghost" 
                        className={`${fund.textColor} hover:${fund.textColor}`}
                        onClick={() => handleViewDetails(index)}
                      >
                        {content.viewDetails}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            <p className="text-slate-400 text-sm">
              © 2024 Born International. All rights reserved.
            </p>
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
