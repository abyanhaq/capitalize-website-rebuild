import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'HR & Workforce Analytics', description: 'HR & workforce analytics consulting to improve people insights, strengthen workforce planning, and drive data-informed decisions.' }
export default function HRWorkforcePage() {
  return <PageShell section="Who We Help" title="HR & Workforce Analytics" description="Improve people insights, strengthen workforce planning, and enable HR teams to make data-informed decisions about talent, retention, and performance." cta={{ label: 'Talk to an Expert', href: '/contact' }} />
}
