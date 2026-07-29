import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistMono } from "geist/font/mono"
import { Manrope, IBM_Plex_Serif } from "next/font/google"
import "./globals.css"
import UnderConstructionNotice from "@/components/under-construction-notice"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bornpe.com"),
  title: "Born International",
  description: "Global Investment Platform - Born International",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#0f766e' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Born International',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bornpe.com',
    title: 'Born International',
    description: 'Global Investment Platform - Born International',
    siteName: 'Born International',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Born International',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Born International',
    description: 'Global Investment Platform - Born International',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0f766e",
}

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})
const plexSerif = IBM_Plex_Serif({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${manrope.style.fontFamily};
  --font-sans: ${manrope.style.fontFamily};
  --font-serif: ${plexSerif.style.fontFamily};
  --font-mono: ${GeistMono.variable};
}

/* Global mobile adjustments */
@media (max-width: 768px) {
  /* Use small viewport units to avoid address bar issues */
  .min-h-screen { min-height: 100svh !important; }
  .h-screen { height: 100svh !important; }
}

/* Heading serif utility */
.heading-serif { font-family: var(--font-serif), ui-serif, Georgia, "Times New Roman", serif; }

/* Tabular numbers for stable metric widths */
.tabular-nums { font-variant-numeric: tabular-nums; }
        `}</style>
      </head>
      <body className={`${manrope.variable} ${plexSerif.variable}`}>
        <UnderConstructionNotice />
        {children}
      </body>
    </html>
  )
}
