'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { LuPlus, LuMinus } from 'react-icons/lu'

export function Faqs() {
  const t = useTranslations('faqs')
  const items = t.raw('items') as { question: string; answer: string }[]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-4xl divide-y divide-slate-900/10">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {t('title')}
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-slate-900/10">
          {items.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="pt-6">
                <dt>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-start justify-between text-left text-slate-900"
                  >
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {isOpen ? (
                        <LuMinus aria-hidden="true" className="size-6" />
                      ) : (
                        <LuPlus aria-hidden="true" className="size-6" />
                      )}
                    </span>
                  </button>
                </dt>
                {isOpen && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base/7 text-slate-600">{faq.answer}</p>
                  </dd>
                )}
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
