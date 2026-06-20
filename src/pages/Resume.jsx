import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  GraduationCap, 
  Code2, 
  Mail as MailIcon, 
  MapPin, 
  Calendar, 
  Download,
} from 'lucide-react';
import { api } from '../utils/api';

const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const getContactIcon = (name) => {
  switch (name.toLowerCase()) {
    case 'email':
      return MailIcon;
    case 'linkedin':
      return LinkedinIcon;
    case 'facebook':
      return FacebookIcon;
    case 'instagram':
      return InstagramIcon;
    default:
      return MailIcon;
  }
};

const getContactColor = (name) => {
  switch (name.toLowerCase()) {
    case 'email':
      return 'var(--color-primary)';
    case 'linkedin':
      return 'var(--color-secondary)';
    case 'facebook':
      return 'var(--color-tertiary)';
    case 'instagram':
      return 'var(--color-primary)';
    default:
      return 'var(--color-text-muted)';
  }
};

const seedResume = {
  education: [
    {
      role: 'Bachelor of Science in Information Technology',
      institution: 'Quezon City University',
      duration: '2023 - Present',
      desc: 'Focusing on core computing, database administration, software architecture, and modern programming languages.'
    },
    {
      role: 'TVL - Programming Specialist',
      institution: 'San Francisco High School',
      duration: '2021 - 2023',
      desc: 'Secondary TVL track specialized in software logic, covering Visual Basic syntax, object-oriented concepts, and basic scripting.'
    },
    {
      role: 'Junior High School Graduate',
      institution: 'Culiat High School',
      duration: '2017 - 2021',
      desc: 'Completed secondary basic education with focused curriculum in introductory computer applications and technology sciences.'
    }
  ],
  skillGroups: [
    {
      title: 'Programming & Logic',
      skills: [
        { name: 'Java', level: 'Intermediate' },
        { name: 'Visual Basic', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Basic' },
        { name: 'HTML5', level: 'Advanced' },
        { name: 'CSS3', level: 'Advanced' }
      ]
    },
    {
      title: 'Creative & Multimedia',
      skills: [
        { name: 'Video Editing', level: 'Advanced' },
        { name: 'CapCut Studio', level: 'Advanced' },
        { name: 'Media Content Creation', level: 'Intermediate' }
      ]
    }
  ],
  contacts: [
    { name: 'Email', value: 'dave.juliales@gmail.com', url: 'mailto:dave.juliales@gmail.com' },
    { name: 'LinkedIn', value: 'Christian Dave Juliales', url: 'https://www.linkedin.com/in/christian-dave-juliales-1b5b7a302/' },
    { name: 'Facebook', value: '@davejuliales.12', url: 'https://www.facebook.com/davejuliales.12' },
    { name: 'Instagram', value: '@davejuliales', url: 'https://www.instagram.com/davejuliales/' }
  ]
};

export default function Resume() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getResume()
      .then((data) => {
        if (data && (data.education.length > 0 || data.skillGroups.length > 0)) {
          setResumeData(data);
        } else {
          setResumeData(seedResume);
        }
      })
      .catch((err) => {
        console.error('Failed to load resume database config, falling back to local files', err);
        setResumeData(seedResume);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDownload = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="container flex-center" style={{ minHeight: '60vh' }}>
        <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>Loading resume timeline...</p>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      {/* Resume Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px',
        marginBottom: '48px',
        paddingBottom: '24px',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div>
          <h1 className="section-title" style={{ margin: 0 }}>
            <FileText size={32} style={{ color: 'var(--color-primary)' }} />
            Curriculum Vitae
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginTop: '6px' }}>
            Professional education pathway, developer skillset, and direct contact directories.
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleDownload}>
          <Download size={18} />
          Print / PDF Resume
        </button>
      </div>

      <div className="resume-grid">
        {/* Left Column: Education Timeline */}
        <div>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <GraduationCap size={24} style={{ color: 'var(--color-secondary)' }} />
            Education
          </h2>

          <div style={{
            position: 'relative',
            paddingLeft: '24px',
            borderLeft: '2px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                {/* Bullet node on timeline */}
                <div style={{
                  position: 'absolute',
                  left: '-31px',
                  top: '6px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-bg)',
                  border: '3px solid var(--color-primary)',
                  boxShadow: '0 0 10px rgba(168, 85, 247, 0.4)'
                }}></div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--color-secondary)',
                  marginBottom: '8px'
                }}>
                  <Calendar size={12} />
                  <span>{edu.duration}</span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '4px' }}>{edu.role}</h3>
                <p style={{ 
                  color: 'var(--color-text-secondary)', 
                  fontWeight: 500, 
                  fontSize: '0.95rem',
                  marginBottom: '8px' 
                }}>
                  {edu.institution}
                </p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {edu.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Skills & Contacts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Skills Section */}
          <div className="card-glass">
            <h2 style={{
              fontSize: '1.3rem',
              fontWeight: 800,
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Code2 size={20} style={{ color: 'var(--color-tertiary)' }} />
              Developer Skills
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {resumeData.skillGroups.map((group, idx) => (
                <div key={idx}>
                  <h3 style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.8rem', 
                    color: 'var(--color-text-secondary)', 
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '12px'
                  }}>
                    {group.title}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {group.skills.map((skill) => (
                      <div 
                        key={skill.name} 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(30, 41, 59, 0.4)',
                          border: '1px solid var(--color-border)',
                          fontSize: '0.9rem'
                        }}
                      >
                        <span style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>{skill.name}</span>
                        <span style={{ 
                          fontSize: '0.75rem', 
                          color: skill.level === 'Advanced' ? 'var(--color-tertiary)' : 'var(--color-text-muted)',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          ({skill.level})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="card-glass">
            <h2 style={{
              fontSize: '1.3rem',
              fontWeight: 800,
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <MapPin size={20} style={{ color: 'var(--color-primary)' }} />
              Contact Directory
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {resumeData.contacts.map((contact) => {
                const IconComponent = getContactIcon(contact.name);
                const color = getContactColor(contact.name);
                return (
                  <a 
                    key={contact.name} 
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(30, 41, 59, 0.25)',
                      border: '1px solid var(--color-border)',
                      transition: 'var(--transition-smooth)'
                    }}
                    className="contact-card-link"
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(15, 23, 42, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: color
                    }}>
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                        {contact.name}
                      </p>
                      <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                        {contact.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
