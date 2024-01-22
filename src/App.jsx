import './App.css'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Offer from './components/Offer'
import Testimonial from './components/Testimonial'
import WhySection from './components/WhySection'

function App() {

  return (
    <>
     <NavBar />
     <Hero />
     <WhySection />
     <Testimonial />
     <Faqs />
     <Offer />
     <Footer />
    </>
  )
}

export default App
