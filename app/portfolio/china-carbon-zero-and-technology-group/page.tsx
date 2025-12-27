"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function CarbonZeroPage() {
  const router = useRouter()
  const [language] = useState<"en" | "zh">("en")

  const languageContent = {
    en: {
      companyName: "China Carbon Zero and Technology Group",
      backToPortfolio: "Back to Portfolio",
      visitWebsite: "Visit Website",
      previousCompany: "Previous: Chengdu Zhongkang",
      nextCompany: "Next: BOSON Quantum",
      companyDescription:
        "China Carbon Zero and Technology Group, established in Beijing in 2015, is a leading comprehensive service provider in China specializing in carbon asset development and trading. Its founding team possesses extensive experience in the carbon asset field, offering full-spectrum carbon management, carbon trading, and carbon neutrality solutions for enterprises and governments.",
      technicalAchievements:
        "The company covers carbon management consulting, carbon asset development (CCER, VCS projects), market trading, and carbon finance. Its self-developed data platform integrates blockchain and big data to digitalize monitoring, accounting, and trading. As a partner of Tsinghua University's Globalization Center, it co-publishes industry reports and helps shape carbon trading standards.",
      logo: "/company-logos/china-carbon-zero-and-technology-group-logo.png",
    },
    zh: {
      companyName: "China Carbon Zero and Technology Group",
      backToPortfolio: "返回投资组合",
      visitWebsite: "进入官网",
      previousCompany: "上一篇：中康达成",
      nextCompany: "下一篇：玻色量子",
      companyDescription:
        "中国零碳科技集团成立于2015年，面向企业与政府提供碳资产开发与交易的一体化服务，团队具备丰富行业经验，提供碳管理、碳交易与碳中和全链条解决方案。",
      technicalAchievements:
        "业务覆盖碳管理咨询、碳资产开发（如CCER、VCS项目）、市场交易与碳金融。自研碳数据平台融合区块链与大数据，实现监测、核算与交易的数字化与智能化，并与清华大学全球化中心合作发布行业报告、参与标准制定。",
      logo: "/company-logos/china-carbon-zero-and-technology-group-logo.png",
    },
  }

  const content = languageContent[language]

  useEffect(() => { if (typeof window !== 'undefined') window.scrollTo(0, 0) }, [])

  const handleReturnToList = () => {
    router.push("/portfolio")
    setTimeout(() => {
      const element = document.getElementById("portfolio-companies")
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }
  const handlePreviousClick = () => router.push("/portfolio/chengdu-zhongkang-dacheng-environmental-protection-technology-co-ltd")
  const handleNextClick = () => router.push("/portfolio/boson-quantum")

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 shadow-md">
        <button onClick={() => router.push("/")} className="flex items-center focus:outline-none" aria-label="Back to Home">
          <Image src="/logo/born_logo_white.png" alt="BORN International Logo" width={180} height={60} className="h-12 w-auto" />
        </button>
        <div className="flex items-center space-x-6">
          <button onClick={() => router.push("/portfolio")} className="flex items-center space-x-2 text-white/90 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{content.backToPortfolio}</span>
          </button>
        </div>
      </header>

      <section className="py-16 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/backgrounds/office-background.jpg')" }}>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="heading-serif text-5xl lg:text-6xl font-light tracking-tight text-white">Investment Services</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="bg-transparent rounded-lg p-12 flex items-center justify-center relative h-96">
              <Image src={content.logo} alt={content.companyName + " logo"} fill className="object-contain" />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="heading-serif text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6">{content.companyName}</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">{content.companyDescription}</p>
                <p className="text-lg text-slate-700 leading-relaxed">{content.technicalAchievements}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3" onClick={() => { if (typeof window !== 'undefined') window.open("#", "_blank") }}>
                  {content.visitWebsite}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="bg-amber-600 hover:bg-amber-700 text-white border-amber-600 px-8 py-3" onClick={handleReturnToList}>
                  {language === "zh" ? "返回列表" : "Return to List"}
                </Button>
              </div>

              {/* Navigation */}
              <div className="space-y-3 pt-8">
                <button onClick={handlePreviousClick} className="w-full bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded transition-colors text-left">{content.previousCompany}</button>
                <button onClick={handleNextClick} className="w-full bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded transition-colors text-left">{content.nextCompany}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Image src="/logo/born_logo_white.png" alt="BORN International Logo" width={180} height={60} className="h-12 w-auto brightness-0 invert" />
              </div>
              <p className="text-slate-400 text-sm">A global investment platform focusing on early-stage high-tech startups.</p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 Born International. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
