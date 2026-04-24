import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'AI & Advanced Analytics',
  description: 'Turn AI and advanced analytics into ROI with ideation workshops, 45-day pilots, and governed data, ML, and automation strategies.',
}

export default function AIAndAdvancedAnalyticsPage() {
  return (
    <PageShell
      section="How We Help"
      title="AI & Advanced Analytics"
      description="Turn AI and advanced analytics into ROI with ideation workshops, 45-day pilots, and governed data, ML, and automation strategies."
      cta={{ label: 'Start a Pilot', href: '/contact' }}
    />
  )
}
