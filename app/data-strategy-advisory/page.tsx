import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Data Strategy & Advisory',
  description: 'Build a data strategy that aligns with your business goals — from governance frameworks to enterprise data maturity roadmaps.',
}

export default function DataStrategyPage() {
  return (
    <PageShell
      section="How We Help"
      title="Data Strategy & Advisory"
      description="Build a data strategy that aligns with your business goals — from governance frameworks to enterprise data maturity roadmaps."
      cta={{ label: 'Book a Strategy Session', href: '/contact' }}
    />
  )
}
