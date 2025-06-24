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
import AdminLogin from './components/AdminLogin';

function App() {
  const [isAdmin, setIsAdmin] = React.useState(() => localStorage.getItem('admin_token') === 'logado');

  const handleLogin = () => setIsAdmin(true);
  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAdmin(false);
  };

  if (window.location.pathname === '/CWpainel') {
    if (!isAdmin) return <AdminLogin onLogin={handleLogin} />;
    return <div>
      <div className="flex justify-end p-4"><button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded font-bold hover:bg-red-600">Sair</button></div>
      <PainelAdmin />
    </div>;
  }

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