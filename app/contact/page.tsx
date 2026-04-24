import type { Metadata } from 'next'
import { PageShell } from '@/components/layout/PageShell'
export const metadata: Metadata = { title: 'Contact', description: 'Get in touch with the Capitalize Analytics team to discuss your data and AI challenges.' }
export default function ContactPage() {
  return <PageShell section="Contact" title="Let's Talk" description="Ready to turn your data into a competitive advantage? Tell us about your challenge — we'll respond within one business day." />
}
