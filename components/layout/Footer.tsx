import Link from 'next/link'
import { HOW_WE_HELP, FUNCTIONAL_AREAS, INDUSTRIES, PRODUCTS } from '@/lib/navigation'
import { MapPin, Phone, Clock } from 'lucide-react'

const OFFICES = [
  { city: 'Dallas', address: '3131 McKinney Ave, Suite 648F', state: 'TX 75204' },
  { city: 'Houston', address: '2101 CityWest Blvd, Suite 232', state: 'TX 77042' },
]

function FooterSection({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 font-sans text-[10px] font-medium uppercase tracking-widest text-teal opacity-60">{label}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-slate-500 hover:text-white transition-colors duration-150"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-navy-border bg-navy-950 mt-auto">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="relative h-8 w-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                  <rect width="32" height="32" rx="6" fill="#0891B2" fillOpacity="0.10" />
                  <path
                    d="M8 22L14 10L20 18L24 14"
                    stroke="#0891B2"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="24" cy="14" r="2" fill="#0891B2" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-bold tracking-tight text-white">Capitalize</span>
                <span className="font-sans text-[10px] tracking-widest text-teal uppercase font-medium opacity-70">Analytics</span>
              </div>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              We make AI real for enterprise businesses. Not a generalist IT shop — a specialist
              that bridges AI hype and actual ROI.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Phone className="h-3.5 w-3.5 text-teal flex-shrink-0" />
                <a href="tel:2145313904" className="hover:text-white transition-colors">
                  (214) 531-3904
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Clock className="h-3.5 w-3.5 text-teal flex-shrink-0" />
                <span>Mon – Fri, 8:00 AM – 6:00 PM CT</span>
              </div>
            </div>

            <div className="space-y-4">
              {OFFICES.map((office) => (
                <div key={office.city} className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-teal flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-500 leading-relaxed">
                    <span className="text-slate-300 font-medium">{office.city}</span>
                    <br />
                    {office.address}
                    <br />
                    {office.state}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterSection
              label="Services"
              items={HOW_WE_HELP.map((i) => ({ label: i.label, href: i.href }))}
            />
            <FooterSection
              label="Products"
              items={PRODUCTS.map((i) => ({ label: i.label, href: i.href }))}
            />
            <div className="space-y-8">
              <FooterSection
                label="Company"
                items={[
                  { label: 'Who We Are', href: '/who-we-are' },
                  { label: 'What We Do', href: '/what-we-do' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Webinars', href: '/webinar' },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="my-10 border-t border-navy-border/50" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Capitalize Analytics. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-600">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
