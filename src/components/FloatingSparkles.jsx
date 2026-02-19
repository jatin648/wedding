import React, { useEffect } from 'react';
import { animateFloatingSparkles } from '../utils/gsapAnimations';

const FloatingSparkles = ({ count = 40 }) => {
  useEffect(() => {
    setTimeout(() => {
      animateFloatingSparkles();
    }, 500);
  }, []);

  const sparkles = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {sparkles.map((i) => {
        const size = Math.random() > 0.6 ? 1.5 : 1;
        const brightness = 0.5 + Math.random() * 0.8;
        const glowSize = size === 1.5 ? 15 : 10;
        
        return (
          <div
            key={i}
            className={`sparkle absolute ${size === 1.5 ? 'w-1.5 h-1.5' : 'w-1 h-1'} bg-gradient-to-r from-soft-pink to-light-gold rounded-full animate-sparkle`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: brightness,
              boxShadow: `0 0 ${glowSize}px rgba(212, 175, 55, ${brightness}), 0 0 ${glowSize * 2}px rgba(232, 184, 92, ${brightness * 0.6})`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingSparkles;
