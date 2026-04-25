import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Distribution Analytics Consulting | Capitalize Analytics',
  description: 'Get faster insights, smarter operations, and measurable ROI with analytics, automation, and data integration purpose-built for the distribution industry.',
}

const painPoints = [
  {
    title: 'Disconnected Systems',
    desc: 'ERP, WMS, CRM, pricing tools, and supplier data live in separate systems that don’t naturally share data.',
  },
  {
    title: 'Spreadsheet Overload',
    desc: 'SKU-heavy environments and complex pricing models can’t be managed effectively in Excel.',
  },
  {
    title: 'Analyst Bottleneck',
    desc: 'Analysts spend more time compiling and cleaning data than delivering insights.',
  },
  {
    title: 'Rebate & Incentive Gaps',
    desc: 'Rebate tracking and vendor incentive management happen in spreadsheets with no automation.',
  },
]

const services = [
  {
    title: 'Data Strategy',
    desc: 'Align analytics priorities with business goals and KPIs.',
  },
  {
    title: 'Architecture Design',
    desc: 'Build scalable, cloud-ready analytics environments for distribution workloads.',
  },
  {
    title: 'Visualization Excellence',
    desc: 'Deliver intuitive Power BI dashboards your teams will actually use.',
  },
  {
    title: 'Workflow Automation',
    desc: 'Eliminate repetitive reporting and manual data prep tasks.',
  },
  {
    title: 'Exception-Based Alerts',
    desc: 'Surface anomalies in pricing, inventory, and margins before they become problems.',
  },
  {
    title: 'Advanced Analytics',
    desc: 'Apply predictive and optimization models to demand forecasting and network planning.',
  },
  {
    title: 'Unified Data Pipelines',
    desc: 'Connect ERP, WMS, CRM, pricing tools, and supplier data into a single source of truth.',
  },
  {
    title: 'Data Quality & Governance',
    desc: 'Establish automated validation to ensure every metric is trustworthy.',
  },
]

export default function DistributionAnalyticsPage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[50vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide py-16 relative z-10">
          <AnimateOnView>
            <span className="section-label">Distribution Analytics</span>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mt-4 mb-6 max-w-3xl">
              Turn Your Distribution Data Into a Competitive Advantage
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#A89EC4' }}>
              Get faster insights, smarter operations, and measurable ROI with analytics, automation, and data integration purpose-built for the distribution industry.
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
                Distribution Leaders Are Drowning in Data but Starved for Insight
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Disconnected systems, manual processes, and inconsistent data make it nearly impossible to optimize inventory, pricing, supply chain performance, or customer profitability. Operational decisions are slowed, analysts are overwhelmed, and opportunities slip through the cracks.
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
              What We Do for Distribution
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
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide text-center relative z-10">
          <AnimateOnView>
            <span className="section-label">Get Started</span>
            <h3 className="font-display text-display-md font-bold text-white mt-4 mb-4">
              We Turn Distribution Data Into Business Outcomes
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#A89EC4' }}>
              Deep distribution expertise. Technology-agnostic. End-to-end delivery.
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
