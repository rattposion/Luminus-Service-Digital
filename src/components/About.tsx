import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, Zap, Shield } from 'lucide-react';

const stats = [
  { number: '500+', label: 'Projetos Entregues', icon: Target },
  { number: '98%', label: 'Clientes Satisfeitos', icon: Users },
  { number: '5+', label: 'Anos de Experiência', icon: Award },
  { number: '300%', label: 'Crescimento Médio', icon: TrendingUp },
];

const values = [
  {
    icon: Zap,
    title: 'Inovação Constante',
    description: 'Sempre na vanguarda das tecnologias digitais mais avançadas.',
  },
  {
    icon: Shield,
    title: 'Resultados Garantidos',
    description: 'Comprometimento total com o sucesso dos nossos clientes.',
  },
  {
    icon: Users,
    title: 'Atendimento Premium',
    description: 'Suporte dedicado e personalizado para cada projeto.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 px-4">
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
              Sobre a Luminus
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-poppins max-w-3xl mx-auto">
            Somos especialistas em transformar ideias em realidade digital, 
            combinando estratégia, tecnologia e criatividade para resultados extraordinários.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                className="inline-flex p-4 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 mb-4 group-hover:from-neon-purple/30 group-hover:to-neon-pink/30 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className="w-8 h-8 text-neon-purple" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-400 font-poppins text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Values section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-neon-purple/50 transition-all duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <motion.div
                  className="inline-flex p-4 rounded-xl bg-gradient-to-br from-neon-purple to-neon-pink mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-orbitron font-bold text-white mb-4 group-hover:text-neon-purple transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-300 font-poppins leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-dark-800/60 to-dark-900/90 backdrop-blur-md border border-neon-purple/30">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-gray-400 font-poppins mb-6 max-w-md">
              Vamos conversar sobre como podemos acelerar seu crescimento digital.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full font-poppins font-semibold text-white hover:shadow-2xl hover:shadow-neon-pink/50 transition-all duration-300"
            >
              Falar com Especialista
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;