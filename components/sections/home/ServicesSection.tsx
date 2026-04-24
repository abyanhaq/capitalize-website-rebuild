'use client'

import Link from 'next/link'
import { AnimateOnView, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnView'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import {
  Brain,
  BarChart3,
  Database,
  Map,
  Zap,
  Settings,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Brain,
    label: 'AI & Advanced Analytics',
    href: '/ai-and-advanced-analytics',
    desc: 'Practical AI and advanced analytics solutions — from use-case identification through model deployment and MLOps.',
  },
  {
    icon: BarChart3,
    label: 'Business Intelligence',
    href: '/business-intelligence',
    desc: 'Intuitive, self-service BI dashboards and reports that give teams real-time visibility into performance.',
  },
  {
    icon: Map,
    label: 'Data Strategy & Advisory',
    href: '/data-strategy-advisory',
    desc: 'Clear, actionable data strategies that align technology, governance, and analytics with your business goals.',
  },
  {
    icon: Database,
    label: 'Data Engineering & Integration',
    href: '/data-engineering-integration',
    desc: 'Modern data platforms and pipelines that deliver trusted, high-quality data to the right people and systems.',
  },
  {
    icon: Zap,
    label: 'Process Automation',
    href: '/process-automation',
    desc: 'Automate manual, spreadsheet-driven processes so teams focus on high-value work while workflows run reliably.',
  },
  {
    icon: Settings,
    label: 'Managed Services',
    href: '/managed-services',
    desc: 'Ongoing support, optimization, and enhancement of your analytics and automation solutions.',
  },
  {
    icon: GraduationCap,
    label: 'Training & Mentoring',
    href: '/training',
    desc: 'Practical, customized training to help teams successfully adopt and scale AI, analytics, and automation.',
  },
]

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  const Icon = service.icon
  return (
    <motion.div variants={staggerItem}>
      <Link
        href={service.href}
        className="group flex flex-col h-full rounded-xl border border-navy-border bg-navy-800 p-6 transition-all duration-300 hover:border-teal/25 hover:bg-navy-700 hover:shadow-card-hover hover:-translate-y-0.5"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="h-10 w-10 rounded-lg bg-teal/10 border border-teal/15 flex items-center justify-center transition-colors duration-200 group-hover:bg-teal/15 group-hover:border-teal/30">
            <Icon className="h-5 w-5 text-teal" />
          </div>
          <ArrowRight className="h-4 w-4 text-slate-600 transition-all duration-200 group-hover:text-teal group-hover:translate-x-0.5" />
        </div>
        <h3 className="font-display text-base font-semibold text-white mb-2 group-hover:text-teal transition-colors duration-200">
          {service.label}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed flex-1">{service.desc}</p>
      </Link>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section className="section-py bg-navy-950 relative">
      {/* Top grid fade */}
      <div className="absolute inset-0 bg-grid-sm opacity-25 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-navy-900 to-transparent pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <AnimateOnView>
              <Badge variant="teal" className="mb-4">Services &amp; Technologies</Badge>
            </AnimateOnView>
            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-white leading-tight">
                How We Help You{' '}
                <span className="text-gradient-teal">Win with Data</span>
              </h2>
            </AnimateOnView>
            <AnimateOnView delay={0.1}>
              <p className="mt-3 text-slate-400 max-w-xl leading-relaxed">
                We help organizations turn disconnected data, manual processes, and scattered tools
                into a connected analytics ecosystem that drives smarter decisions every day.
              </p>
            </AnimateOnView>
          </div>
          <AnimateOnView delay={0.1} direction="left">
            <Button href="/what-we-do" variant="outline" size="md" arrow>
              All Services
            </Button>
          </AnimateOnView>
        </div>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.href} service={s} />
          ))}
          {/* CTA card */}
          <motion.div variants={staggerItem}>
            <Link
              href="/contact"
              className="group flex flex-col h-full rounded-xl border border-teal/20 bg-teal/5 p-6 transition-all duration-300 hover:border-teal/40 hover:bg-teal/10 hover:shadow-teal-sm hover:-translate-y-0.5"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-teal mb-3">Not sure where to start?</p>
              <h3 className="font-display text-base font-semibold text-white mb-2">
                Let&apos;s Find Your Best Entry Point
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">
                A 90-minute complimentary workshop to identify high-impact, low-risk AI and analytics opportunities.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-teal">
                Book a session
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  )
}
