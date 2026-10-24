import { COMPANY_NAME, TAGLINE, ADDRESS, WHATSAPP_DISPLAY, buildWhatsAppUrl } from '../data/siteConfig'
import useReveal from '../hooks/useReveal'

const QUICK_LINKS = [
  { label: 'Home', to: 'home' },
  { label: 'About Us', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Visa Services', to: 'visa-services' },
  { label: 'Tour Packages', to: 'tour-packages' },
  { label: 'Contact Us', to: 'contact' }
]

const SERVICE_LINKS = [
  'Flight Tickets',
  'Hotel Booking',
  'Visa Services',
  'Work Permit',
  'Tour Packages'
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const ref = useReveal()

  return (
    <footer className="bg-navy text-white">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/ma-logo.jpg"
              alt={`${COMPANY_NAME} logo`}
              className="h-12 w-12 object-contain rounded-full bg-white shrink-0"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <h3 className="font-display font-semibold text-lg">{COMPANY_NAME}</h3>
          </div>
          <p className="mt-2 text-orange text-sm">{TAGLINE}</p>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">{ADDRESS}</p>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-white/80">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <button
                  onClick={() => scrollTo(l.to)}
                  className="text-white/70 text-sm hover:text-orange transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-white/80">
            Services
          </h4>
          <ul className="mt-4 space-y-2">
            {SERVICE_LINKS.map((s) => (
              <li key={s} className="text-white/70 text-sm">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-white/80">
            Contact
          </h4>
          <p className="mt-4 text-white/70 text-sm">WhatsApp: {WHATSAPP_DISPLAY}</p>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center rounded-lg bg-orange px-4 py-2 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-orange-light"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-white/50 text-xs">
        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  )
}
