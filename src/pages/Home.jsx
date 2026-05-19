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

      {/* HERO SECTION */}
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        minHeight: '100vh',
        position: 'relative', zIndex: 2,
      }}>
        {/* Left character */}
        <div style={{
          flex: '0 0 320px',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateX(0)' : 'translateX(-60px)',
          transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          position: 'relative', zIndex: 3,
        }}>
          <img
            src="https://i.ibb.co.com/sdS7HNdT/left-banner.png"
            alt="Left player"
            style={{ width: '100%', maxWidth: '340px', display: 'block', objectFit: 'contain' }}
          />
        </div>

        {/* Center content */}
        <div style={{
          flex: '0 0 500px',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 20px',
          paddingBottom: '80px',
          position: 'relative', zIndex: 4,
        }}>
          <p style={{
            color: '#00e5ff', fontWeight: 800, fontSize: '22px',
            letterSpacing: '3px', marginBottom: '8px',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
            textShadow: '0 0 20px rgba(0,229,255,0.6)',
          }}>PLAY UNLIMITED</p>

          <h1 style={{
            color: '#fff', fontWeight: 900, fontSize: '64px',
            letterSpacing: '4px', margin: '0 0 18px 0', lineHeight: 1,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s',
            textShadow: '0 0 40px rgba(255,255,255,0.15)',
          }}>TOURNAMENTS</h1>

          <p style={{
            color: 'rgba(220,220,255,0.8)', fontSize: '15px',
            lineHeight: 1.6, maxWidth: '380px', marginBottom: '32px',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.6s ease 0.7s',
          }}>
            Compete in Free and Paid entry Tournaments. Transform your<br />
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
        <div style={{
          flex: '0 0 320px',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateX(0)' : 'translateX(60px)',
          transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          position: 'relative', zIndex: 3,
        }}>
          <img
            src="https://i.ibb.co.com/CFPz6Fc/right-banner.png"
            alt="Right player"
            style={{ width: '100%', maxWidth: '340px', display: 'block', objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* ── AVAILABLE GAMES SECTION ── */}
      <div style={{
        position: 'relative', zIndex: 2,
        background: 'linear-gradient(135deg, #1a0a6e 0%, #2a0f8f 50%, #1a0a6e 100%)',
        padding: '60px 80px 70px',
        marginTop: '-2px',
      }}>
        {/* Header row */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{
            color: '#fff', fontWeight: 900, fontSize: '48px',
            letterSpacing: '2px', margin: '0 0 10px 0',
            textTransform: 'uppercase',
          }}>AVAILABLE GAMES</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', margin: 0 }}>
            We are constantly adding new games
          </p>
        </div>

        {/* Game cards - pure full images without any text or overlay */}
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { name: 'eFOOTBALL', img: 'https://i.ibb.co.com/qLFyKFpf/e-Football.png', active: false },
            { name: 'FREE FIRE', img: 'https://i.ibb.co.com/Y89nfQb/freefire.jpg', active: true },
            { name: 'PUBG', img: 'https://i.ibb.co.com/RL1P3R7/pubg.jpg', active: false },
          ].map((game, idx) => (
            <div key={idx} style={{
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
      <div style={{
        position: 'relative', zIndex: 2,
        background: 'radial-gradient(ellipse at 50% 50%, #1e0d5e 0%, #120840 50%, #0a0530 100%)',
        padding: '80px 60px 90px',
        overflow: 'hidden',
      }}>
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
          <h2 style={{
            color: '#fff', fontWeight: 900, fontSize: '56px',
            letterSpacing: '3px', margin: '0 0 14px 0',
            textTransform: 'uppercase',
            textShadow: '0 0 40px rgba(255,255,255,0.1)',
          }}>HOW IT WORKS</h2>
          <p style={{
            color: 'rgba(220,220,255,0.7)', fontSize: '16px', margin: 0,
          }}>It's easier than you think. Follow 4 simple easy steps</p>
        </div>

        {/* Steps row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '0px', position: 'relative', zIndex: 1,
          maxWidth: '900px', margin: '0 auto',
        }}>
          {[
            { num: 1, label: 'SIGNUP',   icon: '📱' },
            { num: 2, label: 'DEPOSIT',  icon: '🐷' },
            { num: 3, label: 'COMPETE',  icon: '🏆' },
            { num: 4, label: 'GET PAID', icon: '💰' },
          ].map((step, idx) => (
            <React.Fragment key={step.num}>
              {/* Step card */}
              <div style={{
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
                  <div style={{
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
                    {/* SVG-style icons */}
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

              {/* Dashed arrow connector (not after last item) */}
              {idx < 3 && (
                <div style={{
                  flex: '1', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', paddingBottom: '38px',
                  minWidth: '60px', maxWidth: '120px',
                }}>
                  <svg width="100%" height="30" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path
                      d="M5 20 Q30 5 50 15 Q70 25 95 10"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6 5"
                      strokeLinecap="round"
                    />
                    {/* Arrow head */}
                    <polygon
                      points="92,6 100,10 92,14"
                      fill="rgba(255,255,255,0.4)"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* JOIN NOW button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '56px', position: 'relative', zIndex: 1 }}>
          <button style={{
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

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinReverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes flicker {
          from { transform: scaleY(1) translateY(0); opacity: 0.85; }
          to { transform: scaleY(1.1) translateY(-4px); opacity: 1; }
        }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
};

export default Home;