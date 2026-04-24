'use client'

import Link from 'next/link'
import { AnimateOnView, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    num: '01',
    label: 'AI & Advanced Analytics',
    href: '/ai-and-advanced-analytics',
    desc: 'From use-case identification through model deployment — practical AI that delivers ROI, not proof-of-concepts that collect dust.',
  },
  {
    num: '02',
    label: 'Business Intelligence',
    href: '/business-intelligence',
    desc: 'Self-service dashboards, reporting infrastructure, and real-time visibility into the metrics that drive your business.',
  },
  {
    num: '03',
    label: 'Data Strategy & Advisory',
    href: '/data-strategy-advisory',
    desc: 'Governance frameworks, data maturity roadmaps, and enterprise strategies that align technology investment with business outcomes.',
  },
  {
    num: '04',
    label: 'Data Engineering & Integration',
    href: '/data-engineering-integration',
    desc: 'Modern pipelines, unified data platforms, and analytics-ready infrastructure your teams can trust and build on.',
  },
  {
    num: '05',
    label: 'Process Automation',
    href: '/process-automation',
    desc: 'Eliminate manual, spreadsheet-driven work so your teams focus on high-value decisions while workflows run reliably.',
  },
  {
    num: '06',
    label: 'Managed Services',
    href: '/managed-services',
    desc: 'Ongoing platform support, optimization, and continuous improvement — without the overhead of building an in-house team.',
  },
  {
    num: '07',
    label: 'Training & Mentoring',
    href: '/training',
    desc: 'Hands-on, practical training that builds lasting capability — so your teams own and extend the solutions we build together.',
  },
]

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  return (
    <motion.div variants={staggerItem}>
      <Link
        href={service.href}
        className="group flex flex-col h-full border border-paper-border bg-white rounded-xl p-7 transition-all duration-200 hover:border-teal/40 hover:shadow-card-hover overflow-hidden"
      >
        <div className="flex items-start justify-between mb-5">
          <span className="font-mono text-xs text-teal/50 tracking-widest">{service.num}</span>
          <ArrowRight className="h-4 w-4 text-slate-300 transition-colors duration-200 group-hover:text-teal" />
        </div>
        <h3 className="font-display text-base font-semibold text-slate-900 mb-3 group-hover:text-teal transition-colors duration-200">
          {service.label}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed flex-1">{service.desc}</p>
      </Link>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section className="section-py bg-paper-50 border-y border-paper-border">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <AnimateOnView>
              <p className="section-label mb-4">Capitalize Analytics — How We Help</p>
            </AnimateOnView>
            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight">
                Services &amp; Capabilities
              </h2>
            </AnimateOnView>
            <AnimateOnView delay={0.08}>
              <p className="mt-3 text-slate-500 max-w-lg leading-relaxed">
                We help organizations turn disconnected data and manual processes into a connected
                analytics ecosystem that drives smarter decisions every day.
              </p>
            </AnimateOnView>
          </div>
          <AnimateOnView delay={0.08} direction="left">
            <Button href="/what-we-do" variant="outline" size="md" arrow>
              All Services
            </Button>
          </AnimateOnView>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.href} service={s} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
