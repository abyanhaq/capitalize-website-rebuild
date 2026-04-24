import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'
import { Phone, MapPin } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-24 bg-navy-900 border-t border-navy-border">
      <div className="container-narrow">
        <div className="h-px w-12 bg-teal/50 mb-12" />

        <AnimateOnView>
          <p className="data-label mb-6">Let&apos;s Work Together</p>
        </AnimateOnView>

        <AnimateOnView delay={0.05}>
          <h2 className="font-display text-display-lg font-bold text-white leading-tight mb-6">
            Let&apos;s Build Your Next Breakthrough Together
          </h2>
        </AnimateOnView>

        <AnimateOnView delay={0.1}>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
            Whether you&apos;re exploring AI, automating workflows, or modernizing your data
            environment, our team is here to help you find the right path forward.
          </p>
        </AnimateOnView>

        <AnimateOnView delay={0.12}>
          <div className="flex flex-wrap gap-4 mb-14">
            <Button href="/contact" variant="primary" size="lg" arrow>
              Get in Touch
            </Button>
            <Button href="/ai-and-advanced-analytics" variant="secondary" size="lg">
              Explore AI Services
            </Button>
          </div>
        </AnimateOnView>

        <AnimateOnView delay={0.15}>
          <div className="flex flex-wrap gap-8 text-sm text-slate-500">
            <a href="tel:2145313904" className="flex items-center gap-2 hover:text-slate-300 transition-colors">
              <Phone className="h-3.5 w-3.5 text-teal" />
              (214) 531-3904
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-teal" />
              Dallas, TX · Houston, TX
            </div>
            <span>Mon – Fri, 8 AM – 6 PM CT</span>
          </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
