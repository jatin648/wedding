import React, { useEffect } from 'react';
import { animateCurtainOpening, animateHeroText, animateImageFrameEntry, animateBackgroundZoom } from '../utils/gsapAnimations';

const HeroSection = () => {
  useEffect(() => {
    // Delay animations to let page load
    setTimeout(() => {
      animateCurtainOpening();
      animateHeroText();
      animateImageFrameEntry();
      animateBackgroundZoom();
    }, 100);
  }, []);

  const handleOpenInvitation = () => {
    document.getElementById('story-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Premium Background with Gradient & Zoom Effect */}
      <div
        className="hero-background absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><radialGradient id="grad" cx="50%25" cy="50%25" r="50%25"><stop offset="0%25" style="stop-color:%237B0000;stop-opacity:0.9" /><stop offset="100%25" style="stop-color:%23000000;stop-opacity:1" /></radialGradient></defs><rect width="1200" height="800" fill="url(%23grad)"/></svg>')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Luxury Overlay with Dark Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-black/30 to-black/40 z-15" />

      {/* Premium Curtain Animation - Left */}
      <div className="curtain-left absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-blush via-soft-pink to-light-pink z-40 origin-left shadow-pink-glow-lg" />

      {/* Premium Curtain Animation - Right */}
      <div className="curtain-right absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blush via-soft-pink to-light-pink z-40 origin-right shadow-pink-glow-lg" />

      {/* Overlay for depth - REMOVED, using vignette above */}

      {/* Main Content Container */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8">
        {/* Decorative Top Element */}
        <div className="absolute top-16 w-20 h-1 bg-gradient-to-r from-transparent via-soft-pink to-transparent" />

        {/* Bride and Groom Images - Premium Framing */}
        <div className="flex gap-4 sm:gap-6 md:gap-12 mb-8 sm:mb-12 justify-center items-center flex-row">
          {/* Bride Frame */}
          <div className="frame-image relative group">
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-soft-pink/30 to-soft-pink/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              {/* Image Container */}
              <div className="relative w-32 sm:w-48 md:w-56 h-32 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 sm:border-8 border-soft-pink shadow-pink-glow-lg ring-4 sm:ring-8 ring-offset-2 sm:ring-offset-4 ring-soft-pink/50 backdrop-blur-sm">
                <div className="w-full h-full bg-gradient-to-b from-cream via-light-gold to-dark-gold flex items-center justify-center text-6xl sm:text-8xl">
                  👰
                </div>
              </div>
            </div>
            
            {/* Name Label */}
            <p className="text-soft-pink text-sm sm:text-base md:text-lg mt-3 sm:mt-4 font-serif font-semibold tracking-widest text-center">Khushi</p>
          </div>

          {/* Groom Frame */}
          <div className="frame-image relative group">
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-soft-pink/30 to-soft-pink/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              {/* Image Container */}
              <div className="relative w-32 sm:w-48 md:w-56 h-32 sm:h-48 md:h-56 rounded-full overflow-hidden border-4 sm:border-8 border-soft-pink shadow-pink-glow-lg ring-4 sm:ring-8 ring-offset-2 sm:ring-offset-4 ring-soft-pink/50 backdrop-blur-sm">
                <div className="w-full h-full bg-gradient-to-b from-cream via-light-gold to-dark-gold flex items-center justify-center text-6xl sm:text-8xl">
                  🤵
                </div>
              </div>
            </div>
            
            {/* Name Label */}
            <p className="text-soft-pink text-sm sm:text-base md:text-lg mt-3 sm:mt-4 font-serif font-semibold tracking-widest text-center">Jatin</p>
          </div>
        </div>

        {/* Wedding Title - Premium Typography */}
        <div className="hero-title mb-2 sm:mb-4">
          <p className="text-soft-pink text-xs sm:text-sm md:text-lg font-elegant tracking-widest mb-1 sm:mb-2 font-light">THE WEDDING CELEBRATION OF</p>
        </div>

        {/* Couple Names - Large & Elegant */}
        <div className="hero-names mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-hot-pink mb-3 sm:mb-4 drop-shadow-lg">
            Jatin & Khushi
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-soft-pink via-light-pink to-soft-pink mx-auto rounded-full shadow-pink-glow" />
        </div>

        {/* Wedding Date */}
        <p className="text-cream text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-serif italic tracking-wide">
          March 18, 2026
        </p>

        {/* Premium CTA Button */}
        <button
          onClick={handleOpenInvitation}
          className="hero-button premium-button group relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-hover-glow active:scale-95"
        >
          {/* Shimmer Effect Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-soft-pink via-light-gold to-soft-pink opacity-100 group-hover:opacity-110 transition-opacity duration-300" />
          
          {/* Inner Shadow for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          
          {/* Text */}
          <span className="relative z-10 font-serif font-semibold tracking-wider text-black drop-shadow-sm">
            Open Invitation ✨
          </span>
        </button>

        {/* Scroll Hint - Animated */}
        <div className="absolute bottom-6 sm:bottom-10 animate-bounce">
          <p className="text-soft-pink text-xs sm:text-sm font-elegant tracking-widest mb-2">Scroll to Explore</p>
          <p className="text-2xl sm:text-3xl text-soft-pink">↓</p>
        </div>
      </div>

      {/* Decorative Bottom Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-15" />
    </section>
  );
};

export default HeroSection;
