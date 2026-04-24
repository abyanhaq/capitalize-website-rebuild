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
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-navy-900">
      {/* Subtle grid — very light */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Single, restrained glow — top left only */}
      <div className="absolute -top-60 -left-60 w-[640px] h-[640px] rounded-full bg-teal/5 blur-[160px] pointer-events-none" />

      <div className="container-wide relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.p {...fade(0)} className="data-label mb-8">
            AI &amp; Data Consulting · Dallas &amp; Houston
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fade(0.08)}
            className="font-display text-display-xl lg:text-display-2xl font-bold text-white leading-[1.06] mb-8"
          >
            Empowering Organizations
            <br />
            to Realize Value from{' '}
            <span className="text-gradient-teal">Data &amp; AI</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p {...fade(0.16)} className="text-lg text-slate-400 leading-relaxed max-w-xl mb-10">
            A specialist consulting firm that bridges AI strategy and enterprise ROI —
            delivering analytics, automation, and data infrastructure that your teams
            actually adopt and use.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.22)} className="flex flex-wrap items-center gap-4 mb-14">
            <Button href="/contact" variant="primary" size="lg" arrow>
              Get in Touch
            </Button>
            <Button href="/what-we-do" variant="ghost" size="lg">
              See How We Help
            </Button>
          </motion.div>

          {/* Stat pills — inline, no animation theater */}
          <motion.div {...fade(0.3)}>
            <div className="h-px w-16 bg-navy-border mb-8" />
            <div className="flex flex-wrap gap-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
