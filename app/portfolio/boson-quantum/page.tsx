"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, Globe, ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function BosonQuantumPage() {
  const router = useRouter()
  const [language, setLanguage] = useState<"en" | "zh">("en")

  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
  ]

  const languageContent = {
    en: {
      companyName: "BOSON Quantum",
      sector: "Quantum Computing",
      backToPortfolio: "Back to Portfolio",
      visitWebsite: "Visit Website",
      previousCompany: "Previous: Kunwei Technology",
      nextCompany: "Next: Bubi Blockchain",
      companyDescription:
        "BOSON Quantum possesses proprietary and core technologies in quantum computing. The company's research achievements in the field of quantum computing are currently the world's only short-term commercializable solution, creating next-generation quantum artificial intelligence accelerated quantum artificial intelligence processing equipment to achieve hundreds of millions of times ultra-large-scale quantum computing.",
      technicalAchievements:
        "The BOSON Quantum team has completed CIM engineering prototype verification of over 1000+ quantum bits abroad and has stably operated some acceleration algorithms. BOSON Quantum's technical advantages are reflected in the practical CIM technical solutions, which are the most advanced second-generation photonic quantum computing technology currently available. It is the largest technical solution that has been practically realized among the three mainstream expandable quantum computing technology routes: superconducting, ion trap, and photonic quantum.",
      investmentServices: "Investment Services",
    },
    zh: {
      companyName: "玻色量子",
      sector: "量子计算",
      backToPortfolio: "返回投资组合",
      visitWebsite: "进入官网",
      previousCompany: "上一篇：坤维科技",
      nextCompany: "下一篇：布比区块链",
      companyDescription:
        "玻色量子公司拥有比肩美国量子计算技术的专利布局和核心技术，在量子计算领域的科研成果是目前全球唯一一具备短期产品化商业化可行性的方案，打造新一代针对人工智能算力加速的量子人工智能处理设备，实现百万比特超大规模量子计算。",
      technicalAchievements:
        "玻色量子团队目前已在国外完成1000+量子比特的CIM工程样机验证，并已稳定运行部分加速算法。玻色量子的技术优势体现在采用的CIM技术方案是最先进的第二代光量子计算技术，是现有超导、离子阱和光量子三大主流可扩展的量子计算技术路线中在已实现的比特数规模最大的技术方案。",
      investmentServices: "投资者服务",
    },
  }

  const currentLanguage = languages.find((lang) => lang.code === language)
  const content = languageContent[language]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handlePreviousClick = () => {
    router.push("/portfolio/kunwei-technology")
  }

  const handleNextClick = () => {
    router.push("/portfolio/bubi-blockchain")
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
            <div className="bg-transparent rounded-lg p-12 flex items-center justify-center relative h-96">
              <Image
                src="/company-logos/boson-quantum-logo.jpg"
                alt="BOSON Quantum Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Right Side - Company Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-light text-slate-900 mb-6">{content.companyName}</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">{content.companyDescription}</p>
                <p className="text-lg text-slate-700 leading-relaxed">{content.technicalAchievements}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
                  onClick={() => window.open("https://www.qboson.com/", "_blank")}
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
