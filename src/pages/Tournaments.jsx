import React, { useState } from 'react';

const tournaments = [
  {
    id: 1,
    title: 'MIX IT MONDAYS - CARRY ONLY',
    image: 'https://i.ibb.co.com/1t876NJQ/eb.png',
    gameName: 'REDSQUAD',
    bgColor: '#c0392b',
    startsIn: '10d 2H 18M',
    date: 'Apr 21, 5:00 AM EDT',
    prize: 739,
    entryFee: '10 CREDITS',
    teamSize: '2 VS 2',
    maxTeams: 64,
    enrolled: 11,
    skillLevel: 'ALL',
  },
  {
    id: 2,
    title: 'HEAD 2 HEAD - WEEKLY - NANO',
    image: 'https://i.ibb.co.com/1t876NJQ/eb.png',
    gameName: 'WARZONE',
    bgColor: '#6c3483',
    startsIn: '10d 2H 18M',
    date: 'Apr 21, 5:00 AM EDT',
    prize: 854,
    entryFee: '10 CREDITS',
    teamSize: '2 VS 2',
    maxTeams: 64,
    enrolled: 11,
    skillLevel: 'ALL',
  },
  {
    id: 3,
    title: 'MARATHON AIM PREMIUM',
    image: 'https://i.ibb.co.com/1t876NJQ/eb.png',
    gameName: 'WARZONE',
    bgColor: '#1a5276',
    startsIn: '10d 2H 18M',
    date: 'Apr 21, 5:00 AM EDT',
    prize: 105,
    entryFee: '10 CREDITS',
    teamSize: '2 VS 2',
    maxTeams: 64,
    enrolled: 11,
    skillLevel: 'ALL',
  },
  {
    id: 4,
    title: 'BEGUM FORTNITE TOURNAMENT 23',
    image: 'https://i.ibb.co.com/1t876NJQ/eb.png',
    gameName: 'BLACK NINJA',
    bgColor: '#1c2833',
    startsIn: '10d 2H 18M',
    date: 'Apr 21, 5:00 AM EDT',
    prize: 473,
    entryFee: '10 CREDITS',
    teamSize: '2 VS 2',
    maxTeams: 64,
    enrolled: 11,
    skillLevel: 'ALL',
  },
  {
    id: 5,
    title: '60 PLAYER - WEEKLY - MICRO',
    image: 'https://i.ibb.co.com/1t876NJQ/eb.png',
    gameName: 'REDSQUAD',
    bgColor: '#922b21',
    startsIn: '10d 2H 18M',
    date: 'Apr 21, 5:00 AM EDT',
    prize: 778,
    entryFee: '10 CREDITS',
    teamSize: '2 VS 2',
    maxTeams: 64,
    enrolled: 11,
    skillLevel: 'ALL',
  },
];

const statusOptions = ['Status', 'Open', 'Closed', 'Upcoming'];
const teamSizeOptions = ['Select Team Size', '1 VS 1', '2 VS 2', '3 VS 3', '4 VS 4', '5 VS 5'];
const entryFeeOptions = ['Select Entry Fee', 'Free', '5 CREDITS', '10 CREDITS', '25 CREDITS', '50 CREDITS'];

const Tournaments = () => {
  const [status, setStatus] = useState('Status');
  const [search, setSearch] = useState('');
  const [teamSize, setTeamSize] = useState('Select Team Size');
  const [entryFee, setEntryFee] = useState('Select Entry Fee');

  const filtered = tournaments.filter(t => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
    const matchTeam = teamSize === 'Select Team Size' || t.teamSize === teamSize;
    const matchFee = entryFee === 'Select Entry Fee' || t.entryFee === entryFee;
    return matchSearch && matchTeam && matchFee;
  });

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

        .tour-card {
          animation: fadeInUp 0.4s ease both;
        }

        .tour-card:nth-child(1) { animation-delay: 0.05s; }
        .tour-card:nth-child(2) { animation-delay: 0.1s; }
        .tour-card:nth-child(3) { animation-delay: 0.15s; }
        .tour-card:nth-child(4) { animation-delay: 0.2s; }
        .tour-card:nth-child(5) { animation-delay: 0.25s; }

        .filter-select {
          appearance: none;
          background: rgba(10,5,40,0.85);
          border: 1px solid rgba(100,80,255,0.3);
          color: #aaa;
          font-size: 13px;
          padding: 10px 32px 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          outline: none;
          transition: border-color 0.2s;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 10px center;
        }
        .filter-select:focus { border-color: rgba(100,80,255,0.7); }

        .search-input {
          background: rgba(10,5,40,0.85);
          border: 1px solid rgba(100,80,255,0.3);
          color: #ccc;
          font-size: 13px;
          padding: 10px 14px;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
        }
        .search-input::placeholder { color: #666; }
        .search-input:focus { border-color: rgba(100,80,255,0.7); }

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
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.5px;
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
          Find the perfect tournaments for you. Head to head matches<br />
          where you pick the game, rules and prize.
        </p>
      </div>

      {/* ── FILTER BAR ── */}
      <div style={{ maxWidth: '860px', margin: '32px auto 28px', padding: '0 20px' }}>
        <div
          className="filter-row"
          style={{
            background: 'rgba(8,4,30,0.85)',
            border: '1px solid rgba(80,60,200,0.3)',
            borderRadius: '12px',
            padding: '18px 20px',
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Status */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', minWidth: '110px' }}>
            <span style={{ color: 'rgba(200,200,255,0.5)', fontSize: '11px', letterSpacing: '0.5px' }}>Status</span>
            <select
              className="filter-select"
              value={status}
              onChange={e => setStatus(e.target.value)}
              style={{ minWidth: '110px' }}
            >
              {statusOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          {/* Search */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px', minWidth: '120px' }}>
            <span style={{ color: 'rgba(200,200,255,0.5)', fontSize: '11px', letterSpacing: '0.5px' }}>Search</span>
            <input
              className="search-input"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* Team Size */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', minWidth: '140px' }}>
            <span style={{ color: 'rgba(200,200,255,0.5)', fontSize: '11px', letterSpacing: '0.5px' }}>Team Size</span>
            <select
              className="filter-select"
              value={teamSize}
              onChange={e => setTeamSize(e.target.value)}
              style={{ minWidth: '140px' }}
            >
              {teamSizeOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          {/* Entry Fee */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', minWidth: '140px' }}>
            <span style={{ color: 'rgba(200,200,255,0.5)', fontSize: '11px', letterSpacing: '0.5px' }}>Entry Fee</span>
            <select
              className="filter-select"
              value={entryFee}
              onChange={e => setEntryFee(e.target.value)}
              style={{ minWidth: '140px' }}
            >
              {entryFeeOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* ── TOURNAMENT LIST ── */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', color: 'rgba(200,200,255,0.4)', padding: '60px 0', fontSize: '16px' }}>
            No tournaments found.
          </div>
        )}

        {filtered.map((t, idx) => (
          <div key={t.id} className="tour-card" style={{ animationDelay: `${idx * 0.07}s` }}>
            <div className="tour-card-inner">

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
                <img
                  src={t.image}
                  alt={t.gameName}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'rgba(0,0,0,0.5)',
                  textAlign: 'center',
                  padding: '6px 4px',
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: '11px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                }}>
                  {t.gameName}
                </div>
              </div>

              {/* ── CENTER: Info ── */}
              <div style={{
                flex: 1,
                padding: '18px 20px 16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '12px',
              }}>
                {/* Title */}
                <h3 style={{
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  letterSpacing: '1px',
                  margin: 0,
                  textTransform: 'uppercase',
                  lineHeight: 1.25,
                }}>
                  {t.title}
                </h3>

                {/* Timer + Date */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(80,60,200,0.2)',
                    border: '1px solid rgba(100,80,255,0.3)',
                    borderRadius: '20px',
                    padding: '5px 12px',
                  }}>
                    {/* lightning icon */}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#a78bfa">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                    <span style={{ color: '#a78bfa', fontSize: '12px', fontWeight: 700, letterSpacing: '0.5px' }}>
                      Starts in {t.startsIn}
                    </span>
                  </div>

                  <div style={{
                    background: 'rgba(0,150,200,0.15)',
                    border: '1px solid rgba(0,200,255,0.25)',
                    borderRadius: '20px',
                    padding: '5px 12px',
                    color: '#00e5ff',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}>
                    {t.date}
                  </div>
                </div>

                {/* Stats Row */}
                <div
                  className="stats-row"
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    flexWrap: 'nowrap',
                  }}
                >
                  <div>
                    <div className="stat-label">ENTRY/PLAYER</div>
                    <div className="stat-value" style={{ color: '#00e5ff', fontSize: '12px' }}>{t.entryFee}</div>
                  </div>
                  <div>
                    <div className="stat-label">TEAM SIZE</div>
                    <div className="stat-value" style={{ fontSize: '12px' }}>{t.teamSize}</div>
                  </div>
                  <div>
                    <div className="stat-label">MAX TEAMS</div>
                    <div className="stat-value" style={{ fontSize: '12px' }}>{t.maxTeams}</div>
                  </div>
                  <div>
                    <div className="stat-label">ENROLLED</div>
                    <div className="stat-value" style={{ fontSize: '12px' }}>{t.enrolled}</div>
                  </div>
                  <div>
                    <div className="stat-label">SKILL LEVEL</div>
                    <div className="stat-value" style={{ color: '#7cfc00', fontSize: '12px' }}>{t.skillLevel}</div>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Prize + Button ── */}
              <div
                className="tour-prize-block"
                style={{
                  minWidth: '150px',
                  borderLeft: '1px solid rgba(80,60,200,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px 18px',
                  gap: '12px',
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
                    {/* trophy icon */}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#ffd700">
                      <path d="M12 15c-4.41 0-8-3.59-8-8V3h16v4c0 4.41-3.59 8-8 8zm0 2c1.66 0 3 1.34 3 3v1H9v-1c0-1.66 1.34-3 3-3zm-4 5h8v1H8v-1z"/>
                    </svg>
                    <span style={{
                      color: '#ffd700',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}>PRIZE</span>
                  </div>
                  <div style={{
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: '28px',
                    letterSpacing: '1px',
                    lineHeight: 1,
                  }}>
                    ${t.prize}
                  </div>
                </div>

                <button className="view-btn">VIEW TOURNAMENT</button>

                <div style={{
                  color: 'rgba(200,200,255,0.5)',
                  fontSize: '11px',
                  textAlign: 'center',
                  lineHeight: 1.4,
                }}>
                  Top 3 Players Win<br />a Cash Prize
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;