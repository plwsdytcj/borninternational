"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { PortfolioDetailLayout } from "@/components/portfolio-detail-layout"

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
    <PortfolioDetailLayout
      backToPortfolioLabel={content.backToPortfolio}
      heroTitle="Investment Services"
      companyName={content.companyName}
      bodySections={[content.companyDescription, content.technicalAchievements]}
      logoSrc={content.logo}
      logoAlt={`${content.companyName} logo`}
      visitWebsiteLabel={content.visitWebsite}
      visitWebsiteHref="https://www.ehz.cn/"
      returnToListLabel={language === "zh" ? "返回列表" : "Return to List"}
      previousLabel={content.previousCompany}
      previousHref="/portfolio/shanghai-droid-robotics-co-ltd-droidup"
      nextLabel={content.nextCompany}
      nextHref="/portfolio/chengdu-zhongkang-dacheng-environmental-protection-technology-co-ltd"
    />
  )
}
