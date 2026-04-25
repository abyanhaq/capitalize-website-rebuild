import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Capitalize Analytics',
  description: 'Get in touch with Capitalize Analytics. Reach our AI and data consulting team in Dallas and Houston, Texas — (214) 531-3904.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
