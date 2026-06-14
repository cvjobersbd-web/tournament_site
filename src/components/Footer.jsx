import React, { useState } from 'react';

const Footer = () => {
  return (
    <>
      {/* ── FOOTER SECTION ── */}
      <footer style={{
        position: 'relative',
        background: '#000919',
        overflow: 'hidden',
        zIndex: 2,
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        {/* Character silhouette bg */}
        <div style={{
          position: 'absolute', bottom: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '100%', height: '100%',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(60,30,150,0.2) 0%, transparent 60%)',
          zIndex: 0, pointerEvents: 'none',
        }} />

        {/* Main footer content */}
        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: '1200px', margin: '0 auto',
          padding: '48px 60px 24px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          flexWrap: 'wrap',
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '0 0 auto' }}>
            <img 
              src="https://i.ibb.co.com/1t876NJQ/eb.png"
              alt="Begam Logo"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '100%',
                objectFit: 'cover',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 0 12px rgba(0,0,0,0.3)',
              }}
            />
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', gap: '48px', flex: '0 0 auto' }}>
            {['HOME', 'ABOUT US', 'CONTACT'].map(link => (
              <a key={link} href="#" style={{
                color: '#ccc',
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '1px',
                textDecoration: 'none',
                fontFamily: "'Segoe UI', sans-serif",
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = '#00e5ff'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#ccc'; }}
              >{link}</a>
            ))}
          </nav>

          {/* Social icons - Facebook, YouTube, Gmail */}
          <div style={{ display: 'flex', gap: '14px', flex: '0 0 auto' }}>
            {/* Facebook Icon */}
            <a key="Facebook" href="#" style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
                color: 'rgba(220,220,255,0.7)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#ff9800';
                e.currentTarget.style.background = 'rgba(255,152,0,0.1)';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(255,152,0,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="rgba(220,220,255,0.8)">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>

            {/* YouTube Icon */}
            <a key="YouTube" href="#" style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
                color: 'rgba(220,220,255,0.7)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#ff9800';
                e.currentTarget.style.background = 'rgba(255,152,0,0.1)';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(255,152,0,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="rgba(220,220,255,0.8)">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>

            {/* Gmail Icon */}
            <a key="Gmail" href="#" style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
                color: 'rgba(220,220,255,0.7)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#ff9800';
                e.currentTarget.style.background = 'rgba(255,152,0,0.1)';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(255,152,0,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="rgba(220,220,255,0.8)">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.156-3.336 3.91-2.21L12 10.182l8.09-6.935c1.754-1.126 3.91.187 3.91 2.21z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          padding: '0 60px',
        }}>
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
          }} />
        </div>

        {/* Copyright */}
        <div style={{
          position: 'relative', zIndex: 1,
          textAlign: 'center', padding: '20px 40px 28px',
        }}>
          <p style={{
            color: '#ccc', fontSize: '13px',
            margin: 0, fontFamily: "'Segoe UI', sans-serif",
            letterSpacing: '1px',
          }}>
            Copyright © 2021. All Rights Reserved By{' '}
            <span style={{
              background: 'linear-gradient(90deg, #ff9800, #ff5722)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 700,
              textShadow: '0 0 8px rgba(255,152,0,0.4)',
            }}>BEGAM</span>
          </p>
        </div>
      </footer>

      <style>{`
        input::placeholder { color: rgba(180,180,220,0.5); }
        input:focus { outline: none; }
        
        /* Responsive Styles */
        @media (max-width: 768px) {          
          .footer-content {
            flex-direction: column !important;
            text-align: center !important;
            gap: 28px !important;
            padding: 36px 30px 20px !important;
          }
          
          .nav-links {
            gap: 32px !important;
            justify-content: center !important;
            flex-wrap: wrap !important;
          }
          
          .nav-links a {
            font-size: 13px !important;
          }
          
          .social-icons {
            justify-content: center !important;
          }
          
          .copyright {
            padding: 16px 20px 24px !important;
            font-size: 12px !important;
          }
        }
        
        @media (max-width: 480px) {          
          .footer-content {
            padding: 30px 20px 20px !important;
          }
          
          .logo-icon {
            width: 40px !important;
            height: 40px !important;
            font-size: 18px !important;
          }
          
          .nav-links {
            gap: 24px !important;
          }
          
          .nav-links a {
            font-size: 12px !important;
            letter-spacing: 1px !important;
          }
          
          .social-icons {
            gap: 10px !important;
          }
          
          .social-icon {
            width: 36px !important;
            height: 36px !important;
          }
          
          .social-icon svg {
            width: 14px !important;
            height: 14px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;