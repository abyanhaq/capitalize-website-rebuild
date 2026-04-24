import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Hospitality Analytics Consulting', description: 'Hospitality analytics consulting to help brands improve data insights, streamline reporting, and drive smarter decisions with analytics and automation.' }
export default function HospitalityPage() {
  return <PageShell section="Industries" title="Hospitality Analytics" description="Help hospitality brands improve guest insights, streamline operational reporting, and make data-driven decisions that improve revenue and experience." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
