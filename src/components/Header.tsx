'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { track } from '@/lib/ga'

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2" onClick={onClick}>
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        <MobileNavLink
          href="#features"
          onClick={() =>
            track('select_content', {
              content_type: 'nav',
              item_id: 'features',
              location: 'header',
              destination: 'web',
              url: 'https://www.tlahtolli.ai/#features',
              site: 'landing',
            })
          }
        >
          ¿Cómo funciona?
        </MobileNavLink>
        <MobileNavLink
          href="#languages"
          onClick={() =>
            track('select_content', {
              content_type: 'nav',
              item_id: 'languages',
              location: 'header',
              destination: 'web',
              url: 'https://www.tlahtolli.ai/#get-started-today',
              site: 'landing',
            })
          }
        >
          Idiomas
        </MobileNavLink>
        <MobileNavLink
          href="#pricing"
          onClick={() =>
            track('select_content', {
              content_type: 'nav',
              item_id: 'pricing',
              location: 'header',
              destination: 'web',
              url: 'https://www.tlahtolli.ai/#pricing',
              site: 'landing',
            })
          }
        >
          Precios
        </MobileNavLink>
        <hr className="m-2 border-slate-300/40" />
        <MobileNavLink
          href="/login"
          onClick={() =>
            track('select_content', {
              content_type: 'auth',
              item_id: 'login',
              location: 'header',
              destination: 'app',
              url: 'https://auth.tlahtolli.ai/users/sign_in',
              site: 'landing',
            })
          }
        >
          Iniciar sesión
        </MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="pt-10 pb-8">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink
                href="#features"
                onClick={() =>
                  track('select_content', {
                    content_type: 'nav',
                    item_id: 'features',
                    location: 'header',
                    destination: 'web',
                    url: 'https://www.tlahtolli.ai/#features',
                    site: 'landing',
                  })
                }
              >
                ¿Cómo funciona?
              </NavLink>
              <NavLink
                href="#languages"
                onClick={() =>
                  track('select_content', {
                    content_type: 'nav',
                    item_id: 'languages',
                    location: 'header',
                    destination: 'web',
                    url: 'https://www.tlahtolli.ai/#languages',
                    site: 'landing',
                  })
                }
              >
                Idiomas
              </NavLink>
              <NavLink
                href="#pricing"
                onClick={() =>
                  track('select_content', {
                    content_type: 'nav',
                    item_id: 'pricing',
                    location: 'header',
                    destination: 'web',
                    url: 'https://www.tlahtolli.ai/#pricing',
                    site: 'landing',
                  })
                }
              >
                Precios
              </NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink
                href="https://auth.tlahtolli.ai/users/sign_in"
                onClick={() =>
                  track('select_content', {
                    content_type: 'auth',
                    item_id: 'login',
                    location: 'header',
                    destination: 'app',
                    url: 'https://auth.tlahtolli.ai/users/sign_in',
                    site: 'landing',
                  })
                }
              >
                Iniciar Sesión
              </NavLink>
            </div>
            <Button
              href="https://auth.tlahtolli.ai/users/sign_up"
              color="tlahtolli"
              ga={{
                event: 'generate_lead',
                params: {
                  cta: 'header_signup',
                  item_id: 'signup',
                  location: 'header',
                  destination: 'app',
                  url: 'https://auth.tlahtolli.ai/users/sign_up',
                  site: 'landing',
                },
                once: true,
              }}
            >
              <span>Regístrate</span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
