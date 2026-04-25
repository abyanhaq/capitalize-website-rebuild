import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Hospitality Analytics Consulting', description: 'Capitalize helps hospitality and restaurant organizations automate reporting, unify revenue and operational data, and build analytics that drive better guest experiences and margin performance.' }
export default function HospitalityPage() {
  return <PageShell section="Hospitality" title="Hospitality Analytics Consulting" description="Capitalize helps hospitality and restaurant organizations automate reporting, unify revenue and operational data, and build analytics that drive better guest experiences and margin performance." cta={{ label: 'Talk to a Hospitality Expert', href: '/contact' }} />
}
