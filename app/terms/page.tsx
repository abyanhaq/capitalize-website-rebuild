import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Terms of Use' }
export default function TermsPage() {
  return <PageShell section="Legal" title="Terms of Use" description="Terms and conditions governing your use of the Capitalize Analytics website and services." />
}
