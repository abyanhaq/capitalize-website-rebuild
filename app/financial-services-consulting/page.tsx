import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Financial Services Analytics Consulting | Capitalize Analytics',
  description: 'Empower your teams with integrated analytics, automated insights, and compliant data ecosystems built for today\'s fast-moving financial markets.',
}

const painPoints = [
  {
    title: 'Siloed Portfolio Data',
    desc: 'Risk and performance data is spread across dozens of trading systems, platforms, and spreadsheets.',
  },
  {
    title: 'Manual Compliance Reporting',
    desc: 'Reporting for SEC, FINRA, FDIC, and other regulators is manual, slow, and error-prone.',
  },
  {
    title: 'Outdated Fraud Models',
    desc: 'Fraud detection models can\'t keep up with the speed and sophistication of modern financial crime.',
  },
  {
    title: 'Static Risk Models',
    desc: 'Credit and lending teams rely on static models that can\'t adapt quickly to changing market conditions.',
  },
]

const services = [
  {
    title: 'Portfolio & Performance Visibility',
    desc: 'Real-time dashboards for AUM, client-level performance, and benchmark comparison.',
  },
  {
    title: 'Risk & Exposure Modeling',
    desc: 'Support stress testing, scenario modeling, and value-at-risk analytics.',
  },
  {
    title: 'Executive Reporting',
    desc: 'Automated, auditable insights for investment, lending, and leadership teams.',
  },
  {
    title: 'Market + Internal Data Integration',
    desc: 'Connect trading systems, CRM, core banking, fund data, and customer activity feeds.',
  },
  {
    title: 'Enterprise Data Pipelines',
    desc: 'Governed, scalable pipelines supporting analytics, risk, and compliance across the enterprise.',
  },
  {
    title: 'Regulatory Data Management',
    desc: 'Support SEC, FRB, FDIC, FINRA, EBA, GDPR, FATCA, and MiFID requirements with confidence.',
  },
  {
    title: 'Fraud Detection & Prevention',
    desc: 'Apply ML models to detect suspicious patterns in transactions, claims, and customer behavior.',
  },
  {
    title: 'Predictive Credit & Default Modeling',
    desc: 'Build and deploy credit risk models that improve accuracy and reduce default exposure.',
  },
  {
    title: 'Compliance Automation',
    desc: 'Automate recurring compliance reporting and audit trail documentation.',
  },
]

export default function FinancialServicesPage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[50vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide py-16 relative z-10">
          <AnimateOnView>
            <span className="section-label">Financial Services</span>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mt-4 mb-6 max-w-3xl">
              Transform Financial Services Data Into Smarter Decisions and Stronger Performance
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#A89EC4' }}>
              Empower your teams with integrated analytics, automated insights, and compliant data ecosystems built for today&apos;s fast-moving financial markets.
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
                Financial Data Is Growing Faster Than Leaders Can Analyze It
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Volatility, economic swings, and evolving customer expectations have created an explosion in financial data complexity. Asset managers must track portfolio risk in real time. Banks must improve customer profitability while detecting fraud instantly. And all of this must meet an ever-expanding list of domestic and international regulations.
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
              What We Do for Financial Services
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
              Empower Your Financial Organization with Trusted Analytics
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#A89EC4' }}>
              Deep industry understanding. Compliance-ready. Strategic transformation.
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
