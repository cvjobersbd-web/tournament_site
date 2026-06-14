import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const faqs = [
    {
      question: 'How do I join a tournament?',
      answer: 'Simply create an account, browse available tournaments, and click the "Join" button on any tournament you want to participate in.',
    },
    {
      question: 'How are winners paid?',
      answer: 'Winners receive their prize money directly to their registered bank account or mobile wallet within 3-5 business days after tournament completion.',
    },
    {
      question: 'What games are supported?',
      answer: 'We currently support PUBG, Free Fire, and eFootball. More games will be added soon!',
    },
    {
      question: 'Is there any age restriction?',
      answer: 'Players must be at least 16 years old to participate in tournaments. Some tournaments may have additional age requirements.',
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 60% 30%, #1a0a4a 0%, #0d0630 40%, #060318 100%)',
      fontFamily: "'Segoe UI', sans-serif",
      paddingBottom: '80px',
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .hero-section {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .form-container {
          animation: fadeInRight 0.5s ease-out;
        }
        
        .faq-item {
          animation: fadeInUp 0.4s ease-out;
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        left: '-80px',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,87,34,0.1) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
      }} />

      {/* Hero Section */}
      <div className="hero-section" style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        padding: '80px 20px 50px',
      }}>
        <h1 style={{
          color: '#fff',
          fontWeight: 900,
          fontSize: 'clamp(36px, 8vw, 64px)',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          margin: 0,
          textShadow: '0 0 40px rgba(168,85,247,0.5)',
          background: 'linear-gradient(135deg, #fff, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          CONTACT US
        </h1>
      </div>

      {/* Contact Form & Map Section */}
      <div className="contact-grid" style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '32px',
        maxWidth: '1200px',
        margin: '0 auto 60px',
        padding: '0 24px',
      }}>
        {/* Contact Form */}
        <div className="form-container" style={{
          background: 'linear-gradient(135deg, rgba(20,12,60,0.9), rgba(12,6,40,0.95))',
          borderRadius: '24px',
          padding: '32px',
          border: '1px solid rgba(100,80,255,0.25)',
        }}>
          <h2 style={{
            color: '#fff',
            fontSize: '24px',
            fontWeight: 800,
            marginBottom: '8px',
            letterSpacing: '1px',
          }}>Send Us a Message</h2>
          <p style={{
            color: 'rgba(220,220,255,0.6)',
            fontSize: '13px',
            marginBottom: '28px',
          }}>Fill out the form below and we'll get back to you within 24 hours.</p>

          {submitStatus === 'success' && (
            <div style={{
              background: 'rgba(76,175,80,0.2)',
              border: '1px solid rgba(76,175,80,0.4)',
              borderRadius: '12px',
              padding: '12px',
              marginBottom: '20px',
              textAlign: 'center',
            }}>
              <span style={{ color: '#4caf50', fontSize: '13px', fontWeight: 500 }}>
                ✓ Message sent successfully! We'll contact you soon.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                color: 'rgba(255,255,255,0.9)',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '8px',
                letterSpacing: '0.5px',
              }}>YOUR NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(100,80,255,0.3)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#ff9800'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(100,80,255,0.3)'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                color: 'rgba(255,255,255,0.9)',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '8px',
                letterSpacing: '0.5px',
              }}>EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(100,80,255,0.3)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#ff9800'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(100,80,255,0.3)'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                color: 'rgba(255,255,255,0.9)',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '8px',
                letterSpacing: '0.5px',
              }}>SUBJECT</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(100,80,255,0.3)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#ff9800'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(100,80,255,0.3)'}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                color: 'rgba(255,255,255,0.9)',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '8px',
                letterSpacing: '0.5px',
              }}>MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(100,80,255,0.3)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#ff9800'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(100,80,255,0.3)'}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                background: isSubmitting ? 'linear-gradient(90deg, #666, #555)' : 'linear-gradient(90deg, #ff9800, #ff5722)',
                color: '#fff',
                fontWeight: 800,
                fontSize: '15px',
                border: 'none',
                borderRadius: '30px',
                padding: '14px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                letterSpacing: '1px',
                transition: 'transform 0.15s, box-shadow 0.15s',
                opacity: isSubmitting ? 0.7 : 1,
              }}
              onMouseEnter={e => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255,87,34,0.4)';
                }
              }}
              onMouseLeave={e => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>

        {/* Map / Location */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(20,12,60,0.9), rgba(12,6,40,0.95))',
          borderRadius: '24px',
          padding: '32px',
          border: '1px solid rgba(100,80,255,0.25)',
        }}>
          <h2 style={{
            color: '#fff',
            fontSize: '24px',
            fontWeight: 800,
            marginBottom: '8px',
            letterSpacing: '1px',
          }}>Visit Our Office</h2>
          <p style={{
            color: 'rgba(220,220,255,0.6)',
            fontSize: '13px',
            marginBottom: '24px',
          }}>Come visit our headquarters or find us on the map below.</p>
          
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '24px',
            border: '1px solid rgba(100,80,255,0.3)',
          }}>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.837550129698!2d90.405191!3d23.789834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a9a8c0b8c3%3A0x7b5f8e8e6e8e8e8!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1699999999999!5m2!1sen!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
          }}>
            <Link to="/">
              <button style={{
                background: 'transparent',
                border: '2px solid rgba(168,85,247,0.5)',
                color: '#a855f7',
                fontWeight: 700,
                fontSize: '13px',
                borderRadius: '30px',
                padding: '10px 24px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(168,85,247,0.15)';
                e.currentTarget.style.borderColor = '#a855f7';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)';
              }}>
                GET DIRECTIONS →
              </button>
            </Link>
            <Link to="/">
              <button style={{
                background: 'transparent',
                border: '2px solid rgba(255,152,0,0.5)',
                color: '#ff9800',
                fontWeight: 700,
                fontSize: '13px',
                borderRadius: '30px',
                padding: '10px 24px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,152,0,0.15)';
                e.currentTarget.style.borderColor = '#ff9800';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255,152,0,0.5)';
              }}>
                LIVE CHAT SUPPORT
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
        }}>
          <h2 style={{
            color: '#fff',
            fontSize: 'clamp(28px, 5vw, 38px)',
            fontWeight: 900,
            letterSpacing: '2px',
            margin: 0,
          }}>
            ❓ FREQUENTLY ASKED QUESTIONS
          </h2>
          <p style={{ color: 'rgba(220,220,255,0.6)', marginTop: '8px' }}>
            Find quick answers to common questions
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="faq-item"
              style={{
                background: 'linear-gradient(135deg, rgba(20,12,60,0.8), rgba(12,6,40,0.9))',
                borderRadius: '16px',
                padding: '20px 24px',
                border: '1px solid rgba(100,80,255,0.2)',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateX(8px)';
                e.currentTarget.style.borderColor = 'rgba(255,152,0,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.borderColor = 'rgba(100,80,255,0.2)';
              }}
            >
              <h3 style={{
                color: '#ff9800',
                fontSize: '16px',
                fontWeight: 800,
                marginBottom: '10px',
                letterSpacing: '0.5px',
              }}>{faq.question}</h3>
              <p style={{
                color: 'rgba(220,220,255,0.7)',
                fontSize: '14px',
                lineHeight: 1.6,
                margin: 0,
              }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;