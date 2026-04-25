import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Education Analytics Consulting', description: 'Capitalize helps educational institutions automate data reporting, improve student outcome visibility, and build analytics solutions that support better decisions across academics, operations, and finance.' }
export default function EducationPage() {
  return <PageShell section="Education" title="Education Analytics Consulting" description="Capitalize helps educational institutions automate data reporting, improve student outcome visibility, and build analytics solutions that support better decisions across academics, operations, and finance." cta={{ label: 'Talk to an Education Expert', href: '/contact' }} />
}
