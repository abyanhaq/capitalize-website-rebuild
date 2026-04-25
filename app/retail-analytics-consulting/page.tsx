import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Retail Analytics Consulting', description: 'Capitalize helps retailers turn transaction, inventory, and customer data into competitive advantage — with automated reporting, demand forecasting, and real-time performance visibility across channels.' }
export default function RetailPage() {
  return <PageShell section="Retail" title="Retail Analytics Consulting" description="Capitalize helps retailers turn transaction, inventory, and customer data into competitive advantage — with automated reporting, demand forecasting, and real-time performance visibility across channels." cta={{ label: 'Talk to a Retail Expert', href: '/contact' }} />
}
