const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Profile', href: '#profile' },
  { label: 'Director Message', href: '#director-message' },
  { label: 'Advisory Committee', href: '#advisory-committee' },
  { label: 'Focus Areas', href: '#focus-areas' },
  { label: 'Agriculture', href: '#focus-agriculture' },
  { label: 'Environment', href: '#focus-environment' },
  { label: 'Women Empowerment', href: '#focus-women-empowerment' },
  { label: 'Agro Tourism', href: '#focus-agro-tourism' },
  { label: 'Livelihood', href: '#focus-livelihood' },
  { label: 'Consultancy Centre', href: '#consultancy-centre' },
  { label: 'Our Products', href: '#our-products' },
  { label: 'Vermi Compost', href: '#product-vermi-compost' },
  { label: 'Vermi Wash', href: '#product-vermi-wash' },
  { label: 'Organic Greens', href: '#product-organic-greens' },
  { label: 'Enriched Pot Mixture', href: '#product-enriched-pot-mixture' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'National', href: '#partnership-national' },
  { label: 'International', href: '#partnership-international' },
  { label: 'Media', href: '#media' },
  { label: 'News & Events', href: '#news-events' },
  { label: 'Contact Us', href: '#contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-earth-moss/20 bg-earth-cream/95 backdrop-blur-sm">
      <div className="bg-earth-forest px-4 py-2 text-sm text-earth-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <a href="tel:+919894313435" className="focus-ring rounded-sm hover:text-earth-leaf">
            +91 98943 13435
          </a>
          <a href="mailto:ceadngo@gmail.com" className="focus-ring rounded-sm hover:text-earth-leaf">
            ceadngo@gmail.com
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <a href="#home" className="focus-ring rounded-sm text-2xl font-semibold tracking-wide text-earth-forest">
            CEAD
          </a>
          <p className="text-right text-xs font-medium text-earth-soil sm:text-sm">Centre for Environment and Agricultural Development</p>
        </div>
        <nav aria-label="Primary" className="overflow-x-auto pb-1">
          <ul className="flex min-w-max gap-2 text-sm text-earth-bark">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="focus-ring inline-block rounded-full border border-earth-moss/25 bg-white/70 px-3 py-1.5 hover:border-earth-moss hover:text-earth-forest"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
