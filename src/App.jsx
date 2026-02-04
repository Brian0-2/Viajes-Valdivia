import { useEffect } from 'react';
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Aos from 'aos';

function App() {

  useEffect(() => {
    Aos.init({
      once: true
    });
  }, [])
  
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
