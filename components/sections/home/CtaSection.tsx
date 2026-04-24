import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'
import { Phone, Mail, MapPin } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-800 border-t border-navy-border">
      {/* Glow */}
      <div className="absolute inset-0 bg-teal-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-teal/6 blur-[100px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="container-narrow relative z-10 text-center">
        <AnimateOnView>
          <p className="data-label mb-6">Let&apos;s Build What&apos;s Next</p>
        </AnimateOnView>

        <AnimateOnView delay={0.05}>
          <h2 className="font-display text-display-lg font-bold text-white mb-6 leading-tight">
            Let&apos;s Build Your Next{' '}
            <span className="text-gradient-teal">Breakthrough Together</span>
          </h2>
        </AnimateOnView>

        <AnimateOnView delay={0.1}>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re exploring AI, automating workflows, or modernizing your data environment,
            our team is here to help you find the right solution. We&apos;ll get back to you within
            one business day.
          </p>
        </AnimateOnView>

        <AnimateOnView delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Button href="/contact" variant="primary" size="lg" arrow>
              Get in Touch
            </Button>
            <Button href="/ai-and-advanced-analytics" variant="outline" size="lg">
              Start with AI
            </Button>
          </div>
        </AnimateOnView>

        {/* Contact details */}
        <AnimateOnView delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
            <a
              href="tel:2145313904"
              className="flex items-center gap-2 hover:text-teal transition-colors duration-200"
            >
              <Phone className="h-4 w-4 text-teal" />
              (214) 531-3904
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal" />
              Dallas, TX · Houston, TX
            </div>
            <div className="flex items-center gap-2">
              <span className="dot-teal animate-pulse-teal" />
              Mon – Fri, 8 AM – 6 PM CT
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
