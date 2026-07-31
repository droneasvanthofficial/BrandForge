function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="mt-10 bg-earth-forest px-4 py-12 text-earth-cream md:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <section>
          <h2 className="font-heading text-2xl text-earth-cream">Contact Us</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed">
            <p>
              <span className="font-semibold">Administration Office:</span>
              <br />
              No. 42, Lenin Street, Kosapalayam, Puducherry - 605013
            </p>
            <p>
              <span className="font-semibold">Field Office:</span>
              <br />
              No. 72, Nallavadu Road, Thavalakuppam, Abishegapakkam Post, Puducherry - 605007
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-earth-cream">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="focus-ring rounded-sm hover:text-earth-leaf" href="#home">Home</a></li>
            <li><a className="focus-ring rounded-sm hover:text-earth-leaf" href="#about">About Us</a></li>
            <li><a className="focus-ring rounded-sm hover:text-earth-leaf" href="#focus-areas">Focus Areas</a></li>
            <li><a className="focus-ring rounded-sm hover:text-earth-leaf" href="#consultancy-centre">Consultancy Centre</a></li>
            <li><a className="focus-ring rounded-sm hover:text-earth-leaf" href="#our-products">Our Products</a></li>
            <li><a className="focus-ring rounded-sm hover:text-earth-leaf" href="#partnerships">Partnerships</a></li>
            <li><a className="focus-ring rounded-sm hover:text-earth-leaf" href="#media">Media</a></li>
            <li><a className="focus-ring rounded-sm hover:text-earth-leaf" href="#news-events">News & Events</a></li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-earth-cream">Partners</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="focus-ring rounded-sm hover:text-earth-leaf" href="https://pias.org.in" target="_blank" rel="noreferrer">
                PIAS - pias.org.in
              </a>
            </li>
            <li>
              <a className="focus-ring rounded-sm hover:text-earth-leaf" href="https://greendayorganics.com" target="_blank" rel="noreferrer">
                Green Day Organics - greendayorganics.com
              </a>
            </li>
          </ul>
        </section>
      </div>

      <p className="mx-auto mt-10 max-w-7xl border-t border-earth-leaf/25 pt-6 text-center text-sm text-earth-cream/80">
        © {year} Centre for Environment and Agricultural Development (CEAD). All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
