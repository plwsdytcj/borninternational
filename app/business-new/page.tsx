"use client"

import { ViSecondaryShell } from "@/components/vi-secondary-shell"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const phases = [
  {
    step: "01",
    title: "Official Feasibility Study",
    duration: "25-30 business days",
    features: [
      "Local Russian team execution",
      "Official data from the SCO",
      "150-page report in Chinese, English, and Russian",
    ],
    advantages: [
      "Reduce overall costs by over 60%",
      "Accelerate market entry by an average of 6 months",
      "Proactively mitigate policy and compliance risks",
    ],
  },
  {
    step: "02",
    title: "Customized Visit Program",
    duration: "7-10 days",
    features: [
      "Official receptions by SCO and government agencies",
      "Highly tailored client and partner meetings",
      "Full-time accompaniment by Russian industry experts",
    ],
    advantages: [
      "Secure client commitments efficiently",
      "Complete majority of key meetings within one week",
      "Sign letters of intent or preliminary agreements on-site",
    ],
  },
  {
    step: "03",
    title: "Russia Headquarters Establishment",
    duration: "3-18 months",
    features: [
      "Company registration & bank account opening",
      "EAC certification & bonded warehouse setup",
      "Sales team recruitment & government subsidy applications",
    ],
    advantages: [
      "Receive first orders in as fast as 1 month",
      "Generate initial revenue within an average of 3 months",
      "Eligible compliant enterprises may obtain government subsidies",
    ],
  },
]

const resources = [
  {
    title: "SCO Business Council",
    description: "Government-linked entry point into the Russian-speaking market, with direct access to decision-makers, industrial groups, and credible local partners.",
    image: "/business-new/media/image1.jpeg",
  },
  {
    title: "BRICS Forum",
    description: "Meet governors, trade officials, distributors, and industrial buyers in one room instead of building the network cold.",
    image: "/business-new/media/image2.jpeg",
  },
  {
    title: "St. Petersburg Economic Forum",
    description: "Use Russia's premier economic forum to reach regional governments, strategic investors, and large corporate buyers.",
    image: "/business-new/media/image3.jpeg",
  },
  {
    title: "National-Level Industrial Parks",
    description: "Identify the industrial zones, subsidies, and localization requirements that determine whether a Chinese company can operate on the ground.",
    image: "/business-new/media/image2.png",
  },
  {
    title: "University & Research Resources",
    description: "Source labs, pilots, and technical hires for China-Russia commercialization instead of treating research access as branding.",
    image: "/business-new/media/image4.jpeg",
  },
  {
    title: "Direct Customer Networks",
    description: "Get direct feedback from buyers, integrators, and distributors before committing capital to localization.",
    image: "/business-new/media/image5.jpeg",
  },
  {
    title: "Oligarch & Industry Leader Access",
    description: "Reach conglomerates and decision-makers who control procurement, logistics, and distribution in key sectors.",
    image: "/business-new/media/image6.jpeg",
  },
  {
    title: "Local Partner Ecosystem",
    description: "Build importer, distributor, compliance, and after-sales coverage instead of relying on ad hoc agents.",
    image: "/business-new/media/image7.jpeg",
  },
]

const challenges = [
  "Communication",
  "Customer Acquisition", 
  "Payments & Collections",
  "Sanctions",
  "Business Development"
]

const caseHighlights = [
  {
    text: "At the St. Petersburg International Economic Forum, our Russia market entry team facilitated trade negotiations resulting in billion-RMB-level orders.",
    image: "/business-new/media/image1.jpeg",
  },
  {
    text: "Supported a leading Chinese geospatial technology company, UNRE Technology, in building a pipeline of 214 potential clients in Russia, with targeted engagement of key industry players such as Rusgeocom, EFT Group, and Technokauf. Delivered 30+ high-level technical demonstrations, advancing 5 clients into core negotiations, securing pilot orders, and initiating long-term partnership discussions.",
    image: "/business-new/media/image2.jpeg",
  },
  {
    text: "On Russia’s Ozon platform, enabled iFLYTEK to achieve No.2 brand ranking in the electronic translator and dictionary category, and No.1 single-product revenue within 90 days.",
    image: "/business-new/media/image3.jpeg",
  },
  {
    text: "Secured exclusive distribution rights in Russia for the full product line of Jissbon, completed comprehensive market feasibility studies, and successfully launched the first batch of products in the Russian market.",
    image: "/business-new/media/image2.png",
  },
]

export default function BusinessNewPage() {
  const router = useRouter()

  return (
    <ViSecondaryShell
      sidebarKicker="Russia & CIS"
      pageTitle="Russian-Speaking Market"
      pageSubtitle="Government-linked access · SCO Business Council"
      mainTone="dark"
    >
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 md:pt-12 pb-2 md:pb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-amber-600" />
          <span className="text-sm font-medium uppercase tracking-wider text-amber-400/95">Business Overview</span>
        </div>
        <h1 className="heading-serif mb-4 text-3xl font-light leading-tight text-white/95 sm:text-4xl md:text-5xl lg:text-6xl">
          &quot;One-Stop&quot; Access to the Russian-Speaking Market
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
          A government-linked market entry model for Chinese companies entering Russia and the wider CIS
        </p>
      </section>

      {/* Value Proposition */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Official Access */}
          <div className="group">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-white/25">
                <span className="heading-serif text-lg font-light text-white/90">01</span>
              </div>
              <div>
                <h3 className="mb-1 text-xl font-semibold text-white/95 sm:text-2xl">Official Access Channel</h3>
                <div className="h-0.5 w-12 bg-amber-500 group-hover:w-24 transition-all duration-500" />
              </div>
            </div>
            <p className="pl-16 leading-relaxed text-slate-400">
              Backed by the SCO Business Council, we align government, banking, and regulatory stakeholders before a company spends heavily on entry. That lets Chinese enterprises solve access, sanctions, and FX friction upfront.
            </p>
          </div>
          
          {/* Local Implementation */}
          <div className="group">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-white/25">
                <span className="heading-serif text-lg font-light text-white/90">02</span>
              </div>
              <div>
                <h3 className="mb-1 text-xl font-semibold text-white/95 sm:text-2xl">Local Implementation</h3>
                <div className="h-0.5 w-12 bg-amber-500 group-hover:w-24 transition-all duration-500" />
              </div>
            </div>
            <p className="pl-16 leading-relaxed text-slate-400">
              Our local team handles company formation, hiring, compliance, and finance so a Chinese company can operate as a local Russian business, not just export into it.
            </p>
          </div>
        </div>

        {/* Challenges Banner */}
        <div className="mt-16 border-y border-slate-700/70 py-8">
          <p className="mb-4 text-center text-sm uppercase tracking-wider text-slate-500">Fundamentally resolves the five major challenges</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {challenges.map((challenge, idx) => (
              <div key={challenge} className="flex items-center gap-2">
                <span className="text-sm font-medium text-white/90 sm:text-base">{challenge}</span>
                {idx < challenges.length - 1 && <span className="hidden text-slate-600 sm:block">·</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Plan */}
      <section className="border-t border-slate-800/80 bg-slate-950/40 py-16 backdrop-blur-sm md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-amber-400/95">Implementation Plan</span>
            </div>
            <h2 className="heading-serif text-3xl font-light text-white/95 sm:text-4xl md:text-5xl">
              Russia Market Entry Phases
            </h2>
          </div>
          
          <div className="space-y-0">
            {phases.map((phase, idx) => (
              <div key={phase.title} className="relative">
                {/* Timeline connector */}
                {idx < phases.length - 1 && (
                  <div className="absolute bottom-0 left-6 top-24 hidden w-px bg-slate-700 lg:block" />
                )}
                
                <div className="grid gap-6 border-b border-slate-700/70 py-8 last:border-0 lg:grid-cols-[120px_1fr] lg:gap-12 lg:py-12">
                  {/* Step number */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <div className="relative">
                      <span className="heading-serif text-5xl font-light text-white/20 sm:text-6xl lg:text-7xl">{phase.step}</span>
                      <div className="absolute -bottom-1 left-0 h-1 w-8 bg-amber-500" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-500 lg:mt-2">{phase.duration}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="border border-slate-700/80 bg-slate-950/55 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
                    <h3 className="mb-6 text-xl font-semibold text-white/95 sm:text-2xl">{phase.title}</h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          <span className="h-px w-4 bg-slate-600" />
                          Features
                        </p>
                        <ul className="space-y-3">
                          {phase.features.map((f) => (
                            <li key={f} className="flex items-start gap-3 text-slate-300">
                              <span className="w-1 h-1 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                              <span className="text-sm sm:text-base">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          <span className="h-px w-4 bg-slate-600" />
                          Advantages
                        </p>
                        <ul className="space-y-3">
                          {phase.advantages.map((a) => (
                            <li key={a} className="flex items-start gap-3 text-slate-300">
                              <Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                              <span className="text-sm sm:text-base">{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Globalization Team */}
      <section className="border-t border-slate-800/80 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-amber-400/95">Global expansion</span>
            </div>
            <h2 className="heading-serif text-3xl font-light text-white/95 sm:text-4xl md:text-5xl">Our Globalization Team</h2>
          </div>
          <div className="space-y-12 md:space-y-16">
            {[
              {
                name: "Yuqing Jiang (Taiwan, China)",
                role: "Head of Overseas Expansion Services",
                bio: "Council Member and Expert Advisor for the CIS Region at the China Business Advertising Association Brand Globalization Committee; Specially Appointed Mentor at the Cross-Border Expansion Research Institute of Shanghai Jiao Tong University. With extensive experience in corporate strategic management and hands-on expertise in brand globalization, Mr. Jiang has supported numerous leading enterprises, including iFLYTEK, in expanding into the Russian market.",
              },
              {
                name: "Michael Digkas (Greece)",
                role: "Strategic Advisor at Born International",
                bio: "Greek lawyer, obtained Chinese permanent residence in 2018. He holds a Bachelor of Laws degree from Italy and a Master's degree from China University of Political Science and Law. Currently, he serves as Foreign-related Project Director at Sichuan Technical Exchange Center, China Representative of the Sino-Hellenic Economic Council, and also Founder and CEO of China West Connector. He specializes in providing full-process support for Chinese enterprises' overseas expansion, including compliance risk control, financing connection and overseas market layout.",
              },
              {
                name: "Jingyi Zhang",
                role: "Expert Service Advisor",
                bio: "Lecturer at the National Research University Higher School of Economics (HSE), Russia. Ms. Zhang previously served at the Beijing Municipal Commission of Commerce and later as International Director at the International Technology Transfer Network (ITTN), where she supported over 100 foreign startups in entering the Chinese market. She specializes in international cooperation, startup incubation, and technology transfer.",
              },
              {
                name: "Pavel Golosov (Russia)",
                role: "Expert Service Advisor",
                bio: "Dean of the Faculty of Social Sciences and Scientific Director of the Artificial Intelligence Research Center at the Russian Presidential Academy of National Economy and Public Administration (RANEPA). Member of the Expert Advisory Council on Constitutional Legislation and State Building of the Federation Council of the Russian Federation. Founder of the international university award in artificial intelligence and big data, “Gravitation”.",
              },
              {
                name: "Pengfei Qi",
                role: "Business Representative",
                bio: "Resident Representative in Russia at Born International. Mr. Qi has been involved in hosting multiple high-level China-Russia government delegations and, on behalf of the Guangdong CIS International Science and Technology Cooperation Alliance, signed a bilateral cooperation agreement with the Ryazan Regional Government of Russia. He has played a key role in advancing initiatives such as the “Bilateral Enterprise Localization Support Program” and the “Hongqi Automobile Introduction Project in Ryazan”.",
              },
              {
                name: "Dr. Dan Wang",
                role: "Senior Overseas Expansion Service Advisor at Born International",
                bio: "Dr. Wang holds a Doctor of Agricultural Economics and Management degree from the Chinese Academy of Social Sciences and a Master of International Finance degree from the University of Sydney, Australia. A senior financial expert with over 20 years of experience, she is Co-founder and CFO of Zhongxihui (Chengdu) Information Technology Co., Ltd. and Business Investment Representative of Hylir Group. She is good at connecting overseas resources, assisting enterprises in handling the whole process of overseas expansion, and assists Michael Digkas in advancing major China-Greece projects, jointly helping enterprises explore the European market and avoid cross-border risks.",
              },
            ].map((m) => (
              <div key={m.name} className="border-b border-slate-800/80 pb-12 last:border-0 last:pb-0 md:pb-16">
                <h3 className="mb-1 text-xl font-semibold text-white/95 sm:text-2xl">{m.name}</h3>
                <p className="mb-4 text-sm font-medium text-amber-400/90">{m.role}</p>
                <p className="max-w-4xl text-sm leading-relaxed text-slate-400 sm:text-base">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Highlights */}
      <section className="border-t border-slate-800/80 bg-slate-950/35 py-16 backdrop-blur-sm md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
          <div className="mb-10 md:mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-amber-400/95">Outcomes</span>
            </div>
            <h2 className="heading-serif text-3xl font-light text-white/95 sm:text-4xl md:text-5xl">Case Highlights</h2>
          </div>
          <div className="mb-10 grid gap-6 md:grid-cols-2">
            {caseHighlights.map((item) => (
              <article
                key={item.text}
                className="overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/55 shadow-sm backdrop-blur-sm"
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-amber-400/95">Our Resources</span>
            </div>
            <h2 className="heading-serif mb-4 text-3xl font-light text-white/95 sm:text-4xl md:text-5xl">
              Strategic Access Points
            </h2>
            <p className="max-w-2xl text-slate-400">
              Leverage our extensive network to gain unparalleled access to the Russian market
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {resources.map((resource, idx) => (
              <div
                key={resource.title}
                className="group relative bg-slate-900 overflow-hidden aspect-[3/4]"
              >
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                  unoptimized
                />
                
                {/* Number badge */}
                <div className="absolute top-4 left-4">
                  <span className="heading-serif text-4xl font-light text-white/30">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-2 leading-tight">{resource.title}</h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {resource.description}
                  </p>
                </div>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative">
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4">
            Ready to Enter the Russian Market?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Let us guide you through every step of your market entry journey.
          </p>
          <button
            onClick={() => router.push("/#contact")}
            className="group inline-flex items-center gap-3 bg-white/95 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:bg-amber-500 hover:text-white"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
          <p className="text-sm">
            © 2025 BORN International. All rights reserved.
          </p>
        </div>
      </footer>
    </ViSecondaryShell>
  )
}
