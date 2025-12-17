"use client"

import { ArrowLeft, ArrowRight, Check } from "lucide-react"
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
    description: "Your official gateway. Gain direct access to leading enterprises within the SCO, ensuring a credible and high-level entry into the Russian-speaking market.",
    image: "/business-new/media/image1.jpeg",
  },
  {
    title: "BRICS Forum",
    description: "Build global influence. Participate in impactful international forums to connect with Russian and global business leaders.",
    image: "/business-new/media/image2.jpeg",
  },
  {
    title: "St. Petersburg Economic Forum",
    description: "Access policy & decision-makers. Engage at Russia's premier economic platform to stay ahead of trends and build key relationships.",
    image: "/business-new/media/image3.jpeg",
  },
  {
    title: "National-Level Industrial Parks",
    description: "Secure a strategic foothold. Visit state-level economic zones to understand the latest industrial policies and incentives.",
    image: "/business-new/media/image2.png",
  },
  {
    title: "University & Research Resources",
    description: "Drive innovation. Partner with top Russian universities to tap into cutting-edge R&D and recruit elite talent.",
    image: "/business-new/media/image4.jpeg",
  },
  {
    title: "Direct Customer Networks",
    description: "Understand real demand. Establish direct lines to end-buyers and local clients to grasp genuine needs.",
    image: "/business-new/media/image5.jpeg",
  },
  {
    title: "Oligarch & Industry Leader Access",
    description: "Navigate the market with insight. Connect directly with major industry players for accelerated market penetration.",
    image: "/business-new/media/image6.jpeg",
  },
  {
    title: "Local Partner Ecosystem",
    description: "Collaborate for success. Forge solid partnerships across sectors for sustainable, mutually beneficial growth.",
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

export default function BusinessNewPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <button
          onClick={() => router.push("/")}
          className="flex items-center focus:outline-none"
          aria-label="Back to Home"
        >
          <Image src="/logo/born_logo_white.png" alt="BORN International Logo" width={160} height={50} className="h-8 sm:h-9 md:h-10 w-auto" />
        </button>
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium hidden sm:inline">Back to Home</span>
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-28 lg:py-32 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-amber-500 font-medium text-sm tracking-wider uppercase">Business Overview</span>
            </div>
            <h1 className="heading-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6">
              "One-Stop" Access to the Russian-Speaking Market
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
              A comprehensive market entry blueprint backed by the SCO Business Council
            </p>
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent" />
      </section>

      {/* Value Proposition */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Official Access */}
          <div className="group">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 border-2 border-slate-900 flex items-center justify-center flex-shrink-0">
                <span className="heading-serif text-lg font-light">01</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-1">Official Access Channel</h3>
                <div className="h-0.5 w-12 bg-amber-500 group-hover:w-24 transition-all duration-500" />
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed pl-16">
              Backed by the SCO Business Council, we integrate government, banking, and regulatory bodies into a unified whitelist. This enables enterprises to secure their market entry permit first, then navigate around the hidden obstacles of sanctions and exchange rate fluctuations.
            </p>
          </div>
          
          {/* Local Implementation */}
          <div className="group">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 border-2 border-slate-900 flex items-center justify-center flex-shrink-0">
                <span className="heading-serif text-lg font-light">02</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-1">Local Implementation</h3>
                <div className="h-0.5 w-12 bg-amber-500 group-hover:w-24 transition-all duration-500" />
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed pl-16">
              Entrust company registration, talent recruitment, and financial/tax compliance to our local team. This allows your business to operate like a local Russian company, rather than merely conducting foreign trade in Russia.
            </p>
          </div>
        </div>

        {/* Challenges Banner */}
        <div className="mt-16 border-t border-b border-slate-200 py-8">
          <p className="text-center text-sm text-slate-500 uppercase tracking-wider mb-4">Fundamentally resolves the five major challenges</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {challenges.map((challenge, idx) => (
              <div key={challenge} className="flex items-center gap-2">
                <span className="text-slate-900 font-medium text-sm sm:text-base">{challenge}</span>
                {idx < challenges.length - 1 && <span className="hidden sm:block text-slate-300">·</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Plan */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-amber-600 font-medium text-sm tracking-wider uppercase">Implementation Plan</span>
            </div>
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl font-light text-slate-900">
              Russia Market Entry Phases
            </h2>
          </div>
          
          <div className="space-y-0">
            {phases.map((phase, idx) => (
              <div key={phase.title} className="relative">
                {/* Timeline connector */}
                {idx < phases.length - 1 && (
                  <div className="absolute left-6 top-24 bottom-0 w-px bg-slate-300 hidden lg:block" />
                )}
                
                <div className="grid lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 py-8 lg:py-12 border-b border-slate-200 last:border-0">
                  {/* Step number */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4">
                    <div className="relative">
                      <span className="heading-serif text-5xl sm:text-6xl lg:text-7xl font-light text-slate-200">{phase.step}</span>
                      <div className="absolute -bottom-1 left-0 h-1 w-8 bg-amber-500" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider lg:mt-2">{phase.duration}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white border border-slate-200 p-6 sm:p-8 lg:p-10">
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6">{phase.title}</h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-4 h-px bg-slate-300" />
                          Features
                        </p>
                        <ul className="space-y-3">
                          {phase.features.map((f) => (
                            <li key={f} className="flex items-start gap-3 text-slate-700">
                              <span className="w-1 h-1 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                              <span className="text-sm sm:text-base">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-4 h-px bg-slate-300" />
                          Advantages
                        </p>
                        <ul className="space-y-3">
                          {phase.advantages.map((a) => (
                            <li key={a} className="flex items-start gap-3 text-slate-700">
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

      {/* Resources */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-amber-500" />
              <span className="text-amber-600 font-medium text-sm tracking-wider uppercase">Our Resources</span>
            </div>
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Strategic Access Points
            </h2>
            <p className="text-slate-600 max-w-2xl">
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
            className="group inline-flex items-center gap-3 bg-white text-slate-900 font-semibold px-8 py-4 hover:bg-amber-500 hover:text-white transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 BORN International. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
