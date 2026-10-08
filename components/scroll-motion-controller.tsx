"use client"

import { useEffect } from "react"

export function ScrollMotionController() {
  useEffect(() => {
    const root = document.documentElement
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".motion-section"))

    if (!sections.length) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) {
      sections.forEach((section) => section.setAttribute("data-motion-visible", "true"))
      return
    }

    let previousY = window.scrollY
    let direction: "up" | "down" = "down"

    const updateDirection = () => {
      const currentY = window.scrollY
      if (Math.abs(currentY - previousY) > 4) {
        direction = currentY > previousY ? "down" : "up"
        previousY = currentY
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement
          section.setAttribute("data-motion-direction", direction)
          section.setAttribute("data-motion-visible", entry.isIntersecting ? "true" : "false")
        })
      },
      {
        rootMargin: "-8% 0px -12% 0px",
        threshold: 0.14,
      },
    )

    sections.forEach((section, index) => {
      section.style.setProperty("--motion-index", String(index))
      observer.observe(section)
    })

    window.addEventListener("scroll", updateDirection, { passive: true })
    requestAnimationFrame(() => root.setAttribute("data-scroll-motion", "ready"))

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", updateDirection)
      root.removeAttribute("data-scroll-motion")
    }
  }, [])

  return null
}
