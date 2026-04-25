import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Webinars & Virtual Events | Capitalize Analytics',
  description: 'On-demand webinars covering data analytics, AI automation, financial consolidation, and enterprise analytics strategy from Capitalize Analytics.',
}

const BASE = 'https://capitalizeconsulting.com'

const WEBINARS = [
  {
    title: 'Modernize Your Financial Consolidation Solution',
    desc: 'Learn how leading finance teams are replacing legacy consolidation tools with modern analytics platforms to close faster, report with confidence, and reduce manual effort.',
    href: `${BASE}/webinars/modernize-your-financial-consolidation-solution/`,
  },
  {
    title: 'Automation for Accountants: BlackLine, Alteryx & UiPath',
    desc: 'A practical session on how accounting teams use BlackLine, Alteryx, and UiPath together to shave days off the financial close cycle and eliminate manual reconciliation work.',
    href: `${BASE}/webinars/automation-for-accountants-how-blackline-alteryx-and-uipath-can-shave-days-off-your-financial-close/`,
  },
  {
    title: 'Streamline Your External Audit with WAM',
    desc: 'With insights from KPMG — how organizations are using Workflow Admin Manager to satisfy external audit requirements for Alteryx workflows and strengthen data governance.',
    href: `${BASE}/webinars/alteryx-users-streamline-your-external-audit-with-wam-with-insights-from-kpmg/`,
  },
  {
    title: "Vision and Execution: TripAdvisor's Analytics Journey",
    desc: "How TripAdvisor built a scalable, self-service analytics ecosystem — the strategy, tools, and lessons learned from one of the world's most data-driven consumer brands.",
    href: `${BASE}/webinars/vision-and-execution-tripadvisors-analytics-and-automation-journey/`,
  },
]

export default function WebinarPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#110c1d] py-20">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide relative z-10">
          <AnimateOnView>
            <span className="section-label">On-Demand Webinars</span>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mt-4 mb-4 max-w-2xl">Webinars & Virtual Events</h1>
            <p className="text-lg max-w-xl" style={{ color: '#A89EC4' }}>Practical sessions on analytics, AI, automation, and enterprise data strategy — available to watch on demand.</p>
          </AnimateOnView>
        </div>
      </section>

      {/* Webinar Cards */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {WEBINARS.map((webinar) => (
              <StaggerItem key={webinar.href}>
                <Link
                  href={webinar.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full border border-paper-border rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-200"
                >
                  <span className="self-start text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full mb-5 bg-teal/10 text-teal">
                    On Demand
                  </span>
                  <h3 className="font-semibold text-slate-900 text-lg mb-3 leading-snug group-hover:text-teal transition-colors">{webinar.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{webinar.desc}</p>
                  <span className="mt-6 text-sm font-medium text-teal flex items-center gap-1">Watch Now <span className="transition-transform group-hover:translate-x-0.5">→</span></span>
                </Link>
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
            <h3 className="font-display text-display-md font-bold text-white mb-4">Want to See What We&apos;d Build for You?</h3>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#A89EC4' }}>Talk to our team about your analytics and automation challenges.</p>
            <Button href="/contact" variant="primary" size="lg" arrow>Get in Touch</Button>
          </AnimateOnView>
        </div>
      </section>
    </main>
  )
}
