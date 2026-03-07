'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { LuYoutube, LuInstagram, LuFacebook } from "react-icons/lu"
import { track } from '@/lib/ga'

import ajoloteSvg from '@/images/tlahto-v1.svg'

export function Footer() {
  const t = useTranslations('footer')
  return (
    <footer className="bg-tlahtolli-light">
      <Container>
        <div className="py-16">
          <div className="flex items-center justify-between">
            <Logo className="h-10 w-auto" />
            <Image src={ajoloteSvg} alt="Tlahtolli mascot" className="h-12 w-auto" />
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex flex-wrap justify-center gap-x-6 gap-y-2">
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
                {t('howItWorks')}
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
                {t('pricing')}
              </NavLink>
              <NavLink
                href="#languages"
                onClick={() =>
                  track('select_content', {
                    content_type: 'nav',
                    item_id: 'languages',
                    location: 'footer',
                    destination: 'web',
                    url: 'https://www.tlahtolli.ai/#languages',
                    site: 'landing',
                  })
                }
              >
                {t('languages')}
              </NavLink>
              <NavLink
                href="#faq"
                onClick={() =>
                  track('select_content', {
                    content_type: 'nav',
                    item_id: 'faq',
                    location: 'footer',
                    destination: 'web',
                    url: 'https://www.tlahtolli.ai/#faq',
                    site: 'landing',
                  })
                }
              >
                {t('faqs')}
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
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </Container>
    </footer>
  )
}
