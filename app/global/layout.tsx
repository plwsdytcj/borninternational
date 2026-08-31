import type { ReactNode } from "react"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata("/global")

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return children
}
