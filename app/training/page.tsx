import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Training & Mentoring | Capitalize Analytics',
  description:
    'Hands-on, practical training designed to help your team move from learning the tools to delivering real business value. Build lasting expertise in the analytics, AI, and automation tools your organization depends on.',
}

const dotGrid = (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)',
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
  'Workday Adaptive Planning',
  'Python',
  'Azure',
]

const capabilities = [
  {
    title: 'Curated Learning Paths',
    desc: 'We assemble the most relevant vendor content, videos, documentation, and exercises to give your team a strong foundation before class.',
  },
  {
    title: 'Faster Classroom Readiness',
    desc: 'Participants arrive with baseline knowledge, so live training focuses on application, not fundamentals.',
  },
  {
    title: 'Consistent Skill Alignment',
    desc: 'Everyone starts from the same place, regardless of prior experience.',
  },
  {
    title: 'Hands-On Instruction',
    desc: 'Instructor-led classes with demos, workshops, and guided exercises to build practical skills.',
  },
  {
    title: 'Comprehensive Materials',
    desc: '~100 pages of printed and bound content per course — screenshots, data, starter files, and solution files.',
  },
  {
    title: 'Flexible Delivery',
    desc: 'Onsite or remote, public or private courses, fully customizable using your data and systems.',
  },
  {
    title: 'Real Use Cases',
    desc: 'Sessions focus on the actual challenges your team faces, not hypothetical examples.',
  },
  {
    title: 'Step-by-Step Solution Building',
    desc: 'We work alongside your team to design, refine, and implement solutions while transferring knowledge throughout.',
  },
  {
    title: 'Expert Guidance On-Demand',
    desc: 'Access experienced consultants when your team gets stuck — from short troubleshooting calls to extended coaching sessions.',
  },
]

const painPoints = [
  'Teams adopt new tools but never reach full productivity — licenses go underutilized.',
  'Knowledge is concentrated in 1-2 power users and never spreads across the team.',
  'Training was done once at rollout — but people still don\'t feel confident.',
  "Self-paced vendor training doesn't translate to the team's actual use cases.",
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

export default function TrainingPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[55vh] flex items-center">
        {dotGrid}
        <div className="relative container-wide section-py">
          <AnimateOnView>
            <p className="section-label mb-4">Training &amp; Mentoring</p>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white max-w-4xl mb-6">
              Training &amp; Mentoring That Turns Software Investment Into Real ROI
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#A89EC4' }}>
              Hands-on, practical training designed to help your team move from learning the tools
              to delivering real business value. Build lasting expertise in the analytics, AI, and
              automation tools your organization depends on.
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
                  Alteryx Training
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Workflow-driven learning built around real data prep, blending, and analytics use
                  cases.
                </p>
                <ul className="space-y-3 flex-1">
                  {[
                    'Instructor-led exercises with realistic scenarios and best-practice reinforcement',
                    'Scalable expertise — develop internal capability to automate processes and deliver repeatable insights',
                    "Customizable to your team's actual data and workflows",
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
                  Tableau Training
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  From core visualization concepts to advanced dashboards, calculations, and
                  performance tuning.
                </p>
                <ul className="space-y-3 flex-1">
                  {[
                    'Best-practice design — create clear, intuitive dashboards that drive decisions, not confusion',
                    'Hands-on labs using practical datasets immediately applicable in your environment',
                    'Foundational to advanced skill progression at your team\'s pace',
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
                Why Training &amp; Mentoring Matters
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
                Why Work With Capitalize for Training
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Our proven training methodology has been tested across hundreds of clients and every
                platform we support. The result: faster adoption, stronger solutions, and teams that
                move from &apos;learning&apos; to &apos;leading.&apos; Clients typically see 3–5x
                more output compared to working alone, rapidly advancing toward independence.
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
              Talk to a Training &amp; Analytics Expert
            </h3>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#A89EC4' }}>
              Let&apos;s build a training program tailored to your team&apos;s tools, goals, and
              skill level.
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
