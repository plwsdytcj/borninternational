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
      teamDescription: "Investors and operators who can source frontier technology in China and execute cross-border commercialization on the ground.",
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
      teamDescription: "Инвесторы и операторы, которые умеют находить передовые технологии в Китае и доводить их до трансграничной коммерциализации на месте.",
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
      title: language === "en" ? "Chairman of Qingdao HYLIR Investment Group" : "青岛海利尔投资集团董事长",
      description:
        language === "en"
          ? "Chairman of Qingdao HYLIR Investment Group and HYLIR (Chengdu) Headquarters Base Development Co., Ltd. Vice President of Sichuan Provincial Enterprise Confederation and Entrepreneurs Association."
          : "青岛海利尔投资集团董事长、海利尔（成都）总部基地发展有限公司董事长。四川省企业联合会、企业家协会副会长。",
              image: "/investment-team/唐学书_profile.jpg",
      fullBio:
        language === "en"
          ? "Tang Xueshu, female, Han nationality, was born in September 1952. She is a member of the Communist Party of China with a bachelor's degree. She currently serves as the Chairman of Qingdao HYLIR Investment Group and HYLIR (Chengdu) Headquarters Base Development Co., Ltd. She was the first Director of the Low-Power Wireless Communication Committee of China Communications Industry Association. Now, she also holds the positions of Vice President of Sichuan Provincial Enterprise Confederation and Entrepreneurs Association, Vice President of Sichuan Provincial Rural Development Federation, Standing Director of China Enterprise Culture Research Association, and Vice President of Qingdao Economic Association."
          : "唐学书，女，汉族，1952年9月出生，中共党员，本科学历。现任青岛海利尔投资集团董事长、海利尔（成都）总部基地发展有限公司董事长。曾任中国通信工业协会低功耗无线通信委员会首届主任。现任四川省企业联合会、企业家协会副会长，四川省乡村发展联合会副会长，中国企业文化建设协会常务理事，青岛市经济学会副会长等职务。",
      hasModal: true,
    },
    {
      name: "Chong Li",
      title: language === "en" ? "Founder of Dianliang Capital" : "点亮资本创始人",
      description:
        language === "en"
          ? "Technology entrepreneur and renowned investor in the tech innovation sector. Vice President of the Finance Association, Tsinghua University."
          : "科技企业家，科技创新领域知名投资人。清华大学经济管理学院金融协会副会长。",
              image: "/investment-team/李翀_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Founder of Dianliang Capital | Technology Entrepreneur | Expert in Technological Innovation and Applications | Renowned Investor in the Tech Innovation Sector\n\nVice President of the Finance Association, School of Economics and Management, Tsinghua University.\n\nWith long-term experience in technology-focused investments, he excels in forward-looking research in hard technology, optoelectronics, data technologies, robotics, and artificial intelligence. Known for sharp intuition on emerging technologies and business models, he combines industry trends with cutting-edge innovations to identify disruptive investment opportunities.\n\nEntrepreneurial Experience:\n• 1994: Co-founded Henan Huihuang Technology Co., Ltd., which went public in September 2009 (Stock Code: 002296.SZ).\n• 2009–2011: Co-invested and co-founded Shanghai PPLive Media (PPTV), serving as Executive Director. By the end of 2013, PPTV was acquired by Suning and Lenovo Hony Capital for USD 480 million, generating a 1,000x return on investment.\n\nMajor Investment Achievements:\n• Jedee Technology – Angel investor in a smart in-vehicle cockpit developer and service provider. Today, Jedee has become the largest in-car software provider and car owner service platform in China's automotive industry.\n• Bubi Blockchain – Angel investor in one of China's earliest blockchain technology companies, now a core technology provider for the national blockchain infrastructure 'BSN Xinghuo Chain Network.'\n• Lingou Microelectronics – Angel investor in a motion control chip and solutions provider. In July 2022, Lingou was acquired by the listed company Jingfeng Mingyuan at a valuation of RMB 580 million.\n• Boton Optoelectronics – Angel investor in China's first domestically commercialized RF ion source company. Its ion source core equipment now plays an irreplaceable role in national communications, satellites, semiconductors, and superconductors.\n• Hongjing Optics – Angel investor in an optical lens and solutions provider. Today, Hongjing has become a global leader in specialized optoelectronic imaging and video solutions, and successfully went public on ChiNext on March 18, 2025.\n• Junduo Robotics – Angel investor in a dexterous robotic hand company. Now the leading domestic enterprise in electric grippers, it is disrupting traditional mechanical grippers and overtaking incumbents in robotic end-effector solutions.\n• Kunwei Force Sensing – Angel investor in a six-dimensional force sensor provider. Today, Kunwei is the No.1 company by market share in China's six-dimensional force sensing sector.\n• Boson Quantum – Angel investor in China's first coherent optical quantum computing company. In April 2024, the company released the world's leading 550-qubit coherent optical quantum computer, the first commercialized quantum computer in China. It delivers computing power 1,000x higher than traditional computers for specialized problems and has broad applications in AI, communications, finance, and pharmaceuticals."
          : "点亮资本创始人 | 科技企业家 | 技术创新与应用专家 | 科技创新领域知名投资人\n\n清华大学经济管理学院金融协会副会长。\n\n在科技投资领域拥有长期经验，擅长硬科技、光电、数据技术、机器人和人工智能的前瞻性研究。以对新兴技术和商业模式的敏锐直觉而闻名，他将行业趋势与前沿创新相结合，识别颠覆性投资机会。\n\n创业经历：\n• 1994年：联合创立河南辉煌科技股份有限公司，2009年9月上市（股票代码：002296.SZ）。\n• 2009-2011年：联合投资并联合创立上海聚力传媒（PPTV），担任执行董事。2013年底，PPTV被苏宁和联想弘毅资本以4.8亿美元收购，实现1000倍投资回报。\n\n主要投资成就：\n• 极豆科技 – 智能车载座舱开发和服务提供商的天使投资人。如今，极豆已成为中国汽车行业最大的车载软件提供商和车主服务平台。\n• 布比区块链 – 中国最早区块链技术公司之一的天使投资人，现为国家区块链基础设施'BSN星火链网'的核心技术提供商。\n• 凌鸥创芯 – 运动控制芯片和解决方案提供商的天使投资人。2022年7月，凌鸥被上市公司晶丰明源以5.8亿元估值收购。\n• 博顿光电 – 中国首家国产化商用射频离子源公司的天使投资人。其离子源核心设备现已在国家通信、卫星、半导体和超导体领域发挥不可替代的作用。\n• 弘景光电 – 光学镜头和解决方案提供商的天使投资人。如今，弘景已成为专业光电成像和视频解决方案的全球领导者，并于2025年3月18日成功在创业板上市。\n• 钧舵机器人 – 灵巧机械手公司的天使投资人。现为国内电动夹爪领先企业，正在颠覆传统机械夹爪，在机器人末端执行器解决方案方面超越现有企业。\n• 坤维力觉 – 六维力传感器提供商的天使投资人。如今，坤维是中国六维力传感领域市场份额第一的公司。\n• 玻色量子 – 中国首家相干光量子计算公司的天使投资人。2024年4月，公司发布了世界领先的550量子比特相干光量子计算机，这是中国首台商用量子计算机。它在专业问题上提供比传统计算机高1000倍的计算能力，在AI、通信、金融和制药领域有广泛应用。",
      hasModal: true,
    },
    {
      name: "Feng Guo",
      title: language === "en" ? "Guo Feng, Ph.D. in Engineering | Partner at Dianliang Capital" : "郭峰博士 | 点亮资本合伙人",
      description:
        language === "en"
          ? "Former Professor at Xidian University, Vice Dean of the School of Telecommunications Engineering, and Director of the State Key Laboratory of Integrated Services Networks"
          : "曾任西安电子科技大学教授、电信工程学院副院长、综合业务网理论及关键技术国家重点实验室主任",
              image: "/investment-team/郭峰_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Guo Feng, Ph.D. in Engineering | Partner at Dianliang Capital\n\nFormer Professor at Xidian University, Vice Dean of the School of Telecommunications Engineering, and Director of the State Key Laboratory of Integrated Services Networks. Previously held senior executive positions at NTT (Japan), Cisco (USA), and China Electronics Corporation (CEC).\n\nIn recent years, he has focused on early-stage investments in AI and robotics, IoT and smart manufacturing, semiconductors, blockchain and quantum computing, as well as new energy and digital assets. He also serves as an entrepreneurial mentor at several leading domestic innovation and investment institutions, including the Peking University Industry Research Institute, Tsinghua Tongfang Incubator, and the International University Innovation Alliance.\n\nDr. Guo is recognized as a pioneer and researcher in early-stage internet, WiFi and optical networks, quantum computing, blockchain, and emerging digital industries in China."
          : "郭峰博士 | 点亮资本合伙人\n\n曾任西安电子科技大学教授、电信工程学院副院长、综合业务网理论及关键技术国家重点实验室主任。曾在日本NTT、美国思科、中国电子集团等知名企业担任高级管理职务。\n\n近年来专注于AI和机器人、物联网和智能制造、半导体、区块链和量子计算、新能源和数字资产等领域的早期投资。同时担任北京大学产业技术研究院、清华同方孵化器、国际大学创新联盟等多家国内知名创新投资机构的创业导师。\n\n郭峰博士被公认为中国早期互联网、WiFi和光网络、量子计算、区块链和新兴数字产业的先驱者和研究者。",
      hasModal: true,
    },
    {
      name: "Dongmin Chen",
      title: language === "en" ? "Dr./Professor - Thousand Talents Program Scholar" : "博士/教授",
      description:
        language === "en"
          ? "National 'Thousand Talents Program' scholar, former professor at Peking University's School of International Studies, former deputy director of Science and Technology Development Department"
          : '国家"千人计划"学者，北京大学前沿交叉学科研究院教授、科技开发部部长、产业技术研究院院长。',
              image: "/investment-team/陈东敏_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Dr. Chen Dongmin is a distinguished national 'Thousand Talents Program' scholar with extensive experience in academia and technology development. He previously served as a professor at Peking University's School of International Studies and held key leadership positions including deputy director of the Science and Technology Development Department and director of the Industrial Technology Research Institute. His expertise spans international collaboration, technology transfer, and strategic research development."
          : '陈东敏博士是杰出的国家"千人计划"学者，在学术界和技术发展方面拥有丰富经验。他曾担任北京大学前沿交叉学科研究院教授，并担任科技开发部部长、产业技术研究院院长等重要领导职务。他的专业领域涵盖国际合作、技术转移和战略研究发展。',
      hasModal: true,
    },
    {
      name: "Hao Chu",
      title: language === "en" ? "Founding Partner" : "创始合伙人",
      description:
        language === "en"
          ? "Founding Partner of Boen Capital and Dianke Boen Partners, with extensive investment experience in Internet, education, consumer upgrades, and IoT sectors"
          : "伯恩资本创始合伙人、点克伯恩合伙人、投资经验丰富，擅长互联网、教育、消费升级、物联网等领域。",
              image: "/investment-team/褚浩_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Founding Partner of Boen Capital and Dianke Boen Partners with extensive investment experience across multiple sectors including Internet, education, consumer upgrades, and IoT. Has a proven track record in identifying and nurturing high-growth technology companies."
          : "伯恩资本创始合伙人、点克伯恩合伙人、投资经验丰富，擅长互联网、教育、消费升级、物联网等领域。在识别和培育高增长科技公司方面拥有丰富的成功经验。",
      hasModal: true,
    },
    {
      name: "Wencheng Li",
      title: language === "en" ? "PhD/Founding Partner" : "博士/创始合伙人",
      description:
        language === "en"
          ? "International high-tech investor and Founding Partner of Born Capital. PhD in Chemical Engineering from East China University of Science and Technology. Adjunct Professor at HoHai University."
          : "国际高科技投资者，Born Capital创始合伙人。华东理工大学化学工程博士。河海大学兼职教授。",
              image: "/investment-team/李文成_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Dr. LI Wencheng is an international high-tech investor. He holds a Ph.D. in Chemical Engineering from East China University of Science and Technology. He is also an alumnus of Tsinghua University's PBCSF and Zhejiang University's School of Management. Dr. Li now serves as an Adjunct Professor at HoHai University. Dr. Li is the Founding Partner of Born Capital, where he has invested in over 100 high-tech startups, with a focus on areas such as quantum computing, artificial intelligence, and new energy. He is also the founder of Born International, which helps Chinese companies enter Russia, the CIS, the Middle East, and Southeast Asia through local partners, policy access, and execution teams."
          : "李文科博士是国际高科技投资者。他拥有华东理工大学化学工程博士学位。他也是清华大学五道口金融学院和浙江大学管理学院的校友。李博士现任河海大学兼职教授。李博士是Born Capital的创始合伙人，已投资超过100家高科技初创企业，专注于量子计算、人工智能和新能源等领域。他也是Born International的创始人，该平台致力于连接中国企业与全球市场，特别是在俄罗斯、中东和东南亚等地区。",
      hasModal: true,
    },
    {
      name: "Weixin Lao",
      title: language === "en" ? "Dr./Professor - Investment Partner" : "博士/教授",
      description:
        language === "en"
          ? "Partner at Dianliang Borun Capital and Professor at Hong Kong Chinese University, with 25 years of experience in high-tech industries and risk investment"
          : "点亮伯恩资本合伙人。香港中文大学兼任教授。具25年中、港、美地区高科技行业及风险投资的经验。",
              image: "/investment-team/劳维信_personal_page.jpg",
      fullBio:
        language === "en"
          ? "Dr. Lao Weixin is a distinguished investment partner at Dianliang Borun Capital and serves as an adjunct professor at Hong Kong Chinese University. With 25 years of extensive experience in high-tech industries and risk investment across China, Hong Kong, and the United States, he brings invaluable expertise in cross-border investments and technology sector analysis."
          : "劳维信博士是点亮伯恩资本的杰出投资合伙人，同时担任香港中文大学兼任教授。他在中国、香港和美国地区拥有25年高科技行业及风险投资的丰富经验，在跨境投资和技术行业分析方面具有宝贵的专业知识。",
      hasModal: true,
    },
    {
      name: language === "en" ? "More Team Members" : "更多团队成员",
      title: language === "en" ? "View All" : "查看全部",
      description:
        language === "en"
          ? "Discover more talented professionals in our investment team"
          : "了解我们投资团队中更多优秀的专业人士",
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
    >
      {/* Portfolio Companies */}
      <section id="portfolio-companies" className="py-20 relative scroll-mt-24">
        <div className="absolute inset-0">
          <Image src="/backgrounds/bg-project-1.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-4">
              {language === "en" ? "Portfolio Companies" : "投资组合公司"}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {language === "en"
                ? "Highlighted return profiles and full portfolio access."
                : "重点展示收益倍数，完整了解投资组合。"}
            </p>
          </div>

          <div className="space-y-10 mb-16">
            {companies
              .filter((c) => c.featured)
              .map((company) => (
                <Card key={company.slug} className="border-2 border-slate-200 shadow-xl bg-white/95 overflow-hidden">
                  <CardContent className="p-6 sm:p-10">
                    <div className="grid md:grid-cols-[minmax(0,200px)_1fr_auto] gap-8 items-center">
                      <div className="relative w-full h-40 md:h-48 mx-auto max-w-[200px]">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          fill
                          className={company.logoStyle || "object-contain"}
                        />
                      </div>
                      <div>
                        <p className="text-amber-800 font-semibold text-sm uppercase tracking-wider mb-2">
                          {language === "en" ? "Return Multiple" : "回报倍数"}: {company.returnMultiple}
                        </p>
                        <h3 className="text-2xl font-semibold text-slate-900 mb-2">{company.name}</h3>
                        <p className="text-slate-500 text-sm mb-3">{company.sector}</p>
                        <p className="text-slate-600 leading-relaxed">{company.description}</p>
                      </div>
                      <div className="flex md:flex-col justify-start">
                        <Button
                          variant="outline"
                          className="whitespace-nowrap"
                          onClick={() => router.push(`/portfolio/${company.slug}`)}
                        >
                          {content.viewDetails}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {companies
              .filter((c) => !c.featured)
              .map((company) => (
                <Card key={company.slug} className="border border-slate-200 shadow-sm hover:shadow-md bg-white/95">
                  <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className={company.logoStyle || "object-contain"}
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <h4 className="font-semibold text-slate-900 text-sm line-clamp-2">{company.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">{company.sector}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2 p-0 h-auto text-blue-600"
                        onClick={() => router.push(`/portfolio/${company.slug}`)}
                      >
                        {content.viewDetails}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Our Edge */}
      <section id="our-edge" className="py-20 relative scroll-mt-24 border-y border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 opacity-[0.14] pointer-events-none">
          <Image src="/vi-reference/image5.jpeg" alt="" fill className="object-cover object-center" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="heading-serif text-3xl sm:text-4xl font-light text-slate-900 mb-12 text-center">
            {language === "en" ? "Our Edge" : "我们的优势"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: language === "en" ? "Team & Track Record" : "团队与业绩",
                body:
                  language === "en"
                    ? "Decade-long experience in early-stage technology investing, with a proven track record of backing and scaling category-defining companies."
                    : "早期科技投资数十年经验，经实践检验的投资与培育定义品类企业的能力。",
                href: "/portfolio#investment-team-section",
                cta: language === "en" ? "View more details→" : "了解更多→",
              },
              {
                title: language === "en" ? "AI-Driven Investment" : "AI驱动投资",
                body:
                  language === "en"
                    ? "Deep focus on AI, powered by a proprietary, end-to-end AI investment management system that enhances speed, precision, and scalability."
                    : "深耕人工智能，依托端到端专有AI投资管理体系，提升速度、精准度与规模。",
                href: "/ai-company",
                cta: language === "en" ? "View more details→" : "了解更多→",
              },
              {
                title: language === "en" ? "Investment + Global Expansion" : "投资与全球拓展",
                body:
                  language === "en"
                    ? "From capital to market entry, we enable companies to scale into Russia and beyond—unlocking growth through a dual-engine model of investment and international expansion."
                    : "从资本到市场进入，助力企业拓展至俄罗斯及其他地区——投资与国际化双引擎释放增长。",
                href: "/business-new",
                cta: language === "en" ? "View more details→" : "了解更多→",
              },
              {
                title: language === "en" ? "Proprietary Deal Flow" : "专有项目渠道",
                body:
                  language === "en"
                    ? "Privileged access to top-tier research, industry experts, and institutional networks—ensuring a consistent pipeline of high-quality opportunities."
                    : "对接顶级研究、行业专家与机构网络，持续获得高质量投资机会。",
                href: "/portfolio#portfolio-companies",
                cta: language === "en" ? "View more details→" : "了解更多→",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.body}</p>
                <Link href={item.href} className="text-blue-600 text-sm font-medium hover:underline">
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Team Section */}
      <section id="investment-team-section" className="py-20 relative scroll-mt-24">
        <div className="absolute inset-0">
          <Image
                          src="/backgrounds/bg-team.jpg"
            alt="Team background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-4">{content.investmentTeam}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{content.teamDescription}</p>
          </div>

          {/* Team Members Grid - 2 rows of 4 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {teamMembers.slice(0, 4).map((member, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  member.hasModal ? "cursor-pointer" : ""
                } group relative overflow-hidden`}
                onClick={() => member.hasModal && handleMemberClick(index)}
              >
                <CardContent className="p-8 text-center relative z-10">
                  <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full group-hover:shadow-xl transition-shadow duration-500">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3 transition-colors duration-300">{member.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed transition-colors duration-300">
                    {member.description}
                  </p>
                  {member.hasModal && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs text-slate-600 font-medium bg-gray-100 px-3 py-1 rounded-full">
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
                className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  member.hasModal ? "cursor-pointer" : ""
                } ${
                  member.isMoreButton
                    ? "cursor-pointer border-2 border-dashed border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100"
                    : ""
                } group relative overflow-hidden`}
                onClick={() => handleMemberClick(index + 4)}
              >
                <CardContent className="p-8 text-center relative z-10">
                  <div className="relative w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full group-hover:shadow-xl transition-shadow duration-500">
                    {member.isMoreButton ? (
                      <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center group-hover:bg-gray-200 group-hover:border-gray-400 transition-all duration-300">
                        <div className="text-6xl font-light text-gray-400 group-hover:text-gray-600 transition-colors duration-300">+</div>
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
                  <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3 transition-colors duration-300">
                    {member.title}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed transition-colors duration-300">
                    {member.description}
                  </p>
                  {(member.hasModal || member.isMoreButton) && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs text-slate-600 font-medium bg-gray-100 px-3 py-1 rounded-full">
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
      <section className="py-16 relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image src="/vi-reference/image13.jpeg" alt="" fill className="object-cover object-center" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="heading-serif text-3xl font-light mb-4">{language === "en" ? "Fundraising" : "募资"}</h2>
          <p className="text-slate-300 leading-relaxed mb-2">
            {language === "en"
              ? "Our new technology-focused fund is currently in formation."
              : "我们新的科技主题基金正在筹备中。"}
          </p>
          <p className="text-slate-400 text-sm">
            {language === "en"
              ? "For partnership and investment opportunities, please feel free to contact us."
              : "合作与投资欢迎与我们联系。"}
          </p>
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

            <ResponsibleInvestmentBlurb language={language} theme="dark" />

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
    </ViSecondaryShell>
  )
}
