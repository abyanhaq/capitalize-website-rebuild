'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowRight, Loader2 } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonBaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  arrow?: boolean
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined
  }

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string
    external?: boolean
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  // Refined teal — works on both dark and light backgrounds
  primary: [
    'bg-teal text-white font-semibold',
    'hover:bg-teal-dim',
    'active:bg-teal-dim',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transition-colors duration-200',
  ].join(' '),

  // Dark surface — for use on dark sections (hero, CTA)
  secondary: [
    'bg-navy-700 text-slate-100 font-medium',
    'border border-navy-border',
    'hover:border-teal/30 hover:bg-navy-600 hover:text-white',
    'active:bg-navy-700',
    'transition-all duration-200',
  ].join(' '),

  // Clean outline — works on both contexts
  outline: [
    'bg-transparent font-medium',
    'border border-teal/40 text-teal',
    'hover:border-teal hover:bg-teal/5',
    'active:bg-teal/10',
    'transition-all duration-200',
  ].join(' '),

  // Ghost — dark context
  ghost: [
    'bg-transparent text-slate-400 font-medium',
    'hover:text-white hover:bg-navy-700',
    'active:bg-navy-800',
    'transition-all duration-200',
  ].join(' '),
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3.5 text-sm rounded-md gap-1.5',
  md: 'h-10 px-5 text-sm rounded-lg gap-2',
  lg: 'h-12 px-7 text-base rounded-lg gap-2.5',
}

const baseClasses =
  'inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-white'

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = 'primary',
      size = 'md',
      loading = false,
      arrow = false,
      className,
      children,
      ...rest
    } = props

    const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

    const content = (
      <>
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
        {arrow && !loading && (
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        )}
      </>
    )

    if ('href' in props && props.href !== undefined) {
      const { href, external, ...linkRest } = rest as ButtonAsLink
      if (external) {
        return (
          <a
            href={href}
            className={cn(classes, 'group')}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...(linkRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {content}
          </a>
        )
      }
      return (
        <Link
          href={href}
          className={cn(classes, 'group')}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(linkRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      )
    }

    return (
      <button
        className={cn(classes, 'group')}
        disabled={loading}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    )
  },
)
