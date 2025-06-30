import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CustomQuote from './components/CustomQuote';
import Footer from './components/Footer';
import PromoModal from './components/PromoModal';
import WhatsAppButton from './components/WhatsAppButton';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [modalDismissed, setModalDismissed] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Se a modal já foi dispensada, não mostrar novamente
    if (modalDismissed) return;

    const timer = setTimeout(() => {
      setShowPromoModal(true);
    }, 8000); // Aumentado para 8 segundos

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setShowPromoModal(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [modalDismissed]);

  const handleCloseModal = () => {
    setShowPromoModal(false);
    setModalDismissed(true);
  };

  return (
    <div className="bg-dark-900 text-gray-100 overflow-x-hidden">
      <ParticleBackground />
      
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple to-neon-pink z-50"
        style={{ scaleX: scrollYProgress }}
        transformOrigin="0%"
      />

      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="pricing">
          <CustomQuote />
        </section>
      </main>

      <Footer />
      
      <WhatsAppButton />
      <PromoModal isOpen={showPromoModal} onClose={handleCloseModal} />
    </div>
  );
}

export default App;