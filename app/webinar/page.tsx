import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Webinars', description: 'On-demand and upcoming webinars on AI, analytics, and automation from the Capitalize Analytics team.' }
export default function WebinarPage() {
  return <PageShell section="Insights" title="Webinars" description="On-demand and upcoming webinars on AI, analytics automation, and enterprise data strategy." cta={{ label: 'Read the Blog', href: '/blog' }} />
}
