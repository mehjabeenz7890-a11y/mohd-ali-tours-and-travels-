// `code` is the ISO 3166-1 alpha-2 country code, used to render the real
// flag as the card background (via the flag-icons library — see index.html).
const destinations = [
  { code: 'IN', country: 'India', blurb: 'Domestic flights and holiday packages across every region.' },
  { code: 'AE', country: 'UAE', blurb: 'Dubai & Abu Dhabi flights, hotels and visit visas.' },
  { code: 'SA', country: 'Saudi Arabia', blurb: 'Work permits, Umrah travel and visit visa support.' },
  { code: 'QA', country: 'Qatar', blurb: 'Flights, hotels and GCC visit visa assistance.' },
  { code: 'OM', country: 'Oman', blurb: 'Visit visas, flights and travel planning.' },
  { code: 'KW', country: 'Kuwait', blurb: 'Work permits and GCC visit visa processing.' },
  { code: 'BH', country: 'Bahrain', blurb: 'Flights, hotels and visa enquiry support.' },
  { code: 'GB', country: 'United Kingdom', blurb: 'Visit visas, flights and tour packages.' },
  { code: 'FR', country: 'France', blurb: 'Europe visit visa and curated tour packages.' },
  { code: 'IT', country: 'Italy', blurb: 'Flights, hotels and Europe tour packages.' },
  { code: 'DE', country: 'Germany', blurb: 'Europe visit visa assistance and travel planning.' },
  { code: 'CH', country: 'Switzerland', blurb: 'Scenic tour packages and visa support.' },
  { code: 'ES', country: 'Spain', blurb: 'Europe visit visa and holiday packages.' },
  { code: 'US', country: 'USA', blurb: 'Flights, hotels and visa enquiry assistance.' },
  { code: 'CA', country: 'Canada', blurb: 'Flights, hotels and travel planning support.' },
  { code: 'AU', country: 'Australia', blurb: 'Flights, hotels and tour package enquiries.' },
  { code: 'NZ', country: 'New Zealand', blurb: 'Flights and curated holiday packages.' },
  { code: 'TR', country: 'Turkey', blurb: 'Popular tour packages and flight bookings.' },
  { code: 'MY', country: 'Malaysia', blurb: 'Flights, hotels and family tour packages.' },
  { code: 'SG', country: 'Singapore', blurb: 'Flights, hotels and holiday packages.' },
  { code: 'TH', country: 'Thailand', blurb: 'Popular getaway packages and flight deals.' },
  { code: 'ID', country: 'Indonesia', blurb: 'Bali and beyond — flights and tour packages.' }
]

export default destinations
