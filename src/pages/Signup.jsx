import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signupWithEmail, loginWithGoogle } from '../firebase/config';

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
    
    if (!fullName || !email || !password || !confirmPassword) {
      setError('সব ঘর পূরণ করুন!');
      return;
    }
    
    if (password.length < 6) {
      setError('পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে!');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('পাসওয়ার্ড মিলছে না!');
      return;
    }
    
    if (!agreeTerms) {
      setError('টার্মস এন্ড কন্ডিশনে সম্মত হোন!');
      return;
    }
    
    setLoading(true);

    try {
      const result = await signupWithEmail(email, password, fullName);
      if (result.success) {
        navigate('/login');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('সাইনআপ করতে সমস্যা হয়েছে! আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError('');
    setLoading(true);
    
    try {
      const result = await loginWithGoogle();
      if (result.success) {
        navigate('/');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('গুগল সাইনআপ ব্যর্থ হয়েছে!');
    } finally {
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
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)',
        zIndex: 1,
      }} />

      <div style={{
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
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img 
              src="https://i.ibb.co.com/1t876NJQ/eb.png" 
              alt="Begam Logo"
              style={{
                width: '75px',
                height: '75px',
                margin: '0 auto 16px',
                borderRadius: '100%',
                objectFit: 'cover',
                border: '2px solid rgba(168,85,247,0.6)',
                boxShadow: '0 0 20px rgba(168,85,247,0.3)',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                display: 'block',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </Link>
          <h2 style={{
            color: '#fff',
            fontSize: '30px',
            fontWeight: 800,
            margin: '0 0 6px 0',
            background: 'linear-gradient(135deg, #fff, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Create Account</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
            Join the ultimate gaming community
          </p>
        </div>

        {error && (
          <div style={{
            background: 'rgba(255,87,34,0.2)',
            border: '1px solid rgba(255,87,34,0.4)',
            borderRadius: '12px',
            padding: '12px',
            marginBottom: '24px',
            textAlign: 'center',
          }}>
            <span style={{ color: '#ff9800', fontSize: '13px', fontWeight: 500 }}>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600, marginBottom: '8px', display: 'block' }}>
              FULL NAME
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '16px',
              padding: '4px 16px',
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

          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600, marginBottom: '8px', display: 'block' }}>
              EMAIL ADDRESS
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '16px',
              padding: '4px 16px',
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

          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600, marginBottom: '8px', display: 'block' }}>
              PASSWORD
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '16px',
              padding: '4px 16px',
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
                style={{ background: 'none', border: 'none', cursor: 'pointer', opacity: 0.6 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#fff" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600, marginBottom: '8px', display: 'block' }}>
              CONFIRM PASSWORD
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '16px',
              padding: '4px 16px',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginRight: '12px', opacity: 0.7 }}>
                <rect x="5" y="11" width="14" height="11" rx="2" stroke="#fff" strokeWidth="1.5"/>
                <path d="M8 11V8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8V11" stroke="#fff" strokeWidth="1.5"/>
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
                style={{ background: 'none', border: 'none', cursor: 'pointer', opacity: 0.6 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#fff" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#ff9800' }}
            />
            <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', cursor: 'pointer' }}>
              I agree to the{' '}
              <Link to="/" style={{ color: '#ff9800', textDecoration: 'none' }}>Terms & Conditions</Link>
              {' '}and{' '}
              <Link to="/" style={{ color: '#ff9800', textDecoration: 'none' }}>Privacy Policy</Link>
            </label>
          </div>

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
              marginBottom: '24px',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'CREATING ACCOUNT...' : 'SIGN UP'}
          </button>

          <div style={{ textAlign: 'center' }}>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Already have an account?{' '}
            </span>
            <Link to="/login" style={{ color: '#ff9800', fontSize: '14px', textDecoration: 'none', fontWeight: 700 }}>
              Sign In
            </Link>
          </div>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '32px 0 24px' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.15)' }} />
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>OR</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.15)' }} />
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button
            onClick={handleGoogleSignup}
            disabled={loading}
            style={{
              flex: 1,
              maxWidth: '200px',
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '16px',
              padding: '10px',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => !loading && (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.4)'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#fff" fillOpacity="0.8"/>
              <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.13 18.63 6.71 16.7 5.85 14.09H2.18V16.96C4 20.53 7.75 23 12 23Z" fill="#fff" fillOpacity="0.8"/>
              <path d="M5.85 14.09C5.63 13.44 5.5 12.74 5.5 12C5.5 11.26 5.63 10.56 5.85 9.91V7.04H2.18C1.43 8.55 1 10.24 1 12C1 13.76 1.43 15.45 2.18 16.96L5.85 14.09Z" fill="#fff" fillOpacity="0.8"/>
              <path d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.86C17.45 2.09 14.97 1 12 1C7.75 1 4 3.47 2.18 7.04L5.85 9.91C6.71 7.31 9.13 5.38 12 5.38Z" fill="#fff" fillOpacity="0.8"/>
            </svg>
            <span style={{ color: '#fff', fontSize: '13px', fontWeight: 500 }}>Sign up with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;