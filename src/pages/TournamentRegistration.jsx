// TournamentRegistration.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TournamentRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tournament } = location.state || {};

  const [formData, setFormData] = useState({
    teamName: '',
    player1Name: '',
    player1GameId: '',
    player2Name: '',
    player2GameId: '',
    whatsappNumber: '',
    bKashNumber: '',
    transactionId: '',
  });

  const [paymentStep, setPaymentStep] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // If no tournament data, go back
  if (!tournament) {
    navigate('/tournaments');
    return null;
  }

  const isPaidTournament = tournament.isPaid === true && tournament.entryFee !== '0';
  const isTeamTournament = tournament.teamSize === '2 VS 2' || tournament.teamSize === '4 VS 4' || tournament.teamSize === 'SQUAD';
  const entryFeeAmount = tournament.entryFee;
  const bKashNumber = '০১৫২১৪০১৬৭৪'; // Fixed bKash number for payment (Bengali digits)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.teamName) {
      setSubmitStatus({ type: 'error', message: 'দয়া করে টিমের নাম লিখুন!' });
      return;
    }
    
    if (!formData.player1Name || !formData.player1GameId) {
      setSubmitStatus({ type: 'error', message: 'খেলোয়াড় ১ এর নাম এবং গেম আইডি লিখুন!' });
      return;
    }
    
    if (isTeamTournament && (!formData.player2Name || !formData.player2GameId)) {
      setSubmitStatus({ type: 'error', message: 'খেলোয়াড় ২ এর নাম এবং গেম আইডি লিখুন!' });
      return;
    }
    
    if (!formData.whatsappNumber) {
      setSubmitStatus({ type: 'error', message: 'দয়া করে হোয়াটসঅ্যাপ নম্বর লিখুন!' });
      return;
    }

    // For paid tournaments, validate payment info
    if (isPaidTournament && (!formData.bKashNumber || !formData.transactionId)) {
      setSubmitStatus({ type: 'error', message: 'দয়া করে বিকাশ নম্বর এবং ট্রানজ্যাকশন আইডি লিখুন!' });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Registration Data:', {
        tournament: tournament.title,
        teamName: formData.teamName,
        players: [
          { name: formData.player1Name, gameId: formData.player1GameId },
          ...(isTeamTournament ? [{ name: formData.player2Name, gameId: formData.player2GameId }] : [])
        ],
        whatsappNumber: formData.whatsappNumber,
        entryFee: isPaidTournament ? `৳${entryFeeAmount}` : 'ফ্রি',
        bKashInfo: isPaidTournament ? {
          sendTo: bKashNumber,
          fromNumber: formData.bKashNumber,
          transactionId: formData.transactionId
        } : null,
      });
      
      setSubmitStatus({ type: 'success', message: '✅ রেজিস্ট্রেশন সফল হয়েছে! আমরা খুব শীঘ্রই আপনার সাথে যোগাযোগ করবো।' });
      setIsSubmitting(false);
      
      // Reset form after 3 seconds and redirect
      setTimeout(() => {
        navigate('/tournaments');
      }, 3000);
    }, 1500);
  };

  // Get team size label in Bengali
  const getTeamSizeLabel = () => {
    if (tournament.teamSize === 'SOLO') return '১ জন (একক)';
    if (tournament.teamSize === 'DUO') return '২ জন (জোড়া)';
    if (tournament.teamSize === 'SQUAD') return '৪ জন (স্কোয়াড)';
    if (tournament.teamSize === '2 VS 2') return '২ বনাম ২';
    if (tournament.teamSize === '4 VS 4') return '৪ বনাম ৪';
    return tournament.teamSize;
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 60% 30%, #1a0a4a 0%, #0d0630 40%, #060318 100%)',
      fontFamily: "'Segoe UI', 'SolaimanLipi', sans-serif",
      padding: '60px 20px',
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .registration-card {
          animation: fadeInUp 0.5s ease-out;
        }
        
        .input-group {
          transition: all 0.2s ease;
        }
        
        .input-group:focus-within {
          transform: translateX(4px);
        }
        
        .player-card {
          background: rgba(0,0,0,0.3);
          border-radius: 16px;
          padding: 16px;
          margin-bottom: 20px;
          border: 1px solid rgba(100,80,255,0.2);
        }
        
        .player-title {
          color: #ff9800;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        @media (max-width: 640px) {
          .registration-card {
            padding: 32px 24px !important;
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

      {/* Registration Card */}
      <div className="registration-card" style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '700px',
        width: '100%',
        margin: '0 auto',
        background: 'linear-gradient(135deg, rgba(20,12,60,0.95), rgba(12,6,40,0.98))',
        backdropFilter: 'blur(10px)',
        borderRadius: '28px',
        padding: '40px',
        border: '1px solid rgba(100,80,255,0.3)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            margin: '0 auto 16px',
            background: 'linear-gradient(135deg, #ff9800, #ff5722)',
            borderRadius: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="none" stroke="#fff"/>
              <path d="M2 17L12 22L22 17" fill="none" stroke="#fff"/>
              <path d="M2 12L12 17L22 12" fill="none" stroke="#fff"/>
            </svg>
          </div>
          <h2 style={{
            color: '#fff',
            fontSize: '26px',
            fontWeight: 800,
            margin: '0 0 8px 0',
            background: 'linear-gradient(135deg, #fff, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            টুর্নামেন্ট রেজিস্ট্রেশন
          </h2>
          <p style={{ color: 'rgba(220,220,255,0.7)', fontSize: '14px', margin: 0 }}>
            {tournament.title}
          </p>
        </div>

        {/* Tournament Info Summary */}
        <div style={{
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '16px',
          padding: '16px',
          marginBottom: '24px',
          border: '1px solid rgba(255,152,0,0.2)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <span style={{ color: 'rgba(220,220,255,0.5)', fontSize: '11px' }}>পুরস্কারের পরিমাণ</span>
              <div style={{ color: '#ffd700', fontWeight: 900, fontSize: '20px' }}>৳{tournament.prize.toLocaleString('bn-BD')}</div>
            </div>
            <div>
              <span style={{ color: 'rgba(220,220,255,0.5)', fontSize: '11px' }}>রেজিস্ট্রেশন ফি</span>
              <div style={{ color: isPaidTournament ? '#ff9800' : '#4caf50', fontWeight: 900, fontSize: '18px' }}>
                {isPaidTournament ? `৳${tournament.entryFee}` : 'ফ্রি'}
              </div>
            </div>
            <div>
              <span style={{ color: 'rgba(220,220,255,0.5)', fontSize: '11px' }}>টিম সাইজ</span>
              <div style={{ color: '#00e5ff', fontWeight: 700 }}>{getTeamSizeLabel()}</div>
            </div>
          </div>
        </div>

        {/* Payment Instructions (Only for Paid Tournaments) */}
        {isPaidTournament && (
          <div style={{
            background: 'rgba(255,152,0,0.15)',
            borderRadius: '16px',
            padding: '16px',
            marginBottom: '24px',
            border: '1px solid rgba(255,152,0,0.3)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ fontSize: '24px' }}>💰</span>
              <span style={{ color: '#ff9800', fontWeight: 800, fontSize: '16px' }}>পেমেন্ট নির্দেশনা</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', margin: '0 0 10px 0' }}>
              অনুগ্রহ করে <strong style={{ color: '#ff9800' }}>৳{tournament.entryFee}</strong> এই বিকাশ নম্বরে পাঠিয়ে দিন:
            </p>
            <div style={{
              background: 'rgba(0,0,0,0.5)',
              borderRadius: '12px',
              padding: '12px',
              textAlign: 'center',
              border: '1px dashed #ff9800',
            }}>
              <span style={{ color: 'rgba(220,220,255,0.5)', fontSize: '11px' }}>বিকাশ মার্চেন্ট নম্বর</span>
              <div style={{ color: '#ff9800', fontWeight: 900, fontSize: '24px', letterSpacing: '1px' }}>
                {bKashNumber}
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', marginTop: '10px', textAlign: 'center' }}>
              পেমেন্ট করার পর নিচে আপনার বিকাশ নম্বর এবং ট্রানজ্যাকশন আইডি দিন
            </p>
          </div>
        )}

        {/* Success/Error Message */}
        {submitStatus && (
          <div style={{
            background: submitStatus.type === 'success' ? 'rgba(76,175,80,0.2)' : 'rgba(255,87,34,0.2)',
            border: `1px solid ${submitStatus.type === 'success' ? 'rgba(76,175,80,0.4)' : 'rgba(255,87,34,0.4)'}`,
            borderRadius: '12px',
            padding: '12px',
            marginBottom: '20px',
            textAlign: 'center',
          }}>
            <span style={{ color: submitStatus.type === 'success' ? '#4caf50' : '#ff9800', fontSize: '13px', fontWeight: 500 }}>
              {submitStatus.message}
            </span>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          {/* Team Name */}
          <div className="input-group" style={{ marginBottom: '24px' }}>
            <label style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600, marginBottom: '8px', display: 'block' }}>
              টিমের নাম <span style={{ color: '#ff5722' }}>*</span>
            </label>
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              placeholder="আপনার টিমের নাম লিখুন"
              required
              style={{
                width: '100%',
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(100,80,255,0.3)',
                borderRadius: '12px',
                padding: '12px 16px',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
              }}
              onFocus={e => e.currentTarget.style.borderColor = '#ff9800'}
              onBlur={e => e.currentTarget.style.borderColor = 'rgba(100,80,255,0.3)'}
            />
          </div>

          {/* PLAYER 1 */}
          <div className="player-card">
            <div className="player-title">
              <span>👤</span> খেলোয়াড় ১ <span style={{ color: '#ff5722', fontSize: '11px' }}>(আবশ্যক)</span>
            </div>
            
            {/* Player 1 Name */}
            <div className="input-group" style={{ marginBottom: '16px' }}>
              <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: 600, marginBottom: '6px', display: 'block' }}>
                খেলোয়াড়ের নাম <span style={{ color: '#ff5722' }}>*</span>
              </label>
              <input
                type="text"
                name="player1Name"
                value={formData.player1Name}
                onChange={handleChange}
                placeholder="খেলোয়াড় ১ এর পুরো নাম লিখুন"
                required
                style={{
                  width: '100%',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(100,80,255,0.3)',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#ff9800'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(100,80,255,0.3)'}
              />
            </div>

            {/* Player 1 In-Game ID */}
            <div className="input-group">
              <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: 600, marginBottom: '6px', display: 'block' }}>
                ইন-গেম আইডি <span style={{ color: '#ff5722' }}>*</span>
              </label>
              <input
                type="text"
                name="player1GameId"
                value={formData.player1GameId}
                onChange={handleChange}
                placeholder="খেলোয়াড় ১ এর ইন-গেম আইডি লিখুন"
                required
                style={{
                  width: '100%',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(100,80,255,0.3)',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                }}
                onFocus={e => e.currentTarget.style.borderColor = '#ff9800'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(100,80,255,0.3)'}
              />
            </div>
          </div>

          {/* PLAYER 2 (For Team Tournaments) */}
          {(tournament.teamSize === 'DUO' || tournament.teamSize === '2 VS 2' || tournament.teamSize === 'SQUAD' || tournament.teamSize === '4 VS 4') && (
            <div className="player-card">
              <div className="player-title">
                <span>👥</span> খেলোয়াড় ২ <span style={{ color: '#ff9800', fontSize: '11px' }}>(টিমের জন্য আবশ্যক)</span>
              </div>
              
              {/* Player 2 Name */}
              <div className="input-group" style={{ marginBottom: '16px' }}>
                <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: 600, marginBottom: '6px', display: 'block' }}>
                  খেলোয়াড়ের নাম <span style={{ color: '#ff5722' }}>*</span>
                </label>
                <input
                  type="text"
                  name="player2Name"
                  value={formData.player2Name}
                  onChange={handleChange}
                  placeholder="খেলোয়াড় ২ এর পুরো নাম লিখুন"
                  required={tournament.teamSize !== 'SOLO'}
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(100,80,255,0.3)',
                    borderRadius: '12px',
                    padding: '10px 14px',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = '#ff9800'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(100,80,255,0.3)'}
                />
              </div>

              {/* Player 2 In-Game ID */}
              <div className="input-group">
                <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', fontWeight: 600, marginBottom: '6px', display: 'block' }}>
                  ইন-গেম আইডি <span style={{ color: '#ff5722' }}>*</span>
                </label>
                <input
                  type="text"
                  name="player2GameId"
                  value={formData.player2GameId}
                  onChange={handleChange}
                  placeholder="খেলোয়াড় ২ এর ইন-গেম আইডি লিখুন"
                  required={tournament.teamSize !== 'SOLO'}
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(100,80,255,0.3)',
                    borderRadius: '12px',
                    padding: '10px 14px',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = '#ff9800'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(100,80,255,0.3)'}
                />
              </div>
            </div>
          )}

          {/* WhatsApp Number */}
          <div className="input-group" style={{ marginBottom: '24px' }}>
            <label style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600, marginBottom: '8px', display: 'block' }}>
              হোয়াটসঅ্যাপ নম্বর <span style={{ color: '#ff5722' }}>*</span>
            </label>
            <input
              type="tel"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="আপনার হোয়াটসঅ্যাপ নম্বর লিখুন (যেমন: ০১XXXXXXXXX)"
              required
              style={{
                width: '100%',
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(100,80,255,0.3)',
                borderRadius: '12px',
                padding: '12px 16px',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
              }}
              onFocus={e => e.currentTarget.style.borderColor = '#ff9800'}
              onBlur={e => e.currentTarget.style.borderColor = 'rgba(100,80,255,0.3)'}
            />
          </div>

          {/* bKash Fields (Only for Paid Tournaments) */}
          {isPaidTournament && (
            <>
              <div className="input-group" style={{ marginBottom: '20px' }}>
                <label style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600, marginBottom: '8px', display: 'block' }}>
                  আপনার বিকাশ নম্বর <span style={{ color: '#ff5722' }}>*</span>
                </label>
                <input
                  type="tel"
                  name="bKashNumber"
                  value={formData.bKashNumber}
                  onChange={handleChange}
                  placeholder="আপনার বিকাশ নম্বর লিখুন"
                  required
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(100,80,255,0.3)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = '#ff9800'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(100,80,255,0.3)'}
                />
              </div>

              <div className="input-group" style={{ marginBottom: '24px' }}>
                <label style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 600, marginBottom: '8px', display: 'block' }}>
                  বিকাশ ট্রানজ্যাকশন আইডি <span style={{ color: '#ff5722' }}>*</span>
                </label>
                <input
                  type="text"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleChange}
                  placeholder="ট্রানজ্যাকশন আইডি লিখুন (যেমন: 8YH3K9P2)"
                  required
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(100,80,255,0.3)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = '#ff9800'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(100,80,255,0.3)'}
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              background: isSubmitting ? 'linear-gradient(90deg, #666, #555)' : 'linear-gradient(90deg, #ff9800, #ff5722)',
              color: '#fff',
              fontWeight: 800,
              fontSize: '16px',
              border: 'none',
              borderRadius: '30px',
              padding: '14px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              letterSpacing: '1px',
              boxShadow: isSubmitting ? 'none' : '0 0 20px rgba(255,87,34,0.4)',
              transition: 'transform 0.15s, box-shadow 0.15s',
              opacity: isSubmitting ? 0.7 : 1,
            }}
            onMouseEnter={e => {
              if (!isSubmitting) {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255,87,34,0.6)';
              }
            }}
            onMouseLeave={e => {
              if (!isSubmitting) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,87,34,0.4)';
              }
            }}
          >
            {isSubmitting ? 'রেজিস্ট্রেশন হচ্ছে...' : 'রেজিস্ট্রেশন নিশ্চিত করুন'}
          </button>

          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate('/tournaments')}
            style={{
              width: '100%',
              background: 'transparent',
              border: '2px solid rgba(100,80,255,0.4)',
              color: 'rgba(220,220,255,0.8)',
              fontWeight: 600,
              fontSize: '14px',
              borderRadius: '30px',
              padding: '12px',
              cursor: 'pointer',
              marginTop: '16px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#a855f7';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(100,80,255,0.4)';
              e.currentTarget.style.color = 'rgba(220,220,255,0.8)';
            }}
          >
            ← টুর্নামেন্টে ফিরুন
          </button>
        </form>
      </div>
    </div>
  );
};

export default TournamentRegistration;