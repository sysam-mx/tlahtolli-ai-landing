'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { LuCheck } from 'react-icons/lu'
import { Button } from '@/components/Button'
import { useRegion } from '@/context/RegionContext'
import type { Currency } from '@/utils/detectCurrency'

const PLAN_KEYS = ['starter', 'pro', 'power'] as const
type PlanKey = (typeof PLAN_KEYS)[number]

const PRICES: Record<PlanKey, Record<Currency, string>> = {
  starter: { mxn: '$99', usd: '$7.99' },
  pro:     { mxn: '$199', usd: '$15.99' },
  power:   { mxn: '$299', usd: '$23.99' },
}

const CURRENCY_LABEL: Record<Currency, string> = {
  mxn: 'MXN',
  usd: 'USD',
}

const FEATURED: Record<PlanKey, boolean> = {
  starter: false,
  pro: true,
  power: false,
}

export function Pricing() {
  const t = useTranslations('pricing')
  const { currency } = useRegion()

  const tiers = PLAN_KEYS.map((key) => {
    const featuresRaw = t.raw(`tiers.${key}.features`) as string[]
    return {
      key,
      id: `tier-${key}`,
      name: t(`tiers.${key}.name`),
      description: t(`tiers.${key}.description`),
      features: Array.isArray(featuresRaw) ? featuresRaw : [],
      mostPopular: FEATURED[key],
      price: PRICES[key][currency],
      currencyLabel: CURRENCY_LABEL[currency],
    }
  })

  return (
    <section id="pricing" className="mt-32 sm:mt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {t('title')}
          </p>
        </div>
        <p
          className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg/8 text-slate-600 sm:text-xl/8"
          dangerouslySetInnerHTML={{ __html: t.raw('trialNote') as string }}
        />

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={clsx(
                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-inset ring-slate-200 xl:p-10',
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={clsx(
                      tier.mostPopular ? 'text-tlahtolli-secondary' : 'text-slate-900',
                      'text-lg/8 font-semibold',
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-tlahtolli-primary/10 px-2.5 py-1 text-xs/5 font-semibold text-tlahtolli-secondary">
                      {t('mostPopular')}
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm/6 text-slate-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-slate-900">{tier.price}</span>
                  <span className="text-sm/6 font-semibold text-slate-600">{tier.currencyLabel}{t('perMonth')}</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm/6 text-slate-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <LuCheck aria-hidden="true" className="h-6 w-5 flex-none text-tlahtolli-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                href="https://auth.tlahtolli.ai/users/sign_up"
                color={tier.mostPopular ? 'tlahtolli' : 'white'}
                className={clsx(
                  'mt-8 w-full text-center',
                  tier.mostPopular
                    ? ''
                    : 'text-tlahtolli-secondary ring-1 ring-inset ring-tlahtolli-border hover:ring-tlahtolli-primary',
                )}
                ga={{
                  event: 'generate_lead',
                  params: {
                    cta: 'pricing_signup',
                    item_id: 'signup',
                    location: 'pricing',
                    plan: tier.key,
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
          ))}
        </div>
      </div>
    </section>
  )
}
