import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Share2, 
  Globe, 
  Code, 
  Search,
  TrendingUp,
  Smartphone,
  ShoppingCart
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: 'Tráfego Pago',
      description: 'Google Ads, Facebook Ads e campanhas otimizadas para máximo ROI',
      features: ['Google Ads', 'Facebook & Instagram Ads', 'LinkedIn Ads', 'Remarketing']
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Gestão completa de redes sociais com conteúdo estratégico',
      features: ['Gestão de Redes', 'Criação de Conteúdo', 'Design Gráfico', 'Influencers']
    },
    {
      icon: Globe,
      title: 'Sites & E-commerce',
      description: 'Desenvolvimento de sites responsivos e lojas virtuais modernas',
      features: ['Sites Responsivos', 'E-commerce', 'Landing Pages', 'PWA']
    },
    {
      icon: Code,
      title: 'Fullstack sob Medida',
      description: 'Desenvolvimento de aplicações web e mobile personalizadas',
      features: ['React/Next.js', 'Node.js', 'Mobile Apps', 'APIs REST']
    },
    {
      icon: Search,
      title: 'SEO & Otimizações',
      description: 'Otimização para mecanismos de busca e performance',
      features: ['SEO On-page', 'SEO Técnico', 'Link Building', 'Analytics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Hacking',
      description: 'Estratégias de crescimento acelerado baseadas em dados',
      features: ['Funis de Conversão', 'A/B Testing', 'Automação', 'CRO']
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
      
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
            Nossos Serviços
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent max-w-3xl mx-auto"
          >
            Soluções completas para sua transformação digital
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Do planejamento estratégico à execução técnica, oferecemos tudo que você precisa 
            para dominar o ambiente digital
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)"
              }}
              className="group bg-gray-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300"
              >
                <service.icon className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 px-6 py-3 rounded-xl text-purple-300 font-semibold hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-pink-600/30 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                >
                  Saiba Mais
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
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
            Ver Todos os Serviços
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;