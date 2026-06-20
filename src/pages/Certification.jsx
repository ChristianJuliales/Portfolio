import React, { useState, useEffect } from 'react';
import { Award, Calendar, ShieldCheck, X, CheckCircle } from 'lucide-react';
import { api } from '../utils/api';

const seedCertifications = [
  {
    _id: 'seed-cert-1',
    title: 'Java Foundations Certified Associate',
    issuer: 'Oracle Academy',
    dateIssued: '2023',
    imageUrl: '/favicon.svg',
    certificateLink: ''
  },
  {
    _id: 'seed-cert-2',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    dateIssued: '2023',
    imageUrl: '/favicon.svg',
    certificateLink: ''
  },
  {
    _id: 'seed-cert-3',
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    dateIssued: '2024',
    imageUrl: '/favicon.svg',
    certificateLink: ''
  },
  {
    _id: 'seed-cert-4',
    title: 'TVL - Programming Academic Excellence',
    issuer: 'San Francisco High School',
    dateIssued: '2023',
    imageUrl: '/favicon.svg',
    certificateLink: ''
  }
];

export default function Certification() {
  const [activeCert, setActiveCert] = useState(null);
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getCertificates()
      .then((data) => {
        if (data && data.length > 0) {
          setCertifications(data);
        } else {
          setCertifications(seedCertifications);
        }
      })
      .catch((err) => {
        console.error('Failed to load certificates from DB, using defaults', err);
        setCertifications(seedCertifications);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      <header style={{ marginBottom: '48px' }}>
        <h1 className="section-title">
          <Award size={32} style={{ color: 'var(--color-primary)' }} />
          Certifications & Awards
        </h1>
        <p className="section-subtitle">
          Verified academic credentials, programming certifications, and technical badges earned during my development studies.
        </p>
      </header>

      {/* Grid of Certifications */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
          Retrieving certificates database...
        </div>
      ) : (
        <div className="grid-responsive">
          {certifications.map((cert) => (
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
                  <span className="badge badge-primary">Credential</span>
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
      )}

      {/* Certificate Viewer Modal */}
      {activeCert && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
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
            borderRadius: '24px',
            width: '100%',
            maxWidth: '800px',
            padding: '40px',
            position: 'relative',
            boxShadow: 'var(--glow-shadow)',
            animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveCert(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--color-border)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              <X size={18} />
            </button>

            {/* Certificate Layout Mockup */}
            <div style={{
              border: '2px dashed rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
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

            {/* Verification details bottom */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '24px',
              paddingTop: '20px',
              borderTop: '1px solid var(--color-border)',
              flexWrap: 'wrap',
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
        </div>
      )}
    </div>
  );
}
