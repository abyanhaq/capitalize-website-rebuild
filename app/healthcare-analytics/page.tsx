import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Healthcare Analytics Consulting', description: 'Capitalize helps healthcare organizations improve clinical, operational, and financial analytics — delivering trusted data, automated reporting, and AI-driven insights that improve patient outcomes and operational efficiency.' }
export default function HealthcarePage() {
  return <PageShell section="Healthcare" title="Healthcare Analytics Consulting" description="Capitalize helps healthcare organizations improve clinical, operational, and financial analytics — delivering trusted data, automated reporting, and AI-driven insights that improve patient outcomes and operational efficiency." cta={{ label: 'Talk to a Healthcare Expert', href: '/contact' }} />
}
