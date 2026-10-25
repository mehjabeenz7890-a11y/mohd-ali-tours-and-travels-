import useReveal from '../../hooks/useReveal'

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScfMmnRRRi0ZPATGqlFGExVJ0TD9fstfEeei1JwBdle7HeULg/viewform?embedded=true'

export default function JobOpportunities() {
  const headingRef = useReveal()
  const formRef = useReveal()

  const scrollToForm = () => {
    document.getElementById('job-application-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="careers" className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-navy">
            Job Opportunities
          </h2>
          <p className="mt-3 text-ink/70 max-w-2xl mx-auto">
            We're always looking for driven people to join our travel team.
            Fill out the application form below and we'll be in touch.
          </p>

          <button
            onClick={scrollToForm}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-orange px-7 py-3.5 font-semibold text-navy shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-xl hover:bg-orange-light"
          >
            Apply Now
          </button>
        </div>

        <div
          ref={formRef}
          id="job-application-form"
          className="reveal mt-14 scroll-mt-24 rounded-2xl bg-white p-3 sm:p-4 shadow-xl shadow-navy/10 border border-navy/5"
        >
          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            title="MOHD ALI TOURS & TRAVELS — Job Application Form"
            className="w-full rounded-xl"
            height="900"
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  )
}
