import { cn } from '@/lib/utils'

type BadgeVariant = 'teal' | 'navy' | 'outline'

type BadgeProps = {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  teal: 'bg-teal/10 text-teal border border-teal/20',
  navy: 'bg-navy-700 text-slate-300 border border-navy-border',
  outline: 'bg-transparent text-slate-500 border border-paper-border',
}

export function Badge({ variant = 'teal', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-sans text-xs font-medium tracking-widest uppercase',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
