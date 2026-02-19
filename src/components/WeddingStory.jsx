import React, { useEffect } from 'react';
import { weddingStory } from '../data/eventData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WeddingStory = () => {
  useEffect(() => {
    // Animate story items on scroll
    const items = document.querySelectorAll('.story-item');
    items.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 60,
        duration: 1,
        delay: index * 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  return (
    <section id="story-section" className="relative py-20 sm:py-32 bg-gradient-to-b from-cream via-pale-pink/40 to-black overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gold/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-soft-pink/8 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Section Title */}
        <div className="text-center mb-16 sm:mb-24 scroll-trigger-element">
          <p className="text-soft-pink text-xs sm:text-sm font-elegant tracking-widest mb-2 sm:mb-4 opacity-90">OUR BEAUTIFUL JOURNEY</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-soft-pink mb-6 drop-shadow-lg">
            {weddingStory.title}
          </h2>
          <p className="text-cream/70 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            A tale of love, destiny, and eternal togetherness
          </p>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-soft-pink via-light-gold to-soft-pink mx-auto rounded-full shadow-pink-glow" />
        </div>

        {/* Timeline with Vertical Line */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-soft-pink via-soft-pink to-transparent shadow-pink-glow hidden md:block" />

          {/* Story Items */}
          <div className="space-y-16 sm:space-y-20">
            {weddingStory.sections.map((item, index) => (
              <div
                key={item.id}
                className={`story-item flex gap-4 sm:gap-8 md:gap-12 items-center justify-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className="glass-effect-premium bg-white/5 backdrop-blur-xl border border-soft-pink/25 rounded-2xl sm:rounded-3xl p-6 sm:p-10 hover:border-soft-pink/50 hover:bg-white/8 transition-all duration-500 hover:shadow-hover-glow group">
                    {/* Year Badge */}
                    <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br from-soft-pink/30 to-soft-pink/10 border-2 sm:border-3 border-soft-pink flex items-center justify-center shadow-pink-glow group-hover:shadow-pink-glow-lg transition-all duration-300">
                        <span className="text-soft-pink font-serif font-bold text-lg sm:text-xl tracking-wider">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-3xl font-serif text-soft-pink group-hover:text-hot-pink transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-cream/80 text-sm sm:text-base leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Timeline Dot */}
                <div className="flex justify-center relative md:w-auto w-full">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gradient-to-br from-soft-pink to-light-gold border-4 sm:border-[5px] border-black shadow-pink-glow-lg z-20 transition-all duration-300 hover:scale-125 hover:shadow-pink-glow-xl cursor-pointer" />
                  {/* Pulse Effect */}
                  <div className="absolute w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 sm:border-3 border-soft-pink/50 animate-pulse z-10" />
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-20 sm:mt-32 text-center">
          <p className="text-soft-pink font-serif italic text-lg sm:text-2xl drop-shadow-lg">
            "Our love story continues..." 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeddingStory;
