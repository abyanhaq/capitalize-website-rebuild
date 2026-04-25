import type { Metadata } from 'next'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Who We Are — Capitalize Analytics',
  description:
    'Meet the team behind Capitalize Analytics — a specialist AI and data consulting firm with decades of experience delivering high-impact analytics solutions.',
}

const STATS = [
  { value: '$10M+', label: 'Operational Savings Delivered' },
  { value: '50K+',  label: 'Hours Saved for Clients' },
  { value: '95%',   label: 'Client Retention Rate' },
  { value: '20+',   label: 'Years of Experience' },
]

const DIFFERENTIATORS = [
  {
    title: 'Deep Technical Expertise',
    body: 'Our consultants bring hands-on experience with best-in-class platforms — Alteryx, Snowflake, Tableau, PowerBI, UiPath, Workday Adaptive Planning, and more.',
  },
  {
    title: 'End-to-End Delivery',
    body: "We don't hand off a blueprint and walk away. We stay engaged from strategy through implementation, training, and adoption — ensuring real results.",
  },
  {
    title: 'Practical, Usable Solutions',
    body: 'Many of our experts have lived in the shoes of our clients. We build solutions that fit naturally into how your teams actually work.',
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

const TEAM = [
  { name: 'Brian Zahn',         title: 'Managing Partner' },
  { name: 'Josh Milstein',      title: 'Managing Partner' },
  { name: 'Cheryl Nealon',      title: 'EVP, Strategy & Partnerships' },
  { name: 'John Lambie',        title: 'VP, Project Success' },
  { name: 'Brian Clawson',      title: 'VP, Client Excellence' },
  { name: 'Christina McLuckie', title: 'Director, Strategic Advisory' },
  { name: 'Kevin Carrell',      title: 'Director, Business Development' },
  { name: 'Hallye Shrum',       title: 'Director, Accounting & Internal Operations' },
  { name: 'David Houck',        title: 'Director, Energy' },
  { name: 'Jessica Thomas',     title: 'Director, Office of Finance Transformation' },
  { name: 'Christopher McKay',  title: 'Director, BI & Automation' },
]

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export default function WhoWeArePage() {
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
              Who We Are
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <h1 className="font-display text-display-xl font-bold text-white leading-[1.06] mb-6 max-w-3xl">
              Implementing individualized analytics solutions to deliver high-impact results
            </h1>
          </AnimateOnView>
          <AnimateOnView delay={0.12}>
            <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: '#A89EC4' }}>
              We help organizations implement software, automate processes, and analyze data. Our
              remote team spans across the US and Canada and brings decades of experience to every
              project as they work with best-in-class technology like Alteryx, UiPath, Workday
              Adaptive Planning, Snowflake, Tableau, PowerBI, and many others.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.17}>
            <Button href="/contact" variant="primary" size="lg" arrow>
              Get in Touch
            </Button>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── Stats ─────────────────────────────────────────────────── */}
      <section className="bg-white section-py-sm border-b border-paper-border">
        <div className="container-wide">
          <AnimateOnView>
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-paper-border">
              {STATS.map((s, i) => (
                <div key={s.label} className="px-8 py-4 text-center first:pl-0 last:pr-0">
                  <p
                    className={`font-display text-display-sm font-bold mb-1 ${
                      i === 0 ? 'text-teal' : 'text-slate-900'
                    }`}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-500 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── About / Mission ───────────────────────────────────────── */}
      <section className="bg-white section-py border-b border-paper-border">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <AnimateOnView>
                <p className="section-label mb-5">Our Mission</p>
              </AnimateOnView>
              <AnimateOnView delay={0.05}>
                <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight mb-6">
                  Our dedication lies in establishing a partnership
                </h2>
              </AnimateOnView>
              <AnimateOnView delay={0.1}>
                <p className="text-slate-600 leading-relaxed text-base">
                  Many of our experts have lived in the shoes of our clients, experiencing the
                  day-to-day frustrations of lengthy and time-consuming processes. We&apos;re
                  invested in discovering customized solutions to meet the unique needs of each of
                  our clients.
                </p>
              </AnimateOnView>
            </div>

            {/* Right — differentiators */}
            <div className="flex flex-col gap-6">
              {DIFFERENTIATORS.map((d, i) => (
                <AnimateOnView key={d.title} delay={i * 0.07}>
                  <div className="pl-5 border-l-2 border-teal">
                    <h3 className="font-display text-base font-semibold text-slate-900 mb-2">
                      {d.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{d.body}</p>
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

      {/* ─── Team ──────────────────────────────────────────────────── */}
      <section className="bg-white section-py border-b border-paper-border">
        <div className="container-wide">
          <div className="mb-12">
            <AnimateOnView>
              <p className="section-label mb-4">Meet The Team</p>
            </AnimateOnView>
            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-slate-900 leading-tight">
                Our Leadership
              </h2>
            </AnimateOnView>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {TEAM.map((member, i) => (
              <AnimateOnView key={member.name} delay={i * 0.04}>
                <div className="flex items-center gap-4 bg-paper-50 border border-paper-border rounded-xl p-5">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #0E41B8, #0E7490)' }}
                  >
                    {getInitials(member.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 leading-snug">{member.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">{member.title}</p>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
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
              Interested to learn more?
            </h2>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#A89EC4' }}>
              Reach out to our team and discover how Capitalize Analytics can help your organization
              unlock the full value of your data.
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.1}>
            <Button href="/contact" variant="primary" size="lg" arrow>
              Contact Us
            </Button>
          </AnimateOnView>
        </div>
      </section>
    </>
  )
}
