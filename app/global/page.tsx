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
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ]

  const languageContent = {
    en: {
      globalNetwork: "Global Network",
      globalNetworkDescription:
        "Our worldwide presence enables us to identify opportunities and manage investments across diverse markets and sectors",
      backToHome: "Back to Home",
      founderSection: "Leadership",
      founderName: "Dr. Li Wencheng",
      founderTitle: "PhD/Founding Partner",
      founderDescription:
        "Dr. Li Wencheng graduated from East China University of Science and Technology, obtained a master's degree from Tsinghua University, and a doctorate degree from Zhejiang University. He then taught at Hohai University. He has many years of experience in the investment field.",
      eurasianRegion: "Eurasian Region",
      eurasianDescription:
        "Strategic partnerships across Russia, Central Asia, and the Shanghai Cooperation Organization (SCO) member states, with a focus on technology transfer and cross-border innovation.",
      regionalLeader: "Regional Leader",
      keyProjects: "Key Projects",
      skolkovoPartnership: "Skolkovo Innovation Center Partnership",
      scoTechInitiative: "SCO Technology Initiative",
      crossBorderInnovation: "Cross-border Innovation Fund",
      euRegion: "European Union",
      euDescription:
        "Comprehensive coverage across EU markets with focus on deep tech, sustainability, and digital transformation initiatives.",
      euLeader: "Dr. Maria Schmidt",
      euTitle: "EU Regional Director",
      euProject1: "Berlin Tech Hub",
      euProject2: "Green Energy Initiative",
      euProject3: "Digital Health Platform",
      middleEastRegion: "Middle East",
      middleEastDescription:
        "Strategic presence in UAE, Saudi Arabia, and Israel, focusing on fintech, energy transition, and smart city technologies.",
      meLeader: "Ahmed Al-Rashid",
      meTitle: "MENA Regional Director",
      meProject1: "Dubai Fintech Accelerator",
      meProject2: "Saudi Vision 2030 Fund",
      meProject3: "Israeli Deep Tech",
      southAfricaRegion: "South Africa",
      southAfricaDescription:
        "Gateway to African markets with emphasis on mobile technology, renewable energy, and financial inclusion solutions.",
      saLeader: "Dr. Nomsa Mbeki",
      saTitle: "Africa Regional Director",
      saProject1: "Cape Town Innovation Hub",
      saProject2: "Mobile Banking Solutions",
      saProject3: "Solar Energy Projects",
      investmentSectors: "Investment Sectors",
      sectorsDescription:
        "Our diversified portfolio spans multiple high-growth sectors, each managed by specialized teams with deep domain expertise.",
      medicalSector: "Medical & Healthcare",
      medicalDescription: "Biotechnology, medical devices, digital health",
      newEnergySector: "New Energy",
      newEnergyDescription: "Solar, wind, battery technology, smart grid",
      aiSector: "Artificial Intelligence",
      aiDescription: "Machine learning, computer vision, NLP",
      fintechSector: "FinTech",
      fintechDescription: "Digital payments, blockchain, insurtech",
      spaceSector: "Space Technology",
      spaceDescription: "Satellites, space exploration, aerospace",
      quantumSector: "Quantum Computing",
      quantumDescription: "Quantum algorithms, hardware, cryptography",
      roboticsSector: "Robotics",
      roboticsDescription: "Industrial automation, service robots",
      bioSector: "Biotechnology",
      bioDescription: "Gene therapy, synthetic biology, pharmaceuticals",
    },
    ru: {
      globalNetwork: "Глобальная сеть",
      globalNetworkDescription:
        "Наше всемирное присутствие позволяет нам выявлять возможности и управлять инвестициями на различных рынках и в различных секторах",
      backToHome: "Вернуться на главную",
      founderSection: "Руководство",
      founderName: "Доктор Ли Вэньчэн",
      founderTitle: "博士/创始合伙人",
      founderDescription:
        "Доктор Ли Вэньчэн окончил Восточно-Китайский научно-технологический университет, получил степень магистра в Университете Цинхуа и докторскую степень в Чжэцзянском университете. Затем он преподавал в Университете Хохай. Имеет многолетний опыт работы в сфере инвестиций.",
      eurasianRegion: "Евразийский регион",
      eurasianDescription:
        "Стратегические партнерства в России, Центральной Азии и государствах-членах Шанхайской организации сотрудничества (ШОС) с акцентом на передачу технологий и трансграничные инновации.",
      regionalLeader: "Региональный руководитель",
      keyProjects: "Ключевые проекты",
      skolkovoPartnership: "Партнерство с инновационным центром Сколково",
      scoTechInitiative: "Технологическая инициатива ШОС",
      crossBorderInnovation: "Трансграничный инновационный фонд",
      euRegion: "Европейский Союз",
      euDescription:
        "Комплексное покрытие рынков ЕС с акцентом на глубокие технологии, устойчивость и инициативы цифровой трансформации.",
      euLeader: "Доктор Мария Шмидт",
      euTitle: "Региональный директор ЕС",
      euProject1: "Берлинский технологический хаб",
      euProject2: "Инициатива зеленой энергии",
      euProject3: "Платформа цифрового здравоохранения",
      middleEastRegion: "Ближний Восток",
      middleEastDescription:
        "Стратегическое присутствие в ОАЭ, Саудовской Аравии и Израиле с акцентом на финтех, энергетический переход и технологии умных городов.",
      meLeader: "Ахмед Аль-Рашид",
      meTitle: "Региональный директор MENA",
      meProject1: "Дубайский финтех-акселератор",
      meProject2: "Фонд Saudi Vision 2030",
      meProject3: "Израильские глубокие технологии",
      southAfricaRegion: "Южная Африка",
      southAfricaDescription:
        "Ворота на африканские рынки с акцентом на мобильные технологии, возобновляемую энергию и решения финансовой инклюзии.",
      saLeader: "Доктор Номса Мбеки",
      saTitle: "Региональный директор Африки",
      saProject1: "Инновационный хаб Кейптауна",
      saProject2: "Решения мобильного банкинга",
      saProject3: "Проекты солнечной энергии",
      investmentSectors: "Инвестиционные секторы",
      sectorsDescription:
        "Наш диверсифицированный портфель охватывает множество быстрорастущих секторов, каждый из которых управляется специализированными командами с глубокой экспертизой в предметной области.",
      medicalSector: "Медицина и здравоохранение",
      medicalDescription: "Биотехнологии, медицинские устройства, цифровое здравоохранение",
      newEnergySector: "Новая энергетика",
      newEnergyDescription: "Солнечная, ветровая, аккумуляторные технологии, умные сети",
      aiSector: "Искусственный интеллект",
      aiDescription: "Машинное обучение, компьютерное зрение, NLP",
      fintechSector: "ФинТех",
      fintechDescription: "Цифровые платежи, блокчейн, иншуртех",
      spaceSector: "Космические технологии",
      spaceDescription: "Спутники, освоение космоса, аэрокосмическая отрасль",
      quantumSector: "Квантовые вычисления",
      quantumDescription: "Квантовые алгоритмы, аппаратное обеспечение, криптография",
      roboticsSector: "Робототехника",
      roboticsDescription: "Промышленная автоматизация, сервисные роботы",
      bioSector: "Биотехнологии",
      bioDescription: "Генная терапия, синтетическая биология, фармацевтика",
    },
  }

  const currentLanguage = languages.find((lang) => lang.code === language)
  const content = languageContent[language]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
            onClick={() => router.push("/")}
            className="flex items-center space-x-2 text-slate-700 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{content.backToHome}</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-light text-slate-900 mb-4">{content.globalNetwork}</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{content.globalNetworkDescription}</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-about.jpg-2hyE8NdGkxzIQSS4VEkbg8kOLVCHLc.jpeg"
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9D%8E%E6%96%87%E6%88%90_personal_page.jpg-xnjsolH3mlT6TbQOp4Uj6JmxaocRLb.jpeg"
                alt="Dr. Li Wencheng"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-light text-slate-900 mb-6">{content.founderSection}</h2>
              <h3 className="text-2xl font-medium text-slate-800 mb-2">{content.founderName}</h3>
              <p className="text-lg text-blue-600 mb-6">{content.founderTitle}</p>
              <p className="text-lg text-slate-600 leading-relaxed">{content.founderDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eurasian Region Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-project-1.jpg-5pKSekMyOcL9dgqTYiKvt87dgPjdfE.jpeg"
            alt="Eurasian region background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-slate-900 mb-6">{content.eurasianRegion}</h2>
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
                alt="Eurasian region map"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Regions Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-team.jpg-FFtzNndblQESuAOG6YmZfud8aifb3C.jpeg"
            alt="Global regions background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* EU Region */}
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

            {/* Middle East Region */}
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

            {/* South Africa Region */}
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

      {/* Investment Sectors - Puzzle Layout */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-news.jpg-ON5Qw1v7OOmi2Dh0yvecBVt1bqQ1iK.jpeg"
            alt="Investment sectors background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">{content.investmentSectors}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{content.sectorsDescription}</p>
          </div>

          {/* Puzzle Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {/* Row 1 - Medical & Healthcare */}
            <Card className="col-span-2 relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="absolute inset-0">
                <Image
                  src="/medical-healthcare-background.png"
                  alt="Medical healthcare background"
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

            {/* New Energy */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="absolute inset-0">
                <Image src="/new-energy-background.png" alt="New energy background" fill className="object-cover" />
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

            {/* Row 2 - FinTech */}
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
