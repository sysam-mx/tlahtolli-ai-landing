'use client'

import { useTranslations } from 'next-intl'
import { LuGlobe, LuAudioLines, LuVolume2 } from 'react-icons/lu'

const ICONS = [LuGlobe, LuAudioLines, LuVolume2]

export function Personalization() {
  const t = useTranslations('personalization')
  const cards = t.raw('cards') as { name: string; description: string }[]

  return (
    <section className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-balance">
          {t('title')}
        </p>
        <p className="mt-6 text-lg/8 text-slate-600">
          {t('subtitle')}
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = ICONS[i]
            return (
              <div key={i} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-slate-900">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-tlahtolli-primary">
                    <Icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {card.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-slate-600">
                  <p className="flex-auto">{card.description}</p>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
