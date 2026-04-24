import Link from 'next/link'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

const INDUSTRIES = [
  { label: 'Financial Services', href: '/financial-services-consulting' },
  { label: 'Healthcare',          href: '/healthcare-analytics' },
  { label: 'Manufacturing',       href: '/manufacturing-analytics' },
  { label: 'Oil & Gas',           href: '/oil-gas-analytics-consulting' },
  { label: 'Distribution',        href: '/distribution-analytics' },
  { label: 'Retail',              href: '/retail-analytics-consulting' },
  { label: 'Hospitality',         href: '/hospitality-analytics-consulting' },
  { label: 'Education',           href: '/education-analytics-consulting' },
  { label: 'Government',          href: '/government-analytics-consulting' },
]

const FUNCTIONS = [
  { label: 'Accounting',                href: '/accounting' },
  { label: 'Audit',                     href: '/audit' },
  { label: 'Financial Planning & Analysis', href: '/financial-planning-analysis' },
  { label: 'Tax Analytics',             href: '/tax-analytics-consulting' },
  { label: 'Technology & IT',           href: '/technology-it-consulting' },
  { label: 'Sales & Marketing',         href: '/sales-marketing-analytics-consulting' },
  { label: 'Supply Chain',              href: '/supply-chain-analytics' },
  { label: 'HR & Workforce',            href: '/hr-workforce-analytics' },
]

export function IndustriesSection() {
  return (
    <section className="section-py bg-white border-b border-paper-border">
      <div className="container-wide">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <AnimateOnView>
              <p className="section-label mb-4">Capitalize Analytics — Who We Help</p>
            </AnimateOnView>
            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight">
                Across Every Industry &amp; Function
              </h2>
            </AnimateOnView>
            <AnimateOnView delay={0.08}>
              <p className="mt-3 text-slate-500 max-w-lg leading-relaxed">
                If you run on data, we can help. Our team adapts analytics, AI, and automation
                to your unique business model and the specific challenges of your domain.
              </p>
            </AnimateOnView>
          </div>
          <AnimateOnView delay={0.08} direction="left">
            <Button href="/what-we-do" variant="outline" size="md" arrow>
              View All
            </Button>
          </AnimateOnView>
        </div>

        <AnimateOnView delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-paper-border">
            {/* Industries */}
            <div className="bg-white pr-0 lg:pr-12 pb-12 lg:pb-0">
              <p className="font-sans text-[10px] font-medium uppercase tracking-widest text-slate-400 mb-4">
                By Industry
              </p>
              <div className="divide-y divide-paper-border">
                {INDUSTRIES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between py-3.5 text-sm text-slate-600 hover:text-slate-900 transition-colors duration-150"
                  >
                    {item.label}
                    <span className="text-teal opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Functions */}
            <div className="bg-white pl-0 lg:pl-12 pt-12 lg:pt-0">
              <p className="font-sans text-[10px] font-medium uppercase tracking-widest text-slate-400 mb-4">
                By Function
              </p>
              <div className="divide-y divide-paper-border">
                {FUNCTIONS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between py-3.5 text-sm text-slate-600 hover:text-slate-900 transition-colors duration-150"
                  >
                    {item.label}
                    <span className="text-teal opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnView>

      </div>
    </section>
  )
}
