"use client"

import { useEffect, useState } from "react"

import { PortfolioDetailLayout } from "@/components/portfolio-detail-layout"

export default function BosonQuantumPage() {
  const [language] = useState<"en" | "zh">("en")

  const languageContent = {
    en: {
      companyName: "BOSON Quantum",
      backToPortfolio: "Back to Portfolio",
      visitWebsite: "Visit Website",
      previousCompany: "Previous: China Carbon Zero",
      nextCompany: "Next: Bubi Blockchain",
      companyDescription:
        "BOSON Quantum possesses proprietary and core technologies in quantum computing. The company's research achievements in the field of quantum computing are currently the world's only short-term commercializable solution, creating next-generation quantum artificial intelligence accelerated quantum artificial intelligence processing equipment to achieve hundreds of millions of times ultra-large-scale quantum computing.",
      technicalAchievements:
        "The BOSON Quantum team has completed CIM engineering prototype verification of over 1000+ quantum bits abroad and has stably operated some acceleration algorithms. BOSON Quantum's technical advantages are reflected in the practical CIM technical solutions, which are the most advanced second-generation photonic quantum computing technology currently available. It is the largest technical solution that has been practically realized among the three mainstream expandable quantum computing technology routes: superconducting, ion trap, and photonic quantum.",
      investmentServices: "Investment Services",
    },
    zh: {
      companyName: "玻色量子",
      backToPortfolio: "返回投资组合",
      visitWebsite: "进入官网",
      previousCompany: "上一篇：中国零碳科技集团",
      nextCompany: "下一篇：布比区块链",
      companyDescription:
        "玻色量子公司拥有比肩美国量子计算技术的专利布局和核心技术，在量子计算领域的科研成果是目前全球唯一一具备短期产品化商业化可行性的方案，打造新一代针对人工智能算力加速的量子人工智能处理设备，实现百万比特超大规模量子计算。",
      technicalAchievements:
        "玻色量子团队目前已在国外完成1000+量子比特的CIM工程样机验证，并已稳定运行部分加速算法。玻色量子的技术优势体现在采用的CIM技术方案是最先进的第二代光量子计算技术，是现有超导、离子阱和光量子三大主流可扩展的量子计算技术路线中在已实现的比特数规模最大的技术方案。",
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
      bodySections={[content.companyDescription, content.technicalAchievements]}
      logoSrc="/company-logos/boson-quantum-logo.jpg"
      logoAlt="BOSON Quantum logo"
      visitWebsiteLabel={content.visitWebsite}
      visitWebsiteHref="https://www.qboson.com/"
      returnToListLabel={language === "zh" ? "返回列表" : "Return to List"}
      previousLabel={content.previousCompany}
      previousHref="/portfolio/china-carbon-zero-and-technology-group"
      nextLabel={content.nextCompany}
      nextHref="/portfolio/bubi-blockchain"
    />
  )
}
