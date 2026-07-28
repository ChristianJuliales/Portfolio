import { Mail } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'resume', label: 'Resume' },
  ];

  const handleContactClick = () => {
    if (activeTab !== 'home') {
      setActiveTab('home');
      setTimeout(() => {
        const elem = document.getElementById('contact-section');
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const elem = document.getElementById('contact-section');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header-wrapper">
      <div className="container navbar-container">
        <div className="logo" onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }}>
          <span>PORTFOLIO</span>
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
                onClick={handleContactClick}
              >
                <Mail size={14} />
                Contact Me
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
