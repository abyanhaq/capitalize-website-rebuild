export type NavItem = {
  label: string
  href: string
  description?: string
}

export type NavGroup = {
  label: string
  items: NavItem[]
}

export const HOW_WE_HELP: NavItem[] = [
  {
    label: 'AI & Advanced Analytics',
    href: '/ai-and-advanced-analytics',
    description: 'Pilots, ML strategy, and governed AI that delivers ROI',
  },
  {
    label: 'Business Intelligence',
    href: '/business-intelligence',
    description: 'Dashboards, reporting, and data-driven decision tools',
  },
  {
    label: 'Data Engineering & Integration',
    href: '/data-engineering-integration',
    description: 'Unified pipelines and analytics-ready data infrastructure',
  },
  {
    label: 'Data Strategy & Advisory',
    href: '/data-strategy-advisory',
    description: 'Roadmaps, governance, and enterprise data maturity',
  },
  {
    label: 'Process Automation',
    href: '/process-automation',
    description: 'Eliminate manual work and accelerate business outcomes',
  },
  {
    label: 'Managed Services',
    href: '/managed-services',
    description: 'Ongoing analytics operations and platform support',
  },
  {
    label: 'Training',
    href: '/training',
    description: 'Expert-led upskilling in analytics, BI, and AI tools',
  },
]

export const FUNCTIONAL_AREAS: NavItem[] = [
  { label: 'Accounting', href: '/accounting' },
  { label: 'Audit', href: '/audit' },
  { label: 'Financial Planning & Analysis', href: '/financial-planning-analysis' },
  { label: 'Tax Analytics', href: '/tax-analytics-consulting' },
  { label: 'Technology (IT)', href: '/technology-it-consulting' },
  { label: 'Sales & Marketing', href: '/sales-marketing-analytics-consulting' },
  { label: 'Supply Chain', href: '/supply-chain-analytics' },
  { label: 'HR & Workforce Analytics', href: '/hr-workforce-analytics' },
]

export const INDUSTRIES: NavItem[] = [
  { label: 'Distribution', href: '/distribution-analytics' },
  { label: 'Financial Services', href: '/financial-services-consulting' },
  { label: 'Healthcare', href: '/healthcare-analytics' },
  { label: 'Manufacturing', href: '/manufacturing-analytics' },
  { label: 'Oil & Gas', href: '/oil-gas-analytics-consulting' },
  { label: 'Hospitality', href: '/hospitality-analytics-consulting' },
  { label: 'Retail', href: '/retail-analytics-consulting' },
  { label: 'Education', href: '/education-analytics-consulting' },
  { label: 'Government', href: '/government-analytics-consulting' },
]

export const PRODUCTS: NavItem[] = [
  {
    label: 'iGB',
    href: '/igb',
    description: 'Intelligent Gas Balancing for energy operations',
  },
  {
    label: 'Watchtower',
    href: '/watchtower',
    description: 'Automated analytics governance and data quality monitoring',
  },
  {
    label: 'Workflow Admin Manager',
    href: '/workflow-admin-manager',
    description: 'Centralized Alteryx workflow orchestration and administration',
  },
]

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Careers', href: '/careers' },
]

export const INSIGHTS: NavItem[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'Webinars', href: '/webinar' },
]
