import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Business Intelligence',
  description: 'Business intelligence consulting to turn data into insight, strengthen reporting, and support smarter, data-driven decisions across your organization.',
}

export default function BusinessIntelligencePage() {
  return (
    <PageShell
      section="How We Help"
      title="Business Intelligence"
      description="Business intelligence consulting to turn data into insight, strengthen reporting, and support smarter, data-driven decisions across your organization."
      cta={{ label: 'Get a BI Assessment', href: '/contact' }}
    />
  )
}
