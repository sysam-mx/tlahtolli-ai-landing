"use client";

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/Button'

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

import heroScreenshot1 from '@/images/screenshots/hero-ai-tutor-es-1.png'
import heroScreenshot2 from '@/images/screenshots/hero-ai-tutor-es-2.png'
import heroScreenshot3 from '@/images/screenshots/hero-ai-tutor-es-3.png'
import heroScreenshot4 from '@/images/screenshots/hero-ai-tutor-es-4.png'
import heroScreenshot5 from '@/images/screenshots/hero-ai-tutor-es-5.png'

const HERO_SLIDES = [heroScreenshot1, heroScreenshot2, heroScreenshot3, heroScreenshot4, heroScreenshot5]
const SLIDE_INTERVAL_MS = 2000

export function Hero() {
  const t = useTranslations('hero')
  const languages = t.raw('languages') as string[]
  const [index, setIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % languages.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [languages.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) {
        setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      }
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const handleMouseEnter = useCallback(() => { pausedRef.current = true }, []);
  const handleMouseLeave = useCallback(() => { pausedRef.current = false }, []);
  const handleClick = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  return (
    <div className="relative pt-14">
      {/* Gradient blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-tlahtolli-cream to-tlahtolli-primary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="py-8 sm:py-12 lg:pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-balance font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-7xl">
              {t('titleStart')}{' '}
              <span className="inline-block text-tlahtolli-secondary">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, position: "relative" }}
                    transition={{ duration: 0.04 }}
                    className="inline-block whitespace-nowrap"
                  >
                    {languages[index]}
                  </motion.span>
                </AnimatePresence>
              </span>{' '}
              {t('titleEnd')}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-slate-600 sm:text-xl/8">
              {t('subtitle')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                href="https://auth.tlahtolli.ai/users/sign_up"
                color="white"
                className="text-tlahtolli-secondary text-lg border-2 border-tlahtolli-secondary px-6 py-3 hover:bg-white shadow-xl hover:scale-105 transition-transform hover:shadow-2xl"
                ga={{
                  event: 'generate_lead',
                  params: {
                    cta: 'call_to_action_signup',
                    item_id: 'signup',
                    location: 'hero',
                    destination: 'app',
                    url: 'https://auth.tlahtolli.ai/users/sign_up',
                    site: 'landing',
                  },
                  once: true,
                }}
              >
                {t('ctaStart')}
              </Button>
              <Button
                href="https://www.youtube.com/watch?v=33A839PIkGk"
                color="tlahtolliSoft"
                target="_blank"
                ga={{
                  event: 'cta_click',
                  once: true,
                  params: {
                    section: 'hero',
                    cta_id: 'hero_ver_video',
                    destination: 'youtube',
                    url: 'https://www.youtube.com/watch?v=33A839PIkGk',
                    page: 'landing_home'
                  }
                }}
              >
                <svg
                  aria-hidden="true"
                  className="h-3 w-3 flex-none group-active:fill-current"
                >
                  <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
                </svg>
                <span className="ml-3">{t('ctaVideo')}</span>
              </Button>
            </div>
          </div>

          {/* Screenshot carousel */}
          <div className="mt-16 flow-root sm:mt-24">
            <div
              className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              <div className="relative overflow-hidden rounded-md" style={{ aspectRatio: '2532 / 1542' }}>
                {HERO_SLIDES.map((src, i) => (
                  <Image
                    key={i}
                    alt={t('screenshotAlt')}
                    src={src}
                    width={2532}
                    height={1542}
                    className="absolute inset-0 w-full h-full object-cover shadow-2xl ring-1 ring-slate-900/10 transition-opacity duration-1000 ease-in-out"
                    style={{ opacity: i === slideIndex ? 1 : 0 }}
                    priority={i === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-tlahtolli-cream to-tlahtolli-accent opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  )
}
