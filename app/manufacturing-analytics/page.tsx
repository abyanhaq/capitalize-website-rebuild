import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Manufacturing Analytics Consulting | Capitalize Analytics',
  description: 'Capitalize helps manufacturing teams connect operational data, automate reporting, and gain real-time visibility into production, quality, and supply chain performance.',
}

const painPoints = [
  {
    title: 'Disconnected Systems',
    desc: 'Production and quality data lives in separate MES, ERP, and SCADA systems that don\'t share a common language.',
  },
  {
    title: 'Reactive Maintenance',
    desc: 'Downtime root cause analysis takes days, and equipment failures are discovered after — not before — they impact production.',
  },
  {
    title: 'Lagging Quality Metrics',
    desc: 'Quality and yield metrics are reported after the fact rather than in real time, limiting the ability to course-correct.',
  },
  {
    title: 'Slow Supply Visibility',
    desc: 'Supply chain disruptions are discovered late because reporting cycles lag actual operational reality.',
  },
]

const services = [
  {
    title: 'OEE & Production Analytics',
    desc: 'Build real-time dashboards for Overall Equipment Effectiveness, downtime, and throughput.',
  },
  {
    title: 'Quality & Yield Analytics',
    desc: 'Track defect rates, scrap, and rework in real time to drive continuous improvement.',
  },
  {
    title: 'Supply Chain Visibility',
    desc: 'Connect procurement, inventory, and supplier data for end-to-end operational visibility.',
  },
  {
    title: 'MES & ERP Integration',
    desc: 'Unify data from MES, ERP, SCADA, and quality systems into a single analytics layer.',
  },
  {
    title: 'Predictive Maintenance',
    desc: 'Apply machine learning to predict equipment failure before it happens.',
  },
  {
    title: 'Operational Reporting Automation',
    desc: 'Replace manual shift reports and Excel dashboards with automated, real-time analytics.',
  },
]

export default function ManufacturingAnalyticsPage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-[#060E1B] min-h-[50vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide py-16 relative z-10">
          <AnimateOnView>
            <span className="section-label">Manufacturing Analytics</span>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mt-4 mb-6 max-w-3xl">
              Modernize Manufacturing Operations with Data-Driven Insights
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#8A9EBB' }}>
              Capitalize helps manufacturing teams connect operational data, automate reporting, and gain real-time visibility into production, quality, and supply chain performance.
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
                Manufacturing Data Is Everywhere — But Insight Is Hard to Find
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Modern manufacturing generates enormous data from MES, ERP, SCADA, quality systems, and supply chain platforms. The challenge isn't collecting data — it's turning it into actionable insight fast enough to matter on the plant floor.
              </p>
            </AnimateOnView>
            <StaggerContainer className="flex flex-col gap-6">
              {painPoints.map((point) => (
                <div key={point.title} style={staggerItem} className="flex gap-4">
                  <div className="w-1 bg-teal-500/40 self-stretch rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">{point.title}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
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
              What We Do for Manufacturing
            </h2>
          </AnimateOnView>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} style={staggerItem} className="border border-paper-border rounded-xl p-6 shadow-card">
                <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-[#060E1B] section-py-sm relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide text-center relative z-10">
          <AnimateOnView>
            <span className="section-label">Get Started</span>
            <h3 className="font-display text-display-md font-bold text-white mt-4 mb-4">
              Drive Operational Excellence with Analytics
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#8A9EBB' }}>
              Talk to a manufacturing analytics expert about your data challenges.
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
