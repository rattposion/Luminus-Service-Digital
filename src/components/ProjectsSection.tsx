import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'webapp', name: 'Web Apps' }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechStore Brasil',
      category: 'ecommerce',
      description: 'E-commerce completo com integração de pagamentos e gestão de estoque',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'Stripe', 'AWS'],
      metrics: { sales: '+250%', conversion: '15.3%' }
    },
    {
      id: 2,
      title: 'FitLife App',
      category: 'webapp',
      description: 'Aplicativo web para acompanhamento de exercícios e nutrição',
      image: 'https://images.pexels.com/photos/4474035/pexels-photo-4474035.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next.js', 'Firebase', 'PWA', 'Chart.js'],
      metrics: { users: '50k+', engagement: '85%' }
    },
    {
      id: 3,
      title: 'Campanha Digital Sucesso',
      category: 'marketing',
      description: 'Estratégia de marketing digital que aumentou ROI em 300%',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Google Ads', 'Facebook Ads', 'Analytics', 'CRO'],
      metrics: { roi: '+300%', ctr: '12.8%' }
    },
    {
      id: 4,
      title: 'RestaurantePro',
      category: 'webapp',
      description: 'Sistema de gestão completo para restaurantes e delivery',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
      metrics: { orders: '+180%', efficiency: '95%' }
    },
    {
      id: 5,
      title: 'ModaStyle',
      category: 'ecommerce',
      description: 'Loja virtual de moda com experiência de compra premium',
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Shopify', 'Custom Theme', 'Instagram API', 'AR Try-on'],
      metrics: { revenue: '+400%', satisfaction: '9.8/10' }
    },
    {
      id: 6,
      title: 'Lead Generation Pro',
      category: 'marketing',
      description: 'Funil de conversão otimizado para geração de leads B2B',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Landing Pages', 'Email Marketing', 'CRM', 'Automation'],
      metrics: { leads: '+500%', cost: '-60%' }
    }
  ];

  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400 font-semibold text-lg mb-4 block"
          >
            Nossos Projetos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent max-w-3xl mx-auto"
          >
            Cases de sucesso que transformaram negócios
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Cada projeto é uma jornada única de inovação, criatividade e resultados excepcionais
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-500/50 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-500/50 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex justify-between text-sm">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-purple-400 font-bold">{value}</div>
                      <div className="text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Ver Mais Projetos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;