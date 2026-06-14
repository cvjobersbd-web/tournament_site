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

        /* Mobile Menu Animation */
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes menuItemFade {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-menu-item {
          animation: menuItemFade 0.4s ease forwards;
          opacity: 0;
        }

        .mobile-menu-item:nth-child(1) { animation-delay: 0.05s; }
        .mobile-menu-item:nth-child(2) { animation-delay: 0.1s; }
        .mobile-menu-item:nth-child(3) { animation-delay: 0.15s; }
        .mobile-menu-item:nth-child(4) { animation-delay: 0.2s; }
        .mobile-menu-item:nth-child(5) { animation-delay: 0.25s; }
        .mobile-menu-item:nth-child(6) { animation-delay: 0.3s; }
        .mobile-menu-item:nth-child(7) { animation-delay: 0.35s; }

        @media (max-width: 768px) {
          .desktop-menu,
          .desktop-actions {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
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
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 999,
            animation: 'fadeIn 0.3s ease',
          }}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '85%',
          maxWidth: '340px',
          height: '100vh',
          background: 'linear-gradient(145deg, #000919 0%, #001026 100%)',
          zIndex: 1000,
          padding: '0',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
          boxShadow: '-20px 0 40px rgba(0,0,0,0.5)',
          overflowY: 'auto',
        }}
      >
        {/* Header with close button */}
        <div style={{
          padding: '24px 24px 16px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <img 
              src="https://i.ibb.co.com/1t876NJQ/eb.png" 
              alt="Begam Logo"
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                border: '1px solid rgba(255,152,0,0.4)',
              }}
            />
            <span style={{
              color: '#fff',
              fontWeight: 800,
              fontSize: '20px',
              background: 'linear-gradient(135deg, #ff9800, #ff5722)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              BEGAM
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: 'none',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,87,34,0.3)';
              e.currentTarget.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}
          >
            ×
          </button>
        </div>

        {/* Menu Items */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px',
          padding: '0 20px',
        }}>
          <Link 
            to="/" 
            className="mobile-menu-item"
            style={{
              ...navLinkStyle,
              padding: '14px 18px',
              borderRadius: '14px',
              background: 'rgba(0,229,255,0.08)',
              color: '#00e5ff',
              fontWeight: 700,
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.2s',
            }} 
            onClick={() => setMobileOpen(false)}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0,229,255,0.15)';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(0,229,255,0.08)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <span>🏠</span> HOME
          </Link>
          
          <Link 
            to="/tournaments" 
            className="mobile-menu-item"
            style={{
              ...navLinkStyle,
              padding: '14px 18px',
              borderRadius: '14px',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.2s',
            }} 
            onClick={() => setMobileOpen(false)}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.color = '#00e5ff';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#ccc';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <span>🏆</span> TOURNAMENTS
          </Link>
          
          <Link 
            to="/available-games" 
            className="mobile-menu-item"
            style={{
              ...navLinkStyle,
              padding: '14px 18px',
              borderRadius: '14px',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.2s',
            }} 
            onClick={() => setMobileOpen(false)}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.color = '#00e5ff';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#ccc';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <span>🎮</span> AVAILABLE GAMES
          </Link>
          
          <Link 
            to="/notices" 
            className="mobile-menu-item"
            style={{
              ...navLinkStyle,
              padding: '14px 18px',
              borderRadius: '14px',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.2s',
            }} 
            onClick={() => setMobileOpen(false)}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.color = '#00e5ff';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#ccc';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <span>📢</span> NOTICES
          </Link>
          
          <Link 
            to="/contact" 
            className="mobile-menu-item"
            style={{
              ...navLinkStyle,
              padding: '14px 18px',
              borderRadius: '14px',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.2s',
            }} 
            onClick={() => setMobileOpen(false)}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.color = '#00e5ff';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#ccc';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <span>📞</span> CONTACT
          </Link>
        </div>
        
        {currentUser ? (
          <>
            {/* User Info in Mobile */}
            <div className="mobile-menu-item" style={{
              margin: '24px 20px 16px 20px',
              padding: '20px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}>
                {currentUser.photoURL ? (
                  <img 
                    src={currentUser.photoURL} 
                    alt="Profile" 
                    style={{ width: '55px', height: '55px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ff9800' }}
                  />
                ) : (
                  <div style={{
                    width: '55px',
                    height: '55px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff9800, #ff5722)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '24px'
                  }}>
                    {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : currentUser.email[0].toUpperCase()}
                  </div>
                )}
                <div>
                  <div style={{ color: '#fff', fontSize: '16px', fontWeight: 700 }}>
                    {currentUser.displayName || currentUser.email.split('@')[0]}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '4px' }}>
                    {currentUser.email}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Logout Button */}
            <div className="mobile-menu-item" style={{ padding: '0 20px', marginTop: '8px' }}>
              <button
                onClick={handleLogout}
                style={{
                  width: '100%',
                  background: 'linear-gradient(90deg, #ff5722, #d32f2f)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '15px',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '14px 20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,87,34,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span>🚪</span> LOGOUT
              </button>
            </div>
          </>
        ) : (
          <div className="mobile-menu-item" style={{ padding: '0 20px', marginTop: '24px' }}>
            <Link 
              to="/login" 
              onClick={() => setMobileOpen(false)}
              style={{ textDecoration: 'none' }}
            >
              <button
                style={{
                  width: '100%',
                  background: 'linear-gradient(90deg, #ff9800, #ff5722)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '15px',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '14px 20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,87,34,0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span>🔑</span> LOGIN
              </button>
            </Link>
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: '40px',
          padding: '20px',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', margin: 0 }}>
            © 2024 BEGAM. All rights reserved.
          </p>
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
          <span style={{
            color: '#fff',
            fontWeight: 800,
            fontSize: '20px',
            letterSpacing: '2px',
            background: 'linear-gradient(135deg, #ff9800, #ff5722)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            BEGAM
          </span>
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
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '10px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,152,0,0.15)';
            e.currentTarget.style.borderColor = '#ff9800';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 6H21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 18H21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>
    </>
  );
};

export default Navbar;