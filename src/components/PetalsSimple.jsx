import React from 'react';

const PetalsSimple = ({ count = 20 }) => {
  const petals = Array.from({ length: count }, (_, i) => i);
  const petalEmojis = ['🌹', '🌸', '🌺', '💐', '🌷'];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
      {petals.map((i) => {
        const emoji = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
        const size = 1.5 + Math.random() * 0.5;
        const duration = 10 + Math.random() * 10;
        const delay = Math.random() * 5;
        
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: '-50px',
              fontSize: `${size}rem`,
              opacity: 0.6,
              animation: `fall ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
              filter: 'drop-shadow(0 0 3px rgba(255, 182, 193, 0.5))'
            }}
          >
            {emoji}
          </div>
        );
      })}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-50px) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default PetalsSimple;
