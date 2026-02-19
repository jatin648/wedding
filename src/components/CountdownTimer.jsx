import React, { useState, useEffect } from 'react';
import { createCountdownAnimation } from '../utils/gsapAnimations';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const weddingDate = new Date('March 18, 2026').getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountdownItem = ({ value, label, index }) => (
    <div className="scroll-trigger-element" style={{
      animation: `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0s forwards`,
      animationDelay: `${index * 0.15}s`,
    }}>
      <div
        className="group relative h-full rounded-2xl bg-gradient-to-br from-white/6 to-white/3 backdrop-blur-md border border-soft-pink/25 p-6 sm:p-8 hover:border-soft-pink/50 transition-all duration-300 hover:shadow-pink-glow cursor-pointer hover:-translate-y-1"
        onMouseEnter={(e) => {
          createCountdownAnimation(e.currentTarget);
        }}
      >
        {/* Card Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

        {/* Number Display */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="text-5xl sm:text-6xl md:text-7xl font-serif text-soft-pink font-bold mb-3 tracking-wider group-hover:animate-pulse-glow transition-all duration-300">
            {String(value).padStart(2, '0')}
          </div>
          <p className="text-cream/80 text-xs sm:text-sm font-serif uppercase tracking-widest font-semibold">{label}</p>
        </div>

        {/* Shine Effect */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-soft-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl pointer-events-none" />
      </div>
    </div>
  );

  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-deep-burgundy/80 via-black to-black scroll-trigger-element overflow-hidden">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Section Title */}
        <div className="text-center mb-16 sm:mb-24 scroll-trigger-element">
          <p className="text-soft-pink text-xs sm:text-sm font-elegant tracking-widest mb-2 sm:mb-4 opacity-90">THE BIG DAY</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif text-soft-pink mb-6 drop-shadow-lg">Countdown</h2>
          <p className="text-cream/70 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-light">
            Every moment brings us closer to our special day
          </p>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-soft-pink via-light-gold to-soft-pink mx-auto rounded-full shadow-pink-glow" />
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          <CountdownItem value={countdown.days} label="Days" index={0} />
          <CountdownItem value={countdown.hours} label="Hours" index={1} />
          <CountdownItem value={countdown.minutes} label="Minutes" index={2} />
          <CountdownItem value={countdown.seconds} label="Seconds" index={3} />
        </div>

        {/* Wedding Day Message - Premium Style */}
        <div className="text-center mt-16 sm:mt-24 scroll-trigger-element">
          <div className="inline-block bg-soft-pink/10 border border-soft-pink/30 rounded-2xl px-8 sm:px-12 py-6 sm:py-8">
            <p className="text-soft-pink font-serif text-base sm:text-lg md:text-xl font-semibold tracking-wide mb-2">
              ✨ March 18, 2026 ✨
            </p>
            <p className="text-cream/90 text-sm sm:text-base italic font-light">
              Until Jatin & Khushi become one 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
