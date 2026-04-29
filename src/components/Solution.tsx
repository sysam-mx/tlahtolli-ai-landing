'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { LuPenLine, LuMic, LuRepeat } from 'react-icons/lu'

// import screenshotChat from '@/images/screenshots/assistant-chat-interact-v1.png'
import heroScreenshot1 from '@/images/screenshots/hero-ai-tutor-es-1.png'

const ICONS = [LuPenLine, LuMic, LuRepeat]

export function Solution() {
  const t = useTranslations('solution')
  const highlights = t.raw('highlights') as { name: string; description: string }[]

  return (
    <div className="mx-auto mt-18 max-w-7xl sm:mt-24 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
          <div className="lg:row-start-2 lg:max-w-md">
            <p className="mt-2 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t('title')}
            </p>
            <p className="mt-6 text-lg/8 text-slate-300">
              {t('subtitle')}
            </p>
          </div>
          <Image
            alt={t('screenshotAlt')}
            src={heroScreenshot1}
            width={2352}
            height={1362}
            className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none bg-white"
          />
          <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
            <dl className="max-w-xl space-y-8 text-base/7 text-slate-300 lg:max-w-none">
              {highlights.map((item, i) => {
                const Icon = ICONS[i]
                return (
                  <div key={i} className="relative">
                    <dt className="ml-9 inline-block font-semibold text-white">
                      <Icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-tlahtolli-accent" />
                      {item.name}
                    </dt>{' '}
                    <dd className="inline">{item.description}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
        {/* Decorative gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:-bottom-48 lg:top-auto lg:translate-y-0"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-tlahtolli-cream to-tlahtolli-primary opacity-25"
          />
        </div>
      </div>
    </div>
  )
}
