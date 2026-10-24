import useReveal from '../hooks/useReveal'
import { team } from '../data/team'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function TeamCard({ name, role }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal-scale card-lift h-full bg-white rounded-xl p-6 border border-navy/5 shadow-sm flex flex-col items-center text-center"
    >
      {/* Professional placeholder avatar — swap for a real photo when available */}
      <div className="h-20 w-20 rounded-full bg-navy flex items-center justify-center ring-4 ring-orange/20">
        <span className="font-display font-semibold text-xl text-orange">
          {initials(name)}
        </span>
      </div>
      <h3 className="mt-4 font-display font-semibold text-navy">{name}</h3>
      <p className="mt-1 text-sm text-orange-dark font-medium">{role}</p>
    </div>
  )
}

export default function Team() {
  const headingRef = useReveal()

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-navy">
            Our Team
          </h2>
          <p className="mt-3 text-ink/70">
            The people behind your journey.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {team.map((member) => (
            <div key={member.name} className="min-w-0">
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
