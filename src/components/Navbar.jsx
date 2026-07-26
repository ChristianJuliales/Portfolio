import { Terminal, Mail } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'resume', label: 'Resume' },
  ];

  return (
    <header className="header-wrapper">
      <div className="container navbar-container">
        <div className="logo" onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }}>
          <Terminal size={24} className="text-primary" style={{ color: 'var(--color-primary)' }} />
          <span>Portfolio</span>
        </div>
        
        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <span
                  className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.label}
                </span>
              </li>
            ))}
            <li>
              <button 
                className="btn btn-outline" 
                style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                onClick={() => setActiveTab('resume')}
              >
                <Mail size={14} />
                Hire Me
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
