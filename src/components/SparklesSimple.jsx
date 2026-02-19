import React from 'react';

const SparklesSimple = ({ count = 25 }) => {
  const sparkles = Array.from({ length: count }, (_, i) => i);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
      {sparkles.map((i) => {
        const size = Math.random() > 0.6 ? 4 : 3;
        const brightness = 0.5 + Math.random() * 0.5;
        const duration = 2 + Math.random() * 2;
        
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              background: 'linear-gradient(to right, #FFD700, #FFA500)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: brightness,
              boxShadow: `0 0 10px rgba(255, 215, 0, ${brightness})`,
              animation: `sparkle ${duration}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        );
      })}
      <style>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default SparklesSimple;
