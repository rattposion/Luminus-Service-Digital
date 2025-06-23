import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import PromoBalloon from './components/PromoBalloon';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PainelAdmin from './components/PainelAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <PromoBalloon />
            <div className="bg-black text-white min-h-screen overflow-x-hidden">
              <Header />
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <ProjectsSection />
              <TestimonialsSection />
              <CTASection />
              <Footer />
            </div>
          </>
        } />
        <Route path="/CWpainel" element={<PainelAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;