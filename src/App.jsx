import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import WhatIsCEAD from './components/WhatIsCEAD'
import Gallery from './components/Gallery'
import MediaSection from './components/MediaSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-earth-organic">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <WhatIsCEAD />
        <Gallery />
        <MediaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
