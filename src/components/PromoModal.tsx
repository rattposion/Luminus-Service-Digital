import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Sparkles } from 'lucide-react';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PromoModal: React.FC<PromoModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div className="relative w-96 max-w-[90vw] p-8 bg-gradient-to-br from-dark-800/90 to-dark-900/95 backdrop-blur-md rounded-2xl border-2 border-neon-pink animate-neon-border">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>

              {/* Moon emoji */}
              <div className="text-4xl mb-4 text-center">🌙</div>

              {/* Title */}
              <h3 className="text-2xl font-orbitron font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                  Oferta Noturna
                </span>
              </h3>

              {/* Description */}
              <p className="text-center text-gray-300 font-poppins mb-6">
                <span className="text-neon-pink font-semibold">25% OFF</span> em todos os planos até{' '}
                <span className="text-neon-purple font-semibold">23:59</span>
              </p>

              {/* Timer */}
              <motion.div
                className="flex items-center justify-center gap-2 mb-6 text-sm text-gray-400"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Clock className="w-4 h-4" />
                <span>Oferta por tempo limitado</span>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl font-poppins font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-neon-pink/50 animate-pulse-glow"
                onClick={onClose}
              >
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Aproveitar Agora
                </span>
              </motion.button>

              {/* Background glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 opacity-50 blur-xl -z-10" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PromoModal;