import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../utils/api';
import ProjectForm from '../components/ProjectForm';
import CertificateForm from '../components/CertificateForm';
import { 
  FolderGit2, 
  Award, 
  FileEdit, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Check, 
  X, 
  User, 
  Code2, 
  Mail, 
  Calendar 
} from 'lucide-react';

export default function AdminDashboard({ setActiveTab }) {
  const { isAdmin, logout, loading } = useAuth();
  const [subTab, setSubTab] = useState('projects'); // 'projects' | 'certificates' | 'resume'
  
  // Data lists
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [resumeData, setResumeData] = useState(null);

  // Loading/Error states
  const [dataLoading, setDataLoading] = useState(true);

  // Form states
  const [isEditing, setIsEditing] = useState(false); // true if showing form
  const [activeItem, setActiveItem] = useState(null); // item being edited (null for creation)

  // Redirect if not admin
  useEffect(() => {
    if (!loading && !isAdmin) {
      setActiveTab('admin-login');
    }
  }, [isAdmin, loading, setActiveTab]);

  // Fetch initial data
  const fetchData = async () => {
    try {
      setDataLoading(true);
      const [projList, certList, resumeObj] = await Promise.all([
        api.getProjects(),
        api.getCertificates(),
        api.getResume()
      ]);
      setProjects(projList);
      setCertificates(certList);
      setResumeData(resumeObj);
    } catch (err) {
      console.error('Error fetching data', err);
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  // Project handlers
  const handleProjectSubmit = async (formData) => {
    try {
      if (activeItem) {
        // Edit mode
        await api.updateProject(activeItem._id, formData);
      } else {
        // Create mode
        await api.createProject(formData);
      }
      setIsEditing(false);
      setActiveItem(null);
      fetchData();
    } catch (err) {
      alert('Error saving project: ' + err.message);
    }
  };

  const handleProjectDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await api.deleteProject(id);
        fetchData();
      } catch (err) {
        alert('Error deleting project: ' + err.message);
      }
    }
  };

  // Certificate handlers
  const handleCertificateSubmit = async (formData) => {
    try {
      if (activeItem) {
        // Edit mode
        await api.updateCertificate(activeItem._id, formData);
      } else {
        // Create mode
        await api.createCertificate(formData);
      }
      setIsEditing(false);
      setActiveItem(null);
      fetchData();
    } catch (err) {
      alert('Error saving certificate: ' + err.message);
    }
  };

  const handleCertificateDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this certificate?')) {
      try {
        await api.deleteCertificate(id);
        fetchData();
      } catch (err) {
        alert('Error deleting certificate: ' + err.message);
      }
    }
  };

  // Resume handlers (education array, skills categories, contacts)
  const handleResumeSave = async (e) => {
    e.preventDefault();
    try {
      await api.updateResume(resumeData);
      alert('Resume saved successfully!');
      fetchData();
    } catch (err) {
      alert('Error saving resume: ' + err.message);
    }
  };

  const handleEduChange = (index, field, value) => {
    const newEdu = [...resumeData.education];
    newEdu[index][field] = value;
    setResumeData({ ...resumeData, education: newEdu });
  };

  const handleContactChange = (index, field, value) => {
    const newContacts = [...resumeData.contacts];
    newContacts[index][field] = value;
    setResumeData({ ...resumeData, contacts: newContacts });
  };

  // Skill editing handlers
  const handleSkillChange = (groupIndex, skillIndex, field, value) => {
    const newGroups = [...resumeData.skillGroups];
    newGroups[groupIndex].skills[skillIndex][field] = value;
    setResumeData({ ...resumeData, skillGroups: newGroups });
  };

  const handleAddSkill = (groupIndex) => {
    const newGroups = [...resumeData.skillGroups];
    newGroups[groupIndex].skills.push({ name: 'New Skill', level: 'Basic' });
    setResumeData({ ...resumeData, skillGroups: newGroups });
  };

  const handleRemoveSkill = (groupIndex, skillIndex) => {
    const newGroups = [...resumeData.skillGroups];
    newGroups[groupIndex].skills.splice(skillIndex, 1);
    setResumeData({ ...resumeData, skillGroups: newGroups });
  };

  if (loading || dataLoading) {
    return (
      <div className="container flex-center" style={{ minHeight: '60vh' }}>
        <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>Loading secure data...</p>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      
      {/* Dashboard Top Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        marginBottom: '40px',
        paddingBottom: '20px',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div>
          <h1 className="section-title" style={{ margin: 0 }}>Admin Control Panel</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginTop: '4px' }}>
            Secure manager for portfolio projects, certifications, and curriculum vitae details.
          </p>
        </div>
        <button onClick={() => { logout(); setActiveTab('home'); }} className="btn btn-outline" style={{ border: '1px solid #ef4444', color: '#ef4444' }}>
          <LogOut size={16} />
          Sign Out
        </button>
      </div>

      {/* Subtab Selectors */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '32px',
        borderBottom: '1px solid var(--color-border)',
        paddingBottom: '12px',
        overflowX: 'auto'
      }}>
        <button 
          onClick={() => { setSubTab('projects'); setIsEditing(false); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            backgroundColor: subTab === 'projects' ? 'var(--color-primary)' : 'transparent',
            color: subTab === 'projects' ? 'white' : 'var(--color-text-muted)',
            transition: 'var(--transition-fast)'
          }}
        >
          <FolderGit2 size={18} />
          Projects ({projects.length})
        </button>
        <button 
          onClick={() => { setSubTab('certificates'); setIsEditing(false); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            backgroundColor: subTab === 'certificates' ? 'var(--color-primary)' : 'transparent',
            color: subTab === 'certificates' ? 'white' : 'var(--color-text-muted)',
            transition: 'var(--transition-fast)'
          }}
        >
          <Award size={18} />
          Certificates ({certificates.length})
        </button>
        <button 
          onClick={() => { setSubTab('resume'); setIsEditing(false); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            backgroundColor: subTab === 'resume' ? 'var(--color-primary)' : 'transparent',
            color: subTab === 'resume' ? 'white' : 'var(--color-text-muted)',
            transition: 'var(--transition-fast)'
          }}
        >
          <FileEdit size={18} />
          Resume content
        </button>
      </div>

      {/* PROJECTS SUB-TAB CONTENT */}
      {subTab === 'projects' && (
        <div>
          {isEditing ? (
            <ProjectForm 
              initialData={activeItem}
              onSubmit={handleProjectSubmit}
              onCancel={() => { setIsEditing(false); setActiveItem(null); }}
            />
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Manage Projects</h2>
                <button onClick={() => { setIsEditing(true); setActiveItem(null); }} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>
                  <Plus size={16} />
                  Add Project
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {projects.map((project) => (
                  <div key={project._id} className="card-glass" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <img src={project.imageUrl} alt={project.title} style={{ width: '60px', height: '40px', borderRadius: '4px', objectFit: 'cover', border: '1px solid var(--color-border)' }} />
                      <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{project.title}</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{project.technologies.join(', ')}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => { setActiveItem(project); setIsEditing(true); }} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
                        <Edit size={14} />
                      </button>
                      <button onClick={() => handleProjectDelete(project._id)} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444' }}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* CERTIFICATES SUB-TAB CONTENT */}
      {subTab === 'certificates' && (
        <div>
          {isEditing ? (
            <CertificateForm 
              initialData={activeItem}
              onSubmit={handleCertificateSubmit}
              onCancel={() => { setIsEditing(false); setActiveItem(null); }}
            />
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Manage Certificates</h2>
                <button onClick={() => { setIsEditing(true); setActiveItem(null); }} className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>
                  <Plus size={16} />
                  Add Certificate
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {certificates.map((cert) => (
                  <div key={cert._id} className="card-glass" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', padding: '16px 24px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{cert.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontWeight: 500 }}>{cert.issuer} • {cert.dateIssued}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => { setActiveItem(cert); setIsEditing(true); }} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
                        <Edit size={14} />
                      </button>
                      <button onClick={() => handleCertificateDelete(cert._id)} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444' }}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* DYNAMIC RESUME EDITING SECTION */}
      {subTab === 'resume' && resumeData && (
        <form onSubmit={handleResumeSave} className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* Save Resume Actions Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Edit Resume Content</h2>
            <button type="submit" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
              <Check size={18} />
              Save Resume Changes
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
            
            {/* 1. Education Editor */}
            <div className="card-glass" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                <User size={18} style={{ color: 'var(--color-primary)' }} />
                Education History
              </h3>
              {resumeData.education.map((edu, idx) => (
                <div key={edu._id || idx} style={{
                  padding: '16px',
                  backgroundColor: 'rgba(30, 41, 59, 0.25)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  marginBottom: '20px'
                }}>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary)', marginBottom: '12px' }}>Education Block #{idx + 1}</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Degree / Role Title</label>
                      <input type="text" value={edu.role} onChange={(e) => handleEduChange(idx, 'role', e.target.value)} style={{ width: '100%', padding: '8px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '6px', color: 'var(--color-text-main)' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Institution</label>
                      <input type="text" value={edu.institution} onChange={(e) => handleEduChange(idx, 'institution', e.target.value)} style={{ width: '100%', padding: '8px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '6px', color: 'var(--color-text-main)' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Duration</label>
                      <input type="text" value={edu.duration} onChange={(e) => handleEduChange(idx, 'duration', e.target.value)} style={{ width: '100%', padding: '8px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '6px', color: 'var(--color-text-main)' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Details / Highlights</label>
                    <textarea value={edu.desc} onChange={(e) => handleEduChange(idx, 'desc', e.target.value)} rows={3} style={{ width: '100%', padding: '8px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '6px', color: 'var(--color-text-main)', resize: 'vertical' }} />
                  </div>
                </div>
              ))}
            </div>

            {/* 2. Skills Editor */}
            <div className="card-glass" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                <Code2 size={18} style={{ color: 'var(--color-secondary)' }} />
                Skills & Competencies
              </h3>
              {resumeData.skillGroups.map((group, groupIdx) => (
                <div key={groupIdx} style={{
                  padding: '16px',
                  backgroundColor: 'rgba(30, 41, 59, 0.25)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  marginBottom: '20px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h4 style={{ fontWeight: 700, color: 'var(--color-secondary)' }}>{group.title}</h4>
                    <button type="button" onClick={() => handleAddSkill(groupIdx)} className="btn btn-outline" style={{ padding: '4px 10px', fontSize: '0.75rem', border: '1px dashed var(--color-primary)' }}>
                      <Plus size={12} /> Add Skill item
                    </button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {group.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <input 
                          type="text" 
                          value={skill.name} 
                          onChange={(e) => handleSkillChange(groupIdx, skillIdx, 'name', e.target.value)} 
                          style={{ flex: 2, padding: '6px 10px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text-main)', fontSize: '0.85rem' }} 
                        />
                        <select 
                          value={skill.level} 
                          onChange={(e) => handleSkillChange(groupIdx, skillIdx, 'level', e.target.value)} 
                          style={{ flex: 1, padding: '6px 10px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text-main)', fontSize: '0.85rem' }}
                        >
                          <option value="Basic">Basic</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                        <button type="button" onClick={() => handleRemoveSkill(groupIdx, skillIdx)} style={{ padding: '6px', color: '#ef4444', cursor: 'pointer' }}>
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 3. Contacts Editor */}
            <div className="card-glass" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                <Mail size={18} style={{ color: 'var(--color-tertiary)' }} />
                Contacts Directory
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {resumeData.contacts.map((contact, idx) => (
                  <div key={contact._id || idx} style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr 2fr',
                    gap: '12px',
                    alignItems: 'center',
                    paddingBottom: '12px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.03)'
                  }}>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{contact.name}</span>
                    <input type="text" value={contact.value} placeholder="Display Value" onChange={(e) => handleContactChange(idx, 'value', e.target.value)} style={{ padding: '8px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '6px', color: 'var(--color-text-main)', fontSize: '0.85rem' }} />
                    <input type="text" value={contact.url} placeholder="Link / Action URL" onChange={(e) => handleContactChange(idx, 'url', e.target.value)} style={{ padding: '8px 12px', backgroundColor: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '6px', color: 'var(--color-text-main)', fontSize: '0.85rem' }} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </form>
      )}

    </div>
  );
}
