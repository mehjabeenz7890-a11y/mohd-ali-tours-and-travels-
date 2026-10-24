import { useEnquiry } from '../context/EnquiryContext'
import { COMPANY_NAME, TAGLINE, buildWhatsAppUrl } from '../data/siteConfig'

export default function Hero() {
  const { requestEnquiry } = useEnquiry()

  return (
    <section id="home" className="relative overflow-hidden bg-navy">
      {/* Subtle animated airplane trail */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[10%] left-0 w-full motion-safe:animate-fly-across">
          <span className="relative inline-block text-3xl text-orange/70">
            ✈
            <span className="absolute right-full top-1/2 -translate-y-1/2 h-px w-40 bg-gradient-to-l from-orange/60 to-transparent" />
          </span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16 text-center">
        <h1 className="motion-safe:animate-fade-slide-up text-white text-3xl sm:text-5xl lg:text-6xl font-display font-semibold leading-tight">
          {COMPANY_NAME}
        </h1>
        <p
          className="motion-safe:animate-fade-slide-up text-orange text-lg sm:text-2xl font-display mt-3"
          style={{ animationDelay: '120ms', animationFillMode: 'backwards' }}
        >
          {TAGLINE}
        </p>
        <p
          className="motion-safe:animate-fade-slide-up text-white/85 mt-4 text-base sm:text-lg max-w-2xl mx-auto"
          style={{ animationDelay: '220ms', animationFillMode: 'backwards' }}
        >
          Flights, hotels, visa assistance and tour packages — planned with
          care by a Hyderabad-based travel team that treats every trip like
          it matters.
        </p>

        <div
          className="motion-safe:animate-fade-slide-up mt-8 flex flex-wrap justify-center gap-4"
          style={{ animationDelay: '320ms', animationFillMode: 'backwards' }}
        >
          <button
            onClick={() => requestEnquiry({})}
            className="inline-flex items-center justify-center rounded-lg bg-orange px-6 py-3 font-semibold text-navy shadow-lg shadow-orange/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-orange-light"
          >
            Enquire Now
          </button>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-navy shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            WhatsApp Us
          </a>
          <button
            onClick={() =>
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-orange hover:text-orange"
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* Hero banner image — shown in full (object-contain), never cropped,
          so the director photo, logo and infographic inside it stay intact.
          A very subtle float adds gentle motion without cropping or hiding content. */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
        <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl shadow-black/30 bg-white motion-safe:animate-float-slow">
          <img
            src="/images/mohd-ali-hero.jpg"
            alt={`${COMPANY_NAME} — office banner with director, services and destinations`}
            width="1536"
            height="1024"
            className="block w-full h-auto object-contain"
            onError={(e) => {
              e.currentTarget.closest('div').style.display = 'none'
            }}
          />
        </div>
      </div>
    </section>
  )
}
