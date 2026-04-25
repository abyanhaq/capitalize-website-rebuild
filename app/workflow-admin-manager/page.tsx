import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Workflow Admin Manager (WAM) | Capitalize Analytics',
  description: 'WAM gives Alteryx administrators and teams the governance, audit, scheduling, and version control capabilities they need to operate Alteryx at enterprise scale.',
}

const features = [
  { title: 'Workflow Audit Reports', desc: 'Automatically generate detailed audit reports for any Alteryx workflow — identifying performance issues, tool usage, and optimization opportunities.' },
  { title: 'Change Control & Versioning', desc: 'Track every change to your workflows with Git-like commit history, so you always know what changed, when, and why.' },
  { title: 'Automated Backups', desc: 'Configure WAM to automatically back up workflows on every audit run — with timestamp-linked archives that align to your audit history.' },
  { title: 'WAM Scheduler', desc: 'View and manage all Alteryx Gallery schedules in a unified calendar. Drag-and-drop rescheduling and maintenance window management included.' },
  { title: 'WAM Orchestration', desc: 'Chain workflows together based on events and conditions — enabling complex, multi-step automation pipelines without manual coordination.' },
  { title: 'Mass Update & Gallery Management', desc: 'Push bulk updates, credential changes, and workflow configurations across your entire Alteryx Server environment from a single interface.' },
]

const useCases = [
  { title: 'External Audit Readiness', desc: 'Provide auditors (KPMG, Deloitte, PwC) with complete workflow documentation, change logs, and audit trails — without manual preparation.' },
  { title: 'IT & Server Administration', desc: 'Give IT teams the visibility and control they need to manage Alteryx Server schedules, maintenance windows, and resource allocation.' },
  { title: 'Analytics Governance', desc: 'Establish version-controlled, auditable analytics processes that meet internal governance requirements and external compliance standards.' },
]

export default function WAMPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[50vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide py-16 relative z-10">
          <AnimateOnView>
            <span className="section-label">Products — Alteryx Governance</span>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mt-4 mb-6 max-w-3xl">Workflow Admin Manager</h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#A89EC4' }}>WAM gives Alteryx administrators and analytics teams the governance, audit, scheduling, and version control capabilities needed to operate Alteryx at enterprise scale — with full auditability and control.</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>Request a Demo</Button>
              <Button href="/process-automation" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">Explore Automation Services</Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <AnimateOnView>
            <span className="section-label">What It Does</span>
            <h2 className="font-display text-display-lg font-bold text-slate-900 mt-4 mb-12">Enterprise-Grade Governance for Alteryx</h2>
          </AnimateOnView>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <StaggerItem key={f.title} className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-paper-50 section-py-sm">
        <div className="container-wide">
          <AnimateOnView>
            <span className="section-label">Who It&apos;s For</span>
            <h2 className="font-display text-display-md font-bold text-slate-900 mt-4 mb-10">Built for the Teams Who Run Alteryx</h2>
          </AnimateOnView>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <StaggerItem key={uc.title} className="bg-white rounded-xl p-6 border border-paper-border shadow-card">
                <div className="h-px w-8 bg-teal/40 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{uc.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#110c1d] section-py-sm relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide text-center relative z-10">
          <AnimateOnView>
            <span className="section-label">Get Started</span>
            <h3 className="font-display text-display-md font-bold text-white mt-4 mb-4">See WAM in Action</h3>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#A89EC4' }}>Schedule a demo with our team to see how WAM can improve governance and administration across your Alteryx environment.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>Request a Demo</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">Contact Us</Button>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </main>
  )
}
