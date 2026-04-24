import type { Metadata } from 'next'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'AI & Advanced Analytics — Capitalize Analytics',
  description:
    'Turn AI and advanced analytics into measurable ROI. Capitalize helps you identify high-impact use cases, build governed models, and deploy AI safely in 45 days.',
}

const TECHNOLOGIES = [
  'Databricks',
  'Snowflake',
  'Azure',
  'AWS',
  'Python',
  'Power BI',
  'Alteryx',
  'UiPath',
  'OpenAI / Azure OpenAI',
]

const CAPABILITIES = [
  {
    title: 'Use Case Identification & Prioritization',
    desc: 'Assess your data, processes, and teams to identify where AI can deliver measurable impact — and define a clear path forward.',
  },
  {
    title: 'Data & Platform Strategy',
    desc: 'Design scalable data environments and architectures that enable analytics, automation, and machine learning across the enterprise.',
  },
  {
    title: 'Governance & Enablement',
    desc: 'Establish frameworks, policies, and best practices to ensure AI is adopted responsibly, ethically, and effectively.',
  },
  {
    title: 'Diagnostic & Descriptive Analytics',
    desc: 'Understand what drives performance and uncover root causes through data exploration and visualization.',
  },
  {
    title: 'Predictive & Forecasting Models',
    desc: 'Anticipate trends, customer behavior, and financial outcomes using advanced statistical and analytical techniques.',
  },
  {
    title: 'Optimization & Scenario Planning',
    desc: "Run 'what-if' simulations to evaluate potential outcomes and identify the most effective strategies for success.",
  },
  {
    title: 'Model Development & Deployment',
    desc: 'Develop and implement custom machine learning models that address key business challenges.',
  },
  {
    title: 'MLOps & Lifecycle Management',
    desc: 'Deploy, monitor, and retrain models at scale to maintain reliability, performance, and compliance.',
  },
  {
    title: 'Intelligent Automation',
    desc: 'Integrate predictive insights into workflows to drive faster, more efficient decisions.',
  },
  {
    title: 'Knowledge Assistant',
    desc: 'Create intelligent assistants that combine conversational AI with retrieval-augmented generation (RAG) to deliver accurate, context-aware answers.',
  },
  {
    title: 'Document Intelligence & Summarization',
    desc: 'Extract, summarize, and organize information from unstructured text and documents.',
  },
  {
    title: 'Agentic AI',
    desc: 'Create autonomous agents that plan, act, and learn to continuously improve performance.',
  },
]

const PAIN_POINTS = [
  "You're not sure which problems AI can actually solve.",
  "Every vendor seems to push a different 'must-have' platform.",
  'You worry about data privacy, governance, and security.',
  "Internal teams don't have the time or expertise to experiment.",
]

const BRANDS = [
  'Kearney',
  'Frontier Airlines',
  'Sysco',
  'Kaiser Permanente',
  'Splunk',
  'Sweetgreen',
  'Riveron',
]

export default function AIAndAdvancedAnalyticsPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060E1B] min-h-[55vh] flex items-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,58,90,0.55) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-10%',
            right: '-5%',
            width: '50%',
            height: '70%',
            background:
              'radial-gradient(ellipse at center, rgba(8,145,178,0.07) 0%, transparent 65%)',
          }}
        />

        <div className="container-wide relative z-10 py-24 lg:py-32">
          <AnimateOnView delay={0}>
            <p className="section-label mb-5" style={{ color: '#22D3EE', opacity: 0.8 }}>
              AI &amp; Advanced Analytics
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <h1 className="font-display text-display-xl font-bold text-white leading-tight mb-6 max-w-3xl">
              AI Is Everywhere. Knowing Where to Start Is the Hard Part.
            </h1>
          </AnimateOnView>
          <AnimateOnView delay={0.12}>
            <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: '#8A9EBB' }}>
              AI and advanced analytics promise incredible results — but for many teams, the biggest
              challenge isn&apos;t the technology itself. It&apos;s figuring out where to begin,
              which tools to trust, and how to move forward safely without risking data, compliance,
              or credibility.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.17}>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Book an AI Ideation Session
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Talk to an Expert
              </Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── Entry Points ──────────────────────────────────────────────── */}
      <section className="bg-white section-py-sm border-b border-paper-border">
        <div className="container-wide">
          <AnimateOnView>
            <p className="section-label mb-4">How We Engage</p>
          </AnimateOnView>
          <AnimateOnView delay={0.05}>
            <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight mb-10">
              Two ways to get started
            </h2>
          </AnimateOnView>

          <div className="grid lg:grid-cols-2 gap-6">
            <AnimateOnView delay={0.08}>
              <div className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow bg-white h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-teal/10 text-teal">
                    Option 1
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
                  AI Ideation Session
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  A 90-minute complimentary workshop with our analytics and automation architects to
                  identify high-impact, low-risk AI use cases. You&apos;ll walk away with a
                  prioritized roadmap and proof-of-value plan.
                </p>
                <div className="mt-6">
                  <Button href="/contact" variant="primary" size="md" arrow>
                    Book Your Session
                  </Button>
                </div>
              </div>
            </AnimateOnView>

            <AnimateOnView delay={0.13}>
              <div className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow bg-white h-full flex flex-col">
                <div className="mb-4">
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-teal/10 text-teal">
                    Option 2
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
                  AI to ROI in 45 Days
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  A structured, sprint-based engagement that takes one approved use case from
                  concept to working AI model in 45 days — safely, governed, and measurable.
                </p>
                <div className="mt-6">
                  <Button href="/contact" variant="outline" size="md" arrow>
                    Start the Sprint
                  </Button>
                </div>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </section>

      {/* ─── Technologies ──────────────────────────────────────────────── */}
      <section className="bg-paper-50 section-py-sm border-b border-paper-border">
        <div className="container-wide">
          <AnimateOnView>
            <p className="section-label mb-4">Our Technologies</p>
          </AnimateOnView>
          <AnimateOnView delay={0.05}>
            <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight mb-8">
              Best-in-class platforms, expertly deployed
            </h2>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {TECHNOLOGIES.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white border border-paper-border text-slate-700 shadow-card"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── Capabilities ──────────────────────────────────────────────── */}
      <section className="bg-white section-py border-b border-paper-border">
        <div className="container-wide">
          <div className="mb-12">
            <AnimateOnView>
              <p className="section-label mb-4">What We Do</p>
            </AnimateOnView>
            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight max-w-2xl">
                Full-spectrum AI &amp; analytics capabilities
              </h2>
            </AnimateOnView>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((cap, i) => (
              <AnimateOnView key={cap.title} delay={0.04 * (i % 6)}>
                <div className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow bg-white h-full">
                  <h3 className="font-display text-base font-semibold text-slate-900 mb-2 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Problem / Why ─────────────────────────────────────────────── */}
      <section className="bg-paper-50 section-py border-b border-paper-border">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Pain */}
            <div>
              <AnimateOnView>
                <p className="section-label mb-5">The Reality</p>
              </AnimateOnView>
              <AnimateOnView delay={0.05}>
                <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight mb-8">
                  The Real Problem Isn&apos;t AI. It&apos;s Uncertainty.
                </h2>
              </AnimateOnView>
              <div className="flex flex-col gap-4">
                {PAIN_POINTS.map((point, i) => (
                  <AnimateOnView key={i} delay={0.08 + i * 0.05}>
                    <div className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(8,145,178,0.12)' }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: '#0891B2' }}
                        />
                      </span>
                      <p className="text-slate-700 text-base leading-relaxed">{point}</p>
                    </div>
                  </AnimateOnView>
                ))}
              </div>
            </div>

            {/* Right — Solution */}
            <div>
              <AnimateOnView delay={0.06}>
                <p className="section-label mb-5">Our Approach</p>
              </AnimateOnView>
              <AnimateOnView delay={0.1}>
                <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight mb-6">
                  Confidence Through Experience
                </h2>
              </AnimateOnView>
              <AnimateOnView delay={0.14}>
                <p className="text-slate-600 leading-relaxed text-base mb-8">
                  We believe AI and analytics should be practical, governed, and tied directly to
                  business outcomes. Our team helps you identify where AI can drive value safely,
                  quickly, and sustainably — without the hype.
                </p>
              </AnimateOnView>
              <AnimateOnView delay={0.18}>
                <Button href="/contact" variant="primary" size="lg" arrow>
                  Talk to Our Team
                </Button>
              </AnimateOnView>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="section-py-sm relative overflow-hidden bg-[#060E1B]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(30,58,90,0.45) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container-wide relative z-10 text-center">
          <AnimateOnView>
            <h3 className="font-display text-display-md font-bold text-white mb-4">
              Schedule a 30-Minute AI Readiness Consultation
            </h3>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#8A9EBB' }}>
              We&apos;ll identify where AI can drive value safely, quickly, and sustainably.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <Button href="/contact" variant="primary" size="lg" arrow>
              Book a Consultation
            </Button>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── Trusted Brands ────────────────────────────────────────────── */}
      <section className="bg-white section-py-sm border-t border-paper-border">
        <div className="container-wide">
          <AnimateOnView>
            <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight mb-3 text-center">
              Trusted by leading organizations
            </h2>
          </AnimateOnView>
          <AnimateOnView delay={0.05}>
            <p className="text-slate-500 text-sm text-center mb-8">
              Trusted by organizations including:
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {BRANDS.map((brand) => (
                <span
                  key={brand}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-paper-50 border border-paper-border text-slate-600"
                >
                  {brand}
                </span>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  )
}
