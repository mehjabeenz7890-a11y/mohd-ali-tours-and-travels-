import useReveal from '../../hooks/useReveal'
import { COMPANY_NAME } from '../siteConfig'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-20 bg-white">
      <div ref={ref} className="reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-navy">
          About {COMPANY_NAME}
        </h2>
        <p className="mt-3 text-lg sm:text-xl font-display font-semibold text-orange-dark">
          Your trusted partner for every journey.
        </p>
        <p className="mt-5 text-ink/80 text-base sm:text-lg leading-relaxed">
          {COMPANY_NAME} connects you to destinations across the world with
          reliable travel solutions. From flight tickets and visas to{' '}
          <strong className="font-semibold text-navy">
            Europe visit visa assistance
          </strong>
          , hotels and tour packages, we provide trusted support for a smooth
          travel experience.
        </p>
      </div>
    </section>
  )
}
