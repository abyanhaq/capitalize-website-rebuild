import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'iGB — Intelligent Gas Balancing | Capitalize Analytics',
  description: 'Purpose-built analytics for oil & gas operations — automated gas balancing, imbalance tracking, and operational intelligence at scale.',
}

const features = [
  { title: 'Automated Gas Volume Balancing', desc: 'Automatically balance gas volumes across wells, pipelines, and delivery points — eliminating manual spreadsheet-based balancing workflows.' },
  { title: 'Imbalance Tracking & Aging', desc: 'Track imbalances in real time with aging reports that surface disputes before they become financial liabilities.' },
  { title: 'Production Allocation Analytics', desc: 'Allocate production volumes accurately across complex well and pipeline configurations with full audit trail documentation.' },
  { title: 'Measurement System Integration', desc: 'Connect to SCADA, measurement systems, and ERP platforms to eliminate manual data entry and reduce reconciliation errors.' },
  { title: 'Regulatory Compliance Reporting', desc: 'Automate state regulatory reporting requirements for gas volumes, balancing statements, and production documentation.' },
  { title: 'Operational Intelligence Dashboards', desc: 'Executive and field-level dashboards that give operators and finance teams a unified view of gas production and balancing status.' },
]

const useCases = [
  { title: 'Midstream Operators', desc: 'Manage gas balancing across gathering, processing, and transportation assets with a single integrated platform.' },
  { title: 'E&P Companies', desc: 'Automate well-level production allocation and regulatory reporting to reduce administrative burden and reconciliation cycles.' },
  { title: 'Finance & Revenue Teams', desc: 'Gain real-time visibility into gas imbalance exposure and revenue impact before month-end close.' },
]

export default function IGBPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[50vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide py-16 relative z-10">
          <AnimateOnView>
            <span className="section-label">Products — Oil & Gas</span>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mt-4 mb-6 max-w-3xl">Intelligent Gas Balancing (iGB)</h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#A89EC4' }}>Purpose-built analytics for oil and gas operations — automating gas volume balancing, imbalance tracking, and production intelligence so your teams can focus on operations, not spreadsheets.</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>Request a Demo</Button>
              <Button href="/oil-gas-analytics-consulting" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">Oil & Gas Analytics</Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <AnimateOnView>
            <span className="section-label">What It Does</span>
            <h2 className="font-display text-display-lg font-bold text-slate-900 mt-4 mb-12">Automate Gas Balancing from Well to Delivery</h2>
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
            <h2 className="font-display text-display-md font-bold text-slate-900 mt-4 mb-10">Built for the Teams That Move Gas</h2>
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
            <h3 className="font-display text-display-md font-bold text-white mt-4 mb-4">See iGB in Action</h3>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#A89EC4' }}>Schedule a demo to see how iGB can automate your gas balancing operations and reduce reconciliation time.</p>
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
