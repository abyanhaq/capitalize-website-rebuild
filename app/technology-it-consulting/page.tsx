import type { Metadata } from 'next'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Technology & IT Analytics Consulting — Capitalize Analytics',
  description:
    'Capitalize helps IT leaders design and implement modern analytics solutions — so you can manage growing data demands, enable the business, and keep your environment secure and governed.',
}

const PAIN_POINTS = [
  {
    title: 'Architecture Decisions',
    desc: 'How to balance centralization vs. decentralization, on-prem vs. cloud, and hybrid approaches across a complex environment.',
  },
  {
    title: 'Governance & Control',
    desc: 'How to manage access, security, change control, and version control without slowing down the business.',
  },
  {
    title: 'Tool Sprawl',
    desc: 'Which analytics tools to standardize on, and how to support them across a growing community of business users.',
  },
  {
    title: 'Self-Service Risk',
    desc: 'Business users want analytics independence — but uncontrolled self-service creates inconsistency and data quality risks.',
  },
]

const SERVICES = [
  {
    title: 'Business-Aligned Strategy',
    desc: 'Translate technology investments into business outcomes your stakeholders can see and measure.',
  },
  {
    title: 'Practical Roadmaps',
    desc: 'Design phased, achievable modernization plans that balance quick wins with long-term architecture.',
  },
  {
    title: 'Tool-Agnostic Guidance',
    desc: 'Evaluate and recommend the right analytics and data tools for your specific environment.',
  },
  {
    title: 'Fit-for-Purpose Architecture',
    desc: 'Design cloud, hybrid, or on-prem data environments that meet your security, performance, and cost requirements.',
  },
  {
    title: 'Governed Self-Service',
    desc: 'Enable business users with analytics tools like Power BI and Alteryx within defined standards and guardrails.',
  },
  {
    title: 'Change Control & Governance',
    desc: 'Implement version control, audit trails, and change management for analytics workflows and data assets.',
  },
]

export default function TechnologyITPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container-wide relative z-10 py-16">
          <AnimateOnView delay={0}>
            <p className="section-label mb-5">Technology &amp; IT</p>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mb-6 max-w-3xl">
              Turn IT Into the Engine of Data-Driven Decisions
            </h1>
          </AnimateOnView>
          <AnimateOnView delay={0.12}>
            <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: '#A89EC4' }}>
              Capitalize helps IT leaders design and implement modern analytics solutions — so you
              can manage growing data demands, enable the business, and keep your environment secure
              and governed.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.17}>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Get in Touch
              </Button>
              <Button
                href="/what-we-do"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Our Services
              </Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── Challenge ─────────────────────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimateOnView>
                <p className="section-label mb-5">The Challenge</p>
              </AnimateOnView>
              <AnimateOnView delay={0.05}>
                <h2 className="font-display text-display-lg font-bold text-slate-900 leading-tight mb-6">
                  More Data, More Requests, More Risk
                </h2>
              </AnimateOnView>
              <AnimateOnView delay={0.1}>
                <p className="text-slate-600 leading-relaxed text-base">
                  Today&apos;s technology teams collect and manage more data than ever before.
                  Business units want direct access to data. Leadership wants faster insights. And
                  IT is expected to enable all of it while maintaining security, governance, and
                  cost control. Handled well, this is IT&apos;s moment to become a true partner to
                  the business.
                </p>
              </AnimateOnView>
            </div>
            <div className="flex flex-col gap-6">
              {PAIN_POINTS.map((point, i) => (
                <AnimateOnView key={point.title} delay={0.06 + i * 0.05}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1.5">
                      <div
                        className="w-1 rounded-full"
                        style={{ height: '2.5rem', background: '#0E41B8' }}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{point.title}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─────────────────────────────────────────────────── */}
      <section className="bg-paper-50 py-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-paper-border">
            {[
              { value: '20+', label: 'Years of Experience' },
              { value: '1,500+', label: 'Projects Delivered' },
              { value: '1,000+', label: 'Clients Served' },
              { value: '95%', label: 'Client Retention' },
            ].map((stat, i) => (
              <AnimateOnView key={stat.label} delay={0.05 * i}>
                <div className="text-center px-4">
                  <p className="font-display text-display-md font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Grid ─────────────────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <AnimateOnView>
            <p className="section-label mb-4">What We Do</p>
          </AnimateOnView>
          <AnimateOnView delay={0.05}>
            <h2 className="font-display text-display-lg font-bold text-slate-900 leading-tight mb-10">
              What We Do for Technology Teams
            </h2>
          </AnimateOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc, i) => (
              <AnimateOnView key={svc.title} delay={0.04 * (i % 6)}>
                <div className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow h-full">
                  <h3 className="font-semibold text-slate-900 mb-2">{svc.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{svc.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ────────────────────────────────────────────────── */}
      <section className="section-py-sm relative overflow-hidden bg-[#110c1d]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container-wide relative z-10 text-center">
          <AnimateOnView>
            <p className="section-label mb-4">Get Started</p>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <h3 className="font-display text-display-md font-bold text-white mb-4">
              Make IT the Partner the Business Needs
            </h3>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#A89EC4' }}>
              Talk to a technology analytics advisor about your data strategy and architecture.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.14}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Get in Touch
              </Button>
              <Button
                href="/what-we-do"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Our Services
              </Button>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  )
}
