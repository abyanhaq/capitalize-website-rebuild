import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Retail Analytics Consulting', description: 'Retail analytics consulting to help brands improve data insights, streamline reporting, and drive smarter decisions with analytics and automation.' }
export default function RetailPage() {
  return <PageShell section="Industries" title="Retail Analytics" description="Help retail brands unify customer, inventory, and sales data to improve margins, optimize assortments, and drive smarter decisions at scale." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
