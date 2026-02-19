import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Configure default easing for smooth animations
gsap.defaults({ ease: 'power3.out' });

/**
 * ==================== HERO SECTION ANIMATIONS ====================
 */

export const animateCurtainOpening = () => {
  const leftCurtain = document.querySelector('.curtain-left');
  const rightCurtain = document.querySelector('.curtain-right');
  
  if (leftCurtain && rightCurtain) {
    gsap.timeline()
      .to(leftCurtain, {
        x: -105,
        duration: 2.5,
        ease: 'power3.out',
      }, 0)
      .to(rightCurtain, {
        x: 105,
        duration: 2.5,
        ease: 'power3.out',
      }, 0);
  }
};

export const animateHeroText = () => {
  const timeline = gsap.timeline();

  timeline
    .from('.hero-title', {
      opacity: 0,
      y: 60,
      duration: 1.4,
      delay: 2.5,
      ease: 'power3.out',
    })
    .from(
      '.hero-names',
      {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
      },
      '-=0.8'
    )
    .from(
      '.hero-button',
      {
        opacity: 0,
        scale: 0.85,
        y: 40,
        duration: 1.1,
        ease: 'back.out',
      },
      '-=0.7'
    );
};

export const animateImageFrameEntry = () => {
  gsap.from('.frame-image', {
    opacity: 0,
    scale: 0.8,
    y: 50,
    duration: 1.6,
    delay: 2.8,
    ease: 'back.out',
    stagger: 0.3,
  });
};

export const animateBackgroundZoom = () => {
  gsap.to('.hero-background', {
    scale: 1.1,
    duration: 25,
    ease: 'none',
    repeat: -1,
    yoyo: true,
  });
};

/**
 * ==================== BACKGROUND ANIMATIONS ====================
 */

export const animateFloatingSparkles = () => {
  const sparkles = document.querySelectorAll('.sparkle');
  
  sparkles.forEach((sparkle, index) => {
    const duration = gsap.utils.random(5, 10);
    const xPos = gsap.utils.random(-200, 200);
    const yPos = gsap.utils.random(-200, -50);
    const delay = index * 0.1;

    // Main movement animation
    gsap.to(sparkle, {
      x: xPos,
      y: yPos,
      opacity: 0,
      duration,
      delay,
      ease: 'power1.inOut',
      repeat: -1,
      repeatDelay: gsap.utils.random(0.8, 2),
    });

    // Scale and brightness animation
    gsap.to(sparkle, {
      scale: gsap.utils.random(0.6, 1.8),
      duration: 2,
      delay,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });
};

export const animateFlowerPetals = () => {
  const petals = document.querySelectorAll('.petal');
  
  petals.forEach((petal, index) => {
    const startDelay = index * 0.2;
    
    gsap.to(petal, {
      y: window.innerHeight + 100,
      x: gsap.utils.random(-120, 120),
      opacity: 0,
      rotation: gsap.utils.random(0, 720),
      duration: gsap.utils.random(14, 22),
      delay: startDelay,
      ease: 'power1.inOut',
      repeat: -1,
      repeatDelay: 2.5,
    });
  });
};

/**
 * ==================== SCROLL TRIGGER ANIMATIONS ====================
 */

export const animateScrollSections = () => {
  // Animate all scroll trigger elements
  gsap.utils.toArray('.scroll-trigger-element').forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      delay: index * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
};

export const createScrollTriggerReveal = (selector, options = {}) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      y: options.y || 60,
      duration: options.duration || 1.2,
      delay: (options.stagger || 0.1) * index,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: options.start || 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      ...options,
    });
  });
};

/**
 * ==================== INTERACTIVE ANIMATIONS ====================
 */

export const animateGalleryImages = () => {
  gsap.utils.toArray('.gallery-image').forEach((image) => {
    const tl = gsap.timeline({ paused: true });
    
    tl.to(image, {
      scale: 1.12,
      duration: 0.8,
      ease: 'power3.out',
    }, 0);

    image.addEventListener('mouseenter', () => tl.play());
    image.addEventListener('mouseleave', () => tl.reverse());
  });
};

export const createCountdownAnimation = (element) => {
  gsap.timeline()
    .from(element, {
      scale: 1.6,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out',
    }, 0)
    .to(element, {
      boxShadow: '0 0 50px rgba(212, 175, 55, 0.8), inset 0 0 30px rgba(212, 175, 55, 0.3)',
      duration: 0.4,
      ease: 'power3.out',
    }, 0);
};

export const animateButtonHover = (button) => {
  gsap.to(button, {
    scale: 1.08,
    duration: 0.4,
    ease: 'power3.out',
  });
};

export const animateButtonHoverOut = (button) => {
  gsap.to(button, {
    scale: 1,
    duration: 0.4,
    ease: 'power3.out',
  });
};

export const createFormFieldAnimation = (element) => {
  gsap.to(element, {
    borderColor: '#D4AF37',
    boxShadow: '0 0 20px rgba(212, 175, 55, 0.4), inset 0 0 10px rgba(212, 175, 55, 0.1)',
    duration: 0.3,
    ease: 'power3.out',
  });
};

export const createFormFieldAnimationOut = (element) => {
  gsap.to(element, {
    borderColor: 'rgba(212, 175, 55, 0.3)',
    boxShadow: 'none',
    duration: 0.3,
    ease: 'power3.out',
  });
};

/**
 * ==================== UTILITY ANIMATIONS ====================
 */

export const createParallaxEffect = (element, speed = 0.5) => {
  gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      onUpdate: (self) => {
        gsap.set(element, {
          y: -self.getVelocity() * speed,
        });
      },
    },
  });
};

export const createGlowPulse = (element) => {
  gsap.timeline({ repeat: -1 })
    .to(element, {
      boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)',
      duration: 1,
      ease: 'sine.inOut',
    }, 0)
    .to(element, {
      boxShadow: '0 0 40px rgba(212, 175, 55, 0.8), inset 0 0 20px rgba(212, 175, 55, 0.2)',
      duration: 1,
      ease: 'sine.inOut',
    }, 1);
};

export const createTextGlowEffect = (element) => {
  gsap.timeline({ repeat: -1 })
    .to(element, {
      textShadow: '0 0 10px rgba(212, 175, 55, 0.3)',
      duration: 1.5,
      ease: 'sine.inOut',
    }, 0)
    .to(element, {
      textShadow: '0 0 30px rgba(212, 175, 55, 0.6)',
      duration: 1.5,
      ease: 'sine.inOut',
    }, 1.5);
};
