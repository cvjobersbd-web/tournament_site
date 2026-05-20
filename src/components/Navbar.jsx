import React, { useState } from 'react';

const Navbar = () => {
  const [tourOpen, setTourOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => {
    setTourOpen(false);
    setPagesOpen(false);
    setLangOpen(false);
  };

  const navLinkStyle = {
    color: '#ccc',
    fontWeight: 500,
    fontSize: '13px',
    letterSpacing: '1px',
    textDecoration: 'none',
  };

  return (
    <>
      <style>{`
        .desktop-menu {
          display: flex;
        }

        .desktop-actions {
          display: flex;
        }

        .hamburger {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-menu,
          .desktop-actions {
            display: none !important;
          }

          .hamburger {
            display: block !important;
          }

          .navbar {
            padding: 16px 20px !important;
          }
        }
      `}</style>

      {(tourOpen || pagesOpen || langOpen) && (
        <div onClick={closeAll} style={{ position: 'fixed', inset: 0, zIndex: 99 }} />
      )}

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            zIndex: 999,
          }}
        />
      )}

      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '50%',
          height: '100vh',
          background: '#12073a',
          zIndex: 1000,
          padding: '28px 20px',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s ease',
          boxShadow: '-8px 0 30px rgba(0,0,0,0.4)',
        }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '28px',
            float: 'right',
            cursor: 'pointer',
          }}
        >
          ×
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginTop: '60px' }}>
          <a href="#" style={navLinkStyle}>HOME</a>
          <a href="#" style={navLinkStyle}>TOURNAMENTS</a>
          <a href="#" style={navLinkStyle}>PAGES</a>
          <a href="#" style={navLinkStyle}>CONTACT</a>
          <a href="#" style={{ ...navLinkStyle, color: '#fff' }}>LOGIN</a>

          <button
            style={{
              background: 'linear-gradient(90deg, #ff9800, #ff5722)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '14px',
              border: 'none',
              borderRadius: '24px',
              padding: '10px 20px',
              cursor: 'pointer',
            }}
          >
            JOIN NOW!
          </button>
        </div>
      </div>

      <nav
        className="navbar"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 48px',
          position: 'relative',
          zIndex: 100,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff9800, #ff5722)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              color: '#fff',
              fontSize: '18px',
            }}
          >
            b
          </div>

          <span style={{ color: '#fff', fontWeight: 800, fontSize: '22px', letterSpacing: '2px' }}>
            BEGAM
          </span>
        </div>

        <div className="desktop-menu" style={{ alignItems: 'center', gap: '30px' }}>
          <a href="#" style={{ ...navLinkStyle, color: '#00e5ff', fontWeight: 700 }}>HOME</a>
          <a href="#" style={navLinkStyle}>TOURNAMENTS</a>
          <a href="#" style={navLinkStyle}>PAGES</a>
          <a href="#" style={navLinkStyle}>CONTACT</a>
        </div>

        <div className="desktop-actions" style={{ alignItems: 'center', gap: '18px' }}>
          <a href="#" style={{ color: '#fff', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
            LOGIN
          </a>

          <button
            style={{
              background: 'linear-gradient(90deg, #ff9800, #ff5722)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '14px',
              border: 'none',
              borderRadius: '24px',
              padding: '10px 24px',
              cursor: 'pointer',
            }}
          >
            JOIN NOW!
          </button>
        </div>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '30px',
            cursor: 'pointer',
          }}
        >
          ☰
        </button>
      </nav>
    </>
  );
};

export default Navbar;