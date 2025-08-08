'use client'
import { useState, useEffect } from 'react'
import { ArrowLeft, Globe, ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function MotherFundPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<'en' | 'ru'>('en')
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ]

  const languageContent = {
    en: {
      investmentProject: "Investment Project",
      projectCase: "Project · Case",
      backToPortfolio: "Back to Portfolio",
      projectIntroduction: "Project Introduction",
      bornRongchuangFund: "Born Rongchuang Fund",
      establishedDate: "Established in September 2016",
      fundDescription: "The fund is positioned as a mother fund, directly managing a scale of 166 million yuan, and has currently entered the post-investment management and exit period.",
      investmentFunds: "Investment funds include Dianliang Capital Ningbo Fund, Fukun Venture Capital Chengdu Fund, Hongtai (Chengdu) Fund, Chengdu Dianliang Born Fund, etc.",
      ecosystemAdvantage: "Relying on the investment fields and stages covered by various sub-funds, Born Rongchuang Fund has leveraged the advantages of an 'ecosystem fund', assisting the development of terminal invested enterprises through resource integration and empowerment.",
      investmentCommittee: "Investment Committee",
      investedProjects: "Invested Projects",
      // Team members
      tangXueshu: "Tang Xueshu",
      tangXueshuTitle: "Party Secretary and Chairman of Born Capital and Haili'er Investment Group",
      tangXueshuDesc: "With over 30 years of experience in well-known enterprise operation and management, he has rich successful experience in equity investment. He also serves as the first chairman of the Low Power Wireless Communication Committee of China Communications Industry Association, vice chairman of Sichuan Enterprise Federation and Entrepreneurs Association, vice chairman of Sichuan Rural Development Federation, and many other social positions.",
      
      wangShuzhai: "Wang Shuzhai",
      wangShuzhaiTitle: "Chairman of Qingdao Danxiang Group",
      wangShuzhaiDesc: "Chairman of Qingdao Danxiang Group; has participated in investments in Weiying Company, Yuren Manufacturing, Caitong Fund and other companies in the equity investment field.",
      
      sunQibin: "Sun Qibin",
      sunQibinTitle: "Entrepreneur/Founding Partner",
      sunQibinDesc: "EMBA from Cheung Kong Graduate School of Business and Ocean University of China. Founded Baofeng Group in 1989, headquartered in Qingdao, China. It is a diversified group enterprise integrating real estate investment, modern logistics, chain hotels, light asset operation, commercial management, jewelry, property management and other diversified development.",
      
      dingChong: "Ding Chong",
      dingChongTitle: "Entrepreneur/Founding Partner",
      dingChongDesc: "General Manager of Shandong Jinsanbao Environmental Protection Equipment Company and Founding Partner of Born Capital. He has rich industrial and investment experience in environmental protection and intelligent manufacturing fields, and has deeply deployed new technology enterprises in environmental protection, intelligent manufacturing and other fields.",
      
      wangJianqiu: "Wang Jianqiu",
      wangJianqiuTitle: "Entrepreneur/Investor",
      wangJianqiuDesc: "Vice Chairman of Yantai Catering and Culinary Industry Association, Chairman of Shandong Douxian Catering Management Co., Ltd., Chairman of Yantai Wanhua Catering Management Co., Ltd., and has won the honorary title of 'Outstanding Female Entrepreneur of Yantai'. Ms. Wang Jianqiu focuses on investment in technology fields and has participated in investments in excellent projects such as Sandi Jianke.",
      
      yangJie: "Yang Jie",
      yangJieTitle: "Chairman of Guanfengyuan Catering Group, Co-founder of Born Capital",
      yangJieDesc: "Chairman of Guanfengyuan Catering Group, Co-founder of Born Capital.",
      
      chuHao: "Chu Hao",
      chuHaoTitle: "Founding Partner",
      chuHaoDesc: "Founding Partner of Born Capital, Partner of Dianliang Born, with rich investment experience, specializing in Internet, education, consumption upgrade, Internet of Things and other fields.",
      
      liWencheng: "Li Wencheng",
      liWenchengTitle: "PhD/Founding Partner",
      liWenchengDesc: "Obtained a PhD in Engineering from East China University of Science and Technology, and is also an alumnus of Tsinghua University PBC School of Finance and Zhejiang University School of Management, currently serving as an adjunct professor at Hohai University Business School. As a founding partner of Born Capital, he has participated in the establishment and management of all funds under the company, with rich experience in early-stage investment of technology projects, and has been responsible for investments in Sandi Jianke, Yixun Optoelectronics, Token Cloud, Bubi Blockchain, Bose Quantum, and Zhongtan Guoke. In addition, Dr. Li Wencheng has published multiple papers in international journals, participated in many domestic and international collaborative academic projects, and serves as an innovation and entrepreneurship mentor at multiple universities. He was awarded '35U35 Young Investor' by the Young Investor Club in 2021."
    },
    ru: {
      investmentProject: "Инвестиционный проект",
      projectCase: "Проект · Кейс",
      backToPortfolio: "Вернуться к портфолио",
      projectIntroduction: "Описание проекта",
      bornRongchuangFund: "Фонд Born Rongchuang",
      establishedDate: "Основан в сентябре 2016 года",
      fundDescription: "Фонд позиционируется как материнский фонд, напрямую управляющий масштабом в 166 миллионов юаней, и в настоящее время вошел в период пост-инвестиционного управления и выхода.",
      investmentFunds: "Инвестиционные фонды включают Фонд Dianliang Capital Ningbo, Фонд Fukun Venture Capital Chengdu, Фонд Hongtai (Chengdu), Фонд Chengdu Dianliang Born и др.",
      ecosystemAdvantage: "Опираясь на инвестиционные области и этапы, охватываемые различными суб-фондами, Фонд Born Rongchuang использовал преимущества 'экосистемного фонда', помогая развитию конечных инвестированных предприятий через интеграцию ресурсов и расширение возможностей.",
      investmentCommittee: "Инвестиционный комитет",
      investedProjects: "Инвестированные проекты",
      // Team members (keeping English names but Russian descriptions)
      tangXueshu: "Тан Сюэшу",
      tangXueshuTitle: "Партийный секретарь и председатель Born Capital и Haili'er Investment Group",
      tangXueshuDesc: "Более 30 лет опыта в управлении известными предприятиями, имеет богатый успешный опыт в области инвестиций в акционерный капитал.",
      
      wangShuzhai: "Ван Шучжай",
      wangShuzhaiTitle: "Председатель Qingdao Danxiang Group",
      wangShuzhaiDesc: "Председатель Qingdao Danxiang Group; участвовал в инвестициях в компании Weiying, Yuren Manufacturing, Caitong Fund и другие в области инвестиций в акционерный капитал.",
      
      sunQibin: "Сунь Цибинь",
      sunQibinTitle: "Предприниматель/Основатель-партнер",
      sunQibinDesc: "EMBA Школы бизнеса Чанцзян и Океанского университета Китая. Основал Группу Baofeng в 1989 году со штаб-квартирой в Циндао, Китай.",
      
      dingChong: "Дин Чун",
      dingChongTitle: "Предприниматель/Основатель-партнер",
      dingChongDesc: "Генеральный менеджер Shandong Jinsanbao Environmental Protection Equipment Company и основатель-партнер Born Capital.",
      
      wangJianqiu: "Ван Цзяньцю",
      wangJianqiuTitle: "Предприниматель/Инвестор",
      wangJianqiuDesc: "Вице-председатель Ассоциации ресторанной и кулинарной индустрии Яньтай, председатель Shandong Douxian Catering Management Co., Ltd.",
      
      yangJie: "Ян Цзе",
      yangJieTitle: "Председатель Guanfengyuan Catering Group, со-основатель Born Capital",
      yangJieDesc: "Председатель Guanfengyuan Catering Group, со-основатель Born Capital.",
      
      chuHao: "Чу Хао",
      chuHaoTitle: "Основатель-партнер",
      chuHaoDesc: "Основатель-партнер Born Capital, партнер Dianliang Born, с богатым инвестиционным опытом.",
      
      liWencheng: "Ли Вэньчэн",
      liWenchengTitle: "Доктор наук/Основатель-партнер",
      liWenchengDesc: "Получил докторскую степень по инженерии в Восточно-Китайском университете науки и технологий, также является выпускником Школы финансов PBC Университета Цинхуа."
    }
  }

  const currentLanguage = languages.find(lang => lang.code === language);
  const content = languageContent[language];

  const investmentCommittee = [
    {
      name: content.tangXueshu,
      title: content.tangXueshuTitle,
      description: content.tangXueshuDesc,
      image: "/placeholder-user.jpg"
    },
    {
      name: content.wangShuzhai,
      title: content.wangShuzhaiTitle,
      description: content.wangShuzhaiDesc,
      image: "/placeholder-user.jpg"
    },
    {
      name: content.sunQibin,
      title: content.sunQibinTitle,
      description: content.sunQibinDesc,
      image: "/placeholder-user.jpg"
    },
    {
      name: content.dingChong,
      title: content.dingChongTitle,
      description: content.dingChongDesc,
      image: "/placeholder-user.jpg"
    },
    {
      name: content.wangJianqiu,
      title: content.wangJianqiuTitle,
      description: content.wangJianqiuDesc,
      image: "/placeholder-user.jpg"
    },
    {
      name: content.yangJie,
      title: content.yangJieTitle,
      description: content.yangJieDesc,
      image: "/placeholder-user.jpg"
    },
    {
      name: content.chuHao,
      title: content.chuHaoTitle,
      description: content.chuHaoDesc,
      image: "/placeholder-user.jpg"
    },
    {
      name: content.liWencheng,
      title: content.liWenchengTitle,
      description: content.liWenchengDesc,
      image: "/placeholder-user.jpg"
    }
  ]

  const investedProjects = [
    {
      name: "Dianliang Capital",
      image: "/placeholder-logo.png"
    },
    {
      name: "Fukun Venture Capital",
      image: "/placeholder-logo.png"
    },
    {
      name: "Hongtai (Chengdu) Fund",
      image: "/placeholder-logo.png"
    },
    {
      name: "Dianliang Born Fund",
      image: "/placeholder-logo.png"
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const nextMember = () => {
    if (selectedMember !== null) {
      setSelectedMember((selectedMember + 1) % investmentCommittee.length)
    }
  }

  const prevMember = () => {
    if (selectedMember !== null) {
      setSelectedMember(selectedMember === 0 ? investmentCommittee.length - 1 : selectedMember - 1)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <div className="flex items-center">
          <Image
            src="/born-logo.png"
            alt="BORN International Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </div>

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
            onClick={() => router.push('/portfolio')} 
            className="flex items-center space-x-2 text-slate-700 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{content.backToPortfolio}</span>
          </button>
        </div>
      </header>

      {/* Banner */}
      <section 
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/bg-project-1.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <p className="text-lg font-light mb-4 opacity-90">{content.investmentProject}</p>
          <h1 className="text-5xl font-light">{content.projectCase}</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side - Fund Number */}
            <div className="lg:w-1/4">
              <div className="text-center lg:text-left">
                <div className="text-8xl font-light text-gray-300 mb-4">01</div>
                <p className="text-xl text-blue-600 font-medium">{content.bornRongchuangFund}</p>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-3/4">
              <h2 className="text-3xl font-light text-slate-900 mb-8">{content.projectIntroduction}</h2>
              
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">{content.bornRongchuangFund}</h3>
                  <p className="font-semibold mb-4">{content.establishedDate}</p>
                </div>
                
                <p>{content.fundDescription}</p>
                <p>{content.investmentFunds}</p>
                <p>{content.ecosystemAdvantage}</p>
              </div>

              {/* Investment Committee */}
              <div className="mt-16">
                <h2 className="text-3xl font-light text-slate-900 mb-8">{content.investmentCommittee}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {investmentCommittee.map((member, index) => (
                    <div 
                      key={index}
                      className="text-center cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedMember(index)}
                    >
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <p className="font-medium text-slate-900">{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Invested Projects */}
              <div className="mt-16">
                <h2 className="text-3xl font-light text-slate-900 mb-8">{content.investedProjects}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {investedProjects.map((project, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                      <div className="relative w-full h-16 mb-4">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-center text-sm text-slate-600">{project.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <div className="relative h-96 md:h-full">
                    <Image
                      src={investmentCommittee[selectedMember].image || "/placeholder.svg"}
                      alt={investmentCommittee[selectedMember].name}
                      fill
                      className="object-cover rounded-l-lg"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                      {investmentCommittee[selectedMember].name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {investmentCommittee[selectedMember].title}
                    </p>
                  </div>
                  
                  <div className="text-slate-700 leading-relaxed">
                    <p>{investmentCommittee[selectedMember].description}</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <button
                onClick={prevMember}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextMember}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

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
