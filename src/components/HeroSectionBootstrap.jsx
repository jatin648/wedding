import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { animateCurtainOpening, animateHeroText, animateImageFrameEntry, animateBackgroundZoom } from '../utils/gsapAnimations';

const HeroSectionBootstrap = () => {
  useEffect(() => {
    setTimeout(() => {
      animateCurtainOpening();
      animateHeroText();
      animateImageFrameEntry();
      animateBackgroundZoom();
    }, 100);
  }, []);

  const handleOpenInvitation = () => {
    document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="position-relative overflow-hidden" 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFE4E1 0%, #FFF0F5 50%, #FFFFFF 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Animated Background */}
      <div
        className="hero-background position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 182, 193, 0.2) 0%, transparent 70%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Curtains */}
      <div 
        className="curtain-left position-absolute h-100"
        style={{
          left: 0,
          top: 0,
          width: '50%',
          background: 'linear-gradient(to right, #FFB6C1, #FFC0CB, #FFD1DC)',
          zIndex: 40,
          transformOrigin: 'left'
        }}
      />
      <div 
        className="curtain-right position-absolute h-100"
        style={{
          right: 0,
          top: 0,
          width: '50%',
          background: 'linear-gradient(to left, #FFB6C1, #FFC0CB, #FFD1DC)',
          zIndex: 40,
          transformOrigin: 'right'
        }}
      />

      {/* Main Content */}
      <Container className="position-relative text-center" style={{ zIndex: 20, color: '#333' }}>
        <Row className="justify-content-center">
          <Col xs={12}>
            {/* Couple Images */}
            <Row className="justify-content-center align-items-center mb-5">
              <Col xs={6} md={4} className="text-center frame-image">
                <div className="position-relative d-inline-block">
                  <div 
                    className="rounded-circle overflow-hidden mx-auto"
                    style={{
                      width: '200px',
                      height: '200px',
                      border: '6px solid #FF69B4',
                      boxShadow: '0 0 40px rgba(255, 105, 180, 0.4)',
                      background: 'linear-gradient(to bottom, #FFFFFF, #FFE4E1, #FFC0CB)'
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-center h-100" style={{ fontSize: '5rem' }}>
                      👰
                    </div>
                  </div>
                  <p className="mt-3" style={{ color: '#FF69B4', fontSize: '1.5rem', fontFamily: 'Great Vibes, cursive', fontWeight: 'bold' }}>
                    Khushi
                  </p>
                </div>
              </Col>
              
              <Col xs={6} md={4} className="text-center frame-image">
                <div className="position-relative d-inline-block">
                  <div 
                    className="rounded-circle overflow-hidden mx-auto"
                    style={{
                      width: '200px',
                      height: '200px',
                      border: '6px solid #FF69B4',
                      boxShadow: '0 0 40px rgba(255, 105, 180, 0.4)',
                      background: 'linear-gradient(to bottom, #FFFFFF, #FFE4E1, #FFC0CB)'
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-center h-100" style={{ fontSize: '5rem' }}>
                      🤵
                    </div>
                  </div>
                  <p className="mt-3" style={{ color: '#FF69B4', fontSize: '1.5rem', fontFamily: 'Great Vibes, cursive', fontWeight: 'bold' }}>
                    Jatin
                  </p>
                </div>
              </Col>
            </Row>

            {/* Wedding Title */}
            <div className="hero-title mb-3">
              <p className="section-subtitle" style={{ color: '#D4AF37', fontSize: '0.9rem', letterSpacing: '3px', fontWeight: '600' }}>
                THE WEDDING CELEBRATION OF
              </p>
            </div>

            {/* Couple Names */}
            <div className="hero-names mb-4">
              <h1 
                className="display-1 fw-bold glow-text" 
                style={{ 
                  fontFamily: 'Cinzel, serif',
                  color: '#FF69B4',
                  fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                  textShadow: '0 0 30px rgba(255, 105, 180, 0.3)'
                }}
              >
                Jatin & Khushi
              </h1>
              <div 
                className="mx-auto mt-3"
                style={{
                  width: '100px',
                  height: '3px',
                  background: 'linear-gradient(to right, #FF69B4, #FFB6C1)',
                  borderRadius: '10px',
                  boxShadow: '0 0 20px rgba(255, 105, 180, 0.4)'
                }}
              />
            </div>

            {/* Wedding Date */}
            <p className="mb-5" style={{ color: '#666', fontSize: '1.3rem', fontStyle: 'italic', fontWeight: '500' }}>
              March 18, 2026
            </p>

            {/* CTA Button */}
            <button
              onClick={handleOpenInvitation}
              className="btn-wedding-gold px-5 py-3"
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                letterSpacing: '1px'
              }}
            >
              ✨ Open Invitation ✨
            </button>

            {/* Scroll Hint */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4" style={{ animation: 'float 2s ease-in-out infinite' }}>
              <p style={{ color: '#FF69B4', fontSize: '0.9rem', letterSpacing: '2px', fontWeight: '600' }}>Scroll to Explore</p>
              <p style={{ fontSize: '2rem', color: '#FF69B4' }}>↓</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSectionBootstrap;
