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
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={[
                  'px-6 lg:px-8 py-4 text-center',
                  // right border on col 1 items (odd indices in 2-col, all but last in 4-col)
                  i % 2 === 0 ? 'border-r border-paper-border' : '',
                  // bottom border on top row only on mobile
                  i < 2 ? 'border-b border-paper-border lg:border-b-0' : '',
                  // desktop: right border on first 3
                  i < 3 ? 'lg:border-r lg:border-paper-border' : '',
                ].join(' ')}
              >
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
