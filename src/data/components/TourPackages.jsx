import useReveal from '../hooks/useReveal'
import { useEnquiry } from '../context/EnquiryContext'
import { tourPackages } from '../data/content'

const GRADIENTS = [
  'from-navy to-navy-light',
  'from-orange-dark to-orange',
  'from-navy-light to-navy-dark',
  'from-orange to-orange-light',
  'from-navy to-orange-dark',
  'from-orange-dark to-navy'
]

function PackageCard({ destination, desc, index }) {
  const ref = useReveal()
  const { requestEnquiry } = useEnquiry()

  return (
    <div
      ref={ref}
      className="reveal-scale card-lift group bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-orange/40 shadow-sm flex flex-col transition-colors duration-300"
    >
      {/* Placeholder gradient panel — swap for a real package photo when available */}
      <div className="h-40 w-full overflow-hidden">
        <div
          className={`h-full w-full bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} flex items-end p-4 transition-transform duration-500 ease-out group-hover:scale-105`}
          role="img"
          aria-label={`${destination} tour package image placeholder`}
        >
          <span className="text-white font-display font-semibold text-lg drop-shadow">
            {destination}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-sm text-ink/70 leading-relaxed flex-1">{desc}</p>
        <button
          onClick={() => requestEnquiry({ destination })}
          className="mt-4 self-start inline-flex items-center rounded-lg bg-orange px-4 py-2 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-orange-light"
        >
          Enquire Now
        </button>
      </div>
    </div>
  )
}

export default function TourPackages() {
  const headingRef = useReveal()

  return (
    <section id="tour-packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-navy">
            Tour Packages
          </h2>
          <p className="mt-3 text-ink/70">
            Sample destinations below — contact us for current pricing and availability.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tourPackages.map((p, i) => (
            <PackageCard key={p.destination} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
