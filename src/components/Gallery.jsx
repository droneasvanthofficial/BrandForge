import { galleryImages } from '../assets/placeholderData'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Gallery() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="gallery" className="px-4 py-8 md:px-6 md:py-12" aria-labelledby="gallery-title">
      <div ref={ref} className={`reveal mx-auto max-w-7xl ${isVisible ? 'is-visible' : ''}`}>
        <h2 id="gallery-title" className="font-heading text-3xl text-earth-forest md:text-4xl">
          CEAD Gallery
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-2xl border border-earth-moss/20 bg-white/70 shadow-card">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-60 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
