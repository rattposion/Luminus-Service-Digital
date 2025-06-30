import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const CustomQuote: React.FC = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo da empresa */}
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Solicite seu Orçamento
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-poppins max-w-2xl mx-auto mb-8">
            Cada projeto é único! Conte para a gente o que você precisa e receba uma proposta personalizada, feita sob medida para o seu negócio. Nossa equipe está pronta para criar soluções digitais que realmente fazem a diferença.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="https://wa.me/5561994318981" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full font-poppins font-semibold text-white text-lg shadow-lg hover:shadow-neon-pink/50 transition-all duration-300"
            >
              Solicitar Orçamento via WhatsApp
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomQuote; 