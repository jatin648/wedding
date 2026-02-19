import React from 'react';
import { venues } from '../data/eventData';

const Venue = () => {
  return (
    <section id="venue" className="relative py-20 sm:py-32 bg-gradient-to-b from-deep-burgundy/50 via-black to-light-pink scroll-trigger-element overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-soft-pink/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Section Title */}
        <div className="text-center mb-16 sm:mb-24 scroll-trigger-element">
          <p className="text-soft-pink text-xs sm:text-sm font-elegant tracking-widest mb-2 sm:mb-4 opacity-90">CELEBRATION VENUES</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-soft-pink mb-6 drop-shadow-lg">Wedding Venues</h2>
          <p className="text-cream/70 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-light">
            Exquisite venues carefully chosen to make your moments unforgettable
          </p>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-soft-pink via-light-gold to-soft-pink mx-auto rounded-full shadow-pink-glow" />
        </div>

        {/* Venues */}
        <div className="space-y-16 sm:space-y-20 max-w-6xl mx-auto">
          {venues.map((venue, index) => (
            <div
              key={venue.id}
              className="scroll-trigger-element group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Map Container */}
              <div className="glass-effect-premium rounded-2xl sm:rounded-3xl overflow-hidden border border-soft-pink/25 hover:border-soft-pink/50 transition-all duration-500 shadow-premium group-hover:shadow-hover-glow">
                <iframe
                  title={venue.name}
                  width="100%"
                  height="350"
                  sm:height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={venue.mapEmbedUrl}
                  className="w-full"
                />
              </div>

              {/* Venue Details - Premium Card */}
              <div className="glass-effect-premium bg-white/5 backdrop-blur-xl border border-soft-pink/25 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 hover:border-soft-pink/50 hover:bg-white/8 transition-all duration-500 hover:shadow-hover-glow group-hover:scale-105 transform">
                {/* Venue Name */}
                <h3 className="text-3xl sm:text-4xl font-serif text-soft-pink mb-2 drop-shadow-lg">{venue.name}</h3>
                
                {/* Event Type */}
                <p className="text-soft-pink text-xs sm:text-sm font-elegant tracking-widest mb-6 sm:mb-8 uppercase opacity-90">{venue.event}</p>

                {/* Details Grid */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Address */}
                  <div className="bg-soft-pink/10 border border-soft-pink/20 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-4 sm:py-5">
                    <p className="text-soft-pink text-xs sm:text-sm font-elegant tracking-widest mb-2 uppercase font-semibold">Address</p>
                    <p className="text-cream text-sm sm:text-base font-light leading-relaxed">{venue.address}</p>
                  </div>

                  {/* Phone */}
                  <div className="bg-soft-pink/10 border border-soft-pink/20 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-4 sm:py-5">
                    <p className="text-soft-pink text-xs sm:text-sm font-elegant tracking-widest mb-2 uppercase font-semibold">Contact</p>
                    <a href={`tel:${venue.phone}`} className="text-soft-pink hover:text-hot-pink transition-colors text-sm sm:text-base font-light">
                      {venue.phone}
                    </a>
                  </div>

                  {/* Navigation Button */}
                  <div className="pt-2">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(venue.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 sm:px-10 py-3 sm:py-4 premium-button rounded-full font-serif font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      📍 Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Venue;
