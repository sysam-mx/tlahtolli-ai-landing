'use client'

import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { LuYoutube, LuInstagram, LuFacebook } from "react-icons/lu"
import { track } from '@/lib/ga'

export function Footer() {
  return (
    <footer className="bg-tlahtolli-light">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink
                href="#features"
                onClick={() =>
                  track('select_content', {
                    content_type: 'nav',
                    item_id: 'features',
                    location: 'footer',
                    destination: 'web',
                    url: 'https://www.tlahtolli.ai/#features',
                    site: 'landing',
                  })
                }
              >
                ¿Cómo funciona?
              </NavLink>
              <NavLink
                href="#testimonials"
                onClick={() =>
                  track('select_content', {
                    content_type: 'nav',
                    item_id: 'testimonials',
                    location: 'footer',
                    destination: 'web',
                    url: 'https://www.tlahtolli.ai/#testimonials',
                    site: 'landing',
                  })
                }
              >
                Testimonios
              </NavLink>
              <NavLink
                href="#pricing"
                onClick={() =>
                  track('select_content', {
                    content_type: 'nav',
                    item_id: 'pricing',
                    location: 'footer',
                    destination: 'web',
                    url: 'https://www.tlahtolli.ai/#pricing',
                    site: 'landing',
                  })
                }
              >
                Precios
              </NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://www.youtube.com/@tlahtolli-ai"
              aria-label="Tlahtolli AI on YouTube"
              className="group inline-flex rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track('select_content', {
                  content_type: 'social',
                  item_id: 'youtube',
                  location: 'footer',
                  destination: 'web',
                  url: 'https://www.youtube.com/@tlahtolli-ai',
                  site: 'landing',
                })
              }
            >
              <LuYoutube className="h-6 w-6 text-slate-500 group-hover:text-slate-700" strokeWidth={1.8} />
            </Link>

            <Link
              href="https://www.instagram.com/tlahtolli.ai/"
              aria-label="Tlahtolli AI on Instagram"
              className="group inline-flex rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track('select_content', {
                  content_type: 'social',
                  item_id: 'instagram',
                  location: 'footer',
                  destination: 'web',
                  url: 'https://www.instagram.com/tlahtolli.ai/',
                  site: 'landing',
                })
              }
            >
              <LuInstagram className="h-6 w-6 text-slate-500 group-hover:text-slate-700" strokeWidth={1.8} />
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=61578598147566"
              aria-label="Tlahtolli AI on Facebook"
              className="group inline-flex rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track('select_content', {
                  content_type: 'social',
                  item_id: 'facebook',
                  location: 'footer',
                  destination: 'web',
                  url: 'https://www.facebook.com/profile.php?id=61578598147566',
                  site: 'landing',
                })
              }
            >
              <LuFacebook className="h-6 w-6 text-slate-500 group-hover:text-slate-700" strokeWidth={1.8} />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} tlahtolli.ai. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
