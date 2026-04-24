import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Oil & Gas Analytics Consulting', description: 'Consulting services that help oil & gas teams unlock analytics value, automate processes, and drive smarter decisions with data, AI, and operational insights.' }
export default function OilGasPage() {
  return <PageShell section="Industries" title="Oil & Gas Analytics" description="Unlock analytics value across upstream, midstream, and downstream operations — from automated gas balancing to production performance intelligence." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
