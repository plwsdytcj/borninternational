"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, Globe, ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function MotherFundPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"en" | "ru">("en")
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ]

  const languageContent = {
    en: {
      pageTitle: "Mother Fund",
      pageSubtitle: "Investment Project",
      backToPortfolio: "Back to Portfolio",
      projectIntro: "Project Introduction",
      fundName: "Born Rongchuang Fund",
      establishedDate: "Established in September 2016",
      fundDescription:
        "The fund is positioned as a mother fund, directly managing 166 million yuan, and has currently entered the post-investment management and exit period.",
      investmentDetails:
        "The invested funds include Dianliang Capital Ningbo Fund, Fukun Venture Capital Chengdu Fund, Hongtai (Chengdu) Fund, Chengdu Dianliang Born Fund, etc.",
      ecosystemAdvantage:
        "Relying on the investment fields and stages covered by various sub-funds, Born Rongchuang Fund has leveraged the advantages of an 'ecosystem fund', assisting the development of terminal invested enterprises through resource connection and empowerment.",
      investmentCommittee: "Investment Committee",
      investedProjects: "Invested Projects",
      closeModal: "Close",
      nextMember: "Next Member",
      prevMember: "Previous Member",
    },
    ru: {
      pageTitle: "Материнский фонд",
      pageSubtitle: "Инвестиционный проект",
      backToPortfolio: "Вернуться к портфолио",
      projectIntro: "Описание проекта",
      fundName: "Фонд Born Rongchuang",
      establishedDate: "Основан в сентябре 2016 года",
      fundDescription:
        "Фонд позиционируется как материнский фонд, напрямую управляющий 166 миллионами юаней, и в настоящее время вошел в период пост-инвестиционного управления и выхода.",
      investmentDetails:
        "Инвестированные фонды включают Фонд Dianliang Capital Ningbo, Фонд Fukun Venture Capital Chengdu, Фонд Hongtai (Chengdu), Фонд Chengdu Dianliang Born и др.",
      ecosystemAdvantage:
        "Опираясь на инвестиционные области и этапы, охватываемые различными суб-фондами, Фонд Born Rongchuang использовал преимущества 'экосистемного фонда', помогая развитию конечных инвестированных предприятий через связывание ресурсов и расширение возможностей.",
      investmentCommittee: "Инвестиционный комитет",
      investedProjects: "Инвестированные проекты",
      closeModal: "Закрыть",
      nextMember: "Следующий член",
      prevMember: "Предыдущий член",
    },
  }

  const currentLanguage = languages.find((lang) => lang.code === language)
  const content = languageContent[language]

  const investmentCommittee = [
    {
      name: "Tang Xueshu",
      nameRu: "Тан Сюэшу",
      position: "Party Secretary and Chairman of Born Capital and Haili'er Investment Group",
      positionRu: "Партийный секретарь и председатель Born Capital и Haili'er Investment Group",
      description:
        "With over 30 years of experience in well-known enterprise operation and management, he has rich successful experience in equity investment. He also serves as the chairman of the first China Communications Industry Association Low Power Wireless Communication Committee, vice chairman of Sichuan Enterprise Federation and Entrepreneurs Association, vice chairman of Sichuan Rural Development Federation, and many other social positions.",
      descriptionRu:
        "Имеет более 30 лет опыта в управлении известными предприятиями, обладает богатым успешным опытом в области инвестиций в акционерный капитал. Также занимает должности председателя первого Комитета по беспроводной связи малой мощности Китайской ассоциации коммуникационной промышленности, вице-председателя Федерации предприятий и предпринимателей Сычуани, вице-председателя Федерации развития сельских районов Сычуани и многие другие общественные должности.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Wang Shuzhai",
      nameRu: "Ван Шучжай",
      position: "Chairman of Qingdao Danxiang Group",
      positionRu: "Председатель группы Qingdao Danxiang",
      description:
        "Chairman of Qingdao Danxiang Group; has participated in investments in Weiying Company, Yuren Manufacturing, Caitong Fund and other companies in the field of equity investment.",
      descriptionRu:
        "Председатель группы Qingdao Danxiang; участвовал в инвестициях в компании Weiying, Yuren Manufacturing, Caitong Fund и другие компании в области инвестиций в акционерный капитал.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Sun Qibin",
      nameRu: "Сунь Цибинь",
      position: "Entrepreneur/Founding Partner",
      positionRu: "Предприниматель/Основатель-партнер",
      description:
        "EMBA from Cheung Kong Graduate School of Business and Ocean University of China. Founded Baofeng Group in 1989, headquartered in Qingdao, China. It is a diversified group enterprise integrating real estate investment, modern logistics, chain hotels, light asset operation, commercial management, jewelry, property management and other diversified development.",
      descriptionRu:
        "EMBA Школы бизнеса Чанцзян и Океанского университета Китая. Основал группу Baofeng в 1989 году со штаб-квартирой в Циндао, Китай. Это диверсифицированное групповое предприятие, объединяющее инвестиции в недвижимость, современную логистику, сетевые отели, управление легкими активами, коммерческое управление, ювелирные изделия, управление недвижимостью и другие диверсифицированные направления развития.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Ding Chong",
      nameRu: "Дин Чун",
      position: "Entrepreneur/Founding Partner",
      positionRu: "Предприниматель/Основатель-партнер",
      description:
        "General Manager of Shandong Jinsanbao Environmental Protection Equipment Company and Founding Partner of Born Capital. He has rich practical and investment experience in environmental protection and intelligent manufacturing fields, and has deeply deployed new technology enterprises in environmental protection, intelligent manufacturing and other fields.",
      descriptionRu:
        "Генеральный менеджер компании экологического оборудования Shandong Jinsanbao и основатель-партнер Born Capital. Имеет богатый практический и инвестиционный опыт в области охраны окружающей среды и интеллектуального производства, глубоко развернул новые технологические предприятия в области охраны окружающей среды, интеллектуального производства и других областях.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Wang Jianqiu",
      nameRu: "Ван Цзяньцю",
      position: "Entrepreneur/Investor",
      positionRu: "Предприниматель/Инвестор",
      description:
        "Vice Chairman of Yantai Catering and Culinary Industry Association, Chairman of Shandong Douxian Catering Management Co., Ltd., Chairman of Yantai Wanhua Catering Management Co., Ltd., and has won the honorary title of 'Outstanding Female Entrepreneur of Yantai'. Ms. Wang Jianqiu focuses on investment in technology fields and has participated in investments in excellent projects such as Sandi Jianke.",
      descriptionRu:
        "Вице-председатель Ассоциации ресторанного и кулинарного бизнеса Яньтая, председатель Shandong Douxian Catering Management Co., Ltd., председатель Yantai Wanhua Catering Management Co., Ltd., получила почетное звание 'Выдающийся женщина-предприниматель Яньтая'. Г-жа Ван Цзяньцю сосредоточена на инвестициях в технологические области и участвовала в инвестициях в отличные проекты, такие как Sandi Jianke.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Yang Jie",
      nameRu: "Ян Цзе",
      position: "Chairman of Guanfengyuan Catering Group, Co-founder of Born Capital",
      positionRu: "Председатель ресторанной группы Guanfengyuan, со-основатель Born Capital",
      description: "Chairman of Guanfengyuan Catering Group and Co-founder of Born Capital.",
      descriptionRu: "Председатель ресторанной группы Guanfengyuan и со-основатель Born Capital.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Chu Hao",
      nameRu: "Чу Хао",
      position: "Founding Partner",
      positionRu: "Основатель-партнер",
      description:
        "Founding Partner of Born Capital, Partner of Dianliang Born, with rich investment experience, specializing in Internet, education, consumption upgrade, Internet of Things and other fields.",
      descriptionRu:
        "Основатель-партнер Born Capital, партнер Dianliang Born, с богатым инвестиционным опытом, специализирующийся в области Интернета, образования, модернизации потребления, Интернета вещей и других областях.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Li Wencheng",
      nameRu: "Ли Вэньчэн",
      position: "PhD/Founding Partner",
      positionRu: "Доктор наук/Основатель-партнер",
      description:
        "Obtained a PhD in Engineering from East China University of Science and Technology, and is also an alumnus of Tsinghua University PBC School of Finance and Zhejiang University School of Management. Currently serves as an adjunct professor at Hohai University Business School. As a founding partner of Born Capital, he has participated in the formation and management of all funds under the company, has rich experience in early-stage investment in technology projects, and has been responsible for investments in Sandi Jianke, Yixun Optoelectronics, Token Cloud, Bubi Blockchain, Bose Quantum, and Zhongtan Guoke.",
      descriptionRu:
        "Получил докторскую степень по инженерии в Восточно-Китайском университете науки и технологий, также является выпускником Школы финансов PBC Университета Цинхуа и Школы менеджмента Чжэцзянского университета. В настоящее время работает адъюнкт-профессором в Школе бизнеса Университета Хохай. Как основатель-партнер Born Capital, участвовал в формировании и управлении всеми фондами компании, имеет богатый опыт в ранних инвестициях в технологические проекты и отвечал за инвестиции в Sandi Jianke, Yixun Optoelectronics, Token Cloud, Bubi Blockchain, Bose Quantum и Zhongtan Guoke.",
      image: "/placeholder-user.jpg",
    },
  ]

  const investedProjects = [
    {
      name: "Dianliang Capital",
      nameRu: "Dianliang Capital",
      logo: "/dianliang-capital-logo.png",
    },
    {
      name: "Fukun Venture Capital",
      nameRu: "Fukun Venture Capital",
      logo: "/fukun-venture-capital-logo.png",
    },
    {
      name: "Hongtai (Chengdu) Fund",
      nameRu: "Фонд Hongtai (Чэнду)",
      logo: "/generic-fund-logo.png",
    },
    {
      name: "Dianliang Born Fund",
      nameRu: "Фонд Dianliang Born",
      logo: "/dianliang-born-fund-logo.png",
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleMemberClick = (index: number) => {
    setSelectedMember(index)
  }

  const handleCloseModal = () => {
    setSelectedMember(null)
  }

  const handleNextMember = () => {
    if (selectedMember !== null) {
      setSelectedMember((selectedMember + 1) % investmentCommittee.length)
    }
  }

  const handlePrevMember = () => {
    if (selectedMember !== null) {
      setSelectedMember(selectedMember === 0 ? investmentCommittee.length - 1 : selectedMember - 1)
    }
  }

  const currentMember = selectedMember !== null ? investmentCommittee[selectedMember] : null

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <div className="flex items-center">
          <Image src="/born-logo.png" alt="BORN International Logo" width={180} height={60} className="h-12 w-auto" />
        </div>

        <div className="flex items-center space-x-6">
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
                  onClick={() => setLanguage(lang.code as "en" | "ru")}
                  className={`flex items-center space-x-2 cursor-pointer ${
                    language === lang.code ? "bg-blue-50 text-blue-600" : ""
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            onClick={() => router.push("/portfolio")}
            className="flex items-center space-x-2 text-slate-700 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{content.backToPortfolio}</span>
          </button>
        </div>
      </header>

      {/* Banner Section */}
      <section
        className="py-24 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-210914110R4c6_X-Design.jpg-RF2OJ0PUCCp2Liuytq7PXBppZcO22F.jpeg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <p className="text-lg font-light mb-4 opacity-90">{content.pageSubtitle}</p>
          <h1 className="text-5xl font-light">{content.pageTitle}</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side - Fund Number */}
            <div className="lg:w-1/4">
              <div className="text-center lg:text-left">
                <span className="text-8xl font-light text-slate-300">01</span>
                <p className="text-xl text-slate-600 mt-4">{content.fundName}</p>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-3/4">
              <h2 className="text-3xl font-light text-slate-900 mb-8">{content.projectIntro}</h2>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{content.fundName}</h3>
                <p className="text-slate-700 mb-4">
                  <strong>{content.establishedDate}</strong>
                </p>
                <p className="text-slate-700 mb-4">{content.fundDescription}</p>
                <p className="text-slate-700 mb-4">{content.investmentDetails}</p>
                <p className="text-slate-700">{content.ecosystemAdvantage}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Committee Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light text-slate-900 mb-12">{content.investmentCommittee}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {investmentCommittee.map((member, index) => (
              <div key={index} className="text-center cursor-pointer group" onClick={() => handleMemberClick(index)}>
                <div className="relative w-20 h-20 mx-auto mb-3 overflow-hidden rounded-full group-hover:scale-105 transition-transform">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={language === "ru" ? member.nameRu : member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                  {language === "ru" ? member.nameRu : member.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invested Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-light text-slate-900 mb-12">{content.investedProjects}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {investedProjects.map((project, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-white border border-gray-200 rounded-lg p-6 group-hover:shadow-lg transition-shadow">
                  <div className="relative w-full h-16 mb-4">
                    <Image
                      src={project.logo || "/placeholder.svg"}
                      alt={language === "ru" ? project.nameRu : project.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-slate-700">
                    {language === "ru" ? project.nameRu : project.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember !== null && currentMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-semibold text-slate-900">
                {language === "ru" ? currentMember.nameRu : currentMember.name}
              </h3>
              <button onClick={handleCloseModal} className="text-slate-400 hover:text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative w-48 h-48 mx-auto rounded-lg overflow-hidden">
                    <Image
                      src={currentMember.image || "/placeholder.svg"}
                      alt={language === "ru" ? currentMember.nameRu : currentMember.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">
                    {language === "ru" ? currentMember.nameRu : currentMember.name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-4">
                    {language === "ru" ? currentMember.positionRu : currentMember.position}
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    {language === "ru" ? currentMember.descriptionRu : currentMember.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-6 border-t bg-gray-50">
              <Button
                variant="outline"
                onClick={handlePrevMember}
                className="flex items-center space-x-2 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{content.prevMember}</span>
              </Button>

              <span className="text-sm text-slate-500">
                {selectedMember + 1} / {investmentCommittee.length}
              </span>

              <Button
                variant="outline"
                onClick={handleNextMember}
                className="flex items-center space-x-2 bg-transparent"
              >
                <span>{content.nextMember}</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
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
                <li>
                  <a href="#" className="hover:text-white">
                    About the fund
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Investment strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Holdings
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Responsible Investment</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Our approach
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Climate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Ownership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Exclusions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">About Born International</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Organization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <Link href="/news" className="hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 Born International. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                Terms of Use
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
