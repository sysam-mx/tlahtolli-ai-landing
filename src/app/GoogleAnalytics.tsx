'use client'
import Script from 'next/script'

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  return (
    <>
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('js', new Date());

          (function () {
            var cookieDomain = (location.hostname.endsWith('tlahtolli.ai') ? 'tlahtolli.ai' : 'auto');
            var isLocalhost = /^(localhost|127\\.0\\.0\\.1)/.test(location.hostname);

            // ✅ Dejamos que GA envíe el page_view inicial automáticamente
            gtag('config', '${measurementId}', {
              cookie_domain: cookieDomain,
              send_page_view: true,
              debug_mode: isLocalhost
            });
          })();
        `}
      </Script>
    </>
  )
}
