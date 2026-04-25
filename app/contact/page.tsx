'use client'

import { useState } from 'react'
import { MapPin, Phone, CheckCircle2 } from 'lucide-react'
import { AnimateOnView } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

const LOCATIONS = [
  {
    city: 'Dallas, TX',
    description: 'Our headquarters, serving clients across Texas and the broader US.',
  },
  {
    city: 'Houston, TX',
    description: 'Regional office serving the Gulf Coast energy and industrial sectors.',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simulate a brief delay before showing success
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center overflow-hidden bg-[#110c1d]"
        style={{ minHeight: '40vh' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-10%', right: '-5%', width: '50%', height: '70%',
            background: 'radial-gradient(ellipse at center, rgba(14,65,184,0.08) 0%, transparent 65%)',
          }}
        />

        <div className="container-wide relative z-10 py-20 lg:py-28">
          <AnimateOnView delay={0}>
            <p className="section-label mb-5" style={{ color: '#4A72D9', opacity: 0.8 }}>
              Contact Us
            </p>
          </AnimateOnView>
          <AnimateOnView delay={0.06}>
            <h1 className="font-display text-display-xl font-bold text-white leading-[1.06] mb-6 max-w-2xl">
              Contact Us
            </h1>
          </AnimateOnView>
          <AnimateOnView delay={0.12}>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#A89EC4' }}>
              Whether you&apos;re exploring AI, automating workflows, or modernizing your data
              environment, our team is here to help you find the right path forward. Tell us what
              you&apos;re working on — and we&apos;ll show you how Capitalize can accelerate results.
            </p>
          </AnimateOnView>
        </div>
      </section>

      {/* ─── Contact Section ───────────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-14 lg:gap-20">

            {/* ── Left: Form ──────────────────────────────────────── */}
            <div className="lg:col-span-3">
              <AnimateOnView>
                <h2 className="font-display text-display-sm font-bold text-slate-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-500 mb-8">
                  We&apos;d love to hear from you! Please fill out the form and we&apos;ll get back
                  to you as soon as possible.
                </p>
              </AnimateOnView>

              {submitted ? (
                <AnimateOnView>
                  <div className="flex flex-col items-start gap-4 bg-paper-50 border border-paper-border rounded-xl p-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-teal flex-shrink-0" />
                      <p className="font-semibold text-slate-900">Message sent — thank you!</p>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Thanks for reaching out. One of our team members will be in touch within one
                      business day.
                    </p>
                    <button
                      className="text-sm text-teal underline underline-offset-2 hover:text-teal-dim transition-colors"
                      onClick={() => {
                        setSubmitted(false)
                        setForm({ name: '', email: '', company: '', phone: '', message: '' })
                      }}
                    >
                      Send another message
                    </button>
                  </div>
                </AnimateOnView>
              ) : (
                <AnimateOnView delay={0.05}>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name <span className="text-teal">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full h-11 px-4 rounded-lg border border-paper-border bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Work Email <span className="text-teal">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className="w-full h-11 px-4 rounded-lg border border-paper-border bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Company <span className="text-teal">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className="w-full h-11 px-4 rounded-lg border border-paper-border bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone{' '}
                          <span className="text-slate-400 font-normal">(optional)</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(555) 000-0000"
                          className="w-full h-11 px-4 rounded-lg border border-paper-border bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Message <span className="text-teal">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, challenge, or question..."
                        className="w-full px-4 py-3 rounded-lg border border-paper-border bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={loading}
                      arrow={!loading}
                      className="w-full sm:w-auto"
                    >
                      Send Message
                    </Button>
                  </form>
                </AnimateOnView>
              )}
            </div>

            {/* ── Right: Contact Info ──────────────────────────────── */}
            <div className="lg:col-span-2">
              <AnimateOnView delay={0.08}>
                <h2 className="font-display text-display-sm font-bold text-slate-900 mb-6">
                  Our Locations
                </h2>

                <div className="flex flex-col gap-4 mb-8">
                  {LOCATIONS.map((loc) => (
                    <div
                      key={loc.city}
                      className="flex gap-4 p-5 bg-paper-50 border border-paper-border rounded-xl"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center">
                        <MapPin className="h-4.5 w-4.5 text-teal" style={{ width: '1.1rem', height: '1.1rem' }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 mb-1">{loc.city}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">{loc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 p-5 bg-paper-50 border border-paper-border rounded-xl">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Call us directly</p>
                    <a
                      href="tel:2145313904"
                      className="text-sm font-semibold text-slate-900 hover:text-teal transition-colors"
                    >
                      (214) 531-3904
                    </a>
                    <p className="text-xs text-slate-400 mt-1">Mon – Fri, 8 AM – 6 PM CT</p>
                  </div>
                </div>
              </AnimateOnView>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
