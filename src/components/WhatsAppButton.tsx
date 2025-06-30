import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '(61) 99431-8981'; // Substitua pelo número real
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Luminus Service Digital.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Main button */}
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>

        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-75" />
        <div className="absolute inset-0 rounded-full border border-green-300 animate-pulse" />

        {/* Notification badge */}
        <motion.div
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white text-xs font-bold">1</span>
        </motion.div>
      </div>

      {/* Tooltip */}
      <motion.div
        className="absolute right-20 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: 10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        <div className="bg-dark-800 text-white px-4 py-2 rounded-lg shadow-xl border border-gray-700 whitespace-nowrap font-poppins text-sm">
          Fale conosco no WhatsApp
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-dark-800 border-r border-b border-gray-700 rotate-45" />
        </div>
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;