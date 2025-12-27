"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function ZhongkangPage() {
  const router = useRouter()
  const [language] = useState<"en" | "zh">("en")

  const languageContent = {
    en: {
      companyName: "Chengdu Zhongkang Dacheng Environmental Protection Technology Co., Ltd.",
      backToPortfolio: "Back to Portfolio",
      visitWebsite: "Visit Website",
      previousCompany: "Previous: Shenzhen Huazhi",
      nextCompany: "Next: China Carbon Zero",
      companyDescription:
        "Chengdu Zhongkang Dacheng Environmental Protection Technology Co., Ltd., established in 2018, is an innovative enterprise focused on deeply integrating digital IoT technology with the tobacco industry. Headquartered in Chengdu, the company secured venture capital investment, including from the Chengdu Jinniu State-owned Investment Group, the following year, reflecting strong growth potential.",
      technicalAchievements:
        "The company provides end-to-end solutions across smart retail terminals, smoking cabins, age-verification payment terminals, and smart store systems, with involvement in new energy storage. It has deployed 10,000+ intelligent devices and expanded operations across multiple provinces, establishing a mature full-chain model covering hardware, software, and operations.",
      logo: "/company-logos/chengdu-zhongkang-dacheng-environmental-protection-technology-co-ltd-logo.png",
    },
    zh: {
      companyName: "Chengdu Zhongkang Dacheng Environmental Protection Technology Co., Ltd.",
      backToPortfolio: "返回投资组合",
      visitWebsite: "进入官网",
      previousCompany: "上一篇：华制智能",
      nextCompany: "下一篇：中国零碳科技集团",
      companyDescription:
        "成都中康达成环保科技有限公司成立于2018年，聚焦数字物联网技术与烟草行业的深度融合，总部位于成都。公司于次年获得含金牛国投在内的创投投资，展现出强劲的成长潜力。",
      technicalAchievements:
        "围绕智能零售终端、文明吸烟环境、智能物流配送等场景，提供“硬件+软件+运营”的全链路解决方案，已累计部署运营1万余台智能设备，业务覆盖重庆、云南、四川、甘肃、山东、浙江、安徽等多个省份。",
      logo: "/company-logos/chengdu-zhongkang-dacheng-environmental-protection-technology-co-ltd-logo.png",
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
  const handlePreviousClick = () => router.push("/portfolio/shenzhen-huazhi-intelligent-manufacturing-technology-co-ltd")
  const handleNextClick = () => router.push("/portfolio/china-carbon-zero-and-technology-group")

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
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3" onClick={() => { if (typeof window !== 'undefined') window.open("http://cdzkdc.com/", "_blank") }}>
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
