import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [tourOpen, setTourOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const closeAll = () => {
    setTourOpen(false);
    setPagesOpen(false);
    setLangOpen(false);
  };

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      navigate('/');
      setMobileOpen(false);
    }
  };

  const navLinkStyle = {
    color: '#ccc',
    fontWeight: 500,
    fontSize: '13px',
    letterSpacing: '1px',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  };

  return (
    <>
      <style>
        {`
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
      `}
      </style>

      {/* Overlay for dropdown menus */}
      {(tourOpen || pagesOpen || langOpen) && (
        <div onClick={closeAll} style={{ position: 'fixed', inset: 0, zIndex: 99 }} />
      )}

      {/* Mobile Menu Overlay */}
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

      {/* Mobile Sidebar Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '280px',
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
            fontSize: '32px',
            float: 'right',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          ×
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginTop: '60px' }}>
          <Link 
            to="/" 
            style={navLinkStyle} 
            onClick={() => setMobileOpen(false)}
            onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
            onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
          >
            HOME
          </Link>
          <Link 
            to="/tournaments" 
            style={navLinkStyle} 
            onClick={() => setMobileOpen(false)}
            onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
            onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
          >
            TOURNAMENTS
          </Link>
          <Link 
            to="/available-games" 
            style={navLinkStyle} 
            onClick={() => setMobileOpen(false)}
            onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
            onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
          >
            AVAILABLE GAMES
          </Link>
          <Link 
            to="/notices" 
            style={navLinkStyle} 
            onClick={() => setMobileOpen(false)}
            onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
            onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
          >
            NOTICES
          </Link>
          <Link 
            to="/contact" 
            style={navLinkStyle} 
            onClick={() => setMobileOpen(false)}
            onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
            onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
          >
            CONTACT
          </Link>
          
          {currentUser ? (
            <>
              {/* User Info in Mobile */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 0',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                margin: '10px 0',
              }}>
                {currentUser.photoURL ? (
                  <img 
                    src={currentUser.photoURL} 
                    alt="Profile" 
                    style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff9800, #ff5722)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>
                    {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : currentUser.email[0].toUpperCase()}
                  </div>
                )}
                <div>
                  <div style={{ color: '#fff', fontSize: '14px', fontWeight: 600 }}>
                    {currentUser.displayName || currentUser.email.split('@')[0]}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>
                    {currentUser.email}
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleLogout}
                style={{
                  background: 'linear-gradient(90deg, #ff5722, #d32f2f)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '14px',
                  border: 'none',
                  borderRadius: '24px',
                  padding: '12px',
                  cursor: 'pointer',
                  transition: 'transform 0.15s',
                  marginTop: '10px',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                LOGOUT
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              style={{ ...navLinkStyle, color: '#fff', fontWeight: 700 }} 
              onClick={() => setMobileOpen(false)}
              onMouseEnter={e => e.currentTarget.style.color = '#ff9800'}
              onMouseLeave={e => e.currentTarget.style.color = '#fff'}
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>

      {/* Desktop Navbar */}
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
        {/* Logo */}
        <Link 
          to="/" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <img 
            src="https://i.ibb.co.com/1t876NJQ/eb.png" 
            alt="Begam Logo"
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '100%',
              objectFit: 'cover',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 0 12px rgba(0,0,0,0.3)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          {/* <span style={{
            color: '#fff',
            fontWeight: 800,
            fontSize: '20px',
            letterSpacing: '2px',
            background: 'linear-gradient(135deg, #ff9800, #ff5722)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            BEGAM
          </span> */}
        </Link>

        {/* Desktop Menu Links */}
        <div className="desktop-menu" style={{ alignItems: 'center', gap: '30px' }}>
          <Link 
            to="/" 
            style={{ ...navLinkStyle, color: '#00e5ff', fontWeight: 700 }}
            onMouseEnter={e => e.currentTarget.style.color = '#ff9800'}
            onMouseLeave={e => e.currentTarget.style.color = '#00e5ff'}
          >
            HOME
          </Link>
          <Link 
            to="/tournaments" 
            style={navLinkStyle}
            onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
            onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
          >
            TOURNAMENTS
          </Link>
          <Link 
            to="/available-games" 
            style={navLinkStyle}
            onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
            onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
          >
            AVAILABLE GAMES
          </Link>
          <Link 
            to="/notices" 
            style={navLinkStyle}
            onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
            onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
          >
            NOTICES
          </Link>
          <Link 
            to="/contact" 
            style={navLinkStyle}
            onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
            onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
          >
            CONTACT
          </Link>
        </div>

        {/* Desktop Actions - User Info & Login/Logout */}
        <div className="desktop-actions" style={{ alignItems: 'center', gap: '18px' }}>
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              {/* User Avatar & Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {currentUser.photoURL ? (
                  <img 
                    src={currentUser.photoURL} 
                    alt="Profile" 
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      objectFit: 'cover',
                      border: '2px solid rgba(255,152,0,0.5)'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff9800, #ff5722)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>
                    {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : currentUser.email[0].toUpperCase()}
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>
                    {currentUser.displayName || currentUser.email.split('@')[0]}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>
                    {currentUser.email}
                  </span>
                </div>
              </div>
              
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,87,34,0.5)',
                  color: '#ff9800',
                  fontWeight: 600,
                  fontSize: '13px',
                  borderRadius: '24px',
                  padding: '8px 20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,87,34,0.1)';
                  e.currentTarget.style.borderColor = '#ff5722';
                  e.currentTarget.style.color = '#ff5722';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255,87,34,0.5)';
                  e.currentTarget.style.color = '#ff9800';
                }}
              >
                LOGOUT
              </button>
            </div>
          ) : (
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
          )}
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button
          className="hamburger"
          onClick={() => setMobileOpen(true)}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '28px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          ☰
        </button>
      </nav>
    </>
  );
};

export default Navbar;