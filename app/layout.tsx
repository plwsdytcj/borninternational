import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Born International",
  description: "Global Investment Platform - Born International",
  generator: "v0.dev",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
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
  themeColor: '#0f766e',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Born International',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://borninternational.com',
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
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
