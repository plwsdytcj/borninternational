"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { PortfolioDetailLayout } from "@/components/portfolio-detail-layout"

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
    <PortfolioDetailLayout
      backToPortfolioLabel={content.backToPortfolio}
      heroTitle="Investment Services"
      companyName={content.companyName}
      bodySections={[content.companyDescription, content.technicalAchievements]}
      logoSrc={content.logo}
      logoAlt={`${content.companyName} logo`}
      visitWebsiteLabel={content.visitWebsite}
      visitWebsiteHref="#"
      returnToListLabel={language === "zh" ? "返回列表" : "Return to List"}
      previousLabel={content.previousCompany}
      previousHref="/portfolio/chengdu-zhongkang-dacheng-environmental-protection-technology-co-ltd"
      nextLabel={content.nextCompany}
      nextHref="/portfolio/boson-quantum"
    />
  )
}
