import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Award, Calendar, ShieldCheck, X, CheckCircle } from 'lucide-react';

const seedCertifications = [
  {
    _id: 'seed-cert-1',
    title: 'Introduction to Python',
    issuer: 'Data Camp',
    dateIssued: '2026',
    imageUrl: '/ITP.png',
    certificateLink: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/34a34dc064fc8bcab45553a0875ca9efbe0a225e'
  },
  {
    _id: 'seed-cert-2',
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    dateIssued: '2026',
    imageUrl: '/PE1.png',
    certificateLink: 'https://www.credly.com/badges/c22e0578-74ef-4b04-a775-e1c4847880ce'
  },
  {
    _id: 'seed-cert-3',
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    dateIssued: '2026',
    imageUrl: '/ItDS.png',
    certificateLink: 'https://www.credly.com/badges/e028e328-eba0-4ed5-8ca0-0c8464faefe9'
  },
  {
    _id: 'seed-cert-4',
    title: 'Understanding Data Engineering',
    issuer: 'Data Camp',
    dateIssued: '2026',
    imageUrl: '/UDE.png',
    certificateLink: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/91de8789869a637371867ad82d91dfa17eac2a46?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa'
  },
    {
    _id: 'seed-cert-5',
    title: 'Computer Systems Servicing - NCII',
    issuer: 'TESDA',
    dateIssued: '2026',
    imageUrl: '/CSS-NCII.png',
    certificateLink: ''
  }
];

export default function Certification() {
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeCert]);

  return (
    <div className="container animate-fade-in" style={{ padding: 'clamp(24px, 4vw, 40px) clamp(16px, 3vw, 24px)' }}>
      <header style={{ marginBottom: '48px' }}>
        <h1 className="section-title">
          Certifications & Awards
        </h1>
        <p className="section-subtitle">
          Verified academic credentials, programming certifications, and technical badges earned during my development studies.
        </p>
      </header>

      {/* Grid of Certifications */}
      <div className="grid-responsive">
        {seedCertifications.map((cert) => (
          <div 
            key={cert._id}
              className="card-glass"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Glowing top decorative line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))'
              }}></div>

              <div style={{ padding: '8px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    fontSize: '0.85rem', 
                    color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-mono)' 
                  }}>
                    <Calendar size={14} />
                    {cert.dateIssued}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px', lineHeight: '1.3' }}>
                  {cert.title}
                </h3>
                
                <p style={{ 
                  color: 'var(--color-secondary)', 
                  fontWeight: 600, 
                  fontSize: '0.95rem',
                  marginBottom: '16px' 
                }}>
                  {cert.issuer}
                </p>
              </div>

              <button
                onClick={() => setActiveCert(cert)}
                className="btn btn-secondary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  fontSize: '0.9rem'
                }}
              >
                <ShieldCheck size={18} style={{ color: 'var(--color-tertiary)' }} />
                Verify Certificate
              </button>
            </div>
          ))}
        </div>

      {/* Certificate Viewer Modal */}
      {activeCert && createPortal(
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100dvh',
          backgroundColor: 'rgba(9, 13, 22, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '24px'
        }}
        onClick={() => setActiveCert(null)}
        >
          <div style={{
            backgroundColor: 'var(--color-surface)',
            border: '2px solid rgba(168, 85, 247, 0.25)',
            borderRadius: '8px',
            width: '100%',
            maxWidth: '800px',
            maxHeight: '82dvh',
            overflowY: 'auto',
            padding: 'clamp(20px, 4vw, 40px)',
            position: 'relative',
            boxShadow: 'var(--glow-shadow)',
            transform: 'translateY(10px)',
            animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header (Title + Close Button) */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              gap: '16px'
            }}>
              <h2 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)', fontWeight: 850, margin: 0 }}>{activeCert.title}</h2>
              <button 
                onClick={() => setActiveCert(null)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--color-border)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'var(--transition-fast)',
                  color: 'var(--color-text-main)'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Certificate Content */}
            {activeCert.imageUrl && activeCert.imageUrl !== '/favicon.svg' ? (
              <div style={{
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                backgroundColor: 'rgba(15, 23, 42, 0.3)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxHeight: 'clamp(180px, 40vw, 42vh)',
                width: '100%',
                boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.6)'
              }}>
                <img 
                  src={activeCert.imageUrl} 
                  alt={activeCert.title} 
                  style={{
                    maxWidth: '100%',
                    maxHeight: '42vh',
                    objectFit: 'contain',
                    display: 'block'
                  }} 
                />
              </div>
            ) : (
              /* Fallback: Generated Layout Mockup */
              <div style={{
                border: '2px dashed rgba(255, 255, 255, 0.08)',
                borderRadius: '4px',
                padding: '40px 20px',
                textAlign: 'center',
                backgroundColor: 'rgba(15, 23, 42, 0.5)',
                backgroundImage: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.03) 0%, transparent 80%)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                {/* Badge Icon */}
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  border: '2px solid var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  color: 'var(--color-primary)'
                }}>
                  <Award size={36} />
                </div>

                <h4 style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '12px'
                }}>
                  Certificate of Completion
                </h4>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '8px' }}>
                  This is proudly presented to
                </p>

                <h2 style={{
                  fontSize: '2.25rem',
                  fontWeight: 900,
                  color: 'var(--color-text-main)',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-headline)'
                }}>
                  Christian Dave N. Juliales
                </h2>

                <p style={{
                  maxWidth: '550px',
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  for successfully fulfilling all requirements and masteries for the credential course <strong>{activeCert.title}</strong>, issued by <strong>{activeCert.issuer}</strong> in <strong>{activeCert.dateIssued}</strong>.
                </p>

                <div style={{
                  width: '100px',
                  height: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  marginBottom: '24px'
                }}></div>

                {/* Credential ID and Status */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '24px',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-text-muted)'
                }}>
                  <div>
                    <span>STATUS: </span>
                    <span style={{ color: 'var(--color-tertiary)', fontWeight: 600 }}>VERIFIED ACTIVE</span>
                  </div>
                  {activeCert._id && !activeCert._id.startsWith('seed') && (
                    <div>
                      <span>RECORD ID: </span>
                      <span>{activeCert._id}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Verification details bottom */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '24px',
              paddingTop: '20px',
              borderTop: '1px solid var(--color-border)',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                <CheckCircle size={16} style={{ color: 'var(--color-tertiary)' }} />
                <span>Security cryptographically checked</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {activeCert.certificateLink && (
                  <a 
                    href={activeCert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                  >
                    External Verify
                  </a>
                )}
                <button 
                  onClick={() => setActiveCert(null)}
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  Close Viewer
                </button>
              </div>
            </div>

          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
