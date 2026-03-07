'use client'

import { useTranslations } from 'next-intl'
import { LuGlobe, LuLayoutList, LuMessageSquare, LuChartColumnIncreasing } from 'react-icons/lu'

const ICONS = [LuGlobe, LuLayoutList, LuMessageSquare, LuChartColumnIncreasing]

export function HowItWorks() {
  const t = useTranslations('howItWorks')
  const steps = t.raw('steps') as { name: string; description: string }[]

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
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {steps.map((step, i) => {
            const Icon = ICONS[i]
            return (
              <div key={i} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-slate-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-tlahtolli-primary">
                    <Icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  <span className="text-tlahtolli-secondary mr-2">{i + 1}.</span>
                  {step.name}
                </dt>
                <dd className="mt-2 text-base/7 text-slate-600">{step.description}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
