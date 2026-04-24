import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Distribution Analytics', description: 'Distribution analytics consulting to improve data insights, streamline operations, and support smarter decisions with analytics and automation.' }
export default function DistributionPage() {
  return <PageShell section="Industries" title="Distribution Analytics" description="Improve operational visibility, streamline logistics data, and make smarter distribution decisions with analytics built for your industry." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
