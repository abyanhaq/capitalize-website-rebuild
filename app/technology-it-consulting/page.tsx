import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Technology (IT) Analytics Consulting', description: 'IT analytics consulting to strengthen data strategy, streamline reporting, and enable smarter decisions with analytics, automation, and governance.' }
export default function TechnologyITPage() {
  return <PageShell section="Who We Help" title="Technology & IT Analytics" description="Strengthen your data strategy, streamline IT reporting, and build analytics and governance capabilities that scale with your organization." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
