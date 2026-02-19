import React from 'react';

const ParticleBackgroundSimple = ({ count = 30 }) => {
  const particles = Array.from({ length: count }, (_, i) => i);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
      {particles.map((i) => {
        const size = Math.random() > 0.7 ? 3 : 2;
        const duration = 8 + Math.random() * 12;
        const delay = Math.random() * 3;
        const opacity = 0.3 + Math.random() * 0.4;
        
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              background: 'linear-gradient(to right, #FFB6C1, #D4AF37)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: opacity,
              animation: `float ${duration}s infinite ease-in-out`,
              animationDelay: `${delay}s`,
              boxShadow: `0 0 ${size * 2}px rgba(255, 182, 193, ${opacity})`
            }}
          />
        );
      })}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(0px); }
          75% { transform: translateY(-20px) translateX(-10px); }
        }
      `}</style>
    </div>
  );
};

export default ParticleBackgroundSimple;
