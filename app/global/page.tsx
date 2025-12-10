"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, Globe, ChevronDown, MapPin, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function GlobalPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"en" | "ru">("en")

  const languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
  ]

  const languageContent = {
    en: {
      technologyGlobalization: "Technology Globalization",
      technologyGlobalizationDescription:
        "We drive technology globalization through strategic investments across multiple global markets, fostering cross-border innovation and technology transfer to accelerate global digital transformation",
      backToHome: "Back to Home",
      founderSection: "Leadership",
      founderName: "Dr. Li Wencheng",
      founderTitle: "PhD/Founding Partner",
      founderDescription:
        "Dr. Li Wencheng graduated from East China University of Science and Technology, obtained a master's degree from Tsinghua University, and a doctorate degree from Zhejiang University. He then taught at Hohai University. He has many years of experience in the investment field.",
      eurasianRegion: "Eurasian Technology Hub",
      eurasianDescription:
        "Strategic technology partnerships across Russia, Central Asia, and the Shanghai Cooperation Organization (SCO) member states, with a focus on AI, quantum computing, and blockchain technology transfer.",
      regionalLeader: "Regional Leader",
      keyProjects: "Key Technology Projects",
      skolkovoPartnership: "Skolkovo AI Innovation Center",
      scoTechInitiative: "SCO Quantum Technology Initiative",
      crossBorderInnovation: "Cross-border Blockchain Fund",
      euRegion: "European Technology Corridor",
      euDescription:
        "Comprehensive technology coverage across EU markets with focus on deep tech, AI research, and digital transformation initiatives connecting Silicon Valley to European innovation hubs.",
      euLeader: "Dr. Maria Schmidt",
      euTitle: "EU Technology Director",
      euProject1: "Berlin AI Research Hub",
      euProject2: "Green Tech Innovation",
      euProject3: "Digital Health Platform",
      middleEastRegion: "Middle East Tech Bridge",
      middleEastDescription:
        "Strategic technology presence in UAE, Saudi Arabia, and Israel, focusing on fintech innovation, smart city technologies, and connecting Middle Eastern tech ecosystems with global markets.",
      meLeader: "Ahmed Al-Rashid",
      meTitle: "MENA Technology Director",
      meProject1: "Dubai Fintech Innovation Lab",
      meProject2: "Saudi Smart City Initiative",
      meProject3: "Israeli Deep Tech Accelerator",
      southAfricaRegion: "African Technology Gateway",
      southAfricaDescription:
        "Gateway to African tech markets with emphasis on mobile technology innovation, fintech solutions, and connecting African startups with global technology networks.",
      saLeader: "Dr. Nomsa Mbeki",
      saTitle: "Africa Technology Director",
      saProject1: "Cape Town Tech Innovation Hub",
      saProject2: "Mobile Fintech Solutions",
      saProject3: "African AI Research Center",
      investmentSectors: "Technology Investment Sectors",
      sectorsDescription:
        "Our technology-focused portfolio spans multiple high-growth sectors, each managed by specialized teams with deep domain expertise in emerging technologies.",
      medicalSector: "Medical Technology & Digital Health",
      medicalDescription: "AI-powered diagnostics, telemedicine, digital therapeutics",
      newEnergySector: "Clean Energy Technology",
      newEnergyDescription: "Smart grid, energy storage, renewable tech innovation",
      aiSector: "Artificial Intelligence & Machine Learning",
      aiDescription: "Deep learning, computer vision, natural language processing",
      fintechSector: "Financial Technology",
      fintechDescription: "Blockchain, digital payments, decentralized finance",
      spaceSector: "Space Technology & Aerospace",
      spaceDescription: "Satellite technology, space exploration, aerospace innovation",
      quantumSector: "Quantum Computing & Cryptography",
      quantumDescription: "Quantum algorithms, quantum hardware, quantum security",
      roboticsSector: "Robotics & Automation",
      roboticsDescription: "Industrial automation, AI robotics, autonomous systems",
      bioSector: "Biotechnology & Life Sciences",
      bioDescription: "Gene editing, synthetic biology, precision medicine",
    },
    ru: {
      technologyGlobalization: "Технологическая глобализация",
      technologyGlobalizationDescription:
        "Мы способствуем технологической глобализации через стратегические инвестиции на множественных мировых рынках, поощряя трансграничные инновации и передачу технологий для ускорения глобальной цифровой трансформации",
      backToHome: "Вернуться на главную",
      founderSection: "Руководство",
      founderName: "Доктор Ли Вэньчэн",
      founderTitle: "博士/创始合伙人",
      founderDescription:
        "Доктор Ли Вэньчэн окончил Восточно-Китайский научно-технологический университет, получил степень магистра в Университете Цинхуа и докторскую степень в Чжэцзянском университете. Затем он преподавал в Университете Хохай. Имеет многолетний опыт работы в сфере инвестиций.",
      eurasianRegion: "Евразийский технологический хаб",
      eurasianDescription:
        "Стратегические технологические партнерства в России, Центральной Азии и государствах-членах ШОС с акцентом на ИИ, квантовые вычисления и передачу блокчейн-технологий.",
      regionalLeader: "Региональный руководитель",
      keyProjects: "Ключевые технологические проекты",
      skolkovoPartnership: "Инновационный центр ИИ Сколково",
      scoTechInitiative: "Квантовая технологическая инициатива ШОС",
      crossBorderInnovation: "Трансграничный блокчейн-фонд",
      euRegion: "Европейский технологический коридор",
      euDescription:
        "Комплексное технологическое покрытие рынков ЕС с акцентом на глубокие технологии, исследования ИИ и инициативы цифровой трансформации, соединяющие Силиконовую долину с европейскими инновационными хабами.",
      euLeader: "Доктор Мария Шмидт",
      euTitle: "Директор по технологиям ЕС",
      euProject1: "Берлинский исследовательский хаб ИИ",
      euProject2: "Инновации зеленых технологий",
      euProject3: "Платформа цифрового здравоохранения",
      middleEastRegion: "Технологический мост Ближнего Востока",
      middleEastDescription:
        "Стратегическое технологическое присутствие в ОАЭ, Саудовской Аравии и Израиле с акцентом на финтех-инновации, технологии умных городов и соединение ближневосточных технологических экосистем с мировыми рынками.",
      meLeader: "Ахмед Аль-Рашид",
      meTitle: "Директор по технологиям MENA",
      meProject1: "Дубайская лаборатория финтех-инноваций",
      meProject2: "Саудовская инициатива умных городов",
      meProject3: "Израильский акселератор глубоких технологий",
      southAfricaRegion: "Африканские технологические ворота",
      southAfricaDescription:
        "Ворота на африканские технологические рынки с акцентом на инновации мобильных технологий, финтех-решения и соединение африканских стартапов с глобальными технологическими сетями.",
      saLeader: "Доктор Номса Мбеки",
      saTitle: "Директор по технологиям Африки",
      saProject1: "Технологический инновационный хаб Кейптауна",
      saProject2: "Мобильные финтех-решения",
      saProject3: "Африканский исследовательский центр ИИ",
      investmentSectors: "Технологические инвестиционные секторы",
      sectorsDescription:
        "Наш технологически ориентированный портфель охватывает множество быстрорастущих секторов, каждый из которых управляется специализированными командами с глубокой экспертизой в новых технологиях.",
      medicalSector: "Медицинские технологии и цифровое здравоохранение",
      medicalDescription: "ИИ-диагностика, телемедицина, цифровая терапия",
      newEnergySector: "Технологии чистой энергии",
      newEnergyDescription: "Умные сети, накопление энергии, инновации возобновляемых технологий",
      aiSector: "Искусственный интеллект и машинное обучение",
      aiDescription: "Глубокое обучение, компьютерное зрение, обработка естественного языка",
      fintechSector: "Финансовые технологии",
      fintechDescription: "Блокчейн, цифровые платежи, децентрализованные финансы",
      spaceSector: "Космические технологии и аэрокосмическая отрасль",
      spaceDescription: "Спутниковые технологии, освоение космоса, аэрокосмические инновации",
      quantumSector: "Квантовые вычисления и криптография",
      quantumDescription: "Квантовые алгоритмы, квантовое оборудование, квантовая безопасность",
      roboticsSector: "Робототехника и автоматизация",
      roboticsDescription: "Промышленная автоматизация, ИИ-робототехника, автономные системы",
      bioSector: "Биотехнологии и науки о жизни",
      bioDescription: "Редактирование генов, синтетическая биология, точная медицина",
    },
  }

  const currentLanguage = languages.find((lang) => lang.code === language)
  const content = languageContent[language]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 shadow-md">
        {/* Logo */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center focus:outline-none"
          aria-label="Back to Home"
        >
          <Image
            src="/logo/born_logo_white.png"
            alt="BORN International Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </button>

        {/* Navigation */}
        <div className="flex items-center space-x-6">


          <button
            onClick={() => router.push("/")}
            className="flex items-center space-x-2 text-white/90 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{content.backToHome}</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 relative">
        <div className="absolute inset-0">
          <Image
            src="/backgrounds/global_technology_background.jpg"
            alt="Global technology background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-3 sm:mb-4">{content.technologyGlobalization}</h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">{content.technologyGlobalizationDescription}</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
                          src="/backgrounds/bg-about.jpg"
            alt="Leadership background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96">
              <Image
                src="/investment-team/李文成_personal_page.jpg"
                alt="Dr. Li Wencheng"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="heading-serif text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6">{content.founderSection}</h2>
              <h3 className="text-2xl font-medium text-slate-800 mb-2">{content.founderName}</h3>
              <p className="text-lg text-blue-600 mb-6">{content.founderTitle}</p>
              <p className="text-lg text-slate-600 leading-relaxed">{content.founderDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eurasian Technology Hub Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
                          src="/backgrounds/bg-project-1.jpg"
            alt="Eurasian technology background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-serif text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6">{content.eurasianRegion}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{content.eurasianDescription}</p>
              <div className="mb-8">
                <h4 className="text-lg font-medium text-slate-800 mb-4">{content.keyProjects}</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-slate-700">{content.skolkovoPartnership}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    <span className="text-slate-700">{content.scoTechInitiative}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span className="text-slate-700">{content.crossBorderInnovation}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/global-connections-map.png"
                alt="Technology network map"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Technology Regions Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
                          src="/backgrounds/bg-team.jpg"
            alt="Global technology regions background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* EU Technology Corridor */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-medium text-slate-900">{content.euRegion}</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{content.euDescription}</p>
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-slate-500 mr-2" />
                    <span className="text-sm font-medium text-slate-700">{content.regionalLeader}</span>
                  </div>
                  <p className="text-lg font-medium text-slate-800">{content.euLeader}</p>
                  <p className="text-blue-600">{content.euTitle}</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-slate-700 mb-3">{content.keyProjects}</h5>
                  <div className="space-y-2">
                    <div className="text-sm text-slate-600">• {content.euProject1}</div>
                    <div className="text-sm text-slate-600">• {content.euProject2}</div>
                    <div className="text-sm text-slate-600">• {content.euProject3}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Middle East Tech Bridge */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-medium text-slate-900">{content.middleEastRegion}</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{content.middleEastDescription}</p>
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-slate-500 mr-2" />
                    <span className="text-sm font-medium text-slate-700">{content.regionalLeader}</span>
                  </div>
                  <p className="text-lg font-medium text-slate-800">{content.meLeader}</p>
                  <p className="text-orange-600">{content.meTitle}</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-slate-700 mb-3">{content.keyProjects}</h5>
                  <div className="space-y-2">
                    <div className="text-sm text-slate-600">• {content.meProject1}</div>
                    <div className="text-sm text-slate-600">• {content.meProject2}</div>
                    <div className="text-sm text-slate-600">• {content.meProject3}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* African Technology Gateway */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-medium text-slate-900">{content.southAfricaRegion}</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{content.southAfricaDescription}</p>
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-slate-500 mr-2" />
                    <span className="text-sm font-medium text-slate-700">{content.regionalLeader}</span>
                  </div>
                  <p className="text-lg font-medium text-slate-800">{content.saLeader}</p>
                  <p className="text-green-600">{content.saTitle}</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-slate-700 mb-3">{content.keyProjects}</h5>
                  <div className="space-y-2">
                    <div className="text-sm text-slate-600">• {content.saProject1}</div>
                    <div className="text-sm text-slate-600">• {content.saProject2}</div>
                    <div className="text-sm text-slate-600">• {content.saProject3}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Investment Sectors - Puzzle Layout */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
                          src="/backgrounds/bg-news.jpg"
            alt="Technology sectors background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-4">{content.investmentSectors}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{content.sectorsDescription}</p>
          </div>

          {/* Technology Puzzle Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {/* Row 1 - Medical Technology */}
            <Card className="col-span-2 relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="absolute inset-0">
                <Image
                  src="/medical-healthcare-background.png"
                  alt="Medical technology background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/80" />
              </div>
              <CardContent className="relative z-10 p-6 h-32 flex flex-col justify-center text-white">
                <h4 className="text-xl font-semibold mb-2">{content.medicalSector}</h4>
                <p className="text-base opacity-90">{content.medicalDescription}</p>
              </CardContent>
            </Card>

            {/* Clean Energy Technology */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="absolute inset-0">
                <Image src="/new-energy-background.png" alt="Clean energy background" fill className="object-cover" />
                <div className="absolute inset-0 bg-green-500/80" />
              </div>
              <CardContent className="relative z-10 p-6 h-32 flex flex-col justify-center text-white">
                <h4 className="text-xl font-semibold mb-2">{content.newEnergySector}</h4>
                <p className="text-base opacity-90">{content.newEnergyDescription}</p>
              </CardContent>
            </Card>

            {/* Artificial Intelligence */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="absolute inset-0">
                <Image src="/ai-background.png" alt="AI background" fill className="object-cover" />
                <div className="absolute inset-0 bg-purple-500/80" />
              </div>
              <CardContent className="relative z-10 p-6 h-32 flex flex-col justify-center text-white">
                <h4 className="text-xl font-semibold mb-2">{content.aiSector}</h4>
                <p className="text-base opacity-90">{content.aiDescription}</p>
              </CardContent>
            </Card>

            {/* Row 2 - Financial Technology */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="absolute inset-0">
                <Image src="/fintech-background.png" alt="FinTech background" fill className="object-cover" />
                <div className="absolute inset-0 bg-orange-500/80" />
              </div>
              <CardContent className="relative z-10 p-6 h-32 flex flex-col justify-center text-white">
                <h4 className="text-xl font-semibold mb-2">{content.fintechSector}</h4>
                <p className="text-base opacity-90">{content.fintechDescription}</p>
              </CardContent>
            </Card>

            {/* Space Technology */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="absolute inset-0">
                <Image
                  src="/space-technology-background.png"
                  alt="Space technology background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-indigo-500/80" />
              </div>
              <CardContent className="relative z-10 p-6 h-32 flex flex-col justify-center text-white">
                <h4 className="text-xl font-semibold mb-2">{content.spaceSector}</h4>
                <p className="text-base opacity-90">{content.spaceDescription}</p>
              </CardContent>
            </Card>

            {/* Quantum Computing */}
            <Card className="col-span-2 relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="absolute inset-0">
                <Image
                  src="/quantum-computing-background.png"
                  alt="Quantum computing background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-pink-500/80" />
              </div>
              <CardContent className="relative z-10 p-6 h-32 flex flex-col justify-center text-white">
                <h4 className="text-xl font-semibold mb-2">{content.quantumSector}</h4>
                <p className="text-base opacity-90">{content.quantumDescription}</p>
              </CardContent>
            </Card>

            {/* Row 3 - Robotics */}
            <Card className="col-span-2 relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="absolute inset-0">
                <Image src="/robotics-background.png" alt="Robotics background" fill className="object-cover" />
                <div className="absolute inset-0 bg-teal-500/80" />
              </div>
              <CardContent className="relative z-10 p-6 h-32 flex flex-col justify-center text-white">
                <h4 className="text-xl font-semibold mb-2">{content.roboticsSector}</h4>
                <p className="text-base opacity-90">{content.roboticsDescription}</p>
              </CardContent>
            </Card>

            {/* Biotechnology */}
            <Card className="col-span-2 relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="absolute inset-0">
                <Image
                  src="/biotechnology-background.png"
                  alt="Biotechnology background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-red-500/80" />
              </div>
              <CardContent className="relative z-10 p-6 h-32 flex flex-col justify-center text-white">
                <h4 className="text-xl font-semibold mb-2">{content.bioSector}</h4>
                <p className="text-base opacity-90">{content.bioDescription}</p>
              </CardContent>
            </Card>
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
