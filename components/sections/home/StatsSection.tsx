import { AnimateOnView } from '@/components/ui/AnimateOnView'

const STATS = [
  { value: '50K+',  label: 'Hours Saved for Clients' },
  { value: '$10M+', label: 'Operational Savings Delivered' },
  { value: '5K+',   label: 'Workflows Designed' },
  { value: '9',     label: 'Industries Served' },
]

export function StatsSection() {
  return (
    <section className="bg-navy-700 border-b border-navy-border py-14">
      <div className="container-wide">
        <AnimateOnView delay={0.05}>
          <p className="data-label mb-8 text-center">Proven Results</p>
        </AnimateOnView>
        <AnimateOnView delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-navy-border">
            {STATS.map((s) => (
              <div key={s.label} className="px-8 py-4 text-center first:pl-0 last:pr-0">
                <p className="font-display text-display-sm font-bold text-white mb-1">{s.value}</p>
                <p className="text-xs text-slate-500 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
