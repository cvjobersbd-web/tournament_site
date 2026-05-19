import React, { useState } from 'react';

const Navbar = () => {
  const [tourOpen, setTourOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const closeAll = () => { setTourOpen(false); setPagesOpen(false); setLangOpen(false); };

  const dropdownStyle = {
    position: 'absolute', top: '140%', left: 0,
    background: '#12073a',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px', padding: '8px 0',
    listStyle: 'none', margin: 0,
    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
    zIndex: 200, minWidth: '170px',
  };

  const dropItemStyle = {
    display: 'block', padding: '9px 18px',
    color: '#ccc', fontSize: '13px', textDecoration: 'none',
    transition: 'color 0.2s, background 0.2s',
    cursor: 'pointer',
  };

  return (
    <>
      {/* Overlay to close dropdowns */}
      {(tourOpen || pagesOpen || langOpen) && (
        <div onClick={closeAll} style={{ position: 'fixed', inset: 0, zIndex: 99 }} />
      )}

      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 48px',
        position: 'relative', zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        fontFamily: "'Segoe UI', sans-serif",
      }}>

        {/* ── LOGO ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff9800, #ff5722)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, color: '#fff', fontSize: '18px',
            boxShadow: '0 0 16px rgba(255,120,0,0.5)',
            userSelect: 'none',
          }}>b</div>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: '22px', letterSpacing: '2px' }}>
            BEGAM
          </span>
        </div>

        {/* ── NAV LINKS ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>

          {/* HOME */}
          <a href="#" style={{
            color: '#00e5ff', fontWeight: 700, fontSize: '13px',
            letterSpacing: '1px', textDecoration: 'none',
          }}>HOME</a>

          {/* TOURNAMENTS */}
          <div style={{ position: 'relative' }}>
            <a href="#" onClick={e => { e.preventDefault(); setTourOpen(o => !o); setPagesOpen(false); setLangOpen(false); }}
              style={{ color: '#ccc', fontWeight: 500, fontSize: '13px', letterSpacing: '1px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
              onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
            >TOURNAMENTS <span style={{ fontSize: '10px' }}>▾</span></a>
            {tourOpen && (
              <ul style={dropdownStyle}>
                {['All Tournaments', 'Free Entry', 'Paid Entry', 'Live Now'].map(item => (
                  <li key={item}>
                    <a href="#" style={dropItemStyle}
                      onMouseEnter={e => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.background = 'rgba(0,229,255,0.07)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.background = 'transparent'; }}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* PAGES */}
          <div style={{ position: 'relative' }}>
            <a href="#" onClick={e => { e.preventDefault(); setPagesOpen(o => !o); setTourOpen(false); setLangOpen(false); }}
              style={{ color: '#ccc', fontWeight: 500, fontSize: '13px', letterSpacing: '1px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
              onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
            >PAGES <span style={{ fontSize: '10px' }}>▾</span></a>
            {pagesOpen && (
              <ul style={dropdownStyle}>
                {['About Us', 'Leaderboard', 'Blog', 'FAQ'].map(item => (
                  <li key={item}>
                    <a href="#" style={dropItemStyle}
                      onMouseEnter={e => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.background = 'rgba(0,229,255,0.07)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.background = 'transparent'; }}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* CONTACT */}
          <a href="#" style={{ color: '#ccc', fontWeight: 500, fontSize: '13px', letterSpacing: '1px', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
            onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
          >CONTACT</a>
        </div>

        {/* ── RIGHT SIDE ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>

          {/* Search */}
          <button style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#ccc', padding: '4px', lineHeight: 1,
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Language */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => { setLangOpen(o => !o); setTourOpen(false); setPagesOpen(false); }} style={{
              background: 'none', border: '1px solid rgba(255,255,255,0.2)',
              color: '#ccc', fontSize: '12px', fontWeight: 600, letterSpacing: '1px',
              cursor: 'pointer', padding: '5px 12px', borderRadius: '4px',
              display: 'flex', alignItems: 'center', gap: '4px', transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
            >EN <span style={{ fontSize: '9px' }}>▾</span></button>
            {langOpen && (
              <ul style={{ ...dropdownStyle, left: 'auto', right: 0, minWidth: '100px' }}>
                {['EN', 'BN', 'AR', 'FR'].map(lang => (
                  <li key={lang}>
                    <a href="#" style={dropItemStyle}
                      onMouseEnter={e => { e.currentTarget.style.color = '#00e5ff'; e.currentTarget.style.background = 'rgba(0,229,255,0.07)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.background = 'transparent'; }}
                    >{lang}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Divider */}
          <div style={{ width: '1px', height: '22px', background: 'rgba(255,255,255,0.2)' }} />

          {/* LOGIN */}
          <a href="#" style={{ color: '#fff', fontWeight: 600, fontSize: '14px', textDecoration: 'none', letterSpacing: '0.5px', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
            onMouseLeave={e => e.currentTarget.style.color = '#fff'}
          >LOGIN</a>

          {/* JOIN NOW */}
          <button style={{
            background: 'linear-gradient(90deg, #ff9800, #ff5722)',
            color: '#fff', fontWeight: 700, fontSize: '14px',
            border: 'none', borderRadius: '24px', padding: '10px 24px',
            cursor: 'pointer', boxShadow: '0 0 20px rgba(255,120,0,0.5)',
            letterSpacing: '0.5px', transition: 'transform 0.15s, box-shadow 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255,120,0,0.8)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255,120,0,0.5)'; }}
          >JOIN NOW!</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;