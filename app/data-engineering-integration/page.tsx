import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Data Engineering & Integration | Capitalize Analytics',
  description:
    'Capitalize designs and builds modern data engineering and integration solutions that connect your systems, automate your data pipelines, and deliver clean, trusted data to your analytics tools — at scale.',
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
  'Snowflake',
  'Azure Synapse',
  'AWS',
  'Databricks',
  'dbt',
  'Alteryx',
  'Python',
  'SQL Server',
  'Fivetran',
  'Apache Airflow',
]

const capabilities = [
  {
    title: 'Current State Assessment',
    desc: 'Evaluate systems, data flows, and technical debt to identify gaps and risks.',
  },
  {
    title: 'Cloud Data Warehouse Design & Build',
    desc: 'Architect and implement scalable cloud data warehouses (Snowflake, Azure, AWS) aligned to analytics and AI needs.',
  },
  {
    title: 'Roadmap & Prioritization',
    desc: 'Define a phased migration and modernization plan that balances quick wins with long-term scalability.',
  },
  {
    title: 'Pipeline Development',
    desc: 'Design and build reliable ETL/ELT pipelines to move and transform data efficiently.',
  },
  {
    title: 'Workflow Orchestration',
    desc: 'Implement scheduling, logging, and error handling to keep data flows running smoothly.',
  },
  {
    title: 'Process Automation',
    desc: 'Replace manual data prep and exports with repeatable, automated workflows.',
  },
  {
    title: 'Enterprise System Integration',
    desc: 'Connect ERPs, CRMs, and line-of-business apps to eliminate data silos.',
  },
  {
    title: 'API & Event-Driven Design',
    desc: 'Use APIs and messaging patterns to enable near real-time data exchange.',
  },
  {
    title: 'Master & Reference Data',
    desc: 'Create consistent views of customers, products, and other key entities across systems.',
  },
  {
    title: 'Data Quality Rules',
    desc: 'Define and enforce automated validation checks to catch issues before they reach the business.',
  },
  {
    title: 'Catalog & Lineage',
    desc: 'Document data assets and track how data flows to build trust across teams.',
  },
  {
    title: 'Monitoring & Alerting',
    desc: 'Proactively detect pipeline failures and data anomalies before they impact decisions.',
  },
]

const painPoints = [
  'Reports are late because pipelines failed overnight.',
  'Data prep takes hours before any real analysis can begin.',
  'Every system tells a different story with different numbers.',
  'IT is buried in one-off data requests instead of strategic work.',
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

export default function DataEngineeringIntegrationPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[55vh] flex items-center">
        {dotGrid}
        <div className="relative container-wide section-py">
          <AnimateOnView>
            <p className="section-label mb-4">Data Engineering &amp; Integration</p>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white max-w-4xl mb-6">
              Connect Every System. Streamline Every Pipeline. Trust Every Decision.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#A89EC4' }}>
              Capitalize designs and builds modern data engineering and integration solutions that
              connect your systems, automate your data pipelines, and deliver clean, trusted data to
              your analytics tools — at scale.
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
                  Data Integration Assessment
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Get clarity on what&apos;s holding your data back — and where the biggest upside is.
                </p>
                <ul className="space-y-3 flex-1">
                  {[
                    'Uncover hidden constraints and root causes of slow reports',
                    'Spot high-impact improvements and quick wins',
                    'Build internal alignment with a plain-language view of your data reality',
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
                  Data Warehouse Assessment
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Align your team on how modern data engineering can unlock better decisions and new
                  opportunities.
                </p>
                <ul className="space-y-3 flex-1">
                  {[
                    'Connect data to concrete business outcomes (faster reporting, less manual work)',
                    'Clarify what a modern, well-engineered data environment feels like day to day',
                    'Create momentum for change with language leaders can champion',
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
                Manual Data Fire Drills Instead of Insights
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
                Automated Data Pipelines Instead of Manual Fire Drills
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                We build modern, resilient data platforms that connect your systems and automate
                your data flows — so your team wakes up to trusted, ready-to-use data instead of
                fire drills. A future-ready cloud data foundation that scales with your business.
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
              Let&apos;s Connect Your Data — and Your Decisions.
            </h3>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#A89EC4' }}>
              Schedule a 30-minute consultation to discuss your data engineering challenges.
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
