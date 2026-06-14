// Tournaments.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const tournaments = [
  // ========== FREE FIRE - BATTLE ROYALE ==========
  {
    id: 1,
    title: 'FREE FIRE BATTLE ROYALE - WEEKLY',
    image: 'https://i.ibb.co.com/Xxf0nn1n/free-fire-max-3840x2160-12569.jpg',
    gameName: 'FREE FIRE',
    category: 'BATTLE ROYALE',
    bgColor: '#e67e22',
    startDateTime: '২৫ এপ্রিল, রাত ৮ টা',
    prize: 1250,
    entryFee: '25',
    teamSize: 'SOLO',
    maxTeams: 100,
    enrolled: 47,
    isActive: true,
    isPaid: true,
  },
  {
    id: 2,
    title: 'FREE FIRE BATTLE ROYALE - DUO CUP',
    image: 'https://i.ibb.co.com/Xxf0nn1n/free-fire-max-3840x2160-12569.jpg',
    gameName: 'FREE FIRE',
    category: 'BATTLE ROYALE',
    bgColor: '#e67e22',
    startDateTime: '২৭ এপ্রিল, রাত ৯ টা',
    prize: 2100,
    entryFee: '40',
    teamSize: 'DUO',
    maxTeams: 80,
    enrolled: 53,
    isActive: true,
    isPaid: true,
  },
  {
    id: 3,
    title: 'FREE FIRE BATTLE ROYALE - SQUAD CHAMPIONSHIP',
    image: 'https://i.ibb.co.com/Xxf0nn1n/free-fire-max-3840x2160-12569.jpg',
    gameName: 'FREE FIRE',
    category: 'BATTLE ROYALE',
    bgColor: '#e67e22',
    startDateTime: '২৯ এপ্রিল, রাত ৭ টা',
    prize: 3500,
    entryFee: '60',
    teamSize: 'SQUAD',
    maxTeams: 120,
    enrolled: 78,
    isActive: true,
    isPaid: true,
  },

  // ========== FREE FIRE - CLASH SQUAD ==========
  {
    id: 4,
    title: 'FREE FIRE CLASH SQUAD - OPEN SERIES',
    image: 'https://i.ibb.co.com/Xxf0nn1n/free-fire-max-3840x2160-12569.jpg',
    gameName: 'FREE FIRE',
    category: 'CLASH SQUAD',
    bgColor: '#e67e22',
    startDateTime: '২৪ এপ্রিল, সন্ধ্যা ৬ টা',
    prize: 950,
    entryFee: '15',
    teamSize: '2 VS 2',
    maxTeams: 64,
    enrolled: 32,
    isActive: true,
    isPaid: true,
  },
  {
    id: 5,
    title: 'FREE FIRE CLASH SQUAD - PRO LEAGUE',
    image: 'https://i.ibb.co.com/Xxf0nn1n/free-fire-max-3840x2160-12569.jpg',
    gameName: 'FREE FIRE',
    category: 'CLASH SQUAD',
    bgColor: '#e67e22',
    startDateTime: '২৮ এপ্রিল, রাত ১০ টা',
    prize: 1800,
    entryFee: '30',
    teamSize: '4 VS 4',
    maxTeams: 96,
    enrolled: 61,
    isActive: true,
    isPaid: true,
  },
  {
    id: 6,
    title: 'FREE FIRE CLASH SQUAD - MASTERS FINALS',
    image: 'https://i.ibb.co.com/Xxf0nn1n/free-fire-max-3840x2160-12569.jpg',
    gameName: 'FREE FIRE',
    category: 'CLASH SQUAD',
    bgColor: '#e67e22',
    startDateTime: '৪ মে, রাত ৯ টা',
    prize: 5000,
    entryFee: '100',
    teamSize: '4 VS 4',
    maxTeams: 64,
    enrolled: 23,
    isActive: true,
    isPaid: true,
  },

  // ========== FREE FIRE - FREE TOURNAMENT ==========
  {
    id: 13,
    title: '🎁 FREE FIRE - FREE ENTRY WEEKLY CHAMPIONSHIP',
    image: 'https://i.ibb.co.com/Xxf0nn1n/free-fire-max-3840x2160-12569.jpg',
    gameName: 'FREE FIRE',
    category: 'BATTLE ROYALE',
    bgColor: '#e67e22',
    startDateTime: '২৩ এপ্রিল, সন্ধ্যা ৭ টা',
    prize: 500,
    entryFee: '0',
    teamSize: 'SOLO',
    maxTeams: 50,
    enrolled: 38,
    isActive: true,
    isPaid: false,
  },
  {
    id: 14,
    title: '🎉 FREE FIRE CLASH SQUAD - FREE PRACTICE CUP',
    image: 'https://i.ibb.co.com/Xxf0nn1n/free-fire-max-3840x2160-12569.jpg',
    gameName: 'FREE FIRE',
    category: 'CLASH SQUAD',
    bgColor: '#e67e22',
    startDateTime: '২৪ এপ্রিল, রাত ৮ টা',
    prize: 300,
    entryFee: '0',
    teamSize: '2 VS 2',
    maxTeams: 32,
    enrolled: 19,
    isActive: true,
    isPaid: false,
  },

  // ========== PUBG - COMING SOON ==========
  {
    id: 7,
    title: 'PUBG ERANGEL CLASSIC - WEEKLY',
    image: 'https://i.ibb.co.com/3mbHHcbP/pubg-mobile-5120x2880-19041.jpg',
    gameName: 'PUBG',
    category: 'BATTLE ROYALE',
    bgColor: '#c0392b',
    startDateTime: 'Coming Soon',
    prize: 0,
    entryFee: 'TBA',
    teamSize: 'TBA',
    maxTeams: 0,
    enrolled: 0,
    isActive: false,
    comingSoon: true,
    isPaid: false,
  },
  {
    id: 8,
    title: 'PUBG SANHOK DUO SHOWDOWN',
    image: 'https://i.ibb.co.com/3mbHHcbP/pubg-mobile-5120x2880-19041.jpg',
    gameName: 'PUBG',
    category: 'BATTLE ROYALE',
    bgColor: '#c0392b',
    startDateTime: 'Coming Soon',
    prize: 0,
    entryFee: 'TBA',
    teamSize: 'TBA',
    maxTeams: 0,
    enrolled: 0,
    isActive: false,
    comingSoon: true,
    isPaid: false,
  },
  {
    id: 9,
    title: 'PUBG MIRAMAR SOLO PRO SERIES',
    image: 'https://i.ibb.co.com/3mbHHcbP/pubg-mobile-5120x2880-19041.jpg',
    gameName: 'PUBG',
    category: 'BATTLE ROYALE',
    bgColor: '#c0392b',
    startDateTime: 'Coming Soon',
    prize: 0,
    entryFee: 'TBA',
    teamSize: 'TBA',
    maxTeams: 0,
    enrolled: 0,
    isActive: false,
    comingSoon: true,
    isPaid: false,
  },

  // ========== eFOOTBALL - COMING SOON ==========
  {
    id: 10,
    title: 'eFOOTBALL 1V1 CUP',
    image: 'https://i.ibb.co.com/9H55TJzK/wp15783765-efootball-2026-wallpapers.jpg',
    gameName: 'eFOOTBALL',
    category: 'SPORTS',
    bgColor: '#1a5276',
    startDateTime: 'Coming Soon',
    prize: 0,
    entryFee: 'TBA',
    teamSize: 'TBA',
    maxTeams: 0,
    enrolled: 0,
    isActive: false,
    comingSoon: true,
    isPaid: false,
  },
  {
    id: 11,
    title: 'eFOOTBALL PRO LEAGUE - SEASON 1',
    image: 'https://i.ibb.co.com/9H55TJzK/wp15783765-efootball-2026-wallpapers.jpg',
    gameName: 'eFOOTBALL',
    category: 'SPORTS',
    bgColor: '#1a5276',
    startDateTime: 'Coming Soon',
    prize: 0,
    entryFee: 'TBA',
    teamSize: 'TBA',
    maxTeams: 0,
    enrolled: 0,
    isActive: false,
    comingSoon: true,
    isPaid: false,
  },
  {
    id: 12,
    title: 'eFOOTBALL CLUB CHAMPIONS CUP',
    image: 'https://i.ibb.co.com/9H55TJzK/wp15783765-efootball-2026-wallpapers.jpg',
    gameName: 'eFOOTBALL',
    category: 'SPORTS',
    bgColor: '#1a5276',
    startDateTime: 'Coming Soon',
    prize: 0,
    entryFee: 'TBA',
    teamSize: 'TBA',
    maxTeams: 0,
    enrolled: 0,
    isActive: false,
    comingSoon: true,
    isPaid: false,
  },
];

const gameOptions = ['All Games', 'FREE FIRE', 'PUBG', 'eFOOTBALL'];
const teamSizeOptions = ['Team Size', 'SOLO', 'DUO', 'SQUAD', '2 VS 2', '4 VS 4'];
const entryFeeOptions = ['Entry Fee', '0', '15', '25', '30', '40', '60', '100'];

const Tournaments = () => {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState('All Games');
  const [teamSize, setTeamSize] = useState('Team Size');
  const [entryFee, setEntryFee] = useState('Entry Fee');

  const filtered = tournaments.filter(t => {
    const matchGame = selectedGame === 'All Games' || t.gameName === selectedGame;
    const matchTeam = teamSize === 'Team Size' || t.teamSize === teamSize;
    const matchFee = entryFee === 'Entry Fee' || (t.entryFee === entryFee);
    return matchGame && matchTeam && matchFee;
  });

  // Get category badge style
  const getCategoryBadge = (category) => {
    if (category === 'BATTLE ROYALE') return { bg: '#ff5722', label: 'BATTLE ROYALE' };
    if (category === 'CLASH SQUAD') return { bg: '#9c27b0', label: 'CLASH SQUAD' };
    if (category === 'SPORTS') return { bg: '#4caf50', label: 'SPORTS' };
    return { bg: '#7c3aed', label: category };
  };

  // Format currency in BDT
  const formatBDT = (amount) => {
    if (amount === 0) return 'TBA';
    return `৳${amount.toLocaleString('bn-BD')}`;
  };

  // Format entry fee with date and time
  const formatEntryFeeWithDateTime = (fee, startDateTime, isComingSoon) => {
    if (isComingSoon) return 'TBA';
    if (fee === '0') return `FREE • ${startDateTime}`;
    return `৳${fee} • ${startDateTime}`;
  };

  // Handle Join Tournament click
  const handleJoinTournament = (tournament) => {
    if (tournament.comingSoon) return;
    navigate('/tournament-registration', { state: { tournament } });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 60% 20%, #1a0a4a 0%, #0d0630 40%, #060318 100%)',
      fontFamily: "'Segoe UI', sans-serif",
      paddingBottom: '60px',
    }}>
      <style>{`
        * { box-sizing: border-box; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes freePulse {
          0%, 100% { box-shadow: 0 0 5px rgba(76,175,80,0.3); }
          50% { box-shadow: 0 0 20px rgba(76,175,80,0.6); }
        }

        .tour-card {
          animation: fadeInUp 0.4s ease both;
        }

        .filter-select {
          background: rgba(10,5,40,0.85);
          border: 1px solid rgba(100,80,255,0.3);
          color: #ccc;
          font-size: 13px;
          padding: 10px 32px 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          outline: none;
          transition: border-color 0.2s;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 10px center;
          width: 100%;
        }
        .filter-select:focus { border-color: rgba(100,80,255,0.7); }

        .view-btn {
          background: linear-gradient(90deg, #ff9800, #ff5722);
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          border: none;
          border-radius: 20px;
          padding: 9px 22px;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 0 12px rgba(255,87,34,0.3);
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .view-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255,87,34,0.5);
        }

        .view-btn-free {
          background: linear-gradient(90deg, #4caf50, #2e7d32);
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          border: none;
          border-radius: 20px;
          padding: 9px 22px;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 0 12px rgba(76,175,80,0.3);
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .view-btn-free:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(76,175,80,0.5);
        }

        .view-btn-disabled {
          background: linear-gradient(90deg, #555, #444);
          color: rgba(255,255,255,0.6);
          font-weight: 700;
          font-size: 13px;
          border: none;
          border-radius: 20px;
          padding: 9px 22px;
          cursor: not-allowed;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .free-badge {
          background: linear-gradient(135deg, #4caf50, #2e7d32);
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 20px;
          margin-left: 8px;
          animation: freePulse 2s infinite;
        }

        .stat-label {
          color: rgba(180,180,220,0.55);
          font-size: 9px;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 2px;
          font-weight: 600;
        }
        .stat-value {
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.3px;
          line-height: 1.4;
        }

        .tour-card-inner {
          background: rgba(12,7,45,0.9);
          border: 1px solid rgba(80,60,200,0.25);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          align-items: stretch;
          transition: border-color 0.25s, box-shadow 0.25s;
          margin-bottom: 16px;
          backdrop-filter: blur(8px);
        }
        .tour-card-inner:hover {
          border-color: rgba(100,80,255,0.5);
          box-shadow: 0 4px 32px rgba(80,60,200,0.2);
        }

        .coming-soon-badge {
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(8px);
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 800;
          color: #ff9800;
          border: 1px solid #ff9800;
          letter-spacing: 1px;
          z-index: 5;
          animation: pulse 2s infinite;
        }

        /* Responsive */
        @media (max-width: 700px) {
          .tour-card-inner {
            flex-direction: column !important;
          }
          .tour-img-block {
            width: 100% !important;
            height: 140px !important;
            min-width: unset !important;
          }
          .tour-prize-block {
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding: 14px 18px !important;
            border-left: none !important;
            border-top: 1px solid rgba(80,60,200,0.2) !important;
          }
          .stats-row {
            flex-wrap: wrap !important;
            gap: 14px !important;
          }
          .filter-row {
            flex-wrap: wrap !important;
          }
          .filter-row > div {
            min-width: calc(50% - 10px) !important;
          }
        }

        @media (max-width: 500px) {
          .filter-row > div {
            min-width: 100% !important;
          }
        }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{
        textAlign: 'center',
        paddingTop: '48px',
        paddingBottom: '10px',
      }}>
        <h1 style={{
          color: '#fff',
          fontWeight: 900,
          fontSize: 'clamp(28px, 6vw, 52px)',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          margin: '0 0 12px 0',
          textShadow: '0 0 40px rgba(100,80,255,0.4)',
        }}>
          BROWSE TOURNAMENTS
        </h1>
        <p style={{
          color: 'rgba(200,200,255,0.65)',
          fontSize: '14px',
          lineHeight: 1.6,
          margin: 0,
        }}>
          🇧🇩 🔥 Free Fire tournaments are LIVE now! 🎁 FREE entry tournaments available!
        </p>
      </div>

      {/* ── FILTER BAR ── */}
      <div style={{ maxWidth: '900px', margin: '32px auto 28px', padding: '0 20px' }}>
        <div
          className="filter-row"
          style={{
            background: 'rgba(8,4,30,0.85)',
            border: '1px solid rgba(80,60,200,0.3)',
            borderRadius: '12px',
            padding: '18px 20px',
            display: 'flex',
            gap: '15px',
            alignItems: 'flex-end',
            backdropFilter: 'blur(10px)',
            flexWrap: 'wrap',
          }}
        >
          {/* Game Selection */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1, minWidth: '150px' }}>
            <span style={{ color: 'rgba(200,200,255,0.5)', fontSize: '11px', letterSpacing: '0.5px' }}>SELECT GAME</span>
            <select
              className="filter-select"
              value={selectedGame}
              onChange={e => setSelectedGame(e.target.value)}
            >
              {gameOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          {/* Team Size */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1, minWidth: '130px' }}>
            <span style={{ color: 'rgba(200,200,255,0.5)', fontSize: '11px', letterSpacing: '0.5px' }}>TEAM SIZE</span>
            <select
              className="filter-select"
              value={teamSize}
              onChange={e => setTeamSize(e.target.value)}
            >
              {teamSizeOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          {/* Entry Fee */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1, minWidth: '140px' }}>
            <span style={{ color: 'rgba(200,200,255,0.5)', fontSize: '11px', letterSpacing: '0.5px' }}>ENTRY FEE (BDT)</span>
            <select
              className="filter-select"
              value={entryFee}
              onChange={e => setEntryFee(e.target.value)}
            >
              {entryFeeOptions.map(o => <option key={o} value={o}>{o === 'Entry Fee' ? o : o === '0' ? 'FREE' : `৳${o}`}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedGame !== 'All Games' || teamSize !== 'Team Size' || entryFee !== 'Entry Fee') && (
        <div style={{ maxWidth: '900px', margin: '-10px auto 20px', padding: '0 20px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {selectedGame !== 'All Games' && (
              <span style={{ background: 'rgba(100,80,255,0.3)', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', color: '#ccc' }}>
                Game: {selectedGame} ✕
              </span>
            )}
            {teamSize !== 'Team Size' && (
              <span style={{ background: 'rgba(100,80,255,0.3)', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', color: '#ccc' }}>
                Team: {teamSize} ✕
              </span>
            )}
            {entryFee !== 'Entry Fee' && (
              <span style={{ background: 'rgba(100,80,255,0.3)', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', color: '#ccc' }}>
                Fee: {entryFee === '0' ? 'FREE' : `৳${entryFee}`} ✕
              </span>
            )}
            <button 
              onClick={() => {
                setSelectedGame('All Games');
                setTeamSize('Team Size');
                setEntryFee('Entry Fee');
              }}
              style={{ background: 'rgba(255,87,34,0.3)', border: 'none', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', color: '#ff9800', cursor: 'pointer' }}
            >
              Clear All ✕
            </button>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div style={{ maxWidth: '900px', margin: '0 auto 15px', padding: '0 20px' }}>
        <span style={{ color: 'rgba(200,200,255,0.5)', fontSize: '12px' }}>
          Showing {filtered.length} tournament{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* ── TOURNAMENT LIST ── */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', color: 'rgba(200,200,255,0.4)', padding: '60px 0', fontSize: '16px' }}>
            No tournaments found. Try adjusting your filters.
          </div>
        )}

        {filtered.map((t, idx) => {
          const categoryBadge = getCategoryBadge(t.category);
          const isComingSoon = t.comingSoon === true;
          const isFree = t.entryFee === '0';
          
          return (
            <div key={t.id} className="tour-card" style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="tour-card-inner" style={{ opacity: isComingSoon ? 0.85 : 1 }}>

                {/* ── LEFT: Game Image ── */}
                <div
                  className="tour-img-block"
                  style={{
                    minWidth: '130px',
                    width: '130px',
                    background: t.bgColor,
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {isComingSoon && (
                    <div className="coming-soon-badge">
                      🔜 COMING SOON
                    </div>
                  )}
                  <img
                    src={t.image}
                    alt={t.gameName}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: isComingSoon ? 'brightness(0.7)' : 'none',
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'rgba(0,0,0,0.6)',
                    textAlign: 'center',
                    padding: '6px 4px',
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: '10px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}>
                    {t.gameName}
                  </div>
                </div>

                {/* ── CENTER: Info ── */}
                <div style={{
                  flex: 1,
                  padding: '16px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '10px',
                }}>
                  {/* Title + Category Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <h3 style={{
                      color: '#fff',
                      fontWeight: 900,
                      fontSize: 'clamp(13px, 2.5vw, 16px)',
                      letterSpacing: '0.5px',
                      margin: 0,
                      lineHeight: 1.25,
                    }}>
                      {t.title}
                    </h3>
                    <span style={{
                      background: categoryBadge.bg,
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '9px',
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '0.5px',
                    }}>
                      {categoryBadge.label}
                    </span>
                    {isFree && !isComingSoon && (
                      <span className="free-badge">🎁 FREE ENTRY</span>
                    )}
                  </div>

                  {/* Stats Row - Only ENTRY FEE with Date & Time */}
                  <div
                    className="stats-row"
                    style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div>
                      <div className="stat-label">ENTRY FEE</div>
                      <div className="stat-value" style={{ 
                        color: isFree ? '#4caf50' : '#00e5ff',
                      }}>
                        {formatEntryFeeWithDateTime(t.entryFee, t.startDateTime, isComingSoon)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── RIGHT: Prize + Button ── */}
                <div
                  className="tour-prize-block"
                  style={{
                    minWidth: '140px',
                    borderLeft: '1px solid rgba(80,60,200,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px 16px',
                    gap: '10px',
                    flexShrink: 0,
                  }}
                >
                  {/* Prize */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      justifyContent: 'center',
                      marginBottom: '2px',
                    }}>
                      <span style={{
                        color: isComingSoon ? '#888' : '#ffd700',
                        fontSize: '9px',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                      }}>PRIZE POOL</span>
                    </div>
                    <div style={{
                      color: isComingSoon ? '#888' : '#fff',
                      fontWeight: 900,
                      fontSize: '22px',
                      letterSpacing: '1px',
                      lineHeight: 1,
                    }}>
                      {formatBDT(t.prize)}
                    </div>
                  </div>

                  {!isComingSoon ? (
                    <button 
                      className={isFree ? "view-btn-free" : "view-btn"}
                      onClick={() => handleJoinTournament(t)}
                    >
                      {isFree ? '🎁 JOIN FREE' : 'JOIN TOURNAMENT'}
                    </button>
                  ) : (
                    <button className="view-btn-disabled" disabled>NOTIFY ME</button>
                  )}

                  <div style={{
                    color: isComingSoon ? 'rgba(200,200,255,0.3)' : 'rgba(200,200,255,0.5)',
                    fontSize: '10px',
                    textAlign: 'center',
                    lineHeight: 1.3,
                  }}>
                    {!isComingSoon ? '🏆 Top 3 Winners • Cash Prize' : 'Get notified when live'}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tournaments;