import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'
import { Phone, MapPin } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #060E1B 0%, #070F1E 60%, #060C18 100%)' }}>
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(30,58,90,0.45) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Subtle atmospheric teal — bottom right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%',
          right: '-5%',
          width: '50%',
          height: '80%',
          background: 'radial-gradient(ellipse at center, rgba(8,145,178,0.06) 0%, transparent 65%)',
        }}
      />
      <div className="container-narrow relative z-10">
        <div className="h-px w-12 bg-teal/40 mb-12" />

        <AnimateOnView>
          <p className="section-label mb-6" style={{ color: '#22D3EE', opacity: 0.7 }}>Capitalize Analytics</p>
        </AnimateOnView>

        <AnimateOnView delay={0.05}>
          <h2 className="font-display text-display-lg font-bold text-white leading-tight mb-6">
            Ready to Make Your Data Work for You?
          </h2>
        </AnimateOnView>

        <AnimateOnView delay={0.1}>
          <p className="text-lg mb-10 leading-relaxed max-w-xl" style={{ color: '#8A9EBB' }}>
            Whether you&apos;re modernizing your data platform, building an AI use case, or
            automating workflows — our team works alongside yours from day one through adoption.
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
          <div className="flex flex-wrap gap-8 text-sm" style={{ color: '#4A6278' }}>
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
