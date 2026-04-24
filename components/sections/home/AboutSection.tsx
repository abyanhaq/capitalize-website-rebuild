import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { CheckCircle2 } from 'lucide-react'

const DIFFERENTIATORS = [
  {
    title: 'Deep technical + domain expertise',
    desc: 'Consultants who can talk strategy with executives and get hands-on in the data with your technical teams.',
  },
  {
    title: 'End-to-end delivery',
    desc: 'From data strategy and architecture to build, rollout, and managed services — we stay with you through the full lifecycle.',
  },
  {
    title: 'Practical, usable solutions',
    desc: 'We prioritize adoption, usability, and performance so your teams actually use what we build.',
  },
  {
    title: 'Business-first, tool-agnostic',
    desc: 'We start with outcomes, then recommend the right mix of platforms like Power BI, Alteryx, Snowflake, and others.',
  },
]

export function AboutSection() {
  return (
    <section className="section-py bg-navy-900 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-teal/4 blur-[120px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <AnimateOnView>
              <Badge variant="teal" className="mb-5">Who We Are</Badge>
            </AnimateOnView>

            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-white mb-6 leading-tight">
                We solve real business problems —{' '}
                <span className="text-gradient-teal">not just implement tools</span>
              </h2>
            </AnimateOnView>

            <AnimateOnView delay={0.1}>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                Capitalize is a data, analytics, and AI consulting firm that helps organizations turn
                information into insight and insight into action. Our teams work side-by-side with yours
                to design, build, and support solutions that are practical and focused on measurable outcomes.
              </p>
            </AnimateOnView>

            <AnimateOnView delay={0.15}>
              <div className="space-y-4 mb-10">
                {DIFFERENTIATORS.map((d) => (
                  <div key={d.title} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">{d.title}</span>
                      <span className="text-slate-500"> — {d.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnView>

            <AnimateOnView delay={0.2}>
              <Button href="/who-we-are" variant="secondary" size="md" arrow>
                Meet the Team
              </Button>
            </AnimateOnView>
          </div>

          {/* Right — visual card */}
          <AnimateOnView delay={0.15} direction="left">
            <div className="relative rounded-2xl overflow-hidden border border-navy-border bg-navy-800 p-8 shadow-card">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-bl-[80px] pointer-events-none" />

              <p className="data-label mb-6">How We Work With You</p>

              <div className="space-y-6">
                {[
                  { step: '01', label: 'Discovery', desc: 'We understand your goals, challenges, and the outcomes you want to achieve.' },
                  { step: '02', label: 'Design', desc: 'We architect a solution that fits your stack, your team, and your timeline.' },
                  { step: '03', label: 'Deliver', desc: 'We build, test, and deploy — with training baked in so your team can own it.' },
                  { step: '04', label: 'Optimize', desc: 'We stick around to tune, extend, and maximize the value of what we built.' },
                ].map((item, i) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center">
                      <span className="font-mono text-xs text-teal font-bold">{item.step}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">{item.label}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                    {i < 3 && (
                      <div className="absolute left-[2.25rem] mt-10 w-px h-6 bg-navy-border" style={{ marginLeft: '1.25rem' }} />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-navy-border">
                <p className="text-xs text-slate-600 italic">
                  &ldquo;We&apos;re not a &lsquo;build it and disappear&rsquo; consulting shop. We work side-by-side with
                  your stakeholders through the full lifecycle.&rdquo;
                </p>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  )
}
