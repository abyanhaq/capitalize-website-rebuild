import type { Metadata } from 'next'
import { HeroSection }          from '@/components/sections/home/HeroSection'
import { TrustedBrandsSection } from '@/components/sections/home/TrustedBrandsSection'
import { StatsSection }         from '@/components/sections/home/StatsSection'
import { AboutSection }         from '@/components/sections/home/AboutSection'
import { ServicesSection }      from '@/components/sections/home/ServicesSection'
import { IndustriesSection }    from '@/components/sections/home/IndustriesSection'
import { InsightsSection }      from '@/components/sections/home/InsightsSection'
import { CtaSection }           from '@/components/sections/home/CtaSection'

export const metadata: Metadata = {
  title: 'Capitalize Analytics — AI & Data Consulting',
  description:
    'Capitalize is a specialist AI and data consulting firm. We bridge the gap between AI hype and measurable enterprise ROI — delivering analytics, automation, and data strategy that drives real business outcomes.',
  openGraph: {
    title: 'Capitalize Analytics — AI & Data Consulting',
    description:
      'Not a generalist IT shop. A specialist that makes AI real for enterprise businesses.',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBrandsSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <InsightsSection />
      <CtaSection />
    </>
  )
}
