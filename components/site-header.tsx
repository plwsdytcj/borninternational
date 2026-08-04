"use client"

import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type SiteHeaderProps = {
  backHref: string
  backLabel: string
  theme?: "dark" | "light"
}

export function SiteHeader({
  backHref,
  backLabel,
  theme = "dark",
}: SiteHeaderProps) {
  const isDark = theme === "dark"

  return (
    <header
      className={
        isDark
          ? "sticky top-0 z-20 border-b border-slate-800 bg-slate-900 shadow-md sm:bg-slate-900/90 sm:backdrop-blur-sm"
          : "sticky top-0 z-20 border-b border-slate-200 bg-white shadow-sm sm:bg-white/95 sm:backdrop-blur-sm"
      }
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center focus:outline-none" aria-label="Back to Home">
          <Image
            src="/logo/born_logo_white.png"
            alt="BORN International logo"
            width={180}
            height={60}
            className={`w-auto ${isDark ? "h-9 sm:h-10" : "h-8 sm:h-9 brightness-0 invert"}`}
          />
        </Link>

        <Link
          href={backHref}
          className={`inline-flex items-center gap-2 text-sm transition-colors ${
            isDark ? "text-white/90 hover:text-white" : "text-slate-700 hover:text-slate-950"
          }`}
        >
          <ArrowLeft className="h-4 w-4 shrink-0" />
          <span>{backLabel}</span>
        </Link>
      </div>
    </header>
  )
}
