import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Managed Services | Capitalize Analytics',
  description:
    'Capitalize provides managed services for your analytics and automation platforms — keeping them healthy, secure, and continuously improving so your teams can focus on decisions, not downtime.',
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
  'Alteryx',
  'Tableau',
  'Power BI',
  'Snowflake',
  'UiPath',
  'Azure',
  'AWS',
  'SQL Server',
]

const capabilities = [
  {
    title: 'Platform Administration & Upgrades',
    desc: 'Server setup, patching, and annual upgrades: keep environments current and supported.',
  },
  {
    title: 'User & Access Management',
    desc: 'Manage licenses, permissions, and collections so the right people always have the right access.',
  },
  {
    title: 'Health Monitoring & Outage Response',
    desc: 'Detect issues early and respond quickly when things go wrong.',
  },
  {
    title: 'Enhancement Intake & Prioritization',
    desc: 'Capture, vet, and prioritize improvement requests from the business.',
  },
  {
    title: 'Release & SDLC Management',
    desc: 'Manage changes through dev, test, and prod with automated deployments.',
  },
  {
    title: 'Performance & Capacity Optimization',
    desc: 'Identify bottlenecks and tune workloads before they impact users.',
  },
  {
    title: 'Usage & Telemetry Analytics',
    desc: "Understand who's using what, and where value is actually being created.",
  },
  {
    title: 'Training & Enablement',
    desc: 'Upskill users and admins so more of the organization can confidently self-serve.',
  },
  {
    title: 'Configuration & Governance Coaching',
    desc: 'Align settings, standards, and governance with best practices.',
  },
  {
    title: 'Platform Modernization Projects',
    desc: 'Upgrade legacy configurations or migrate to modern architecture while keeping production stable.',
  },
  {
    title: 'Strategic Roadmapping',
    desc: 'Align your platform roadmap with evolving business goals through ongoing advisory.',
  },
  {
    title: 'Change Adoption Support',
    desc: 'Help teams embrace new workflows and capabilities with minimal disruption.',
  },
]

const painPoints = [
  'Your analytics platform runs, but nobody truly owns it.',
  'Every upgrade becomes a mini-project. Every outage is a fire drill.',
  'New feature requests pile up in a backlog nobody has time for.',
  "You're dependent on 1-2 key people — and that's a serious organizational risk.",
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

export default function ManagedServicesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#060E1B] min-h-[55vh] flex items-center">
        {dotGrid}
        <div className="relative container-wide section-py">
          <AnimateOnView>
            <p className="section-label mb-4">Managed Services</p>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white max-w-4xl mb-6">
              Managed Services That Keep Your Analytics Running
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#8A9EBB' }}>
              Capitalize provides managed services for your analytics and automation platforms —
              keeping them healthy, secure, and continuously improving so your teams can focus on
              decisions, not downtime.
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
                  Ideation Session
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  A focused conversation where we map your current reality — firefights, bottlenecks,
                  and improvement wish-list.
                </p>
                <ul className="space-y-3 flex-1">
                  {[
                    'Clarify what to hand off vs. keep in-house',
                    'Surface high-impact opportunities where managed services creates the most value',
                    'Shape a right-sized engagement model for your organization',
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
                  Readiness Assessment
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Understand how ready you are for managed services — and where you stand to gain the
                  most.
                </p>
                <ul className="space-y-3 flex-1">
                  {[
                    'Reveal where your current support approach leaves you vulnerable',
                    "Quantify how much time your team spends 'keeping the lights on'",
                    'Identify where managed services would free capacity for strategic work',
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
                Reduce Platform Risk Without Overloading Your Team
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
                A Managed Services Model Built Around Your Business
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Get help exactly where you need it — from targeted support in one area to a fully
                customized managed services package. We&apos;re designed to be an extension of your
                team, not a vendor you call when things break.
              </p>
              <Button href="/contact" variant="primary" size="lg" arrow>
                Get in Touch
              </Button>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative bg-[#060E1B] section-py-sm overflow-hidden">
        {dotGrid}
        <div className="relative container-wide text-center">
          <AnimateOnView>
            <p className="section-label mb-4">Ready to Get Started?</p>
            <h3 className="font-display text-display-lg font-bold text-white mb-4">
              Let Capitalize Run Your Platforms — So You Can Run the Business
            </h3>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#8A9EBB' }}>
              Schedule a 30-minute consultation to explore what managed services could look like for
              your team.
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
