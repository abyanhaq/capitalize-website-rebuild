import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Managed Services',
  description: 'Ongoing analytics operations, platform management, and continuous improvement — without the overhead of building in-house.',
}

export default function ManagedServicesPage() {
  return (
    <PageShell
      section="How We Help"
      title="Managed Services"
      description="Ongoing analytics operations, platform management, and continuous improvement — without the overhead of building in-house."
      cta={{ label: 'Explore Managed Services', href: '/contact' }}
    />
  )
}
