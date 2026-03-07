'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/Button'
import tlahtoIntroductionV1 from '@/images/tlahto-introduction-v1.svg'

export function CallToAction() {
  const t = useTranslations('cta')

  return (
    <section className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
      {/* Background gradient blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[max(50%,38rem)] aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-tlahtolli-cream to-tlahtolli-primary"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[-22rem] aspect-[1155/678] w-[72.1875rem] flex-none bg-gradient-to-tr from-tlahtolli-accent to-tlahtolli-secondary xl:ml-0 xl:mr-[calc(50%-12rem)]"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Mascota */}
          <div className="flex justify-center lg:col-span-5">
            <Image
              src={tlahtoIntroductionV1}
              alt={t('mascotAlt')}
              className="drop-shadow-xl"
              width={360}
              height={468}
              priority={false}
            />
          </div>

          {/* Texto */}
          <div className="mx-auto max-w-xl text-center lg:col-span-7 lg:text-left">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {t('title')}
            </h2>
            <p
              className="mt-6 text-lg/8 text-slate-600"
              dangerouslySetInnerHTML={{ __html: t.raw('subtitle') as string }}
            />
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button
                href="https://auth.tlahtolli.ai/users/sign_up"
                color="tlahtolli"
                className="text-lg px-8 py-3 shadow-xl hover:scale-105 transition-transform hover:shadow-2xl"
                ga={{
                  event: 'generate_lead',
                  params: {
                    cta: 'final_cta_signup',
                    item_id: 'signup',
                    location: 'final_cta',
                    destination: 'app',
                    url: 'https://auth.tlahtolli.ai/users/sign_up',
                    site: 'landing',
                  },
                  once: true,
                }}
              >
                {t('ctaStart')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}