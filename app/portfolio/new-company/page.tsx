"use client"

import { useEffect, useState } from "react"

import { PortfolioDetailLayout } from "@/components/portfolio-detail-layout"

export default function NewCompanyPage() {
  const [language] = useState<"en" | "zh">("en")

  const languageContent = {
    en: {
      companyName: "New Company",
      backToPortfolio: "Back to Portfolio",
      visitWebsite: "Visit Website",
      companyDescription: "Brief introduction to the company goes here. Replace with content from the Word document.",
      technicalAchievements: "Key technologies, milestones, or achievements. Replace with details from the Word document.",
    },
    zh: {
      companyName: "新公司",
      backToPortfolio: "返回投资组合",
      visitWebsite: "进入官网",
      companyDescription: "在此处填写公司简介。稍后用Word文档中的内容替换。",
      technicalAchievements: "核心技术、里程碑或重要成果。稍后用Word文档中的内容替换。",
    },
  }

  const content = languageContent[language]

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <PortfolioDetailLayout
      backToPortfolioLabel={content.backToPortfolio}
      heroTitle="Investment Services"
      companyName={content.companyName}
      bodySections={[content.companyDescription, content.technicalAchievements]}
      logoSrc="/company-logos/new-company-logo.svg"
      logoAlt="New company logo"
      visitWebsiteLabel={content.visitWebsite}
      visitWebsiteHref="#"
      returnToListLabel={language === "zh" ? "返回列表" : "Return to List"}
    />
  )
}
