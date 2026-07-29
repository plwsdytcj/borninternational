import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { ViSecondaryShell } from "@/components/vi-secondary-shell"

export default function ContactPage() {
  return (
    <ViSecondaryShell
      sidebarKicker="Global office network"
      pageTitle="Contact"
      pageSubtitle="Investment, enterprise globalization, and regional market-entry enquiries"
      mainTone="dark"
    >
      <ContactSection />
      <SiteFooter />
    </ViSecondaryShell>
  )
}
