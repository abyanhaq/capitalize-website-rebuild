'use client'

import Link from 'next/link'
import { AnimateOnView, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnView'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'

const INSIGHTS = [
  {
    type: 'Article',
    title: 'The Future of Intelligent Automation with Agentic AI and UiPath',
    desc: 'Explore how UiPath integrates agentic AI, transforming traditional RPA into adaptive, autonomous systems.',
    href: 'https://capitalizeconsulting.com/the-future-of-intelligent-automation-with-agentic-ai-and-uipath/',
  },
  {
    type: 'Article',
    title: 'What is RAG (Retrieval Augmented Generation)?',
    desc: 'How RAG securely connects enterprise data with large language models to deliver accurate, business-ready AI insights without hallucinations.',
    href: 'https://capitalizeconsulting.com/what-is-rag-retrieval-augmented-generation/',
  },
  {
    type: 'Article',
    title: 'Supercharging Power BI with ChatGPT',
    desc: 'How to use ChatGPT to analyze and document applied steps in the Power Query Editor for advanced data visualization.',
    href: 'https://capitalizeconsulting.com/power-bi-chatgpt-for-advanced-data-visualization-and-analysis/',
  },
  {
    type: 'Article',
    title: 'Enhancing Workflow Management with Alteryx and WAM',
    desc: 'How Workflow Admin Manager empowers Alteryx users to audit, document, orchestrate, and mass-update workflows at scale.',
    href: 'https://capitalizeconsulting.com/workflow-management-with-alteryx-workflow-admin-manager/',
  },
]

export function InsightsSection() {
  return (
    <section className="section-py bg-navy-950 relative">
      <div className="absolute inset-0 bg-grid-sm opacity-20 pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <AnimateOnView>
              <Badge variant="teal" className="mb-4">Featured Insights</Badge>
            </AnimateOnView>
            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-white">
                Stay Ahead of the Curve
              </h2>
            </AnimateOnView>
            <AnimateOnView delay={0.1}>
              <p className="mt-2 text-slate-400">
                Perspectives on AI, analytics, and automation from our practitioners.
              </p>
            </AnimateOnView>
          </div>
          <AnimateOnView delay={0.1} direction="left">
            <Button href="/blog" variant="outline" size="md" arrow>
              View All Insights
            </Button>
          </AnimateOnView>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INSIGHTS.map((insight) => (
            <motion.div key={insight.href} variants={staggerItem}>
              <Link
                href={insight.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full rounded-xl border border-navy-border bg-navy-800 p-6 transition-all duration-300 hover:border-teal/20 hover:bg-navy-700 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-3.5 w-3.5 text-teal" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-teal opacity-80">
                    {insight.type}
                  </span>
                </div>
                <h3 className="font-display text-sm font-semibold text-white mb-3 leading-snug group-hover:text-teal transition-colors duration-200 flex-1">
                  {insight.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{insight.desc}</p>
                <div className="flex items-center gap-1 text-xs font-medium text-slate-400 group-hover:text-teal transition-colors duration-200">
                  Read More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
