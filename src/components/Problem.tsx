'use client'

import { useTranslations } from 'next-intl'
import { LuBookOpen, LuBrain, LuTrendingUp, LuUserX } from 'react-icons/lu'

const ICONS = [LuBookOpen, LuBrain, LuTrendingUp, LuUserX]

export function Problem() {
  const t = useTranslations('problem')
  const points = t.raw('points') as { title: string; description: string }[]

  return (
    <section className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {t('title')}
        </p>
        <p className="mt-6 text-lg/8 text-slate-600">
          {t('subtitle')}
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-slate-900 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {points.map((point, i) => {
          const Icon = ICONS[i]
          return (
            <div key={i} className="flex flex-col gap-y-3 border-l border-tlahtolli-primary/30 pl-6">
              <dt className="text-sm/6 text-slate-600 flex items-center gap-x-2">
                <Icon className="size-5 text-tlahtolli-primary" />
                {point.title}
              </dt>
              <dd className="order-first text-base font-medium tracking-tight text-slate-900">
                {point.description}
              </dd>
            </div>
          )
        })}
      </dl>
    </section>
  )
}
