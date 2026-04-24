import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Sales & Marketing Analytics Consulting', description: 'Sales & marketing analytics consulting to improve data insights, strengthen performance measurement, and drive smarter, data-informed decisions.' }
export default function SalesMarketingPage() {
  return <PageShell section="Who We Help" title="Sales & Marketing Analytics" description="Improve pipeline visibility, marketing attribution, and performance measurement — so revenue teams make decisions backed by data, not instinct." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
