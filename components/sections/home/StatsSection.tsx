import { AnimateOnView } from '@/components/ui/AnimateOnView'

const STATS = [
  { value: '50K+',  label: 'Hours Saved for Clients' },
  { value: '$10M+', label: 'Operational Savings Delivered' },
  { value: '5K+',   label: 'Workflows Designed' },
  { value: '9',     label: 'Industries Served' },
]

export function StatsSection() {
  return (
    <section className="bg-paper-50 border-b border-paper-border py-14">
      <div className="container-wide">
        <AnimateOnView delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-paper-border">
            {STATS.map((s, i) => (
              <div key={s.label} className="px-8 py-4 text-center first:pl-0 last:pr-0">
                <p className={`font-display text-display-sm font-bold mb-1 ${i === 0 ? '' : 'text-slate-900'}`} style={i === 0 ? { color: '#4A72D9' } : undefined}>{s.value}</p>
                <p className="text-xs text-slate-500 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
