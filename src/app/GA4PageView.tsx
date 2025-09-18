'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function GA4PageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const firstLoad = useRef(true)

  useEffect(() => {
    const gtag = (window as any).gtag
    if (!gtag) return

    // Evita duplicar: el primer page_view lo manda GA automáticamente
    if (firstLoad.current) {
      firstLoad.current = false
      return
    }

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '')
    gtag('event', 'page_view', {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname, searchParams])

  return null
}
