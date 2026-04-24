import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Process Automation',
  description: 'Process automation consulting to streamline workflows, reduce manual effort, and accelerate business outcomes.',
}

export default function ProcessAutomationPage() {
  return (
    <PageShell
      section="How We Help"
      title="Process Automation"
      description="Eliminate manual work, accelerate reporting cycles, and free your teams to focus on decisions — not data wrangling."
      cta={{ label: 'Find Automation Opportunities', href: '/contact' }}
    />
  )
}
