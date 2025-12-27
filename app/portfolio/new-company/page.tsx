"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function NewCompanyPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"en" | "zh">("en")

  const languageContent = {
    en: {
      companyName: "New Company",
      sector: "Technology",
      backToPortfolio: "Back to Portfolio",
      visitWebsite: "Visit Website",
      previousCompany: "Previous: BOSON Quantum",
      nextCompany: "Next: Bubi Blockchain",
      companyDescription:
        "Brief introduction to the company goes here. Replace with content from the Word document.",
      technicalAchievements:
        "Key technologies, milestones, or achievements. Replace with details from the Word document.",
    },
    zh: {
      companyName: "新公司",
      sector: "科技",
      backToPortfolio: "返回投资组合",
      visitWebsite: "进入官网",
      previousCompany: "上一篇：玻色量子",
      nextCompany: "下一篇：布比区块链",
      companyDescription:
        "在此处填写公司简介。稍后用Word文档中的内容替换。",
      technicalAchievements:
        "核心技术、里程碑或重要成果。稍后用Word文档中的内容替换。",
    },
  }

  const content = languageContent[language]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  const handleReturnToList = () => {
    router.push("/portfolio")
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
      <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 shadow-md">
        <button
          onClick={() => router.push("/")}
          className="flex items-center focus:outline-none"
          aria-label="Back to Home"
        >
          <Image src="/logo/born_logo_white.png" alt="BORN International Logo" width={180} height={60} className="h-12 w-auto" />
        </button>

        <div className="flex items-center space-x-6">
          <button
            onClick={() => router.push("/portfolio")}
            className="flex items-center space-x-2 text-white/90 hover:text-white"
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
          <h1 className="heading-serif text-5xl lg:text-6xl font-light tracking-tight text-white">Investment Services</h1>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Company Logo */}
            <div className="bg-transparent rounded-lg p-12 flex items-center justify-center relative h-96">
              <Image
                src="/company-logos/new-company-logo.svg"
                alt="New Company Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Right Side - Company Information */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-serif text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6">{content.companyName}</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">{content.companyDescription}</p>
                <p className="text-lg text-slate-700 leading-relaxed">{content.technicalAchievements}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open("#", "_blank")
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

