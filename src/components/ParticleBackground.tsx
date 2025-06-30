import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 20,
    x: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-neon-purple opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
          }}
          animate={{
            y: ['-100vh', '100vh'],
            x: [0, Math.random() * 200 - 100],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
      
      {/* Starry background */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticleBackground;