"use client"

import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

// Use provided PPT-to-image exports (ordered)
const pdfPages = [
  "/business/英文版业务简介_00.jpg",
  "/business/英文版业务简介_01.jpg",
  "/business/英文版业务简介_02.jpg",
  // "/business/英文版业务简介_03.jpg", // Hidden
  "/business/英文版业务简介_04.jpg",
  "/business/英文版业务简介_05.jpg",
]

export default function BusinessOverviewPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 shadow-md">
        <button
          onClick={() => router.push("/")}
          className="flex items-center focus:outline-none"
          aria-label="Back to Home"
        >
          <Image src="/logo/born_logo_white.png" alt="BORN International Logo" width={180} height={60} className="h-9 w-auto sm:h-12" />
        </button>
        <button onClick={() => router.push("/")} className="flex items-center space-x-2 text-white/90 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </button>
      </header>

      {/* Hero Section with Background */}
      <section className="relative py-16 sm:py-24 bg-slate-900">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/business/background.jpg" 
            alt="Business background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-amber-500 font-semibold text-xs uppercase tracking-[0.2em] mb-4">Business Overview</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight mb-6">&quot;One-Stop&quot; Access to the<br />Russian-Speaking Market</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl">A government-linked market entry model for Chinese companies entering Russia and the wider CIS</p>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="space-y-6">
          {pdfPages.map((src, idx) => (
            <div key={src} className="w-full border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={src}
                alt={`Business overview page ${idx + 1}`}
                width={1600}
                height={2400}
                className="w-full h-auto object-cover"
                priority={idx === 0}
                unoptimized
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
