import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

const OUTCOMES = [
  { stat: '50K+',  desc: 'hours saved through automation and process improvement' },
  { stat: '$10M+', desc: 'in operational savings delivered across client engagements' },
  { stat: '95%',   desc: 'client retention — most of our work comes from existing clients' },
]

const DIFFERENTIATORS = [
  { label: 'Deep technical + domain expertise', desc: 'Our consultants can talk strategy with your leadership and get hands-on with your data teams.' },
  { label: 'End-to-end delivery',               desc: 'From strategy and architecture through build, rollout, and managed services — we stay with you.' },
  { label: 'Practical, usable solutions',       desc: 'We prioritize adoption and usability. Your teams actually use what we build.' },
]

export function AboutSection() {
  return (
    <section className="section-py bg-navy-900">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <AnimateOnView>
              <p className="data-label mb-6">Capitalize Analytics — Who We Are</p>
            </AnimateOnView>

            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-white leading-tight mb-6">
                We deliver results,<br />not just implementations
              </h2>
            </AnimateOnView>

            <AnimateOnView delay={0.1}>
              <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                Capitalize is a data, analytics, and AI consulting firm that helps organizations
                turn information into insight and insight into action. Our teams work side-by-side
                with yours — not handing off a playbook, but building and owning the solution together.
              </p>
            </AnimateOnView>

            <AnimateOnView delay={0.12}>
              <div className="space-y-6 mb-10">
                {DIFFERENTIATORS.map((d) => (
                  <div key={d.label} className="flex gap-4">
                    <div className="flex-shrink-0 w-px bg-teal/40 self-stretch" />
                    <div>
                      <p className="text-white font-semibold mb-1">{d.label}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnView>

            <AnimateOnView delay={0.15}>
              <Button href="/who-we-are" variant="secondary" size="md" arrow>
                Meet the Team
              </Button>
            </AnimateOnView>
          </div>

          {/* Right — outcome metrics */}
          <AnimateOnView delay={0.12} direction="left">
            <div>
              <p className="data-label mb-8">By the Numbers</p>
              <div className="space-y-0 divide-y divide-navy-border border-y border-navy-border">
                {OUTCOMES.map((o) => (
                  <div key={o.stat} className="flex items-start gap-6 py-7">
                    <span className="font-display text-display-sm font-bold text-teal flex-shrink-0 w-20">
                      {o.stat}
                    </span>
                    <p className="text-slate-400 leading-relaxed pt-1">{o.desc}</p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-10 pl-5 border-l-2 border-teal/30">
                <p className="text-slate-400 italic leading-relaxed">
                  &ldquo;We&apos;re not a &lsquo;build it and disappear&rsquo; firm. We work
                  side-by-side with your stakeholders through the full lifecycle — from
                  first data pull to company-wide adoption.&rdquo;
                </p>
              </blockquote>
            </div>
          </AnimateOnView>

        </div>
      </div>
    </section>
  )
}
