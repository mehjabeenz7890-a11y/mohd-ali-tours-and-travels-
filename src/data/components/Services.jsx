import useReveal from '../../hooks/useReveal'
import { useEnquiry } from '../../context/EnquiryContext'
import { services } from '../content'

function ServiceCard({ icon, title, desc }) {
  const ref = useReveal()
  const { requestEnquiry } = useEnquiry()

  return (
    <div
      ref={ref}
      className="reveal-scale card-lift bg-white rounded-xl p-6 border border-navy/5 shadow-sm"
    >
      <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-navy/5 text-2xl">
        <span aria-hidden="true">{icon}</span>
      </div>
      <h3 className="mt-4 font-display font-semibold text-lg text-navy">{title}</h3>
      <p className="mt-2 text-sm text-ink/70 leading-relaxed">{desc}</p>
      <button
        onClick={() => requestEnquiry({ service: title })}
        className="mt-4 text-sm font-semibold text-orange-dark hover:text-orange transition-colors"
      >
        Enquire Now →
      </button>
    </div>
  )
}

export default function Services() {
  const headingRef = useReveal()

  return (
    <section id="services" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-navy">
            Our Services
          </h2>
          <p className="mt-3 text-ink/70">
            Everything you need for a smooth trip, in one place.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
