import type { Metadata } from 'next'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'
import { Users, Cpu, TrendingUp, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers — Capitalize Analytics',
  description:
    'Join the Capitalize Analytics team. Build meaningful careers working with best-in-class analytics and AI technologies alongside a collaborative, supportive team.',
}

const BENEFITS = [
  {
    icon: Users,
    title: 'Collaborative Culture',
    body: 'A supportive community that truly has your back. We leave unnecessary competition at the door and focus on doing great work together.',
  },
  {
    icon: Cpu,
    title: 'Cutting-Edge Technology',
    body: 'Work with best-in-class platforms — Alteryx, Tableau, Snowflake, Workday, IBM, Microsoft, and UiPath — and build unparalleled expertise.',
  },
  {
    icon: TrendingUp,
    title: 'Meaningful Client Impact',
    body: 'Every project delivers real, measurable outcomes for clients. You\'ll see the direct impact of your work and grow as a result.',
  },
]

const CORE_VALUES = [
  { num: '01', text: "Don't help customers, build partnerships." },
  { num: '02', text: 'Never stop learning and growing.' },
  { num: '03', text: 'Attract and reward rock stars.' },
  { num: '04', text: 'Never step or be stepped on.' },
  { num: '05', text: 'Be fanatically responsive.' },
  { num: '06', text: "Don't just do it, OWN it!" },
  { num: '07', text: 'Have fun, be fun!' },
  { num: '08', text: 'Excel as a team.' },
]

export default function CareersPage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center overflow-hidden bg-[#110c1d]"
        style={{ minHeight: '55vh' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-10%', right: '-5%', width: '50%', height: '70%',
            background: 'radial-gradient(ellipse at center, rgba(14,65,184,0.08) 0%, transparent 65%)',
          }}
        />

        <div className="container-wide relative z-10 py-24 lg:py-32">
          <AnimateOnView delay={0}>
            <p className="section-label mb-5" style={{ color: '#4A72D9', opacity: 0.8 }}>
              Careers
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <h1 className="font-display text-display-xl font-bold text-white leading-[1.06] mb-6 max-w-3xl">
              Build your career with Capitalize
            </h1>
          </AnimateOnView>
          <AnimateOnView delay={0.12}>
            <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: '#A89EC4' }}>
              We partner with best-in-class technologies like Alteryx, Tableau, Snowflake, Workday,
              IBM, Microsoft and UiPath, focusing on simplifying business intelligence and analytics
              for everyone. Capitalize offers the chance to build unparalleled networks and the
              opportunity to work with great people.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.17}>
            <Button href="#positions" variant="primary" size="lg" arrow>
              See Open Positions
            </Button>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── Why Capitalize ────────────────────────────────────────── */}
      <section className="bg-white section-py border-b border-paper-border">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Left */}
            <div>
              <AnimateOnView>
                <p className="section-label mb-5">Why Join Us</p>
              </AnimateOnView>
              <AnimateOnView delay={0.05}>
                <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight mb-6">
                  A team that has your back
                </h2>
              </AnimateOnView>
              <AnimateOnView delay={0.1}>
                <p className="text-slate-600 leading-relaxed">
                  When you&apos;re part of the Capitalize team, you&apos;re not just contributing to
                  meaningful work — you&apos;re part of a supportive, collaborative community that
                  truly has your back. We believe the best results come from working together,
                  leaving unnecessary competition at the door, and focusing on what matters: doing
                  great work as a team. Here, creativity and ambition are encouraged, ideas are
                  respected, and every voice matters.
                </p>
              </AnimateOnView>
            </div>

            {/* Right — benefit cards */}
            <div className="flex flex-col gap-5">
              {BENEFITS.map((b, i) => (
                <AnimateOnView key={b.title} delay={i * 0.07}>
                  <div className="flex gap-4 p-6 bg-paper-50 border border-paper-border rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                      <b.icon className="h-5 w-5 text-teal" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-1">{b.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{b.body}</p>
                    </div>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Values ───────────────────────────────────────────── */}
      <section className="bg-paper-50 section-py border-b border-paper-border">
        <div className="container-wide">
          <div className="mb-12 text-center">
            <AnimateOnView>
              <p className="section-label mb-4">Our Core Values</p>
            </AnimateOnView>
            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight">
                Our culture is grounded in 8 core values
              </h2>
            </AnimateOnView>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_VALUES.map((v, i) => (
              <AnimateOnView key={v.num} delay={i * 0.05}>
                <div className="bg-white border border-paper-border rounded-xl p-6 shadow-card h-full">
                  <span className="font-mono text-xs text-teal/50 tracking-widest block mb-3">
                    {v.num}
                  </span>
                  <p className="text-sm font-medium text-slate-800 leading-snug">{v.text}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Open Positions ────────────────────────────────────────── */}
      <section id="positions" className="bg-white section-py border-b border-paper-border">
        <div className="container-wide">
          <div className="mb-12">
            <AnimateOnView>
              <p className="section-label mb-4">Join Our Team</p>
            </AnimateOnView>
            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight">
                Current Openings
              </h2>
            </AnimateOnView>
            <AnimateOnView delay={0.08}>
              <p className="mt-3 text-slate-500 max-w-xl leading-relaxed">
                We&apos;re always looking for talented individuals. Complete an application and
                upload your resume to our Talent Pool to be considered for future openings!
              </p>
            </AnimateOnView>
          </div>

          <AnimateOnView delay={0.1}>
            <div className="border border-paper-border rounded-xl overflow-hidden">
              <div className="p-7 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal/10 text-teal border border-teal/20">
                        Open
                      </span>
                      <span className="text-xs text-slate-400">Remote · US &amp; Canada</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                      Talent Pool — General Application
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                      Don&apos;t see a specific role that fits? Submit your resume to our Talent
                      Pool and we&apos;ll keep your profile on file. When a role opens up that
                      matches your skills and experience, we&apos;ll be in touch. We&apos;re always
                      interested in meeting talented analytics, data, and AI professionals.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button
                      href="mailto:careers@capitalizeconsulting.com"
                      variant="primary"
                      size="md"
                      arrow
                      external
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-t border-paper-border px-7 sm:px-8 py-4 bg-paper-50 flex flex-wrap gap-4 text-xs text-slate-500">
                <span>Analytics &amp; Data</span>
                <span className="text-paper-border">·</span>
                <span>Process Automation</span>
                <span className="text-paper-border">·</span>
                <span>Business Intelligence</span>
                <span className="text-paper-border">·</span>
                <span>AI &amp; ML</span>
                <span className="text-paper-border">·</span>
                <span>Consulting</span>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <section className="section-py-sm relative overflow-hidden bg-[#110c1d]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container-wide relative z-10 text-center">
          <AnimateOnView>
            <h2 className="font-display text-display-md font-bold text-white mb-4">
              Didn&apos;t find a position you&apos;re looking for?
            </h2>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#A89EC4' }}>
              We&apos;re always interested in talking to talented people. Reach out to our team
              directly — we&apos;d love to hear from you.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" arrow>
                Contact Us
              </Button>
              <Button
                href="mailto:careers@capitalizeconsulting.com"
                variant="secondary"
                size="lg"
                external
              >
                Email Our Team
              </Button>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </>
  )
}
