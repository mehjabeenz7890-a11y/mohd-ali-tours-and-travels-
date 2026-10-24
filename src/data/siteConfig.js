export const COMPANY_NAME = 'MOHD ALI TOURS & TRAVELS'
export const TAGLINE = 'YOUR TRUST ✈ OUR STRENGTH'
export const ADDRESS = 'Attapur, Pillar No. 184, Opp. Mantra Mall, Medispace Eye Clinic Building, 2nd Floor'

// WhatsApp — primary number (used for the enquiry form, floating button,
// "WhatsApp Us" CTAs) plus two additional numbers shown in the Contact card.
export const WHATSAPP_DISPLAY = '+91 63056 16909'
export const WHATSAPP_INTL = '916305616909'

// Static greeting used ONLY by the normal WhatsApp icon/CTA (floating
// button, "WhatsApp Us" buttons, the WhatsApp numbers listed in the
// Contact card). This never contains customer/enquiry data — the
// enquiry form builds its own separate message in Contact.jsx.
export const WHATSAPP_DEFAULT_MESSAGE = `Thank you for contacting ${COMPANY_NAME}. ✈️

We have received your enquiry and will get back to you shortly.

For urgent assistance, you can contact us directly on WhatsApp:
${WHATSAPP_DISPLAY}`

export const WHATSAPP_NUMBERS = [
  { name: 'MOHD ASLAM', display: '+91 72870 77842', tel: 'tel:+917287077842' },
  { name: 'MOHD IFRAN', display: '+91 72078 57679', tel: 'tel:+917207857679' },
  { name: 'OFFICE', display: WHATSAPP_DISPLAY, tel: `tel:+${WHATSAPP_INTL}` }
]

export function buildWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE, intl = WHATSAPP_INTL) {
  return `https://wa.me/${intl}?text=${encodeURIComponent(message)}`
}

// Head of company
export const HEAD_NAME = 'Mohd Hussain'
export const HEAD_PHONE_DISPLAY = '7997071725'
export const HEAD_PHONE_TEL = 'tel:+917997071725'

// Static WhatsApp template for requesting an appointment with the Head of
// the Company. Blank fields are filled in by the customer inside WhatsApp
// itself — same pattern as WHATSAPP_DEFAULT_MESSAGE above.
export const APPOINTMENT_MESSAGE = `Hello ${COMPANY_NAME},

I would like to request an appointment with the Head of the Company.

Name:
Phone:
Preferred Date:
Preferred Time:
Purpose of Appointment:

Please confirm my appointment.

Thank you.`

// Website
export const WEBSITE_DISPLAY = 'www.mohdalitoursandtravels.com'
export const WEBSITE_URL = 'https://www.mohdalitoursandtravels.com'

// Social media — exact current links, single source of truth
export const SOCIAL_INSTAGRAM = 'https://www.instagram.com/mohd_ali_official22'
export const SOCIAL_FACEBOOK = 'https://www.facebook.com/mohd.ali.815878/'
export const SOCIAL_YOUTUBE = 'https://www.youtube.com/watch?v=6ZbLCbY-D0Q'

// Email
export const EMAIL_DISPLAY = 'Syedalivisaprocess@gmail.com'
export const EMAIL_MAILTO = 'mailto:Syedalivisaprocess@gmail.com'
