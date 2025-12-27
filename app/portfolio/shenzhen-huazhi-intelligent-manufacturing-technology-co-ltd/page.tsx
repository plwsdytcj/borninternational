"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HuazhiPage() {
  const router = useRouter()
  const [language] = useState<"en" | "zh">("en")

  const languageContent = {
    en: {
      companyName: "Shenzhen Huazhi Intelligent Manufacturing Technology Co., LTD.",
      backToPortfolio: "Back to Portfolio",
      visitWebsite: "Visit Website",
      previousCompany: "Previous: Shanghai Droid Robotics",
      nextCompany: "Next: Chengdu Zhongkang",
      companyDescription:
        "Shenzhen Huazhi Intelligent Manufacturing Technology Co., LTD. is a global leader in the industrial internet ecosystem, headquartered in Shenzhen, China. Committed to global technological innovation, it has established overseas offices and research institutes in countries including Germany, Japan, and the USA.",
      technicalAchievements:
        "With its core platform, 'Huazhi Cloud', the company focuses on scenarios such as equipment interconnection, manufacturing collaboration, operational management, and data intelligence, delivering open, flexible, user-friendly, and secure digital solutions. It has contributed to national standards for industrial internet edge computing and supported a 'Lighthouse Factory' recognition in its sector.",
      logo: "/company-logos/shenzhen-huazhi-intelligent-manufacturing-technology-co-ltd-logo.jpeg",
    },
    zh: {
      companyName: "华制智能",
      backToPortfolio: "返回投资组合",
      visitWebsite: "进入官网",
      previousCompany: "上一篇：卓益得",
      nextCompany: "下一篇：中康达成",
      companyDescription:
        "华制智能是工业互联网生态领军企业，总部位于深圳，致力于全球科技创新，并在德国、日本、美国等设立海外机构。",
      technicalAchievements:
        "核心平台“华制云”聚焦设备互联、制造协同、运营管控与数据智能，提供开放、灵活、易用、安全的企业数字化解决方案。参与制定工业互联网边缘计算国家标准，助力行业“灯塔工厂”建设。",
      logo: "/company-logos/shenzhen-huazhi-intelligent-manufacturing-technology-co-ltd-logo.jpeg",
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
  const handlePreviousClick = () => router.push("/portfolio/shanghai-droid-robotics-co-ltd-droidup")
  const handleNextClick = () => router.push("/portfolio/chengdu-zhongkang-dacheng-environmental-protection-technology-co-ltd")

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
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3" onClick={() => { if (typeof window !== 'undefined') window.open("https://www.ehz.cn/", "_blank") }}>
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
