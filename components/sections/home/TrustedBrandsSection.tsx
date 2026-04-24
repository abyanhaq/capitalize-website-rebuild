'use client'

import { AnimateOnView } from '@/components/ui/AnimateOnView'

const BASE = 'https://capitalizeconsulting.com/wp-content/uploads'

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

export function TrustedBrandsSection() {
  return (
    <section className="border-y border-navy-border bg-navy-800 py-12">
      <div className="container-wide">
        <AnimateOnView direction="none">
          <p className="text-xs text-slate-500 tracking-widest uppercase text-center mb-8">Trusted by 1,000+ Organizations</p>
        </AnimateOnView>

        <AnimateOnView direction="none" delay={0.1}>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-x-8 gap-y-6 items-center justify-items-center">
            {CLIENT_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="h-8 flex items-center justify-center opacity-65 hover:opacity-85 transition-opacity duration-200 brightness-0 invert"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-6 w-auto object-contain max-w-[90px]"
                />
              </div>
            ))}
          </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
