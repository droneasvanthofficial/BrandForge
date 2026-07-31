import { useScrollReveal } from '../hooks/useScrollReveal'

function Hero() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="home" className="px-4 pb-14 pt-10 md:px-6 md:pt-16">
      <div
        ref={ref}
        className={`reveal mx-auto max-w-7xl overflow-hidden rounded-3xl border border-earth-moss/20 bg-white/85 p-7 shadow-card md:p-12 ${isVisible ? 'is-visible' : ''}`}
      >
        <p className="mb-3 inline-flex rounded-full bg-earth-leaf/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-earth-forest">
          Puducherry, India
        </p>
        <h1 className="font-heading text-4xl font-semibold text-earth-forest sm:text-5xl md:text-6xl">Welcome to CEAD</h1>
        <p className="mt-6 max-w-4xl text-base leading-relaxed text-earth-bark sm:text-lg">
          CEAD is a non-governmental organization engaged in the betterment of farming communities — particularly women and
          landless labourers — through training in environmentally sustainable income generation, micro-credit access, and
          improved education and health services.
        </p>
        <p className="mt-5 max-w-4xl rounded-2xl border border-earth-soil/20 bg-earth-cream px-5 py-4 text-sm leading-relaxed text-earth-bark sm:text-base">
          Started in 2003 by like-minded youth from agriculture, environmental science, medicine, commerce, and computer science
          backgrounds. CEAD is led by <span className="font-semibold text-earth-forest">Mr. C. Ganeche, M.Sc (Agr.), Ph.D (Envt)</span>.
        </p>
      </div>
    </section>
  )
}

export default Hero
