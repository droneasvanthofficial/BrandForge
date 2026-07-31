import { paperNews } from '../assets/placeholderData'
import { useScrollReveal } from '../hooks/useScrollReveal'

function MediaSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="media" className="px-4 py-8 md:px-6 md:py-12" aria-labelledby="media-title">
      <div ref={ref} className={`reveal mx-auto max-w-7xl space-y-8 ${isVisible ? 'is-visible' : ''}`}>
        <div>
          <h2 id="media-title" className="font-heading text-3xl text-earth-forest md:text-4xl">
            CEAD TV News
          </h2>
          <div className="mt-4 overflow-hidden rounded-3xl border border-earth-moss/20 bg-white p-2 shadow-card">
            <div className="aspect-video">
              <iframe
                className="h-full w-full rounded-2xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="CEAD TV News"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div id="news-events">
          <h3 className="font-heading text-2xl text-earth-forest md:text-3xl">CEAD Paper News</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {paperNews.map((item) => (
              <article key={item} className="rounded-2xl border border-earth-moss/20 bg-white/80 p-4 shadow-card">
                <p className="font-medium text-earth-bark">{item}</p>
                <p className="mt-2 text-sm text-earth-soil">Press clipping placeholder</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaSection
