import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
    { icon: Phone, href: '#', label: 'Telefone' },
  ];

  return (
    <footer className="relative py-16 px-4 border-t border-gray-800">
      {/* Neon divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
      
      <div className="max-w-8xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-orbitron font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                LUMINUS Service Digital
              </span>
            </h3>
            <p className="text-gray-400 font-poppins mb-6 max-w-md">
              Transformamos ideias em presença digital com tecnologia de ponta, 
              estratégias inovadoras e resultados que brilham no universo digital.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-12 h-12 bg-gradient-to-br from-dark-800 to-dark-900 rounded-full flex items-center justify-center border border-gray-700 hover:border-neon-purple transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-neon-purple transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-orbitron font-semibold text-white mb-4">
              Serviços
            </h4>
            <ul className="space-y-2 font-poppins text-gray-400">
              <li><a href="#" className="hover:text-neon-purple transition-colors">Marketing Digital</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Estratégia Digital</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Consultoria</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-orbitron font-semibold text-white mb-4">
              Contato
            </h4>
            <ul className="space-y-2 font-poppins text-gray-400">
              <li>contato@luminus.digital</li>
              <li>+55 (61) 99431-8981</li>
              <li>BRASILIA, DF</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-500 font-poppins mb-4">
            © 2025 Luminus Service Digital. Todos os direitos reservados.
          </p>
          <motion.p
            className="text-lg font-orbitron font-semibold bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(159, 0, 255, 0.5)',
                '0 0 40px rgba(159, 0, 255, 1)',
                '0 0 20px rgba(159, 0, 255, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            LUMINUS Service Digital. — Onde o digital ganha luz
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;