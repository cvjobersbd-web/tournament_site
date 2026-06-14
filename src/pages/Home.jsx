import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Tournament data with images
  const tournaments = [
    {
      id: 1,
      title: 'MIX IT MONDAYS - CARRY ONLY',
      gameName: 'REDSQUAD',
      image: 'https://i.ibb.co.com/1t876NJQ/eb.png',
      prize: 739,
      entryFee: '10 CREDITS',
      teamSize: '2 VS 2',
      enrolled: 11,
      maxTeams: 64,
      startsIn: '10d 2H 18M',
    },
    {
      id: 2,
      title: 'HEAD 2 HEAD - WEEKLY - NANO',
      gameName: 'WARZONE',
      image: 'https://i.ibb.co.com/1t876NJQ/eb.png',
      prize: 854,
      entryFee: '10 CREDITS',
      teamSize: '2 VS 2',
      enrolled: 11,
      maxTeams: 64,
      startsIn: '10d 2H 18M',
    },
    {
      id: 3,
      title: 'MARATHON AIM PREMIUM',
      gameName: 'WARZONE',
      image: 'https://i.ibb.co.com/1t876NJQ/eb.png',
      prize: 105,
      entryFee: '10 CREDITS',
      teamSize: '2 VS 2',
      enrolled: 11,
      maxTeams: 64,
      startsIn: '10d 2H 18M',
    },
  ];

  // Players data - 1st in center, 2nd on left, 3rd on right
  const playersData = {
    first: { rank: 1, name: 'THUNDER X', logo: 'https://i.ibb.co.com/1t876NJQ/eb.png', points: 2840, credits: 5000 },
    second: { rank: 2, name: 'PHOENIX GG', logo: 'https://i.ibb.co.com/1t876NJQ/eb.png', points: 2650, credits: 3000 },
    third: { rank: 3, name: 'FURY ESPORTS', logo: 'https://i.ibb.co.com/1t876NJQ/eb.png', points: 2410, credits: 2000 },
  };

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

        .game-card {
          width: 280px !important;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          background: #000;
        }

        .game-card img {
          width: 100%;
          height: 280px !important;
          object-fit: cover;
          display: block;
        }

        /* How Section Styles */
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

        /* Center player card - larger */
        .player-card-center {
          position: relative;
          width: 320px;
          border-radius: 20px;
          border: 1px solid rgba(100,80,255,0.35);
          background: linear-gradient(160deg, rgba(40,25,110,0.9) 0%, rgba(20,12,60,0.98) 100%);
          backdropFilter: 'blur(10px)';
          padding: 50px 24px 35px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 0 50px rgba(120,60,255,0.45), 0 25px 60px rgba(0,0,0,0.7);
          transform: translateY(-25px) scale(1.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .player-card-left, .player-card-right {
          position: relative;
          width: 270px;
          border-radius: 20px;
          border: 1px solid rgba(100,80,255,0.25);
          background: linear-gradient(160deg, rgba(30,18,90,0.85) 0%, rgba(15,8,50,0.95) 100%);
          backdropFilter: 'blur(10px)';
          padding: 35px 20px 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 8px 30px rgba(0,0,0,0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .player-card-left:hover, .player-card-right:hover, .player-card-center:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.6);
        }

        .player-card-center:hover {
          transform: translateY(-30px) scale(1.05);
        }

        /* Floating animation for hero images */
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        .hero-img-1 {
          animation: float1 4s ease-in-out infinite;
        }
        
        .hero-img-2 {
          animation: float2 3.5s ease-in-out infinite;
        }

        /* Crown animation */
        @keyframes crownGlow {
          0%, 100% { filter: drop-shadow(0 0 2px gold) drop-shadow(0 0 5px orange); }
          50% { filter: drop-shadow(0 0 8px gold) drop-shadow(0 0 15px orange); }
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
          .game-card {
            width: 240px !important;
          }
          .game-card img {
            height: 240px !important;
          }
          .how-section { padding: 60px 40px 70px; }
          .how-title { font-size: 44px; }
          .players-section { padding: 60px 40px 80px; }
          .players-title { font-size: 44px; }
          .player-card-center {
            width: 280px;
            transform: translateY(-15px) scale(1.02);
          }
          .player-card-left, .player-card-right {
            width: 240px;
          }
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
            width: 100%;
            justify-content: center;
            margin-bottom: 15px;
          }

          .hero-right-char {
            order: 3;
            flex: none;
            width: 100%;
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
            flex-direction: column;
            align-items: center;
            gap: 25px;
          }

          .player-card-center {
            width: 100%;
            max-width: 300px;
            transform: translateY(0) scale(1);
            order: 1;
          }
          
          .player-card-left {
            width: 100%;
            max-width: 300px;
            order: 2;
          }
          
          .player-card-right {
            width: 100%;
            max-width: 300px;
            order: 3;
          }
          
          .player-card-center:hover {
            transform: translateY(-8px) scale(1);
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
            max-width: 260px;
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

        /* Fix for hero images on mobile */
        @media (max-width: 768px) {
          .hero-left-char img,
          .hero-right-char img {
            max-width: 160px !important;
            height: auto;
            display: block;
            margin: 0 auto;
          }
          
          .hero-left-char,
          .hero-right-char {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
          }
          
          .hero-images-container {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
          }
          
          .hero-section {
            flex-direction: column;
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
            max-width: 130px !important;
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
        {/* Left character - PUBG */}
        <div
          className="hero-left-char"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateX(0)' : 'translateX(-60px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          <img
            src="https://i.ibb.co.com/7tk5K8sR/Download-Pubg-game-player-character-isolated-on-a-transparent-background-for-free-jpg.png"
            alt="PUBG Player"
            className="hero-img-1"
            style={{ width: '100%', maxWidth: '320px', display: 'block', objectFit: 'contain' }}
          />
        </div>

        {/* Center content */}
        <div className="hero-center">
          <img
            src="https://i.ibb.co.com/35Ntmj4H/pngwing-com.png"
            alt="Game Character Top"
            style={{
              width: '100%',
              maxWidth: '200px',
              marginBottom: '16px',
              display: 'block',
              objectFit: 'contain',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(-30px)',
              transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
            }}
          />
          <p
            className="hero-subtitle"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s',
            }}
          >PLAY UNLIMITED</p>

          <h1
            className="hero-title"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s',
            }}
          >TOURNAMENTS</h1>

          <p
            className="hero-desc"
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.6s ease 0.75s',
            }}
          >
            Compete in Free and Paid entry Tournaments. Transform your
            games to real money eSports
          </p>

          {/* VS fire emblem */}
          <div style={{
            marginTop: '36px', position: 'relative',
            width: '120px', height: '120px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.6s ease 0.9s',
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
            }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4 L20 12 L28 14 L22 20 L24 28 L16 24 L8 28 L10 20 L4 14 L12 12 L16 4Z" fill="#ff4444" stroke="#ff8800" strokeWidth="1.5"/>
              </svg>
            </div>
            <div style={{
              position: 'absolute', right: '-10px', top: '10px',
              fontSize: '40px',
              animation: 'flicker 1.5s ease-in-out infinite alternate-reverse',
            }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4 L20 12 L28 14 L22 20 L24 28 L16 24 L8 28 L10 20 L4 14 L12 12 L16 4Z" fill="#ff4444" stroke="#ff8800" strokeWidth="1.5"/>
              </svg>
            </div>
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

        {/* Right character - Free Fire */}
        <div
          className="hero-right-char"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateX(0)' : 'translateX(60px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            alignItems: 'center',
          }}
        >
          <img
            src="https://i.ibb.co.com/35wh88w5/470234387-1206616767691482-1751722073731540386-n-jpg.png"
            alt="Game Character"
            className="hero-img-2"
            style={{ width: '100%', maxWidth: '250px', display: 'block', objectFit: 'contain' }}
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
                border: game.active ? '3px solid #ff9800' : '3px solid rgba(255,255,255,0.15)',
                boxShadow: game.active ? '0 0 30px rgba(255,152,0,0.4), 0 8px 25px rgba(0,0,0,0.5)' : '0 8px 25px rgba(0,0,0,0.4)',
                transform: game.active ? 'translateY(-8px)' : 'translateY(0)',
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
        }}>
          <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
            <path d="M160 80 L200 120 L160 160 L120 120 L160 80Z" fill="currentColor" opacity="0.5"/>
            <path d="M160 80 L200 40 L240 80 L200 120 L160 80Z" fill="currentColor" opacity="0.3"/>
            <path d="M160 80 L120 40 L80 80 L120 120 L160 80Z" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>

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
            { num: 1, label: 'SIGNUP' },
            { num: 2, label: 'REGISTRATION' },
            { num: 3, label: 'PLAY' },
            { num: 4, label: 'WIN' },
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
                        <path d="M26 8 L26 44 M8 26 L44 26" stroke="rgba(255,255,255,0.9)" strokeWidth="3" strokeLinecap="round"/>
                        <circle cx="26" cy="26" r="16" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/>
                        <path d="M32 20 L20 32 M20 20 L32 32" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                    {step.num === 2 && (
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <rect x="12" y="12" width="28" height="28" rx="6" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none"/>
                        <path d="M20 26 L24 30 L32 20" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 8 L12 12 L12 18" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {step.num === 3 && (
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <polygon points="16,12 38,26 16,40" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
                        <circle cx="26" cy="26" r="16" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeDasharray="4 4"/>
                        <path d="M22 20 L30 26 L22 32" stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {step.num === 4 && (
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <path d="M26 8 L22 18 L12 18 L20 24 L16 34 L26 28 L36 34 L32 24 L40 18 L30 18 L26 8Z" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
                        <circle cx="26" cy="28" r="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Label */}
                <div style={{
                  color: '#fff', fontWeight: 900, fontSize: '16px',
                  letterSpacing: '1.5px', textTransform: 'uppercase',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  textAlign: 'center',
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

      {/* ── PLAYERS OF THE WEEK SECTION (1st CENTER, 2nd LEFT, 3rd RIGHT) ── */}
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
            সাপ্তাহিক সেরা দলগুলো — ১ম স্থান কেন্দ্রে, ২য় স্থান বামে, ৩য় স্থান ডানে
          </p>
        </div>

        {/* Players Grid - 2nd (Left), 1st (Center), 3rd (Right) */}
        <div className="players-grid">
          {/* 2nd Place - LEFT */}
          <div className="player-card-left">
            {/* Crown decoration for 2nd */}
            <div style={{
              position: 'absolute', top: '-15px', left: '50%',
              transform: 'translateX(-50%)',
            }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4 L18 12 L26 10 L20 16 L24 24 L16 20 L8 24 L12 16 L6 10 L14 12 L16 4Z" fill="#FFD700" stroke="#FFA500" strokeWidth="1.5"/>
                <circle cx="16" cy="18" r="3" fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
              </svg>
            </div>

            {/* Radar rings + Team Logo */}
            <div style={{ position: 'relative', width: '130px', height: '130px', marginBottom: '16px' }}>
              {[120, 100, 80].map((size, i) => (
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
                  width: '2px', height: '50px',
                  background: 'linear-gradient(to bottom, rgba(80,120,255,0.25), transparent)',
                  transformOrigin: '50% 0%',
                  transform: `translate(-50%, 0) rotate(${deg}deg)`,
                }} />
              ))}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -55%)',
                width: '75px', height: '75px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid rgba(100,80,255,0.5)',
                boxShadow: '0 0 20px rgba(80,60,220,0.5)',
                background: '#0a0520',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img src={playersData.second.logo} alt={playersData.second.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {/* Rank hex badge */}
              <div style={{
                position: 'absolute', bottom: '0px', left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #c0c0c0, #a0a0a0)',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  width: '34px', height: '38px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 12px rgba(192,192,192,0.6)',
                }}>
                  <span style={{ color: '#fff', fontWeight: 900, fontSize: '14px' }}>{playersData.second.rank}</span>
                </div>
              </div>
            </div>

            <h3 style={{
              color: '#fff',
              fontWeight: 900, fontSize: '20px',
              letterSpacing: '1.5px', margin: '0 0 8px 0',
              textTransform: 'uppercase', textAlign: 'center',
              textShadow: '0 2px 5px rgba(0,0,0,0.5)',
            }}>{playersData.second.name}</h3>

            <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: 'rgba(200,200,255,0.8)', textAlign: 'center' }}>
              <span style={{ color: '#7fff00', fontWeight: 800 }}>{playersData.second.points.toLocaleString()} XP</span>
              {' '}
              <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>মোট পয়েন্ট</span>
            </p>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              marginBottom: '18px',
              color: '#00e5ff', fontWeight: 700, fontSize: '13px',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2 L15 9 L22 9 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9 L9 9 L12 2Z" fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
              </svg>
              <span>{playersData.second.credits.toLocaleString()} ক্রেডিট</span>
            </div>

            <button style={{
              background: 'linear-gradient(90deg, #ff9800, #ff5722)',
              color: '#fff', fontWeight: 800, fontSize: '12px',
              border: 'none', borderRadius: '24px',
              padding: '10px 28px', cursor: 'pointer',
              letterSpacing: '1.5px',
              boxShadow: '0 0 20px rgba(255,120,0,0.45)',
              transition: 'transform 0.15s, box-shadow 0.15s',
              width: '100%',
            }}>
              বিস্তারিত দেখুন
            </button>
          </div>

          {/* 1st Place - CENTER (Featured) */}
          <div className="player-card-center">
            {/* Featured star ribbon */}
            <div style={{
              position: 'absolute', top: '-1px', left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3,
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #ffd700, #ff8c00)',
                width: '50px', paddingBottom: '18px',
                display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                paddingTop: '12px',
                clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
                boxShadow: '0 4px 20px rgba(255,215,0,0.6)',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 L15 9 L22 9 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9 L9 9 L12 2Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="1"/>
                </svg>
              </div>
            </div>

            {/* Crown animation */}
            <div style={{
              position: 'absolute', top: '-25px', left: '50%',
              transform: 'translateX(-50%)',
              animation: 'crownGlow 1.5s ease-in-out infinite',
              zIndex: 2,
            }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 4 L23 13 L32 10 L25 17 L28 26 L20 21 L12 26 L15 17 L8 10 L17 13 L20 4Z" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
                <circle cx="20" cy="22" r="4" fill="#FFD700" stroke="#FFA500" strokeWidth="1.5"/>
                <circle cx="14" cy="14" r="2" fill="#FFD700"/>
                <circle cx="26" cy="14" r="2" fill="#FFD700"/>
              </svg>
            </div>

            {/* Radar rings + Team Logo - Larger for center */}
            <div style={{ position: 'relative', width: '160px', height: '160px', marginBottom: '20px', marginTop: '15px' }}>
              {[150, 130, 110].map((size, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: `${size}px`, height: `${size}px`,
                  borderRadius: '50%',
                  border: `1px solid rgba(255,215,0,${0.2 + i * 0.1})`,
                  boxShadow: `0 0 ${8 + i * 4}px rgba(255,215,0,0.15)`,
                }} />
              ))}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  width: '2px', height: '65px',
                  background: 'linear-gradient(to bottom, rgba(255,215,0,0.3), transparent)',
                  transformOrigin: '50% 0%',
                  transform: `translate(-50%, 0) rotate(${deg}deg)`,
                }} />
              ))}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -55%)',
                width: '90px', height: '90px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid #ffd700',
                boxShadow: '0 0 30px rgba(255,215,0,0.7)',
                background: '#0a0520',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img src={playersData.first.logo} alt={playersData.first.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {/* Rank hex badge - Gold for 1st */}
              <div style={{
                position: 'absolute', bottom: '4px', left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #ffd700, #ff8c00)',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  width: '40px', height: '44px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(255,215,0,0.8)',
                }}>
                  <span style={{ color: '#fff', fontWeight: 900, fontSize: '16px' }}>{playersData.first.rank}</span>
                </div>
              </div>
            </div>

            <h3 style={{
              color: '#ffd700',
              fontWeight: 900, fontSize: '26px',
              letterSpacing: '2px', margin: '0 0 8px 0',
              textTransform: 'uppercase', textAlign: 'center',
              textShadow: '0 0 10px rgba(255,215,0,0.5)',
            }}>{playersData.first.name}</h3>

            <p style={{ margin: '0 0 14px 0', fontSize: '14px', color: 'rgba(200,200,255,0.8)', textAlign: 'center' }}>
              <span style={{ color: '#7fff00', fontWeight: 800, fontSize: '16px' }}>{playersData.first.points.toLocaleString()} XP</span>
              {' '}
              <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>মোট পয়েন্ট</span>
            </p>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              marginBottom: '22px',
              color: '#00e5ff', fontWeight: 700, fontSize: '15px',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2 L15 9 L22 9 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9 L9 9 L12 2Z" fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
              </svg>
              <span>{playersData.first.credits.toLocaleString()} ক্রেডিট</span>
            </div>

            <button style={{
              background: 'linear-gradient(90deg, #ffd700, #ff8c00)',
              color: '#1a0a4a', fontWeight: 800, fontSize: '14px',
              border: 'none', borderRadius: '24px',
              padding: '14px 36px', cursor: 'pointer',
              letterSpacing: '1.5px',
              boxShadow: '0 0 25px rgba(255,215,0,0.6)',
              transition: 'transform 0.15s, box-shadow 0.15s',
              width: '100%',
            }}>
              বিস্তারিত দেখুন
            </button>
          </div>

          {/* 3rd Place - RIGHT */}
          <div className="player-card-right">
            {/* Crown decoration for 3rd */}
            <div style={{
              position: 'absolute', top: '-15px', left: '50%',
              transform: 'translateX(-50%)',
            }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4 L18 12 L26 10 L20 16 L24 24 L16 20 L8 24 L12 16 L6 10 L14 12 L16 4Z" fill="#CD7F32" stroke="#B87333" strokeWidth="1.5"/>
                <circle cx="16" cy="18" r="3" fill="#CD7F32" stroke="#B87333" strokeWidth="1"/>
              </svg>
            </div>

            {/* Radar rings + Team Logo */}
            <div style={{ position: 'relative', width: '130px', height: '130px', marginBottom: '16px' }}>
              {[120, 100, 80].map((size, i) => (
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
                  width: '2px', height: '50px',
                  background: 'linear-gradient(to bottom, rgba(80,120,255,0.25), transparent)',
                  transformOrigin: '50% 0%',
                  transform: `translate(-50%, 0) rotate(${deg}deg)`,
                }} />
              ))}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -55%)',
                width: '75px', height: '75px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid rgba(100,80,255,0.5)',
                boxShadow: '0 0 20px rgba(80,60,220,0.5)',
                background: '#0a0520',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img src={playersData.third.logo} alt={playersData.third.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {/* Rank hex badge - Bronze */}
              <div style={{
                position: 'absolute', bottom: '0px', left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #cd7f32, #b87333)',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  width: '34px', height: '38px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 12px rgba(205,127,50,0.6)',
                }}>
                  <span style={{ color: '#fff', fontWeight: 900, fontSize: '14px' }}>{playersData.third.rank}</span>
                </div>
              </div>
            </div>

            <h3 style={{
              color: '#fff',
              fontWeight: 900, fontSize: '20px',
              letterSpacing: '1.5px', margin: '0 0 8px 0',
              textTransform: 'uppercase', textAlign: 'center',
              textShadow: '0 2px 5px rgba(0,0,0,0.5)',
            }}>{playersData.third.name}</h3>

            <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: 'rgba(200,200,255,0.8)', textAlign: 'center' }}>
              <span style={{ color: '#7fff00', fontWeight: 800 }}>{playersData.third.points.toLocaleString()} XP</span>
              {' '}
              <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>মোট পয়েন্ট</span>
            </p>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              marginBottom: '18px',
              color: '#00e5ff', fontWeight: 700, fontSize: '13px',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2 L15 9 L22 9 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9 L9 9 L12 2Z" fill="#CD7F32" stroke="#B87333" strokeWidth="1"/>
              </svg>
              <span>{playersData.third.credits.toLocaleString()} ক্রেডিট</span>
            </div>

            <button style={{
              background: 'linear-gradient(90deg, #ff9800, #ff5722)',
              color: '#fff', fontWeight: 800, fontSize: '12px',
              border: 'none', borderRadius: '24px',
              padding: '10px 28px', cursor: 'pointer',
              letterSpacing: '1.5px',
              boxShadow: '0 0 20px rgba(255,120,0,0.45)',
              transition: 'transform 0.15s, box-shadow 0.15s',
              width: '100%',
            }}>
              বিস্তারিত দেখুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;