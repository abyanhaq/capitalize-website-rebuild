import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'iGB — Intelligent Gas Balancing',
  description: 'Purpose-built analytics for oil & gas operations — automated gas balancing, imbalance tracking, and operational intelligence.',
}

export default function IGBPage() {
  return (
    <PageShell
      section="Products"
      title="Intelligent Gas Balancing"
      description="Purpose-built analytics for oil & gas operations — automated gas balancing, imbalance tracking, and operational intelligence at scale."
      cta={{ label: 'Request a Demo', href: '/contact' }}
    />
  )
}
