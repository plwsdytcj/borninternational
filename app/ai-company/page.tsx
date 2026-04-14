"use client"

import { ViSecondaryShell } from "@/components/vi-secondary-shell"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const infrastructureItems = [
  "Data Infrastructure - Automated data collection and structuring across finance and operations.",
  "Analytics & Insights - Real-time monitoring, growth forecasting, and risk identification.",
  "Portfolio Management - Centralized dashboards to track performance and key actions.",
  "Reporting Automation - Streamlined generation of investment and compliance reports.",
  "Resource Matching - Intelligent matching of enterprise needs with relevant resources.",
  "Secure Integration - Enhanced data security through advanced technologies.",
]

const advantages = [
  {
    title: "Higher Efficiency, Lower Cost",
    body: "Streamlined operations with improved decision-making.",
  },
  {
    title: "Proactive Risk Management",
    body: "Identify risks early and enhance portfolio resilience.",
  },
  {
    title: "Scalable Management",
    body: "Manage more projects without compromising quality.",
  },
]

export default function AiCompanyPage() {
  return (
    <ViSecondaryShell
      sidebarKicker="AI Company"
      pageTitle="AI-Driven Investment Infrastructure"
      pageSubtitle="We go beyond investing in AI industry—we embed AI across the entire investment lifecycle, and scale these capabilities to peer enterprises."
      mainTone="dark"
    >
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 md:pt-12 pb-2">
        <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
          We go beyond investing in AI industry—we embed AI across the entire investment lifecycle, and scale these capabilities to peer enterprises.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <ul className="space-y-4">
          {infrastructureItems.map((line) => (
            <li
              key={line}
              className="flex gap-4 pl-4 border-l-2 border-amber-500/60 text-slate-300 leading-relaxed text-sm sm:text-base"
            >
              {line}
            </li>
          ))}
        </ul>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-700/60 shadow-lg">
          <Image
            src="/home/ai-tech.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 64rem"
          />
        </div>
      </div>

      <section className="border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <h2 className="heading-serif text-3xl sm:text-4xl font-light text-white mb-10">Advantages of Our AI System</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((a) => (
              <div key={a.title} className="rounded-xl border border-slate-700/80 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-amber-400/90 mb-3">{a.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link
              href="/portfolio#our-edge"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm font-medium border-b border-amber-500/40 pb-0.5"
            >
              Our Edge — investment platform
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Born International
      </footer>
    </ViSecondaryShell>
  )
}
