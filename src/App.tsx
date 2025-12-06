import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="bg-[#141414] min-h-screen text-white selection:bg-brand-blue selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;