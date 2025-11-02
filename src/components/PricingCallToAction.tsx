'use client'

import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import tlahtoFreeTokensV2 from '@/images/tlahto-free-tokens-v2.svg'

export function PricingCallToAction() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-tlahtolli-text/80 py-20 sm:py-24"
    >
      <Container className="relative">
        {/* Glow decorativo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        >
          <div className="absolute left-1/2 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-[-10%] right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Mascota */}
          <div className="flex justify-center lg:col-span-6">
            <Image
              src={tlahtoFreeTokensV2}
              alt="Tlahto, la mascota de Tlahtolli, saludando"
              className="drop-shadow-xl"
              width={426}
              height={530}
              priority={false}
            />
          </div>

          {/* Texto */}
          <div className="mx-auto max-w-xl text-center lg:col-span-6 lg:text-left">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              ¡Tu prueba gratuita está lista!
            </h2>
            <p className="mt-4 text-lg tracking-tight text-white/90">
              Crea tu cuenta, obtén 500,000 tokens de regalo y prueba el chat con IA sin pagar nada.
              Practica vocabulario, explora idiomas y usa tus tokens como quieras<br/><br/>
              ¡Regístrate ahora y empieza a practicar!
            </p>
            <Button
              href="https://auth.tlahtolli.ai/users/sign_up"
              color="white"
              className="mt-8 text-tlahtolli-secondary text-xl border-2 border-tlahtolli-secondary px-6 py-3 hover:bg-white shadow-xl hover:scale-105 transition-transform hover:shadow-2xl"
              ga={{
                event: 'generate_lead',
                params: {
                  cta: 'call_to_action_signup',
                  item_id: 'signup',
                  location: 'call_to_action',
                  destination: 'app',
                  url: 'https://auth.tlahtolli.ai/users/sign_up',
                  site: 'landing',
                },
                once: true,
              }}
            >
              Regístrate Gratis
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}