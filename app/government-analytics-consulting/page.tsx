import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Government Analytics Consulting | Capitalize Analytics',
  description: 'Capitalize helps government agencies and public sector organizations modernize data systems, automate reporting, and build analytics that improve program outcomes and operational efficiency.',
}

const painPoints = [
  {
    title: 'Siloed Legacy Systems',
    desc: 'Program data is siloed across multiple legacy systems and agencies, making cross-agency reporting nearly impossible.',
  },
  {
    title: 'Manual Compliance Reporting',
    desc: 'Reporting to oversight bodies and legislatures is manual, slow, and resource-intensive.',
  },
  {
    title: 'Budget Visibility Gaps',
    desc: 'Budget and performance analytics are often backward-looking and delayed — not actionable in real time.',
  },
  {
    title: 'Procurement Data Gaps',
    desc: 'Procurement and grant management data lacks real-time visibility, making oversight and stewardship difficult.',
  },
]

const services = [
  {
    title: 'Program Performance Analytics',
    desc: 'Build dashboards that track program outcomes, utilization, and effectiveness in real time.',
  },
  {
    title: 'Financial & Budget Analytics',
    desc: 'Automate budget-to-actual reporting, variance analysis, and multi-year financial planning.',
  },
  {
    title: 'Compliance & Audit Reporting',
    desc: 'Replace manual regulatory reporting with automated, auditable workflows.',
  },
  {
    title: 'Data Integration & Modernization',
    desc: 'Connect legacy systems and databases into a unified, governed analytics layer.',
  },
  {
    title: 'Workforce & HR Analytics',
    desc: 'Track headcount, turnover, and workforce costs across departments and programs.',
  },
  {
    title: 'Grants & Procurement Analytics',
    desc: 'Gain real-time visibility into grant utilization, procurement spend, and vendor performance.',
  },
]

export default function GovernmentAnalyticsPage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-[#060E1B] min-h-[50vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide py-16 relative z-10">
          <AnimateOnView>
            <span className="section-label">Government Analytics</span>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mt-4 mb-6 max-w-3xl">
              Analytics That Improve Public Services and Drive Government Accountability
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#8A9EBB' }}>
              Capitalize helps government agencies and public sector organizations modernize data systems, automate reporting, and build analytics that improve program outcomes and operational efficiency.
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
                Public Sector Data Challenges
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Government agencies manage enormous volumes of program data, financial information, and constituent records — often across legacy systems with limited integration. The pressure to demonstrate program effectiveness, meet compliance requirements, and do more with limited budgets requires modern analytics capabilities.
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
              What We Do for Government
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
              Modernize Your Agency's Analytics Capabilities
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#8A9EBB' }}>
              Talk to a public sector analytics expert about your data challenges.
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
