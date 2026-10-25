import useReveal from '../../hooks/useReveal'

// Exactly the 6 travel landmarks requested. Files live in
// /public/images/gallery/ — swap any file for a real photo whenever
// you have one, without touching this list.
const GALLERY_IMAGES = [
  { src: '/images/gallery/statue-of-liberty.jpg', alt: 'Statue of Liberty, USA' },
  { src: '/images/gallery/eiffel-tower.jpg', alt: 'Eiffel Tower, France' },
  { src: '/images/gallery/big-ben.jpg', alt: 'Elizabeth Tower (Big Ben), United Kingdom' },
  { src: '/images/gallery/burj-khalifa.jpg', alt: 'Burj Khalifa, UAE' },
  { src: '/images/gallery/india-gate.jpg', alt: 'India Gate, India' },
  { src: '/images/gallery/niagara-falls.jpg', alt: 'Niagara Falls, Canada/USA' }
]

function GalleryTile({ src, alt }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal-scale group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md bg-navy/5"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextElementSibling.style.display = 'flex'
        }}
      />
      <div className="gallery-overlay pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hidden absolute inset-0 items-center justify-center text-navy/40 text-sm font-medium bg-navy/5 text-center px-3">
        Add photo: {src.replace('/images/gallery/', '')}
      </div>
    </div>
  )
}

export default function Gallery() {
  const headingRef = useReveal()

  return (
    <section id="gallery" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-navy">
            Gallery
          </h2>
          <p className="mt-3 text-ink/70">A few moments from our travellers' journeys.</p>
        </div>
        {/* Mobile: 1 column · Tablet: 2 columns · Desktop: 3 columns x 2 rows */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <GalleryTile key={img.src} {...img} />
          ))}
        </div>
      </div>
    </section>
  )
}
