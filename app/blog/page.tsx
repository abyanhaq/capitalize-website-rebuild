import type { Metadata } from 'next'
import { AnimateOnView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog & Insights | Capitalize Analytics',
  description: 'Insights on AI, data analytics, automation, and enterprise data strategy from the Capitalize Analytics team.',
}

const BASE = 'https://capitalizeconsulting.com'

const ARTICLES = [
  { category: 'AI', title: 'The Future of Intelligent Automation with Agentic AI', excerpt: 'How agentic AI and UiPath are redefining what automation can do — and what it means for enterprise operations.', href: `${BASE}/the-future-of-intelligent-automation-with-agentic-ai-and-uipath/` },
  { category: 'FP&A', title: 'Top 5 FP&A Tools in 2026', excerpt: 'A practical comparison of the leading financial planning and analysis platforms for modern finance teams.', href: `${BASE}/top-5-fpa-tools-in-2026/` },
  { category: 'AI', title: '3 Tools CFOs Can Use to Jumpstart Their AI Journey', excerpt: "CFOs don't need to wait for a full data transformation to start realizing value from AI — here's where to start.", href: `${BASE}/three-tools-cfos-can-use-to-jumpstart-their-ai-journey/` },
  { category: 'Analytics', title: 'Thoughts From a CFO: Executive Perspective on Analytics', excerpt: "A former Stanley Black & Decker CFO shares how analytics transformed how their finance team makes decisions.", href: `${BASE}/thoughts-from-a-cfo-former-stanley-black-and-decker-cfo-provides-executive-thought-leadership-on-alteryx/` },
  { category: 'BI', title: 'Power BI vs. Tableau: Which Is Right for Your Business?', excerpt: 'A head-to-head breakdown of the two leading BI platforms to help you choose the right fit for your organization.', href: `${BASE}/power-bi-vs-tableau-which-one-is-right-for-your-business/` },
  { category: 'Analytics', title: 'Optimizing Supply Chain Analytics', excerpt: 'How leading supply chain teams are using analytics to reduce risk, improve forecast accuracy, and build resilience.', href: `${BASE}/optimizing-supply-chain-analytics/` },
  { category: 'Alteryx', title: 'Scaling Self-Service Analytics with Collibra', excerpt: 'How combining Alteryx and Collibra creates a governed, scalable self-service analytics environment at enterprise scale.', href: `${BASE}/scaling-self-service-analytics-with-collibras-data-intelligence-cloud/` },
  { category: 'Alteryx', title: 'Scaling Alteryx Server with User-Managed MongoDB', excerpt: 'A technical guide to scaling Alteryx Server infrastructure using user-managed MongoDB for high-volume environments.', href: `${BASE}/scaling-alteryx-server-with-user-managed-mongodb/` },
  { category: 'Alteryx', title: 'Alteryx vs. Dataiku: Which Is Right for Your Team?', excerpt: 'A practical comparison of Alteryx and Dataiku to help data and analytics teams choose the right platform.', href: `${BASE}/alteryx-dataiku-comparison/` },
  { category: 'Alteryx', title: 'Alteryx Connect to Snowflake Integration', excerpt: 'Step-by-step guidance on connecting Alteryx to Snowflake for scalable, cloud-based analytics workflows.', href: `${BASE}/alteryx-connect-to-snowflake-integration/` },
  { category: 'Alteryx', title: 'Demystifying Alteryx for Finance Teams', excerpt: 'Why Alteryx is one of the most impactful tools for finance — and how to get your team started without a data science background.', href: `${BASE}/demystifying-alteryx-why-its-important-for-finance-teams-and-how-to-get-started/` },
  { category: 'WAM', title: 'WAM: Change Control & Versioning for Alteryx Workflows', excerpt: 'How Workflow Admin Manager brings Git-like change control and version tracking to Alteryx workflow governance.', href: `${BASE}/how-can-wam-help-me-with-change-control-and-versioning-on-my-alteryx-workflows/` },
  { category: 'WAM', title: 'Easy Backup of Workflows in WAM', excerpt: 'How WAM automates workflow backups with timestamp-linked audit reports to protect your analytics governance.', href: `${BASE}/easy-back-up-of-workflows-in-wam/` },
  { category: 'WAM', title: 'Using WAM to Improve Alteryx Workflows', excerpt: 'How WAM audit reports surface automated improvement suggestions to reduce runtimes and enforce best practices.', href: `${BASE}/using-wam-to-improve-workflows/` },
]

const CATEGORY_COLORS: Record<string, string> = {
  AI: 'bg-purple-100 text-purple-700',
  'FP&A': 'bg-blue-100 text-blue-700',
  Analytics: 'bg-slate-100 text-slate-700',
  BI: 'bg-sky-100 text-sky-700',
  Alteryx: 'bg-orange-100 text-orange-700',
  WAM: 'bg-teal-100 text-teal-700',
}

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#110c1d] py-20">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide relative z-10">
          <AnimateOnView>
            <span className="section-label">Insights & Resources</span>
            <h1 className="font-display text-display-xl font-bold leading-tight text-white mt-4 mb-4 max-w-2xl">Data, AI & Analytics Insights</h1>
            <p className="text-lg max-w-xl" style={{ color: '#A89EC4' }}>Practical guidance on analytics, AI, automation, and data strategy from the Capitalize team.</p>
          </AnimateOnView>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-white section-py">
        <div className="container-wide">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <StaggerItem key={article.href}>
                <Link
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full border border-paper-border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200"
                >
                  <span className={`self-start text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full mb-4 ${CATEGORY_COLORS[article.category] ?? 'bg-slate-100 text-slate-600'}`}>
                    {article.category}
                  </span>
                  <h3 className="font-semibold text-slate-900 mb-2 leading-snug group-hover:text-teal transition-colors">{article.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{article.excerpt}</p>
                  <span className="mt-4 text-sm font-medium text-teal flex items-center gap-1">Read Article <span className="transition-transform group-hover:translate-x-0.5">→</span></span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#110c1d] section-py-sm relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(74,50,110,0.45) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-wide text-center relative z-10">
          <AnimateOnView>
            <h3 className="font-display text-display-md font-bold text-white mb-4">Have a Data Challenge?</h3>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#A89EC4' }}>Our team works with organizations across industries to build analytics that drive real outcomes.</p>
            <Button href="/contact" variant="primary" size="lg" arrow>Let&apos;s Talk</Button>
          </AnimateOnView>
        </div>
      </section>
    </main>
  )
}
