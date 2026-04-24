import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Who We Are',
  description: 'Meet the team of specialists who bridge AI strategy and real business outcomes.',
}

export default function WhoWeArePage() {
  return (
    <PageShell
      section="About"
      title="Who We Are"
      description="A specialist analytics and AI consulting firm built to turn complex data challenges into clear, scalable business outcomes."
      cta={{ label: 'See Our Work', href: '/what-we-do' }}
    />
  )
}
