/**
 * Temporary page shell used by stub pages while full designs are built out.
 * Each page will eventually replace this with its own purpose-built layout.
 */
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

type PageShellProps = {
  section: string
  title: string
  description: string
  cta?: { label: string; href: string }
}

export function PageShell({ section, title, description, cta }: PageShellProps) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="container-narrow relative z-10 py-24 text-center space-y-6">
        <Badge variant="teal">{section}</Badge>
        <h1 className="font-display text-display-lg font-bold text-white">{title}</h1>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#8A9EBB' }}>{description}</p>
        <div className="flex items-center justify-center gap-4 pt-4">
          {cta && (
            <Button href={cta.href} variant="primary" size="lg" arrow>
              {cta.label}
            </Button>
          )}
          <Button href="/contact" variant="outline" size="lg">
            Talk to Us
          </Button>
        </div>
      </div>
    </div>
  )
}
