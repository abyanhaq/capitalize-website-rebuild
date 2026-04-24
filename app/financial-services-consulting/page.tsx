import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Financial Services Analytics', description: 'Financial services consulting to strengthen data analytics, streamline reporting, and drive smarter decisions across finance, risk, and operations.' }
export default function FinancialServicesPage() {
  return <PageShell section="Industries" title="Financial Services" description="Strengthen data analytics across finance, risk, and operations — from regulatory reporting to real-time decisioning infrastructure." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
