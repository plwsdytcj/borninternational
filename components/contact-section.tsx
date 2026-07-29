import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

const offices = [
  {
    city: "Hong Kong",
    country: "Hong Kong SAR, China",
    entity: "BORN International · Hong Kong Office",
    address: "703, T2, South Seas Centre, 75 Mody Rd., Hong Kong",
    contact: "Wencheng Li, CEO",
    phone: "+852 8494 3701",
    phoneHref: "+85284943701",
    email: "liwencheng@bornpe.com",
  },
  {
    city: "Chengdu",
    country: "China",
    entity: "成都柏锐科技有限公司",
    address: "四川省成都市金牛区府河苑横路71号2层12号",
    contact: "姜童耀",
    phone: "+86 155 8653 3666",
    phoneHref: "+8615586533666",
  },
  {
    city: "Shanghai",
    country: "China",
    entity: "上海伯嶙科技发展有限公司",
    address: "中国（上海）自由贸易试验区临港新片区新杨公路860号10幢",
    contact: "Azmatjan Rouzmamat",
    phone: "+86 192 1133 7173",
    phoneHref: "+8619211337173",
    email: "azmatjan@bornpe.com",
  },
  {
    city: "St. Petersburg",
    country: "Russia",
    entity: "BORN International · St. Petersburg Office",
    address: "Detailed office address to be added",
  },
  {
    city: "Moscow",
    country: "Russia",
    entity: "BORN International · Moscow Office",
    address: "Detailed office address to be added",
  },
  {
    city: "Athens",
    country: "Greece",
    entity: "BORN International · Athens Office",
    address: "Detailed office address to be added",
  },
] as const

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-8 border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 border-b border-slate-800 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300/80">
              Contact · 联系我们
            </p>
            <h2 className="heading-serif max-w-3xl text-4xl font-light leading-tight text-white md:text-6xl">
              Let&apos;s build the next cross-border opportunity.
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-slate-400">
              For investment partnerships, enterprise globalization, and Russia or Central Asia market entry,
              contact our regional team directly.
            </p>
          </div>

          <div className="border-t border-slate-700 pt-6">
            <p className="text-xl font-medium text-white">Azmatjan Rouzmamat</p>
            <p className="mt-1 text-sm text-slate-400">Regional Manager · Russia &amp; Central Asia</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="tel:+8619211337173"
                className="inline-flex items-center gap-2 border border-slate-700 bg-white px-4 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                <Phone className="h-4 w-4" />
                +86 192 1133 7173
              </a>
              <a
                href="mailto:azmatjan@bornpe.com"
                className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <Mail className="h-4 w-4" />
                azmatjan@bornpe.com
              </a>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">Office network</p>
              <h3 className="heading-serif mt-2 text-3xl font-light text-white md:text-4xl">Global offices</h3>
            </div>
            <p className="max-w-xl text-sm text-slate-500">
              Local map links and additional direct contacts will be added as each office confirms its details.
            </p>
          </div>

          <div className="grid border-l border-t border-slate-800 sm:grid-cols-2 xl:grid-cols-3">
            {offices.map((office, index) => (
              <article
                key={office.city}
                className="min-h-64 border-b border-r border-slate-800 p-6 transition-colors hover:bg-slate-900/70"
              >
                <div className="mb-7 flex items-start justify-between gap-4">
                  <span className="text-sm font-medium text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  <MapPin className="h-4 w-4 text-slate-600" aria-hidden />
                </div>
                <h4 className="text-xl font-medium text-white">{office.city}</h4>
                <p className="mt-1 text-sm text-slate-500">{office.country}</p>
                <p className="mt-5 text-sm font-medium text-slate-200">{office.entity}</p>
                <address className="mt-2 not-italic text-sm leading-relaxed text-slate-400">{office.address}</address>
                {"contact" in office ? <p className="mt-4 text-sm text-slate-500">{office.contact}</p> : null}
                {"phone" in office ? (
                  <a
                    className="mt-2 block text-sm text-slate-300 transition hover:text-cyan-300"
                    href={`tel:${office.phoneHref}`}
                  >
                    {office.phone}
                  </a>
                ) : null}
                {"email" in office ? (
                  <a
                    className="mt-1 block break-all text-sm text-slate-300 transition hover:text-cyan-300"
                    href={`mailto:${office.email}`}
                  >
                    {office.email}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-16">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">Media</p>
            <h3 className="heading-serif mt-2 text-3xl font-light text-white md:text-4xl">Follow our channels</h3>
          </div>
          <div className="grid max-w-3xl gap-8 sm:grid-cols-2">
            <figure className="flex items-center gap-5">
              <Image
                src="/contact/born-capital-qr.png"
                alt="伯恩资本国际部 WeChat QR code"
                width={160}
                height={160}
                className="h-32 w-32 bg-white object-contain p-1"
              />
              <figcaption>
                <p className="font-medium text-white">伯恩资本国际部</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Company news, investment, and international business.
                </p>
              </figcaption>
            </figure>
            <figure className="flex items-center gap-5">
              <Image
                src="/contact/lightspeed-cruising-qr.png"
                alt="光速巡航工作室 WeChat QR code"
                width={160}
                height={160}
                className="h-32 w-32 bg-white object-contain p-1"
              />
              <figcaption>
                <p className="font-medium text-white">光速巡航工作室</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Technology content and industry insights.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
