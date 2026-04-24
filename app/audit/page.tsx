import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Audit Analytics', description: 'Audit consulting services to strengthen governance, improve reporting accuracy, and deliver trusted insights through rigorous analytics.' }
export default function AuditPage() {
  return <PageShell section="Who We Help" title="Audit Analytics" description="Strengthen governance, improve reporting accuracy, and deliver trusted insights through rigorous analytics and automated audit processes." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
