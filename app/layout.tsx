import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistMono } from "geist/font/mono"
import { Manrope, IBM_Plex_Serif } from "next/font/google"
import "./globals.css"
import UnderConstructionNotice from "@/components/under-construction-notice"
import { SITE_NAME, SITE_URL } from "@/lib/seo"

const homeTitle = "Born International｜中国科技投资与俄罗斯市场进入平台"
const homeDescription =
  "Born International聚焦中国硬科技投资，并帮助中国企业进入俄罗斯及独联体市场，提供市场研究、政府与产业对接、本地公司设立、渠道开发及本地化运营。"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: homeTitle,
  description: homeDescription,
  applicationName: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
    url: SITE_URL,
    title: homeTitle,
    description: homeDescription,
    siteName: SITE_NAME,
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
    title: homeTitle,
    description: homeDescription,
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo/born_logo_black.png`,
  description: homeDescription,
  areaServed: ["China", "Russia", "Commonwealth of Independent States", "Central Asia"],
  knowsAbout: [
    "China hard technology investment",
    "Russia market entry",
    "CIS market entry",
    "Cross-border technology commercialization",
    "Artificial intelligence",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "business enquiries",
    email: "azmatjan@bornpe.com",
    telephone: "+86-192-1133-7173",
    areaServed: ["Russia", "Commonwealth of Independent States", "Central Asia"],
  },
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["en", "zh-CN", "ru"],
}

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <UnderConstructionNotice />
        {children}
      </body>
    </html>
  )
}
