import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Estratégias data-driven para maximizar ROI e conversões'
    },
    {
      icon: Users,
      title: 'Time Especializado',
      description: 'Profissionais experientes em marketing e desenvolvimento'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Projetos de alta qualidade com padrões internacionais'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Acelerado',
      description: 'Soluções que escalam junto com seu negócio'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-purple-400 font-semibold text-lg mb-4 block"
            >
              Sobre Nós
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Impulsionando o futuro digital das empresas
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg mb-8 leading-relaxed"
            >
              Na Luminus Service Digital, combinamos criatividade, tecnologia e estratégia para criar 
              experiências digitais que conectam marcas aos seus públicos. Nossa missão é transformar 
              visões em realidade através de soluções inovadoras e resultados mensuráveis.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mb-12"
            >
              Com expertise em marketing digital e desenvolvimento fullstack, oferecemos soluções 
              completas que abrangem desde a estratégia até a execução, garantindo resultados 
              excepcionais para nossos clientes.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Conheça Nossa História
            </motion.button>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.15)"
                }}
                className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 group hover:border-purple-500/40 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;