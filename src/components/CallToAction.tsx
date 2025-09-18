'use client'

import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import tlahtoIntroductionV1 from '@/images/tlahto-introduction-v1.svg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gradient-to-r from-tlahtolli-primary via-tlahtolli-accent to-tlahtolli-secondary py-20 sm:py-24"
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
          {/* Texto */}
          <div className="mx-auto max-w-xl text-center lg:col-span-6 lg:text-left">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Empieza hoy con Tlahtolli AI
            </h2>
            <p className="mt-4 text-lg tracking-tight text-white/90">
              Recarga tokens, elige tus temas y practica en el chat con AI.
              Toma minutos y puedes avanzar a tu ritmo, sin suscripciones.
            </p>

            <Button
              href="https://app.tlahtolli.ai/signup"
              color="white"
              className="mt-8"
              ga={{
                event: 'generate_lead',
                params: {
                  cta: 'call_to_action_signup',
                  item_id: 'signup',
                  location: 'call_to_action',
                  destination: 'app',
                  url: 'https://app.tlahtolli.ai/signup',
                  site: 'landing',
                },
                once: true,
              }}
            >
              Comienza hoy mismo
            </Button>
          </div>

          {/* Mascota */}
          <div className="flex justify-center lg:col-span-6">
            <Image
              src={tlahtoIntroductionV1}
              alt="Tlahto, la mascota de Tlahtolli, saludando"
              className="drop-shadow-xl"
              width={426}
              height={530}
              priority={false}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}