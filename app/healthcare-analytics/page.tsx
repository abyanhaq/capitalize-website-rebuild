import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Healthcare Analytics', description: 'Healthcare analytics consulting to improve data insights, streamline reporting, and drive smarter decisions with analytics and automation.' }
export default function HealthcarePage() {
  return <PageShell section="Industries" title="Healthcare Analytics" description="Improve clinical and operational data insights, streamline compliance reporting, and drive smarter decisions across your healthcare organization." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
