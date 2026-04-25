import type { Metadata } from 'next'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Tax Analytics Consulting — Capitalize Analytics',
  description:
    'Capitalize helps tax teams automate data collection, validation, and reporting so you can hit every deadline, reduce compliance risk, and stop living in Excel-driven fire drills.',
}

const PAIN_POINTS = [
  {
    title: 'Upstream Data Delays',
    desc: 'Tax depends on timely, accurate data from accounting, billing, sales, and payroll — all of which frequently run late.',
  },
  {
    title: 'Constant Reconciliation',
    desc: 'Tax teams must detect misclassified revenue, incorrect jurisdictional data, and incomplete transaction details across every filing cycle.',
  },
  {
    title: 'Fixed Deadlines',
    desc: 'Filing deadlines are statutory and do not adjust for upstream delays, creating sustained time pressure and compliance risk.',
  },
  {
    title: 'Limited Review Time',
    desc: 'Manual data gathering leaves little time for the review and analysis needed to catch errors before filing.',
  },
]

const SERVICES = [
  {
    title: 'Centralized Tax Data',
    desc: 'Automate the collection of tax-relevant data from ERP, payroll, billing, and operational systems.',
  },
  {
    title: 'Automated Data Prep',
    desc: 'Replace manual data extraction and transformation with governed, repeatable workflows.',
  },
  {
    title: 'Single Version of the Truth',
    desc: 'Build a reconciled, auditable tax data layer that reduces the risk of errors.',
  },
  {
    title: 'Automated Transaction Checks',
    desc: 'Run population completeness and reasonableness checks to catch issues before filings.',
  },
  {
    title: 'Tax Reporting Automation',
    desc: 'Automate recurring tax reports, reducing manual effort and deadline risk.',
  },
  {
    title: 'Compliance Analytics',
    desc: 'Build analytics to monitor tax positions, identify anomalies, and support regulatory filings.',
  },
]

export default function TaxAnalyticsPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container-wide relative z-10 py-16">
          <AnimateOnView delay={0}>
            <p className="section-label mb-5">Tax Analytics</p>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mb-6 max-w-3xl">
              Tax Analytics Solutions You Can Trust
            </h1>
          </AnimateOnView>
          <AnimateOnView delay={0.12}>
            <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: '#A89EC4' }}>
              Capitalize helps tax teams automate data collection, validation, and reporting so you
              can hit every deadline, reduce compliance risk, and stop living in Excel-driven fire
              drills.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.17}>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Get in Touch
              </Button>
              <Button
                href="/what-we-do"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Our Services
              </Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── Challenge ─────────────────────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimateOnView>
                <p className="section-label mb-5">The Challenge</p>
              </AnimateOnView>
              <AnimateOnView delay={0.05}>
                <h2 className="font-display text-display-lg font-bold text-slate-900 leading-tight mb-6">
                  Tax Operates Downstream — With Fixed Deadlines
                </h2>
              </AnimateOnView>
              <AnimateOnView delay={0.1}>
                <p className="text-slate-600 leading-relaxed text-base">
                  Tax functions support obligations across multiple jurisdictions, tax types, and
                  regulatory regimes — each with its own rules, data requirements, and filing
                  timelines. When upstream close processes run late, tax timelines compress — even
                  though statutory deadlines don&apos;t move.
                </p>
              </AnimateOnView>
            </div>
            <div className="flex flex-col gap-6">
              {PAIN_POINTS.map((point, i) => (
                <AnimateOnView key={point.title} delay={0.06 + i * 0.05}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1.5">
                      <div
                        className="w-1 rounded-full"
                        style={{ height: '2.5rem', background: '#0E41B8' }}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{point.title}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─────────────────────────────────────────────────── */}
      <section className="bg-paper-50 py-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-paper-border">
            {[
              { value: '20+', label: 'Years of Experience' },
              { value: '1,500+', label: 'Projects Delivered' },
              { value: '1,000+', label: 'Clients Served' },
              { value: '95%', label: 'Client Retention' },
            ].map((stat, i) => (
              <AnimateOnView key={stat.label} delay={0.05 * i}>
                <div className="text-center px-4">
                  <p className="font-display text-display-md font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Grid ─────────────────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <AnimateOnView>
            <p className="section-label mb-4">What We Do</p>
          </AnimateOnView>
          <AnimateOnView delay={0.05}>
            <h2 className="font-display text-display-lg font-bold text-slate-900 leading-tight mb-10">
              What We Do for Tax Teams
            </h2>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc, i) => (
              <AnimateOnView key={svc.title} delay={0.04 * (i % 6)}>
                <div className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow h-full">
                  <h3 className="font-semibold text-slate-900 mb-2">{svc.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{svc.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ────────────────────────────────────────────────── */}
      <section className="section-py-sm relative overflow-hidden bg-[#110c1d]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container-wide relative z-10 text-center">
          <AnimateOnView>
            <p className="section-label mb-4">Get Started</p>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <h3 className="font-display text-display-md font-bold text-white mb-4">
              Hit Every Deadline with Confidence
            </h3>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#A89EC4' }}>
              Talk to a tax analytics expert about modernizing your tax data operations.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.14}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Get in Touch
              </Button>
              <Button
                href="/what-we-do"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Our Services
              </Button>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  )
}
