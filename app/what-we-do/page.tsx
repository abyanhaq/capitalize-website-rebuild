import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'What We Do — Capitalize Analytics',
  description:
    'We help organizations turn data into smarter decisions through analytics, automation, and AI. Our team designs, builds, and supports modern data solutions that drive measurable business outcomes.',
}

const SERVICES = [
  {
    num: '01',
    label: 'AI & Advanced Analytics',
    href: '/ai-and-advanced-analytics',
    desc: 'We design and deploy practical AI and advanced analytics solutions that turn your data into predictions, recommendations, and always-on decision support.',
  },
  {
    num: '02',
    label: 'Business Intelligence',
    href: '/business-intelligence',
    desc: 'We design and deliver intuitive, self-service BI dashboards and reports that give your teams real-time visibility into performance and empower faster, data-driven decisions.',
  },
  {
    num: '03',
    label: 'Data Strategy & Advisory',
    href: '/data-strategy-advisory',
    desc: 'We build clear, actionable data strategies that align technology, governance, and analytics with your business goals and KPIs.',
  },
  {
    num: '04',
    label: 'Data Engineering & Integration',
    href: '/data-engineering-integration',
    desc: 'We architect and implement modern data platforms and pipelines that deliver trusted, high-quality data to the right people and systems, at the right time.',
  },
  {
    num: '05',
    label: 'Process Automation',
    href: '/process-automation',
    desc: 'We automate manual, spreadsheet-driven processes so your teams can focus on higher-value work.',
  },
  {
    num: '06',
    label: 'Managed Services',
    href: '/managed-services',
    desc: 'We provide ongoing support, optimization, and enhancement of your analytics, data, and automation solutions.',
  },
  {
    num: '07',
    label: 'Training & Mentoring',
    href: '/training',
    desc: 'We deliver practical, customized training to help teams successfully adopt and scale AI, analytics, and automation tools.',
  },
]

const INDUSTRIES = [
  { label: 'Distribution',         href: '/distribution-analytics' },
  { label: 'Financial Services',   href: '/financial-services-consulting' },
  { label: 'Healthcare',           href: '/healthcare-analytics' },
  { label: 'Manufacturing',        href: '/manufacturing-analytics' },
  { label: 'Oil & Gas',            href: '/oil-gas-analytics-consulting' },
  { label: 'Hospitality',          href: '/hospitality-analytics-consulting' },
  { label: 'Retail',               href: '/retail-analytics-consulting' },
  { label: 'Education',            href: '/education-analytics-consulting' },
  { label: 'Government',           href: '/government-analytics-consulting' },
]

export default function WhatWeDoPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center overflow-hidden bg-[#110c1d]"
        style={{ minHeight: '55vh' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-10%', right: '-5%', width: '50%', height: '70%',
            background: 'radial-gradient(ellipse at center, rgba(14,65,184,0.08) 0%, transparent 65%)',
          }}
        />

        <div className="container-wide relative z-10 py-24 lg:py-32">
          <AnimateOnView delay={0}>
            <p className="section-label mb-5" style={{ color: '#4A72D9', opacity: 0.8 }}>
              What We Do
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <h1 className="font-display text-display-xl font-bold text-white leading-[1.06] mb-6 max-w-3xl">
              Unleashing the Power of Data Analytics for Strategic Excellence
            </h1>
          </AnimateOnView>
          <AnimateOnView delay={0.12}>
            <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: '#A89EC4' }}>
              We help organizations turn data into smarter decisions through analytics, automation,
              and AI. Our team designs, builds, and supports modern data solutions that drive
              measurable business outcomes.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.17}>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Get in Touch
              </Button>
              <Button
                href="/who-we-are"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/8 hover:border-white/40"
              >
                About Our Team
              </Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── Services ──────────────────────────────────────────────── */}
      <section className="bg-white section-py border-b border-paper-border">
        <div className="container-wide">
          <div className="mb-12">
            <AnimateOnView>
              <p className="section-label mb-4">Services &amp; Technologies</p>
            </AnimateOnView>
            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight">
                How We Help
              </h2>
            </AnimateOnView>
            <AnimateOnView delay={0.08}>
              <p className="mt-3 text-slate-500 max-w-xl leading-relaxed">
                From AI strategy to data pipelines to business intelligence — we deliver end-to-end
                analytics capabilities that produce measurable ROI.
              </p>
            </AnimateOnView>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <AnimateOnView key={s.href} delay={i * 0.05}>
                <Link
                  href={s.href}
                  className="group flex flex-col h-full border border-paper-border bg-white rounded-xl p-7 transition-all duration-200 hover:border-teal/40 hover:shadow-card-hover overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-mono text-xs text-teal/50 tracking-widest">{s.num}</span>
                    <ArrowRight className="h-4 w-4 text-slate-300 transition-colors duration-200 group-hover:text-teal" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-slate-900 mb-3 group-hover:text-teal transition-colors duration-200">
                    {s.label}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{s.desc}</p>
                </Link>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Industries ────────────────────────────────────────────── */}
      <section className="bg-paper-50 section-py border-b border-paper-border">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <AnimateOnView>
              <p className="section-label mb-4">Industries We Work With</p>
            </AnimateOnView>
            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight">
                Expertise Across Key Sectors
              </h2>
            </AnimateOnView>
            <AnimateOnView delay={0.09}>
              <p className="mt-3 text-slate-500 max-w-xl mx-auto leading-relaxed">
                We bring deep industry knowledge to every engagement, helping organizations across
                diverse sectors unlock the full potential of their data.
              </p>
            </AnimateOnView>
          </div>

          <AnimateOnView delay={0.1}>
            <div className="flex flex-wrap gap-3 justify-center">
              {INDUSTRIES.map((ind) => (
                <Link
                  key={ind.href}
                  href={ind.href}
                  className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-paper-border bg-white text-sm font-medium text-slate-700 hover:border-teal/40 hover:text-teal hover:shadow-card-hover transition-all duration-200"
                >
                  {ind.label}
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── Story / Why ───────────────────────────────────────────── */}
      <section className="bg-white section-py-sm border-b border-paper-border">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Our Story */}
            <AnimateOnView>
              <div>
                <p className="section-label mb-4">Our Story</p>
                <h3 className="font-display text-display-sm font-bold text-slate-900 leading-tight mb-4">
                  An inspired technical vision, not just a software product
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  It all began when we saw the need to provide an inspired technical vision to
                  customers and not just a software product. Our philosophy is that each and every
                  client is unique, therefore the approach must be also.
                </p>
              </div>
            </AnimateOnView>

            {/* Why Capitalize */}
            <AnimateOnView delay={0.08}>
              <div>
                <p className="section-label mb-4">Why Capitalize?</p>
                <h3 className="font-display text-display-sm font-bold text-slate-900 leading-tight mb-4">
                  Industry knowledge meets management best practices
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  As a leading provider of Business Intelligence solutions and consulting services,
                  we empower you to make better decisions. We bring together industry knowledge and
                  management best practices to provide a winning combination for our clients.
                </p>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <section className="section-py-sm relative overflow-hidden bg-[#110c1d]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-10%', right: '-5%', width: '50%', height: '80%',
            background: 'radial-gradient(ellipse at center, rgba(14,65,184,0.08) 0%, transparent 65%)',
          }}
        />
        <div className="container-wide relative z-10 text-center">
          <AnimateOnView>
            <h2 className="font-display text-display-md font-bold text-white mb-4">
              Ready to make your data work for you?
            </h2>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#A89EC4' }}>
              Whether you&apos;re modernizing your data platform, building an AI use case, or
              automating workflows — our team works alongside yours from day one through adoption.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Get in Touch
              </Button>
              <Button href="/who-we-are" variant="secondary" size="lg">
                Meet Our Team
              </Button>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  )
}
