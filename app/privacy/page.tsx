import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Privacy Policy' }
export default function PrivacyPage() {
  return <PageShell section="Legal" title="Privacy Policy" description="How Capitalize Analytics collects, uses, and protects your information." />
}
