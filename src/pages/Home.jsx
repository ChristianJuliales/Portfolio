import { 
  Coffee, 
  Terminal as CodeIcon, 
  Layout, 
  Palette, 
  FileJson, 
  ArrowRight,
  Sparkles,
  Layers,
  Mail,
  MapPin,
  ExternalLink,
  MessageSquare,
  Server as ServerIcon,
  Database as DatabaseIcon
} from 'lucide-react';

const FacebookIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function Home({ setActiveTab }) {
  const techStack = [
    { name: 'Java', desc: 'Programming', icon: Coffee, color: 'var(--color-secondary)' },
    { name: 'Visual Basic', desc: 'Development', icon: CodeIcon, color: 'var(--color-tertiary)' },
    { name: 'HTML', desc: 'Web Core', icon: Layout, color: 'var(--color-primary)' },
    { name: 'CSS', desc: 'Styling', icon: Palette, color: 'var(--color-secondary)' },
    { name: 'JavaScript', desc: 'Scripting', icon: FileJson, color: 'var(--color-tertiary)' },
    { name: 'React.js', desc: 'UI Framework', icon: Layers, color: 'var(--color-primary)' },
    { name: 'Node.js', desc: 'Backend Runtime', icon: ServerIcon, color: 'var(--color-secondary)' },
    { name: 'MongoDB', desc: 'Database', icon: DatabaseIcon, color: 'var(--color-tertiary)' },
  ];

  const featuredProjects = [
    {
      title: 'PrintSync',
      category: 'Full-Stack Development',
      platform: 'Web Platform',
      desc: 'PrintSync is a comprehensive printing shop management system that streamlines order processing, tracks job statuses, and manages customer information. The platform features an intuitive admin dashboard for order management, real-time status updates, and secure user authentication to optimize printing shop operations.',
      img: '/PS.png',
    }
  ];

  const contactDetails = [
    {
      platform: 'Email',
      value: 'dave.juliales@gmail.com',
      subtitle: 'Send a direct message',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=dave.juliales@gmail.com',
      icon: Mail,
      color: '#ea4335'
    },
    {
      platform: 'LinkedIn',
      value: 'Christian Dave Juliales',
      subtitle: 'Connect professionally',
      url: 'https://www.linkedin.com/in/christian-dave-juliales-1b5b7a302/',
      icon: LinkedinIcon,
      color: '#0a66c2'
    },
    {
      platform: 'GitHub',
      value: 'christianjuliales',
      subtitle: 'View code & projects',
      url: 'https://github.com/christianjuliales',
      icon: GithubIcon,
      color: '#a855f7'
    },
    {
      platform: 'Facebook',
      value: 'Christian Dave Juliales',
      subtitle: '@davejuliales.12',
      url: 'https://www.facebook.com/davejuliales.12',
      icon: FacebookIcon,
      color: '#1877f2'
    },
    {
      platform: 'Instagram',
      value: '@c.juliales',
      subtitle: 'Follow my updates',
      url: 'https://www.instagram.com/c.juliales/',
      icon: InstagramIcon,
      color: '#e4405f'
    },
    {
      platform: 'Location & Info',
      value: 'Quezon City, Philippines',
      subtitle: '+63 9763198643',
      url: null,
      icon: MapPin,
      color: '#10b981'
    }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '80px 0 100px 0',
        background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
        textAlign: 'center',
        borderBottom: '1px solid var(--color-border)'
      }}>
        {/* Banner container */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '240px',
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.2), rgba(9, 13, 22, 1)), url("/Banner.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.45,
          zIndex: -1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1, marginTop: '80px' }}>
          {/* Circular avatar with glowing pulse frame */}
          <div style={{
            position: 'relative',
            width: '180px',
            height: '180px',
            margin: '0 auto 32px auto',
            borderRadius: '50%',
            padding: '4px',
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
            boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
          }}>
            <img 
              src="/Christian Dave Juliales.jpg" 
              alt="Christian Dave N. Juliales" 
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid var(--color-bg)'
              }} 
            />
          </div>

          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 900,
            marginBottom: '16px',
            letterSpacing: '-0.03em'
          }}>
            Christian Dave N. Juliales
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: 'var(--color-secondary)',
            fontWeight: 600,
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '40px'
          }}>
            Bachelor of Science in Information Technology Student
          </p>

        </div>
      </section>

      {/* About Me Section */}
      <section className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>
              About Me
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginTop: '16px' }}>
              Hello! I am Christian Dave Juliales, I am currently taking Bachelor of Science in Information Technology at Quezon City University, and here is my E-Portfolio.
            </p>
          </div>

          <div style={{
            background: 'rgba(30, 41, 59, 0.4)',
            padding: '20px 24px',
            fontStyle: 'italic',
            color: 'var(--color-text-secondary)',
            fontSize: '1.05rem',
            lineHeight: '1.6'
          }}>
          Solution-driven Full-Stack Developer and aspiring Data Scientist with experience designing and developing enterprise web systems. Skilled in front-end and back-end development, project management, and team leadership. Certified in Computer Systems Servicing NC II, combining software development expertise with strong technical support and hardware troubleshooting skills to deliver scalable, data-driven solutions.
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="container">
        <div>
          <h2 className="section-title" >
            Technical Stack
          </h2>
          <p className="section-subtitle" >
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px'
        }}>
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div 
                key={tech.name} 
                className="card-glass"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '24px 16px',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(30, 41, 59, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  color: tech.color,
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>{tech.name}</h3>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.75rem', 
                  color: 'var(--color-text-muted)' 
                }}>
                  {tech.desc}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Work */}
      <section className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '40px'
        }}>
          <div>
            <h2 className="section-title">
              Featured Work
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              A selection of my recent developments, ranging from utility tools to enterprise management systems.
            </p>
          </div>
          <button 
            onClick={() => setActiveTab('projects')}
            className="btn btn-secondary" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontSize: '0.9rem',
              padding: '8px 20px',
              flexShrink: 0
            }}
          >
            All Projects
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid-responsive">
          {featuredProjects.map((project) => (
            <div 
              key={project.title} 
              className="card-glass"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                overflow: 'hidden'
              }}
            >
              <div style={{ height: '200px', width: '100%', overflow: 'hidden', borderBottom: '1px solid var(--color-border)', position: 'relative' }}>
                <img 
                  src={project.img} 
                  alt={project.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'var(--transition-smooth)'
                  }} 
                  className="project-card-image"
                />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  <span className="badge badge-primary">{project.category}</span>
                  <span className="badge badge-secondary">{project.platform}</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '10px' }}>{project.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '20px', flexGrow: 1 }}>{project.desc}</p>
                
                <button 
                  onClick={() => setActiveTab('projects')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--color-primary)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    alignSelf: 'flex-start'
                  }}
                >
                  View details
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Details Section */}
      <section id="contact-section" className="container" style={{ scrollMarginTop: '100px' }}>
        <div style={{marginBottom: '40px' }}>
          <h2 className="section-title">
            Contact Me
          </h2>
          <p className="section-subtitle" >
            Feel free to reach out through any of these platforms for inquiries, collaborations, or connections.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {contactDetails.map((item) => {
            const IconComponent = item.icon;
            const CardContent = (
              <div 
                className="card-glass"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px 24px',
                  height: '100%',
                  transition: 'var(--transition-smooth)',
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: `${item.color}18`,
                  border: `1px solid ${item.color}35`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.color,
                  flexShrink: 0
                }}>
                  <IconComponent size={22} />
                </div>
                <div style={{ flexGrow: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.platform}
                    </span>
                    {item.url && <ExternalLink size={12} style={{ color: 'var(--color-text-muted)', opacity: 0.7 }} />}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.value}
                  </h3>
                  <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );

            if (item.url) {
              return (
                <a
                  key={item.platform}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  {CardContent}
                </a>
              );
            }

            return <div key={item.platform}>{CardContent}</div>;
          })}
        </div>
      </section>
    </div>
  );
}
