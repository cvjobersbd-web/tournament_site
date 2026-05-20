import React, { useEffect, useState } from 'react';

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 60% 40%, #1a0a4a 0%, #0d0630 40%, #060318 100%)',
      fontFamily: "'Segoe UI', sans-serif",
      overflow: 'hidden',
      position: 'relative',
    }}>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinReverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes flicker {
          from { transform: scaleY(1) translateY(0); opacity: 0.85; }
          to { transform: scaleY(1.1) translateY(-4px); opacity: 1; }
        }
        * { box-sizing: border-box; }

        .hero-section {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          min-height: 100vh;
          position: relative;
          z-index: 2;
        }

        .hero-left-char {
          flex: 0 0 320px;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          position: relative;
          z-index: 3;
        }

        .hero-center {
          flex: 0 0 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
          padding-bottom: 80px;
          position: relative;
          z-index: 4;
        }

        .hero-right-char {
          flex: 0 0 320px;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          position: relative;
          z-index: 3;
        }

        .hero-title {
          color: #fff;
          font-weight: 900;
          font-size: 64px;
          letter-spacing: 4px;
          margin: 0 0 18px 0;
          line-height: 1;
          text-shadow: 0 0 40px rgba(255,255,255,0.15);
        }

        .hero-subtitle {
          color: #00e5ff;
          font-weight: 800;
          font-size: 22px;
          letter-spacing: 3px;
          margin-bottom: 8px;
          text-shadow: 0 0 20px rgba(0,229,255,0.6);
        }

        .hero-desc {
          color: rgba(220,220,255,0.8);
          font-size: 15px;
          line-height: 1.6;
          max-width: 380px;
          margin-bottom: 32px;
        }

        .games-section {
          position: relative;
          z-index: 2;
          background: linear-gradient(135deg, #1a0a6e 0%, #2a0f8f 50%, #1a0a6e 100%);
          padding: 60px 80px 70px;
          margin-top: -2px;
        }

        .games-title {
          color: #fff;
          font-weight: 900;
          font-size: 48px;
          letter-spacing: 2px;
          margin: 0 0 10px 0;
          text-transform: uppercase;
        }

        .games-grid {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .how-section {
          position: relative;
          z-index: 2;
          background: radial-gradient(ellipse at 50% 50%, #1e0d5e 0%, #120840 50%, #0a0530 100%);
          padding: 80px 60px 90px;
          overflow: hidden;
        }

        .how-title {
          color: #fff;
          font-weight: 900;
          font-size: 56px;
          letter-spacing: 3px;
          margin: 0 0 14px 0;
          text-transform: uppercase;
          text-shadow: 0 0 40px rgba(255,255,255,0.1);
        }

        .steps-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0px;
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
        }

        .players-section {
          position: relative;
          z-index: 2;
          background: radial-gradient(ellipse at 50% 0%, #0f0840 0%, #080520 60%, #04020f 100%);
          padding: 80px 60px 100px;
          overflow: hidden;
        }

        .players-title {
          color: #fff;
          font-weight: 900;
          font-size: 56px;
          letter-spacing: 3px;
          margin: 0 0 14px 0;
          text-transform: uppercase;
          text-shadow: 0 0 40px rgba(255,255,255,0.1);
        }

        .players-grid {
          display: flex;
          gap: 28px;
          justify-content: center;
          align-items: flex-end;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }

        /* ── TABLET (≤ 1024px) ── */
        @media (max-width: 1024px) {
          .hero-section {
            flex-wrap: wrap;
            align-items: center;
            padding-top: 40px;
          }
          .hero-left-char, .hero-right-char {
            flex: 0 0 220px;
          }
          .hero-center {
            flex: 0 0 100%;
            order: -1;
            padding-bottom: 20px;
            padding-top: 60px;
          }
          .hero-title { font-size: 48px; }
          .games-section { padding: 50px 40px 60px; }
          .games-title { font-size: 38px; }
          .how-section { padding: 60px 40px 70px; }
          .how-title { font-size: 44px; }
          .players-section { padding: 60px 40px 80px; }
          .players-title { font-size: 44px; }
        }

        /* ── MOBILE (≤ 768px) ── */
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            align-items: center;
            min-height: auto;
            padding-top: 70px;
            padding-bottom: 0;
          }

          .hero-center {
            order: 1;
            flex: none;
            width: 100%;
            padding: 30px 20px 20px;
          }

          .hero-title {
            font-size: 36px;
            letter-spacing: 2px;
          }

          .hero-subtitle {
            font-size: 16px;
            letter-spacing: 2px;
          }

          .hero-desc {
            font-size: 13px;
            margin-bottom: 24px;
          }

          .hero-left-char {
            order: 2;
            flex: none;
            width: 50%;
            justify-content: center;
          }

          .hero-right-char {
            order: 3;
            flex: none;
            width: 50%;
            justify-content: center;
          }

          .hero-chars-row {
            display: flex;
            width: 100%;
            justify-content: center;
          }

          .games-section {
            padding: 40px 20px 50px;
          }

          .games-title {
            font-size: 28px;
            letter-spacing: 1px;
          }

          .games-grid {
            gap: 16px;
          }

          .game-card {
            width: calc(50% - 8px) !important;
            min-width: 140px;
          }

          .game-card img {
            height: 200px !important;
          }

          .how-section {
            padding: 50px 20px 60px;
          }

          .how-title {
            font-size: 30px;
            letter-spacing: 1px;
          }

          .steps-row {
            flex-wrap: wrap;
            gap: 24px;
            justify-content: center;
          }

          .step-connector {
            display: none !important;
          }

          .step-card {
            flex: 0 0 auto;
            width: calc(50% - 12px);
          }

          .players-section {
            padding: 50px 20px 70px;
          }

          .players-title {
            font-size: 28px;
            letter-spacing: 1px;
          }

          .players-grid {
            gap: 20px;
            align-items: stretch;
          }

          .player-card {
            width: 100% !important;
            max-width: 320px;
            transform: none !important;
          }

          .player-card-featured {
            width: 100% !important;
            max-width: 320px;
            transform: none !important;
          }
        }

        /* ── SMALL MOBILE (≤ 480px) ── */
        @media (max-width: 480px) {
          .hero-title {
            font-size: 30px;
          }

          .hero-subtitle {
            font-size: 14px;
          }

          .game-card {
            width: 100% !important;
            max-width: 300px;
          }

          .game-card img {
            height: 220px !important;
          }

          .how-title {
            font-size: 26px;
          }

          .step-card {
            width: calc(50% - 12px);
          }

          .step-icon-box {
            width: 85px !important;
            height: 85px !important;
          }

          .step-icon-box svg {
            width: 38px !important;
            height: 38px !important;
          }

          .players-title {
            font-size: 24px;
          }

          .join-btn {
            padding: 16px 44px !important;
            font-size: 14px !important;
          }
        }

        /* Fix for banner images not visible on mobile - ensure they display properly */
        @media (max-width: 768px) {
          .hero-left-char img,
          .hero-right-char img {
            width: 100%;
            max-width: 180px !important;
            height: auto;
            display: block;
            margin: 0 auto;
          }
          
          .hero-left-char,
          .hero-right-char {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
          }
          
          .hero-section {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            padding-top: 20px;
          }
          
          .hero-center {
            order: 1;
            width: 100%;
            padding: 20px 15px;
          }
          
          .hero-left-char {
            order: 2;
          }
          
          .hero-right-char {
            order: 3;
          }
        }
        
        @media (max-width: 480px) {
          .hero-left-char img,
          .hero-right-char img {
            max-width: 140px !important;
          }
        }
      `}</style>

      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '380px', height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(80,60,220,0.55) 0%, rgba(40,10,120,0.2) 60%, transparent 80%)',
        filter: 'blur(10px)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', top: '30px', left: '-60px',
        width: '220px', height: '220px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(50,30,180,0.45) 0%, transparent 70%)',
        filter: 'blur(6px)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '60px', left: '200px',
        width: '160px', height: '160px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(60,80,220,0.3) 0%, transparent 70%)',
        filter: 'blur(8px)',
        zIndex: 0,
      }} />

      {/* Pink triangle decoration */}
      <div style={{ position: 'absolute', top: '130px', left: '80px', zIndex: 1 }}>
        <div style={{
          width: 0, height: 0,
          borderLeft: '30px solid transparent',
          borderRight: '30px solid transparent',
          borderBottom: '52px solid rgba(230,60,200,0.7)',
          filter: 'drop-shadow(0 0 12px #e040fb)',
        }} />
      </div>

      {/* ── HERO SECTION ── */}
      <div className="hero-section">
        {/* Left character */}
        <div
          className="hero-left-char"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateX(0)' : 'translateX(-60px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          <img
            src="https://i.ibb.co.com/sdS7HNdT/left-banner.png"
            alt="Left player"
            style={{ width: '100%', maxWidth: '340px', display: 'block', objectFit: 'contain' }}
          />
        </div>

        {/* Center content */}
        <div className="hero-center">
          <p
            className="hero-subtitle"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
            }}
          >PLAY UNLIMITED</p>

          <h1
            className="hero-title"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s',
            }}
          >TOURNAMENTS</h1>

          <p
            className="hero-desc"
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.6s ease 0.7s',
            }}
          >
            Compete in Free and Paid entry Tournaments. Transform your
            games to real money eSports
          </p>

          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.6s ease 0.85s',
          }}>
            <button style={{
              background: 'linear-gradient(90deg, #ff9800, #ff5722)',
              color: '#fff', fontWeight: 700, fontSize: '15px',
              border: 'none', borderRadius: '28px',
              padding: '14px 36px', cursor: 'pointer',
              boxShadow: '0 0 24px rgba(255,120,0,0.55)',
              letterSpacing: '1px', transition: 'transform 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
            >GET STARTED</button>

            <button style={{
              background: 'transparent',
              border: '2px solid rgba(255,255,255,0.5)',
              color: '#fff', width: '48px', height: '48px',
              borderRadius: '50%', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px', transition: 'border-color 0.2s, background 0.2s',
              flexShrink: 0,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
            >▶</button>
          </div>

          {/* VS fire emblem */}
          <div style={{
            marginTop: '36px', position: 'relative',
            width: '120px', height: '120px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.6s ease 1s',
          }}>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              background: 'radial-gradient(circle, transparent 35%, rgba(0,180,255,0.25) 55%, transparent 75%)',
              animation: 'spin 4s linear infinite',
            }} />
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              background: 'radial-gradient(circle, transparent 35%, rgba(255,80,20,0.25) 55%, transparent 75%)',
              animation: 'spinReverse 4s linear infinite',
            }} />
            <div style={{
              position: 'absolute', left: '-10px', top: '10px',
              fontSize: '40px', filter: 'hue-rotate(180deg) saturate(2)',
              animation: 'flicker 1.5s ease-in-out infinite alternate',
            }}>🔥</div>
            <div style={{
              position: 'absolute', right: '-10px', top: '10px',
              fontSize: '40px',
              animation: 'flicker 1.5s ease-in-out infinite alternate-reverse',
            }}>🔥</div>
            <div style={{
              position: 'relative', zIndex: 2,
              background: 'linear-gradient(135deg, #1a2a10, #2a4a18)',
              border: '3px solid #4caf50', borderRadius: '50%',
              width: '52px', height: '52px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 20px rgba(76,175,80,0.6), inset 0 0 10px rgba(0,0,0,0.5)',
            }}>
              <span style={{
                color: '#7fff00', fontWeight: 900, fontSize: '17px',
                letterSpacing: '1px', textShadow: '0 0 8px #7fff00',
              }}>VS</span>
            </div>
          </div>
        </div>

        {/* Right character */}
        <div
          className="hero-right-char"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateX(0)' : 'translateX(60px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          <img
            src="https://i.ibb.co.com/CFPz6Fc/right-banner.png"
            alt="Right player"
            style={{ width: '100%', maxWidth: '340px', display: 'block', objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* ── AVAILABLE GAMES SECTION ── */}
      <div className="games-section">
        <div style={{ marginBottom: '40px' }}>
          <h2 className="games-title">{`AVAILABLE GAMES`}</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', margin: 0 }}>
            We are constantly adding new games
          </p>
        </div>

        <div className="games-grid">
          {[
            { name: 'eFOOTBALL', img: 'https://i.ibb.co.com/xqh4sgdq/Visit-Tik-Tok-to-discover-profiles.jpg', active: false },
            { name: 'FREE FIRE', img: 'https://i.ibb.co.com/mrJmZD0b/image.jpg', active: true },
            { name: 'PUBG', img: 'https://i.ibb.co.com/1fKMy4zV/Download-PUBG-and-Tik-Tok-using-a-VPN.jpg', active: false },
          ].map((game, idx) => (
            <div
              key={idx}
              className="game-card"
              style={{
                width: '320px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: game.active ? '3px solid #ff9800' : '3px solid rgba(255,255,255,0.15)',
                boxShadow: game.active ? '0 0 30px rgba(255,152,0,0.4), 0 8px 25px rgba(0,0,0,0.5)' : '0 8px 25px rgba(0,0,0,0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: game.active ? 'translateY(-8px)' : 'translateY(0)',
                background: '#000',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.borderColor = '#ff9800';
                e.currentTarget.style.boxShadow = '0 0 35px rgba(255,152,0,0.5), 0 15px 35px rgba(0,0,0,0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = game.active ? 'translateY(-8px)' : 'translateY(0)';
                e.currentTarget.style.borderColor = game.active ? '#ff9800' : 'rgba(255,255,255,0.15)';
                e.currentTarget.style.boxShadow = game.active ? '0 0 30px rgba(255,152,0,0.4), 0 8px 25px rgba(0,0,0,0.5)' : '0 8px 25px rgba(0,0,0,0.4)';
              }}
            >
              <img
                src={game.img}
                alt={game.name}
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS SECTION ── */}
      <div className="how-section">
        {/* Background eagle/wings watermark */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '320px', lineHeight: 1,
          opacity: 0.04, userSelect: 'none', pointerEvents: 'none',
          zIndex: 0,
        }}>🦅</div>

        {/* Ambient side glows */}
        <div style={{
          position: 'absolute', left: '-100px', top: '50%', transform: 'translateY(-50%)',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(80,40,200,0.3) 0%, transparent 70%)',
          filter: 'blur(40px)', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(80,40,200,0.3) 0%, transparent 70%)',
          filter: 'blur(40px)', zIndex: 0,
        }} />

        {/* Center glow behind steps */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(60,30,160,0.35) 0%, transparent 65%)',
          filter: 'blur(30px)', zIndex: 0,
        }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 1 }}>
          <h2 className="how-title">HOW IT WORKS</h2>
          <p style={{ color: 'rgba(220,220,255,0.7)', fontSize: '16px', margin: 0 }}>
            It's easier than you think. Follow 4 simple easy steps
          </p>
        </div>

        {/* Steps row */}
        <div className="steps-row">
          {[
            { num: 1, label: 'SIGNUP',   icon: '📱' },
            { num: 2, label: 'DEPOSIT',  icon: '🐷' },
            { num: 3, label: 'COMPETE',  icon: '🏆' },
            { num: 4, label: 'GET PAID', icon: '💰' },
          ].map((step, idx) => (
            <React.Fragment key={step.num}>
              {/* Step card */}
              <div className="step-card" style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '18px',
                flex: '0 0 auto',
              }}>
                {/* Icon box with number badge */}
                <div style={{ position: 'relative' }}>
                  {/* Number badge */}
                  <div style={{
                    position: 'absolute', top: '-10px', right: '-10px',
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff9800, #ff5722)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 900, fontSize: '13px',
                    zIndex: 2,
                    boxShadow: '0 0 10px rgba(255,120,0,0.6)',
                  }}>{step.num}</div>

                  {/* Icon square */}
                  <div
                    className="step-icon-box"
                    style={{
                      width: '110px', height: '110px',
                      borderRadius: '18px',
                      background: step.num === 3
                        ? 'linear-gradient(135deg, #7b3fce, #9c5ae0)'
                        : 'linear-gradient(135deg, #4a22b8, #6a3fd4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '48px',
                      boxShadow: '0 8px 30px rgba(80,30,180,0.5)',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      cursor: 'pointer',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(80,30,180,0.7)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(80,30,180,0.5)'; }}
                  >
                    {step.num === 1 && (
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <rect x="14" y="4" width="24" height="38" rx="4" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/>
                        <rect x="18" y="8" width="16" height="20" rx="2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/>
                        <circle cx="26" cy="36" r="2.5" fill="rgba(255,255,255,0.9)"/>
                        <line x1="22" y1="12" x2="26" y2="16" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="30" y1="12" x2="26" y2="16" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                    {step.num === 2 && (
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <ellipse cx="26" cy="30" rx="16" ry="10" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/>
                        <path d="M10 30 Q10 18 26 18 Q42 18 42 30" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/>
                        <circle cx="34" cy="20" r="4" stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none"/>
                        <line x1="34" y1="16" x2="34" y2="13" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                    {step.num === 3 && (
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <circle cx="20" cy="18" r="7" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/>
                        <path d="M8 42 Q8 30 20 30 Q26 30 30 34" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                        <circle cx="38" cy="22" r="3" stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none"/>
                        <circle cx="38" cy="30" r="3" stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none"/>
                        <circle cx="38" cy="38" r="3" stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none"/>
                        <line x1="41" y1="22" x2="44" y2="22" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="41" y1="30" x2="44" y2="30" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
                        <line x1="41" y1="38" x2="44" y2="38" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                    {step.num === 4 && (
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <circle cx="26" cy="26" r="16" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/>
                        <path d="M26 16 L26 12 M26 40 L26 36" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M20 22 Q20 19 26 19 Q32 19 32 23 Q32 27 26 27 Q32 27 32 31 Q32 35 26 35 Q20 35 20 32" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Label */}
                <div style={{
                  color: '#fff', fontWeight: 900, fontSize: '17px',
                  letterSpacing: '2px', textTransform: 'uppercase',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}>{step.label}</div>
              </div>

              {/* Dashed arrow connector */}
              {idx < 3 && (
                <div
                  className="step-connector"
                  style={{
                    flex: '1', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', paddingBottom: '38px',
                    minWidth: '60px', maxWidth: '120px',
                  }}
                >
                  <svg width="100%" height="30" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path
                      d="M5 20 Q30 5 50 15 Q70 25 95 10"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6 5"
                      strokeLinecap="round"
                    />
                    <polygon points="92,6 100,10 92,14" fill="rgba(255,255,255,0.4)" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* JOIN NOW button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '56px', position: 'relative', zIndex: 1 }}>
          <button
            className="join-btn"
            style={{
              background: 'linear-gradient(90deg, #ff9800, #e91e8c)',
              color: '#fff', fontWeight: 800, fontSize: '16px',
              border: 'none', borderRadius: '32px',
              padding: '18px 64px', cursor: 'pointer',
              letterSpacing: '2px',
              boxShadow: '0 0 30px rgba(255,80,100,0.5)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 45px rgba(255,80,100,0.7)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255,80,100,0.5)'; }}
          >JOIN NOW!</button>
        </div>
      </div>

      {/* ── PLAYERS OF THE WEEK SECTION ── */}
      <div className="players-section">
        {/* Grid pattern background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(80,60,220,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(80,60,220,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 0,
        }} />

        {/* Corner bracket decorations */}
        {[
          { top: '20px', left: '20px', borderTop: '2px solid rgba(100,80,255,0.4)', borderLeft: '2px solid rgba(100,80,255,0.4)' },
          { top: '20px', right: '20px', borderTop: '2px solid rgba(100,80,255,0.4)', borderRight: '2px solid rgba(100,80,255,0.4)' },
          { bottom: '20px', left: '20px', borderBottom: '2px solid rgba(100,80,255,0.4)', borderLeft: '2px solid rgba(100,80,255,0.4)' },
          { bottom: '20px', right: '20px', borderBottom: '2px solid rgba(100,80,255,0.4)', borderRight: '2px solid rgba(100,80,255,0.4)' },
        ].map((s, i) => (
          <div key={i} style={{ position: 'absolute', width: '40px', height: '40px', zIndex: 1, ...s }} />
        ))}

        {/* Ambient glows */}
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '350px', height: '350px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,40,200,0.25) 0%, transparent 70%)',
          filter: 'blur(40px)', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', top: '-40px', right: '10%',
          width: '250px', height: '250px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(80,40,220,0.3) 0%, transparent 70%)',
          filter: 'blur(35px)', zIndex: 0,
        }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 1 }}>
          <h2 className="players-title">PLAYERS OF THE WEEK</h2>
          <p style={{
            color: 'rgba(220,220,255,0.7)', fontSize: '16px', margin: 0,
            maxWidth: '420px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6,
          }}>
            We take a look at the best player of the week awarded on Monday for the previous Monday to Sunday
          </p>
        </div>

        {/* Player Cards */}
        <div className="players-grid">
          {[
            {
              name: 'BARTON GRIGGS',
              xp: '1970 XP Earned',
              date: '04/05 - 04/12',
              credits: '+20 CREDITS',
              rank: '02',
              featured: false,
              avatar: 'https://i.pravatar.cc/150?img=11',
            },
            {
              name: 'MERVIN TRASK',
              xp: '1970 XP Earned',
              date: '04/05 - 04/12',
              credits: '+20 CREDITS',
              rank: '02',
              featured: true,
              avatar: 'https://i.pravatar.cc/150?img=52',
            },
            {
              name: 'ADRIA POULIN',
              xp: '1970 XP Earned',
              date: '04/05 - 04/12',
              credits: '+20 CREDITS',
              rank: '02',
              featured: false,
              avatar: 'https://i.pravatar.cc/150?img=47',
            },
          ].map((player, idx) => (
            <div
              key={idx}
              className={player.featured ? 'player-card-featured' : 'player-card'}
              style={{
                position: 'relative',
                width: '280px',
                borderRadius: '20px',
                border: '1px solid rgba(100,80,255,0.25)',
                background: 'linear-gradient(160deg, rgba(30,18,90,0.85) 0%, rgba(15,8,50,0.95) 100%)',
                backdropFilter: 'blur(10px)',
                padding: '40px 24px 28px',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                boxShadow: player.featured
                  ? '0 0 40px rgba(120,60,255,0.35), 0 20px 50px rgba(0,0,0,0.6)'
                  : '0 8px 30px rgba(0,0,0,0.5)',
                transform: player.featured ? 'translateY(-20px)' : 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = player.featured ? 'translateY(-28px)' : 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 0 50px rgba(120,60,255,0.5), 0 25px 60px rgba(0,0,0,0.7)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = player.featured ? 'translateY(-20px)' : 'translateY(0)';
                e.currentTarget.style.boxShadow = player.featured
                  ? '0 0 40px rgba(120,60,255,0.35), 0 20px 50px rgba(0,0,0,0.6)'
                  : '0 8px 30px rgba(0,0,0,0.5)';
              }}
            >
              {/* Featured star ribbon */}
              {player.featured && (
                <div style={{
                  position: 'absolute', top: '-1px', left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 3,
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #e91e8c, #c2185b)',
                    width: '44px', paddingBottom: '16px',
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                    paddingTop: '10px',
                    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
                    boxShadow: '0 4px 20px rgba(233,30,140,0.6)',
                  }}>
                    <span style={{ color: '#fff', fontSize: '18px' }}>★</span>
                  </div>
                </div>
              )}

              {/* Radar rings + avatar */}
              <div style={{ position: 'relative', width: '140px', height: '140px', marginBottom: '18px', marginTop: player.featured ? '20px' : '0' }}>
                {[130, 110, 90].map((size, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: `${size}px`, height: `${size}px`,
                    borderRadius: '50%',
                    border: `1px solid rgba(80,120,255,${0.15 + i * 0.05})`,
                    boxShadow: `0 0 ${6 + i * 3}px rgba(60,100,255,0.1)`,
                  }} />
                ))}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                  <div key={i} style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    width: '2px', height: '55px',
                    background: 'linear-gradient(to bottom, rgba(80,120,255,0.25), transparent)',
                    transformOrigin: '50% 0%',
                    transform: `translate(-50%, 0) rotate(${deg}deg)`,
                  }} />
                ))}
                {/* Avatar */}
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -55%)',
                  width: '80px', height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid rgba(100,80,255,0.5)',
                  boxShadow: '0 0 20px rgba(80,60,220,0.5)',
                }}>
                  <img src={player.avatar} alt={player.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                {/* Rank hex badge */}
                <div style={{
                  position: 'absolute', bottom: '4px', left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 2,
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #ff9800, #ff5722)',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    width: '36px', height: '40px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 12px rgba(255,120,0,0.6)',
                  }}>
                    <span style={{ color: '#fff', fontWeight: 900, fontSize: '13px' }}>{player.rank}</span>
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 style={{
                color: '#fff', fontWeight: 900, fontSize: '20px',
                letterSpacing: '1.5px', margin: '0 0 8px 0',
                textTransform: 'uppercase', textAlign: 'center',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              }}>{player.name}</h3>

              {/* XP & Date */}
              <p style={{ margin: '0 0 14px 0', fontSize: '13px', color: 'rgba(200,200,255,0.6)', textAlign: 'center' }}>
                <span style={{ color: '#7cfc00', fontWeight: 700 }}>{player.xp}</span>
                {' '}
                <span style={{ color: '#fff', fontWeight: 600 }}>{player.date}</span>
              </p>

              {/* Credits */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                marginBottom: '20px',
                color: '#00e5ff', fontWeight: 700, fontSize: '14px',
              }}>
                <span>🎁</span>
                <span>{player.credits}</span>
              </div>

              {/* View Profile button */}
              <button style={{
                background: 'linear-gradient(90deg, #ff9800, #ff5722)',
                color: '#fff', fontWeight: 800, fontSize: '13px',
                border: 'none', borderRadius: '24px',
                padding: '12px 32px', cursor: 'pointer',
                letterSpacing: '1.5px',
                boxShadow: '0 0 20px rgba(255,120,0,0.45)',
                transition: 'transform 0.15s, box-shadow 0.15s',
                width: '100%',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255,120,0,0.65)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255,120,0,0.45)'; }}
              >VIEW PROFILE</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;