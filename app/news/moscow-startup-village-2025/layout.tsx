import type { ReactNode } from "react"
import { createPageMetadata } from "@/lib/seo"
export const metadata = createPageMetadata("/news/moscow-startup-village-2025")
export default function Layout({ children }: { children: ReactNode }) { return children }
