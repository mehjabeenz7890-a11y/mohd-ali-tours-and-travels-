import { useEffect, useRef, useState } from 'react'

/**
 * Animates from 0 to `target` once the element scrolls into view.
 * `suffix` (e.g. "+") is appended to the displayed value.
 */
export default function useCountUp(target, { duration = 1400, suffix = '' } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setValue(target)
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.4 })

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, display: `${value}${suffix}` }
}
