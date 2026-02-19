import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import LoveCarousel from './components/LoveCarousel';
import ParticleBackgroundSimple from './components/ParticleBackgroundSimple';
import SparklesSimple from './components/SparklesSimple';
import PetalsSimple from './components/PetalsSimple';
import './App.css';

function App() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guests: '',
    wishes: ''
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS configuration
    const templateParams = {
      to_email: formData.email,
      to_name: formData.name,
      from_name: 'Jatin & Khushi',
      message: `Dear ${formData.name},\n\nThank you so much for your RSVP! We are thrilled to have you celebrate our special day with us.\n\nYour Response: ${formData.attendance === 'yes' ? 'Yes, attending' : formData.attendance === 'no' ? 'Cannot attend' : 'Maybe'}\nNumber of Guests: ${formData.guests}\n\nWedding Date: March 18, 2026\nVenue: Grand Ballroom, Delhi\n\nWe look forward to seeing you!\n\nWith Love,\nJatin & Khushi 💕`
    };

    // Send email using EmailJS
    emailjs.send(
      'service_c8v36ds',      // Replace with your EmailJS service ID
      'template_5dyr33z',     // Replace with your EmailJS template ID
      templateParams,
      '_2YAalybSczdGsTZC' // Replace with your EmailJS public key
    )
    .then(() => {
      console.log('Email sent successfully!');
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', attendance: '', guests: '', wishes: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    })
    .catch((error) => {
      console.error('Email failed:', error);
      alert('RSVP submitted but email could not be sent. Please contact us directly.');
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #FFF5F0 0%, #FFE8E0 50%, #FFD5D0 100%)', minHeight: '100vh', position: 'relative' }}>
      
      {/* Background Effects */}
      <ParticleBackgroundSimple count={30} />
      <SparklesSimple count={25} />
      <PetalsSimple count={20} />
      
      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
      
      {/* Hero Section */}
      <section style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #FFE4E1 0%, #FFF0F5 50%, #FFFFFF 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px'
      }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col xs={12}>
              <Row className="justify-content-center align-items-center mb-5">
                <Col xs={6} md={4} className="text-center">
                  <div style={{
                    width: '180px',
                    height: '180px',
                    margin: '0 auto',
                    borderRadius: '50%',
                    border: '5px solid #FF69B4',
                    background: 'linear-gradient(to bottom, #FFFFFF, #FFE4E1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    boxShadow: '0 0 30px rgba(255, 105, 180, 0.4)'
                  }}>
                    <img 
                      src="/src/assets/images/ks.jpg" 
                      alt="Khushi"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div style="font-size: 4rem">👰</div>';
                      }}
                    />
                  </div>
                  <p style={{ color: '#FF69B4', fontSize: '1.5rem', fontFamily: 'Great Vibes, cursive', marginTop: '15px', fontWeight: 'bold' }}>
                    Khushi
                  </p>
                </Col>
                
                <Col xs={6} md={4} className="text-center">
                  <div style={{
                    width: '180px',
                    height: '180px',
                    margin: '0 auto',
                    borderRadius: '50%',
                    border: '5px solid #FF69B4',
                    background: 'linear-gradient(to bottom, #FFFFFF, #FFE4E1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    boxShadow: '0 0 30px rgba(255, 105, 180, 0.4)'
                  }}>
                    <img 
                      src="/src/assets/images/jatin1.jpeg" 
                      alt="Jatin"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div style="font-size: 4rem">🤵</div>';
                      }}
                    />
                  </div>
                  <p style={{ color: '#FF69B4', fontSize: '1.5rem', fontFamily: 'Great Vibes, cursive', marginTop: '15px', fontWeight: 'bold' }}>
                    Jatin
                  </p>
                </Col>
              </Row>

              <p style={{ color: '#D4AF37', fontSize: '0.9rem', letterSpacing: '3px', fontWeight: '600', marginBottom: '15px' }}>
                THE WEDDING CELEBRATION OF
              </p>
              
              <h1 style={{ 
                fontFamily: 'Cinzel, serif',
                color: '#FF69B4',
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: 'bold',
                marginBottom: '20px',
                textShadow: '0 0 20px rgba(255, 105, 180, 0.3)'
              }}>
                Jatin & Khushi
              </h1>
              
              <div style={{
                width: '100px',
                height: '3px',
                background: 'linear-gradient(to right, #FF69B4, #FFB6C1)',
                margin: '20px auto',
                borderRadius: '10px'
              }} />
              
              <p style={{ color: '#666', fontSize: '1.3rem', fontStyle: 'italic', marginBottom: '40px' }}>
                March 18, 2026
              </p>
              
              <Button 
                className="btn-wedding-gold"
                style={{
                  padding: '15px 50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '50px'
                }}
              >
                ✨ Open Invitation ✨
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Wedding Story Section */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#D4AF37', fontSize: '0.9rem', letterSpacing: '3px', marginBottom: '15px' }}>
              OUR BEAUTIFUL JOURNEY
            </p>
            <h2 style={{ fontFamily: 'Cinzel, serif', color: '#FF69B4', fontSize: '3rem', marginBottom: '20px' }}>
              Love Story
            </h2>
            <div style={{
              width: '100px',
              height: '3px',
              background: 'linear-gradient(to right, #FF69B4, #FFB6C1)',
              margin: '0 auto',
              borderRadius: '10px'
            }} />
          </div>
          
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="glass-card" style={{ padding: '40px', marginBottom: '30px' }}>
                <h4 style={{ color: '#FF69B4', fontFamily: 'Cinzel, serif', marginBottom: '15px' }}>2018 - First Meeting</h4>
                <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  Our paths crossed for the first time, and little did we know it was the beginning of something beautiful.
                </p>
              </div>
              
              <div className="glass-card" style={{ padding: '40px', marginBottom: '30px' }}>
                <h4 style={{ color: '#FF69B4', fontFamily: 'Cinzel, serif', marginBottom: '15px' }}>2020 - The Proposal</h4>
                <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  Under the stars, a question was asked and a forever was promised.
                </p>
              </div>
              
              <div className="glass-card" style={{ padding: '40px' }}>
                <h4 style={{ color: '#FF69B4', fontFamily: 'Cinzel, serif', marginBottom: '15px' }}>2026 - The Wedding</h4>
                <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  Now we invite you to witness our union and celebrate our love.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Events Timeline */}
      <section style={{ padding: '100px 20px', background: 'linear-gradient(135deg, #FFF8F0 0%, #FFE4E1 100%)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#D4AF37', fontSize: '0.9rem', letterSpacing: '3px', marginBottom: '15px' }}>
              WEDDING CELEBRATIONS
            </p>
            <h2 style={{ fontFamily: 'Cinzel, serif', color: '#FF69B4', fontSize: '3rem', marginBottom: '20px' }}>
              Event Timeline
            </h2>
            <div style={{
              width: '100px',
              height: '3px',
              background: 'linear-gradient(to right, #FF69B4, #FFB6C1)',
              margin: '0 auto',
              borderRadius: '10px'
            }} />
          </div>
          
          <Row>
            {[
              { name: 'Haldi Ceremony', date: 'March 16, 2026', time: '10:00 AM', venue: 'Majestic Palace, Delhi' },
              { name: 'Mehendi Night', date: 'March 16, 2026', time: '6:00 PM', venue: 'Majestic Palace, Delhi' },
              { name: 'Wedding Ceremony', date: 'March 18, 2026', time: '7:00 PM', venue: 'Grand Ballroom, Delhi' },
              { name: 'Reception', date: 'March 18, 2026', time: '9:00 PM', venue: 'Grand Ballroom, Delhi' }
            ].map((event, index) => (
              <Col md={6} key={index} style={{ marginBottom: '30px' }}>
                <div className="glass-card" style={{ padding: '30px', height: '100%' }}>
                  <h4 style={{ color: '#FF69B4', fontFamily: 'Cinzel, serif', marginBottom: '15px' }}>
                    {event.name}
                  </h4>
                  <p style={{ color: '#666', marginBottom: '10px' }}>
                    📅 {event.date}
                  </p>
                  <p style={{ color: '#666', marginBottom: '10px' }}>
                    🕐 {event.time}
                  </p>
                  <p style={{ color: '#666' }}>
                    📍 {event.venue}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Countdown Timer */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#D4AF37', fontSize: '0.9rem', letterSpacing: '3px', marginBottom: '15px' }}>
              THE BIG DAY
            </p>
            <h2 style={{ fontFamily: 'Cinzel, serif', color: '#FF69B4', fontSize: '3rem', marginBottom: '20px' }}>
              Countdown
            </h2>
            <div style={{
              width: '100px',
              height: '3px',
              background: 'linear-gradient(to right, #FF69B4, #FFB6C1)',
              margin: '0 auto',
              borderRadius: '10px'
            }} />
          </div>
          
          <Row className="justify-content-center">
            {[
              { value: countdown.days, label: 'Days' },
              { value: countdown.hours, label: 'Hours' },
              { value: countdown.minutes, label: 'Minutes' },
              { value: countdown.seconds, label: 'Seconds' }
            ].map((item, index) => (
              <Col xs={6} md={3} key={index} style={{ marginBottom: '20px' }}>
                <div className="glass-card" style={{ padding: '30px', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FF69B4', fontFamily: 'Cinzel, serif' }}>
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <p style={{ color: '#666', fontSize: '1rem', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    {item.label}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Love Carousel Gallery */}
      <LoveCarousel />

      {/* Venue Section */}
      <section style={{ padding: '100px 20px', background: 'linear-gradient(135deg, #FFE8E0 0%, #FFD5D0 100%)' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#D4AF37', fontSize: '0.9rem', letterSpacing: '3px', marginBottom: '15px' }}>
              CELEBRATION VENUES
            </p>
            <h2 style={{ fontFamily: 'Cinzel, serif', color: '#FF69B4', fontSize: '3rem', marginBottom: '20px' }}>
              Wedding Venues
            </h2>
            <div style={{
              width: '100px',
              height: '3px',
              background: 'linear-gradient(to right, #FF69B4, #FFB6C1)',
              margin: '0 auto',
              borderRadius: '10px'
            }} />
          </div>
          
          <Row>
            {[
              { name: 'Gauri Shankar Mandir', event: 'Haldi & Mehendi', address: 'Near Gauri Shankar Mandir, Jagadhri - 135005', phone: '+91 7056225070', map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d869.4014!2d77.2992623!3d30.175349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390efbf0f8496751%3A0xb4a2ccbffb9701a6!2sShri%20Gauri%20Shankar%20Mandir!5e0!3m2!1sen!2sin!4v1234567890' },
              { name: 'Grand Ballroom', event: 'Wedding & Reception', address: 'Shristi palace, Durga garden, Jagadhri - 135003', phone: '+91 8800291326', map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625!2d77.2992942!3d30.1559845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390efb003f2994a7%3A0x159020c50e721790!2sShrishti%20palace!5e0!3m2!1sen!2sin!4v1234567891' }
            ].map((venue, index) => (
              <Col md={12} key={index} style={{ marginBottom: '50px' }}>
                <Row className="align-items-center">
                  <Col md={6} style={{ marginBottom: '20px' }}>
                    <div className="glass-card" style={{ padding: '0', overflow: 'hidden', height: '350px' }}>
                      <iframe
                        src={venue.map}
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={venue.name}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="glass-card" style={{ padding: '40px' }}>
                      <h3 style={{ color: '#FF69B4', fontFamily: 'Cinzel, serif', fontSize: '2rem', marginBottom: '10px' }}>
                        {venue.name}
                      </h3>
                      <p style={{ color: '#D4AF37', fontSize: '0.9rem', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        {venue.event}
                      </p>
                      <div style={{ marginBottom: '15px' }}>
                        <p style={{ color: '#666', fontSize: '1rem', marginBottom: '5px', fontWeight: '600' }}>📍 Address</p>
                        <p style={{ color: '#666', fontSize: '0.95rem' }}>{venue.address}</p>
                      </div>
                      <div style={{ marginBottom: '20px' }}>
                        <p style={{ color: '#666', fontSize: '1rem', marginBottom: '5px', fontWeight: '600' }}>📞 Contact</p>
                        <p style={{ color: '#666', fontSize: '0.95rem' }}>{venue.phone}</p>
                      </div>
                      <Button 
                        className="btn-wedding-primary"
                        href={`https://maps.google.com/?q=${encodeURIComponent(venue.address)}`}
                        target="_blank"
                        style={{ padding: '12px 30px', fontSize: '1rem' }}
                      >
                        📍 Get Directions
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* RSVP Form */}
      <section style={{ padding: '100px 20px', background: 'white' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#D4AF37', fontSize: '0.9rem', letterSpacing: '3px', marginBottom: '15px' }}>
              BE OUR GUEST
            </p>
            <h2 style={{ fontFamily: 'Cinzel, serif', color: '#FF69B4', fontSize: '3rem', marginBottom: '20px' }}>
              RSVP
            </h2>
            <div style={{
              width: '100px',
              height: '3px',
              background: 'linear-gradient(to right, #FF69B4, #FFB6C1)',
              margin: '0 auto',
              borderRadius: '10px'
            }} />
          </div>
          
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="glass-card" style={{ padding: '50px' }}>
                {showSuccess && (
                  <div style={{ 
                    background: 'linear-gradient(135deg, #FF69B4, #FFB6C1)', 
                    color: 'white', 
                    padding: '20px', 
                    borderRadius: '15px', 
                    marginBottom: '30px',
                    textAlign: 'center',
                    fontWeight: '600'
                  }}>
                    ✨ Thank you! Your RSVP has been submitted successfully! 💕
                  </div>
                )}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label className="form-label-wedding">Full Name *</Form.Label>
                    <Form.Control className="form-control-wedding" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="form-label-wedding">Email Address *</Form.Label>
                    <Form.Control className="form-control-wedding" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="form-label-wedding">Phone Number</Form.Label>
                    <Form.Control className="form-control-wedding" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 9876543210" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="form-label-wedding">Will you attend? *</Form.Label>
                    <div>
                      <Form.Check type="radio" name="attendance" value="yes" checked={formData.attendance === 'yes'} onChange={handleChange} label="Yes, I'll be there! 🎉" style={{ marginBottom: '10px', color: '#666' }} required />
                      <Form.Check type="radio" name="attendance" value="no" checked={formData.attendance === 'no'} onChange={handleChange} label="Sorry, I can't attend" style={{ marginBottom: '10px', color: '#666' }} />
                      <Form.Check type="radio" name="attendance" value="maybe" checked={formData.attendance === 'maybe'} onChange={handleChange} label="Maybe, I'll let you know soon" style={{ color: '#666' }} />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="form-label-wedding">Number of Guests *</Form.Label>
                    <Form.Control className="form-control-wedding" type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" max="5" placeholder="How many guests?" required />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="form-label-wedding">Wishes & Blessings</Form.Label>
                    <Form.Control className="form-control-wedding" as="textarea" name="wishes" value={formData.wishes} onChange={handleChange} rows={4} placeholder="Share your warm wishes..." />
                  </Form.Group>

                  <Button className="btn-wedding-primary" type="submit" style={{ width: '100%', padding: '15px', fontSize: '1.1rem', fontWeight: '600' }}>
                    ✨ Submit RSVP ✨
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer style={{ padding: '80px 20px 40px', background: 'linear-gradient(135deg, #8B0045 0%, #6B0035 100%)', color: 'white' }}>
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col md={10}>
              <h3 style={{ color: '#FFD5D0', fontFamily: 'Cinzel, serif', fontSize: '2.5rem', marginBottom: '20px' }}>
                💕 Jatin & Khushi 💕
              </h3>
              <p style={{ color: '#FFE8E0', fontSize: '1.2rem', marginBottom: '30px', fontStyle: 'italic' }}>
                "Two souls, one heart, forever together"
              </p>
              <div style={{
                width: '80px',
                height: '2px',
                background: 'linear-gradient(to right, #FFD5D0, #FFE8E0)',
                margin: '0 auto 30px',
                borderRadius: '10px'
              }} />
            </Col>
          </Row>

          <Row className="text-center mb-4">
            <Col md={4} style={{ marginBottom: '30px' }}>
              <h5 style={{ color: '#FFD5D0', marginBottom: '15px', fontWeight: '600' }}>📅 Wedding Date</h5>
              <p style={{ color: '#FFE8E0', fontSize: '1rem' }}>March 18, 2026</p>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Save the Date!</p>
            </Col>
            <Col md={4} style={{ marginBottom: '30px' }}>
              <h5 style={{ color: '#FFD5D0', marginBottom: '15px', fontWeight: '600' }}>📍 Venue</h5>
              <p style={{ color: '#FFE8E0', fontSize: '1rem' }}>Grand Ballroom</p>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Delhi, India</p>
            </Col>
            <Col md={4} style={{ marginBottom: '30px' }}>
              <h5 style={{ color: '#FFD5D0', marginBottom: '15px', fontWeight: '600' }}>💌 Contact</h5>
              <p style={{ color: '#FFE8E0', fontSize: '1rem' }}>jatin.khushi@wedding.com</p>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>+91 98765 43210</p>
            </Col>
          </Row>

          <div style={{ borderTop: '1px solid rgba(255, 213, 208, 0.3)', paddingTop: '30px', marginTop: '30px' }}>
            <Row>
              <Col className="text-center">
                <p style={{ color: '#FFE8E0', fontSize: '0.95rem', marginBottom: '10px' }}>
                  Thank you for being part of our special day ✨
                </p>
                <p style={{ color: '#999', fontSize: '0.85rem' }}>
                  © 2024 Jatin & Khushi - With Love & Gratitude 💖
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
      </div>
      
    </div>
  );
}

export default App;
