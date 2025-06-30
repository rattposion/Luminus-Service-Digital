import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div
      className="flex items-center justify-center"
      animate={{ 
        filter: [
          'drop-shadow(0 0 20px rgba(159, 0, 255, 0.5))',
          'drop-shadow(0 0 40px rgba(159, 0, 255, 1))',
          'drop-shadow(0 0 20px rgba(159, 0, 255, 0.5))'
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-neon-purple flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {/* Inner glow ring */}
          <div className="absolute inset-2 rounded-full border border-neon-pink opacity-60" />
          
          {/* Center L */}
          <motion.div
            className="text-6xl md:text-7xl font-orbitron font-black text-transparent bg-gradient-to-b from-neon-purple to-neon-pink bg-clip-text"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            L
          </motion.div>
        </motion.div>

        {/* Company name around the circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-32 h-32 md:w-40 md:h-40" viewBox="0 0 160 160">
            <defs>
              <path
                id="circle-path"
                d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
            </defs>
            <text className="text-xs md:text-sm font-orbitron font-semibold fill-gray-300 tracking-widest">
              <textPath href="#circle-path" startOffset="0%">
                LUMINUS • SERVICE • DIGITAL • 
              </textPath>
            </text>
          </svg>
        </div>

        {/* Decorative stars */}
        <motion.div
          className="absolute -top-2 -right-2 text-neon-pink"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          ✦
        </motion.div>
        <motion.div
          className="absolute -bottom-2 -left-2 text-neon-purple"
          animate={{ rotate: [360, 180, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          ✦
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Logo;