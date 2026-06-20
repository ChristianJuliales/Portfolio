import React from 'react';
import { 
  Film, 
  Coffee, 
  Terminal as CodeIcon, 
  Layout, 
  Palette, 
  FileJson, 
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  Monitor
} from 'lucide-react';

export default function Home({ setActiveTab }) {
  const techStack = [
    { name: 'CapCut', desc: 'Video Editing', icon: Film, color: 'var(--color-primary)' },
    { name: 'Java', desc: 'Programming', icon: Coffee, color: 'var(--color-secondary)' },
    { name: 'Visual Basic', desc: 'Development', icon: CodeIcon, color: 'var(--color-tertiary)' },
    { name: 'HTML', desc: 'Web Core', icon: Layout, color: 'var(--color-primary)' },
    { name: 'CSS', desc: 'Styling', icon: Palette, color: 'var(--color-secondary)' },
    { name: 'JavaScript', desc: 'Scripting', icon: FileJson, color: 'var(--color-tertiary)' },
  ];

  const featuredProjects = [
    {
      title: 'Payroll System',
      category: 'Visual Basic',
      platform: 'Database',
      desc: 'A robust system designed for automating payroll calculations and employee record management.',
      img: '/Payroll.png',
    },
    {
      title: 'Scientific Calculator',
      category: 'Java',
      platform: 'Desktop App',
      desc: 'A feature-rich desktop calculator implementing complex mathematical logic and clean UI.',
      img: '/Calculator.png',
    },
    {
      title: 'Philippine Heritage (Lakbay-Wika)',
      category: 'HTML/CSS',
      platform: 'Web Platform',
      desc: 'An immersive language translation and web experience showcasing cultural landmarks and local dialects.',
      img: '/Lakbay-Wika.png',
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
              src="/debs.jpg" 
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
            Christian Dave N. <span style={{
              background: 'linear-gradient(135deg, var(--color-primary), #d8b4fe)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Juliales</span>
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

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <button className="btn btn-primary" onClick={() => setActiveTab('projects')}>
              View My Projects
            </button>
            <button className="btn btn-secondary" onClick={() => setActiveTab('resume')}>
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="container">
        <div className="about-grid">
          {/* Left Column: Styled Isometric SVG Graphic */}
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(9, 13, 22, 0.9))',
            boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.5)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '340px'
          }}>
            <svg viewBox="0 0 200 200" width="100%" height="240px" style={{ filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.25))' }}>
              <defs>
                <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {/* Isometric grid representation */}
              <g transform="translate(100, 100) scale(1, 0.577) rotate(45)">
                {/* Back layers */}
                <rect x="-60" y="-60" width="120" height="120" fill="url(#purpleGrad)" rx="8" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
                
                {/* Circuit lines */}
                <path d="M -40 -40 L 40 40 M -40 40 L 40 -40" stroke="rgba(14, 165, 233, 0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
                
                {/* Floating cubes / servers */}
                <g transform="translate(0, 0)">
                  <rect x="-25" y="-25" width="50" height="50" fill="rgba(15, 23, 42, 0.9)" stroke="#a855f7" strokeWidth="2" rx="4" />
                  <circle cx="0" cy="0" r="8" fill="#10b981" />
                </g>
                <g transform="translate(-40, -40)">
                  <rect x="-10" y="-10" width="20" height="20" fill="rgba(15, 23, 42, 0.9)" stroke="#0ea5e9" strokeWidth="1.5" rx="2" />
                </g>
                <g transform="translate(40, 40)">
                  <rect x="-10" y="-10" width="20" height="20" fill="rgba(15, 23, 42, 0.9)" stroke="#0ea5e9" strokeWidth="1.5" rx="2" />
                </g>
              </g>
            </svg>
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--color-tertiary)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-tertiary)', display: 'inline-block' }}></span>
              #code_up_
            </div>
          </div>

          {/* Right Column: Bio + Quotes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>
                <span style={{ color: 'var(--color-primary)', marginRight: '8px' }}>—</span>
                About Me
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginTop: '16px' }}>
                Hello! I am Christian Dave Juliales, I am currently taking Bachelor of Science in Information Technology at Quezon City University, and here is my E-Portfolio.
              </p>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.4)',
              borderLeft: '4px solid var(--color-primary)',
              borderRadius: '0 12px 12px 0',
              padding: '20px 24px',
              fontStyle: 'italic',
              color: 'var(--color-text-secondary)',
              fontSize: '1.05rem',
              lineHeight: '1.6'
            }}>
              "Passionate about building scalable digital solutions and mastering the art of software architecture."
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ justifyContent: 'center' }}>
            <Layers size={28} style={{ color: 'var(--color-primary)' }} />
            Technical Stack
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 48px auto' }}>
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
              <Sparkles size={28} style={{ color: 'var(--color-secondary)' }} />
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

      {/* CTA section */}
      <section className="container">
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.6))',
          borderRadius: '24px',
          border: '1px solid var(--color-border)',
          padding: '60px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--glow-shadow)'
        }}>
          {/* Subtle light leak backgrounds */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-20%',
            width: '80%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}></div>
          
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '16px' }}>
            Interested in working together?
          </h2>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto 32px auto',
            lineHeight: '1.6'
          }}>
            I'm currently looking for new opportunities and collaborations. Whether you have a project in mind or just want to say hi, feel free to reach out.
          </p>
          <a href="mailto:dave.juliales@gmail.com" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
