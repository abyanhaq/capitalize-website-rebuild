import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Watchtower',
  description: 'Watchtower strengthens analytics governance with automated monitoring, alerting, and insights to help teams ensure data quality and reliability.',
}

export default function WatchtowerPage() {
  return (
    <PageShell
      section="Products"
      title="Watchtower"
      description="Automated analytics governance — monitor data quality, catch failures before they reach stakeholders, and build trust in your analytics stack."
      cta={{ label: 'See Watchtower in Action', href: '/contact' }}
    />
  )
}
