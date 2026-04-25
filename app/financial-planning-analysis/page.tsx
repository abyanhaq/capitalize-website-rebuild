import type { Metadata } from 'next'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'FP&A Analytics — Capitalize Analytics',
  description:
    "Capitalize helps FP&A teams automate data collection, consolidation, and reporting so they can focus on strategy, scenario modeling, and answering the questions that matter most to the business.",
}

const PAIN_POINTS = [
  {
    title: 'Data from Everywhere',
    desc: 'Information arrives via direct database access, shared drives, email, and sometimes phone calls — all in different formats.',
  },
  {
    title: 'Cleansing Before Analysis',
    desc: 'All data must be cleansed, normalized, and consolidated before any real FP&A work can begin.',
  },
  {
    title: 'Slow Scenario Modeling',
    desc: 'New scenario requests from leadership take days to build from scratch in Excel.',
  },
  {
    title: 'Rebuilt Every Month',
    desc: 'Reports are re-created manually each month instead of refreshing automatically from a governed data source.',
  },
]

const SERVICES = [
  {
    title: 'Automated Data Collection',
    desc: 'Replace manual data pulls from ERP, CRM, and operational systems with automated, governed pipelines.',
  },
  {
    title: 'Consolidated Reporting',
    desc: 'Build a single version of the truth for financial performance — reconciled, trusted, and refreshable.',
  },
  {
    title: 'Scenario Modeling',
    desc: "Equip your team with tools to quickly model new scenarios and answer 'what if?' questions.",
  },
  {
    title: 'FP&A Dashboards',
    desc: 'Deliver executive-ready dashboards for revenue, cost, headcount, and variance analysis.',
  },
  {
    title: 'Platform Modernization',
    desc: 'Build skills in Power BI, Alteryx, Snowflake, and modern FPM/CPM platforms.',
  },
  {
    title: 'Insightful Planning Dashboards',
    desc: 'Standardize reports and dashboards executives rely on for planning and business review.',
  },
]

export default function FPAPage() {
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
            <p className="section-label mb-5">FP&amp;A Analytics</p>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mb-6 max-w-3xl">
              Give Your FP&amp;A Team Time to Actually Plan
            </h1>
          </AnimateOnView>
          <AnimateOnView delay={0.12}>
            <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: '#A89EC4' }}>
              Capitalize helps FP&amp;A teams automate data collection, consolidation, and reporting
              so they can focus on strategy, scenario modeling, and answering the questions that
              matter most to the business.
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
                  The FP&amp;A Reality
                </h2>
              </AnimateOnView>
              <AnimateOnView delay={0.1}>
                <p className="text-slate-600 leading-relaxed text-base">
                  FP&amp;A teams are expected to holistically understand the organization&apos;s
                  financial position, model the impact of nearly any scenario, and respond to a
                  constant stream of requests from executives. If every team agreed on a simple way
                  to share data, FP&amp;A would be thrilled — but they don&apos;t.
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
              What We Do for FP&amp;A Teams
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
              Spend Less Time on Data, More Time on Strategy
            </h3>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#A89EC4' }}>
              Talk to an FP&amp;A analytics expert today.
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
