'use client'

import Link from 'next/link'
import clsx from 'clsx'
import * as React from 'react'

type NavLinkProps = Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href' | 'children'> & {
  href: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  className?: string
}

export function NavLink({ href, children, onClick, className, ...props }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        'inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-tlahtolli-cream/50 hover:text-slate-900',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
