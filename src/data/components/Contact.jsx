import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'
import { useEnquiry } from '../context/EnquiryContext'
import {
  COMPANY_NAME,
  WHATSAPP_NUMBERS,
  buildWhatsAppUrl,
  HEAD_NAME,
  HEAD_PHONE_DISPLAY,
  HEAD_PHONE_TEL,
  APPOINTMENT_MESSAGE,
  WEBSITE_DISPLAY,
  WEBSITE_URL,
  EMAIL_DISPLAY,
  EMAIL_MAILTO,
  SOCIAL_INSTAGRAM,
  SOCIAL_FACEBOOK,
  SOCIAL_YOUTUBE
} from '../data/siteConfig'
import {
  IconMapPin,
  IconUser,
  IconPhone,
  IconWhatsApp,
  IconGlobe,
  IconMail,
  IconInstagram,
  IconFacebook,
  IconYoutube
} from './icons'

// Branch locations shown in the Contact card. `mapsQuery` feeds the
// Google Maps "Get Directions" link.
const BRANCHES = [
  {
    name: 'Branch 1',
    address:
      'S No. 01, #10-1-12/96, CBI Quarters, Beside Mahavir Hospital & Research Centre, AC Guards, Hyderabad – 500004, Telangana.',
    mapsQuery:
      'S No. 01, #10-1-12/96, CBI Quarters, Beside Mahavir Hospital & Research Centre, AC Guards, Hyderabad 500004, Telangana'
  },
  {
    name: 'Branch 2',
    address: 'Pillar No. 185, Opp. Mantra Mall, Upperpally, Attapur, Hyderabad – 500048, Telangana.',
    mapsQuery: 'Pillar No. 185, Opp. Mantra Mall, Upperpally, Attapur, Hyderabad 500048, Telangana'
  }
]

const mapsDirectionsUrl = (query) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`

const EMPTY_FORM = {
  name: '',
  phone: '',
  address: '',
  email: '',
  service: '',
  destination: '',
  travelDate: '',
  travellers: '',
  message: ''
}

const SERVICE_OPTIONS = [
  'Flight Tickets',
  'Hotel Booking',
  'Visa Services',
  'Visit Visa – GCC Countries',
  'Work Permit',
  'All Country Air Tickets',
  'Europe Visit Visa',
  'Travel Insurance',
  'Tour Packages',
  'Other'
]

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.phone.trim()) {
    errors.phone = 'Please enter a phone number.'
  } else if (!/^[0-9+\-\s()]{7,20}$/.test(form.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  return errors
}

function buildEnquiryMessage(form) {
  const lines = [
    `Name: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    `Address: ${form.address.trim() || '-'}`,
    `Email: ${form.email.trim() || '-'}`,
    `Service: ${form.service || '-'}`,
    `Destination: ${form.destination.trim() || '-'}`,
    `Travel Date: ${form.travelDate || '-'}`,
    `Travellers: ${form.travellers || '-'}`,
    `Message: ${form.message.trim() || '-'}`,
    '',
    'Please contact me regarding this enquiry.'
  ]
  return lines.join('\n')
}

export default function Contact() {
  const ref = useReveal()
  const { prefill } = useEnquiry()
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success | blocked
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    if (prefill.destination || prefill.service) {
      setForm((f) => ({
        ...f,
        destination: prefill.destination || f.destination,
        service: prefill.service || f.service
      }))
    }
  }, [prefill])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    const message = buildEnquiryMessage(form)
    const whatsappWindow = window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')

    if (!whatsappWindow) {
      // Popup blocked by the browser — let the person open it manually instead.
      setStatus('blocked')
      setStatusMessage(
        'Your browser blocked the popup. Please allow popups, or tap "WhatsApp Us" to send your enquiry.'
      )
      return
    }

    setStatus('success')
    setStatusMessage('WhatsApp opened with your enquiry — just hit Send there to reach us.')
    setForm(EMPTY_FORM)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-navy">
            Contact Us
          </h2>
          <p className="mt-3 text-ink/70">
            Tell us what you're planning and we'll take it from there.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Information Card */}
          <div className="lg:col-span-2 bg-navy rounded-2xl p-8 text-white flex flex-col gap-5">
            <div>
              <h3 className="font-display font-semibold text-xl">{COMPANY_NAME}</h3>
            </div>

            <InfoRow icon={<IconUser className="h-5 w-5" />} label="Head of the Company">
              <p className="font-medium">{HEAD_NAME}</p>
              <a
                href={HEAD_PHONE_TEL}
                className="mt-0.5 inline-flex items-center gap-1.5 text-white/85 hover:text-orange transition-colors"
              >
                <IconPhone className="h-3.5 w-3.5" />
                {HEAD_PHONE_DISPLAY}
              </a>
              <a
                href={buildWhatsAppUrl(APPOINTMENT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-orange hover:text-orange-light transition-colors"
              >
                <IconWhatsApp className="h-3.5 w-3.5" />
                Request an Appointment
              </a>
            </InfoRow>

            <Divider />

            <InfoRow icon={<IconWhatsApp className="h-5 w-5" />} label="WhatsApp">
              <div className="flex flex-col gap-3">
                {WHATSAPP_NUMBERS.map((contact) => (
                  <div key={contact.tel}>
                    <p className="font-semibold tracking-wide text-white">{contact.name}</p>
                    <a
                      href={contact.tel}
                      className="font-medium text-white hover:text-orange transition-colors"
                    >
                      {contact.display}
                    </a>
                  </div>
                ))}
              </div>
            </InfoRow>

            <Divider />

            <InfoRow icon={<IconMail className="h-5 w-5" />} label="Email">
              <a
                href={EMAIL_MAILTO}
                className="font-medium hover:text-orange transition-colors break-all"
              >
                {EMAIL_DISPLAY}
              </a>
            </InfoRow>

            <Divider />

            <InfoRow icon={<IconGlobe className="h-5 w-5" />} label="Website">
              <a
                href={WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-orange transition-colors break-all"
              >
                {WEBSITE_DISPLAY}
              </a>
            </InfoRow>

            <Divider />

            <div>
              <div className="flex items-center gap-3">
                <span className="shrink-0 text-orange">
                  <IconMapPin className="h-5 w-5" />
                </span>
                <h3 className="font-display font-semibold text-lg text-white">Our Branch Locations</h3>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4">
                {BRANCHES.map((branch) => (
                  <article
                    key={branch.name}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-orange/60"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                        <IconMapPin className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <h4 className="font-display font-semibold text-orange">{branch.name}</h4>
                        <address className="mt-1 text-sm not-italic leading-relaxed text-white/85 break-words">
                          {branch.address}
                        </address>
                      </div>
                    </div>
                    <a
                      href={mapsDirectionsUrl(branch.mapsQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Get Google Maps directions to ${branch.name}`}
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange px-4 py-2.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-orange-light sm:w-auto"
                    >
                      <IconMapPin className="h-4 w-4" />
                      Get Directions
                    </a>
                  </article>
                ))}
              </div>
            </div>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-orange px-5 py-3 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-orange-light w-fit"
            >
              WhatsApp Us
            </a>

            <Divider />

            <div>
              <p className="text-white/60 text-xs uppercase tracking-wide mb-2">Follow Us</p>
              <div className="flex items-center gap-3">
                <SocialLink href={SOCIAL_INSTAGRAM} label="Instagram">
                  <IconInstagram className="h-5 w-5" />
                </SocialLink>
                <SocialLink href={SOCIAL_FACEBOOK} label="Facebook">
                  <IconFacebook className="h-5 w-5" />
                </SocialLink>
                <SocialLink href={SOCIAL_YOUTUBE} label="YouTube">
                  <IconYoutube className="h-5 w-5" />
                </SocialLink>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3 bg-surface rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
            <Field
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
              required
              type="tel"
            />

            <div className="sm:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-navy mb-1">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                placeholder="Enter your complete address"
                value={form.address}
                onChange={handleChange}
                className="w-full rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm text-ink focus:border-orange"
              />
            </div>

            <Field
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              type="email"
              className="sm:col-span-2"
            />

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-navy mb-1">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm text-ink focus:border-orange"
              >
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <Field
              label="Destination"
              name="destination"
              value={form.destination}
              onChange={handleChange}
            />
            <Field
              label="Travel Date"
              name="travelDate"
              value={form.travelDate}
              onChange={handleChange}
              type="date"
            />
            <Field
              label="Number of Travellers"
              name="travellers"
              value={form.travellers}
              onChange={handleChange}
              type="number"
              min="1"
            />

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm text-ink focus:border-orange"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-orange px-6 py-3 font-semibold text-navy shadow-md transition-all hover:-translate-y-0.5 hover:bg-orange-light"
              >
                Send Enquiry on WhatsApp
              </button>

              {status === 'success' && (
                <p role="status" className="text-sm font-medium text-green-700">
                  {statusMessage}
                </p>
              )}
              {status === 'blocked' && (
                <p role="alert" className="text-sm font-medium text-red-700">
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 text-orange">{icon}</span>
      <div className="text-sm">
        {label && <p className="text-white/60 text-xs uppercase tracking-wide mb-0.5">{label}</p>}
        {children}
      </div>
    </div>
  )
}

function Divider() {
  return <div className="border-t border-white/10" />
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-0.5 hover:scale-110 hover:bg-orange hover:text-navy"
    >
      {children}
    </a>
  )
}

function Field({ label, name, value, onChange, error, required, type = 'text', className = '', ...rest }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-navy mb-1">
        {label}
        {required && <span className="text-orange-dark"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-lg border px-3 py-2.5 text-sm text-ink focus:border-orange ${
          error ? 'border-red-400' : 'border-navy/15'
        }`}
        {...rest}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
