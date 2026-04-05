"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { PortfolioDetailLayout } from "@/components/portfolio-detail-layout"

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
    <PortfolioDetailLayout
      backToPortfolioLabel={content.backToPortfolio}
      heroTitle="Investment Services"
      companyName={content.companyName}
      bodySections={[content.companyDescription, content.technicalAchievements]}
      logoSrc={content.logo}
      logoAlt={`${content.companyName} logo`}
      visitWebsiteLabel={content.visitWebsite}
      visitWebsiteHref="http://cdzkdc.com/"
      returnToListLabel={language === "zh" ? "返回列表" : "Return to List"}
      previousLabel={content.previousCompany}
      previousHref="/portfolio/shenzhen-huazhi-intelligent-manufacturing-technology-co-ltd"
      nextLabel={content.nextCompany}
      nextHref="/portfolio/china-carbon-zero-and-technology-group"
    />
  )
}
