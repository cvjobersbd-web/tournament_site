// AvailableGames.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AvailableGames = () => {
  const [hoveredGame, setHoveredGame] = useState(null);

  const games = [
    {
      id: 1,
      name: 'PUBG',
      fullName: 'PUBG MOBILE',
      description: 'Battle royale where 100 players fight to be the last one standing. Intense combat, realistic graphics, and tactical gameplay.',
      image: 'https://i.ibb.co.com/3mbHHcbP/pubg-mobile-5120x2880-19041.jpg',
      features: ['100 Players', 'Realistic Graphics', 'Tactical Combat', 'Solo/Duo/Squad'],
      rating: 4.8,
      players: '100M+',
      category: 'Battle Royale',
    },
    {
      id: 2,
      name: 'FREE FIRE',
      fullName: 'FREE FIRE MAX',
      description: 'Fast-paced battle royale with 50 players, 10-minute matches, and unique character abilities. Optimized for all devices.',
      image: 'https://i.ibb.co.com/Xxf0nn1n/free-fire-max-3840x2160-12569.jpg',
      features: ['50 Players', '10-Min Matches', 'Character Abilities', 'Clash Squad'],
      rating: 4.7,
      players: '500M+',
      category: 'Battle Royale',
    },
    {
      id: 3,
      name: 'eFOOTBALL',
      fullName: 'eFOOTBALL 2026',
      description: 'Next-gen football simulation with stunning graphics, realistic player movements, and immersive gameplay experience.',
      image: 'https://i.ibb.co.com/9H55TJzK/wp15783765-efootball-2026-wallpapers.jpg',
      features: ['Realistic Physics', 'Official Teams', 'Online Leagues', 'Career Mode'],
      rating: 4.6,
      players: '50M+',
      category: 'Sports',
    },
  ];

  const tournaments = [
    {
      id: 1,
      game: 'PUBG',
      title: 'PUBG WEEKLY CHAMPIONSHIP',
      prize: 1250,
      entryFee: '25 CREDITS',
      date: 'Apr 28, 7:00 PM',
      enrolled: 34,
      maxTeams: 100,
    },
    {
      id: 2,
      game: 'FREE FIRE',
      title: 'FREE FIRE BOOM TOURNAMENT',
      prize: 950,
      entryFee: '15 CREDITS',
      date: 'Apr 30, 6:00 PM',
      enrolled: 52,
      maxTeams: 80,
    },
    {
      id: 3,
      game: 'eFOOTBALL',
      title: 'EFOOTBALL PRO LEAGUE',
      prize: 800,
      entryFee: '20 CREDITS',
      date: 'May 2, 8:00 PM',
      enrolled: 28,
      maxTeams: 64,
    },
    {
      id: 4,
      game: 'PUBG',
      title: 'PUBG DUO SHOWDOWN',
      prize: 1500,
      entryFee: '30 CREDITS',
      date: 'May 5, 5:00 PM',
      enrolled: 46,
      maxTeams: 120,
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 60% 30%, #1a0a4a 0%, #0d0630 40%, #060318 100%)',
      fontFamily: "'Segoe UI', sans-serif",
      paddingBottom: '80px',
    }}>
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255,152,0,0.3); }
          50% { box-shadow: 0 0 40px rgba(255,152,0,0.6); }
        }
        
        .game-card {
          animation: fadeInScale 0.5s ease forwards;
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .tournament-item {
          animation: slideUp 0.4s ease forwards;
        }
        
        .category-badge {
          transition: all 0.2s ease;
        }
        
        @media (max-width: 768px) {
          .games-grid {
            gap: 20px !important;
          }
          
          .features-list {
            flex-wrap: wrap !important;
          }
        }
        
        @media (max-width: 640px) {
          .games-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        left: '-80px',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,87,34,0.1) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
      }} />

      {/* Hero Section */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        padding: '80px 20px 50px',
      }}>
        <h1 style={{
          color: '#fff',
          fontWeight: 900,
          fontSize: 'clamp(36px, 8vw, 64px)',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          margin: 0,
          textShadow: '0 0 40px rgba(168,85,247,0.5)',
          background: 'linear-gradient(135deg, #fff, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          AVAILABLE GAMES
        </h1>
        <p style={{
          color: 'rgba(220,220,255,0.7)',
          fontSize: '16px',
          marginTop: '16px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Choose your battleground and compete in high-stakes tournaments
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '24px',
          flexWrap: 'wrap',
        }}>
          {['ALL GAMES', 'BATTLE ROYALE', 'SPORTS'].map((cat, i) => (
            <span key={i} className="category-badge" style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(168,85,247,0.3)',
              borderRadius: '30px',
              padding: '6px 18px',
              color: '#ccc',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '1px',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(168,85,247,0.2)';
              e.currentTarget.style.borderColor = '#a855f7';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.borderColor = 'rgba(168,85,247,0.3)';
              e.currentTarget.style.color = '#ccc';
            }}>
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Games Grid */}
      <div className="games-grid" style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '30px',
        maxWidth: '1280px',
        margin: '20px auto 60px',
        padding: '0 24px',
      }}>
        {games.map((game, idx) => (
          <div
            key={game.id}
            className="game-card"
            style={{
              background: hoveredGame === game.id
                ? 'linear-gradient(135deg, rgba(25,15,70,0.95), rgba(15,8,50,0.98))'
                : 'linear-gradient(135deg, rgba(20,12,60,0.9), rgba(12,6,40,0.95))',
              borderRadius: '24px',
              overflow: 'hidden',
              border: hoveredGame === game.id
                ? '1px solid rgba(255,152,0,0.6)'
                : '1px solid rgba(100,80,255,0.25)',
              boxShadow: hoveredGame === game.id
                ? '0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(255,152,0,0.2)'
                : '0 10px 30px rgba(0,0,0,0.4)',
              transform: hoveredGame === game.id ? 'translateY(-8px)' : 'translateY(0)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={() => setHoveredGame(game.id)}
            onMouseLeave={() => setHoveredGame(null)}
          >
            {/* Game Image */}
            <div style={{
              position: 'relative',
              height: '220px',
              overflow: 'hidden',
            }}>
              <img
                src={game.image}
                alt={game.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  transform: hoveredGame === game.id ? 'scale(1.08)' : 'scale(1)',
                }}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(8px)',
                borderRadius: '20px',
                padding: '4px 12px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#ff9800',
                border: '1px solid rgba(255,152,0,0.4)',
              }}>
                {game.category}
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                padding: '20px 16px 12px',
              }}>
                <h2 style={{
                  color: '#fff',
                  fontSize: '24px',
                  fontWeight: 900,
                  margin: 0,
                  letterSpacing: '1px',
                }}>{game.name}</h2>
              </div>
            </div>

            {/* Game Info */}
            <div style={{ padding: '20px' }}>
              <p style={{
                color: 'rgba(220,220,255,0.7)',
                fontSize: '14px',
                lineHeight: 1.5,
                marginBottom: '16px',
              }}>{game.description}</p>

              {/* Features */}
              <div className="features-list" style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '20px',
                flexWrap: 'wrap',
              }}>
                {game.features.map((feature, i) => (
                  <span key={i} style={{
                    background: 'rgba(168,85,247,0.15)',
                    borderRadius: '20px',
                    padding: '4px 12px',
                    fontSize: '11px',
                    color: '#a855f7',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                  }}>
                    {feature}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                marginBottom: '20px',
              }}>
                <div>
                  <div style={{ color: 'rgba(180,180,220,0.5)', fontSize: '11px' }}>RATING</div>
                  <div style={{ color: '#ffd700', fontSize: '16px', fontWeight: 700 }}>
                    ★ {game.rating}
                  </div>
                </div>
                <div>
                  <div style={{ color: 'rgba(180,180,220,0.5)', fontSize: '11px' }}>ACTIVE PLAYERS</div>
                  <div style={{ color: '#00e5ff', fontSize: '16px', fontWeight: 700 }}>
                    {game.players}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Link to="/tournaments">
                <button style={{
                  width: '100%',
                  background: hoveredGame === game.id
                    ? 'linear-gradient(90deg, #ff9800, #ff5722)'
                    : 'linear-gradient(90deg, #7c3aed, #a855f7)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '14px',
                  border: 'none',
                  borderRadius: '40px',
                  padding: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '1px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255,87,34,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  VIEW TOURNAMENTS →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Live Tournaments Section */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(135deg, rgba(10,5,35,0.8), rgba(5,2,20,0.9))',
        backdropFilter: 'blur(10px)',
        margin: '20px 24px 0',
        borderRadius: '32px',
        padding: '48px 32px',
        border: '1px solid rgba(100,80,255,0.2)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{
            color: '#fff',
            fontSize: 'clamp(28px, 5vw, 38px)',
            fontWeight: 900,
            letterSpacing: '2px',
            margin: 0,
          }}>
            🔥 LIVE TOURNAMENTS
          </h2>
          <p style={{ color: 'rgba(220,220,255,0.6)', marginTop: '8px' }}>
            Active tournaments across all games
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {tournaments.map((tourney, idx) => (
            <div
              key={tourney.id}
              className="tournament-item"
              style={{
                background: 'rgba(20,12,60,0.6)',
                borderRadius: '16px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                border: '1px solid rgba(100,80,255,0.2)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(30,18,80,0.8)';
                e.currentTarget.style.borderColor = 'rgba(255,152,0,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(20,12,60,0.6)';
                e.currentTarget.style.borderColor = 'rgba(100,80,255,0.2)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{
                  background: tourney.game === 'PUBG' ? '#e44d2e' : tourney.game === 'FREE FIRE' ? '#ff6b35' : '#2ecc71',
                  width: '8px',
                  height: '40px',
                  borderRadius: '4px',
                }} />
                <div>
                  <div style={{ color: '#a855f7', fontSize: '12px', fontWeight: 600, letterSpacing: '1px' }}>
                    {tourney.game}
                  </div>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: '15px' }}>
                    {tourney.title}
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div>
                  <div style={{ color: 'rgba(180,180,220,0.5)', fontSize: '10px' }}>PRIZE</div>
                  <div style={{ color: '#ffd700', fontWeight: 800, fontSize: '18px' }}>${tourney.prize}</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(180,180,220,0.5)', fontSize: '10px' }}>ENTRY</div>
                  <div style={{ color: '#00e5ff', fontWeight: 700, fontSize: '13px' }}>{tourney.entryFee}</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(180,180,220,0.5)', fontSize: '10px' }}>ENROLLED</div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '13px' }}>{tourney.enrolled}/{tourney.maxTeams}</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(180,180,220,0.5)', fontSize: '10px' }}>STARTS</div>
                  <div style={{ color: '#ff9800', fontWeight: 600, fontSize: '13px' }}>{tourney.date}</div>
                </div>
                <Link to="/tournaments">
                  <button style={{
                    background: 'linear-gradient(90deg, #ff9800, #ff5722)',
                    border: 'none',
                    borderRadius: '30px',
                    padding: '8px 24px',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '12px',
                    cursor: 'pointer',
                    transition: 'transform 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                    JOIN →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/tournaments">
            <button style={{
              background: 'transparent',
              border: '2px solid rgba(168,85,247,0.5)',
              color: '#a855f7',
              fontWeight: 700,
              fontSize: '14px',
              borderRadius: '30px',
              padding: '10px 32px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(168,85,247,0.15)';
              e.currentTarget.style.borderColor = '#a855f7';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)';
            }}>
              VIEW ALL TOURNAMENTS →
            </button>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        marginTop: '60px',
        padding: '50px 24px',
        background: 'linear-gradient(135deg, rgba(255,152,0,0.08), rgba(255,87,34,0.05))',
        borderRadius: '32px',
        marginLeft: '24px',
        marginRight: '24px',
      }}>
        <h3 style={{
          color: '#fff',
          fontSize: 'clamp(20px, 4vw, 28px)',
          fontWeight: 800,
          marginBottom: '16px',
        }}>
          Ready to Compete?
        </h3>
        <p style={{ color: 'rgba(220,220,255,0.7)', marginBottom: '24px' }}>
          Join thousands of players and win amazing prizes
        </p>
        <Link to="/signup">
          <button style={{
            background: 'linear-gradient(90deg, #ff9800, #ff5722)',
            color: '#fff',
            fontWeight: 800,
            fontSize: '16px',
            border: 'none',
            borderRadius: '40px',
            padding: '14px 48px',
            cursor: 'pointer',
            transition: 'transform 0.15s, box-shadow 0.15s',
            boxShadow: '0 0 25px rgba(255,87,34,0.4)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 35px rgba(255,87,34,0.6)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 25px rgba(255,87,34,0.4)';
          }}>
            GET STARTED NOW →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AvailableGames;