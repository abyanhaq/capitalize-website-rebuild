import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Watchtower — Data Quality Monitoring | Capitalize Analytics',
  description: 'Watchtower provides automated data quality monitoring, pipeline health visibility, and alerting so your analytics teams can trust the data powering their decisions.',
}

const features = [
  { title: 'Automated Data Quality Monitoring', desc: 'Continuously monitor data pipelines, datasets, and reports for quality issues — nulls, outliers, schema drift, and threshold violations — without manual intervention.' },
  { title: 'Configurable Validation Rules', desc: 'Define custom validation rules and quality thresholds per dataset, pipeline, or report to match your organization\'s specific data standards.' },
  { title: 'Pipeline Health Dashboards', desc: 'Real-time dashboards that show the health status of every monitored pipeline — run times, failure rates, and quality scores in a single view.' },
  { title: 'Incident Logging & Escalation', desc: 'Automatically log data quality incidents, route alerts to the right teams, and track resolution status through a structured workflow.' },
  { title: 'Scheduled Quality Checks', desc: 'Run automated quality checks on any schedule — hourly, daily, or at pipeline completion — with results delivered via email or integration.' },
  { title: 'Audit Trail & Documentation', desc: 'Maintain a complete audit trail of all data quality events, validations, and remediations for compliance and governance requirements.' },
]

const useCases = [
  { title: 'Data Engineering Teams', desc: 'Get immediate visibility into pipeline failures and data quality regressions before they impact downstream reports and dashboards.' },
  { title: 'Analytics & BI Teams', desc: "Validate that the data powering your dashboards meets quality standards — so you can trust what you're presenting to leadership." },
  { title: 'Compliance & Governance', desc: 'Document data quality controls and maintain audit trails that satisfy internal governance and external audit requirements.' },
]

export default function WatchtowerPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[50vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide py-16 relative z-10">
          <AnimateOnView>
            <span className="section-label">Products — Data Quality</span>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mt-4 mb-6 max-w-3xl">Watchtower</h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#A89EC4' }}>Automated data quality monitoring, pipeline health visibility, and alerting — so your analytics teams always know the data powering their decisions is accurate, complete, and trustworthy.</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>Request a Demo</Button>
              <Button href="/data-engineering-integration" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">Data Engineering Services</Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <AnimateOnView>
            <span className="section-label">What It Does</span>
            <h2 className="font-display text-display-lg font-bold text-slate-900 mt-4 mb-12">Continuous Data Quality Intelligence</h2>
          </AnimateOnView>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <StaggerItem key={f.title} className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-paper-50 section-py-sm">
        <div className="container-wide">
          <AnimateOnView>
            <span className="section-label">Who It&apos;s For</span>
            <h2 className="font-display text-display-md font-bold text-slate-900 mt-4 mb-10">Built for Teams Who Depend on Data Quality</h2>
          </AnimateOnView>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <StaggerItem key={uc.title} className="bg-white rounded-xl p-6 border border-paper-border shadow-card">
                <div className="h-px w-8 bg-teal/40 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{uc.desc}</p>
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
            <h3 className="font-display text-display-md font-bold text-white mt-4 mb-4">See Watchtower in Action</h3>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#A89EC4' }}>Schedule a demo to see how Watchtower can automate data quality monitoring across your analytics environment.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>Request a Demo</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">Contact Us</Button>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </main>
  )
}
