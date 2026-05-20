import React, { useState } from 'react';

const Footer = () => {
  return (
    <>
      {/* ── FOOTER SECTION ── */}
      <footer style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #06031a 0%, #04020f 100%)',
        overflow: 'hidden',
        zIndex: 2,
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
            <div style={{
              width: '50px', height: '50px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff9800, #e91e8c)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 20px rgba(255,120,0,0.5)',
              fontWeight: 900, fontSize: '22px', color: '#fff',
              fontFamily: "'Segoe UI', sans-serif",
            }}>M</div>
            <span style={{
              color: '#fff', fontWeight: 900, fontSize: '24px',
              letterSpacing: '3px', fontFamily: "'Segoe UI', sans-serif",
            }}>MGT ESPORTS</span>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', gap: '48px', flex: '0 0 auto' }}>
            {['HOME', 'ABOUT US', 'CONTACT'].map(link => (
              <a key={link} href="#" style={{
                color: 'rgba(220,220,255,0.8)', fontWeight: 600,
                fontSize: '15px', letterSpacing: '1.5px',
                textDecoration: 'none', fontFamily: "'Segoe UI', sans-serif",
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(220,220,255,0.8)'; }}
              >{link}</a>
            ))}
          </nav>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '14px', flex: '0 0 auto' }}>
            {[
              {
                label: 'Facebook',
                path: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z',
              },
              {
                label: 'Twitter',
                path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
              },
              {
                label: 'Instagram',
                path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
              },
            ].map(social => (
              <a key={social.label} href="#" style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
                color: 'rgba(220,220,255,0.7)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.boxShadow = '0 0 12px rgba(100,80,255,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="rgba(220,220,255,0.8)">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
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
            color: 'rgba(200,200,255,0.5)', fontSize: '14px',
            margin: 0, fontFamily: "'Segoe UI', sans-serif",
            letterSpacing: '0.5px',
          }}>
            Copyright © 2021. All Rights Reserved By{' '}
            <span style={{
              color: '#ff9800', fontWeight: 700,
              textShadow: '0 0 8px rgba(255,152,0,0.4)',
            }}>MGT ESPORTS</span>
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
          
          .logo span {
            font-size: 20px !important;
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