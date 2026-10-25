import useReveal from '../../hooks/useReveal'
import { useEnquiry } from '../../context/EnquiryContext'
import destinations from '../destinations'

function DestinationCard({ code, country, blurb }) {
  const ref = useReveal()
  const { requestEnquiry } = useEnquiry()

  return (
    <div
      ref={ref}
      className="reveal-scale card-lift relative flex min-h-[260px] flex-col overflow-hidden rounded-xl shadow-sm"
    >
      {/* Real country flag (local SVG) as the full card background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `url(/images/flags/${code.toLowerCase()}.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      {/* Overlay so text stays readable over the flag */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/55 to-navy/85" />

      <div className="relative z-10 flex flex-1 flex-col p-5 text-white">
        <span className="text-xs font-semibold tracking-[0.2em] text-orange">{code}</span>
        <h3 className="mt-1 font-display font-semibold text-lg leading-snug">{country}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/90">{blurb}</p>
        <button
          onClick={() => requestEnquiry({ destination: country })}
          className="mt-4 self-start text-sm font-semibold text-orange transition-colors hover:text-orange-light"
        >
          Enquire Now →
        </button>
      </div>
    </div>
  )
}

export default function Destinations() {
  const headingRef = useReveal()

  return (
    <section id="destinations" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-navy">
            Popular Destinations
          </h2>
          <p className="mt-3 text-ink/70">
            Tap Enquire Now on any country to start your request — we'll
            pre-fill the destination for you.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {destinations.map((d) => (
            <DestinationCard key={d.country} {...d} />
          ))}
        </div>
      </div>
    </section>
  )
}
