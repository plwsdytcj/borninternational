"use client"

import { useEffect, useState } from "react"

import { PortfolioDetailLayout } from "@/components/portfolio-detail-layout"

export default function KunweiTechnologyPage() {
  const [language] = useState<"en" | "zh">("en")

  const languageContent = {
    en: {
      companyName: "Kunwei Technology",
      backToPortfolio: "Back to Portfolio",
      visitWebsite: "Visit Website",
      previousCompany: "Previous: Bubi Blockchain",
      nextCompany: "Next: Token Cloud",
      companyDescription:
        "Kunwei Technology provides professional force measurement solutions and related products. Current products include robotic six-axis force sensors, intelligent joint torque sensors and other different categories, among which the six-axis force sensor is the company's core product. Kunwei products are at the international leading level.",
      applicationAreas:
        "Six-axis force sensors are standard components for future intelligent robots, which can be widely used in collaborative robots, medical robots, grinding robots, assembly robots, etc. The project won the first prize of the 2020 Suzhou Zhangjiagang National Innovation and Entrepreneurship Competition in the Smart Manufacturing Industry.",
      investmentServices: "Investment Services",
    },
    zh: {
      companyName: "坤维科技",
      backToPortfolio: "返回投资组合",
      visitWebsite: "进入官网",
      previousCompany: "上一篇：布比区块链",
      nextCompany: "下一篇：令牌云",
      companyDescription:
        "坤维科技，提供专业的力觉测量解决方案及相关产品。目前产品包括机器人六维力传感器、智能型关节扭矩传感器等不同种类，其中六维力传感器为公司的核心产品。坤维产品处于国际领先地位。",
      applicationAreas:
        "六维力传感器是未来智能机器人的标配构件，能广泛应用在协作机器人、医疗机器人、打磨机器人、装配机器人等。项目荣获2020苏州张家港全国创新创业大赛总决赛智能制造行业一等奖。",
      investmentServices: "投资者服务",
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
      heroTitle={content.investmentServices}
      companyName={content.companyName}
      bodySections={[content.companyDescription, content.applicationAreas]}
      logoSrc="/company-logos/kunwei-technology-logo.jpg"
      logoAlt="Kunwei Technology logo"
      visitWebsiteLabel={content.visitWebsite}
      visitWebsiteHref="https://www.kunweitech.com/"
      returnToListLabel={language === "zh" ? "返回列表" : "Return to List"}
      previousLabel={content.previousCompany}
      previousHref="/portfolio/bubi-blockchain"
      nextLabel={content.nextCompany}
      nextHref="/portfolio/token-cloud-shanghai-technology-co-ltd"
    />
  )
}
