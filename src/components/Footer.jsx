import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-cream via-pale-pink/30 to-black border-t border-soft-pink/25 py-12 sm:py-16 overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gold/4 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 text-center mb-12 sm:mb-16">
          {/* Wedding Info Section */}
          <div className="scroll-trigger-element group">
            <h3 className="text-soft-pink font-serif text-lg sm:text-xl mb-4 sm:mb-6 group-hover:text-hot-pink transition-colors duration-300 drop-shadow-lg">
              ✨ The Wedding
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-cream/90 text-sm sm:text-base font-light">
                <span className="font-semibold text-soft-pink">Jatin & Khushi</span>
              </p>
              <p className="text-cream/80 text-sm sm:text-base font-light">
                📅 March 18, 2026
              </p>
              <p className="text-cream/80 text-sm sm:text-base font-light">
                📍 Majestic Palace, Delhi
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="scroll-trigger-element group" style={{animationDelay: '0.1s'}}>
            <h3 className="text-soft-pink font-serif text-lg sm:text-xl mb-4 sm:mb-6 group-hover:text-hot-pink transition-colors duration-300 drop-shadow-lg">
              🗺️ Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-cream/90 font-light">
              <li>
                <a href="#story-section" className="hover:text-soft-pink transition-colors duration-300">→ Our Story</a>
              </li>
              <li>
                <a href="#events" className="hover:text-soft-pink transition-colors duration-300">→ Events</a>
              </li>
              <li>
                <a href="#venue" className="hover:text-soft-pink transition-colors duration-300">→ Venue</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-soft-pink transition-colors duration-300">→ Gallery</a>
              </li>
              <li>
                <a href="#rsvp-section" className="hover:text-soft-pink transition-colors duration-300">→ RSVP</a>
              </li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="scroll-trigger-element group" style={{animationDelay: '0.2s'}}>
            <h3 className="text-soft-pink font-serif text-lg sm:text-xl mb-4 sm:mb-6 group-hover:text-hot-pink transition-colors duration-300 drop-shadow-lg">
              💌 Get in Touch
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-cream/80 text-sm sm:text-base font-light">
                📧 <a href="mailto:jatin.khushi@wedding.com" className="text-soft-pink hover:text-hot-pink transition-colors duration-300">
                  jatin.khushi@wedding.com
                </a>
              </p>
              <p className="text-cream/80 text-sm sm:text-base font-light">
                📱 <a href="tel:+919876543210" className="text-soft-pink hover:text-hot-pink transition-colors duration-300">
                  +91 98765 43210
                </a>
              </p>
              <p className="text-cream/80 text-sm sm:text-base font-light">
                🔗 Share the love!
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-soft-pink/20 my-12 sm:my-16" />

        {/* Bottom Section */}
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Main Message */}
          <div className="scroll-trigger-element">
            <p className="text-soft-pink font-serif text-lg sm:text-2xl drop-shadow-lg mb-3 font-semibold">
              💕 Thank You for Being Part of Our Journey 💕
            </p>
            <p className="text-cream/70 text-xs sm:text-sm font-light">
              Every moment shared with you makes our wedding more special
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-4 sm:pt-6 border-t border-soft-pink/15">
            <p className="text-cream/60 text-xs sm:text-sm font-light">
              © {currentYear} Jatin & Khushi. With love & gratitude.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {[...Array(7)].map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 h-1.5 bg-gradient-to-r from-soft-pink to-light-gold rounded-full shadow-pink-glow animate-pulse" 
                style={{animationDelay: `${i * 0.15}s`}}
              />
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-soft-pink/70 font-serif italic text-xs sm:text-sm font-light">
            "May love guide us through this beautiful journey together" ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
