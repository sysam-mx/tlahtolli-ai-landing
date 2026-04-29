'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import mobileScreenshot1 from '@/images/screenshots/mobile-ai-tutor-es-1.jpeg'
import mobileScreenshot2 from '@/images/screenshots/mobile-ai-tutor-es-2.jpeg'

const SLIDES = [mobileScreenshot1, mobileScreenshot2]
const INTERVAL_MS = 4000

export function Mobile() {
  const t = useTranslations('mobile')
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="mx-auto mt-32 max-w-7xl px-6 pb-32 sm:mt-40 sm:pb-40 lg:px-8">
      <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:gap-x-10">
        {/* Text */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h2 className="text-base/7 font-semibold text-tlahtolli-secondary">{t('sectionLabel')}</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {t('title')}
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            {t('subtitle')}
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-slate-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-slate-900">
                <svg aria-hidden="true" className="absolute left-1 top-1 size-5 text-tlahtolli-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
                </svg>
                {t('desktopTitle')}
              </dt>{' '}
              <dd className="inline">{t('desktopDesc')}</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-slate-900">
                <svg aria-hidden="true" className="absolute left-1 top-1 size-5 text-tlahtolli-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                {t('mobileTitle')}
              </dt>{' '}
              <dd className="inline">{t('mobileDesc')}</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-slate-900">
                <svg aria-hidden="true" className="absolute left-1 top-1 size-5 text-tlahtolli-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
                {t('appTitle')}
              </dt>{' '}
              <dd className="inline">{t('appDesc')}</dd>
            </div>
          </dl>
        </div>

        {/* Phone mockup — pure CSS to avoid iOS Safari foreignObject bugs */}
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
          <div
            aria-label={t('phoneAlt')}
            className="relative mx-auto w-[16rem] max-w-full drop-shadow-xl"
          >
            {/* Phone body */}
            <div className="rounded-[2.5rem] border-[6px] border-gray-600 bg-gray-700 p-[6px]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-600" />
              {/* Screen */}
              <div
                className="relative overflow-hidden rounded-[2rem] bg-white"
                style={{ aspectRatio: '316 / 684' }}
              >
                {SLIDES.map((src, i) => (
                  <Image
                    key={i}
                    alt={t('phoneScreenAlt')}
                    src={src}
                    fill
                    sizes="256px"
                    className="object-cover object-top transition-opacity duration-1000 ease-in-out"
                    style={{ opacity: i === activeIndex ? 1 : 0 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
