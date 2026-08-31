import type { ReactNode } from "react"
import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata("/contact")

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
