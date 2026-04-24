import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Training',
  description: 'Expert-led training to help teams build skills in analytics, automation, and AI — designed to drive adoption, confidence, and real outcomes.',
}

export default function TrainingPage() {
  return (
    <PageShell
      section="How We Help"
      title="Training"
      description="Expert-led training to help teams build lasting skills in analytics, automation, and AI — designed to drive adoption, confidence, and real outcomes."
      cta={{ label: 'View Training Programs', href: '/contact' }}
    />
  )
}
