"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

type PortfolioDetailLayoutProps = {
  backToPortfolioLabel: string
  heroTitle: string
  companyName: string
  bodySections: string[]
  logoSrc: string
  logoAlt: string
  visitWebsiteLabel: string
  visitWebsiteHref?: string
  returnToListLabel: string
  previousLabel?: string
  previousHref?: string
  nextLabel?: string
  nextHref?: string
}

export function PortfolioDetailLayout({
  backToPortfolioLabel,
  heroTitle,
  companyName,
  bodySections,
  logoSrc,
  logoAlt,
  visitWebsiteLabel,
  visitWebsiteHref,
  returnToListLabel,
  previousLabel,
  previousHref,
  nextLabel,
  nextHref,
}: PortfolioDetailLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader backHref="/portfolio#portfolio-companies" backLabel={backToPortfolioLabel} />

      <section
        className="relative overflow-hidden bg-slate-900 py-12 sm:py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.55)), url('/backgrounds/office-background.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="heading-serif text-center text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
            {heroTitle}
          </h1>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:h-80 sm:p-10 lg:h-96">
              <Image src={logoSrc} alt={logoAlt} fill className="object-contain p-6 sm:p-10" />
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="heading-serif mb-4 text-3xl font-light tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  {companyName}
                </h2>
                <div className="space-y-5">
                  {bodySections.map((section, index) => (
                    <p key={`${index}-${section.slice(0, 24)}`} className="text-base leading-relaxed text-slate-700 sm:text-lg">
                      {section}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {visitWebsiteHref ? (
                  <Button asChild className="h-auto bg-amber-600 px-6 py-3 text-white hover:bg-amber-700">
                    <a href={visitWebsiteHref} target="_blank" rel="noreferrer">
                      {visitWebsiteLabel}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <Button className="h-auto bg-amber-600 px-6 py-3 text-white hover:bg-amber-700">
                    {visitWebsiteLabel}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                )}

                <Button
                  asChild
                  variant="outline"
                  className="h-auto border-amber-600 bg-white px-6 py-3 text-amber-700 hover:bg-amber-50 hover:text-amber-800"
                >
                  <Link href="/portfolio#portfolio-companies">{returnToListLabel}</Link>
                </Button>
              </div>

              {(previousHref && previousLabel) || (nextHref && nextLabel) ? (
                <div className="space-y-3 border-t border-slate-200 pt-6 sm:pt-8">
                  {previousHref && previousLabel ? (
                    <Button asChild variant="secondary" className="h-auto w-full justify-start bg-slate-700 px-5 py-3 text-left text-white hover:bg-slate-800">
                      <Link href={previousHref}>{previousLabel}</Link>
                    </Button>
                  ) : null}
                  {nextHref && nextLabel ? (
                    <Button asChild variant="secondary" className="h-auto w-full justify-start bg-slate-700 px-5 py-3 text-left text-white hover:bg-slate-800">
                      <Link href={nextHref}>{nextLabel}</Link>
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
