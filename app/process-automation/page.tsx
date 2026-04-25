import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Process Automation | Capitalize Analytics',
  description:
    'Capitalize helps organizations automate repetitive, error-prone tasks so teams can focus on higher-value work. From workflow automation to intelligent process design, our experts build solutions that reduce costs, increase accuracy, and accelerate decisions.',
}

const dotGrid = (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: 'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)',
      backgroundSize: '28px 28px',
    }}
  />
)

const technologies = [
  'UiPath',
  'Alteryx',
  'Power Automate',
  'Python',
  'n8n',
  'Azure',
  'SQL',
  'Workday',
]

const capabilities = [
  {
    title: 'Analytics Roadmapping',
    desc: 'Align automation initiatives with business strategy and technology investments.',
  },
  {
    title: 'User Training & Adoption',
    desc: 'Equip teams to safely use and maintain automated workflows at scale.',
  },
  {
    title: 'Governance & Standards',
    desc: 'Establish best practices for workflow definitions, access, and automation consistency.',
  },
  {
    title: 'Workflow Automation Platforms',
    desc: 'Design enterprise-ready automations using UiPath, Alteryx, Power Automate, or your platform of choice.',
  },
  {
    title: 'Real-Time & Scheduled Automation',
    desc: 'Run automations on demand or on schedule while maintaining governance.',
  },
  {
    title: 'KPI & Performance Tracking',
    desc: 'Define and monitor the metrics that prove automation ROI.',
  },
  {
    title: 'Integration & Connectivity',
    desc: 'Connect ERP, CRM, financial, and operational systems into automated end-to-end workflows.',
  },
  {
    title: 'Scalable Architecture',
    desc: 'Build flexible automation structures that evolve with your operational maturity.',
  },
]

const painPoints = [
  'Finance close takes weeks because of manual reconciliations and data gathering.',
  'Teams copy-paste between systems every day instead of doing real work.',
  'Errors from manual processes cause downstream rework and compliance risk.',
  'Your best analysts spend most of their time in Excel, not actually analyzing.',
]

const trustedBrands = [
  'Kearney',
  'Frontier Airlines',
  'Sysco',
  'Kaiser Permanente',
  'Splunk',
  'Sweetgreen',
  'Riveron',
]

export default function ProcessAutomationPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[55vh] flex items-center">
        {dotGrid}
        <div className="relative container-wide section-py">
          <AnimateOnView>
            <p className="section-label mb-4">Process Automation</p>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white max-w-4xl mb-6">
              Streamline Processes. Eliminate Bottlenecks. Maximize Efficiency.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#A89EC4' }}>
              At Capitalize, we help organizations automate repetitive, error-prone tasks so teams
              can focus on higher-value work. From workflow automation to intelligent process design,
              our experts build solutions that reduce costs, increase accuracy, and accelerate
              decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Get in Touch
              </Button>
              <Button href="/what-we-do" variant="outline" size="lg">
                What We Do
              </Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ── Entry Points ── */}
      <section className="bg-white section-py-sm">
        <div className="container-wide">
          <AnimateOnView>
            <p className="section-label mb-4 text-center">Where to Start</p>
            <h2 className="font-display text-display-lg font-bold text-slate-900 text-center mb-12">
              Two Ways to Get Moving Fast
            </h2>
          </AnimateOnView>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnView delay={0.1}>
              <div className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow bg-white h-full flex flex-col">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-teal/10 text-teal mb-4 self-start">
                  Session 01
                </span>
                <h3 className="font-display text-display-md font-bold text-slate-900 mb-3">
                  Automation Ideation Session
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Find the hidden costs of manual work — and where automation will hit hardest. We
                  analyze your end-to-end processes to identify the most repetitive, error-prone
                  tasks.
                </p>
                <ul className="space-y-3 flex-1">
                  {[
                    'Data-backed roadmap showing which processes to automate first for highest ROI',
                    'Phased rollout plan tied to measurable business outcomes',
                    'Value vs. effort matrix to prioritize quick wins',
                  ].map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                      <span className="text-slate-600 text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="/contact" variant="primary" size="md" arrow>
                    Start Here
                  </Button>
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView delay={0.2}>
              <div className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow bg-white h-full flex flex-col">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-teal/10 text-teal mb-4 self-start">
                  Session 02
                </span>
                <h3 className="font-display text-display-md font-bold text-slate-900 mb-3">
                  Automation Assessment
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  A structured review of your current-state processes with a future-state automation
                  architecture and rollout plan.
                </p>
                <ul className="space-y-3 flex-1">
                  {[
                    'Document all manual steps, data sources, and handoffs',
                    'Identify governance gaps and automation risks',
                    'Deliver a prioritized, executable automation roadmap',
                  ].map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                      <span className="text-slate-600 text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="/contact" variant="outline" size="md" arrow>
                    Book a Session
                  </Button>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ── Technologies ── */}
      <section className="bg-paper-50 section-py-sm">
        <div className="container-wide">
          <AnimateOnView>
            <p className="section-label mb-4 text-center">Our Technologies</p>
            <h2 className="font-display text-display-lg font-bold text-slate-900 text-center mb-10">
              The Tools We Work With
            </h2>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border border-paper-border bg-white text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <AnimateOnView>
            <p className="section-label mb-4 text-center">Capabilities</p>
            <h2 className="font-display text-display-lg font-bold text-slate-900 text-center mb-12">
              What We Deliver
            </h2>
          </AnimateOnView>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow bg-white"
                style={staggerItem as React.CSSProperties}
              >
                <h3 className="font-display font-bold text-slate-900 mb-2">{cap.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Problem / Solution ── */}
      <section className="bg-paper-50 section-py">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimateOnView direction="left">
              <h2 className="font-display text-display-md font-bold text-slate-900 mb-6">
                Stop Wasting Your Best People on Manual Work
              </h2>
              <ul className="space-y-4">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-teal/10 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-teal" />
                    </span>
                    <span className="text-slate-600 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnView>

            <AnimateOnView direction="right">
              <h2 className="font-display text-display-md font-bold text-slate-900 mb-6">
                Your Partner in Smarter, Faster Operations
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                <span className="font-semibold text-slate-900">
                  Our Approach: Assess. Automate. Accelerate.
                </span>{' '}
                We start with discovery to understand your most painful manual processes, then
                design and build automations that deliver measurable ROI — tracked from day one.
                Most clients see 3–5x productivity gains in the first 90 days.
              </p>
              <Button href="/contact" variant="primary" size="lg" arrow>
                Get in Touch
              </Button>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative bg-[#110c1d] section-py-sm overflow-hidden">
        {dotGrid}
        <div className="relative container-wide text-center">
          <AnimateOnView>
            <p className="section-label mb-4">Ready to Get Started?</p>
            <h3 className="font-display text-display-lg font-bold text-white mb-4">
              Let&apos;s Build Your Automation Roadmap
            </h3>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#A89EC4' }}>
              Schedule a 30-minute automation consultation to identify your highest-impact
              opportunities.
            </p>
            <Button href="/contact" variant="primary" size="lg" arrow>
              Get in Touch
            </Button>
          </AnimateOnView>
        </div>
      </section>

      {/* ── Trusted Brands ── */}
      <section className="bg-white section-py-sm">
        <div className="container-wide">
          <AnimateOnView>
            <p className="text-slate-500 text-sm font-medium text-center mb-6">
              Trusted by organizations including:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {trustedBrands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 rounded-full border border-paper-border bg-paper-50 text-slate-700 text-sm font-medium"
                >
                  {brand}
                </span>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>
    </main>
  )
}
