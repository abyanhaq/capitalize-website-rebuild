import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Data Strategy Advisory | Capitalize Analytics',
  description:
    'Capitalize helps finance, operations, and IT leaders build a practical, business-first data strategy so you can trust your numbers, automate the busywork, and move faster.',
}

const dotGrid = (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)',
      backgroundSize: '28px 28px',
    }}
  />
)

const technologies = [
  'Power BI',
  'Tableau',
  'Snowflake',
  'Alteryx',
  'Power Automate',
  'Azure',
  'AWS',
  'Collibra',
  'dbt',
]

const capabilities = [
  {
    title: 'Current State Assessment',
    desc: 'Evaluate your analytics landscape to uncover gaps, inefficiencies, and opportunities.',
  },
  {
    title: 'Strategic Roadmap Design',
    desc: 'Define a clear data vision and action plan aligned with business priorities and measurable ROI.',
  },
  {
    title: 'Governance & Success Metrics',
    desc: 'Establish KPIs and governance standards to track performance and ensure sustainable growth.',
  },
  {
    title: 'Process Evaluation',
    desc: 'Review workflows and operations to pinpoint inefficiencies that automation can solve.',
  },
  {
    title: 'ROI Prioritization',
    desc: 'Quantify savings, productivity gains, and ROI potential to focus on high-impact opportunities.',
  },
  {
    title: 'Implementation Roadmap',
    desc: 'Outline phased, achievable steps for deploying automation and analytics tools.',
  },
  {
    title: 'Modern Architecture Design',
    desc: 'Create flexible, future-ready data architectures — cloud, hybrid, or on-prem.',
  },
  {
    title: 'Standardization & Access',
    desc: 'Define consistent data definitions and access protocols to boost confidence and usability.',
  },
  {
    title: 'Governance Frameworks',
    desc: 'Develop policies and standards that ensure data accuracy, security, and compliance.',
  },
  {
    title: 'Collaborative Exploration',
    desc: 'Partner with business leaders to identify data-driven use cases with strategic impact.',
  },
  {
    title: 'Prioritization Framework',
    desc: 'Rank initiatives by feasibility, ROI, and alignment to corporate goals.',
  },
  {
    title: 'Actionable Blueprints',
    desc: 'Translate insights into concrete, ready-to-execute projects that deliver measurable results.',
  },
]

const painPoints = [
  'Most organizations jump straight into tools — new warehouses, new BI platforms, new automation — without solving the underlying data problems first.',
  'The result: expensive tech that doesn\'t deliver, data nobody trusts, and teams that are busier but less informed.',
  'A strategy-first approach changes all of that.',
]

const trustedBrands = [
  'Kearney',
  'Frontier Airlines',
  'Sysco',
  'Kaiser Permanente',
  'Splunk',
  'Sweetgreen',
  'Riveron',
]

export default function DataStrategyAdvisoryPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[55vh] flex items-center">
        {dotGrid}
        <div className="relative container-wide section-py">
          <AnimateOnView>
            <p className="section-label mb-4">Data Strategy Advisory</p>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white max-w-4xl mb-6">
              Stop Fighting Spreadsheets and Silos. Start Running on a Real Data Strategy.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#A89EC4' }}>
              Capitalize helps finance, operations, and IT leaders build a practical, business-first
              data strategy so you can trust your numbers, automate the busywork, and move faster —
              with the platforms you already own and the ones you plan to invest in.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Get in Touch
              </Button>
              <Button href="/what-we-do" variant="outline" size="lg">
                What We Do
              </Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ── Entry Points ── */}
      <section className="bg-white section-py-sm">
        <div className="container-wide">
          <AnimateOnView>
            <p className="section-label mb-4 text-center">Where to Start</p>
            <h2 className="font-display text-display-lg font-bold text-slate-900 text-center mb-12">
              Two Ways to Get Moving Fast
            </h2>
          </AnimateOnView>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnView delay={0.1}>
              <div className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow bg-white h-full flex flex-col">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-teal/10 text-teal mb-4 self-start">
                  Session 01
                </span>
                <h3 className="font-display text-display-md font-bold text-slate-900 mb-3">
                  Current State Data Assessment
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  An honest, business-first view of how data really flows across your organization
                  — before you design the future.
                </p>
                <ul className="space-y-3 flex-1">
                  {[
                    'Understand the real reasons reports are slow, inconsistent, or hard to produce',
                    'Zero in on areas where better data management will drive the most business value',
                    'Give IT and business stakeholders a shared, plain-language view of your data reality',
                  ].map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                      <span className="text-slate-600 text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="/contact" variant="primary" size="md" arrow>
                    Start Here
                  </Button>
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView delay={0.2}>
              <div className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow bg-white h-full flex flex-col">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-teal/10 text-teal mb-4 self-start">
                  Session 02
                </span>
                <h3 className="font-display text-display-md font-bold text-slate-900 mb-3">
                  Analytics &amp; Reporting Roadmapping
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Align on the KPIs that matter, rationalize reports, and design a phased roadmap
                  to modernize analytics.
                </p>
                <ul className="space-y-3 flex-1">
                  {[
                    'Prioritize analytics investments by ROI and business impact',
                    'Define a clear, achievable path to self-service and governed reporting',
                    'Create a roadmap leadership can fund and teams can execute',
                  ].map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                      <span className="text-slate-600 text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="/contact" variant="outline" size="md" arrow>
                    Book a Session
                  </Button>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ── Technologies ── */}
      <section className="bg-paper-50 section-py-sm">
        <div className="container-wide">
          <AnimateOnView>
            <p className="section-label mb-4 text-center">Our Technologies</p>
            <h2 className="font-display text-display-lg font-bold text-slate-900 text-center mb-10">
              The Tools We Work With
            </h2>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border border-paper-border bg-white text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <AnimateOnView>
            <p className="section-label mb-4 text-center">Capabilities</p>
            <h2 className="font-display text-display-lg font-bold text-slate-900 text-center mb-12">
              What We Deliver
            </h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow bg-white"
                style={staggerItem as React.CSSProperties}
              >
                <h3 className="font-display font-bold text-slate-900 mb-2">{cap.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Problem / Solution ── */}
      <section className="bg-paper-50 section-py">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimateOnView direction="left">
              <h2 className="font-display text-display-md font-bold text-slate-900 mb-6">
                Why Data Strategy Comes Before the Next Tool
              </h2>
              <ul className="space-y-4">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-teal/10 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-teal" />
                    </span>
                    <span className="text-slate-600 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnView>

            <AnimateOnView direction="right">
              <h2 className="font-display text-display-md font-bold text-slate-900 mb-6">
                We Don&apos;t Just Advise — We Partner for Success
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Our advisory offerings are built to meet you where you are — aligning your people,
                processes, and technology to deliver real outcomes. We start with a short
                conversation to understand your current challenges and outline where a focused
                assessment or strategy engagement could deliver the fastest impact.
              </p>
              <Button href="/contact" variant="primary" size="lg" arrow>
                Get in Touch
              </Button>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative bg-[#110c1d] section-py-sm overflow-hidden">
        {dotGrid}
        <div className="relative container-wide text-center">
          <AnimateOnView>
            <p className="section-label mb-4">Ready to Get Started?</p>
            <h3 className="font-display text-display-lg font-bold text-white mb-4">
              Request a Data Strategy Assessment
            </h3>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#A89EC4' }}>
              Talk to a data strategy advisor about where your organization should start.
            </p>
            <Button href="/contact" variant="primary" size="lg" arrow>
              Get in Touch
            </Button>
          </AnimateOnView>
        </div>
      </section>

      {/* ── Trusted Brands ── */}
      <section className="bg-white section-py-sm">
        <div className="container-wide">
          <AnimateOnView>
            <p className="text-slate-500 text-sm font-medium text-center mb-6">
              Trusted by organizations including:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {trustedBrands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 rounded-full border border-paper-border bg-paper-50 text-slate-700 text-sm font-medium"
                >
                  {brand}
                </span>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>
    </main>
  )
}
