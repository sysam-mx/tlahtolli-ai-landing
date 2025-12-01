"use client";

import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LANGUAGES = [
  "Inglés",
  "Francés",
  "Alemán",
  "Italiano",
  "Portugués",
];

// Palabra más larga → usamos para el width
const LONGEST = LANGUAGES.reduce((a, b) => (a.length > b.length ? a : b), "");

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % LANGUAGES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="pt-20 pb-16 text-center lg:pt-24">
      <h1 className="mx-auto max-w-4xl font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-6xl">
        Aprende vocabulario <br />
        en{' '}
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
              "{LANGUAGES[index]}"
            </motion.span>
          </AnimatePresence>
        </span>
        {' '}con<br />
        <span className="text-tlahtolli-secondary">
          <span className="relative">IA y Repetición Espaciada</span>
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-xl tracking-tight text-slate-700">
        Practica vocabulario real con Inteligencia Artificial, sin clases y sin complicaciones.
      </p>
      <div className="my-10 flex justify-center gap-x-6">
        {/* <Button href="/register">Empieza a practicar</Button> */}
        <Button
          href="https://auth.tlahtolli.ai/users/sign_up"
          color="white"
          className="text-tlahtolli-secondary text-lg border-2 border-tlahtolli-secondary px-6 py-3 hover:bg-white shadow-xl hover:scale-105 transition-transform hover:shadow-2xl"
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
          Comienza hoy mismo
        </Button>
        <Button
          href="https://www.youtube.com/@tlahtolli-ai"
          color="tlahtolliSoft"
          ga={{
            event: 'cta_click',
            once: true,
            params: {
              section: 'hero',
              cta_id: 'hero_ver_video',
              destination: 'youtube',
              url: 'https://www.youtube.com/@tlahtolli-ai',
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
          <span className="ml-3">Ver video</span>
        </Button>
      </div>
      { false && <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Trusted by these six companies so far
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>}
    </Container>
  )
}
