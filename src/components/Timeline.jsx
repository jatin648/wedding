import React, { useEffect } from 'react';
import { events } from '../data/eventData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  useEffect(() => {
    // Animate event cards on scroll
    const cards = document.querySelectorAll('.event-card');
    cards.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        delay: index * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  return (
    <section id="events" className="relative py-20 sm:py-32 bg-gradient-to-b from-cream to-light-pink/50 scroll-trigger-element overflow-hidden">
      {/* Luxurious Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 sm:right-20 w-80 sm:w-96 h-80 sm:h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 sm:left-20 w-64 sm:w-80 h-64 sm:h-80 bg-soft-pink/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Section Title */}
        <div className="text-center mb-16 sm:mb-24 scroll-trigger-element">
          <p className="text-soft-pink text-xs sm:text-sm font-elegant tracking-widest mb-2 sm:mb-4 opacity-90">WEDDING CELEBRATIONS</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-soft-pink mb-6 drop-shadow-lg">Event Timeline</h2>
          <p className="text-cream/70 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Join us for an unforgettable celebration spanning multiple magnificent events
          </p>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-soft-pink via-light-gold to-soft-pink mx-auto mt-8 rounded-full shadow-pink-glow" />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="event-card group relative"
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Premium Card Container */}
              <div className="relative h-full rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl border border-soft-pink/25 p-8 sm:p-10 lg:p-12 hover:border-soft-pink/50 hover:bg-white/10 transition-all duration-500 hover:shadow-hover-glow overflow-hidden group-hover:scale-105 transform">
                {/* Card Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl pointer-events-none" />

                {/* Event Number Badge - Premium Design */}
                <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-soft-pink to-light-gold rounded-full flex items-center justify-center text-black/90 font-serif font-bold shadow-pink-glow-lg group-hover:shadow-pink-glow-xl transition-all duration-300 group-hover:scale-125 group-hover:-top-8 group-hover:-left-8">
                  <span className="text-base sm:text-xl">{event.id}</span>
                </div>

                <div className="relative z-10">
                  {/* Event Name */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-soft-pink mb-4 sm:mb-6 tracking-wide group-hover:text-hot-pink transition-colors duration-300 pr-12">
                    {event.name}
                  </h3>

                  {/* Date and Time */}
                  <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                    <p className="text-cream/90 text-sm sm:text-base font-light">
                      <span className="text-soft-pink font-semibold">📅 Date:</span> {event.date}
                    </p>
                    <p className="text-cream/90 text-sm sm:text-base font-light">
                      <span className="text-soft-pink font-semibold">🕐 Time:</span> {event.time}
                    </p>
                    <p className="text-cream/90 text-sm sm:text-base font-light">
                      <span className="text-soft-pink font-semibold">📍 Venue:</span> {event.venue}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-cream/80 text-sm sm:text-base leading-relaxed font-light mb-6 sm:mb-8">
                    {event.description}
                  </p>

                  {/* Dress Code */}
                  <div className="bg-soft-pink/10 border border-soft-pink/20 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4">
                    <p className="text-cream text-xs sm:text-sm font-light">
                      <span className="text-soft-pink font-semibold">👗 Dress Code:</span> {event.dressCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16 sm:mt-24 scroll-trigger-element">
          <p className="text-soft-pink font-serif italic text-base sm:text-lg drop-shadow-lg">
            "We look forward to celebrating with you!" ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
