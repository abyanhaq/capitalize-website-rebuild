import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'What We Do',
  description: 'Learn how we help organizations turn data into smarter decisions with analytics, automation, and integration that drive real, measurable business impact.',
}

export default function WhatWeDoPage() {
  return (
    <PageShell
      section="Services"
      title="What We Do"
      description="From AI strategy to data pipelines to business intelligence — we deliver end-to-end analytics capabilities that produce measurable ROI."
      cta={{ label: 'Explore Services', href: '/ai-and-advanced-analytics' }}
    />
  )
}
