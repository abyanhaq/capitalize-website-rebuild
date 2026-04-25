import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Education Analytics Consulting | Capitalize Analytics',
  description: 'Capitalize helps educational institutions improve enrollment, student outcomes, and operational efficiency through modern data infrastructure and analytics built for higher ed and K-12.',
}

const painPoints = [
  { title: 'Enrollment & Retention Gaps', desc: 'Institutions lack early-warning analytics to identify at-risk students before they disenroll, resulting in avoidable attrition and revenue loss.' },
  { title: 'Manual Accreditation Reporting', desc: 'Regional and programmatic accreditation reporting is built on manual data pulls, creating compliance risk and consuming staff time every cycle.' },
  { title: 'Financial Aid Analytics Gaps', desc: 'Financial aid packaging, awards analysis, and unmet need reporting are built on static exports with limited scenario modeling capability.' },
  { title: 'Siloed Institutional Data', desc: "SIS, LMS, CRM, and financial systems don't share a common data model, making cross-functional reporting and student success analytics difficult." },
]

const services = [
  { title: 'Enrollment & Retention Analytics', desc: 'Build dashboards and predictive models that identify enrollment trends, application funnel performance, and early attrition risk.' },
  { title: 'Student Success & Outcome Analytics', desc: 'Track academic progress, intervention triggers, graduation rates, and post-graduation outcomes across programs and demographics.' },
  { title: 'Accreditation & Compliance Reporting', desc: 'Automate regional and programmatic accreditation data submissions, IPEDS reporting, and outcomes documentation.' },
  { title: 'Financial Aid Analytics', desc: 'Model aid packaging scenarios, track disbursements, and analyze unmet need and retention impact across your aid portfolio.' },
  { title: 'Research Data Management', desc: 'Build governed data infrastructure to support grant reporting, research compliance, and institutional analytics.' },
  { title: 'Operational Efficiency Dashboards', desc: 'Track facilities utilization, course fill rates, staffing ratios, and administrative costs to support data-driven resource allocation.' },
]

export default function EducationAnalyticsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#110c1d] min-h-[50vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide py-16 relative z-10">
          <AnimateOnView>
            <span className="section-label">Education Analytics</span>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mt-4 mb-6 max-w-3xl">Analytics That Improve Student Outcomes and Institutional Performance</h1>
            <p className="text-lg max-w-2xl mb-8" style={{ color: '#A89EC4' }}>Capitalize helps colleges, universities, and K-12 organizations build modern data infrastructure and analytics that drive enrollment, student success, and operational efficiency.</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>Get in Touch</Button>
              <Button href="/what-we-do" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">What We Do</Button>
            </div>
          </AnimateOnView>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimateOnView>
              <span className="section-label">The Challenge</span>
              <h2 className="font-display text-display-lg font-bold text-slate-900 mt-4 mb-6">Education Institutions Face Growing Pressure to Do More With Less</h2>
              <p className="text-slate-600 leading-relaxed">Enrollment pressures, accreditation demands, and the push to improve student outcomes have created an urgent need for analytics in higher education and K-12. Yet most institutions still rely on fragmented SIS exports, manual reporting workflows, and limited BI capabilities to make critical decisions.</p>
            </AnimateOnView>
            <StaggerContainer className="flex flex-col gap-6">
              {painPoints.map((point) => (
                <StaggerItem key={point.title} className="flex gap-4">
                  <div className="w-1 bg-teal/30 self-stretch rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">{point.title}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="bg-paper-50 py-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[{ value: '20+', label: 'Years of Experience' }, { value: '1,500+', label: 'Projects Delivered' }, { value: '1,000+', label: 'Clients Served' }, { value: '95%', label: 'Client Retention' }].map((stat) => (
              <AnimateOnView key={stat.label}>
                <p className="font-display text-display-md font-bold text-teal">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="container-wide">
          <AnimateOnView>
            <span className="section-label">Our Services</span>
            <h2 className="font-display text-display-lg font-bold text-slate-900 mt-4 mb-12">What We Do for Education</h2>
          </AnimateOnView>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title} className="border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-[#110c1d] section-py-sm relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide text-center relative z-10">
          <AnimateOnView>
            <span className="section-label">Get Started</span>
            <h3 className="font-display text-display-md font-bold text-white mt-4 mb-4">Modernize Your Institution&apos;s Analytics Capabilities</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#A89EC4' }}>Talk to an education analytics expert about your enrollment, student success, and compliance data challenges.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" arrow>Schedule a Consultation</Button>
              <Button href="/what-we-do" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">Explore Our Services</Button>
            </div>
          </AnimateOnView>
        </div>
      </section>
    </main>
  )
}
