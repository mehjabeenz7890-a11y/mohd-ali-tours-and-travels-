import useReveal from '../hooks/useReveal'
import useCountUp from '../hooks/useCountUp'
import { stats } from '../data/content'

function Stat({ value, suffix, label }) {
  const { ref, display } = useCountUp(value, { suffix })
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-display font-semibold text-orange">
        {display}
      </div>
      <div className="mt-2 text-white/80 text-sm tracking-wide">{label}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useReveal()

  return (
    <section className="py-16 bg-navy">
      <div
        ref={ref}
        className="reveal max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
