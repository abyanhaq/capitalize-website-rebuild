import type { Metadata } from 'next'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Sales & Marketing Analytics Consulting — Capitalize Analytics',
  description:
    'Capitalize helps marketing and sales operations teams automate data access, cleanup, and reporting — so you can focus on optimizing campaigns, improving pipeline, and driving revenue.',
}

const PAIN_POINTS = [
  {
    title: 'Disconnected Platforms',
    desc: 'Campaign performance, CRM, and marketing automation data lives in separate systems with no shared truth.',
  },
  {
    title: 'Slow Pipeline Reporting',
    desc: 'Sales leadership needs accurate, real-time pipeline and forecast visibility — but it takes days to compile.',
  },
  {
    title: 'CRM Data Quality',
    desc: 'Clean, trusted CRM data the sales team will actually use is rare — enrichment and cleanup are always manual.',
  },
  {
    title: 'Attribution Gaps',
    desc: 'Understanding which campaigns truly drive revenue and pipeline requires multi-system joins that don\'t exist yet.',
  },
]

const SERVICES = [
  {
    title: 'Unified Marketing Data',
    desc: 'Consolidate Google Analytics, social, CRM, and marketing automation data into a single trusted reporting layer.',
  },
  {
    title: 'Automated Campaign Pipelines',
    desc: 'Replace manual campaign performance exports with automated, refreshable analytics workflows.',
  },
  {
    title: 'Deeper Campaign Insights',
    desc: 'Build dashboards that show which campaigns drive revenue, not just clicks.',
  },
  {
    title: 'Clean, Structured CRM Data',
    desc: 'Automate CRM data cleanup, enrichment, and governance to give sales a system they\'ll trust.',
  },
  {
    title: 'Pipeline & Forecast Analytics',
    desc: 'Deliver accurate, real-time pipeline visibility and forecast reporting for sales leadership.',
  },
  {
    title: 'Attribution Modeling',
    desc: 'Understand true channel contribution and marketing ROI across your full customer journey.',
  },
]

export default function SalesMarketingPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container-wide relative z-10 py-16">
          <AnimateOnView delay={0}>
            <p className="section-label mb-5">Sales &amp; Marketing</p>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mb-6 max-w-3xl">
              Turn Marketing &amp; Sales Operations into a Data Engine for Growth
            </h1>
          </AnimateOnView>
          <AnimateOnView delay={0.12}>
            <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: '#A89EC4' }}>
              Capitalize helps marketing and sales operations teams automate data access, cleanup,
              and reporting — so you can focus on optimizing campaigns, improving pipeline, and
              driving revenue instead of fighting spreadsheets.
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
                  Measured by the Numbers, Buried by the Data
                </h2>
              </AnimateOnView>
              <AnimateOnView delay={0.1}>
                <p className="text-slate-600 leading-relaxed text-base">
                  Marketing and Sales Operations are expected to prove what&apos;s working and steer
                  growth — but the data they need is scattered across platforms, plagued by quality
                  issues, and held together with manual exports and late nights. Disconnected
                  platforms like Google Analytics, social, CRM, and marketing automation
                  don&apos;t naturally tie together, forcing constant manual blends.
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
              What We Do for Sales &amp; Marketing Teams
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
              'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container-wide relative z-10 text-center">
          <AnimateOnView>
            <p className="section-label mb-4">Get Started</p>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <h3 className="font-display text-display-md font-bold text-white mb-4">
              Make Your Revenue Data Work For You
            </h3>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#A89EC4' }}>
              Talk to a sales and marketing analytics expert today.
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
