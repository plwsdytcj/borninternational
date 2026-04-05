"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { PortfolioDetailLayout } from "@/components/portfolio-detail-layout"

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
    <PortfolioDetailLayout
      backToPortfolioLabel={content.backToPortfolio}
      heroTitle="Investment Services"
      companyName={content.companyName}
      bodySections={[content.companyDescription, content.technicalAchievements]}
      logoSrc={content.logo}
      logoAlt={`${content.companyName} logo`}
      visitWebsiteLabel={content.visitWebsite}
      visitWebsiteHref="https://www.eidtokencloud.com/#/"
      returnToListLabel={language === "zh" ? "返回列表" : "Return to List"}
      previousLabel={content.previousCompany}
      previousHref="/portfolio/kunwei-technology"
      nextLabel={content.nextCompany}
      nextHref="/portfolio/shanghai-droid-robotics-co-ltd-droidup"
    />
  )
}
