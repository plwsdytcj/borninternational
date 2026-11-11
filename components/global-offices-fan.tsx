"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

export type Office = {
  city: string
  cityCn: string
  country: string
  role: string
  address: string
  timezone?: string
  mapHref?: string
}

export function GlobalOfficesFan({ offices }: { offices: Office[] }) {
  const [active, setActive] = useState(0)
  const [spread, setSpread] = useState(44)
  const cardRefs = useRef<Array<HTMLElement | null>>([])
  const chipRefs = useRef<Array<HTMLButtonElement | null>>([])
  const startX = useRef<number | null>(null)

  const go = (index: number) => setActive((index + offices.length) % offices.length)

  useEffect(() => {
    const read = () => setSpread(window.innerWidth >= 640 ? 56 : 44)
    read()
    window.addEventListener("resize", read)
    return () => window.removeEventListener("resize", read)
  }, [])

  useLayoutEffect(() => {
    cardRefs.current.forEach((element, index) => {
      if (!element) return
      const delta = index - active
      const distance = Math.abs(delta)
      const clamped = Math.max(-3, Math.min(3, delta))
      element.style.transform = `translateX(${clamped * spread}px) translateY(${Math.max(-40, Math.min(40, delta * -9)) + (delta === 0 ? -22 : 0)}px) rotate(${clamped * 7}deg) scale(${1 - Math.min(distance, 4) * 0.055})`
      element.style.opacity = distance > 2 ? "0" : String(1 - distance * 0.18)
      element.style.zIndex = String(40 - distance)
      element.style.pointerEvents = distance > 2 ? "none" : "auto"
    })
    chipRefs.current[active]?.scrollIntoView({ inline: "center", block: "nearest" })
  }, [active, spread])

  return (
    <div>
      <div
        tabIndex={0}
        role="group"
        aria-label="Global offices. Use the left and right arrow keys to switch cities."
        className="relative mt-2 flex h-[318px] items-center justify-center outline-none focus-visible:ring-1 focus-visible:ring-cyan-400/40"
        onPointerDown={(event) => { startX.current = event.clientX }}
        onPointerUp={(event) => {
          if (startX.current === null) return
          const distance = event.clientX - startX.current
          if (Math.abs(distance) > 36) go(active + (distance < 0 ? 1 : -1))
          startX.current = null
        }}
        onPointerCancel={() => { startX.current = null }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); go(active + 1) }
          if (event.key === "ArrowLeft") { event.preventDefault(); go(active - 1) }
          if (event.key === "Home") { event.preventDefault(); go(0) }
          if (event.key === "End") { event.preventDefault(); go(offices.length - 1) }
        }}
        style={{ touchAction: "pan-y" }}
      >
        {offices.map((office, index) => (
          <article
            key={office.city}
            ref={(element) => { cardRefs.current[index] = element }}
            onClick={() => index !== active && go(index)}
            aria-hidden={index !== active}
            className={`absolute flex h-[252px] w-[clamp(184px,56vw,224px)] flex-col rounded-[14px] border p-[18px] transition-[transform,opacity,border-color] duration-500 ease-[cubic-bezier(.22,.8,.2,1)] motion-reduce:transition-none ${index === active ? "border-cyan-400/50 bg-gradient-to-b from-[#111c31] to-[#0b1220]" : "border-slate-800 bg-gradient-to-b from-[#111c31] to-[#0b1220]"}`}
            style={{ transformOrigin: "50% 112%", willChange: "transform, opacity" }}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10.5px] tracking-[0.16em] text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-[10.5px] tracking-[0.06em] text-slate-600">{office.timezone}</span>
            </div>
            <h4 className="mt-4 text-[19px] font-medium text-white">{office.city}</h4>
            <p className="text-[11.5px] text-slate-500">{office.country}</p>
            <p className="mt-4 text-xs text-slate-300">{office.role}</p>
            <address className="mt-1.5 text-xs leading-relaxed text-slate-400 [overflow-wrap:anywhere] not-italic">{office.address}</address>
            <div className="mt-auto flex items-center justify-between border-t border-slate-800 pt-2.5 text-[11px] text-slate-600">
              {office.mapHref ? <a className="border-b border-cyan-400/30 text-cyan-300" href={office.mapHref} target="_blank" rel="noopener" tabIndex={index === active ? 0 : -1}>View map</a> : <span />}
              <span>{office.cityCn}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-1 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {offices.map((office, index) => (
          <button key={office.city} ref={(element) => { chipRefs.current[index] = element }} type="button" onClick={() => go(index)} aria-current={index === active} className={`min-h-9 flex-none rounded-full border px-3.5 py-2 text-xs transition-colors ${index === active ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-slate-800 text-slate-400"}`}>
            {office.cityCn}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{`${offices[active].city}, ${offices[active].country}, ${offices[active].address}`}</p>
    </div>
  )
}
