import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.gallery-image');
    
    images.forEach((image) => {
      image.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.08,
          duration: 0.6,
          ease: 'power3.out',
        });
      });

      image.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
        });
      });
    });

    // Scroll trigger animations
    gsap.utils.toArray('.gallery-image').forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 80,
        duration: 1,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  const galleryItems = [
    { id: 1, emoji: '📸', title: 'Engagement Moment' },
    { id: 2, emoji: '💑', title: 'Happy Together' },
    { id: 3, emoji: '🌅', title: 'Golden Hour' },
    { id: 4, emoji: '💐', title: 'Floral Beauty' },
    { id: 5, emoji: '🎆', title: 'Celebration' },
    { id: 6, emoji: '💕', title: 'Love Story' },
  ];

  return (
    <section id="gallery" className="relative py-20 sm:py-32 bg-gradient-to-b from-cream to-light-pink/50 scroll-trigger-element overflow-hidden">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Section Title */}
        <div className="text-center mb-16 sm:mb-24 scroll-trigger-element">
          <p className="text-soft-pink text-xs sm:text-sm font-elegant tracking-widest mb-2 sm:mb-4 opacity-90">PRECIOUS MOMENTS</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-soft-pink mb-6 drop-shadow-lg">Our Photo Gallery</h2>
          <p className="text-cream/70 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-light">
            Celebrating the beautiful chapters of our love story
          </p>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-soft-pink via-light-gold to-soft-pink mx-auto rounded-full shadow-pink-glow" />
        </div>

        {/* Gallery Grid - Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-image group"
              style={{
                animation: `fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative w-full h-72 sm:h-80 md:h-96 bg-gradient-to-br from-white/6 to-soft-pink/3 backdrop-blur-sm border border-soft-pink/25 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 group-hover:border-soft-pink/70 group-hover:shadow-hover-glow group-hover:scale-105 transform">
                {/* Gradient Overlay Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/4 to-soft-pink/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl pointer-events-none" />

                {/* Image Placeholder with Emoji - Premium Style */}
                <div className="w-full h-full flex items-center justify-center relative z-10">
                  <div className="text-8xl sm:text-9xl transform group-hover:scale-125 transition-transform duration-500 ease-out drop-shadow-lg">
                    {item.emoji}
                  </div>
                </div>

                {/* Bottom Overlay - Premium Design */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
                  <div className="w-full">
                    <p className="text-soft-pink font-serif text-xl sm:text-2xl font-semibold tracking-wide mb-2 drop-shadow-lg">
                      {item.title}
                    </p>
                    <p className="text-cream/70 text-xs sm:text-sm italic font-light">
                      ✨ View more moments in our collection
                    </p>
                  </div>
                </div>

                {/* Glowing Border on Hover */}
                <div className="absolute inset-0 border-2 sm:border-3 border-soft-pink/0 group-hover:border-soft-pink transition-all duration-300 rounded-2xl sm:rounded-3xl pointer-events-none group-hover:shadow-pink-glow-lg" />

                {/* Inner Top Shine */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-soft-pink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl sm:rounded-t-3xl" />

                {/* Corner Accents */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-pink-glow" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-pink-glow" />
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery Note - Premium Style */}
        <div className="text-center mt-16 sm:mt-24 scroll-trigger-element">
          <div className="inline-block bg-soft-pink/10 border border-soft-pink/30 rounded-2xl px-8 sm:px-12 py-6 sm:py-8">
            <p className="text-cream text-sm sm:text-base leading-relaxed font-light">
              📸 <span className="text-soft-pink font-semibold italic">Celebrate the beautiful moments</span><br />
              <span className="text-creek/80 text-xs sm:text-sm">Our complete photo journey will be shared after the wedding! 💕</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
