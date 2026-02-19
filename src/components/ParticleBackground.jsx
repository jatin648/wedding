import React from 'react';

const ParticleBackground = ({ count = 50 }) => {
  const particles = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((i) => {
        const size = Math.random() > 0.7 ? 2 : 1;
        const duration = 8 + Math.random() * 12;
        const delay = Math.random() * 3;
        const opacity = 0.3 + Math.random() * 0.5;
        
        return (
          <div
            key={i}
            className={`absolute ${size === 2 ? 'w-1.5 h-1.5' : 'w-1 h-1'} bg-gradient-to-r from-soft-pink to-light-gold rounded-full shadow-pink-glow`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: opacity,
              animation: `drift ${duration}s infinite`,
              animationDelay: `${delay}s`,
              filter: `drop-shadow(0 0 ${size * 2}px rgba(255, 182, 217, ${opacity}))`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleBackground;
