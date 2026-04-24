import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join a collaborative analytics consulting team dedicated to excellence, innovation, and client impact.',
}

export default function CareersPage() {
  return (
    <PageShell
      section="Careers"
      title="Build What's Next"
      description="Join a team of specialists solving hard data problems for enterprise clients. Rewarding work, strong culture, and a clear growth path."
      cta={{ label: 'View Open Roles', href: '/careers' }}
    />
  )
}
