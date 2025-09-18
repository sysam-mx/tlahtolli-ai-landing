'use client'

import Link from 'next/link'
import clsx from 'clsx'
import * as React from 'react'
import { track } from '@/lib/ga'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue:
      'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
    tlahtolli:
      'bg-tlahtolli-primary text-white hover:bg-tlahtolli-secondary active:bg-tlahtolli-secondary/90 focus-visible:outline-tlahtolli-primary',
    tlahtolliSoft:
      'bg-tlahtolli-cream text-tlahtolli-text hover:bg-tlahtolli-accent/40 active:bg-tlahtolli-accent/40 focus-visible:outline-tlahtolli-primary',
    tlahtolliSuccess:
      'bg-tlahtolli-success text-white hover:opacity-90 active:opacity-80 focus-visible:outline-tlahtolli-success',
    tlahtolliError:
      'bg-tlahtolli-error text-white hover:opacity-90 active:opacity-80 focus-visible:outline-tlahtolli-error',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
    tlahtolli:
      'ring-tlahtolli-border text-tlahtolli-text hover:ring-tlahtolli-primary hover:text-tlahtolli-text active:bg-tlahtolli-cream focus-visible:outline-tlahtolli-primary',
  },
}

type CommonProps = {
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
  ga?: { event: string; params?: Record<string, any>; once?: boolean }
}

type ButtonProps = (
  | { variant?: 'solid'; color?: keyof typeof variantStyles.solid }
  | { variant: 'outline'; color?: keyof typeof variantStyles.outline }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & { href?: undefined })
  ) &
  CommonProps

export function Button({ className, onClick, ga, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'slate'

  const classes = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : variantStyles.solid[props.color],
    className
  )

  const firedRef = React.useRef(false)
  const handleClick: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> = (e) => {
    if (ga && (!ga.once || !firedRef.current)) {
      track(ga.event, ga.params)
      if (ga.once) firedRef.current = true
    }
    onClick?.(e)
  }

  return typeof (props as any).href === 'undefined' ? (
    <button className={classes} onClick={handleClick} {...(props as any)} />
  ) : (
    <Link className={classes} onClick={handleClick} {...(props as any)} />
  )
}
