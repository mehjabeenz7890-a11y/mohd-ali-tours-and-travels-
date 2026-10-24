import useReveal from '../hooks/useReveal'
import { useEnquiry } from '../context/EnquiryContext'
import { visaServices } from '../data/content'

function VisaCard({ flag, title, desc }) {
  const ref = useReveal()
  const { requestEnquiry } = useEnquiry()

  return (
    <div
      ref={ref}
      className="reveal-scale card-lift bg-white rounded-xl p-6 border border-navy/5 shadow-sm flex flex-col"
    >
      <span className="text-3xl" aria-hidden="true">{flag}</span>
      <h3 className="mt-3 font-display font-semibold text-lg text-navy">{title}</h3>
      <p className="mt-2 text-sm text-ink/70 leading-relaxed flex-1">{desc}</p>
      <button
        onClick={() => requestEnquiry({ service: title })}
        className="mt-4 self-start inline-flex items-center rounded-lg bg-orange px-4 py-2 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-orange-light"
      >
        Enquire Now
      </button>
    </div>
  )
}

export default function VisaServices() {
  const headingRef = useReveal()

  return (
    <section id="visa-services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-navy">
            Visa Services
          </h2>
          <p className="mt-3 text-ink/70">
            Documentation and application support — no guarantees, just honest help.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visaServices.map((v) => (
            <VisaCard key={v.title} {...v} />
          ))}
        </div>
      </div>
    </section>
  )
}
