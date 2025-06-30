import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Phone, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Planos', href: '#pricing' },
    { name: 'Contato', href: '#footer' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-dark-900/95 backdrop-blur-md border-b border-gray-800/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center h-12">
              <img
                src="/WhatsApp%20Image%202025-06-26%20at%2007.16.49.jpeg"
                alt="Logo Luminus Service Digital"
                className="h-12 w-auto rounded-lg shadow-md border-2 border-neon-purple bg-dark-900 object-contain"
                style={{ maxHeight: '48px' }}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-neon-purple transition-colors font-poppins font-medium"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Contact Info */}
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-700">
                <a
                  href="tel:+(61) 99431-8981"
                  className="flex items-center gap-2 text-gray-400 hover:text-neon-purple transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-poppins">(61) 99431-8981</span>
                </a>
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/5561994318981"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full font-poppins font-semibold text-white text-sm hover:shadow-lg hover:shadow-neon-pink/30 transition-all duration-300 flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <Sparkles className="w-4 h-4" />
                Orçamento
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-dark-800 border border-gray-700 flex items-center justify-center hover:border-neon-purple transition-colors"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-dark-900/98 backdrop-blur-md border-t border-gray-800/50"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-gray-300 hover:text-neon-purple transition-colors font-poppins font-medium py-2"
                  >
                    {item.name}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-gray-800">
                  <a
                    href="tel:+(61) 99431-8981"
                    className="flex items-center gap-3 text-gray-400 hover:text-neon-purple transition-colors py-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-poppins">(61) 99431-8981</span>
                  </a>
                  
                  <a
                    href="https://wa.me/5561994318981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full font-poppins font-semibold text-white flex items-center justify-center gap-2"
                    style={{ textDecoration: 'none' }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;