import { useScrollReveal } from '../hooks/useScrollReveal'

const focusAreas = [
  { id: 'focus-agriculture', title: 'Agriculture', summary: 'Organic farming, precision farming, mechanization, and stronger farmer-market linkages.' },
  { id: 'focus-environment', title: 'Environment', summary: 'Afforestation, carbon-focused initiatives, and practical awareness programmes.' },
  { id: 'focus-women-empowerment', title: 'Women Empowerment', summary: 'Training, SHG strengthening, and micro-credit pathways for women-led growth.' },
  { id: 'focus-agro-tourism', title: 'Agro Tourism', summary: 'Farm-based experiential learning and eco-friendly rural tourism engagement.' },
  { id: 'focus-livelihood', title: 'Livelihood', summary: 'Income generation support for landless labourers and vulnerable rural families.' },
]

const products = [
  { id: 'product-vermi-compost', title: 'Vermi Compost' },
  { id: 'product-vermi-wash', title: 'Vermi Wash' },
  { id: 'product-organic-greens', title: 'Organic Greens' },
  { id: 'product-enriched-pot-mixture', title: 'Enriched Pot Mixture' },
]

function AboutSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="px-4 py-8 md:px-6 md:py-12">
      <div ref={ref} className={`reveal mx-auto grid max-w-7xl gap-6 ${isVisible ? 'is-visible' : ''}`}>
        <article id="profile" className="rounded-3xl border border-earth-moss/20 bg-white/80 p-6 shadow-card md:p-8">
          <h2 className="font-heading text-3xl text-earth-forest md:text-4xl">About Us</h2>
          <p className="mt-3 leading-relaxed text-earth-bark">
            CEAD works with communities to create resilient farming systems and stronger village institutions through practical,
            science-backed and people-centered development programmes.
          </p>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          <article id="director-message" className="rounded-3xl border border-earth-soil/20 bg-earth-cream p-6">
            <h3 className="font-heading text-2xl text-earth-forest">Director Message</h3>
            <p className="mt-3 leading-relaxed text-earth-bark">
              “Our commitment is to build dignified livelihoods with ecological responsibility, where farmers and women’s groups
              lead progress in their own villages.”
            </p>
          </article>
          <article id="advisory-committee" className="rounded-3xl border border-earth-soil/20 bg-earth-cream p-6">
            <h3 className="font-heading text-2xl text-earth-forest">Advisory Committee</h3>
            <p className="mt-3 leading-relaxed text-earth-bark">
              CEAD’s advisory network includes professionals from agriculture, environment, health, and social development sectors,
              supporting strategic and field-level initiatives.
            </p>
          </article>
        </div>

        <article id="focus-areas" className="rounded-3xl border border-earth-moss/20 bg-white/80 p-6 shadow-card md:p-8">
          <h3 className="font-heading text-2xl text-earth-forest md:text-3xl">Focus Areas</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area.id} id={area.id} className="rounded-2xl border border-earth-moss/20 bg-earth-cream p-4">
                <h4 className="font-heading text-xl text-earth-forest">{area.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-earth-bark">{area.summary}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          <article id="our-products" className="rounded-3xl border border-earth-moss/20 bg-white/80 p-6 shadow-card">
            <h3 className="font-heading text-2xl text-earth-forest">Our Products</h3>
            <ul className="mt-4 space-y-2">
              {products.map((product) => (
                <li key={product.id} id={product.id} className="rounded-xl border border-earth-soil/20 bg-earth-cream px-4 py-2">
                  {product.title}
                </li>
              ))}
            </ul>
          </article>

          <article id="partnerships" className="rounded-3xl border border-earth-moss/20 bg-white/80 p-6 shadow-card">
            <h3 className="font-heading text-2xl text-earth-forest">Partnerships</h3>
            <div className="mt-4 space-y-3">
              <div id="partnership-national" className="rounded-xl border border-earth-soil/20 bg-earth-cream px-4 py-3">
                <p className="font-semibold text-earth-forest">National</p>
                <p className="text-sm text-earth-bark">Collaborations with local institutions, farmers groups, and social development partners.</p>
              </div>
              <div id="partnership-international" className="rounded-xl border border-earth-soil/20 bg-earth-cream px-4 py-3">
                <p className="font-semibold text-earth-forest">International</p>
                <p className="text-sm text-earth-bark">Knowledge exchange with global sustainability and environment-focused organisations.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
