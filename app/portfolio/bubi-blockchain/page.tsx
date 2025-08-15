"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, Globe, ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function BubiBlockchainPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"en" | "zh">("en")

  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
  ]

  const languageContent = {
    en: {
      companyName: "Bubi Blockchain",
      sector: "Blockchain Technology",
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
      sector: "区块链技术",
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

  const currentLanguage = languages.find((lang) => lang.code === language)
  const content = languageContent[language]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  const handlePreviousClick = () => {
    router.push("/portfolio/boson-quantum")
  }

  const handleNextClick = () => {
    router.push("/portfolio/kunwei-technology")
  }

  const handleReturnToList = () => {
    router.push("/portfolio")
    // Use setTimeout to ensure the page has loaded before scrolling
    setTimeout(() => {
      const element = document.getElementById("portfolio-companies")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <div className="flex items-center">
          <Image src="/logo/born_logo_white.png" alt="BORN International Logo" width={180} height={60} className="h-12 w-auto" />
        </div>

        <div className="flex items-center space-x-6">


          <button
            onClick={() => router.push("/portfolio")}
            className="flex items-center space-x-2 text-slate-700 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{content.backToPortfolio}</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="py-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/backgrounds/office-background.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-light text-white">Investment Services</h1>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Company Logo */}
            <div className="bg-transparent rounded-lg p-12 flex items-center justify-center">
              <Image
                src="/company-logos/bubi-blockchain-logo.png"
                alt="Bubi Blockchain Logo"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>

            {/* Right Side - Company Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-light text-slate-900 mb-6">{content.companyName}</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">{content.companyDescription}</p>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">{content.businessFocus}</p>
                <p className="text-lg text-slate-700 leading-relaxed">{content.visionStatement}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open("https://www.bubi.cn", "_blank")
                    }
                  }}
                >
                  {content.visitWebsite}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>

                <Button
                  variant="outline"
                  className="bg-amber-600 hover:bg-amber-700 text-white border-amber-600 px-8 py-3"
                  onClick={handleReturnToList}
                >
                  {language === "zh" ? "返回列表" : "Return to List"}
                </Button>
              </div>

              {/* Navigation */}
              <div className="space-y-3 pt-8">
                <button
                  onClick={handlePreviousClick}
                  className="w-full bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded transition-colors text-left"
                >
                  {content.previousCompany}
                </button>
                <button
                  onClick={handleNextClick}
                  className="w-full bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded transition-colors text-left"
                >
                  {content.nextCompany}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/logo/born_logo_white.png"
                  alt="BORN International Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-slate-400 text-sm">
                A global investment platform focusing on early-stage high-tech startups.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">The Fund</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About the fund
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Investment strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Holdings
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Responsible Investment</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Our approach
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Climate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Ownership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Exclusions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">About Born International</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Organization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 Born International. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                Terms of Use
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
