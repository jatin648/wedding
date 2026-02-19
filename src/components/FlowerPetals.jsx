import React, { useEffect } from 'react';
import { animateFlowerPetals } from '../utils/gsapAnimations';

const FlowerPetals = ({ count = 30 }) => {
  useEffect(() => {
    setTimeout(() => {
      animateFlowerPetals();
    }, 500);
  }, []);

  const petals = Array.from({ length: count }, (_, i) => i);
  const petalEmojis = ['🌹', '🌸', '🌺', '🌼', '🌻'];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {petals.map((i) => {
        const emoji = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
        const size = 1 + Math.random() * 0.5;
        const opacity = 0.4 + Math.random() * 0.5;
        
        return (
          <div
            key={i}
            className="petal absolute transition-all duration-300 drop-shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-50px`,
              fontSize: `${1.5 + size}rem`,
              opacity: opacity,
              filter: `drop-shadow(0 0 ${size * 2}px rgba(255, 182, 217, ${opacity * 0.6}))`,
            }}
          >
            {emoji}
          </div>
        );
      })}
    </div>
  );
};

export default FlowerPetals;
