import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import Logo from './Logo';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-900 to-black" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <Logo />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
            Transforme suas ideias
          </span>
          <br />
          <span className="text-white">
            em presença digital
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl font-poppins text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Marketing, tecnologia e estratégia que brilham no universo digital
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={() => scrollToSection('#pricing')}
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full font-poppins font-semibold text-white text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping" />
          </button>

          <button 
            onClick={() => scrollToSection('#portfolio')}
            className="group px-8 py-4 border-2 border-neon-purple text-neon-purple rounded-full font-poppins font-semibold text-lg hover:bg-neon-purple hover:text-white transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Ver Portfólio
            </span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: '500+', label: 'Projetos' },
            { number: '98%', label: 'Satisfação' },
            { number: '5+', label: 'Anos' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-orbitron font-bold text-neon-purple mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 font-poppins">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12 text-sm font-poppins text-gray-500 uppercase tracking-wider"
        >
          Onde o digital ganha luz
        </motion.p>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-neon-pink rounded-full opacity-60"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-6 h-6 bg-neon-purple rounded-full opacity-40"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;