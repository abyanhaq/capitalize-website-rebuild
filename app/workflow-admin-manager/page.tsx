import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Workflow Admin Manager (WAM)',
  description: 'Centralized Alteryx workflow orchestration, scheduling, and administration — built for enterprise analytics operations teams.',
}

export default function WAMPage() {
  return (
    <PageShell
      section="Products"
      title="Workflow Admin Manager"
      description="Centralized Alteryx workflow orchestration, scheduling, and administration — built for enterprise analytics operations teams."
      cta={{ label: 'Request a Demo', href: '/contact' }}
    />
  )
}
