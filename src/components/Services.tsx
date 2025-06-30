import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code, TrendingUp, Sparkles, Users, Mail, PenTool, BarChart2 } from 'lucide-react';
import Logo from './Logo';

const services = [
  {
    icon: Rocket,
    title: 'Marketing Digital',
    description: 'Tráfego pago, branding e campanhas que convertem com precisão cirúrgica no universo digital.',
    features: ['Google Ads', 'Facebook Ads', 'Branding', 'SEO'],
    color: 'from-neon-purple to-purple-600',
  },
  {
    icon: Users,
    title: 'Social Media',
    description: 'Gestão estratégica de redes sociais para engajar, crescer e fortalecer sua marca.',
    features: ['Instagram', 'Facebook', 'LinkedIn', 'Calendário Editorial'],
    color: 'from-neon-pink to-pink-600',
  },
  {
    icon: PenTool,
    title: 'Copywriting',
    description: 'Textos persuasivos para anúncios, sites e campanhas que realmente vendem.',
    features: ['Landing Pages', 'E-mails', 'Posts', 'Anúncios'],
    color: 'from-neon-blue to-blue-600',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Automação e campanhas de e-mail para nutrir leads e aumentar conversões.',
    features: ['Automação', 'Sequências', 'Newsletters', 'Segmentação'],
    color: 'from-neon-purple to-neon-pink',
  },
  {
    icon: BarChart2,
    title: 'Gestão de Tráfego',
    description: 'Gestão e otimização de campanhas para gerar mais resultados com menos investimento.',
    features: ['Google Ads', 'Meta Ads', 'Remarketing', 'Otimização de ROI'],
    color: 'from-neon-pink to-yellow-500',
  },
  {
    icon: TrendingUp,
    title: 'Estratégia Digital',
    description: 'Consultoria especializada, automação de processos e otimização para resultados exponenciais.',
    features: ['Automação', 'Analytics', 'Consultoria', 'Growth Hacking'],
    color: 'from-neon-blue to-blue-600',
  },
  {
    icon: Code,
    title: 'Fullstack Development',
    description: 'Desenvolvimento web completo, APIs robustas e sistemas escaláveis com tecnologias de ponta.',
    features: ['React/Next.js', 'Node.js', 'APIs REST', 'Banco de Dados'],
    color: 'from-neon-pink to-pink-600',
  },
];

const Services: React.FC = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-8xl mx-auto">
        {/* Logo da empresa no topo */}
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
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
              Nossos Serviços
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-poppins max-w-3xl mx-auto">
            Soluções digitais inovadoras para impulsionar sua marca, conquistar clientes e acelerar resultados. Descubra como podemos transformar seu negócio com tecnologia, criatividade e estratégia de alto impacto.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-dark-800/50 to-dark-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-neon-purple/50 transition-all duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-orbitron font-bold text-white mb-4 group-hover:text-neon-purple transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 font-poppins mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                      <Sparkles className="w-4 h-4 text-neon-pink" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-neon-purple/30 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
        {/* CTA para orçamento personalizado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
            Quer um projeto sob medida?
          </h3>
          <p className="text-gray-400 font-poppins mb-6 max-w-md mx-auto">
            Fale com nossos especialistas e receba um orçamento personalizado para sua empresa!
          </p>
          <a href="https://wa.me/5561994318981" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full font-poppins font-semibold text-white hover:shadow-2xl hover:shadow-neon-pink/50 transition-all duration-300"
            >
              Solicitar Orçamento via WhatsApp
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;