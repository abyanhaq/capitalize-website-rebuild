'use client'

import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { StaggerContainer, staggerItem } from '@/components/ui/AnimateOnView'
import { motion } from 'framer-motion'

const STATS_PRIMARY = [
  { value: '1,500+', label: 'Projects Delivered' },
  { value: '1,000+', label: 'Clients Served' },
  { value: '95%',    label: 'Client Retention' },
  { value: '20+',    label: 'Years of Expertise' },
]

const STATS_RESULTS = [
  { value: '50,000+', label: 'Hours Saved for Clients' },
  { value: '$10M+',   label: 'Operational Savings Delivered' },
  { value: '5,000+',  label: 'Workflows Designed' },
]

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      variants={staggerItem}
      className="flex flex-col items-center text-center gap-1 px-6 py-4 border-r border-navy-border last:border-r-0"
    >
      <span className="font-display text-display-md font-bold text-teal">
        <AnimatedCounter value={value} />
      </span>
      <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">{label}</span>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <section className="border-y border-navy-border bg-navy-800">
      {/* Primary stats */}
      <div className="container-wide py-10">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-navy-border">
          {STATS_PRIMARY.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </StaggerContainer>
      </div>

      {/* Divider */}
      <div className="divider-teal mx-auto max-w-xs" />

      {/* Results stats */}
      <div className="container-wide py-10">
        <div className="text-center mb-6">
          <p className="data-label">Proven Results That Move Businesses Forward</p>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 divide-x-0 sm:divide-x divide-navy-border">
          {STATS_RESULTS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
