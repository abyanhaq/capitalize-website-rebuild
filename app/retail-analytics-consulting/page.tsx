import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Retail Analytics Consulting | Capitalize Analytics',
  description: 'Capitalize helps retail organizations unify omnichannel data, optimize inventory, and build analytics that drive smarter merchandising, customer loyalty, and supply chain decisions.',
}

const painPoints = [
  { title: 'Omnichannel Data Gaps', desc: 'In-store POS, eCommerce, and marketplace data live in separate platforms with no unified view of customer behavior or channel performance.' },
  { title: 'Inventory Forecasting Errors', desc: 'Manual demand forecasting leads to overstock in slow categories and stockouts in fast movers, eroding both margin and customer satisfaction.' },
  { title: 'Siloed Customer Data', desc: "Loyalty program, purchase history, and engagement data aren't connected to merchandising decisions or store operations." },
  { title: 'Markdown & Promotion Inefficiency', desc: 'Promotional planning and markdown decisions are made on intuition rather than analytics, resulting in margin leakage and missed sell-through targets.' },
]

const services = [
  { title: 'Sales & Inventory Analytics', desc: 'Real-time dashboards for sell-through rates, inventory turnover, days on hand, and stockout risk across locations and channels.' },
  { title: 'Customer & Loyalty Analytics', desc: 'Connect purchase history, loyalty data, and digital behavior to drive segmentation, retention, and personalized marketing.' },
  { title: 'Omnichannel Reporting', desc: 'Unified reporting across stores, eCommerce, and marketplace channels to understand true customer lifetime value and channel ROI.' },
  { title: 'Markdown & Promotion Analytics', desc: 'Model promotional effectiveness and markdown impact to optimize sell-through while protecting margin.' },
  { title: 'Supply Chain Visibility', desc: 'Connect supplier, warehouse, and store data for end-to-end visibility into inventory flow and replenishment performance.' },
  { title: 'Store Operations Analytics', desc: 'Track labor productivity, shrink, conversion rates, and store-level KPIs to identify performance gaps and best practices.' },
]

export default function RetailAnalyticsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[50vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide py-16 relative z-10">
          <AnimateOnView>
            <span className="section-label">Retail Analytics</span>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mt-4 mb-6 max-w-3xl">Analytics That Drive Smarter Merchandising, Loyalty, and Supply Chain Decisions</h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#A89EC4' }}>Capitalize helps retail organizations unify omnichannel data, optimize inventory, and build the analytics capabilities needed to compete in a fast-moving consumer environment.</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>Get in Touch</Button>
              <Button href="/what-we-do" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">What We Do</Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimateOnView>
              <span className="section-label">The Challenge</span>
              <h2 className="font-display text-display-lg font-bold text-slate-900 mt-4 mb-6">Retail Is Data-Rich but Insight-Poor</h2>
              <p className="text-slate-600 leading-relaxed">Modern retail generates more data than ever — from POS systems, eCommerce platforms, loyalty programs, and supply chain partners. But most retailers are still making merchandising, inventory, and marketing decisions based on lagging reports and intuition rather than real-time analytics.</p>
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

      <section className="bg-paper-50 py-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[{ value: '20+', label: 'Years of Experience' }, { value: '1,500+', label: 'Projects Delivered' }, { value: '1,000+', label: 'Clients Served' }, { value: '95%', label: 'Client Retention' }].map((stat) => (
              <AnimateOnView key={stat.label}>
                <p className="font-display text-display-md font-bold text-teal">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="container-wide">
          <AnimateOnView>
            <span className="section-label">Our Services</span>
            <h2 className="font-display text-display-lg font-bold text-slate-900 mt-4 mb-12">What We Do for Retail</h2>
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

      <section className="bg-[#110c1d] section-py-sm relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide text-center relative z-10">
          <AnimateOnView>
            <span className="section-label">Get Started</span>
            <h3 className="font-display text-display-md font-bold text-white mt-4 mb-4">Turn Retail Data Into a Competitive Advantage</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#A89EC4' }}>Talk to a retail analytics expert about your inventory, merchandising, and customer data challenges.</p>
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
