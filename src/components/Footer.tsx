import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Tráfego Pago',
    'Social Media',
    'Desenvolvimento Web',
    'E-commerce',
    'SEO & Analytics',
    'Consultoria Digital'
  ];

  const company = [
    'Sobre Nós',
    'Nossa Equipe',
    'Casos de Sucesso',
    'Blog',
    'Carreira',
    'Contato'
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Linkedin, name: 'LinkedIn', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' }
  ];

  return (
    <footer className="relative bg-black border-t border-purple-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Zap className="w-8 h-8 text-purple-400" />
                  <div className="absolute inset-0 w-8 h-8 bg-purple-400 rounded-full blur-lg opacity-30"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Luminus Service Digital
                </span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Transformamos ideias em experiências digitais extraordinárias. 
                Especialistas em marketing digital e desenvolvimento fullstack, 
                criamos soluções que impulsionam o crescimento do seu negócio.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>contato@luminusdigital.com</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>+55 (11) 99999-9999</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5" />
                  <span>São Paulo, SP - Brasil</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Serviços</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Empresa</h3>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-white font-semibold mb-4">Siga-nos</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-800/50 border border-purple-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-purple-500/20 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Luminus Service Digital. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Cookies
              </a>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;