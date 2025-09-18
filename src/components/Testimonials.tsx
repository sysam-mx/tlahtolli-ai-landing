import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'


const testimonials = [
  [
    {
      content:
        'Empecé con 100k tokens, elegí temas de viajes y trabajo y en una tarde ya estaba practicando. El chat corrige sin juzgar y las expresiones vuelven justo cuando toca repasar.',
      author: {
        name: 'Mariana López',
        role: 'Estudiante de Ingeniería',
        image: avatarImage1,
      },
    },
    {
      content:
        'Lo uso 10–15 min al día. La selección por temas me ahorra tiempo y la racha me motiva un montón. Las correcciones con audio son súper útiles para mejorar mi pronunciación.',
      author: {
        name: 'Ana Pérez',
        role: 'Diseñadora UX',
        image: avatarImage4,
      },
    },
    {
      content:
        'Usé Tlahtolli para entrevistas de trabajo. Elegí temas de “oficina” y “proyectos”, y con 10 minutos diarios en el chat me sentí mucho más seguro en las preguntas técnicas.',
      author: {
        name: 'Armando Alejandre',
        role: 'Desarrollador Backend · Guadalajara',
        image: avatarImage7 ,
      },
    },
  ],
  [
    {
      content:
        'Preparé una lista para clase y mis alumnos se engancharon con los ejemplos de audio. La tasa de aciertos me ayuda a ver el avance sin complicarme.',
      author: {
        name: 'Carlos Hernández',
        role: 'Profesor de secundaria',
        image: avatarImage5,
      },
    },
    {
      content:
        'Me gustó que pagas solo lo que usas. Cuando necesito más, recargo tokens y ya. Sin planes raros ni suscripciones obligatorias.',
      author: {
        name: 'Fernanda Torres',
        role: 'Emprendedora',
        image: avatarImage2,
      },
    },
    {
      content:
        'Como mamá con poco tiempo, me funciona recargar tokens cuando puedo y hacer sesiones cortas. Ver mi racha me motiva a no romper el hábito.',
      author: {
        name: 'Laura Martínez',
        role: 'Diseñadora · Puebla',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
        'Estoy planeando un viaje y enfoqué mis temas en “viajes” y “restaurantes”. Noté el cambio cuando tuve que pedir en inglés: salió más fluido.',
      author: {
        name: 'Pedro Reynoso',
        role: 'Arquitecto',
        image: avatarImage3,
      },
    },
    {
      content:
        'Tlahtolli me deja practicar vocabulario realmente útil. Elegir por temas me ahorra tiempo y en dos semanas ya me siento más segura al hablar. Las correcciones con audio ayudan muchísimo.',
      author: {
        name: 'Diana Cristobal',
        role: 'Marketing Digital',
        image: avatarImage6,
      },
    },
    {
      content:
        'Me enfoqué en “viajes” y “restaurantes”. Después de una semana, ya podía pedir y responder con más naturalidad. Las correcciones con audio marcan la diferencia.',
      author: {
        name: 'Carlos Navarro',
        role: 'Administración · Monterrey',
        image: avatarImage9,
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-tlahtolli-light py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Usuarios que confían en nosotros para aprender
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Nuestra comunidad comparte su experiencia real: una forma simple de practicar, sentirse acompañado por la AI y ver resultados medibles con el tiempo.
            Nada explica mejor el producto que las historias de quienes lo usan cada día.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
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
