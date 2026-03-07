'use client'

import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useRef } from 'react'
import { LuMessageSquare, LuMic, LuSparkles, LuVolume2, LuCircleCheck, LuRepeat } from 'react-icons/lu'

const ICONS = [LuMessageSquare, LuMic, LuSparkles, LuVolume2, LuCircleCheck, LuRepeat]

export function SecondaryFeatures() {
  const t = useTranslations('secondaryFeatures')
  const subFeatures = t.raw('subFeatures') as { name: string; description: string }[]

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.playbackRate = 2.0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const handleVideoClick = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
    video.play().catch(() => {})
  }, [])

  return (
    <section id="product-demo" className="mt-32 sm:mt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-balance sm:text-5xl">
            {t('title')}
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Video with gradient fade */}
      <div className="relative overflow-hidden pt-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="mb-[-12%] w-full rounded-xl shadow-2xl ring-1 ring-slate-900/10 cursor-pointer"
            onClick={handleVideoClick}
          >
            <source src="/videos/how-it-works.mp4" type="video/mp4" />
          </video>
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>

      {/* Sub-features grid */}
      <div className="mx-auto mt-14 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-slate-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {subFeatures.map((feature, i) => {
            const Icon = ICONS[i]
            return (
              <div key={i} className="relative pl-9">
                <dt className="inline font-semibold text-slate-900">
                  <Icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-tlahtolli-primary" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
