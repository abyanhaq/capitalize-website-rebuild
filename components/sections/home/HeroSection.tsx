'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

// Animated data-viz line — suggests analytics without being literal
function DataViz() {
  const points = [
    [0, 80], [60, 60], [120, 70], [180, 30], [240, 50],
    [300, 20], [360, 35], [420, 10], [480, 25], [540, 5],
  ]
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1.2 }}
      className="absolute right-0 bottom-0 w-full max-w-xl opacity-20 pointer-events-none select-none"
      aria-hidden
    >
      <svg viewBox="0 0 540 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        {/* Grid lines */}
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="0" y1={y} x2="540" y2={y} stroke="#1A2E4A" strokeWidth="1" />
        ))}
        {/* Area fill */}
        <motion.path
          d={`${pathD} L540,100 L0,100 Z`}
          fill="url(#tealGrad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        />
        {/* Line */}
        <motion.path
          d={pathD}
          stroke="#00C8E8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 2, ease: 'easeOut' }}
        />
        {/* Data points */}
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p[0]}
            cy={p[1]}
            r="4"
            fill="#00C8E8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.12, duration: 0.3 }}
          />
        ))}
        <defs>
          <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00C8E8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00C8E8" stopOpacity="0.02" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-900">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Radial teal glow — top-left */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-teal/5 blur-[120px] pointer-events-none" />
      {/* Radial teal glow — bottom-right */}
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] rounded-full bg-teal/4 blur-[100px] pointer-events-none" />

      {/* Animated data viz */}
      <DataViz />

      {/* Scan line — subtle */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent pointer-events-none"
        initial={{ top: '0%', opacity: 0 }}
        animate={{ top: ['0%', '100%'], opacity: [0, 0.6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 2 }}
      />

      <div className="container-wide relative z-10 py-28 lg:py-36">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge variant="teal" className="mb-6">
              <span className="dot-teal animate-pulse-teal" />
              AI &amp; Data Consulting
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display text-display-xl lg:text-display-2xl font-bold text-white leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Empowering Organizations
            <br />
            to Realize Value from{' '}
            <span className="text-gradient-teal">Data &amp; AI</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            We&apos;re not a generalist IT shop. We&apos;re specialists who bridge AI hype and actual enterprise
            ROI — turning fragmented data, legacy reports, and emerging AI tools into a connected
            analytics ecosystem that drives decisions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button href="/contact" variant="primary" size="lg" arrow>
              Get in Touch
            </Button>
            <Button href="/what-we-do" variant="outline" size="lg">
              See How We Help
            </Button>
          </motion.div>

          {/* Trust signal */}
          <motion.p
            className="mt-8 font-mono text-xs tracking-widest text-slate-600 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Trusted by Kearney · Frontier Airlines · Sysco · Kaiser Permanente · Fujitsu · Texas Tech · and more
          </motion.p>
        </div>
      </div>
    </section>
  )
}
