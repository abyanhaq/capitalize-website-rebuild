import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://capitalizeconsulting.com'),
  title: {
    default: 'Capitalize Analytics — AI & Data Consulting',
    template: '%s | Capitalize Analytics',
  },
  description:
    'Capitalize is a data and analytics consulting firm delivering automation and AI solutions that enable smarter decisions and scalable business impact.',
  keywords: [
    'AI consulting',
    'data analytics consulting',
    'business intelligence',
    'data engineering',
    'process automation',
    'enterprise AI',
    'Dallas consulting',
    'Houston consulting',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://capitalizeconsulting.com',
    siteName: 'Capitalize Analytics',
    title: 'Capitalize Analytics — AI & Data Consulting',
    description:
      'Capitalize is a data and analytics consulting firm delivering automation and AI solutions that enable smarter decisions and scalable business impact.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capitalize Analytics — AI & Data Consulting',
    description:
      'Capitalize is a data and analytics consulting firm delivering automation and AI solutions that enable smarter decisions and scalable business impact.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
