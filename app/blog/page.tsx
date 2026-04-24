import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Blog', description: 'Insights on AI, data analytics, automation, and enterprise data strategy from the Capitalize Analytics team.' }
export default function BlogPage() {
  return <PageShell section="Insights" title="Blog" description="Perspectives on AI, data analytics, and enterprise data strategy from the Capitalize Analytics team." cta={{ label: 'View Webinars', href: '/webinar' }} />
}
