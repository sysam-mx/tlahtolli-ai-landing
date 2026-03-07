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

        {/* Phone mockup */}
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
          <svg role="img" viewBox="0 0 366 729" className="mx-auto w-[16rem] max-w-full drop-shadow-xl">
            <title>{t('phoneAlt')}</title>
            <defs>
              <clipPath id="phone-screen-clip">
                <rect rx={36} width={316} height={684} />
              </clipPath>
            </defs>
            <path
              d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
              fill="#4B5563"
            />
            <path
              d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
              fill="#343E4E"
            />
            <foreignObject
              width={316}
              height={684}
              clipPath="url(#phone-screen-clip)"
              transform="translate(24 24)"
            >
              <div style={{ position: 'relative', width: 316, height: 684 }}>
                {SLIDES.map((src, i) => (
                  <Image
                    key={i}
                    alt={t('phoneScreenAlt')}
                    src={src}
                    width={316}
                    height={684}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                    style={{
                      objectPosition: 'top',
                      opacity: i === activeIndex ? 1 : 0,
                    }}
                  />
                ))}
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </section>
  )
}
