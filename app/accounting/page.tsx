import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Accounting Analytics', description: 'Analytics consulting for accounting teams to optimize close processes, reduce manual work, and unlock actionable financial insights.' }
export default function AccountingPage() {
  return <PageShell section="Who We Help" title="Accounting Analytics" description="Optimize the financial close, eliminate manual reconciliation, and surface insights your accounting teams can act on — faster." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
