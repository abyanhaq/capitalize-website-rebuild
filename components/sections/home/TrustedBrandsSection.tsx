'use client'

import { motion } from 'framer-motion'
import { AnimateOnView } from '@/components/ui/AnimateOnView'

const BASE = 'https://capitalizeconsulting.com/wp-content/uploads'

// All 16 client logos from the live site
const CLIENT_BRANDS = [
  { name: 'Kearney',                src: `${BASE}/2024/05/kearney.png` },
  { name: 'Frontier Airlines',      src: `${BASE}/2024/05/frontier-airlines.png` },
  { name: 'Sysco',                  src: `${BASE}/2024/05/sysco.png` },
  { name: 'Kaiser Permanente',      src: `${BASE}/2024/05/kaiser-permanente.png` },
  { name: 'Splunk',                 src: `${BASE}/2025/12/Transparent-Splunk-logo-1.png` },
  { name: 'Sweetgreen',             src: `${BASE}/2024/05/sweetgreen.png` },
  { name: 'Riveron',                src: `${BASE}/2024/05/riveron.png` },
  { name: 'Fujitsu',                src: `${BASE}/2024/05/fujitsu.png` },
  { name: 'F&G',                    src: `${BASE}/2024/05/fg.png` },
  { name: 'Tupperware',             src: `${BASE}/2024/05/tupperware.png` },
  { name: 'Cincinnati Public Schools', src: `${BASE}/2024/05/cincinnati-public-schools.png` },
  { name: 'Kinetik',                src: `${BASE}/2024/05/kinetik.png` },
  { name: 'Angelo Gordon & Co',     src: `${BASE}/2024/05/angelo-gordon-co.png` },
  { name: 'Xavier University',      src: `${BASE}/2024/05/xavier-university.png` },
  { name: 'JetLinx',               src: `${BASE}/2024/05/jetlinx.png` },
  { name: 'Texas Tech',             src: `${BASE}/2024/05/texas-tech.png` },
]

// Technology platforms — separate section, separate meaning
const TECH_PLATFORMS = [
  { name: 'Alteryx',     src: `${BASE}/2024/05/alteryx.png` },
  { name: 'Tableau',     src: `${BASE}/2025/11/Tableau-Logo.png` },
  { name: 'Power BI',    src: `${BASE}/2024/05/power-bi.png` },
  { name: 'Snowflake',   src: `${BASE}/2024/05/snowflake.png` },
  { name: 'Databricks',  src: `${BASE}/2025/10/png-transparent-databricks-logo-tech-companies.png` },
  { name: 'Workday',     src: `${BASE}/2025/12/Workday-Logo-Website-Reel.png` },
  { name: 'UiPath',      src: `${BASE}/2025/12/UiPath-Logo-Updated-Website-Reel.png` },
  { name: 'SAP',         src: `${BASE}/2025/12/Transparent-SAP-logo-165x60-1.png` },
  { name: 'IBM Cognos',  src: `${BASE}/2024/05/IBM-cognos.png` },
  { name: 'BlackLine',   src: `${BASE}/2024/08/blackline.png` },
  { name: 'OpenAI',      src: `${BASE}/2025/10/Openai-logo-web.png` },
  { name: 'Claude AI',   src: `${BASE}/2025/10/claude-ai-logo-d862-web.png` },
  { name: 'Gemini',      src: `${BASE}/2025/12/Transparent-Gemini-logo-165x60-1.png` },
  { name: 'Perplexity',  src: `${BASE}/2025/10/Perpelxity-logo.webp` },
  { name: 'n8n',         src: `${BASE}/2025/11/n8n-1024x289-web.png` },
]

function LogoMarquee({
  items,
  speed = 30,
  direction = 'left',
}: {
  items: { name: string; src: string }[]
  speed?: number
  direction?: 'left' | 'right'
}) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-navy-800 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-navy-800 to-transparent pointer-events-none" />
      <motion.div
        className="flex gap-10 items-center"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        style={{ width: 'max-content' }}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex-shrink-0 h-9 flex items-center opacity-50 hover:opacity-90 transition-opacity duration-300 brightness-0 invert"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brand.src}
              alt={brand.name}
              className="h-7 w-auto object-contain max-w-[110px]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function TrustedBrandsSection() {
  return (
    <section className="py-16 bg-navy-800 border-y border-navy-border space-y-10">
      {/* Client brands */}
      <div>
        <div className="container-wide mb-6">
          <AnimateOnView direction="none">
            <p className="text-center data-label">Trusted By</p>
          </AnimateOnView>
        </div>
        <LogoMarquee items={CLIENT_BRANDS} speed={36} direction="left" />
      </div>

      {/* Divider */}
      <div className="divider-teal mx-auto max-w-sm" />

      {/* Technology platforms */}
      <div>
        <div className="container-wide mb-6">
          <AnimateOnView direction="none">
            <p className="text-center data-label">Our Technology Platforms</p>
          </AnimateOnView>
        </div>
        <LogoMarquee items={TECH_PLATFORMS} speed={28} direction="right" />
      </div>
    </section>
  )
}
