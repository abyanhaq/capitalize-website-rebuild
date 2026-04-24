import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Data Engineering & Integration',
  description: 'Data engineering and integration consulting to unify data systems, improve pipelines, and enable analytics-ready data across your organization.',
}

export default function DataEngineeringPage() {
  return (
    <PageShell
      section="How We Help"
      title="Data Engineering & Integration"
      description="Unify your data systems, modernize pipelines, and build analytics-ready infrastructure that your entire organization can rely on."
      cta={{ label: 'Assess Your Data Stack', href: '/contact' }}
    />
  )
}
