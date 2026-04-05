"use client"

import { useEffect, useState } from "react"

import { PortfolioDetailLayout } from "@/components/portfolio-detail-layout"

export default function BubiBlockchainPage() {
  const [language] = useState<"en" | "zh">("en")

  const languageContent = {
    en: {
      companyName: "Bubi Blockchain",
      backToPortfolio: "Back to Portfolio",
      visitWebsite: "Visit Website",
      previousCompany: "Previous: BOSON Quantum",
      nextCompany: "Next: Kunwei Technology",
      companyDescription:
        "Bubi was established in March 2015, focusing on blockchain technology and product innovation. It has independent intellectual property rights of high-performance blockchain basic services platform, with the ability to quickly build upper-layer application business, widely used in digital finance, digital government, digital assets, supply chain management and other industry fields.",
      businessFocus:
        "The company focuses on distributed supply chain finance business, developing the 'blockchain + supply chain finance' platform. As of 2020, the total assets exceeded 220 billion yuan.",
      visionStatement:
        "Bubi takes decentralized trust as its core, committed to creating a new generation of value circulation network, making digital assets flow freely.",
      investmentServices: "Investment Services",
    },
    zh: {
      companyName: "布比区块链",
      backToPortfolio: "返回投资组合",
      visitWebsite: "进入官网",
      previousCompany: "上一篇：玻色量子",
      nextCompany: "下一篇：坤维科技",
      companyDescription:
        "布比成立于2015年3月，专注于区块链技术和产品创新，拥有自主知识产权的高性能区块链基础服务平台，具备快速构建上层应用业务的能力，广泛应用于数字金融、数字政务、数字资产、供应链管理等行业领域。",
      businessFocus: "重点运营分布式供应链金融业务，开发了'区块链+供应链金融'平台，截止2020年，资产总额已超过220亿元。",
      visionStatement: "布比以多中心化信任为核心，致力于打造新一代价值流通网络，让数字资产自由流动起来。",
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
      bodySections={[content.companyDescription, content.businessFocus, content.visionStatement]}
      logoSrc="/company-logos/bubi-blockchain-logo.png"
      logoAlt="Bubi Blockchain logo"
      visitWebsiteLabel={content.visitWebsite}
      visitWebsiteHref="https://www.bubi.cn"
      returnToListLabel={language === "zh" ? "返回列表" : "Return to List"}
      previousLabel={content.previousCompany}
      previousHref="/portfolio/boson-quantum"
      nextLabel={content.nextCompany}
      nextHref="/portfolio/kunwei-technology"
    />
  )
}
