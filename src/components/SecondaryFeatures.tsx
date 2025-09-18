'use client'

import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { SiJsonwebtokens } from 'react-icons/si'
import { LuListChecks, LuMessageSquare } from 'react-icons/lu'
import type { IconType } from 'react-icons'

import { Container } from '@/components/Container'
import screenshotAssistantChatInteract from '@/images/screenshots/assistant-chat-interact-v1.png'
import screenshotCatalogSelection from '@/images/screenshots/catalog-selection-v1.png'
import screenshottokensTopUp from '@/images/screenshots/tokens-topup-v1.png'

interface Feature {
  name: React.ReactNode
  summary: string
  description: string
  image: ImageProps['src']
  icon: IconType
}

const features: Array<Feature> = [
  {
    name: 'Tokens a la medida',
    summary: 'Recarga cuando lo necesites; paga solo lo que practicas.',
    description:
      'Tu saldo siempre visible y recargas en segundos. Sin suscripciones obligatorias ni fricción.',
    image: screenshottokensTopUp, // ← screenshot de "tokens"
    icon: SiJsonwebtokens,       // 👈 aquí el logo de JWT como “token”
  },
  {
    name: 'Selección por temas',
    summary: 'Elige los temas; el sistema prepara tu lista al instante.',
    description:
      'Marca los temas que te interesan y ajusta cantidad o dificultad. Con un clic obtienes tu lista para hoy y puedes regenerarla cuando lo necesites.',
    image: screenshotCatalogSelection,  // ← screenshot del modal de selección
    icon: LuListChecks,          // 👈 icono de “lista con checks”
  },
  {
    name: 'Práctica en el chat (AI)',
    summary: 'Diálogo guiado con correcciones y audio.',
    description:
      'Convierte tu lista en uso real conversando con el asistente: responde, recibe feedback claro y ejemplos naturales con audio.',
    image: screenshotAssistantChatInteract,   // ← screenshot del chat
    icon: LuMessageSquare,
  },
]

function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'h-9 w-9 rounded-lg flex items-center justify-center',
          isActive ? 'bg-tlahtolli-primary' : 'bg-slate-500'
        )}
      >
        <feature.icon className="h-5 w-5 text-white" />
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-tlahtolli-primary' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 top-8 bottom-0 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-211 overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="data-selected:not-data-focus:outline-hidden">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-tlahtolli-cream px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out data-selected:not-data-focus:outline-hidden',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-211 overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-slate-900/10 ring-inset" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Es muy fácil empezar a aprender
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Recarga tus tokens cuando los necesites, elige los <em>temas</em> que quieres trabajar y practica en el chat con AI.
            Paga solo lo que usas y avanza a tu propio ritmo.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
