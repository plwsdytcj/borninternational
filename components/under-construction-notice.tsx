"use client"

import { useEffect } from "react"

export default function UnderConstructionNotice() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest('a') as HTMLAnchorElement | null
      if (!anchor) return

      const footer = document.querySelector('footer')
      if (!footer || !footer.contains(anchor)) return

      const href = anchor.getAttribute('href') || ''
      // Intercept only placeholder/hash links in the footer
      const isHash = href === '#' || href.startsWith('#')
      if (isHash) {
        e.preventDefault()
        window.alert('Page in construction')
      }
    }

    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
