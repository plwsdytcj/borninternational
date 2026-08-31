import type { ReactNode } from "react"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata("/mother-fund")

export default function MotherFundLayout({ children }: { children: ReactNode }) {
  return children
}
