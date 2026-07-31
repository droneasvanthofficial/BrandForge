import FeatureCard from './FeatureCard'
import { useScrollReveal } from '../hooks/useScrollReveal'

const featureData = [
  {
    id: 'consultancy-centre',
    title: 'Consultancy Centre',
    points: ['Organic Farming', 'Precision Farming', 'Sustainable Agriculture', 'Roof Top Garden', 'Integrated Farming System'],
  },
  {
    id: 'environment-programmes',
    title: 'Environment',
    points: ['Solid Waste Management', 'Afforestation Programme & Carbon Trading', 'Awareness Programmes'],
  },
  {
    id: 'agriculture-programmes',
    title: 'Agriculture',
    points: ['Organic Farming', 'Precision Farming', 'Integrated Farming System', 'Mechanization in Paddy', 'Government Linkages'],
  },
  {
    id: 'development-programmes',
    title: 'Development',
    points: [
      'Village Development Projects',
      'Village Farmers Association Formation',
      'Men/Women SHG Formation',
    ],
  },
]

function WhatIsCEAD() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="px-4 py-8 md:px-6 md:py-12" aria-labelledby="what-is-cead-title">
      <div ref={ref} className={`reveal mx-auto max-w-7xl ${isVisible ? 'is-visible' : ''}`}>
        <h2 id="what-is-cead-title" className="font-heading text-3xl text-earth-forest md:text-4xl">
          What is CEAD?
        </h2>
        <p className="mt-3 max-w-3xl text-earth-bark">
          CEAD combines technical support, community institution building, and environmental stewardship to strengthen long-term
          village resilience.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {featureData.map((feature) => (
            <FeatureCard key={feature.id} id={feature.id} title={feature.title} points={feature.points} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIsCEAD
