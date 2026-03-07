'use client'

import { useTranslations } from 'next-intl'
import { LuLayoutList, LuMic, LuSparkles, LuGlobe, LuTrendingUp, LuLibrary } from 'react-icons/lu'

const ICONS = [LuLayoutList, LuMic, LuSparkles, LuGlobe, LuTrendingUp, LuLibrary]

export function PrimaryFeatures() {
  const t = useTranslations('primaryFeatures')
  const features = t.raw('features') as { name: string; description: string }[]

  return (
    <section id="features" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
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
          {features.map((feature, i) => {
            const Icon = ICONS[i]
            return (
              <div key={i} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-slate-900">
                  <Icon aria-hidden="true" className="size-5 flex-none text-tlahtolli-primary" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-slate-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
