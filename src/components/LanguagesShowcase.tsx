'use client'

import { Container } from '@/components/Container'
import clsx from 'clsx'

type Lang = {
  id: string
  name: string
  flag: string
  available: boolean
  note?: 'beta' | 'soon'
}

const LANGUAGES: Lang[] = [
  { id: 'en', name: 'Inglés', flag: '🇺🇸', available: true },
  { id: 'pt', name: 'Portugués', flag: '🇧🇷', available: true },
  { id: 'fr', name: 'Francés', flag: '🇫🇷', available: true },
  { id: 'de', name: 'Alemán', flag: '🇩🇪', available: true },
  { id: 'it', name: 'Italiano', flag: '🇮🇹', available: true },
  { id: 'ja', name: 'Japonés', flag: '🇯🇵', available: false, note: 'soon' },
  { id: 'ko', name: 'Coreano', flag: '🇰🇷', available: false, note: 'soon' },
]

export function LanguagesShowcase() {
  // Un solo listado, ordenado: disponibles primero
  const ordered = [...LANGUAGES].sort(
    (a, b) => Number(b.available) - Number(a.available)
  )

  const availableCount = LANGUAGES.filter(l => l.available).length
  const upcomingCount = LANGUAGES.length - availableCount
  const subtitle = `${availableCount} idiomas disponibles para empezar hoy; ${upcomingCount} en camino.`

  return (
    <section
      id="languages"
      aria-labelledby="languages-title"
      className="relative overflow-hidden bg-gradient-to-r from-tlahtolli-primary via-tlahtolli-accent to-tlahtolli-secondary pb-20 sm:pb-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="languages-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl"
          >
            Idiomas disponibles
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white/90">
            {subtitle}
          </p>
        </div>

        <ul
          className="
            mx-auto mt-12 grid max-w-6xl gap-4
            [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]
            place-items-center
          "
        >
          {ordered.map((lang) => {
            const isAvailable = lang.available
            const statusText = isAvailable
              ? 'Disponible'
              : lang.note === 'beta'
                ? 'Beta'
                : 'Próximamente'

            const cardClass = clsx(
              'w-full max-w-44 rounded-2xl p-4 text-center shadow-lg ring-1 ring-black/5',
              isAvailable ? 'bg-white' : 'bg-white/90 backdrop-blur'
            )

            const badgeClass = clsx(
              'mt-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ring-inset',
              isAvailable
                ? 'bg-tlahtolli-success/15 text-tlahtolli-success ring-tlahtolli-success/30'
                : 'bg-slate-100 text-slate-600 ring-slate-200'
            )

            return (
              <li key={lang.id} className={cardClass}>
                <span className="block text-3xl" aria-hidden="true">
                  {lang.flag}
                </span>
                <span className="mt-2 block text-sm font-medium text-slate-900">
                  {lang.name}
                </span>
                <span className={badgeClass}>{statusText}</span>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
