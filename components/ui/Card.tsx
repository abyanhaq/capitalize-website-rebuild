import { cn } from '@/lib/utils'

type CardProps = {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  as?: React.ElementType
}

export function Card({ children, className, hover = false, glow = false, as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={cn(
        'rounded-xl bg-navy-800 border border-navy-border',
        'shadow-card',
        hover && 'transition-all duration-300 hover:shadow-card-hover hover:border-teal/20 hover:-translate-y-0.5',
        glow && 'hover:shadow-teal-sm',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-6 pb-0', className)}>{children}</div>
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-6', className)}>{children}</div>
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('px-6 pb-6 pt-0 flex items-center gap-3', className)}>
      {children}
    </div>
  )
}
