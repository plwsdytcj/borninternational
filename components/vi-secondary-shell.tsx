"use client"

import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"

export type ViSecondaryShellProps = {
  /** Small caps line above title (e.g. section name from Word VI) */
  sidebarKicker: string
  pageTitle: string
  pageSubtitle?: string
  /** 16:9 hero strip per Word “16:9 版本排版” */
  heroImageSrc?: string
  heroAlt?: string
  heroPriority?: boolean
  children: ReactNode
  /** e.g. language switcher on portfolio */
  headerExtra?: ReactNode
  mainClassName?: string
  /** Dark content area for AI / tech-heavy pages */
  mainTone?: "light" | "dark"
}

const nav = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Investment" },
  { href: "/business-new", label: "Global Expansion" },
  { href: "/ai-company", label: "AI Company" },
  { href: "/global", label: "Technology" },
  { href: "/news", label: "News" },
] as const

export function ViSecondaryShell({
  sidebarKicker,
  pageTitle,
  pageSubtitle,
  heroImageSrc,
  heroAlt = "",
  heroPriority,
  children,
  headerExtra,
  mainClassName = "",
  mainTone = "light",
}: ViSecondaryShellProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-950">
      {/* Left sidebar — Word VI: 左侧边栏、金属冷色底 */}
      <aside className="w-full md:w-[min(17rem,20vw)] md:min-h-screen shrink-0 border-b md:border-b-0 md:border-r border-slate-700/60 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.12] bg-[repeating-linear-gradient(90deg,transparent,transparent_1px,rgba(148,163,184,0.08)_1px,rgba(148,163,184,0.08)_2px)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-30 bg-[linear-gradient(125deg,rgba(245,158,11,0.12)_0%,transparent_45%,rgba(148,163,184,0.08)_100%)]"
          aria-hidden
        />
        <div className="relative z-10 p-5 md:p-6 flex flex-col md:min-h-screen">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="flex items-center focus:outline-none mb-6 md:mb-8 w-fit"
            aria-label="Home"
          >
            <Image
              src="/logo/born_logo_white.png"
              alt=""
              width={140}
              height={46}
              className="h-8 md:h-9 w-auto opacity-95"
            />
          </button>

          <p className="text-amber-500/95 text-[10px] font-semibold tracking-[0.28em] uppercase mb-2">
            {sidebarKicker}
          </p>
          <h1 className="heading-serif text-lg md:text-xl font-light text-white leading-snug mb-1">
            {pageTitle}
          </h1>
          {pageSubtitle ? (
            <p className="text-slate-500 text-xs leading-relaxed mb-6 md:mb-8 border-b border-slate-800/80 pb-6">
              {pageSubtitle}
            </p>
          ) : (
            <div className="border-b border-slate-800/80 pb-6 mb-2" />
          )}

          <nav className="flex flex-row md:flex-col flex-wrap md:flex-nowrap gap-x-4 gap-y-0 md:gap-0 md:space-y-0.5 text-xs md:text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 md:py-2.5 md:pl-3 md:-ml-3 md:border-l-2 border-transparent text-slate-500 hover:text-amber-400/95 hover:border-amber-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex mt-auto pt-10 flex-col gap-3">
            {headerExtra}
            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex items-center gap-2 text-slate-600 hover:text-amber-500/90 text-xs w-fit"
            >
              <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
              Back to Home
            </button>
          </div>
        </div>
      </aside>

      {/* Main — Word VI: 浅色内容区 + 16:9 顶图 */}
      <div
        className={`flex-1 min-w-0 flex flex-col ${mainTone === "dark" ? "bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-100" : "bg-gradient-to-br from-slate-200/90 via-slate-100 to-slate-300/80"} ${mainClassName}`}
      >
        <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-slate-300/80 bg-slate-900/95 shrink-0">
          {headerExtra}
          <button
            type="button"
            onClick={() => router.push("/")}
            className="text-slate-400 text-xs flex items-center gap-1"
          >
            <ArrowLeft className="w-3 h-3" />
            Home
          </button>
        </div>

        {heroImageSrc ? (
          <div className="w-full aspect-video max-h-[min(48vh,640px)] relative shrink-0 border-b border-slate-400/40 shadow-inner">
            <Image
              src={heroImageSrc}
              alt={heroAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority={heroPriority}
            />
            <div
              className={`absolute inset-0 pointer-events-none bg-gradient-to-t ${mainTone === "dark" ? "from-slate-950/90 via-slate-950/10 to-transparent" : "from-slate-200/95 via-slate-100/20 to-transparent"}`}
              aria-hidden
            />
          </div>
        ) : null}

        <div className="flex-1 relative">{children}</div>
      </div>
    </div>
  )
}
