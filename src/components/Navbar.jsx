import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
          background: '#000919',
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
          <Link to="/" style={navLinkStyle} onClick={() => setMobileOpen(false)}>HOME</Link>
          <Link to="/tournaments" style={navLinkStyle} onClick={() => setMobileOpen(false)}>TOURNAMENTS</Link>
          <Link to="/" style={navLinkStyle} onClick={() => setMobileOpen(false)}>AVAILABLE GAMES</Link>
          <Link to="/" style={navLinkStyle} onClick={() => setMobileOpen(false)}>CONTACT</Link>
          <Link to="/login" style={{ ...navLinkStyle, color: '#fff' }} onClick={() => setMobileOpen(false)}>LOGIN</Link>
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
          background: '#000919',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
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
        </Link>

        <div className="desktop-menu" style={{ alignItems: 'center', gap: '30px' }}>
          <Link to="/" style={{ ...navLinkStyle, color: '#00e5ff', fontWeight: 700 }}>HOME</Link>
          <Link to="/tournaments" style={navLinkStyle}>TOURNAMENTS</Link>
          <Link to="/" style={navLinkStyle}>AVAILABLE GAMES</Link>
          <Link to="/" style={navLinkStyle}>CONTACT</Link>
        </div>

        <div className="desktop-actions" style={{ alignItems: 'center', gap: '18px' }}>
          {/* Notification Icon */}
          <Link to="/" style={{ position: 'relative', cursor: 'pointer', display: 'flex' }}>
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block' }}
            >
              <path 
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" 
                stroke="#fff" 
                strokeWidth="1.5" 
                fill="none"
              />
              <path 
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" 
                stroke="#fff" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </Link>

          {/* LOGIN Button */}
          <Link to="/login">
            <button
              style={{
                background: 'linear-gradient(90deg, #ff9800, #ff5722)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '14px',
                border: 'none',
                borderRadius: '24px',
                padding: '10px 28px',
                cursor: 'pointer',
                transition: 'transform 0.15s, box-shadow 0.15s',
                boxShadow: '0 0 12px rgba(255,87,34,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,87,34,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(255,87,34,0.3)';
              }}
            >
              LOGIN
            </button>
          </Link>
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