import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Financial Planning & Analysis', description: 'Modernize FP&A with analytics and automation to improve forecasting, reporting, and data-driven decision-making.' }
export default function FPAPage() {
  return <PageShell section="Who We Help" title="Financial Planning & Analysis" description="Modernize FP&A with analytics and automation that improves forecast accuracy, accelerates reporting cycles, and drives confident decisions." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
