'use client'

import { useTranslations } from 'next-intl'

export function Languages() {
  const t = useTranslations('languages')
  const idiomas = t.raw('idiomas') as { name: string; flag: string; description: string }[]
  const lenguas = t.raw('lenguas') as { name: string; flag: string; description: string }[]

  return (
    <section id="languages" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-tlahtolli-secondary">{t('sectionLabel')}</h2>
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-balance">
          {t('title')}
        </p>
        <p className="mt-6 text-lg/8 text-slate-600">
          {t('subtitle')}
        </p>
      </div>

      {/* Idiomas */}
      <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500">{t('idiomasLabel')}</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {idiomas.map((lang, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-inset ring-slate-200/60"
            >
              <span className="text-5xl">{lang.flag}</span>
              <span className="mt-4 text-base font-semibold text-slate-900">{lang.name}</span>
              <span className="mt-1 text-sm text-slate-500">{lang.description}</span>
              <span className="mt-3 inline-flex items-center rounded-full bg-tlahtolli-success/10 px-2.5 py-0.5 text-xs font-semibold text-tlahtolli-success">
                {t('available')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lenguas originarias */}
      <div className="mx-auto mt-16 max-w-md">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-slate-500">{t('lenguasLabel')}</h3>
        <div className="mt-6">
          {lenguas.map((lang, i) => (
            <div
              key={i}
              className="relative flex items-center gap-6 rounded-2xl bg-slate-50 p-8 ring-1 ring-inset ring-slate-200/60"
            >
              <span className="text-5xl">{lang.flag}</span>
              <div>
                <span className="text-base font-semibold text-slate-900">{lang.name}</span>
                <p className="mt-1 text-sm text-slate-500">{lang.description}</p>
                <span className="mt-2 inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">
                  {t('comingSoon')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
