import type { ReactNode } from "react"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata("/ai-company")

export default function AiCompanyLayout({ children }: { children: ReactNode }) {
  return children
}
