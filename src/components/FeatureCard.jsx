function FeatureCard({ id, title, points }) {
  return (
    <article
      id={id}
      className="group rounded-3xl border border-earth-moss/20 bg-white/80 p-6 shadow-card transition-transform duration-300 hover:-translate-y-1"
    >
      <h3 className="font-heading text-2xl text-earth-forest">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-earth-bark">
        {points.map((point) => (
          <li key={point} className="rounded-xl bg-earth-cream px-3 py-2 group-hover:bg-earth-leaf/20">
            {point}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default FeatureCard
