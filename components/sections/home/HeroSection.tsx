'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const STATS = [
  { value: '1,500+', label: 'Projects' },
  { value: '1,000+', label: 'Clients' },
  { value: '95%',    label: 'Retention' },
  { value: '20+',    label: 'Years' },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden" style={{
      background: 'linear-gradient(160deg, #060E1B 0%, #070F1E 45%, #060C18 100%)',
      minHeight: 'calc(100dvh - 4rem)',
    }}>

      {/* Precision dot grid — data-forward, very subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Atmospheric teal — top right, very low opacity for color depth */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          right: '-5%',
          width: '55%',
          height: '70%',
          background: 'radial-gradient(ellipse at center, rgba(8,145,178,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Subtle warm gradient — bottom left, adds ground depth */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '0',
          left: '0',
          width: '40%',
          height: '40%',
          background: 'radial-gradient(ellipse at bottom left, rgba(6,14,27,0.9) 0%, transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10 py-10 lg:py-14">
        <div className="max-w-3xl">

          {/* Eyebrow — accent bar + label */}
          <motion.div {...fade(0)} className="mb-8 flex items-center gap-3">
            <div className="h-px w-8 bg-teal" style={{ opacity: 0.7 }} />
            <p className="font-sans text-[11px] font-medium tracking-[0.18em] uppercase" style={{ color: '#22D3EE', opacity: 0.75 }}>
              AI &amp; Data Consulting · Dallas &amp; Houston, TX
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fade(0.08)}
            className="font-display text-display-xl lg:text-display-2xl font-bold text-white leading-[1.06] mb-7"
          >
            Empowering Organizations
            <br />
            to Realize Value from{' '}
            <span style={{ color: '#38BDF8' }}>Data &amp; AI</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fade(0.16)}
            className="text-lg leading-relaxed max-w-xl mb-10"
            style={{ color: '#8A9EBB' }}
          >
            A specialist consulting firm that bridges AI strategy and enterprise ROI —
            delivering analytics, automation, and data infrastructure
            so your teams work smarter, not harder.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.22)} className="flex flex-wrap items-center gap-4 mb-16">
            <Button href="/contact" variant="primary" size="lg" arrow>
              Get in Touch
            </Button>
            <Button
              href="/what-we-do"
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/8 hover:border-white/40"
            >
              Explore Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div {...fade(0.3)}>
            <div className="h-px w-12 mb-8" style={{ background: 'rgba(26,46,74,0.9)' }} />
            <div className="flex flex-wrap gap-10">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-white tracking-tight">{s.value}</p>
                  <p className="text-xs mt-0.5 tracking-wide" style={{ color: '#4A6278' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
