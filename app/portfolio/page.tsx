"use client"
import { useState, useEffect } from "react"
import { ResponsibleInvestmentBlurb } from "@/components/responsible-investment-blurb"
import { ViSecondaryShell } from "@/components/vi-secondary-shell"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { getPortfolioCompanies } from "@/lib/portfolio-companies"

export default function PortfolioPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"en" | "ru">("en")
  const [selectedMemberIndex, setSelectedMemberIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
  ]

  const languageContent = {
    en: {
      portfolioTitle: "Investment",
      portfolioDescription:
        "We invest early in Chinese hard-tech companies, then help them win customers, partners, and local operating capacity in Russia, the CIS, and adjacent markets.",
      backToHome: "Back to Home",
      investmentTeam: "Investment Team",
      teamDescription: "Our experienced professionals bring deep expertise across sectors and regions.",
      fundStructure: "Fund Structure",
      fundDescription:
        "Capital structures built to underwrite Chinese hard tech at home and support commercialization across Russia, the CIS, and selected overseas corridors.",
      viewDetails: "View details→",
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
        "Fund-of-funds exposure across the managers, stages, and industrial networks we use to move portfolio companies from domestic traction to overseas execution.",
      directInvestment: "Direct Investment",
      directInvestmentDesc: "Direct positions in AI, robotics, blockchain, quantum, and industrial tech where cross-border rollout is part of the underwriting case.",
      specialFund: "Special Fund",
      specialFundDesc: "Thematic vehicles for energy transition, industrial localization, and policy-linked cross-border projects.",
      moreFunds: "More Funds",
      moreFundsDesc: "Additional structures for co-investment, local joint ventures, and later-stage overseas rollout.",
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
      portfolioTitle: "Инвестиции",
      portfolioDescription:
        "Мы инвестируем в китайские hard-tech компании на ранней стадии, а затем помогаем им получать клиентов, партнеров и локальную операционную базу в России, СНГ и соседних рынках.",
      backToHome: "Вернуться на главную",
      investmentTeam: "Инвестиционная команда",
      teamDescription: "Наши опытные специалисты обладают глубокой экспертизой в различных секторах и регионах.",
      fundStructure: "Структура фондов",
      fundDescription:
        "Структуры капитала, созданные для инвестиций в китайский hard tech внутри страны и поддержки коммерциализации в России, СНГ и выбранных зарубежных коридорах.",
      viewDetails: "Подробнее→",
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
        "Фонд фондов, который дает доступ к управляющим, стадиям и промышленным сетям, помогающим переводить портфельные компании от локального traction к зарубежному исполнению.",
      directInvestment: "Прямые инвестиции",
      directInvestmentDesc: "Прямые инвестиции в AI, робототехнику, блокчейн, квантовые и промышленные технологии, где трансграничный rollout входит в сам инвестиционный тезис.",
      specialFund: "Специальный фонд",
      specialFundDesc:
        "Тематические фонды для энергетического перехода, промышленной локализации и проектов, завязанных на трансграничную политику.",
      moreFunds: "Больше фондов",
      moreFundsDesc: "Дополнительные структуры для ко-инвестиций, локальных СП и более позднего зарубежного масштабирования.",
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

  const content = languageContent[language]
  const companies = getPortfolioCompanies(language)


  const teamMembers = [
    {
      name: "Xueshu Tang",
      title: language === "en" ? "Chairman of Qingdao HYLIR Investment Group" : "Председатель Qingdao HYLIR Investment Group",
      description:
        language === "en"
          ? "Chairman of Qingdao HYLIR Investment Group and HYLIR (Chengdu) Headquarters Base Development Co., Ltd. Vice President of Sichuan Provincial Enterprise Confederation and Entrepreneurs Association."
          : "Председатель Qingdao HYLIR Investment Group и HYLIR (Chengdu) Headquarters Base Development Co., Ltd. Вице-президент Федерации предприятий и Ассоциации предпринимателей провинции Сычуань.",
              image: "/investment-team/唐学书_profile.jpg",
      fullBio:
        language === "en"
          ? "Tang Xueshu, female, Han nationality, was born in September 1952. She is a member of the Communist Party of China with a bachelor's degree. She currently serves as the Chairman of Qingdao HYLIR Investment Group and HYLIR (Chengdu) Headquarters Base Development Co., Ltd. She was the first Director of the Low-Power Wireless Communication Committee of China Communications Industry Association. Now, she also holds the positions of Vice President of Sichuan Provincial Enterprise Confederation and Entrepreneurs Association, Vice President of Sichuan Provincial Rural Development Federation, Standing Director of China Enterprise Culture Research Association, and Vice President of Qingdao Economic Association."
          : "Тан Сюэшу возглавляет Qingdao HYLIR Investment Group и HYLIR (Chengdu) Headquarters Base Development Co., Ltd. Ранее она была первым директором Комитета по маломощной беспроводной связи Китайской ассоциации индустрии связи. Также занимает руководящие должности в предпринимательских, сельскохозяйственных и экономических ассоциациях провинции Сычуань и города Циндао.",
      hasModal: true,
    },
    {
      name: "Chong Li",
      title: language === "en" ? "Founder of Dianliang Capital" : "Основатель Dianliang Capital",
      description:
        language === "en"
          ? "Technology entrepreneur and renowned investor in the tech innovation sector. Vice President of the Finance Association, Tsinghua University."
          : "Технологический предприниматель и известный инвестор в инновации. Вице-президент Финансовой ассоциации Школы экономики и менеджмента Университета Цинхуа.",
              image: "/investment-team/李翀_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Founder of Dianliang Capital | Technology Entrepreneur | Expert in Technological Innovation and Applications | Renowned Investor in the Tech Innovation Sector\n\nVice President of the Finance Association, School of Economics and Management, Tsinghua University.\n\nWith long-term experience in technology-focused investments, he excels in forward-looking research in hard technology, optoelectronics, data technologies, robotics, and artificial intelligence. Known for sharp intuition on emerging technologies and business models, he combines industry trends with cutting-edge innovations to identify disruptive investment opportunities.\n\nEntrepreneurial Experience:\n• 1994: Co-founded Henan Huihuang Technology Co., Ltd., which went public in September 2009 (Stock Code: 002296.SZ).\n• 2009–2011: Co-invested and co-founded Shanghai PPLive Media (PPTV), serving as Executive Director. By the end of 2013, PPTV was acquired by Suning and Lenovo Hony Capital for USD 480 million, generating a 1,000x return on investment.\n\nMajor Investment Achievements:\n• Jedee Technology – Angel investor in a smart in-vehicle cockpit developer and service provider. Today, Jedee has become the largest in-car software provider and car owner service platform in China's automotive industry.\n• Bubi Blockchain – Angel investor in one of China's earliest blockchain technology companies, now a core technology provider for the national blockchain infrastructure 'BSN Xinghuo Chain Network.'\n• Lingou Microelectronics – Angel investor in a motion control chip and solutions provider. In July 2022, Lingou was acquired by the listed company Jingfeng Mingyuan at a valuation of RMB 580 million.\n• Boton Optoelectronics – Angel investor in China's first domestically commercialized RF ion source company. Its ion source core equipment now plays an irreplaceable role in national communications, satellites, semiconductors, and superconductors.\n• Hongjing Optics – Angel investor in an optical lens and solutions provider. Today, Hongjing has become a global leader in specialized optoelectronic imaging and video solutions, and successfully went public on ChiNext on March 18, 2025.\n• Junduo Robotics – Angel investor in a dexterous robotic hand company. Now the leading domestic enterprise in electric grippers, it is disrupting traditional mechanical grippers and overtaking incumbents in robotic end-effector solutions.\n• Kunwei Force Sensing – Angel investor in a six-dimensional force sensor provider. Today, Kunwei is the No.1 company by market share in China's six-dimensional force sensing sector.\n• Boson Quantum – Angel investor in China's first coherent optical quantum computing company. In April 2024, the company released the world's leading 550-qubit coherent optical quantum computer, the first commercialized quantum computer in China. It delivers computing power 1,000x higher than traditional computers for specialized problems and has broad applications in AI, communications, finance, and pharmaceuticals."
          : "Основатель Dianliang Capital | Технологический предприниматель | Эксперт по технологическим инновациям | Инвестор\n\nВице-президент Финансовой ассоциации Школы экономики и менеджмента Университета Цинхуа.\n\nОбладает многолетним опытом инвестиций в hard tech, оптоэлектронику, технологии данных, робототехнику и искусственный интеллект. Среди заметных проектов — Huihuang Technology, PPTV, Jedee Technology, Bubi Blockchain, Lingou Microelectronics, Boton Optoelectronics, Hongjing Optics, Junduo Robotics, Kunwei Force Sensing и Boson Quantum.",
      hasModal: true,
    },
    {
      name: "Feng Guo",
      title: language === "en" ? "Guo Feng, Ph.D. in Engineering | Partner at Dianliang Capital" : "Доктор технических наук Го Фэн | Партнер Dianliang Capital",
      description:
        language === "en"
          ? "Former Professor at Xidian University, Vice Dean of the School of Telecommunications Engineering, and Director of the State Key Laboratory of Integrated Services Networks"
          : "Бывший профессор Сианьского университета электронной науки и технологий, заместитель декана Школы телекоммуникационной инженерии и директор государственной ключевой лаборатории интегрированных сетей.",
              image: "/investment-team/郭峰_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Guo Feng, Ph.D. in Engineering | Partner at Dianliang Capital\n\nFormer Professor at Xidian University, Vice Dean of the School of Telecommunications Engineering, and Director of the State Key Laboratory of Integrated Services Networks. Previously held senior executive positions at NTT (Japan), Cisco (USA), and China Electronics Corporation (CEC).\n\nIn recent years, he has focused on early-stage investments in AI and robotics, IoT and smart manufacturing, semiconductors, blockchain and quantum computing, as well as new energy and digital assets. He also serves as an entrepreneurial mentor at several leading domestic innovation and investment institutions, including the Peking University Industry Research Institute, Tsinghua Tongfang Incubator, and the International University Innovation Alliance.\n\nDr. Guo is recognized as a pioneer and researcher in early-stage internet, WiFi and optical networks, quantum computing, blockchain, and emerging digital industries in China."
          : "Доктор Го Фэн — партнер Dianliang Capital. Ранее он был профессором и заместителем декана Сианьского университета электронной науки и технологий, руководил государственной ключевой лабораторией и занимал руководящие должности в NTT, Cisco и China Electronics Corporation. Сегодня он специализируется на ранних инвестициях в ИИ, робототехнику, IoT, интеллектуальное производство, полупроводники, блокчейн, квантовые вычисления и новую энергетику.",
      hasModal: true,
    },
    {
      name: "Dongmin Chen",
      title: language === "en" ? "Dr./Professor - Thousand Talents Program Scholar" : "Доктор / профессор — участник программы «Тысяча талантов»",
      description:
        language === "en"
          ? "National 'Thousand Talents Program' scholar, former professor at Peking University's School of International Studies, former deputy director of Science and Technology Development Department"
          : "Участник национальной программы «Тысяча талантов», бывший профессор Пекинского университета и руководитель подразделений технологического развития и промышленных исследований.",
              image: "/investment-team/陈东敏_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Dr. Chen Dongmin is a distinguished national 'Thousand Talents Program' scholar with extensive experience in academia and technology development. He previously served as a professor at Peking University's School of International Studies and held key leadership positions including deputy director of the Science and Technology Development Department and director of the Industrial Technology Research Institute. His expertise spans international collaboration, technology transfer, and strategic research development."
          : "Доктор Чэнь Дунмин — участник национальной программы «Тысяча талантов» с большим опытом в академической и технологической сферах. В Пекинском университете он занимал профессорские и руководящие должности. Его экспертиза охватывает международное сотрудничество, трансфер технологий и стратегические исследования.",
      hasModal: true,
    },
    {
      name: "Hao Chu",
      title: language === "en" ? "Founding Partner" : "Партнер-основатель",
      description:
        language === "en"
          ? "Founding Partner of Boen Capital and Dianke Boen Partners, with extensive investment experience in Internet, education, consumer upgrades, and IoT sectors"
          : "Партнер-основатель Born Capital и партнер Dianke Born с большим опытом инвестиций в интернет, образование, потребительские технологии и IoT.",
              image: "/investment-team/褚浩_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Founding Partner of Boen Capital and Dianke Boen Partners with extensive investment experience across multiple sectors including Internet, education, consumer upgrades, and IoT. Has a proven track record in identifying and nurturing high-growth technology companies."
          : "Партнер-основатель Born Capital и партнер Dianke Born. Обладает опытом инвестиций в интернет, образование, потребительские технологии и IoT, а также успешным опытом поиска и развития быстрорастущих технологических компаний.",
      hasModal: true,
    },
    {
      name: "Wencheng Li",
      title: language === "en" ? "PhD/Founding Partner" : "PhD / Партнер-основатель",
      description:
        language === "en"
          ? "International high-tech investor and Founding Partner of Born Capital. PhD in Chemical Engineering from East China University of Science and Technology. Adjunct Professor at HoHai University."
          : "Международный инвестор в высокие технологии и партнер-основатель Born Capital. Доктор химической инженерии Восточно-Китайского университета науки и технологий, приглашенный профессор Университета Хохай.",
              image: "/investment-team/李文成_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Dr. LI Wencheng is an international high-tech investor. He holds a Ph.D. in Chemical Engineering from East China University of Science and Technology. He is also an alumnus of Tsinghua University's PBCSF and Zhejiang University's School of Management. Dr. Li now serves as an Adjunct Professor at HoHai University. Dr. Li is the Founding Partner of Born Capital, where he has invested in over 100 high-tech startups, with a focus on areas such as quantum computing, artificial intelligence, and new energy. He is also the founder of Born International, which helps Chinese companies enter Russia, the CIS, the Middle East, and Southeast Asia through local partners, policy access, and execution teams."
          : "Доктор Ли Вэньчэн — международный инвестор в высокие технологии. Он получил степень PhD по химической инженерии в Восточно-Китайском университете науки и технологий, обучался в Университете Цинхуа и Чжэцзянском университете и является приглашенным профессором Университета Хохай. Как партнер-основатель Born Capital он инвестировал более чем в 100 технологических стартапов в сферах квантовых вычислений, ИИ и новой энергетики. Он также основал Born International для выхода китайских компаний на рынки России, СНГ, Ближнего Востока и Юго-Восточной Азии.",
      hasModal: true,
    },
    {
      name: "Weixin Lao",
      title: language === "en" ? "Dr./Professor - Investment Partner" : "Доктор / профессор — инвестиционный партнер",
      description:
        language === "en"
          ? "Partner at Dianliang Borun Capital and Professor at Hong Kong Chinese University, with 25 years of experience in high-tech industries and risk investment"
          : "Партнер Dianliang Born Capital и приглашенный профессор Китайского университета Гонконга с 25-летним опытом в высоких технологиях и венчурных инвестициях в Китае, Гонконге и США.",
              image: "/investment-team/劳维信_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Dr. Lao Weixin is a distinguished investment partner at Dianliang Borun Capital and serves as an adjunct professor at Hong Kong Chinese University. With 25 years of extensive experience in high-tech industries and risk investment across China, Hong Kong, and the United States, he brings invaluable expertise in cross-border investments and technology sector analysis."
          : "Доктор Лао Вэйсинь — инвестиционный партнер Dianliang Born Capital и приглашенный профессор Китайского университета Гонконга. Его 25-летний опыт в высоких технологиях и венчурных инвестициях в Китае, Гонконге и США включает трансграничные сделки и анализ технологических отраслей.",
      hasModal: true,
    },
    {
      name: language === "en" ? "More Team Members" : "Другие члены команды",
      title: language === "en" ? "View All" : "Посмотреть всех",
      description:
        language === "en"
          ? "Discover more talented professionals in our investment team"
          : "Познакомьтесь с другими специалистами нашей инвестиционной команды",
      image: "/placeholder-user.jpg",
      isMoreButton: true,
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  const handleMemberClick = (memberIndex: number) => {
    const member = teamMembers[memberIndex]

    // Handle "More" button click
    if (member.isMoreButton) {
      // You can add navigation to a full team page or show more members
      console.log("Show more team members")
      return
    }

    // Find the index in modalEnabledMembers array for regular members
    const modalIndex = modalEnabledMembers.findIndex((modalMember) => teamMembers[memberIndex] === modalMember)
    if (modalIndex !== -1) {
      setSelectedMemberIndex(modalIndex)
      setIsModalOpen(true)
    }
  }

  const handlePreviousMember = () => {
    if (selectedMemberIndex !== null) {
      const newIndex = selectedMemberIndex === 0 ? modalEnabledMembers.length - 1 : selectedMemberIndex - 1
      setSelectedMemberIndex(newIndex)
      
      // Scroll to top of modal content when switching members
      setTimeout(() => {
        const modalContent = document.querySelector('.modal-content-scrollable')
        if (modalContent) {
          modalContent.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const handleNextMember = () => {
    if (selectedMemberIndex !== null) {
      const newIndex = selectedMemberIndex === modalEnabledMembers.length - 1 ? 0 : selectedMemberIndex + 1
      setSelectedMemberIndex(newIndex)
      
      // Scroll to top of modal content when switching members
      setTimeout(() => {
        const modalContent = document.querySelector('.modal-content-scrollable')
        if (modalContent) {
          modalContent.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMemberIndex(null)
  }

  const currentMember = selectedMemberIndex !== null ? modalEnabledMembers[selectedMemberIndex] : null

  const langToggle = (
    <div className="inline-flex rounded border border-slate-700/90 overflow-hidden">
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => setLanguage(lang.code as "en" | "ru")}
          className={`px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide ${
            language === lang.code ? "bg-amber-600 text-white" : "text-slate-500 hover:text-slate-200 bg-slate-900/50"
          }`}
        >
          {lang.code}
        </button>
      ))}
    </div>
  )

  return (
    <ViSecondaryShell
      sidebarKicker="Investment"
      pageTitle={content.portfolioTitle}
      pageSubtitle={content.portfolioDescription}
      headerExtra={langToggle}
      mainTone="dark"
    >
      <style jsx global>{`
        
      `}</style>

      {/* Portfolio Companies — single flat card surface (no stacked glass / blur layers) */}
      <section id="portfolio-companies" className="relative scroll-mt-24 border-b border-slate-800/80 py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(245,158,11,0.045),transparent_50%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="heading-serif mb-4 text-3xl font-light tracking-tight text-white/95 sm:text-4xl lg:text-5xl">
              {language === "en" ? "Portfolio Companies" : "Портфельные компании"}
            </h2>
          </div>

          {/* Featured companies — big cards with return multiples */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {companies.filter(c => c.featured).map((company) => (
              <button
                key={company.slug}
                type="button"
                onClick={() => router.push(`/portfolio/${company.slug}`)}
                className="group rounded-2xl border border-slate-600/50 bg-slate-800/95 p-6 text-left shadow-md shadow-black/25 transition hover:-translate-y-1 hover:border-slate-500/60 hover:bg-slate-800 hover:shadow-lg"
              >
                <div className="relative mb-4 h-16 w-full">
                  <Image src={company.logo} alt={company.name} fill className={company.logoStyle || "object-contain object-left"} />
                </div>
                {company.returnMultiple && (
                  <p className="mb-2 text-2xl font-bold text-amber-400/95">Return Multiple: {company.returnMultiple}</p>
                )}
                <h3 className="mb-2 text-lg font-semibold text-white/95">{company.name}</h3>
                <p className="mb-4 line-clamp-2 text-sm text-slate-400">{company.description}</p>
                <span className="text-sm font-medium text-slate-200 transition-colors group-hover:text-amber-400">
                  {content.viewDetails}
                </span>
              </button>
            ))}
          </div>

          {/* Other companies — small cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {companies.filter(c => !c.featured).map((company) => (
              <button
                key={company.slug}
                type="button"
                onClick={() => router.push(`/portfolio/${company.slug}`)}
                className="group rounded-xl border border-slate-600/50 bg-slate-800/95 px-4 py-4 text-left shadow-md shadow-black/20 transition hover:-translate-y-0.5 hover:border-slate-500/60 hover:bg-slate-800 hover:shadow-md"
              >
                <div className="relative mb-3 h-12 w-full">
                  <Image src={company.logo} alt={company.name} fill className={company.logoStyle || "object-contain object-left"} />
                </div>
                <p className="line-clamp-1 text-sm font-medium text-white/95">{company.name}</p>
                <span className="mt-2 block text-xs font-medium text-slate-500 transition-colors group-hover:text-amber-400">
                  {content.viewDetails}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Our Edge */}
      <section id="our-edge" className="relative scroll-mt-24 overflow-hidden border-y border-slate-800/80 py-20">
        <div className="absolute inset-0 bg-slate-950/35" aria-hidden />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="heading-serif mb-12 text-center text-3xl font-light text-white/95 sm:text-4xl">
            {language === "en" ? "Our Edge" : "Наши преимущества"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: language === "en" ? "Team & Track Record" : "Команда и результаты",
                body:
                  language === "en"
                    ? "Decade-long experience in early-stage technology investing, with a proven track record of backing and scaling category-defining companies."
                    : "Многолетний опыт ранних технологических инвестиций и подтвержденная способность поддерживать компании, формирующие новые категории.",
                href: "/portfolio#investment-team-section",
                cta: language === "en" ? "View more details→" : "Подробнее→",
              },
              {
                title: language === "en" ? "AI-Driven Investment" : "Инвестиции на основе ИИ",
                body:
                  language === "en"
                    ? "Deep focus on AI, powered by a proprietary, end-to-end AI investment management system that enhances speed, precision, and scalability."
                    : "Глубокая специализация на ИИ и собственная сквозная система управления инвестициями повышают скорость, точность и масштабируемость.",
                href: "/ai-company",
                cta: language === "en" ? "View more details→" : "Подробнее→",
              },
              {
                title: language === "en" ? "Investment + Global Expansion" : "Инвестиции и глобальная экспансия",
                body:
                  language === "en"
                    ? "From capital to market entry, we enable companies to scale into Russia and beyond—unlocking growth through a dual-engine model of investment and international expansion."
                    : "От капитала до выхода на рынок: помогаем компаниям масштабироваться в России и за ее пределами, объединяя инвестиции и международное развитие.",
                href: "/business-new",
                cta: language === "en" ? "View more details→" : "Подробнее→",
              },
              {
                title: language === "en" ? "Proprietary Deal Flow" : "Собственный поток сделок",
                body:
                  language === "en"
                    ? "Privileged access to top-tier research, industry experts, and institutional networks—ensuring a consistent pipeline of high-quality opportunities."
                    : "Доступ к ведущим исследованиям, отраслевым экспертам и институциональным сетям обеспечивает стабильный поток качественных возможностей.",
                href: "/portfolio#portfolio-companies",
                cta: language === "en" ? "View more details→" : "Подробнее→",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-700/80 bg-slate-950/55 p-6 shadow-sm backdrop-blur-sm">
                <h3 className="mb-3 text-lg font-semibold text-white/95">{item.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-400">{item.body}</p>
                <Link href={item.href} className="text-sm font-medium text-amber-400/95 hover:text-amber-300 hover:underline">
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Team Section */}
      <section id="investment-team-section" className="relative scroll-mt-24 border-t border-slate-800/80 py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="heading-serif mb-4 text-4xl font-light tracking-tight text-white/95 lg:text-5xl">{content.investmentTeam}</h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-400">{content.teamDescription}</p>
          </div>

          {/* Team Members Grid - 2 rows of 4 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {teamMembers.slice(0, 4).map((member, index) => (
              <Card
                key={index}
                className={`border border-slate-700/80 bg-slate-950/60 text-slate-100 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:bg-slate-900/70 hover:shadow-2xl ${
                  member.hasModal ? "cursor-pointer" : ""
                } group relative overflow-hidden`}
                onClick={() => member.hasModal && handleMemberClick(index)}
              >
                <CardContent className="relative z-10 p-8 text-center">
                  <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full group-hover:shadow-xl transition-shadow duration-500">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white/95 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="mb-3 font-medium text-amber-400/95 transition-colors duration-300">{member.title}</p>
                  <p className="text-sm leading-relaxed text-slate-400 transition-colors duration-300">
                    {member.description}
                  </p>
                  {member.hasModal && (
                    <div className="absolute bottom-4 left-1/2 translate-y-2 -translate-x-1/2 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                        Click to learn more
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {teamMembers.slice(4, 8).map((member, index) => (
              <Card
                key={index + 4}
                className={`border border-slate-700/80 bg-slate-950/60 text-slate-100 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:bg-slate-900/70 hover:shadow-2xl ${
                  member.hasModal ? "cursor-pointer" : ""
                } ${
                  member.isMoreButton
                    ? "cursor-pointer border-2 border-dashed border-slate-600 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-800/50"
                    : ""
                } group relative overflow-hidden`}
                onClick={() => handleMemberClick(index + 4)}
              >
                <CardContent className="relative z-10 p-8 text-center">
                  <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full transition-shadow duration-500 group-hover:shadow-xl">
                    {member.isMoreButton ? (
                      <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-slate-600 bg-slate-800/60 transition-all duration-300 group-hover:border-slate-500 group-hover:bg-slate-800">
                        <div className="text-6xl font-light text-slate-500 transition-colors duration-300 group-hover:text-slate-300">+</div>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover rounded-full transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                      </>
                    )}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white/95 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="mb-3 font-medium text-amber-400/95 transition-colors duration-300">
                    {member.title}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-400 transition-colors duration-300">
                    {member.description}
                  </p>
                  {(member.hasModal || member.isMoreButton) && (
                    <div className="absolute bottom-4 left-1/2 translate-y-2 -translate-x-1/2 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                        {member.isMoreButton ? "More" : "Click to learn more"}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Team Member Modal */}
      {isModalOpen && currentMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto relative modal-content-scrollable">
            {/* Close Button - Sticky to top */}
            <div className="sticky top-0 z-20 bg-white rounded-t-lg">
            <button
              onClick={handleCloseModal}
                className="absolute top-4 right-4 z-30 text-slate-400 hover:text-slate-600 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            </div>

            {/* Navigation Arrows - Sticky to viewport */}
            <div className="sticky top-1/2 transform -translate-y-1/2 z-20 pointer-events-none">
            <button
              onClick={handlePreviousMember}
                className="absolute left-4 pointer-events-auto bg-white/90 hover:bg-white text-slate-600 hover:text-slate-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextMember}
                className="absolute right-4 pointer-events-auto bg-white/90 hover:bg-white text-slate-600 hover:text-slate-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row pt-16">
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
                  <h2 className="heading-serif text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-3">{currentMember.name}</h2>
                  <p className="text-xl text-blue-600 font-medium mb-6">{currentMember.title}</p>
                </div>
                <div className="text-slate-700 leading-relaxed text-lg prose prose-lg max-w-none">
                  {currentMember.name === "Chong Li" ? (
                    <div className="space-y-6">
                      {/* Header Section */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Professional Profile</h3>
                        <p className="text-lg leading-relaxed text-slate-700">
                          Founder of Dianliang Capital | Technology Entrepreneur | Expert in Technological Innovation and Applications | Renowned Investor in the Tech Innovation Sector
                        </p>
                      </div>

                      {/* Academic Position */}
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">Academic Position</h4>
                        <p className="text-slate-700">Vice President of the Finance Association, School of Economics and Management, Tsinghua University.</p>
                      </div>

                      {/* Expertise */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">Expertise</h4>
                        <p className="text-slate-700 mb-4">
                          With long-term experience in technology-focused investments, he excels in forward-looking research in hard technology, optoelectronics, data technologies, robotics, and artificial intelligence. Known for sharp intuition on emerging technologies and business models, he combines industry trends with cutting-edge innovations to identify disruptive investment opportunities.
                        </p>
                      </div>

                      {/* Entrepreneurial Experience */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Entrepreneurial Experience</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <span className="font-medium">1994:</span> Co-founded Henan Huihuang Technology Co., Ltd., which went public in September 2009 (Stock Code: 002296.SZ).
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <span className="font-medium">2009–2011:</span> Co-invested and co-founded Shanghai PPLive Media (PPTV), serving as Executive Director. By the end of 2013, PPTV was acquired by Suning and Lenovo Hony Capital for USD 480 million, generating a 1,000x return on investment.
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Major Investment Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">Major Investment Achievements</h4>
                        <div className="grid gap-4">
                          {[
                            {
                              company: "Jedee Technology",
                              description: "Angel investor in a smart in-vehicle cockpit developer and service provider. Today, Jedee has become the largest in-car software provider and car owner service platform in China's automotive industry."
                            },
                            {
                              company: "Bubi Blockchain",
                              description: "Angel investor in one of China's earliest blockchain technology companies, now a core technology provider for the national blockchain infrastructure 'BSN Xinghuo Chain Network.'"
                            },
                            {
                              company: "Lingou Microelectronics",
                              description: "Angel investor in a motion control chip and solutions provider. In July 2022, Lingou was acquired by the listed company Jingfeng Mingyuan at a valuation of RMB 580 million."
                            },
                            {
                              company: "Boton Optoelectronics",
                              description: "Angel investor in China's first domestically commercialized RF ion source company. Its ion source core equipment now plays an irreplaceable role in national communications, satellites, semiconductors, and superconductors."
                            },
                            {
                              company: "Hongjing Optics",
                              description: "Angel investor in an optical lens and solutions provider. Today, Hongjing has become a global leader in specialized optoelectronic imaging and video solutions, and successfully went public on ChiNext on March 18, 2025."
                            },
                            {
                              company: "Junduo Robotics",
                              description: "Angel investor in a dexterous robotic hand company. Now the leading domestic enterprise in electric grippers, it is disrupting traditional mechanical grippers and overtaking incumbents in robotic end-effector solutions."
                            },
                            {
                              company: "Kunwei Force Sensing",
                              description: "Angel investor in a six-dimensional force sensor provider. Today, Kunwei is the No.1 company by market share in China's six-dimensional force sensing sector."
                            },
                            {
                              company: "Boson Quantum",
                              description: "Angel investor in China's first coherent optical quantum computing company. In April 2024, the company released the world's leading 550-qubit coherent optical quantum computer, the first commercialized quantum computer in China. It delivers computing power 1,000x higher than traditional computers for specialized problems and has broad applications in AI, communications, finance, and pharmaceuticals."
                            }
                          ].map((investment, index) => (
                            <div key={index} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                              <h5 className="font-semibold text-slate-900 mb-2">{investment.company}</h5>
                              <p className="text-slate-600 text-sm leading-relaxed">{investment.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                                     ) : currentMember.name === "Xueshu Tang" ? (
                     <div className="space-y-6">
                       {/* Header Section */}
                       <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                         <h3 className="text-2xl font-semibold text-slate-900 mb-4">Executive Profile</h3>
                         <p className="text-lg leading-relaxed text-slate-700">
                           Chairman of Qingdao HYLIR Investment Group | Enterprise Leader | Industry Association Executive | Communist Party Member
                         </p>
                       </div>

                       {/* Personal Background */}
                       <div className="bg-slate-50 p-6 rounded-lg">
                         <h4 className="text-lg font-semibold text-slate-900 mb-2">Personal Background</h4>
                         <p className="text-slate-700">Tang Xueshu, female, Han nationality, was born in September 1952. She is a member of the Communist Party of China with a bachelor's degree.</p>
                       </div>

                       {/* Current Positions */}
                       <div>
                         <h4 className="text-lg font-semibold text-slate-900 mb-3">Current Positions</h4>
                         <div className="grid gap-3">
                           {[
                             "Chairman of Qingdao HYLIR Investment Group",
                             "Chairman of HYLIR (Chengdu) Headquarters Base Development Co., Ltd.",
                             "Vice President of Sichuan Provincial Enterprise Confederation and Entrepreneurs Association",
                             "Vice President of Sichuan Provincial Rural Development Federation",
                             "Standing Director of China Enterprise Culture Research Association",
                             "Vice President of Qingdao Economic Association"
                           ].map((position, index) => (
                             <div key={index} className="flex items-start">
                               <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                               <p className="text-slate-700">{position}</p>
                             </div>
                           ))}
                         </div>
                       </div>

                       {/* Previous Experience */}
                       <div>
                         <h4 className="text-lg font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Previous Experience</h4>
                         <div className="bg-green-50 p-6 rounded-lg">
                           <p className="text-slate-700 mb-4">
                             <span className="font-medium">First Director</span> of the Low-Power Wireless Communication Committee of China Communications Industry Association
                           </p>
                         </div>
                       </div>

                       {/* Key Leadership Areas */}
                       <div>
                         <h4 className="text-lg font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Key Leadership Areas</h4>
                         <div className="grid gap-3">
                           {[
                             "Investment group management and strategic planning",
                             "Enterprise association leadership and industry development",
                             "Rural development and economic cooperation",
                             "Corporate culture research and promotion",
                             "Economic policy and regional development"
                           ].map((area, index) => (
                             <div key={index} className="flex items-start">
                               <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                               <p className="text-slate-700">{area}</p>
                             </div>
                           ))}
                         </div>
                       </div>
                     </div>
                                     ) : currentMember.name === "Feng Guo" ? (
                     <div className="space-y-6">
                       {/* Header Section */}
                       <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                         <h3 className="text-2xl font-semibold text-slate-900 mb-4">Academic & Investment Profile</h3>
                         <p className="text-lg leading-relaxed text-slate-700">
                           Guo Feng, Ph.D. in Engineering | Partner at Dianliang Capital | Pioneer in Digital Industries | Distinguished Academic Investor
                         </p>
                       </div>

                       {/* Academic Leadership */}
                       <div className="bg-slate-50 p-6 rounded-lg">
                         <h4 className="text-lg font-semibold text-slate-900 mb-2">Academic Leadership</h4>
                         <p className="text-slate-700">Former Professor at Xidian University, Vice Dean of the School of Telecommunications Engineering, and Director of the State Key Laboratory of Integrated Services Networks.</p>
                       </div>

                       {/* Corporate Experience */}
                       <div>
                         <h4 className="text-lg font-semibold text-slate-900 mb-3">Corporate Experience</h4>
                         <div className="grid gap-3">
                           {[
                             "NTT (Japan) - Senior Executive Position",
                             "Cisco (USA) - Senior Executive Position", 
                             "China Electronics Corporation (CEC) - Senior Executive Position",
                             "Combines academic rigor with industry experience"
                           ].map((experience, index) => (
                             <div key={index} className="flex items-start">
                               <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                               <p className="text-slate-700">{experience}</p>
                             </div>
                           ))}
                         </div>
                       </div>

                       {/* Investment Focus */}
                       <div>
                         <h4 className="text-lg font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Investment Focus</h4>
                         <div className="grid gap-3">
                           {[
                             "AI and robotics",
                             "IoT and smart manufacturing",
                             "Semiconductors",
                             "Blockchain and quantum computing",
                             "New energy and digital assets"
                           ].map((focus, index) => (
                             <div key={index} className="flex items-start">
                               <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                               <p className="text-slate-700">{focus}</p>
                             </div>
                           ))}
                         </div>
                       </div>

                       {/* Mentorship & Recognition */}
                       <div>
                         <h4 className="text-lg font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Mentorship & Recognition</h4>
                         <div className="bg-purple-50 p-6 rounded-lg">
                           <p className="text-slate-700 mb-4">
                             Serves as an entrepreneurial mentor at several leading domestic innovation and investment institutions, including:
                           </p>
                           <ul className="space-y-2">
                             <li className="flex items-start">
                               <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                               <span>Peking University Industry Research Institute</span>
                             </li>
                             <li className="flex items-start">
                               <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                               <span>Tsinghua Tongfang Incubator</span>
                             </li>
                             <li className="flex items-start">
                               <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                               <span>International University Innovation Alliance</span>
                             </li>
                           </ul>
                           <p className="text-slate-700 mt-4 font-medium">
                             Recognized as a pioneer and researcher in early-stage internet, WiFi and optical networks, quantum computing, blockchain, and emerging digital industries in China.
                           </p>
                         </div>
                       </div>
                     </div>
                  ) : currentMember.name === "Dongmin Chen" ? (
                    <div className="space-y-6">
                      {/* Header Section */}
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Distinguished Scholar Profile</h3>
                        <p className="text-lg leading-relaxed text-slate-700">
                          National 'Thousand Talents Program' Scholar | Former Peking University Professor | Technology Development Expert | International Collaboration Specialist
                        </p>
                      </div>

                      {/* Academic Leadership */}
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">Academic Leadership</h4>
                        <p className="text-slate-700">Former professor at Peking University's School of International Studies, with extensive experience in academia and technology development.</p>
                      </div>

                      {/* Key Leadership Positions */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Leadership Positions</h4>
                        <div className="grid gap-3">
                          {[
                            "Deputy Director of Science and Technology Development Department",
                            "Director of Industrial Technology Research Institute",
                            "National 'Thousand Talents Program' Scholar",
                            "International collaboration and technology transfer expert"
                          ].map((position, index) => (
                            <div key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <p className="text-slate-700">{position}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Expertise Areas */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Expertise Areas</h4>
                        <div className="bg-orange-50 p-6 rounded-lg">
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>International collaboration and partnerships</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>Technology transfer and commercialization</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>Strategic research development</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : currentMember.name === "Hao Chu" ? (
                    <div className="space-y-6">
                      {/* Header Section */}
                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Investment Partner Profile</h3>
                        <p className="text-lg leading-relaxed text-slate-700">
                          Founding Partner | Multi-Sector Investment Expert | Technology & Consumer Specialist | Growth Company Mentor
                        </p>
                      </div>

                      {/* Investment Focus */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">Investment Focus</h4>
                        <div className="grid gap-3">
                          {[
                            "Internet and digital technology",
                            "Education technology and services",
                            "Consumer upgrades and lifestyle",
                            "Internet of Things (IoT) solutions"
                          ].map((sector, index) => (
                            <div key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <p className="text-slate-700">{sector}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Professional Experience */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Professional Experience</h4>
                        <p className="text-slate-700 mb-4">
                          Founding Partner of Boen Capital and Dianke Boen Partners with extensive investment experience across multiple sectors. Has a proven track record in identifying and nurturing high-growth technology companies.
                        </p>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Key Achievements</h4>
                        <div className="bg-teal-50 p-6 rounded-lg">
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>Successfully identified and invested in numerous high-growth companies</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>Established strong portfolio management practices</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>Mentored and supported portfolio companies through growth phases</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : currentMember.name === "Wencheng Li" ? (
                    <div className="space-y-6">
                      {/* Header Section */}
                      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">International High-Tech Investor Profile</h3>
                        <p className="text-lg leading-relaxed text-slate-700">
                          PhD/Founding Partner | International High-Tech Investor | Chemical Engineering Expert | Global Market Connector
                        </p>
                      </div>

                      {/* Academic Background */}
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">Academic Background</h4>
                        <p className="text-slate-700">Ph.D. in Chemical Engineering from East China University of Science and Technology. Alumnus of Tsinghua University's PBCSF and Zhejiang University's School of Management. Currently serves as an Adjunct Professor at HoHai University.</p>
                      </div>

                      {/* Investment Leadership */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">Investment Leadership</h4>
                        <div className="grid gap-3">
                          {[
                            "Founding Partner of Born Capital",
                            "Invested in over 100 high-tech startups",
                            "Focus areas: quantum computing, artificial intelligence, and new energy",
                            "Founder of Born International platform"
                          ].map((leadership, index) => (
                            <div key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <p className="text-slate-700">{leadership}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Cross-Border Operating Platform */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Cross-Border Operating Platform</h4>
                        <div className="bg-indigo-50 p-6 rounded-lg">
                          <p className="text-slate-700 mb-4">
                            <span className="font-medium">Born International</span> - A platform that helps Chinese companies enter Russia, the CIS, the Middle East, and Southeast Asia through local partners, policy access, and execution teams.
                          </p>
                        </div>
                      </div>

                      {/* Professional Affiliations */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Professional Affiliations</h4>
                        <div className="grid gap-3">
                          {[
                            "Deputy of the Head of the United Business Cooperation Center at the SCO Business Council Secretariat for the Northwestern Federal District of the Russian Federation (Saint-Petersburg city)",
                            "Member of the Shanghai Cooperation Organization Business Council",
                            "Committee Member of the Youth Federation of Chengdu High-Tech Zone",
                            "Initiator of the Angel Investment Association of Chengdu University District",
                            "Recognized as a Rising Star Investor under 35 in China in 2021"
                          ].map((affiliation, index) => (
                            <div key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <p className="text-slate-700">{affiliation}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Investment Focus */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Key Investment Focus</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { area: "Quantum Computing", description: "Advanced quantum computing technologies and applications" },
                            { area: "Artificial Intelligence", description: "AI startups and machine learning innovations" },
                            { area: "New Energy", description: "Sustainable energy solutions and clean technology" }
                          ].map((focus, index) => (
                            <div key={index} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                              <h5 className="font-semibold text-slate-900 mb-2">{focus.area}</h5>
                              <p className="text-slate-600 text-sm">{focus.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : currentMember.name === "Weixin Lao" ? (
                    <div className="space-y-6">
                      {/* Header Section */}
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">International Investment Profile</h3>
                        <p className="text-lg leading-relaxed text-slate-700">
                          Dr./Professor | Investment Partner | Cross-Border Investment Expert | 25+ Years High-Tech Industry Experience
                        </p>
                      </div>

                      {/* Academic Position */}
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">Academic Position</h4>
                        <p className="text-slate-700">Distinguished investment partner at Dianliang Borun Capital and serves as an adjunct professor at Hong Kong Chinese University.</p>
                      </div>

                      {/* Geographic Experience */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">Geographic Experience</h4>
                        <div className="grid gap-3">
                          {[
                            "China - 25+ years of high-tech industry experience",
                            "Hong Kong - Cross-border investment expertise",
                            "United States - International market knowledge",
                            "Global perspective on technology investments"
                          ].map((experience, index) => (
                            <div key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <p className="text-slate-700">{experience}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Investment Expertise */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Investment Expertise</h4>
                        <p className="text-slate-700 mb-4">
                          With 25 years of extensive experience in high-tech industries and risk investment across China, Hong Kong, and the United States, Dr. Lao brings invaluable expertise in cross-border investments and technology sector analysis.
                        </p>
                      </div>

                      {/* Key Strengths */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3 border-b border-slate-200 pb-2">Key Strengths</h4>
                        <div className="bg-red-50 p-6 rounded-lg">
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>Cross-border investment strategy and execution</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>Technology sector analysis and due diligence</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>International market knowledge and connections</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                  <p>{currentMember.fullBio}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fundraising */}
      <section className="py-24 md:py-32 relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="heading-serif text-3xl font-light mb-4">{language === "en" ? "Fundraising" : "Привлечение капитала"}</h2>
          <p className="text-slate-300 leading-relaxed mb-2">
            {language === "en"
              ? "Our new technology-focused fund is currently in formation."
              : "Наш новый технологический фонд находится на стадии формирования."}
          </p>
          <p className="text-slate-400 text-sm">
            {language === "en"
              ? "For partnership and investment opportunities, please feel free to contact us."
              : "Свяжитесь с нами по вопросам партнерства и инвестиционных возможностей."}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex border border-slate-600 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            {language === "en" ? "Contact our team" : "Связаться с нашей командой"}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-[1fr_0.95fr_1.55fr_0.95fr]">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/logo/born_logo_white.png"
                  alt="BORN International Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-slate-400 text-sm">
                Investing in Chinese hard tech and building operating routes into Russia, the CIS, and adjacent markets.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">The Fund</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="/portfolio" className="hover:text-white">About the fund</a>
                </li>
                <li>
                  <a href="/portfolio#our-edge" className="hover:text-white">Investment strategy</a>
                </li>
                <li>
                  <a href="/portfolio#portfolio-companies" className="hover:text-white">Returns</a>
                </li>
                <li>
                  <a href="/portfolio#portfolio-companies" className="hover:text-white">Holdings</a>
                </li>
              </ul>
            </div>

            <ResponsibleInvestmentBlurb language={language} theme="dark" />

            <div>
              <h4 className="font-medium mb-4">About Born International</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="/global" className="hover:text-white">Organization</a>
                </li>
                <li>
                  <a href="mailto:azmatjan@bornpe.com?subject=Career%20Enquiry" className="hover:text-white">Careers</a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
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
            <p className="text-slate-400 text-sm">© 2026 Born International. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-slate-400 hover:text-white text-sm">Privacy Policy</span>
              <span className="text-slate-400 hover:text-white text-sm">Terms of Use</span>
              <span className="text-slate-400 hover:text-white text-sm">Accessibility</span>
            </div>
          </div>
        </div>
      </footer>
    </ViSecondaryShell>
  )
}
