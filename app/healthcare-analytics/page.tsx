import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Healthcare Analytics Consulting | Capitalize Analytics',
  description: 'Capitalize helps healthcare organizations improve clinical, operational, and financial analytics — delivering trusted data, automated reporting, and AI-driven insights that improve patient outcomes and operational efficiency.',
}

const painPoints = [
  {
    title: 'Clinical Data Silos',
    desc: 'Patient data is fragmented across EHR systems, specialty platforms, and departmental databases with no unified analytics layer.',
  },
  {
    title: 'Manual Compliance Reporting',
    desc: 'HIPAA, CMS, and quality measure reporting is built on manual exports and spreadsheets, creating audit risk and reporting delays.',
  },
  {
    title: 'Revenue Cycle Gaps',
    desc: 'Billing, coding, and denial management analytics are reactive — organizations discover revenue leakage weeks after it occurs.',
  },
  {
    title: 'Population Health Blind Spots',
    desc: 'Identifying high-risk patient cohorts and care gaps requires analytics capabilities that most organizations haven\'t yet built.',
  },
]

const services = [
  {
    title: 'Clinical Analytics',
    desc: 'Build dashboards that track patient outcomes, utilization, readmissions, and care quality in real time.',
  },
  {
    title: 'Revenue Cycle Analytics',
    desc: 'Automate billing, denial management, and collections reporting to reduce revenue leakage and accelerate cash flow.',
  },
  {
    title: 'Population Health Management',
    desc: 'Identify high-risk patient cohorts, care gaps, and intervention opportunities across your attributed population.',
  },
  {
    title: 'EHR & EMR Data Integration',
    desc: 'Connect Epic, Cerner, Meditech, and other source systems into a unified, governed analytics layer.',
  },
  {
    title: 'Compliance & Quality Reporting',
    desc: 'Automate HEDIS, CMS quality measures, and HIPAA-compliant reporting to reduce manual burden and audit exposure.',
  },
  {
    title: 'Workforce & Staffing Analytics',
    desc: 'Track labor costs, staffing ratios, turnover, and productivity across departments and facilities.',
  },
]

export default function HealthcareAnalyticsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[50vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide py-16 relative z-10">
          <AnimateOnView>
            <span className="section-label">Healthcare Analytics</span>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mt-4 mb-6 max-w-3xl">
              Analytics That Improve Patient Outcomes and Operational Performance
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#A89EC4' }}>
              Capitalize helps healthcare organizations modernize their data infrastructure, automate compliance reporting, and build analytics that drive better clinical and financial outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>Get in Touch</Button>
              <Button href="/what-we-do" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">What We Do</Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimateOnView>
              <span className="section-label">The Challenge</span>
              <h2 className="font-display text-display-lg font-bold text-slate-900 mt-4 mb-6">
                Healthcare Data Is Complex — And the Stakes Are High
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Healthcare organizations manage some of the most sensitive, complex, and voluminous data of any industry. The challenge isn&apos;t just technical — it&apos;s clinical, financial, and regulatory. Fragmented systems, manual reporting workflows, and limited analytics maturity create real risk for patients and organizations alike.
              </p>
            </AnimateOnView>
            <StaggerContainer className="flex flex-col gap-6">
              {painPoints.map((point) => (
                <StaggerItem key={point.title} className="flex gap-4">
                  <div className="w-1 bg-teal/30 self-stretch rounded-full flex-shrink-0" />
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

      {/* Stats Bar */}
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
                <p className="font-display text-display-md font-bold text-teal">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <AnimateOnView>
            <span className="section-label">Our Services</span>
            <h2 className="font-display text-display-lg font-bold text-slate-900 mt-4 mb-12">
              What We Do for Healthcare
            </h2>
          </AnimateOnView>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title} className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#110c1d] section-py-sm relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide text-center relative z-10">
          <AnimateOnView>
            <span className="section-label">Get Started</span>
            <h3 className="font-display text-display-md font-bold text-white mt-4 mb-4">
              Modernize Your Healthcare Analytics
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#A89EC4' }}>
              Talk to a healthcare analytics expert about your clinical, operational, and financial data challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>Schedule a Consultation</Button>
              <Button href="/what-we-do" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">Explore Our Services</Button>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </main>
  )
}
