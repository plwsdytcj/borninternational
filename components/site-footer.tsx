import Image from "next/image"
import Link from "next/link"

import { ResponsibleInvestmentBlurb } from "@/components/responsible-investment-blurb"

type SiteFooterProps = {
  description?: string
  theme?: "dark" | "light"
}

const defaultDescription =
  "Investing in Chinese hard tech and building operating routes into Russia, the CIS, and adjacent markets."

export function SiteFooter({
  description = defaultDescription,
  theme = "dark",
}: SiteFooterProps) {
  const isDark = theme === "dark"

  return (
    <footer className={isDark ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-8 border-b pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className={`max-w-md ${isDark ? "border-slate-800" : "border-slate-200"}`}>
            <Image
              src="/logo/born_logo_white.png"
              alt="BORN International logo"
              width={180}
              height={60}
              className={`mb-4 h-9 w-auto ${isDark ? "" : "brightness-0 invert"}`}
            />
            <p className={isDark ? "text-sm text-slate-400" : "text-sm text-slate-600"}>{description}</p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/" className={isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"}>
              Home
            </Link>
            <Link
              href="/portfolio"
              className={isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"}
            >
              Investment
            </Link>
            <Link
              href="/business-new"
              className={isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"}
            >
              Global Expansion
            </Link>
            <Link
              href="/ai-company"
              className={isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"}
            >
              AI Company
            </Link>
            <Link
              href="/news"
              className={isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"}
            >
              News
            </Link>
          </nav>
        </div>

        <div className={`mt-8 border-b pb-8 ${isDark ? "border-slate-800" : "border-slate-200"}`}>
          <ResponsibleInvestmentBlurb theme={theme} />
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className={isDark ? "text-slate-400" : "text-slate-600"}>© 2024 Born International. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className={isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"}>
              Privacy Policy
            </a>
            <a href="#" className={isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"}>
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
