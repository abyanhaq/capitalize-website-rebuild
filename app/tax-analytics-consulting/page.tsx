import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Tax Analytics Consulting', description: 'Tax analytics consulting to improve tax data insights, streamline reporting, and support smarter decision-making with analytics and automation.' }
export default function TaxAnalyticsPage() {
  return <PageShell section="Who We Help" title="Tax Analytics" description="Improve tax data insights, streamline compliance reporting, and enable smarter decision-making with analytics and automation purpose-built for tax teams." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
