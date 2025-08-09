"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, Globe, ChevronDown, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function PortfolioPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"en" | "ru">("en")
  const [selectedMemberIndex, setSelectedMemberIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ]

  const languageContent = {
    en: {
      portfolioTitle: "Investment Portfolio",
      portfolioDescription:
        "Discover our comprehensive investment approach through our dedicated teams and diversified fund structures",
      backToHome: "Back to Home",
      investmentTeam: "Investment Team",
      teamDescription: "Our experienced professionals bring deep expertise across sectors and regions",
      fundStructure: "Fund Structure",
      fundDescription:
        "Diversified investment vehicles designed to capture opportunities across different stages and sectors",
      viewDetails: "View Details",
      previousMember: "Previous Member",
      nextMember: "Next Member",
      closeModal: "Close",
      // Team Members
      seniorPartner: "Senior Partner",
      managingDirector: "Managing Director",
      principalInvestor: "Principal Investor",
      investmentDirector: "Investment Director",
      portfolioManager: "Portfolio Manager",
      researchAnalyst: "Research Analyst",
      // Fund Types
      motherFund: "Mother Fund",
      motherFundDesc:
        "Diversified fund of funds investing in multiple asset classes and strategies across global markets",
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
      teamMember6Desc: "Machine learning and artificial intelligence research",
    },
    ru: {
      portfolioTitle: "Инвестиционный портфель",
      portfolioDescription:
        "Откройте для себя наш комплексный инвестиционный подход через наши специализированные команды и диверсифицированные структуры фондов",
      backToHome: "Вернуться на главную",
      investmentTeam: "Инвестиционная команда",
      teamDescription: "Наши опытные профессионалы обладают глубокой экспертизой в различных секторах и регионах",
      fundStructure: "Структура фондов",
      fundDescription:
        "Диверсифицированные инвестиционные инструменты, предназначенные для использования возможностей на разных этапах и в разных секторах",
      viewDetails: "Посмотреть детали",
      previousMember: "Предыдущий член",
      nextMember: "Следующий член",
      closeModal: "Закрыть",
      // Team Members
      seniorPartner: "Старший партнер",
      managingDirector: "Управляющий директор",
      principalInvestor: "Главный инвестор",
      investmentDirector: "Директор по инвестициям",
      portfolioManager: "Портфельный менеджер",
      researchAnalyst: "Аналитик-исследователь",
      // Fund Types
      motherFund: "Материнский фонд",
      motherFundDesc:
        "Диверсифицированный фонд фондов, инвестирующий в несколько классов активов и стратегий на мировых рынках",
      directInvestment: "Прямые инвестиции",
      directInvestmentDesc: "Технологически ориентированные прямые инвестиции в ИИ, IoT, блокчейн и новые технологии",
      specialFund: "Специальный фонд",
      specialFundDesc:
        "Специализированные фонды, включая экологические фонды и инвестиционные инструменты новой энергетики",
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
      teamMember6Desc: "Исследования машинного обучения и искусственного интеллекта",
    },
  }

  const currentLanguage = languages.find((lang) => lang.code === language)
  const content = languageContent[language]

  const teamMembers = [
    {
      name: "Xueshu Tang",
      title: language === "en" ? "Party Secretary & Chairman" : "党委书记、董事长",
      description:
        language === "en"
          ? "Over 30 years of experience in enterprise management and equity investment"
          : "深耕知名企业运营管理30余年，在股权投资方面有着丰富的成功经验",
      image: "/team/唐学书_profile.jpg",
      fullBio:
        language === "en"
          ? "Over 30 years of experience in well-known enterprise operation and management, with rich successful experience in equity investment. Also serves as the first chairman of the Low Power Wireless Communication Committee of China Communications Industry Association, vice president of Sichuan Enterprise Federation and Entrepreneurs Association, vice president of Sichuan Rural Development Federation and many other social positions."
          : "深耕知名企业运营管理30余年，在股权投资方面，有着丰富的成功经验。兼任首届中国通信工业协会低功耗无线通信委员会主任，四川省企业联合会、企业家协会副会长，四川省乡村发展联合会副会长等诸多社会职务。",
      hasModal: true,
    },
    {
      name: "Hao Chu",
      title: language === "en" ? "Founding Partner" : "创始合伙人",
      description:
        language === "en"
          ? "Founding Partner of Boen Capital and Dianke Boen Partners, with extensive investment experience in Internet, education, consumer upgrades, and IoT sectors"
          : "伯恩资本创始合伙人、点克伯恩合伙人、投资经验丰富，擅长互联网、教育、消费升级、物联网等领域。",
      image: "/team/褚浩_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Founding Partner of Boen Capital and Dianke Boen Partners with extensive investment experience across multiple sectors including Internet, education, consumer upgrades, and IoT. Has a proven track record in identifying and nurturing high-growth technology companies."
          : "伯恩资本创始合伙人、点克伯恩合伙人、投资经验丰富，擅长互联网、教育、消费升级、物联网等领域。在识别和培育高增长科技公司方面拥有丰富的成功经验。",
      hasModal: true,
    },
    {
      name: "Chong Li",
      title: language === "en" ? "PPTV Co-founder & Angel Investor" : "PPTV联合创始人",
      description:
        language === "en"
          ? "Well-known investor and PPTV co-founder with successful investments in multiple unicorn companies"
          : "知名投资人，PPTV联合创始人；天使轮领投波奇网，现市值已超过4亿美金；A轮投资友加，现市值已超过2亿美金。",
      image: "/team/李翀_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Well-known investor and PPTV co-founder with extensive experience in early-stage investments. Led angel round investment in Boqii.com (current market value exceeds $400 million) and Series A investment in YouJia (current market value exceeds $200 million). Has a proven track record in identifying and nurturing high-growth technology companies."
          : "知名投资人，PPTV联合创始人；天使轮领投波奇网；天使轮领投波奇网，现市值已超过4亿美金；A轮投资友加，现市值已超过2亿美金。在识别和培育高增长科技公司方面拥有丰富的成功经验。",
      hasModal: true,
    },
    {
      name: "Feng Guo",
      title: language === "en" ? "Dr./Professor - Blockchain & IoT" : "博士/教授",
      description:
        language === "en"
          ? "Focused on Internet and IoT domain investments, early blockchain technology researcher in China, Professor at Xi'an University of Electronic Science and Technology"
          : "专注于互联网及物联网领域投资，国内早期区块链技术研究者；曾任西安电子科技大学教授。",
      image: "/team/郭峰_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Dr. Guo Feng is a distinguished academic and investor focused on Internet and IoT domain investments. As one of China's early blockchain technology researchers, he brings deep technical expertise to investment decisions. He previously served as a Professor at Xi'an University of Electronic Science and Technology, combining academic rigor with practical investment experience."
          : "郭峰博士是一位杰出的学者和投资人，专注于互联网及物联网领域投资。作为国内早期区块链技术研究者之一，他为投资决策带来了深厚的技术专业知识。他曾任西安电子科技大学教授，将学术严谨性与实际投资经验相结合。",
      hasModal: true,
    },
    {
      name: "Weixin Lao",
      title: language === "en" ? "Dr./Professor - Investment Partner" : "博士/教授",
      description:
        language === "en"
          ? "Partner at Dianliang Borun Capital and Professor at Hong Kong Chinese University, with 25 years of experience in high-tech industries and risk investment"
          : "点亮伯恩资本合伙人。香港中文大学兼任教授。具25年中、港、美地区高科技行业及风险投资的经验。",
      image: "/team/劳维信_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Dr. Lao Weixin is a distinguished investment partner at Dianliang Borun Capital and serves as an adjunct professor at Hong Kong Chinese University. With 25 years of extensive experience in high-tech industries and risk investment across China, Hong Kong, and the United States, he brings invaluable expertise in cross-border investments and technology sector analysis."
          : "劳维信博士是点亮伯恩资本的杰出投资合伙人，同时担任香港中文大学兼任教授。他在中国、香港和美国地区拥有25年高科技行业及风险投资的丰富经验，在跨境投资和技术行业分析方面具有宝贵的专业知识。",
      hasModal: true,
    },
    {
      name: "Dongmin Chen",
      title: language === "en" ? "Dr./Professor - Thousand Talents Program Scholar" : "博士/教授",
      description:
        language === "en"
          ? "National 'Thousand Talents Program' scholar, former professor at Peking University's School of International Studies, former deputy director of Science and Technology Development Department"
          : '国家"千人计划"学者，北京大学前沿交叉学科研究院教授、科技开发部部长、产业技术研究院院长。',
      image: "/team/陈东敏_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Dr. Chen Dongmin is a distinguished national 'Thousand Talents Program' scholar with extensive experience in academia and technology development. He previously served as a professor at Peking University's School of International Studies and held key leadership positions including deputy director of the Science and Technology Development Department and director of the Industrial Technology Research Institute. His expertise spans international collaboration, technology transfer, and strategic research development."
          : '陈东敏博士是杰出的国家"千人计划"学者，在学术界和技术发展方面拥有丰富经验。他曾担任北京大学前沿交叉学科研究院教授，并担任科技开发部部长、产业技术研究院院长等重要领导职务。他的专业领域涵盖国际合作、技术转移和战略研究发展。',
      hasModal: true,
    },
    {
      name: "Wencheng Li",
      title: language === "en" ? "PhD/Founding Partner" : "博士/创始合伙人",
      description:
        language === "en"
          ? "PhD in Engineering from East China University of Science and Technology, adjunct professor at Hohai University Business School, founding partner of Born Capital with rich experience in early-stage technology investments"
          : "在华东理工大学获得工科博士学位，同时也是清华大学五道口金融学院和浙江大学管理学院的校友。目前在河海大学商学院担任兼职教授。",
      image: "/team/李文成_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Dr. Li Wencheng obtained his PhD in Engineering from East China University of Science and Technology, and is also an alumnus of Tsinghua University PBC School of Finance and Zhejiang University School of Management. He currently serves as an adjunct professor at Hohai University Business School. As a founding partner of Born Capital, he has participated in the formation and management of all funds under the company, has rich experience in early-stage investment in technology projects, and has been responsible for investments in Sandi Jianke, Yixun Optoelectronics, Token Cloud, Bubi Blockchain, Bose Quantum, and Zhongtan Guoke. He has also published multiple papers in international journals, participated in various domestic and international academic cooperation projects, serves as an innovation and entrepreneurship mentor at various universities, and was selected as one of the '35U35 Young Investors' by the Young Investor Club in 2021."
          : "李文成博士在华东理工大学获得工科博士学位，同时也是清华大学五道口金融学院和浙江大学管理学院的校友。目前在河海大学商学院担任兼职教授。作为伯恩资本的创始合伙人，参与组建及管理过旗下所有基金，在科技类项目的早期投资中有丰富经验，负责过三迪建科、易迅光电、令牌云、布比区块链、玻色量子、中碳国科等项目的投资。此外，李文成博士还在国际期刊上发表过多篇论文，参与过诸多国内外合作学术项目，并在多家高校担任创新创业导师，于2021年获评青年投资家俱乐部的'35U35青年投资家'。",
      hasModal: true,
    },
    {
      name: "Chi Zhang",
      title: language === "en" ? "Dr./Dual Carbon Expert" : "博士/双碳专家",
      description:
        language === "en"
          ? "Visiting scholar at University of Marburg, Germany. Nanjing's first batch '321' entrepreneurial talent, dual doctor from Jiangsu Province, expert in intelligent manufacturing and environmental protection"
          : '德国马普学会访问学者，南京市首批"321"创业人才企业入选者，江苏省双创博士。负责过多套大型化工/医药/生物环保设备的全流程开发及产业化工作。关注智能制造、节能环保以及双碳领域。',
      image: "/team/张弛_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Dr. Zhang Chi is a distinguished visiting scholar at the University of Marburg in Germany and was selected as one of Nanjing's first batch of '321' entrepreneurial talents. As a dual doctor from Jiangsu Province, he has extensive experience in the full-process development and industrialization of multiple sets of large-scale chemical, pharmaceutical, and biological environmental protection equipment. His expertise focuses on intelligent manufacturing, energy conservation and environmental protection, and dual-carbon (carbon neutrality) technologies. Dr. Zhang Chi brings valuable technical knowledge and industrial experience to investment decisions in the environmental and manufacturing sectors."
          : '张弛博士是德国马普学会的杰出访问学者，入选南京市首批"321"创业人才企业。作为江苏省双创博士，他在多套大型化工/医药/生物环保设备的全流程开发及产业化工作方面拥有丰富经验。他的专业领域专注于智能制造、节能环保以及双碳领域。张弛博士为环保和制造业领域的投资决策带来了宝贵的技术知识和产业经验。',
      hasModal: true,
    },
    {
      name: content.teamMember5,
      title: content.teamMember5Title,
      description: content.teamMember5Desc,
      image: "/placeholder-user.jpg",
    },
    {
      name: content.teamMember6,
      title: content.teamMember6Title,
      description: content.teamMember6Desc,
      image: "/placeholder-user.jpg",
    },
  ]

  // Filter team members that have modals
  const modalEnabledMembers = teamMembers.filter((member) => member.hasModal)

  const funds = [
    {
      number: "01",
      title: content.motherFund,
      description: content.motherFundDesc,
      color: "bg-gradient-to-br from-amber-400 to-amber-600",
      textColor: "text-white",
    },
    {
      number: "02",
      title: content.directInvestment,
      description: content.directInvestmentDesc,
      color: "bg-gradient-to-br from-amber-400 to-amber-600",
      textColor: "text-white",
    },
    {
      number: "03",
      title: content.specialFund,
      description: content.specialFundDesc,
      color: "bg-gradient-to-br from-amber-400 to-amber-600",
      textColor: "text-white",
    },
    {
      number: "04",
      title: content.moreFunds,
      description: content.moreFundsDesc,
      color: "bg-gradient-to-br from-amber-400 to-amber-600",
      textColor: "text-white",
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleViewDetails = (index: number) => {
    if (index === 0) {
      router.push("/mother-fund")
    }
  }

  const handleMemberClick = (memberIndex: number) => {
    // Find the index in modalEnabledMembers array
    const modalIndex = modalEnabledMembers.findIndex((member) => teamMembers[memberIndex] === member)
    if (modalIndex !== -1) {
      setSelectedMemberIndex(modalIndex)
      setIsModalOpen(true)
    }
  }

  const handlePreviousMember = () => {
    if (selectedMemberIndex !== null) {
      const newIndex = selectedMemberIndex === 0 ? modalEnabledMembers.length - 1 : selectedMemberIndex - 1
      setSelectedMemberIndex(newIndex)
    }
  }

  const handleNextMember = () => {
    if (selectedMemberIndex !== null) {
      const newIndex = selectedMemberIndex === modalEnabledMembers.length - 1 ? 0 : selectedMemberIndex + 1
      setSelectedMemberIndex(newIndex)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMemberIndex(null)
  }

  const currentMember = selectedMemberIndex !== null ? modalEnabledMembers[selectedMemberIndex] : null

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-100">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/born-logo.png" alt="BORN International Logo" width={180} height={60} className="h-12 w-auto" />
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 text-slate-700 hover:text-slate-900">
                <Globe className="w-4 h-4" />
                <span className="text-sm">
                  {currentLanguage?.flag} {currentLanguage?.name}
                </span>
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
            onClick={() => router.push("/")}
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
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-210Z92040591c-AQL5YitVBwqKZKgTdSidtYiJsPDuyf.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-light text-white mb-4">{content.portfolioTitle}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">{content.portfolioDescription}</p>
          </div>
        </div>
      </section>

      {/* Investment Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-team.jpg-FFtzNndblQESuAOG6YmZfud8aifb3C.jpeg"
            alt="Team background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">{content.investmentTeam}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{content.teamDescription}</p>
          </div>

          {/* Team Members Grid - 2 rows of 4 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {teamMembers.slice(0, 4).map((member, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-shadow ${member.hasModal ? "cursor-pointer" : ""}`}
                onClick={() => member.hasModal && handleMemberClick(index)}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative w-40 h-40 mx-auto mb-6">
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.slice(4, 8).map((member, index) => (
              <Card
                key={index + 4}
                className={`border-0 shadow-lg hover:shadow-xl transition-shadow ${member.hasModal ? "cursor-pointer" : ""}`}
                onClick={() => member.hasModal && handleMemberClick(index + 4)}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative w-40 h-40 mx-auto mb-6">
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

      {/* Custom Team Member Modal */}
      {isModalOpen && currentMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 text-slate-400 hover:text-slate-600 bg-white rounded-full p-2 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePreviousMember}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-slate-600 hover:text-slate-800 rounded-full p-3 shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextMember}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-slate-600 hover:text-slate-800 rounded-full p-3 shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Image */}
              <div className="lg:w-1/2 p-8">
                <div className="relative w-full h-96 lg:h-[600px]">
                  <Image
                    src={currentMember.image || "/placeholder.svg"}
                    alt={currentMember.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="lg:w-1/2 p-8 space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-3">{currentMember.name}</h2>
                  <p className="text-xl text-blue-600 font-medium mb-6">{currentMember.title}</p>
                </div>
                <div className="text-slate-700 leading-relaxed text-lg">
                  <p>{currentMember.fullBio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fund Structure Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-project-1.jpg-5pKSekMyOcL9dgqTYiKvt87dgPjdfE.jpeg"
            alt="Portfolio background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-4">
              {language === "en" ? "Portfolio Companies" : "投资组合公司"}
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Discover the innovative companies we have invested in across various sectors and stages"
                : "探索我们在各个行业和阶段投资的创新公司"}
            </p>
          </div>

          {/* Additional Portfolio Companies List */}
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                name: language === "en" ? "Zhongkang Dacheng" : "中康大成",
                nameEn: "Zhongkang Dacheng",
                nameCn: "中康大成",
                sector: language === "en" ? "Urban Tobacco Control" : "城市控烟",
                description:
                  language === "en"
                    ? "China's leading overall solution provider for urban tobacco control with comprehensive services"
                    : "中国领先的城市控烟整体解决方案服务商，提供全面的控烟解决方案",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E5%BA%B7%E5%A4%A7%E6%88%90.jpg-B6SwB3EgLXUU2lItdgIprbg0mVwUO9.jpeg",
                logoStyle: "object-contain",
              },
              {
                name: language === "en" ? "Carbon Zero Technology" : "中碳国科",
                nameEn: "Carbon Zero Technology",
                nameCn: "中碳国科",
                sector: language === "en" ? "Green Technology" : "绿色科技",
                description:
                  language === "en"
                    ? "Leading carbon neutrality and green technology solutions for zero-emission future"
                    : '中碳国科创始团队深耕绿色碳减排产业十年，一直秉持着"零碳价值..."',
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sC3u5OD0TOQgDsIzetbrVNGHxsJdVH.png",
                logoStyle: "object-contain",
              },
              {
                name: language === "en" ? "Yixun Optoelectronics" : "易迅光电",
                nameEn: "Yixun Optoelectronics",
                nameCn: "易迅光电",
                sector: language === "en" ? "Semiconductor" : "半导体",
                description:
                  language === "en"
                    ? "Specialized in chip design and manufacturing with focus on optoelectronic solutions"
                    : "主要从事芯片式防护马达的设计及制造。易迅光电是国内唯一一拥有自...",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%98%93%E8%BF%85%E5%85%89%E7%94%B5.jpg-CBEgNrvhttps://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%98%93%E8%BF%85%E5%85%89%E7%94%B5.jpg-CBEgNrvuvphRtTR4gUWvNhbWZvu7u0.jpeg",
                logoStyle: "object-contain",
              },
              {
                name: language === "en" ? "EnergyCoo Technology" : "亿凌捷科技",
                nameEn: "EnergyCoo Technology",
                nameCn: "亿凌捷科技",
                sector: language === "en" ? "Energy Technology" : "能源科技",
                description:
                  language === "en"
                    ? "Advanced energy technology solutions and smart energy management systems"
                    : "先进的能源技术解决方案和智能能源管理系统",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%BF%E5%87%8C%E6%8D%B7%E7%A7%91%E6%8A%80.jpg-DimJNWrxUUwrRJYg9z2CZaQT04MigZ.jpeg",
                logoStyle: "object-contain",
              },
              {
                name: language === "en" ? "Kunwei Technology" : "坤维科技",
                nameEn: "Kunwei Technology",
                nameCn: "坤维科技",
                sector: language === "en" ? "Technology Solutions" : "技术解决方案",
                description:
                  language === "en"
                    ? "Innovative technology solutions provider focusing on digital transformation"
                    : "创新技术解决方案提供商，专注于数字化转型",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9D%A4%E7%BB%B4%E7%A7%91%E6%8A%80.jpg-POgKz4qkcQhuC71piNfzSlHQb4ta9n.jpeg",
                logoStyle: "object-contain",
              },
              {
                name: language === "en" ? "EAPII Technology" : "易瞳科技",
                nameEn: "EAPII Technology",
                nameCn: "易瞳科技",
                sector: language === "en" ? "Computer Vision" : "计算机视觉",
                description:
                  language === "en"
                    ? "Advanced computer vision and AI technology solutions"
                    : "先进的计算机视觉和人工智能技术解决方案",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%98%93%E7%9E%B3%E7%A7%91%E6%8A%80.jpg-eewtzrklwWbebI9g7zU2h6jjfpNxIV.jpeg",
                logoStyle: "object-contain",
              },
              {
                name: language === "en" ? "Bubi Blockchain" : "布比区块链",
                nameEn: "Bubi Blockchain",
                nameCn: "布比区块链",
                sector: language === "en" ? "Blockchain Technology" : "区块链技术",
                description:
                  language === "en"
                    ? "Leading blockchain technology platform and solutions provider"
                    : "领先的区块链技术平台和解决方案提供商",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B8%83%E6%AF%94%E5%8C%BA%E5%9D%97%E9%93%BE-stMcd6T9tPwvoyOxK0DyTM6nxUIYk5.png",
                logoStyle: "object-contain",
              },
              {
                name: language === "en" ? "Huazhi Intelligence" : "华制智能",
                nameEn: "Huazhi Intelligence",
                nameCn: "华制智能",
                sector: language === "en" ? "Smart Manufacturing" : "智能制造",
                description:
                  language === "en"
                    ? "Intelligent manufacturing solutions and industrial automation systems"
                    : "智能制造解决方案和工业自动化系统",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%8E%E5%88%B6%E6%99%BA%E8%83%BD.jpg-ovvYBRmt9ZMDy6LbZ3Auxny9lAgdT9.jpeg",
                logoStyle: "object-contain",
              },
              {
                name: language === "en" ? "Token Cloud" : "令牌云",
                nameEn: "Token Cloud",
                nameCn: "令牌云",
                sector: language === "en" ? "Digital Identity" : "数字身份",
                description:
                  language === "en"
                    ? "Digital identity service provider offering secure authentication solutions"
                    : "令牌云的愿景是成为身份服务领域的领先科技公司，致力于用户的身...",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BB%A4%E7%89%8C%E4%BA%91.jpg-eBaIhpSKhDHWgOY5xt44bb6DUOxS6y.jpeg",
                logoStyle: "object-contain",
              },
              {
                name: language === "en" ? "CD Digital Analog" : "数模码科技",
                nameEn: "CD Digital Analog",
                nameCn: "数模码科技",
                sector: language === "en" ? "Automotive Technology" : "汽车科技",
                description:
                  language === "en"
                    ? "Digital analog technology solutions for automotive industry"
                    : "面向汽车行业的数字模拟技术解决方案",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%95%B0%E6%A8%A1%E7%A0%81%E7%A7%91%E6%8A%80.jpg-3IKeaymcyoqqH3TY3e1qmnygsqw8jl.jpeg",
                logoStyle: "object-contain",
              },
              {
                name: language === "en" ? "EasyMFG Technology" : "易制科技",
                nameEn: "EasyMFG Technology",
                nameCn: "易制科技",
                sector: language === "en" ? "Manufacturing Technology" : "制造技术",
                description:
                  language === "en"
                    ? "Advanced manufacturing technology and production optimization solutions"
                    : "先进制造技术和生产优化解决方案",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%98%93%E5%88%B6%E7%A7%91%E6%8A%80.jpg-lbHXWRdLQjXmRheObdanQhv5pJSrew.jpeg",
                logoStyle: "object-contain",
              },
              {
                name: language === "en" ? "Sandi Jianke" : "三迪建科",
                nameEn: "Sandi Jianke",
                nameCn: "三迪建科",
                sector: language === "en" ? "Construction Tech" : "建筑科技",
                description:
                  language === "en"
                    ? "Smart construction and building technology solutions for modern infrastructure"
                    : "智能建筑和建造技术解决方案，专注于现代基础设施建设",
                logo: "/placeholder-logo.png",
                logoStyle: "object-contain",
              },
            ].map((company, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] bg-white"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full">
                      <div className="relative w-48 h-48 sm:w-96 sm:h-96 flex-shrink-0">
                        <Image
                          src={company.logo || "/placeholder.svg"}
                          alt={company.name}
                          fill
                          className={company.logoStyle || "object-contain"}
                        />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">{company.name}</h3>
                        <p className="text-blue-600 font-medium mb-2">{company.sector}</p>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{company.description}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-700 text-sm sm:text-base">
                        {language === "en" ? "View Details" : "查看详情"}
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
