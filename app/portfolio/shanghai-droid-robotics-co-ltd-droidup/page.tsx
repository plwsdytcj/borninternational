"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function DroidRoboticsPage() {
  const router = useRouter()
  const [language] = useState<"en" | "zh">("en")

  const languageContent = {
    en: {
      companyName: "Shanghai Droid Robotics Co., Ltd. (DroidUp)",
      backToPortfolio: "Back to Portfolio",
      visitWebsite: "Visit Website",
      previousCompany: "Previous: Token Cloud",
      nextCompany: "Next: Shenzhen Huazhi",
      companyDescription:
        "Shanghai Droid Robotics Co., Ltd. (DroidUp) is an innovative enterprise focused on the research and development, production, and sales of general-purpose humanoid robots. The company possesses internationally advanced multi-modal AI limb bionic technology and is dedicated to providing world-leading embodied intelligence solutions for applications in sectors such as science education, industrial manufacturing, commercial services, and health rehabilitation through its highly efficient humanoid robots.",
      technicalAchievements:
        "The company's R&D team has over 20 years of technical accumulation and talent reserves in bipedal motion control and cross-modal task learning. Its primary product lines include general-purpose humanoid robot platforms, highly realistic expression robots, and skill development and teaching platforms for humanoid robots. The company has spearheaded landmark products: the X02 (tendon-driven full-size bipedal humanoid), Rena (mass-producible full-DoF expression robot), and the X01 (Walker No. 1) which set a Guinness World Record by walking over 100 km.",
      logo: "/company-logos/shanghai-droid-robotics-co-ltd-droidup-logo.jpeg",
    },
    zh: {
      companyName: "卓益得",
      backToPortfolio: "返回投资组合",
      visitWebsite: "进入官网",
      previousCompany: "上一篇：令牌云",
      nextCompany: "下一篇：华制智能",
      companyDescription:
        "卓益得专注于通用人形机器人的研发、生产与销售，具备国际领先的多模态AI四肢仿生技术，面向科教、工业制造、商业服务、康复医疗等场景提供高效的人形机器人 embodied intelligence 解决方案。",
      technicalAchievements:
        "团队在双足运动控制与跨模态任务学习领域有20余年技术积累，产品包括通用人形机器人平台、高拟真表情机器人、人形机器人技能开发与教学平台。代表性产品：X02（腱驱动全尺寸双足机器人）、Rena（可量产的全自由度表情机器人）、X01（Walker No.1，连续行走超过100公里，创吉尼斯纪录）。",
      logo: "/company-logos/shanghai-droid-robotics-co-ltd-droidup-logo.jpeg",
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
  const handlePreviousClick = () => router.push("/portfolio/token-cloud-shanghai-technology-co-ltd")
  const handleNextClick = () => router.push("/portfolio/shenzhen-huazhi-intelligent-manufacturing-technology-co-ltd")

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
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3" onClick={() => { if (typeof window !== 'undefined') window.open("https://www.droidup.com/", "_blank") }}>
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
