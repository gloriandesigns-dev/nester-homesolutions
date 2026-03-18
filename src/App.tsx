import React from 'react';
import Hero from './components/Hero';
import AboutStats from './components/AboutStats';
import HowItWorks from './components/HowItWorks';
import ProjectsCarousel from './components/ProjectsCarousel';
import Testimonials from './components/Testimonials';
import CustomerTicker from './components/CustomerTicker';
import Footer from './components/Footer';

function App() {
  // Changed overflow-x-hidden to overflow-x-clip to prevent breaking sticky positioning while still containing horizontal overflow
  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark overflow-x-clip">
      <Hero />
      <AboutStats />
      <HowItWorks />
      <ProjectsCarousel />
      <Testimonials />
      <CustomerTicker />
      <Footer />
    </div>
  );
}

export default App;
