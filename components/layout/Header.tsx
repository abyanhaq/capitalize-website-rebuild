'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import {
  HOW_WE_HELP,
  FUNCTIONAL_AREAS,
  INDUSTRIES,
  PRODUCTS,
  INSIGHTS,
  type NavItem,
} from '@/lib/navigation'

type MegaMenuId = 'how-we-help' | 'who-we-help' | 'insights' | 'products' | null

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
      {/* Mark */}
      <div className="relative h-8 w-8">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <rect width="32" height="32" rx="6" fill="#00C8E8" fillOpacity="0.12" />
          <path
            d="M8 22L14 10L20 18L24 14"
            stroke="#00C8E8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="14" r="2" fill="#00C8E8" />
        </svg>
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-tight text-white group-hover:text-teal transition-colors duration-200">
          Capitalize
        </span>
        <span className="font-mono text-[10px] tracking-widest text-teal uppercase opacity-80">
          Analytics
        </span>
      </div>
    </Link>
  )
}

// ─── Mega Menu Panel ──────────────────────────────────────────────────────────
type MegaMenuProps = {
  id: MegaMenuId
  onClose: () => void
}

function MegaMenuPanel({ id, onClose }: MegaMenuProps) {
  if (!id) return null

  const panels: Record<Exclude<MegaMenuId, null>, React.ReactNode> = {
    'how-we-help': (
      <div className="grid grid-cols-3 gap-1">
        {HOW_WE_HELP.map((item) => (
          <MegaMenuLink key={item.href} item={item} onClose={onClose} showDesc />
        ))}
      </div>
    ),
    'who-we-help': (
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-teal opacity-70">
            By Function
          </p>
          <div className="flex flex-col gap-0.5">
            {FUNCTIONAL_AREAS.map((item) => (
              <MegaMenuLink key={item.href} item={item} onClose={onClose} compact />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-teal opacity-70">
            By Industry
          </p>
          <div className="flex flex-col gap-0.5">
            {INDUSTRIES.map((item) => (
              <MegaMenuLink key={item.href} item={item} onClose={onClose} compact />
            ))}
          </div>
        </div>
      </div>
    ),
    'insights': (
      <div className="grid grid-cols-2 gap-1">
        {INSIGHTS.map((item) => (
          <MegaMenuLink key={item.href} item={item} onClose={onClose} showDesc />
        ))}
      </div>
    ),
    'products': (
      <div className="grid grid-cols-3 gap-1">
        {PRODUCTS.map((item) => (
          <MegaMenuLink key={item.href} item={item} onClose={onClose} showDesc />
        ))}
      </div>
    ),
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-0 right-0 z-50"
    >
      {/* Separator line */}
      <div className="divider-teal" />
      <div className="glass border-t-0 rounded-b-xl px-8 py-6 shadow-2xl">
        {panels[id]}
      </div>
    </motion.div>
  )
}

type MegaMenuLinkProps = {
  item: NavItem
  onClose: () => void
  showDesc?: boolean
  compact?: boolean
}

function MegaMenuLink({ item, onClose, showDesc, compact }: MegaMenuLinkProps) {
  if (compact) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="group flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-slate-300 transition-all duration-150 hover:bg-navy-700 hover:text-white"
      >
        <ArrowRight className="h-3 w-3 text-teal opacity-0 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0.5" />
        {item.label}
      </Link>
    )
  }

  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="group flex flex-col gap-1 rounded-lg p-3 transition-all duration-150 hover:bg-navy-700"
    >
      <span className="text-sm font-medium text-white group-hover:text-teal transition-colors duration-150">
        {item.label}
      </span>
      {showDesc && item.description && (
        <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-150 leading-relaxed">
          {item.description}
        </span>
      )}
    </Link>
  )
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-navy-900 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-navy-border">
            <Logo />
            <button
              onClick={onClose}
              className="rounded-md p-2 text-slate-400 hover:text-white hover:bg-navy-700 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav sections */}
          <div className="flex-1 px-6 py-6 space-y-8">
            <MobileSection label="How We Help" items={HOW_WE_HELP} onClose={onClose} />
            <MobileSection label="By Function" items={FUNCTIONAL_AREAS} onClose={onClose} />
            <MobileSection label="By Industry" items={INDUSTRIES} onClose={onClose} />
            <MobileSection label="Products" items={PRODUCTS} onClose={onClose} />
            <MobileSection label="Insights" items={INSIGHTS} onClose={onClose} />

            <div className="space-y-2 border-t border-navy-border pt-6">
              {[
                { label: 'Who We Are', href: '/who-we-are' },
                { label: 'What We Do', href: '/what-we-do' },
                { label: 'Careers', href: '/careers' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="px-6 py-6 border-t border-navy-border">
            <Button href="/contact" variant="primary" size="lg" arrow className="w-full justify-center">
              Get in Touch
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobileSection({ label, items, onClose }: { label: string; items: NavItem[]; onClose: () => void }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-teal opacity-60">{label}</p>
      <div className="flex flex-col gap-0.5">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────
type TriggerItem = {
  label: string
  menuId: MegaMenuId
}

const TRIGGERS: TriggerItem[] = [
  { label: 'How We Help', menuId: 'how-we-help' },
  { label: 'Who We Help', menuId: 'who-we-help' },
  { label: 'Insights', menuId: 'insights' },
  { label: 'Products', menuId: 'products' },
]

export function Header() {
  const [activeMenu, setActiveMenu] = useState<MegaMenuId>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null)
    setMobileOpen(false)
  }, [pathname])

  // Scroll shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Escape key
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setActiveMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          scrolled
            ? 'glass border-b border-navy-border shadow-lg'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="container-wide">
          <div className="flex h-16 items-center gap-6">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1 flex-1">
              {TRIGGERS.map((trigger) => (
                <button
                  key={trigger.menuId}
                  onClick={() => setActiveMenu(activeMenu === trigger.menuId ? null : trigger.menuId)}
                  className={cn(
                    'flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-150',
                    activeMenu === trigger.menuId
                      ? 'text-teal bg-navy-700'
                      : 'text-slate-300 hover:text-white hover:bg-navy-700',
                  )}
                >
                  {trigger.label}
                  <ChevronDown
                    className={cn(
                      'h-3.5 w-3.5 transition-transform duration-200',
                      activeMenu === trigger.menuId && 'rotate-180',
                    )}
                  />
                </button>
              ))}

              <div className="mx-2 h-4 w-px bg-navy-border" />

              {[
                { label: 'Who We Are', href: '/who-we-are' },
                { label: 'What We Do', href: '/what-we-do' },
                { label: 'Careers', href: '/careers' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-navy-700 transition-all duration-150"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3 ml-auto">
              <Button href="/contact" variant="primary" size="sm" arrow>
                Get in Touch
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden ml-auto rounded-md p-2 text-slate-400 hover:text-white hover:bg-navy-700 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mega menu */}
        <div className="relative container-wide">
          <AnimatePresence>{activeMenu && <MegaMenuPanel id={activeMenu} onClose={() => setActiveMenu(null)} />}</AnimatePresence>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
