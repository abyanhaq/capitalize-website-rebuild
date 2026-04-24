'use client'

import Link from 'next/link'
import { AnimateOnView, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnView'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const INSIGHTS = [
  {
    type: 'Article',
    title: 'The Future of Intelligent Automation with Agentic AI and UiPath',
    desc: 'How UiPath integrates agentic AI to transform traditional RPA into adaptive, autonomous systems.',
    href: 'https://capitalizeconsulting.com/the-future-of-intelligent-automation-with-agentic-ai-and-uipath/',
  },
  {
    type: 'Article',
    title: 'What is RAG (Retrieval Augmented Generation)?',
    desc: 'How RAG connects enterprise data with large language models to deliver accurate, hallucination-free AI insights.',
    href: 'https://capitalizeconsulting.com/what-is-rag-retrieval-augmented-generation/',
  },
  {
    type: 'Article',
    title: 'Supercharging Power BI with ChatGPT',
    desc: 'Using ChatGPT to analyze and document applied steps in the Power Query Editor for advanced visualization.',
    href: 'https://capitalizeconsulting.com/power-bi-chatgpt-for-advanced-data-visualization-and-analysis/',
  },
  {
    type: 'Article',
    title: 'Workflow Management with Alteryx and WAM',
    desc: 'How Workflow Admin Manager empowers Alteryx users to audit, orchestrate, and govern workflows at enterprise scale.',
    href: 'https://capitalizeconsulting.com/workflow-management-with-alteryx-workflow-admin-manager/',
  },
]

export function InsightsSection() {
  return (
    <section className="section-py bg-navy-800 border-y border-navy-border">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <AnimateOnView>
              <p className="data-label mb-4">Capitalize Analytics — Insights</p>
            </AnimateOnView>
            <AnimateOnView delay={0.05}>
              <h2 className="font-display text-display-md font-bold text-white">
                From Our Practitioners
              </h2>
            </AnimateOnView>
          </div>
          <AnimateOnView delay={0.05} direction="left">
            <Button href="/blog" variant="outline" size="md" arrow>
              View All
            </Button>
          </AnimateOnView>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INSIGHTS.map((insight) => (
            <motion.div key={insight.href} variants={staggerItem}>
              <Link
                href={insight.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full border border-navy-border rounded-xl p-6 bg-navy-900 transition-colors duration-200 hover:border-teal/25 hover:bg-navy-800"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600 mb-4">
                  {insight.type}
                </p>
                <h3 className="font-display text-sm font-semibold text-white mb-3 leading-snug group-hover:text-teal transition-colors duration-200 flex-1">
                  {insight.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-5">{insight.desc}</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 group-hover:text-teal transition-colors duration-200">
                  Read More <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
