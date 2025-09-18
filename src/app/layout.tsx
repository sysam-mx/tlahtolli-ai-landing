import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import GoogleAnalytics from './GoogleAnalytics'
import GA4PageView from './GA4PageView'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tlahtolli.ai'),
  applicationName: 'Tlahtolli AI',
  title: {
    template: '%s · Tlahtolli AI',
    default: 'Tlahtolli AI · Aprende vocabulario en distintos idiomas con AI y Repetición Espaciada',
  },
  description:
    'Domina vocabulario y expresiones útiles con Tlahtolli AI: práctica inteligente, repetición espaciada y audio nativo para progresar cada día.',
  keywords: [
    "aprende ingles",
    "idioma",
    "frases en inglés",
    "practicar ingles",
    "vocabulario ingles",
    "palabras en ingles con significados",
    "presente perfecto",
    "verbos en inglés",
    "aprender un idioma",
    "aprender vocabulario",
    "aprendizaje de idiomas con IA",
    "repetición espaciada",
    "aprender idiomas con repetición espaciada",
    "aprender vocabulario con IA",
    "lista de verbos en ingles",
    "verbos irregulares en ingles",
    "presente simple",
    "preposiciones en ingles",
    "verbos regulares e irregulares en ingles",
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Tlahtolli AI',
    url: 'https://www.tlahtolli.ai',
    title: 'Tlahtolli AI · Aprende vocabulario en distintos idiomas con AI y Repetición Espaciada',
    description:
      'Domina vocabulario y expresiones útiles con Tlahtolli AI: práctica inteligente, repetición espaciada y audio nativo para progresar cada día.',
    // locale: 'es_MX',
    // images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Tlahtolli AI' }],
  },
  // X / Twitter Cards
  twitter: {
    card: 'summary_large_image',
    // Si tienes handle, descomenta:
    // site: '@tlahtolliai',
    // creator: '@tlahtolliai',
    title: 'Tlahtolli AI · Aprende vocabulario en distintos idiomas con AI y Repetición Espaciada',
    description:
      'Domina vocabulario y expresiones útiles con Tlahtolli AI: práctica inteligente, repetición espaciada y audio nativo para progresar cada día.',
    // images: ['/og.jpg'], // Debe existir en /public
  },
  category: 'education',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ga = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        {children}
        {ga && process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics measurementId={ga} />
        )}
        {ga && <GA4PageView />}
      </body>
    </html>
  )
}