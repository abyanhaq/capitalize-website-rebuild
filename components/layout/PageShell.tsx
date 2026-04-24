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
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-[120px] pointer-events-none" />

      <div className="container-narrow relative z-10 py-24 text-center space-y-6">
        <Badge variant="teal">{section}</Badge>
        <h1 className="font-display text-display-lg font-bold text-white">{title}</h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">{description}</p>
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
