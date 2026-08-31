import type { ReactNode } from "react"
import { createPageMetadata } from "@/lib/seo"
export const metadata = createPageMetadata("/news/fourth-quarter-results")
export default function Layout({ children }: { children: ReactNode }) { return children }
