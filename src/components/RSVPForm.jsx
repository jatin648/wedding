import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import gsap from 'gsap';

const RSVPForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Celebrate submission
      const button = document.querySelector('[type="submit"]');
      gsap.timeline()
        .to(button, {
          scale: 1.1,
          duration: 0.3,
          ease: 'power3.out',
        })
        .to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power3.out',
        });

      console.log('RSVP Data:', data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting RSVP:', error);
    }
  };

  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-cream via-pale-pink/30 to-black scroll-trigger-element overflow-hidden" id="rsvp-section">
      {/* Luxurious Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 sm:-left-40 w-80 sm:w-96 h-80 sm:h-96 bg-gold/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-32 sm:-right-40 w-80 sm:w-96 h-80 sm:h-96 bg-soft-pink/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Section Title */}
        <div className="text-center mb-12 sm:mb-20 scroll-trigger-element">
          <p className="text-soft-pink text-xs sm:text-sm font-elegant tracking-widest mb-2 sm:mb-4 opacity-90">BE OUR GUEST</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-soft-pink mb-4 sm:mb-6 drop-shadow-lg">RSVP</h2>
          <p className="text-cream text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">We would be honored to have you celebrate this magical moment with us</p>
          <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-soft-pink to-transparent mx-auto mt-6 sm:mt-8 rounded-full shadow-pink-glow" />
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-8 sm:mb-12 p-6 sm:p-8 bg-gradient-to-r from-soft-pink/25 to-soft-pink/15 backdrop-blur-xl border border-soft-pink/50 rounded-2xl text-soft-pink text-center font-serif animate-fade-in-up shadow-pink-glow-lg transform transition-all duration-500">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl sm:text-3xl">✨</span>
              <p className="text-base sm:text-lg font-semibold">Thank you for your RSVP!</p>
              <span className="text-2xl sm:text-3xl">✨</span>
            </div>
            <p className="text-sm sm:text-base text-cream/90 mt-2">We can't wait to celebrate with you on March 18, 2026 💕</p>
          </div>
        )}

        {/* Premium Form Container */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-0">
          <div className="glass-effect-premium bg-white/5 backdrop-blur-2xl border border-soft-pink/25 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-premium transition-all duration-500 hover:border-soft-pink/40 hover:bg-white/8 hover:shadow-hover-glow">
            {/* Full Name Field */}
            <div className="mb-8 sm:mb-10 scroll-trigger-element">
              <label className="block text-soft-pink font-elegant text-sm sm:text-base mb-3 font-semibold tracking-wide">Full Name *</label>
              <input
                type="text"
                {...register('fullName', { required: 'Full name is required' })}
                className="w-full bg-white/6 backdrop-blur-sm border border-soft-pink/20 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-cream placeholder-cream/35 focus:border-soft-pink/70 focus:bg-white/10 focus:outline-none focus:shadow-pink-glow transition-all duration-300 ease-out font-light text-sm sm:text-base"
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-300/70 text-xs sm:text-sm mt-2 font-light italic">{errors.fullName.message}</p>}
            </div>

            {/* Email Field */}
            <div className="mb-8 sm:mb-10 scroll-trigger-element" style={{animationDelay: '0.05s'}}>
              <label className="block text-soft-pink font-elegant text-sm sm:text-base mb-3 font-semibold tracking-wide">Email Address *</label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full bg-white/6 backdrop-blur-sm border border-soft-pink/20 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-cream placeholder-cream/35 focus:border-soft-pink/70 focus:bg-white/10 focus:outline-none focus:shadow-pink-glow transition-all duration-300 ease-out font-light text-sm sm:text-base"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-300/70 text-xs sm:text-sm mt-2 font-light italic">{errors.email.message}</p>}
            </div>

            {/* Phone Field */}
            <div className="mb-8 sm:mb-10 scroll-trigger-element" style={{animationDelay: '0.1s'}}>
              <label className="block text-soft-pink font-elegant text-sm sm:text-base mb-3 font-semibold tracking-wide">Phone Number</label>
              <input
                type="tel"
                {...register('phone')}
                className="w-full bg-white/6 backdrop-blur-sm border border-soft-pink/20 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-cream placeholder-cream/35 focus:border-soft-pink/70 focus:bg-white/10 focus:outline-none focus:shadow-pink-glow transition-all duration-300 ease-out font-light text-sm sm:text-base"
                placeholder="+91 9876543210"
              />
            </div>

            {/* Attendance Selection */}
            <div className="mb-8 sm:mb-10 scroll-trigger-element" style={{animationDelay: '0.15s'}}>
              <label className="block text-soft-pink font-elegant text-sm sm:text-base mb-4 sm:mb-5 font-semibold tracking-wide">Will you attend? *</label>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { value: 'yes', label: 'Yes, I\'ll be there! 🎉', color: 'border-soft-pink/30 hover:border-soft-pink/60' },
                  { value: 'no', label: 'Sorry, I can\'t attend', color: 'border-soft-pink/20 hover:border-soft-pink/50' },
                  { value: 'maybe', label: 'Maybe, I\'ll let you know soon', color: 'border-soft-pink/20 hover:border-soft-pink/50' }
                ].map((option) => (
                  <label key={option.value} className={`flex items-center p-4 sm:p-5 cursor-pointer bg-white/4 hover:bg-white/9 rounded-2xl border ${option.color} transition-all duration-300 group`}>
                    <input
                      type="radio"
                      value={option.value}
                      {...register('attendance', { required: 'Please select an option' })}
                      className="mr-4 w-5 h-5 accent-gold cursor-pointer"
                    />
                    <span className="text-cream text-sm sm:text-base font-light group-hover:text-soft-pink transition-colors duration-300">{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.attendance && <p className="text-red-300/70 text-xs sm:text-sm mt-2 font-light italic">{errors.attendance.message}</p>}
            </div>

            {/* Number of Guests */}
            <div className="mb-8 sm:mb-10 scroll-trigger-element" style={{animationDelay: '0.2s'}}>
              <label className="block text-soft-pink font-elegant text-sm sm:text-base mb-3 font-semibold tracking-wide">Number of Guests *</label>
              <input
                type="number"
                min="1"
                max="5"
                {...register('guests', { required: 'Number of guests is required' })}
                className="w-full bg-white/6 backdrop-blur-sm border border-soft-pink/20 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-cream placeholder-cream/35 focus:border-soft-pink/70 focus:bg-white/10 focus:outline-none focus:shadow-pink-glow transition-all duration-300 ease-out font-light text-sm sm:text-base"
                placeholder="How many guests are coming?"
              />
              {errors.guests && <p className="text-red-300/70 text-xs sm:text-sm mt-2 font-light italic">{errors.guests.message}</p>}
            </div>

            {/* Dietary Preferences */}
            <div className="mb-8 sm:mb-10 scroll-trigger-element" style={{animationDelay: '0.25s'}}>
              <label className="block text-soft-pink font-elegant text-sm sm:text-base mb-3 font-semibold tracking-wide">Dietary Preferences</label>
              <textarea
                {...register('dietary')}
                className="w-full bg-white/6 backdrop-blur-sm border border-soft-pink/20 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-cream placeholder-cream/35 focus:border-soft-pink/70 focus:bg-white/10 focus:outline-none focus:shadow-pink-glow transition-all duration-300 ease-out font-light resize-none text-sm sm:text-base"
                rows="3"
                placeholder="Any dietary restrictions or allergies?"
              />
            </div>

            {/* Wishes & Blessings */}
            <div className="mb-12 sm:mb-16 scroll-trigger-element" style={{animationDelay: '0.3s'}}>
              <label className="block text-soft-pink font-elegant text-sm sm:text-base mb-3 font-semibold tracking-wide">Wishes & Blessings</label>
              <textarea
                {...register('message')}
                className="w-full bg-white/6 backdrop-blur-sm border border-soft-pink/20 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-cream placeholder-cream/35 focus:border-soft-pink/70 focus:bg-white/10 focus:outline-none focus:shadow-pink-glow transition-all duration-300 ease-out font-light resize-none text-sm sm:text-base"
                rows="3"
                placeholder="Share your warm wishes and blessings for the couple..."
              />
            </div>

            {/* Submit Button - Premium Design */}
            <button
              type="submit"
              className="w-full premium-button py-4 sm:py-5 md:py-6 rounded-full font-serif font-bold text-base sm:text-lg transition-all duration-300 ease-out group relative overflow-hidden tracking-wider hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-soft-pink via-light-gold to-soft-pink opacity-100 group-hover:opacity-110 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              <span className="relative z-10 text-black drop-shadow-md flex items-center justify-center gap-2">
                ✨ Submit RSVP ✨
              </span>
            </button>

            {/* Decorative Note */}
            <p className="text-center text-cream/50 text-xs sm:text-sm mt-6 sm:mt-8 font-light italic">
              Please respond by February 28, 2026
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
