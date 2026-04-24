import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Supply Chain Analytics', description: 'Expert supply chain analytics services that strengthen forecasts, enhance workflows, and unlock actionable insights for better performance.' }
export default function SupplyChainPage() {
  return <PageShell section="Who We Help" title="Supply Chain Analytics" description="Strengthen demand forecasting, enhance operational workflows, and surface supply chain insights that reduce risk and improve performance." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
