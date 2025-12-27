"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function TokenCloudPage() {
  const router = useRouter()
  const [language] = useState<"en" | "zh">("en")

  const languageContent = {
    en: {
      companyName: "Token Cloud (Shanghai) Technology Co., Ltd.",
      backToPortfolio: "Back to Portfolio",
      visitWebsite: "Visit Website",
      previousCompany: "Previous: Kunwei Technology",
      nextCompany: "Next: Shanghai Droid Robotics",
      companyDescription:
        "Token Cloud (Shanghai) Technology Co., Ltd. is a high-tech enterprise specializing in digital identity authentication. With the mission of \"enabling smarter enterprises to adopt more secure authentication,\" the company is committed to providing world-leading trusted identity solutions for industries such as finance, government affairs, and hospitality.",
      technicalAchievements:
        "Its core products include ID card chip authentication leveraging authoritative Ministry of Public Security data, global passport chip authentication, and a biometric-free TMFA solution for highly trusted device security. The company's technology effectively verifies document authenticity, defends against AI attacks, and ensures 100% accuracy and compliance in information collection. Holding rare operational qualifications in China, Token Cloud's solutions have been successfully deployed by numerous Fortune 500 companies and banking institutions, demonstrating significant achievements in enhancing operational efficiency and security.",
      logo: "/company-logos/token-cloud-shanghai-technology-co-ltd-logo.png",
    },
    zh: {
      companyName: "令牌云",
      backToPortfolio: "返回投资组合",
      visitWebsite: "进入官网",
      previousCompany: "上一篇：坤维科技",
      nextCompany: "下一篇：卓益得",
      companyDescription:
        "Token Cloud（上海）科技有限公司是一家专注于数字身份认证的高科技企业。公司以“让企业更智慧地采用更安全的认证”为使命，致力于为金融、政务、酒店等行业提供世界领先的可信身份解决方案。",
      technicalAchievements:
        "核心产品包括基于公安部权威数据的身份证芯片认证、全球护照芯片认证，以及无需生物识别的TMFA高可信设备安全方案。技术可有效识别证件真伪、抵御AI攻击，并保障信息采集100%准确与合规。公司持有国内稀缺的相关运营资质，解决方案已在多家世界500强企业与银行机构落地应用，显著提升运营效率与安全性。",
      logo: "/company-logos/token-cloud-shanghai-technology-co-ltd-logo.png",
    },
  }

  const content = languageContent[language]

  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0)
  }, [])

  const handleReturnToList = () => {
    router.push("/portfolio")
    setTimeout(() => {
      const element = document.getElementById("portfolio-companies")
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }
  const handlePreviousClick = () => {
    router.push("/portfolio/kunwei-technology")
  }
  const handleNextClick = () => {
    router.push("/portfolio/shanghai-droid-robotics-co-ltd-droidup")
  }

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
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3" onClick={() => { if (typeof window !== 'undefined') window.open("https://www.eidtokencloud.com/#/", "_blank") }}>
                  {content.visitWebsite}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="bg-amber-600 hover:bg-amber-700 text-white border-amber-600 px-8 py-3" onClick={handleReturnToList}>
                  {language === "zh" ? "返回列表" : "Return to List"}
                </Button>
              </div>

              {/* Navigation */}
              <div className="space-y-3 pt-8">
                <button onClick={handlePreviousClick} className="w-full bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded transition-colors text-left">
                  {content.previousCompany}
                </button>
                <button onClick={handleNextClick} className="w-full bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded transition-colors text-left">
                  {content.nextCompany}
                </button>
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
