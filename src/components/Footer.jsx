import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

const Facebook = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer({ setActiveTab }) {
  const currentYear = new Date().getFullYear();
  const [secretClicks, setSecretClicks] = useState(0);

  useEffect(() => {
    if (secretClicks > 0) {
      const timer = setTimeout(() => setSecretClicks(0), 2000);
      return () => clearTimeout(timer);
    }
  }, [secretClicks]);

  const handleSecretClick = () => {
    setSecretClicks(prev => {
      const next = prev + 1;
      if (next >= 5) {
        setActiveTab('admin-login');
        return 0;
      }
      return next;
    });
  };
  
  return (
    <footer className="footer-wrapper">
      <div className="container footer-content">
        <div className="footer-copyright">
          <p style={{ fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '4px' }}>CDNJ Portfolio</p>
          <p onClick={handleSecretClick}>
            © {currentYear} Christian Dave N. Juliales. All Rights Reserved.
          </p>
        </div>
        
        <div className="footer-socials">
          <a href="https://www.facebook.com/davejuliales.12" target="_blank" rel="noopener noreferrer" className="social-link">
            <Facebook size={18} />
            <span>Facebook</span>
          </a>
          <a href="https://www.instagram.com/davejuliales/" target="_blank" rel="noopener noreferrer" className="social-link">
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/christian-dave-juliales-1b5b7a302/" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:dave.juliales@gmail.com" className="social-link">
            <Mail size={18} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
