export function track(name: string, params?: Record<string, any>) {
  if (typeof window === 'undefined') return
  const gtag = (window as any).gtag
  if (!gtag) return

  const auto = {
    page_location: window.location.href,
    host: window.location.host,
  }

  gtag('event', name, { ...auto, ...(params || {}) })
}
