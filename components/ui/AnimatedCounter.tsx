'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

type AnimatedCounterProps = {
  value: string   // e.g. "1,500+", "$10M+", "95%", "3.7+ Mil"
  className?: string
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [displayed, setDisplayed] = useState('0')

  useEffect(() => {
    if (!inView) return

    // Extract numeric part and suffix
    const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/)
    if (!match) {
      setDisplayed(value)
      return
    }

    const prefix = match[1]
    const numStr = match[2].replace(/,/g, '')
    const suffix = match[3]
    const target = parseFloat(numStr)
    const isDecimal = numStr.includes('.')

    const duration = 1800
    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased

      let formatted: string
      if (isDecimal) {
        formatted = current.toFixed(1)
      } else if (target >= 1000) {
        formatted = Math.round(current).toLocaleString()
      } else {
        formatted = Math.round(current).toString()
      }

      setDisplayed(`${prefix}${formatted}${suffix}`)

      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  )
}
