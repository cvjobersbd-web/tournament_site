import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!agreeTerms) {
      setError('Please agree to the Terms & Conditions');
      return;
    }
    
    setLoading(true);

    try {
      // ডেমো লজিক (প্রোডাকশনে API কল যোগ করুন)
      console.log('Signup attempt:', { fullName, email, password });
      setTimeout(() => {
        setLoading(false);
        navigate('/login');
      }, 1000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      fontFamily: "'Segoe UI', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
    }}>
      {/* ==================== BACKGROUND IMAGE ==================== */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url('https://i.ibb.co.com/CKcPZ4P2/facebook-cover.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
      }} />

      {/* Light Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)',
        zIndex: 1,
      }} />

      {/* Animated Background Orbs */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 1,
        animation: 'floatOrb 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,87,34,0.08) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 1,
        animation: 'floatOrb 10s ease-in-out infinite reverse',
      }} />

      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .signup-card {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .input-group {
          transition: all 0.2s ease;
        }
        
        .input-group:focus-within {
          transform: translateX(4px);
        }
        
        @media (max-width: 640px) {
          .signup-card {
            padding: 32px 24px !important;
          }
        }
      `}</style>

      {/* Signup Card */}
      <div className="signup-card" style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '520px',
        width: '100%',
        background: 'rgba(10, 15, 30, 0.65)',
        backdropFilter: 'blur(12px)',
        borderRadius: '32px',
        padding: '48px 40px',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)',
      }}>
        {/* Logo and Title */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{
              width: '65px',
              height: '65px',
              margin: '0 auto 16px',
              background: 'linear-gradient(135deg, #1a0f5e, #2a1a7e)',
              borderRadius: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(168,85,247,0.6)',
              boxShadow: '0 0 20px rgba(168,85,247,0.3)',
              cursor: 'pointer',
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#a855f7" strokeWidth="1.5" fill="none"/>
                <path d="M2 17L12 22L22 17" stroke="#a855f7" strokeWidth="1.5" fill="none"/>
                <path d="M2 12L12 17L22 12" stroke="#a855f7" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </Link>
          <h2 style={{
            color: '#fff',
            fontSize: '30px',
            fontWeight: 800,
            margin: '0 0 6px 0',
            letterSpacing: '-0.5px',
            background: 'linear-gradient(135deg, #fff, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}>Create Account</h2>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '14px',
            margin: 0,
            textShadow: '0 1px 5px rgba(0,0,0,0.2)',
          }}>Join the ultimate gaming community</p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: 'rgba(255,87,34,0.2)',
            border: '1px solid rgba(255,87,34,0.4)',
            borderRadius: '12px',
            padding: '12px',
            marginBottom: '24px',
            textAlign: 'center',
            backdropFilter: 'blur(4px)',
          }}>
            <span style={{ color: '#ff9800', fontSize: '13px', fontWeight: 500 }}>{error}</span>
          </div>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="input-group" style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: 'rgba(255,255,255,0.9)',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '8px',
              letterSpacing: '0.5px',
            }}>FULL NAME</label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '16px',
              padding: '4px 16px',
              transition: 'all 0.2s',
              backdropFilter: 'blur(4px)',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px', opacity: 0.7 }}>
                <path d="M20 21V19C20 16.8 18.2 15 16 15H8C5.8 15 4 16.8 4 19V21" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="7" r="4" stroke="#fff" strokeWidth="1.5"/>
              </svg>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  padding: '14px 0',
                  color: '#fff',
                  fontSize: '15px',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="input-group" style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: 'rgba(255,255,255,0.9)',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '8px',
              letterSpacing: '0.5px',
            }}>EMAIL ADDRESS</label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '16px',
              padding: '4px 16px',
              backdropFilter: 'blur(4px)',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px', opacity: 0.7 }}>
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#fff" strokeWidth="1.5"/>
                <path d="M22 6L12 13L2 6" stroke="#fff" strokeWidth="1.5"/>
              </svg>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  padding: '14px 0',
                  color: '#fff',
                  fontSize: '15px',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="input-group" style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: 'rgba(255,255,255,0.9)',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '8px',
              letterSpacing: '0.5px',
            }}>PASSWORD</label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '16px',
              padding: '4px 16px',
              backdropFilter: 'blur(4px)',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px', opacity: 0.7 }}>
                <rect x="5" y="11" width="14" height="11" rx="2" stroke="#fff" strokeWidth="1.5"/>
                <path d="M8 11V8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8V11" stroke="#fff" strokeWidth="1.5"/>
                <circle cx="12" cy="16" r="1.5" fill="#fff"/>
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  padding: '14px 0',
                  color: '#fff',
                  fontSize: '15px',
                  outline: 'none',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  display: 'flex',
                  alignItems: 'center',
                  opacity: 0.6,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#fff" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="input-group" style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              color: 'rgba(255,255,255,0.9)',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '8px',
              letterSpacing: '0.5px',
            }}>CONFIRM PASSWORD</label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '16px',
              padding: '4px 16px',
              backdropFilter: 'blur(4px)',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px', opacity: 0.7 }}>
                <rect x="5" y="11" width="14" height="11" rx="2" stroke="#fff" strokeWidth="1.5"/>
                <path d="M8 11V8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8V11" stroke="#fff" strokeWidth="1.5"/>
                <circle cx="12" cy="16" r="1.5" fill="#fff"/>
                <path d="M15 16L18 19M18 16L15 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  padding: '14px 0',
                  color: '#fff',
                  fontSize: '15px',
                  outline: 'none',
                }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  display: 'flex',
                  alignItems: 'center',
                  opacity: 0.6,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#fff" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '28px',
          }}>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              style={{
                width: '18px',
                height: '18px',
                cursor: 'pointer',
                accentColor: '#ff9800',
              }}
            />
            <label style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '13px',
              cursor: 'pointer',
            }}>
              I agree to the{' '}
              <Link to="/" style={{ color: '#ff9800', textDecoration: 'none' }}>Terms & Conditions</Link>
              {' '}and{' '}
              <Link to="/" style={{ color: '#ff9800', textDecoration: 'none' }}>Privacy Policy</Link>
            </label>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: loading ? 'linear-gradient(90deg, #666, #555)' : 'linear-gradient(90deg, #ff9800, #ff5722)',
              color: '#fff',
              fontWeight: 800,
              fontSize: '16px',
              border: 'none',
              borderRadius: '30px',
              padding: '14px',
              cursor: loading ? 'not-allowed' : 'pointer',
              letterSpacing: '1px',
              boxShadow: loading ? 'none' : '0 0 20px rgba(255,87,34,0.4)',
              transition: 'transform 0.15s, box-shadow 0.15s',
              marginBottom: '24px',
              opacity: loading ? 0.7 : 1,
            }}
            onMouseEnter={e => {
              if (!loading) {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255,87,34,0.6)';
              }
            }}
            onMouseLeave={e => {
              if (!loading) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,87,34,0.4)';
              }
            }}
          >
            {loading ? 'CREATING ACCOUNT...' : 'SIGN UP'}
          </button>

          {/* Login Link */}
          <div style={{ textAlign: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Already have an account?{' '}
            </span>
            <Link to="/login" style={{
              color: '#ff9800',
              fontSize: '14px',
              textDecoration: 'none',
              fontWeight: 700,
              transition: 'color 0.2s',
            }} onMouseEnter={e => e.currentTarget.style.color = '#a855f7'} onMouseLeave={e => e.currentTarget.style.color = '#ff9800'}>
              Sign In
            </Link>
          </div>
        </form>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          margin: '32px 0 24px',
        }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.15)' }} />
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>OR</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.15)' }} />
        </div>

        {/* Social Signup Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{
            flex: 1,
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '16px',
            padding: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s',
            backdropFilter: 'blur(4px)',
          }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.4)'}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879V14.89H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.879C18.343 21.129 22 16.99 22 12Z" fill="#fff" fillOpacity="0.8"/>
            </svg>
            <span style={{ color: '#fff', fontSize: '13px', fontWeight: 500 }}>Facebook</span>
          </button>
          <button style={{
            flex: 1,
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '16px',
            padding: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s',
            backdropFilter: 'blur(4px)',
          }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.4)'}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#fff" fillOpacity="0.8"/>
              <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.13 18.63 6.71 16.7 5.85 14.09H2.18V16.96C4 20.53 7.75 23 12 23Z" fill="#fff" fillOpacity="0.8"/>
              <path d="M5.85 14.09C5.63 13.44 5.5 12.74 5.5 12C5.5 11.26 5.63 10.56 5.85 9.91V7.04H2.18C1.43 8.55 1 10.24 1 12C1 13.76 1.43 15.45 2.18 16.96L5.85 14.09Z" fill="#fff" fillOpacity="0.8"/>
              <path d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.86C17.45 2.09 14.97 1 12 1C7.75 1 4 3.47 2.18 7.04L5.85 9.91C6.71 7.31 9.13 5.38 12 5.38Z" fill="#fff" fillOpacity="0.8"/>
            </svg>
            <span style={{ color: '#fff', fontSize: '13px', fontWeight: 500 }}>Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;