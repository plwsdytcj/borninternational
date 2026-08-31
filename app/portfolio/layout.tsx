import type { ReactNode } from "react"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata("/portfolio")

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return children
}
