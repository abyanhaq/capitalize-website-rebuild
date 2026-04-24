'use client'

import Link from 'next/link'
import { AnimateOnView, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnView'
import { Badge } from '@/components/ui/Badge'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const INDUSTRIES = [
  { label: 'Financial Services', href: '/financial-services-consulting', desc: 'Finance, risk & operations analytics' },
  { label: 'Healthcare',          href: '/healthcare-analytics',           desc: 'Clinical & operational data insights' },
  { label: 'Manufacturing',       href: '/manufacturing-analytics',        desc: 'Production & supply chain intelligence' },
  { label: 'Oil & Gas',           href: '/oil-gas-analytics-consulting',   desc: 'Upstream, midstream & downstream analytics' },
  { label: 'Distribution',        href: '/distribution-analytics',         desc: 'Logistics & operational visibility' },
  { label: 'Retail',              href: '/retail-analytics-consulting',     desc: 'Customer, inventory & sales data' },
  { label: 'Hospitality',         href: '/hospitality-analytics-consulting', desc: 'Guest insights & revenue analytics' },
  { label: 'Education',           href: '/education-analytics-consulting', desc: 'Student outcomes & institutional data' },
  { label: 'Government',          href: '/government-analytics-consulting', desc: 'Public-sector data & reporting' },
]

export function IndustriesSection() {
  return (
    <section className="section-py bg-navy-900 relative overflow-hidden">
      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-teal/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — header */}
          <div className="lg:sticky lg:top-24">
            <AnimateOnView>
              <Badge variant="teal" className="mb-5">Industries We Work With</Badge>
            </AnimateOnView>
            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-white leading-tight mb-6">
                No matter your industry —{' '}
                <span className="text-gradient-teal">if you run on data, we can help</span>
              </h2>
            </AnimateOnView>
            <AnimateOnView delay={0.1}>
              <p className="text-slate-400 leading-relaxed mb-8">
                From healthcare and financial services to manufacturing, retail, and beyond, our team
                understands how to adapt analytics, AI, and automation to your unique business model
                and challenges.
              </p>
            </AnimateOnView>
            <AnimateOnView delay={0.15}>
              <Link
                href="/what-we-do"
                className="group inline-flex items-center gap-2 text-sm font-medium text-teal hover:text-teal-bright transition-colors"
              >
                View all industries &amp; functions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </AnimateOnView>
          </div>

          {/* Right — industry cards */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.05}>
            {INDUSTRIES.map((ind) => (
              <motion.div key={ind.href} variants={staggerItem}>
                <Link
                  href={ind.href}
                  className="group flex items-start justify-between gap-3 rounded-xl border border-navy-border bg-navy-800 p-4 transition-all duration-200 hover:border-teal/25 hover:bg-navy-700"
                >
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-teal transition-colors duration-200 mb-0.5">
                      {ind.label}
                    </p>
                    <p className="text-xs text-slate-500">{ind.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-600 flex-shrink-0 mt-0.5 transition-all duration-200 group-hover:text-teal group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
