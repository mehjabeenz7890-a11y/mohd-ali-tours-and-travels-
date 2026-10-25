import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { COMPANY_NAME } from '../data/siteConfig'

const NAV_ITEMS = [
  { label: 'Home', to: 'home' },
  { label: 'About Us', to: 'about' },
  { label: 'Team', to: 'team' },
  { label: 'Services', to: 'services' },
  { label: 'Visa Services', to: 'visa-services' },
  { label: 'Tour Packages', to: 'tour-packages' },
  { label: 'Careers', to: 'careers' },
  { label: 'Contact Us', to: 'contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goToSection = (id) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for home to mount, then scroll.
      requestAnimationFrame(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 60)
      })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 bg-navy ${
        scrolled ? 'shadow-lg shadow-navy/30' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        <Link
          to="/"
          onClick={() => goToSection('home')}
          className="flex items-center gap-3 shrink-0"
          aria-label={`${COMPANY_NAME} — Home`}
        >
          {/* Official logo */}
          <img
            src="/images/ma-logo.jpg"
            alt={`${COMPANY_NAME} logo`}
            className="h-11 sm:h-14 w-11 sm:w-14 object-contain rounded-full bg-white shrink-0"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling.style.display = 'flex'
            }}
          />
          <div
            className="hidden h-11 sm:h-14 w-11 sm:w-14 items-center justify-center rounded-full bg-orange text-navy font-display font-bold shrink-0"
            aria-hidden="true"
          >
            MA
          </div>
          <span className="hidden sm:block text-white font-display font-semibold text-lg leading-tight">
            {COMPANY_NAME}
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <button
                onClick={() => goToSection(item.to)}
                className="nav-link text-white/90 hover:text-orange transition-colors font-medium text-sm tracking-wide"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden text-white p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out bg-navy-dark ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-4 pb-4 gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <button
                onClick={() => goToSection(item.to)}
                className="w-full text-left py-3 text-white/90 hover:text-orange transition-colors font-medium"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
