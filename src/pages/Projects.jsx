import React, { useState, useEffect } from 'react';
import { Search, ExternalLink, Code2, X, CheckCircle } from 'lucide-react';
import { api } from '../utils/api';

const Github = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const seedProjects = [
  {
    _id: 'seed-1',
    title: 'Payroll System',
    description: 'The Payroll System is a comprehensive enterprise solution developed in Visual Basic and powered by a secure local database. It is designed to handle complex salary structures, manage official employee records, compute net pays, and reduce human accounting errors significantly.',
    technologies: ['Visual Basic', 'Database', 'Desktop', 'MS Access'],
    imageUrl: '/Payroll.png',
    liveLink: '',
    githubLink: ''
  },
  {
    _id: 'seed-2',
    title: 'Scientific Calculator',
    description: 'A mathematical desktop application that handles standard arithmetic and complex scientific evaluations (trigonometry, logarithms, exponents, parentheses parsing) with a highly responsive, modern interface.',
    technologies: ['Java', 'Object Oriented', 'Desktop', 'UI Development'],
    imageUrl: '/Calculator.png',
    liveLink: '',
    githubLink: ''
  },
  {
    _id: 'seed-3',
    title: 'Philippine Heritage (Lakbay-Wika)',
    description: 'An educational platform focused on Philippine cultural heritage and linguistic diversity. The project aims to bridge language barriers across regions through translation tools, audio-visual pronunciation guidelines, and interactive historical maps.',
    technologies: ['HTML/CSS', 'Web Platform', 'JavaScript', 'Responsive Web'],
    imageUrl: '/Lakbay-Wika.png',
    liveLink: '',
    githubLink: ''
  }
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getProjects()
      .then((data) => {
        if (data && data.length > 0) {
          setProjectsData(data);
        } else {
          setProjectsData(seedProjects);
        }
      })
      .catch((err) => {
        console.error('Failed to load projects from DB, falling back to local files', err);
        setProjectsData(seedProjects);
      })
      .finally(() => setLoading(false));
  }, []);

  const categories = ['All', 'Visual Basic', 'Java', 'HTML/CSS'];

  const filteredProjects = projectsData.filter((project) => {
    // Check search matches
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Check category filter matches
    let matchesCategory = false;
    if (selectedCategory === 'All') {
      matchesCategory = true;
    } else if (selectedCategory === 'Visual Basic') {
      matchesCategory = project.technologies.some(t => t.toLowerCase().includes('visual basic') || t.toLowerCase() === 'vb');
    } else if (selectedCategory === 'Java') {
      matchesCategory = project.technologies.some(t => t.toLowerCase() === 'java');
    } else if (selectedCategory === 'HTML/CSS') {
      matchesCategory = project.technologies.some(t => t.toLowerCase().includes('html') || t.toLowerCase().includes('css') || t.toLowerCase().includes('web'));
    }
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      <header style={{ marginBottom: '48px' }}>
        <h1 className="section-title">
          <Code2 size={32} style={{ color: 'var(--color-primary)' }} />
          Projects Showcase
        </h1>
        <p className="section-subtitle">
          A gallery of software products, desktop utilities, and web platforms I have designed and coded.
        </p>
      </header>

      {/* Search and Filters */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '40px',
        background: 'rgba(30, 41, 59, 0.25)',
        border: '1px solid var(--color-border)',
        borderRadius: '16px',
        padding: '16px 24px'
      }}>
        {/* Search Input */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          flex: '1 1 300px'
        }}>
          <Search size={18} style={{
            position: 'absolute',
            left: '16px',
            color: 'var(--color-text-muted)'
          }} />
          <input 
            type="text" 
            placeholder="Search by title, technology..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '9999px',
              padding: '12px 16px 12px 48px',
              fontSize: '0.95rem',
              color: 'var(--color-text-main)',
              transition: 'var(--transition-fast)'
            }}
          />
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                backgroundColor: selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-surface)',
                color: selectedCategory === cat ? 'white' : 'var(--color-text-muted)',
                border: selectedCategory === cat ? 'none' : '1px solid var(--color-border)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
          Retrieving projects database...
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="grid-responsive">
          {filteredProjects.map((project) => (
            <div 
              key={project._id} 
              className="card-glass"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                overflow: 'hidden'
              }}
            >
              <div style={{ height: '220px', width: '100%', overflow: 'hidden', borderBottom: '1px solid var(--color-border)', position: 'relative' }}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }} 
                />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {project.technologies.slice(0, 3).map(tag => (
                    <span key={tag} className="badge badge-secondary" style={{ fontSize: '0.7rem' }}>{tag}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '10px' }}>{project.title}</h3>
                <p style={{ 
                  color: 'var(--color-text-muted)', 
                  fontSize: '0.95rem', 
                  marginBottom: '24px', 
                  flexGrow: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {project.description}
                </p>
                
                <button 
                  onClick={() => setActiveProject(project)}
                  className="btn btn-secondary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%'
                  }}
                >
                  View Case Study
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          border: '1px dashed var(--color-border)',
          borderRadius: '16px',
          color: 'var(--color-text-muted)'
        }}>
          No projects found matching your query.
        </div>
      )}

      {/* Case Study Modal */}
      {activeProject && (
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
        onClick={() => setActiveProject(null)}
        >
          <div style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '700px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '32px',
            position: 'relative',
            boxShadow: 'var(--glow-shadow)',
            animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveProject(null)}
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

            {/* Modal Image */}
            <div style={{
              width: '100%',
              height: '240px',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '24px',
              border: '1px solid var(--color-border)'
            }}>
              <img 
                src={activeProject.imageUrl} 
                alt={activeProject.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>

            {/* Title & Technologies */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              {activeProject.technologies.map(tag => (
                <span key={tag} className="badge badge-primary">{tag}</span>
              ))}
            </div>
            
            <h2 style={{ fontSize: '2.05rem', fontWeight: 850, marginBottom: '16px' }}>{activeProject.title}</h2>
            
            {/* Description */}
            <p style={{
              color: 'var(--color-text-secondary)',
              fontSize: '1.05rem',
              lineHeight: '1.7',
              marginBottom: '32px'
            }}>
              {activeProject.description}
            </p>

            {/* Live and Github links */}
            {(activeProject.liveLink || activeProject.githubLink) && (
              <div style={{
                display: 'flex',
                gap: '12px',
                paddingTop: '20px',
                borderTop: '1px solid var(--color-border)',
                marginTop: '20px'
              }}>
                {activeProject.liveLink && (
                  <a 
                    href={activeProject.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                    style={{ fontSize: '0.85rem', padding: '10px 20px' }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {activeProject.githubLink && (
                  <a 
                    href={activeProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary"
                    style={{ fontSize: '0.85rem', padding: '10px 20px' }}
                  >
                    <Github size={16} />
                    GitHub Repository
                  </a>
                )}
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
