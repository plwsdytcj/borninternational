"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { PortfolioDetailLayout } from "@/components/portfolio-detail-layout"

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
    <PortfolioDetailLayout
      backToPortfolioLabel={content.backToPortfolio}
      heroTitle="Investment Services"
      companyName={content.companyName}
      bodySections={[content.companyDescription, content.technicalAchievements]}
      logoSrc={content.logo}
      logoAlt={`${content.companyName} logo`}
      visitWebsiteLabel={content.visitWebsite}
      visitWebsiteHref="https://www.droidup.com/"
      returnToListLabel={language === "zh" ? "返回列表" : "Return to List"}
      previousLabel={content.previousCompany}
      previousHref="/portfolio/token-cloud-shanghai-technology-co-ltd"
      nextLabel={content.nextCompany}
      nextHref="/portfolio/shenzhen-huazhi-intelligent-manufacturing-technology-co-ltd"
    />
  )
}
