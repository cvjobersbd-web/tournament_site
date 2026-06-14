import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Notices = () => {
  const [selectedNotice, setSelectedNotice] = useState(null);

  // All notices data
  const allNotices = [
    {
      id: 1,
      title: 'নতুন ফ্রি ফায়ার টুর্নামেন্ট শুরু!',
      date: '২৫ এপ্রিল, ২০২৬',
      time: 'সকাল ১০:০০ টা',
      category: 'Tournament',
      priority: 'high',
      fullContent: `
        <p>আমরা আনন্দের সাথে ঘোষণা করছি যে, ফ্রি ফায়ার ব্যটল রয়্যাল টুর্নামেন্ট শুরু হতে যাচ্ছে!</p>
        <br/>
        <p><strong>টুর্নামেন্ট বিস্তারিত:</strong></p>
        <ul>
          <li>তারিখ: ২৫ এপ্রিল, ২০২৬</li>
          <li>সময়: রাত ৮ টা</li>
          <li>টিম সাইজ: ২ VS ২</li>
          <li>এন্ট্রি ফি: ২৫ ক্রেডিট</li>
          <li>পুরস্কার: ১২৫০ টাকা</li>
        </ul>
        <br/>
        <p>রেজিস্ট্রেশন করতে এখনই সাইন আপ করুন!</p>
      `,
      excerpt: 'ফ্রি ফায়ার ব্যাটল রয়্যাল টুর্নামেন্ট শুরু হতে যাচ্ছে। রেজিস্ট্রেশন এখন খোলা আছে।',
    },
    {
      id: 2,
      title: 'পেমেন্ট সিস্টেম আপডেট',
      date: '২৪ এপ্রিল, ২০২৬',
      time: 'বিকাল ৩:৩০ টা',
      category: 'Update',
      priority: 'medium',
      fullContent: `
        <p>আমাদের পেমেন্ট সিস্টেম আপগ্রেড করা হয়েছে। এখন থেকে আপনি আরও সহজে পেমেন্ট করতে পারবেন।</p>
        <br/>
        <p><strong>নতুন সুবিধা:</strong></p>
        <ul>
          <li>বিকাশ মার্চেন্ট পেমেন্ট</li>
          <li>নগদ পেমেন্ট সাপোর্ট</li>
          <li>রকেট পেমেন্ট আসছে খুব শীঘ্রই</li>
          <li>স্বয়ংক্রিয় ট্রানজ্যাকশন ভেরিফিকেশন</li>
        </ul>
        <br/>
        <p>যেকোনো সমস্যায় আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।</p>
      `,
      excerpt: 'পেমেন্ট সিস্টেম আপগ্রেড করা হয়েছে। এখন বিকাশ, নগদ সহ আরও সহজ পেমেন্ট।',
    },
    {
      id: 3,
      title: 'সাপ্তাহিক বিজয়ী ঘোষণা',
      date: '২৩ এপ্রিল, ২০২৬',
      time: 'রাত ১০:০০ টা',
      category: 'Winner',
      priority: 'high',
      fullContent: `
        <p>গত সপ্তাহের ফ্রি ফায়ার ক্ল্যাশ স্কোয়াড টুর্নামেন্টের বিজয়ীরা হলেন:</p>
        <br/>
        <p><strong>১ম স্থান:</strong> Team Phoenix - ৳৫,০০০</p>
        <p><strong>২য় স্থান:</strong> Team Thunder - ৳৩,০০০</p>
        <p><strong>৩য় স্থান:</strong> Team Falcon - ৳২,০০০</p>
        <br/>
        <p>সব বিজয়ীদের অভিনন্দন! পুরস্কার ৩-৫ কার্যদিবসের মধ্যে প্রেরণ করা হবে।</p>
      `,
      excerpt: 'গত সপ্তাহের টুর্নামেন্টের বিজয়ীদের তালিকা প্রকাশিত হয়েছে।',
    },
    {
      id: 4,
      title: 'ফ্রি এন্ট্রি টুর্নামেন্টের ঘোষণা',
      date: '২২ এপ্রিল, ২০২৬',
      time: 'সকাল ৯:০০ টা',
      category: 'Tournament',
      priority: 'high',
      fullContent: `
        <p>সকল খেলোয়াড়দের জন্য বিশেষ উপহার! ফ্রি এন্ট্রি টুর্নামেন্ট শুরু হচ্ছে।</p>
        <br/>
        <p><strong>টুর্নামেন্ট বিস্তারিত:</strong></p>
        <ul>
          <li>গেম: ফ্রি ফায়ার</li>
          <li>তারিখ: ৩০ এপ্রিল, ২০২৬</li>
          <li>এন্ট্রি ফি: ফ্রি!</li>
          <li>পুরস্কার: ৫০০ টাকা</li>
          <li>সর্বোচ্চ দল: ৩২টি</li>
        </ul>
        <br/>
        <p>আগে আসলে আগে পাবেন নীতি অনুযায়ী রেজিস্ট্রেশন করুন।</p>
      `,
      excerpt: 'সবাইকে উপহার! ফ্রি এন্ট্রি টুর্নামেন্ট শুরু হচ্ছে। সীমিত আসন!',
    },
    {
      id: 5,
      title: 'মেইন্টেন্যান্স নোটিশ',
      date: '২০ এপ্রিল, ২০২৬',
      time: 'রাত ২:০০ টা',
      category: 'Maintenance',
      priority: 'medium',
      fullContent: `
        <p>আমাদের সার্ভারের নিয়মিত আপডেটের জন্য মেইন্টেন্যান্স করা হবে।</p>
        <br/>
        <p><strong>সময়:</strong> ২৫ এপ্রিল, রাত ২:০০ টা থেকে সকাল ৬:০০ টা পর্যন্ত</p>
        <p><strong>প্রভাবিত সার্ভিস:</strong> টুর্নামেন্ট রেজিস্ট্রেশন, পেমেন্ট সিস্টেম</p>
        <br/>
        <p>এই সময়ে আপনারা অস্থায়ীভাবে সাইট ব্যবহার করতে সমস্যা হতে পারে। অসুবিধার জন্য দুঃখিত।</p>
      `,
      excerpt: 'সার্ভার মেইন্টেন্যান্সের জন্য ২৫ এপ্রিল রাত ২টা থেকে সকাল ৬টা পর্যন্ত সাইট বন্ধ থাকবে।',
    },
    {
      id: 6,
      title: 'মোবাইল অ্যাপ শীঘ্রই আসছে!',
      date: '১৮ এপ্রিল, ২০২৬',
      time: 'বিকাল ৫:০০ টা',
      category: 'Announcement',
      priority: 'low',
      fullContent: `
        <p>দারুণ খবর! আমাদের মোবাইল অ্যাপ খুব শীঘ্রই লঞ্চ হতে যাচ্ছে।</p>
        <br/>
        <p><strong>অ্যাপের ফিচার:</strong></p>
        <ul>
          <li>সহজ টুর্নামেন্ট রেজিস্ট্রেশন</li>
          <li>পুশ নোটিফিকেশন</li>
          <li>লাইভ ট্র্যাকিং</li>
          <li>ইন-অ্যাপ পেমেন্ট</li>
        </ul>
        <br/>
        <p>লঞ্চের তারিখ শীঘ্রই জানানো হবে। সাথেই থাকুন!</p>
      `,
      excerpt: 'বেগাম গেমিং এর মোবাইল অ্যাপ আসছে খুব শীঘ্রই! নতুন ফিচারসহ।',
    },
    {
      id: 7,
      title: 'ই-ফুটবল টুর্নামেন্ট আসছে!',
      date: '১৫ এপ্রিল, ২০২৬',
      time: 'সকাল ১১:০০ টা',
      category: 'Tournament',
      priority: 'high',
      fullContent: `
        <p>ই-ফুটবল প্রেমীদের জন্য দারুণ খবর! আমরা ই-ফুটবল টুর্নামেন্ট আয়োজন করতে যাচ্ছি।</p>
        <br/>
        <p><strong>টুর্নামেন্টের বিস্তারিত শীঘ্রই দেওয়া হবে।</strong></p>
        <ul>
          <li>পুরস্কার: ৮০০০ টাকা পর্যন্ত</li>
          <li>অনলাইন কোয়ালিফায়ার</li>
          <li>অফলাইন ফাইনাল (ঢাকা)</li>
        </ul>
        <br/>
        <p>আপডেট পেতে নোটিফিকেশন অন করে রাখুন!</p>
      `,
      excerpt: 'ই-ফুটবল টুর্নামেন্ট আসছে! বড় পুরস্কার এবং অফলাইন ফাইনাল।',
    },
    {
      id: 8,
      title: 'গ্রাহক সেবা নম্বর পরিবর্তন',
      date: '১২ এপ্রিল, ২০২৬',
      time: 'সকাল ১০:০০ টা',
      category: 'Update',
      priority: 'medium',
      fullContent: `
        <p>আমাদের গ্রাহক সেবা নম্বর পরিবর্তন করা হয়েছে।</p>
        <br/>
        <p><strong>নতুন হটলাইন নম্বর:</strong> ০১৮৮৮-৮৮৮৮৮৮</p>
        <p><strong>সাপোর্ট সময়:</strong> সকাল ৯টা - রাত ১১টা (শুক্রবার বন্ধ)</p>
        <br/>
        <p>আপনার ফোন বুক আপডেট করে নিন।</p>
      `,
      excerpt: 'গ্রাহক সেবা নম্বর পরিবর্তন করা হয়েছে। নতুন নম্বর দেখুন।',
    },
  ];

  // Set initial selected notice
  useEffect(() => {
    if (!selectedNotice && allNotices.length > 0) {
      setSelectedNotice(allNotices[0]);
    }
  }, []);

  const getPriorityStyle = (priority) => {
    if (priority === 'high') return { bg: 'rgba(255,87,34,0.2)', border: '#ff5722', color: '#fff' };
    if (priority === 'medium') return { bg: 'rgba(255,152,0,0.15)', border: '#ff9800', color: '#fff' };
    return { bg: 'rgba(76,175,80,0.1)', border: '#4caf50', color: '#fff' };
  };

  const getCategoryBadge = (category) => {
    switch(category) {
      case 'Tournament': return { bg: '#7c3aed', label: 'টুর্নামেন্ট' };
      case 'Winner': return { bg: '#ffd700', label: 'বিজয়ী', color: '#000' };
      case 'Update': return { bg: '#00e5ff', label: 'আপডেট', color: '#000' };
      case 'Maintenance': return { bg: '#ff9800', label: 'মেইন্টেন্যান্স' };
      case 'Announcement': return { bg: '#e91e63', label: 'ঘোষণা' };
      default: return { bg: '#666', label: 'নোটিস' };
    }
  };

  const getPriorityText = (priority) => {
    if (priority === 'high') return 'জরুরি';
    if (priority === 'medium') return 'গুরুত্বপূর্ণ';
    return 'সাধারণ';
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 60% 30%, #1a0a4a 0%, #0d0630 40%, #060318 100%)',
      fontFamily: "'Segoe UI', 'SolaimanLipi', sans-serif",
      paddingBottom: '60px',
    }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .notice-item {
          animation: fadeIn 0.3s ease forwards;
        }
        
        .selected-notice {
          animation: fadeIn 0.4s ease-out;
        }
        
        @media (max-width: 768px) {
          .notices-container {
            flex-direction: column !important;
          }
          .sidebar-notices {
            width: 100% !important;
            margin-top: 24px !important;
          }
          .main-notice {
            width: 100% !important;
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

      {/* Header */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        padding: '80px 20px 40px',
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
          সকল নোটিশ
        </h1>
        <p style={{
          color: '#fff',
          fontSize: '16px',
          marginTop: '16px',
        }}>
          সর্বশেষ আপডেট এবং গুরুত্বপূর্ণ ঘোষণা
        </p>
      </div>

      {/* Main Content - 2 Column Layout */}
      <div className="notices-container" style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        gap: '32px',
        alignItems: 'flex-start',
      }}>
        
        {/* LEFT SIDE - Main Selected Notice */}
        <div className="main-notice" style={{
          flex: 2,
          background: 'linear-gradient(135deg, rgba(20,12,60,0.9), rgba(12,6,40,0.95))',
          borderRadius: '28px',
          border: '1px solid rgba(100,80,255,0.3)',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        }}>
          {selectedNotice && (
            <div className="selected-notice">
              {/* Notice Header Area */}
              <div style={{
                height: '120px',
                background: `linear-gradient(135deg, ${selectedNotice.category === 'Tournament' ? '#1a0f5e' : selectedNotice.category === 'Winner' ? '#b45309' : '#2d1b69'}, #000)`,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {/* Priority Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: getPriorityStyle(selectedNotice.priority).bg,
                  border: '1px solid ' + getPriorityStyle(selectedNotice.priority).border,
                  borderRadius: '20px',
                  padding: '4px 12px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#fff',
                }}>
                  {getPriorityText(selectedNotice.priority)}
                </div>
              </div>

              {/* Notice Content */}
              <div style={{ padding: '32px' }}>
                {/* Category Badge */}
                <div style={{
                  display: 'inline-block',
                  background: getCategoryBadge(selectedNotice.category).bg,
                  color: getCategoryBadge(selectedNotice.category).color || '#fff',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 700,
                  marginBottom: '16px',
                }}>
                  {getCategoryBadge(selectedNotice.category).label}
                </div>

                {/* Title */}
                <h2 style={{
                  color: '#fff',
                  fontSize: 'clamp(22px, 4vw, 28px)',
                  fontWeight: 800,
                  margin: '0 0 12px 0',
                  lineHeight: 1.3,
                }}>
                  {selectedNotice.title}
                </h2>

                {/* Date & Time */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                  color: '#fff',
                  fontSize: '13px',
                }}>
                  <span>{selectedNotice.date}</span>
                  <span>{selectedNotice.time}</span>
                </div>

                {/* Full Content */}
                <div 
                  style={{
                    color: '#fff',
                    fontSize: '15px',
                    lineHeight: 1.8,
                  }}
                  dangerouslySetInnerHTML={{ __html: selectedNotice.fullContent }}
                />
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE - Sidebar Notice List */}
        <div className="sidebar-notices" style={{
          flex: 1,
          background: 'linear-gradient(135deg, rgba(20,12,60,0.8), rgba(12,6,40,0.9))',
          borderRadius: '24px',
          border: '1px solid rgba(100,80,255,0.25)',
          padding: '20px',
          backdropFilter: 'blur(10px)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}>
            <h3 style={{
              color: '#fff',
              fontSize: '18px',
              fontWeight: 800,
              margin: 0,
            }}>
              অন্যান্য নোটিশ
            </h3>
            <span style={{
              background: 'rgba(168,85,247,0.3)',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              color: '#fff',
            }}>
              {allNotices.length} টি
            </span>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxHeight: '600px',
            overflowY: 'auto',
            paddingRight: '8px',
          }}>
            {allNotices.map((notice) => (
              <div
                key={notice.id}
                className="notice-item"
                onClick={() => setSelectedNotice(notice)}
                style={{
                  padding: '14px',
                  borderRadius: '16px',
                  background: selectedNotice && selectedNotice.id === notice.id 
                    ? 'rgba(168,85,247,0.2)' 
                    : 'rgba(0,0,0,0.3)',
                  border: selectedNotice && selectedNotice.id === notice.id 
                    ? '1px solid rgba(168,85,247,0.5)' 
                    : '1px solid rgba(255,255,255,0.05)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (selectedNotice && selectedNotice.id !== notice.id) {
                    e.currentTarget.style.background = 'rgba(168,85,247,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(168,85,247,0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedNotice && selectedNotice.id !== notice.id) {
                    e.currentTarget.style.background = 'rgba(0,0,0,0.3)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  }
                }}
              >
                {/* Content */}
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '6px',
                  }}>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#fff',
                    }}>
                      {notice.category}
                    </span>
                    <span style={{
                      fontSize: '10px',
                      color: '#fff',
                    }}>
                      {notice.date}
                    </span>
                  </div>
                  <h4 style={{
                    color: selectedNotice && selectedNotice.id === notice.id ? '#ff9800' : '#fff',
                    fontSize: '14px',
                    fontWeight: 700,
                    margin: '0 0 6px 0',
                    lineHeight: 1.4,
                  }}>
                    {notice.title.length > 40 ? notice.title.substring(0, 40) + '...' : notice.title}
                  </h4>
                  <p style={{
                    color: '#fff',
                    fontSize: '11px',
                    margin: 0,
                    lineHeight: 1.4,
                  }}>
                    {notice.excerpt.length > 60 ? notice.excerpt.substring(0, 60) + '...' : notice.excerpt}
                  </p>
                </div>

                {/* Arrow indicator */}
                {selectedNotice && selectedNotice.id === notice.id && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginTop: '8px',
                    color: '#ff9800',
                    fontSize: '12px',
                  }}>
                    বিস্তারিত দেখুন →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        marginTop: '50px',
      }}>
        <Link to="/">
          <button style={{
            background: 'transparent',
            border: '2px solid rgba(168,85,247,0.5)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '14px',
            borderRadius: '30px',
            padding: '12px 32px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(168,85,247,0.15)';
            e.currentTarget.style.borderColor = '#a855f7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)';
          }}>
            হোম পেইজে ফিরুন
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Notices;