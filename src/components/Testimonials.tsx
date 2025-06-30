import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'CEO, TechStart',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    content: 'A Luminus transformou completamente nossa presença digital. Resultados impressionantes em apenas 3 meses!',
    rating: 5,
  },
  {
    name: 'Carlos Mendes',
    role: 'Diretor, InnovaCorp',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    content: 'Equipe excepcional! O desenvolvimento do nosso sistema superou todas as expectativas. Recomendo fortemente.',
    rating: 5,
  },
  {
    name: 'Marina Costa',
    role: 'Fundadora, EcoLife',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    content: 'Estratégia digital impecável. Nossa conversão aumentou 300% com as campanhas da Luminus Service Digital.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-8xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Depoimentos
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-poppins max-w-3xl mx-auto">
            Clientes que já transformaram seus negócios conosco
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-dark-800/60 to-dark-900/90 backdrop-blur-md border border-gray-700/30 hover:border-neon-purple/40 transition-all duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-purple/5 to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-neon-purple mb-4 opacity-60" />

                {/* Content */}
                <p className="text-gray-200 font-poppins mb-6 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-neon-pink text-neon-pink" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-neon-purple/30 object-cover"
                  />
                  <div>
                    <h4 className="font-poppins font-semibold text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:animate-neon-border transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;