import type { ReactNode } from "react"
import { createPageMetadata } from "@/lib/seo"
export const metadata = createPageMetadata("/news/hong-kong-health-week-2026")
export default function Layout({ children }: { children: ReactNode }) { return children }
