import { AnimateOnView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

const DIFFERENTIATORS = [
  {
    label: 'Deep technical + domain expertise',
    desc: 'Our consultants can talk strategy with your executive team and get hands-on with your data engineers. We bridge both worlds — which is why our solutions stick.',
  },
  {
    label: 'End-to-end delivery',
    desc: 'From data strategy and architecture through build, rollout, and managed services — we stay engaged through the full lifecycle, not just the kickoff.',
  },
  {
    label: 'Practical, usable solutions',
    desc: 'We design for adoption from day one. Dashboards your teams actually open. Models your analysts can trust. Tools that become part of how the business runs.',
  },
  {
    label: 'Business-first, tool-agnostic',
    desc: 'We start with your outcomes, then recommend the right platforms — Power BI, Alteryx, Snowflake, or others. No vendor agenda, no one-size-fits-all toolkit.',
  },
]

export function AboutSection() {
  return (
    <section className="section-py bg-white border-b border-paper-border">
      <div className="container-wide">

        <div className="max-w-3xl mb-14">
          <AnimateOnView>
            <p className="section-label mb-6">Capitalize Analytics — Who We Are</p>
          </AnimateOnView>

          <AnimateOnView delay={0.05}>
            <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight mb-6">
              We deliver results,<br />not just implementations
            </h2>
          </AnimateOnView>

          <AnimateOnView delay={0.1}>
            <p className="text-slate-600 leading-relaxed text-lg">
              Capitalize is a data, analytics, and AI consulting firm that helps organizations
              turn information into insight and insight into action. We solve real business
              problems — not just implement tools. Our teams work alongside yours to design,
              build, and support solutions that are practical and focused on measurable outcomes.
            </p>
          </AnimateOnView>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {DIFFERENTIATORS.map((d) => (
            <StaggerItem key={d.label}>
              <div className="h-px w-8 bg-teal/40 mb-5" />
              <p className="text-slate-900 font-semibold mb-3 leading-snug">{d.label}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{d.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateOnView delay={0.15}>
          <Button href="/who-we-are" variant="outline" size="md" arrow>
            Meet the Team
          </Button>
        </AnimateOnView>

      </div>
    </section>
  )
}
