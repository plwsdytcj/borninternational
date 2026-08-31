import type { ReactNode } from "react"

import { createPageMetadata, SITE_URL } from "@/lib/seo"

export const metadata = createPageMetadata("/business-new")

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/business-new#service`,
  name: "Russia and CIS Market Entry Services for Chinese Companies",
  provider: { "@id": `${SITE_URL}/#organization` },
  url: `${SITE_URL}/business-new`,
  areaServed: ["Russia", "Commonwealth of Independent States", "Central Asia"],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Chinese technology companies expanding into Russia and the CIS",
  },
  serviceType: [
    "Market feasibility research",
    "Government and industry introductions",
    "Company registration",
    "EAC certification",
    "Channel development",
    "Localized operations",
  ],
}

export default function BusinessLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  )
}
