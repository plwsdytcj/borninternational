"use client"
import { useState, useEffect } from "react"
import { ResponsibleInvestmentBlurb } from "@/components/responsible-investment-blurb"
import { ViSecondaryShell } from "@/components/vi-secondary-shell"
import { MapPin, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function GlobalPage() {
  const [language, setLanguage] = useState<"en" | "ru">("en")

  const languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
  ]

  const languageContent = {
    en: {
      technologyGlobalization: "Cross-Border Technology Network",
      technologyGlobalizationDescription:
        "We take Chinese hard-tech companies from domestic product-market fit to regulated overseas execution through SCO channels, local operators, and project-level market access.",
      backToHome: "Back to Home",
      founderSection: "Leadership",
      founderName: "Dr. Li Wencheng",
      founderTitle: "PhD/Founding Partner",
      founderDescription:
        "Dr. Li Wencheng is the founding partner behind Born Capital and Born International. He invests in Chinese hard tech and builds the cross-border routes, local relationships, and operating teams needed to land those companies in overseas markets.",
      eurasianRegion: "Russia & CIS Corridor",
      eurasianDescription:
        "Our primary corridor: Chinese AI, robotics, quantum, climate, and industrial systems entering Russia, Central Asia, and SCO member markets through policy-backed channels and local execution.",
      regionalLeader: "Regional Leader",
      keyProjects: "Active Channels",
      skolkovoPartnership: "Skolkovo and research-institute introductions",
      scoTechInitiative: "SCO-linked policy and industry access",
      crossBorderInnovation: "Cross-border fintech and settlement structures",
      euRegion: "European Compliance Corridor",
      euDescription:
        "Selective EU work for companies that already have traction in China or Eurasia and need certification, channel partners, or pilot customers rather than generic 'global expansion'.",
      euLeader: "Dr. Maria Schmidt",
      euTitle: "EU Technology Director",
      euProject1: "Certification and compliance pathways",
      euProject2: "Industrial distributor partnerships",
      euProject3: "Pilot projects with local buyers",
      middleEastRegion: "Middle East Project Corridor",
      middleEastDescription:
        "We pursue the Gulf selectively, focusing on project owners, sovereign-linked buyers, and local sponsors for Chinese fintech, energy, and industrial technology companies.",
      meLeader: "Ahmed Al-Rashid",
      meTitle: "MENA Technology Director",
      meProject1: "Government-linked commercial introductions",
      meProject2: "Local sponsor and JV structuring",
      meProject3: "Project-owner sales channels",
      southAfricaRegion: "Africa Entry Gateway",
      southAfricaDescription:
        "We treat Africa as a targeted channel strategy: telecom, payments, logistics, and industrial partners first, broad market claims second.",
      saLeader: "Dr. Nomsa Mbeki",
      saTitle: "Africa Technology Director",
      saProject1: "Telecom and enterprise channels",
      saProject2: "Payments and settlement partners",
      saProject3: "Infrastructure-adjacent buyers",
      investmentSectors: "Sectors We Can Commercialize Cross-Border",
      sectorsDescription:
        "We focus on sectors where Chinese technical advantage can translate into procurement, distribution, licensing, or joint-venture demand overseas.",
      medicalSector: "Medical Technology & Digital Health",
      medicalDescription: "Diagnostics, devices, and digital health products that can clear local partners and regulators",
      newEnergySector: "Clean Energy Technology",
      newEnergyDescription: "Grid equipment, storage systems, and project developers that can localize procurement",
      aiSector: "Artificial Intelligence & Machine Learning",
      aiDescription: "Applied models for enterprise workflows, industrial systems, and regulated sectors",
      fintechSector: "Financial Technology",
      fintechDescription: "Payments, identity, settlement, and blockchain rails for cross-border transactions",
      spaceSector: "Space Technology & Aerospace",
      spaceDescription: "Satellite components, sensing systems, and aerospace supply-chain entry points",
      quantumSector: "Quantum Computing & Cryptography",
      quantumDescription: "Quantum hardware, communications, and security with state and research demand",
      roboticsSector: "Robotics & Automation",
      roboticsDescription: "Industrial robots, sensing, and embodied systems with local manufacturing demand",
      bioSector: "Biotechnology & Life Sciences",
      bioDescription: "Biotech tools, MedTech platforms, and translational research partnerships",
    },
    ru: {
      technologyGlobalization: "Трансграничная технологическая сеть",
      technologyGlobalizationDescription:
        "Мы переводим китайские hard-tech компании от внутреннего product-market fit к регулируемому зарубежному исполнению через каналы ШОС, локальные команды и доступ к проектному спросу.",
      backToHome: "Вернуться на главную",
      founderSection: "Руководство",
      founderName: "Доктор Ли Вэньчэн",
      founderTitle: "PhD / Партнер-основатель",
      founderDescription:
        "Доктор Ли Вэньчэн — основатель Born Capital и Born International. Он инвестирует в китайский hard tech и выстраивает трансграничные маршруты, локальные связи и операционные команды, необходимые для вывода таких компаний на зарубежные рынки.",
      eurasianRegion: "Коридор Россия и СНГ",
      eurasianDescription:
        "Наш основной коридор: вывод китайских AI-, робототехнических, квантовых, климатических и промышленных решений в Россию, Центральную Азию и страны ШОС через каналы, поддержанные политикой, и локальное исполнение.",
      regionalLeader: "Региональный руководитель",
      keyProjects: "Активные каналы",
      skolkovoPartnership: "Входы в Сколково и исследовательские институты",
      scoTechInitiative: "Доступ к политике и индустрии через ШОС",
      crossBorderInnovation: "Трансграничные финтех- и расчетные структуры",
      euRegion: "Европейский коридор соответствия",
      euDescription:
        "Избирательная работа по ЕС для компаний, у которых уже есть traction в Китае или Евразии и которым нужны сертификация, канальные партнеры или пилотные клиенты, а не абстрактная 'глобальная экспансия'.",
      euLeader: "Доктор Мария Шмидт",
      euTitle: "Директор по технологиям ЕС",
      euProject1: "Сертификация и compliance-пути",
      euProject2: "Партнерства с промышленными дистрибьюторами",
      euProject3: "Пилотные проекты с локальными покупателями",
      middleEastRegion: "Ближневосточный проектный коридор",
      middleEastDescription:
        "В странах Залива мы работаем выборочно, делая упор на project owners, квазисуверенных покупателей и локальных спонсоров для китайских финтех-, энергетических и промышленных технологических компаний.",
      meLeader: "Ахмед Аль-Рашид",
      meTitle: "Директор по технологиям MENA",
      meProject1: "Коммерческие интро через госканалы",
      meProject2: "Локальные спонсоры и структура СП",
      meProject3: "Каналы продаж через project owners",
      southAfricaRegion: "Африканская точка входа",
      southAfricaDescription:
        "Африку мы рассматриваем как точечную канальную стратегию: сначала телеком, платежи, логистика и промышленные партнеры, а уже потом широкие рыночные заявления.",
      saLeader: "Доктор Номса Мбеки",
      saTitle: "Директор по технологиям Африки",
      saProject1: "Телеком- и enterprise-каналы",
      saProject2: "Платежные и расчетные партнеры",
      saProject3: "Покупатели рядом с инфраструктурными проектами",
      investmentSectors: "Сектора, которые мы умеем коммерциализировать трансгранично",
      sectorsDescription:
        "Мы фокусируемся на секторах, где китайское технологическое преимущество может превратиться в зарубежный спрос на закупки, дистрибуцию, лицензирование или совместные предприятия.",
      medicalSector: "Медицинские технологии и цифровое здравоохранение",
      medicalDescription: "Диагностика, устройства и digital health-продукты, которые могут пройти через локальных партнеров и регуляторов",
      newEnergySector: "Технологии чистой энергии",
      newEnergyDescription: "Сетевое оборудование, storage-системы и project developers с возможностью локализации закупок",
      aiSector: "Искусственный интеллект и машинное обучение",
      aiDescription: "Прикладные модели для enterprise-процессов, промышленных систем и регулируемых отраслей",
      fintechSector: "Финансовые технологии",
      fintechDescription: "Платежи, идентификация, расчеты и блокчейн-рельсы для трансграничных транзакций",
      spaceSector: "Космические технологии и аэрокосмическая отрасль",
      spaceDescription: "Спутниковые компоненты, sensing-системы и точки входа в аэрокосмические цепочки поставок",
      quantumSector: "Квантовые вычисления и криптография",
      quantumDescription: "Квантовое оборудование, коммуникации и безопасность со спросом со стороны государства и research-среды",
      roboticsSector: "Робототехника и автоматизация",
      roboticsDescription: "Промышленные роботы, сенсоры и embodied-системы под локальный производственный спрос",
      bioSector: "Биотехнологии и науки о жизни",
      bioDescription: "Биотех-инструменты, MedTech-платформы и партнерства в прикладных исследованиях",
    },
  }

  const content = languageContent[language]

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <ViSecondaryShell
      sidebarKicker="Cross-Border"
      pageTitle={content.technologyGlobalization}
      headerExtra={langToggle}
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 md:pt-12 pb-4">
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
          {content.technologyGlobalizationDescription}
        </p>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
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
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
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
      <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
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
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
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
                  <a href="/contact" className="hover:text-white">Contact</a>
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
