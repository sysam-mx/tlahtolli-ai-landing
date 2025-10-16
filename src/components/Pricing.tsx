'use client'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { SiJsonwebtokens } from 'react-icons/si'

type Pack = {
  id: string
  name: string
  hint: string
  tokensLabel: string
  priceLabel: string
  currencyLabel: string
}

const PACKS: Pack[] = [
  { id: 'prod_T0c7Fs7hTG2vBT', name: '200K Tokens', hint: '≈ 1 semana',  tokensLabel: '+ 200000 tokens', priceLabel: '$41.05', currencyLabel: 'MXN' },
  { id: 'prod_T0cLAKV7L2BJUF', name: '400K Tokens', hint: '≈ 2 semanas',  tokensLabel: '+ 400000 tokens', priceLabel: '$75.56', currencyLabel: 'MXN' },
  { id: 'prod_T0cN6CsIUQK7qp', name: '600K Tokens', hint: '≈ 3 semanas', tokensLabel: '+ 600000 tokens', priceLabel: '$110.08', currencyLabel: 'MXN' },
  { id: 'prod_T0cPStrUK6l5wA', name: '800K Tokens', hint: '≈ 4 semanas', tokensLabel: '+ 800000 tokens', priceLabel: '$144.59', currencyLabel: 'MXN' },
]

function TokenCard({ id, name, tokensLabel, hint, priceLabel, currencyLabel }: Pack) {
  return (
    <li className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition-transform duration-150 sm:p-6">
      {/* Header */}
      <header className="flex items-center justify-center gap-2 text-center">
        <h3 className="text-lg font-semibold text-tlahtolli-secondary">{name}</h3>
        <span className="text-tlahtolli-secondary">
          <SiJsonwebtokens size={18} />
        </span>
      </header>

      <hr className="my-3 border-gray-100" />

      {/* Descripción */}
      <div className="flex flex-col items-center gap-1">
        <p className="px-2 text-[13px] font-medium text-emerald-600 sm:text-sm">{tokensLabel}</p>
        <p className="px-2 text-center text-xs leading-snug text-gray-600 sm:text-[13px]">{hint}</p>
      </div>

      {/* Precio */}
      <div className="mb-2 mt-3 flex items-baseline justify-center gap-1">
        <span className="text-2xl font-extrabold text-slate-900 sm:text-3xl">{priceLabel}</span>
        <span className="text-xs font-semibold uppercase text-gray-500">{currencyLabel}</span>
      </div>

      {/* CTA con tu Button */}
      <Button
        href="https://auth.tlahtolli.ai/users/sign_up"
        variant="solid"
        color="slate"
        className="mt-3 w-full rounded-md text-tlahtolli-light"
        aria-label={`Recargar ${name} por ${priceLabel} ${currencyLabel}`}
        ga={{
          event: 'generate_lead',
          params: {
            cta: 'pricing_signup',
            item_id: 'signup',
            location: 'pricing',
            destination: 'app',
            url: 'https://auth.tlahtolli.ai/users/sign_up',
            site: 'landing',
          },
          once: true,
        }}
      >
        Recargar
      </Button>
    </li>
  )
}

export function Pricing() {
  return (
    <section id="pricing" aria-label="Paquetes de tokens" className="bg-tlahtolli-text py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Elige tu paquete
          </h2>
          <p className="mt-3 text-base tracking-tight text-white/85 sm:text-lg">
            Recarga flexible, sin planes ni compromiso. Elige un paquete hoy, úsalo a tu ritmo y vuelve a recargar cuando quieras.
          </p>
        </div>

        {/* Grid responsivo: 1 / 2 / 4 */}
        <ul role="list" className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PACKS.map((p) => (
            <TokenCard key={p.id} {...p} />
          ))}
        </ul>
      </Container>
    </section>
  )
}
