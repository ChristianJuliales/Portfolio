import React, { useState, useEffect } from 'react';

export default function ProjectForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    imageUrl: '',
    liveLink: '',
    githubLink: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        technologies: Array.isArray(initialData.technologies) 
          ? initialData.technologies.join(', ') 
          : initialData.technologies || '',
        imageUrl: initialData.imageUrl || '',
        liveLink: initialData.liveLink || '',
        githubLink: initialData.githubLink || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.imageUrl || !formData.technologies) {
      alert('Please fill in all required fields (Title, Description, Tech tags, Image URL)');
      return;
    }

    // Convert comma-separated technologies to string array
    const techArray = formData.technologies
      .split(',')
      .map(tech => tech.trim())
      .filter(tech => tech.length > 0);

    onSubmit({
      ...formData,
      technologies: techArray
    });
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: 'var(--color-bg)',
    border: '1px solid var(--color-border)',
    borderRadius: '8px',
    padding: '10px 14px',
    color: 'var(--color-text-main)',
    marginBottom: '16px',
    fontSize: '0.95rem'
  };

  return (
    <form onSubmit={handleSubmit} className="card-glass" style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ marginBottom: '20px', fontSize: '1.25rem', fontWeight: 800 }}>
        {initialData ? 'Edit Project' : 'Create New Project'}
      </h3>
      
      <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
        Project Title *
      </label>
      <input 
        type="text" 
        name="title" 
        value={formData.title} 
        onChange={handleChange} 
        placeholder="e.g. Payroll System"
        style={inputStyle}
      />

      <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
        Description *
      </label>
      <textarea 
        name="description" 
        value={formData.description} 
        onChange={handleChange} 
        placeholder="Brief description of the project features and design..."
        rows={4}
        style={{ ...inputStyle, resize: 'vertical' }}
      />

      <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
        Technologies (comma-separated) *
      </label>
      <input 
        type="text" 
        name="technologies" 
        value={formData.technologies} 
        onChange={handleChange} 
        placeholder="e.g. Java, Swing, MySQL"
        style={inputStyle}
      />

      <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
        Image URL (e.g. /Payroll.png or hosted image link) *
      </label>
      <input 
        type="text" 
        name="imageUrl" 
        value={formData.imageUrl} 
        onChange={handleChange} 
        placeholder="e.g. /Payroll.png"
        style={inputStyle}
      />

      <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
        Live Demo Link
      </label>
      <input 
        type="text" 
        name="liveLink" 
        value={formData.liveLink} 
        onChange={handleChange} 
        placeholder="e.g. https://my-demo.com"
        style={inputStyle}
      />

      <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
        Github Repository Link
      </label>
      <input 
        type="text" 
        name="githubLink" 
        value={formData.githubLink} 
        onChange={handleChange} 
        placeholder="e.g. https://github.com/my-user/my-repo"
        style={inputStyle}
      />

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
        <button type="button" onClick={onCancel} className="btn btn-secondary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" style={{ padding: '8px 24px', fontSize: '0.9rem' }}>
          {initialData ? 'Save Changes' : 'Create Project'}
        </button>
      </div>
    </form>
  );
}
