import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Oil & Gas Analytics Consulting | Capitalize Analytics',
  description: 'Capitalize helps oil and gas companies integrate operational data, automate compliance reporting, and build analytics solutions that improve production performance and reduce operational risk.',
}

const painPoints = [
  {
    title: 'Incompatible Systems',
    desc: 'Production, reservoir, and pipeline data lives in separate, incompatible systems with no single view of operations.',
  },
  {
    title: 'Manual Regulatory Reporting',
    desc: 'Compliance reporting across jurisdictions is manual, slow, and prone to errors under deadline pressure.',
  },
  {
    title: 'Volume Reconciliation Burden',
    desc: 'Gas balancing and volume reconciliation require significant manual effort across multiple data sources.',
  },
  {
    title: 'Lagging Safety Indicators',
    desc: 'HSE monitoring often relies on lagging indicators, limiting the ability to prevent incidents proactively.',
  },
]

const services = [
  {
    title: 'Production Analytics',
    desc: 'Track production volumes, downtime, and well performance in real time.',
  },
  {
    title: 'Gas Balancing (iGB)',
    desc: 'Automate gas balancing and volume reconciliation with our Intelligent Gas Balancing platform.',
  },
  {
    title: 'Regulatory Reporting Automation',
    desc: 'Replace manual regulatory filings with automated, auditable reporting workflows.',
  },
  {
    title: 'Pipeline & Operations Dashboards',
    desc: 'Build unified dashboards connecting SCADA, ERP, and operational data.',
  },
  {
    title: 'Reservoir & Asset Analytics',
    desc: 'Integrate reservoir simulation and production data to optimize recovery and capital allocation.',
  },
  {
    title: 'HSE Analytics',
    desc: 'Monitor safety incidents, near-misses, and environmental compliance metrics in real time.',
  },
]

export default function OilGasAnalyticsPage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[50vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide py-16 relative z-10">
          <AnimateOnView>
            <span className="section-label">Oil &amp; Gas Analytics</span>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mt-4 mb-6 max-w-3xl">
              Data-Driven Decisions for Every Stage of the Energy Value Chain
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#A89EC4' }}>
              Capitalize helps oil and gas companies integrate operational data, automate compliance reporting, and build analytics solutions that improve production performance and reduce operational risk.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>Get in Touch</Button>
              <Button href="/what-we-do" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">What We Do</Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Section 2: Challenge */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimateOnView>
              <span className="section-label">The Challenge</span>
              <h2 className="font-display text-display-lg font-bold text-slate-900 mt-4 mb-6">
                The Energy Data Challenge
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Oil and gas operations generate data from wellheads, pipelines, processing facilities, trading desks, and regulatory systems — in real time, around the clock. The ability to integrate, analyze, and act on this data is increasingly a competitive differentiator and a regulatory requirement.
              </p>
            </AnimateOnView>
            <StaggerContainer className="flex flex-col gap-6">
              {painPoints.map((point) => (
                <StaggerItem key={point.title} className="flex gap-4">
                  <div className="w-1 bg-teal-500/40 self-stretch rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">{point.title}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Section 3: Stats Bar */}
      <section className="bg-paper-50 py-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '20+', label: 'Years of Experience' },
              { value: '1,500+', label: 'Projects Delivered' },
              { value: '1,000+', label: 'Clients Served' },
              { value: '95%', label: 'Client Retention' },
            ].map((stat) => (
              <AnimateOnView key={stat.label}>
                <p className="font-display text-display-md font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Services Grid */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <AnimateOnView>
            <span className="section-label">Our Services</span>
            <h2 className="font-display text-display-lg font-bold text-slate-900 mt-4 mb-12">
              What We Do for Oil &amp; Gas
            </h2>
          </AnimateOnView>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title} className="border border-paper-border rounded-xl p-6 shadow-card">
                <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-[#110c1d] section-py-sm relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide text-center relative z-10">
          <AnimateOnView>
            <span className="section-label">Get Started</span>
            <h3 className="font-display text-display-md font-bold text-white mt-4 mb-4">
              Purpose-Built Analytics for Energy Operations
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#A89EC4' }}>
              Talk to an energy analytics expert about your operational data challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>Get in Touch</Button>
              <Button href="/what-we-do" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">What We Do</Button>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </main>
  )
}
