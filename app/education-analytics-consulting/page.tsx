import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Education Analytics Consulting', description: 'Education analytics consulting to help institutions improve insight, streamline reporting, and make data-driven decisions with analytics and automation.' }
export default function EducationPage() {
  return <PageShell section="Industries" title="Education Analytics" description="Help education institutions improve student outcome insights, streamline administrative reporting, and make data-driven decisions at the institutional level." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
