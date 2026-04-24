import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Government Analytics Consulting', description: 'Government analytics consulting to improve data use, streamline reporting, and drive smarter decisions with analytics and automation.' }
export default function GovernmentPage() {
  return <PageShell section="Industries" title="Government Analytics" description="Improve public-sector data use, streamline interagency reporting, and build the analytics capabilities that drive accountable, evidence-based governance." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
