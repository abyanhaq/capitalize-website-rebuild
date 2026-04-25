import type { Metadata } from 'next'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Business Intelligence — Capitalize Analytics',
  description:
    'Capitalize designs modern BI solutions that turn complex data into actionable insight — dashboards, reports, and analytics that drive smarter, faster decisions.',
}

const TECHNOLOGIES = [
  'Power BI',
  'Tableau',
  'Snowflake',
  'Azure',
  'Databricks',
  'Alteryx',
  'SQL Server',
  'Excel',
]

const CAPABILITIES = [
  {
    title: 'Analytics Roadmapping',
    desc: 'Align BI initiatives with business strategy and technology investments.',
  },
  {
    title: 'User Training & Adoption',
    desc: 'Equip business users to explore data effectively within a structured governance framework.',
  },
  {
    title: 'Governance & Standards',
    desc: 'Establish best practices for data definitions, access, and visualization consistency.',
  },
  {
    title: 'Power BI & Analytics Platforms',
    desc: 'Design enterprise-ready dashboards using Power BI, Tableau, or your platform of choice.',
  },
  {
    title: 'Real-Time & Self-Service Reporting',
    desc: 'Enable users to explore data independently while maintaining governance.',
  },
  {
    title: 'KPI & Performance Tracking',
    desc: 'Define and visualize the metrics that matter most to your organization.',
  },
  {
    title: 'Data Model Optimization',
    desc: 'Design clean, efficient data models that ensure speed and accuracy in reporting.',
  },
  {
    title: 'Integration & Connectivity',
    desc: 'Bring together data from ERP, CRM, financial, and operational systems into one trusted view.',
  },
  {
    title: 'Scalable Architecture',
    desc: 'Develop flexible structures that evolve with your analytics maturity.',
  },
  {
    title: 'Visual Clarity & Design',
    desc: 'Build intuitive dashboards that make complex information easy to digest.',
  },
  {
    title: 'Narrative Reporting',
    desc: 'Craft data stories that highlight insights, trends, and next steps.',
  },
  {
    title: 'Audience-Driven Insights',
    desc: 'Deliver the right information to the right stakeholder in the right format.',
  },
]

const PAIN_POINTS = [
  'Reports are inconsistent — different teams see different numbers.',
  'Dashboards exist but nobody uses them.',
  'IT is the only one who can build reports, creating a bottleneck.',
  'Data lives in too many places to ever feel confident in a number.',
]

const BRANDS = [
  'Kearney',
  'Frontier Airlines',
  'Sysco',
  'Kaiser Permanente',
  'Splunk',
  'Sweetgreen',
  'Riveron',
]

export default function BusinessIntelligencePage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[55vh] flex items-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-10%',
            right: '-5%',
            width: '50%',
            height: '70%',
            background:
              'radial-gradient(ellipse at center, rgba(8,145,178,0.07) 0%, transparent 65%)',
          }}
        />

        <div className="container-wide relative z-10 py-24 lg:py-32">
          <AnimateOnView delay={0}>
            <p className="section-label mb-5" style={{ color: '#4A72D9', opacity: 0.8 }}>
              Business Intelligence
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <h1 className="font-display text-display-xl font-bold text-white leading-tight mb-6 max-w-3xl">
              Business Intelligence That Powers Confident Decisions
            </h1>
          </AnimateOnView>
          <AnimateOnView delay={0.12}>
            <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: '#A89EC4' }}>
              Capitalize helps organizations design modern business intelligence solutions that turn
              complex data into actionable insight. We combine technical expertise with business
              strategy to deliver dashboards, reports, and analytics that drive smarter, faster
              decisions.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.17}>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Book a BI Ideation Session
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Talk to an Expert
              </Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── Entry Points ──────────────────────────────────────────────── */}
      <section className="bg-white section-py-sm border-b border-paper-border">
        <div className="container-wide">
          <AnimateOnView>
            <p className="section-label mb-4">How We Engage</p>
          </AnimateOnView>
          <AnimateOnView delay={0.05}>
            <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight mb-10">
              Two ways to get started
            </h2>
          </AnimateOnView>

          <div className="grid lg:grid-cols-2 gap-6">
            <AnimateOnView delay={0.08}>
              <div className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow bg-white h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-teal/10 text-teal">
                    Option 1
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
                  BI Ideation Session
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  Align leaders on current reporting pain, define success metrics, and rank 5–10
                  high-impact dashboard and automation opportunities. Rapid pain mapping: close,
                  revenue, ops KPIs. Value vs. effort matrix to pick quick wins. Executive-ready
                  summary within 48 hours.
                </p>
                <div className="mt-6">
                  <Button href="/contact" variant="primary" size="md" arrow>
                    Book Your Session
                  </Button>
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView delay={0.13}>
              <div className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow bg-white h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-teal/10 text-teal">
                    Option 2
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
                  BI Health Check
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  Document data sources, manual steps, and governance. Visualize a future-state BI
                  architecture with an agile rollout plan. Data model &amp; semantic layer
                  recommendations.
                </p>
                <div className="mt-6">
                  <Button href="/contact" variant="outline" size="md" arrow>
                    Run a Health Check
                  </Button>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ─── Technologies ──────────────────────────────────────────────── */}
      <section className="bg-paper-50 section-py-sm border-b border-paper-border">
        <div className="container-wide">
          <AnimateOnView>
            <p className="section-label mb-4">Our Technologies</p>
          </AnimateOnView>
          <AnimateOnView delay={0.05}>
            <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight mb-8">
              Industry-leading BI platforms, expertly deployed
            </h2>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {TECHNOLOGIES.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white border border-paper-border text-slate-700 shadow-card"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── Capabilities ──────────────────────────────────────────────── */}
      <section className="bg-white section-py border-b border-paper-border">
        <div className="container-wide">
          <div className="mb-12">
            <AnimateOnView>
              <p className="section-label mb-4">What We Do</p>
            </AnimateOnView>
            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight max-w-2xl">
                End-to-end business intelligence capabilities
              </h2>
            </AnimateOnView>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((cap, i) => (
              <AnimateOnView key={cap.title} delay={0.04 * (i % 6)}>
                <div className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow bg-white h-full">
                  <h3 className="font-display text-base font-semibold text-slate-900 mb-2 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Problem / Why ─────────────────────────────────────────────── */}
      <section className="bg-paper-50 section-py border-b border-paper-border">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Pain */}
            <div>
              <AnimateOnView>
                <p className="section-label mb-5">The Reality</p>
              </AnimateOnView>
              <AnimateOnView delay={0.05}>
                <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight mb-8">
                  When You Can&apos;t Trust the Data, You Can&apos;t Run the Business
                </h2>
              </AnimateOnView>
              <div className="flex flex-col gap-4">
                {PAIN_POINTS.map((point, i) => (
                  <AnimateOnView key={i} delay={0.08 + i * 0.05}>
                    <div className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(8,145,178,0.12)' }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: '#0E41B8' }}
                        />
                      </span>
                      <p className="text-slate-700 text-base leading-relaxed">{point}</p>
                    </div>
                  </AnimateOnView>
                ))}
              </div>
            </div>

            {/* Right — Solution */}
            <div>
              <AnimateOnView delay={0.06}>
                <p className="section-label mb-5">Our Approach</p>
              </AnimateOnView>
              <AnimateOnView delay={0.1}>
                <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight mb-6">
                  We Fix the Foundation So BI Finally Delivers Value
                </h2>
              </AnimateOnView>
              <AnimateOnView delay={0.14}>
                <p className="text-slate-600 leading-relaxed text-base mb-8">
                  <span className="font-semibold text-slate-900">
                    Our Approach: Diagnose. Design. Deliver.
                  </span>{' '}
                  We start by understanding your current reporting landscape — the tools, the pain,
                  the workarounds. Then we design and build BI solutions your teams actually want to
                  use.
                </p>
              </AnimateOnView>
              <AnimateOnView delay={0.18}>
                <Button href="/contact" variant="primary" size="lg" arrow>
                  Talk to Our Team
                </Button>
              </AnimateOnView>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="section-py-sm relative overflow-hidden bg-[#110c1d]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,58,90,0.45) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container-wide relative z-10 text-center">
          <AnimateOnView>
            <h3 className="font-display text-display-md font-bold text-white mb-4">
              Schedule a 30-Minute BI Consultation
            </h3>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#A89EC4' }}>
              Let&apos;s make your BI work as hard as you do.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <Button href="/contact" variant="primary" size="lg" arrow>
              Book a Consultation
            </Button>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── Trusted Brands ────────────────────────────────────────────── */}
      <section className="bg-white section-py-sm border-t border-paper-border">
        <div className="container-wide">
          <AnimateOnView>
            <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight mb-3 text-center">
              Trusted by leading organizations
            </h2>
          </AnimateOnView>
          <AnimateOnView delay={0.05}>
            <p className="text-slate-500 text-sm text-center mb-8">
              Trusted by organizations including:
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-paper-50 border border-paper-border text-slate-600"
                >
                  {brand}
                </span>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  )
}
