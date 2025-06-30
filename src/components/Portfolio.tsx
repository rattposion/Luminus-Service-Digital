import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Smartphone, Globe } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Premium',
    category: 'Desenvolvimento Web',
    description: 'Plataforma completa de vendas online com integração de pagamentos e gestão avançada.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    icon: Globe,
    results: '+250% conversões',
  },
  {
    title: 'App Fitness Revolution',
    category: 'Aplicativo Mobile',
    description: 'Aplicativo de treinos personalizados com IA e acompanhamento em tempo real.',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    technologies: ['React Native', 'Firebase', 'AI/ML', 'Analytics'],
    icon: Smartphone,
    results: '50k+ downloads',
  },
  {
    title: 'Dashboard Analytics Pro',
    category: 'Sistema Web',
    description: 'Painel de controle avançado para análise de dados e métricas empresariais.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js'],
    icon: Code,
    results: '90% eficiência',
  },
  {
    title: 'Campanha Social Media - Verão Viral',
    category: 'Marketing Digital',
    description: 'Campanha de engajamento para marca de moda, com aumento expressivo de seguidores e vendas.',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    technologies: ['Instagram', 'Facebook', 'Canva', 'Meta Ads'],
    icon: Globe,
    results: '+10k seguidores em 1 mês',
  },
  {
    title: 'Email Marketing Black Friday',
    category: 'Email Marketing',
    description: 'Sequência de e-mails automatizados para e-commerce, gerando alta taxa de abertura e conversão.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    technologies: ['Mailchimp', 'RD Station', 'Copywriting'],
    icon: Smartphone,
    results: '35% taxa de abertura',
  },
  {
    title: 'Landing Page Copywriting',
    category: 'Copywriting',
    description: 'Landing page otimizada para conversão, com textos persuasivos e design responsivo.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    technologies: ['Figma', 'Copywriting', 'Google Analytics'],
    icon: Code,
    results: '18% conversão',
  },
  {
    title: 'Gestão de Tráfego - Loja de Calçados',
    category: 'Gestão de Tráfego',
    description: 'Campanhas otimizadas no Google Ads e Meta Ads para loja física e online.',
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    technologies: ['Google Ads', 'Meta Ads', 'Analytics'],
    icon: Globe,
    results: '+120% vendas',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="relative py-20 px-4">
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
              Nosso Portfólio
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-poppins max-w-3xl mx-auto">
            Projetos que transformaram negócios e geraram resultados extraordinários
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-dark-800/60 to-dark-900/90 backdrop-blur-md border border-gray-700/30 hover:border-neon-purple/50 transition-all duration-500"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-dark-900/80 backdrop-blur-sm rounded-full border border-neon-purple/30">
                    <project.icon className="w-4 h-4 text-neon-purple" />
                    <span className="text-xs font-poppins text-gray-300">{project.category}</span>
                  </div>
                </div>

                {/* Results badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full">
                    <span className="text-xs font-poppins font-semibold text-white">{project.results}</span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 font-poppins mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-700/50 rounded-md text-xs font-poppins text-gray-400 border border-gray-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 font-poppins mb-6">
            Quer ver seu projeto aqui também?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-neon-purple text-neon-purple font-poppins font-semibold rounded-full hover:bg-neon-purple hover:text-white transition-all duration-300"
          >
            Iniciar Meu Projeto
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;