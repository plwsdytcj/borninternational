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
      <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 shadow-md">
        <button
          onClick={() => router.push("/")}
          className="flex items-center focus:outline-none"
          aria-label="Back to Home"
        >
          <Image src="/logo/born_logo_white.png" alt="BORN International Logo" width={180} height={60} className="h-12 w-auto" />
        </button>
        <button
          onClick={() => router.push("/")}
          className="flex items-center space-x-2 text-white/90 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </button>
      </header>

      {/* PDF Viewer */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-amber-500 font-semibold text-xs uppercase tracking-[0.2em] mb-2">Business Overview</p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">“One-Stop” Access to the Russian-Speaking Market</h1>
          </div>
        </div>
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

