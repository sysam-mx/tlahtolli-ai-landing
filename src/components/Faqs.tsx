import Image from 'next/image'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: '¿Cómo funciona Tlahtolli AI?',
      answer:
        'Recargas tokens, eliges los temas que te interesan y el sistema arma tu lista. Practicas en un chat guiado por AI y luego repasas cuando toca con repetición espaciada.',
    },
    {
      question: '¿Qué son los tokens y cuándo se gastan?',
      answer:
        'Son créditos de uso. Se descuentan al practicar en el chat. Tu saldo aparece siempre visible y puedes recargar cuando lo necesites.',
    },
    {
      question: '¿Necesito una suscripción?',
      answer:
        'No. Pagas solo lo que usas con recargas de tokens, sin permanencias ni planes obligatorios.',
    },
  ],
  [
    {
      question: '¿Puedo elegir qué estudiar?',
      answer:
        'Sí. Seleccionas tus temas y ajustas la sesión (cantidad y dificultad). El sistema genera tu lista al instante y puedes regenerarla cuando quieras.',
    },
    {
      question: '¿La AI elige por mí?',
      answer:
        'No. La AI te ayuda en el chat de práctica (pregunta, corrige y da ejemplos). La selección la arma el sistema según los temas y preferencias que tú indiques.',
    },
    {
      question: '¿Qué encuentro en “Mi biblioteca”?',
      answer:
        'Todas las palabras y frases que ya practicaste con métricas rápidas para entender tu avance. Puedes buscar y filtrar para retomar lo que te conviene.',
    },
  ],
  [
    {
      question: '¿Cómo funciona el repaso inteligente?',
      answer:
        'Usamos repetición espaciada para recordarte lo justo en el momento adecuado. Así refuerzas a largo plazo sin estudiar de más.',
    },
    {
      question: '¿Dónde veo mi progreso?',
      answer:
        'En la sección de Estadísticas: racha, tasa de aciertos y evolución de tu práctica para que veas cómo avanzas con claridad.',
    },
    {
      question: '¿Hay app móvil o versión para celular?',
      answer:
        'Aún no. Por ahora Tlahtolli funciona en escritorio. Estamos trabajando en soporte para móviles más adelante.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-tlahtolli-light py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            ¿No encontraste lo que buscabas? Contáctanos y con gusto te ayudamos.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
