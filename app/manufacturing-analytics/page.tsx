import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Manufacturing Analytics', description: 'Manufacturing analytics consulting to improve data insights, streamline workflows, and enable smarter decisions with analytics and automation.' }
export default function ManufacturingPage() {
  return <PageShell section="Industries" title="Manufacturing Analytics" description="Improve production visibility, streamline operational workflows, and build the data foundation for smarter manufacturing decisions at every level." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
