import {
  COMPANY_NAME,
  TAGLINE,
  ADDRESS,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
  HEAD_NAME,
  HEAD_PHONE_DISPLAY,
  HEAD_PHONE_TEL,
  WEBSITE_DISPLAY,
  WEBSITE_URL,
  SOCIAL_INSTAGRAM,
  SOCIAL_FACEBOOK,
  SOCIAL_YOUTUBE
} from '../siteConfig'
import { IconInstagram, IconFacebook, IconYoutube } from './icons'
import useReveal from '../../hooks/useReveal'

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-0.5 hover:scale-110 hover:bg-orange hover:text-navy"
    >
      {children}
    </a>
  )
}

export default function ThankYou() {
  const ref = useReveal()

  return (
    <section className="relative overflow-hidden bg-navy py-20">
      {/* Subtle travel-themed accent, not animated */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-orange/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange/5"
      />

      <div ref={ref} className="reveal relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-orange text-3xl" aria-hidden="true">✈</span>
        <h2 className="mt-3 text-4xl sm:text-5xl font-display font-semibold text-white tracking-wide">
          THANK YOU
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-white/90 font-display">
          Thank you for choosing {COMPANY_NAME}.
        </p>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto leading-relaxed">
          Your trust is our strength. We look forward to making your journey
          comfortable, safe and memorable.
        </p>

        <div className="mt-8 border-t border-white/10 pt-8">
          <h3 className="font-display font-semibold text-white text-lg">{COMPANY_NAME}</h3>
          <p className="mt-1 text-orange text-sm">{TAGLINE}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl mx-auto text-sm text-white/80 text-left sm:text-center">
            <p className="break-words">{ADDRESS}</p>
            <p>
              WhatsApp:{' '}
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:text-orange transition-colors"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </p>
            <p>
              Head of the Company:{' '}
              <span className="font-medium text-white">{HEAD_NAME}</span>
              {' · '}
              <a
                href={HEAD_PHONE_TEL}
                className="font-medium text-white hover:text-orange transition-colors whitespace-nowrap"
              >
                {HEAD_PHONE_DISPLAY}
              </a>
            </p>
            <p className="break-all sm:break-normal">
              Website:{' '}
              <a
                href={WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:text-orange transition-colors break-all"
              >
                {WEBSITE_DISPLAY}
              </a>
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <SocialIcon href={SOCIAL_INSTAGRAM} label="Instagram">
              <IconInstagram className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={SOCIAL_FACEBOOK} label="Facebook">
              <IconFacebook className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href={SOCIAL_YOUTUBE} label="YouTube">
              <IconYoutube className="h-5 w-5" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </section>
  )
}
