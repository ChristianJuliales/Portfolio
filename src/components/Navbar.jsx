import { useState } from 'react';
import { Mail, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'resume', label: 'Resume' },
  ];

  const handleContactClick = () => {
    setMenuOpen(false);
    if (activeTab !== 'home') {
      setActiveTab('home');
      setTimeout(() => {
        const elem = document.getElementById('contact-section');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const elem = document.getElementById('contact-section');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header-wrapper">
        <div className="container navbar-container">
          {/* Logo */}
          <div className="logo" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
            <span>PORTFOLIO</span>
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <span
                    className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
              <li>
                <button
                  className="btn btn-outline"
                  style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                  onClick={handleContactClick}
                >
                  <Mail size={14} />
                  Contact Me
                </button>
              </li>
            </ul>
          </nav>

          {/* Hamburger Button (mobile only) */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`}>
        {/* Close button inside drawer */}
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--color-surface-hover)',
            border: '1px solid var(--color-border)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--color-text-main)',
          }}
          aria-label="Close menu"
        >
          <X size={18} />
        </button>


        {navItems.map((item) => (
          <span
            key={item.id}
            className={`mobile-nav-link ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </span>
        ))}

        <div className="mobile-nav-contact">
          <button
            className="btn btn-outline"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={handleContactClick}
          >
            <Mail size={16} />
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
}
