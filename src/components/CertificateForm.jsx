import React, { useState, useEffect } from 'react';

export default function CertificateForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    dateIssued: '',
    imageUrl: '',
    certificateLink: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        issuer: initialData.issuer || '',
        dateIssued: initialData.dateIssued || '',
        imageUrl: initialData.imageUrl || '',
        certificateLink: initialData.certificateLink || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.issuer || !formData.dateIssued) {
      alert('Please fill in all required fields (Title, Issuer, Date Issued)');
      return;
    }
    onSubmit(formData);
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
        {initialData ? 'Edit Certificate' : 'Create New Certificate'}
      </h3>
      
      <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
        Certificate Name *
      </label>
      <input 
        type="text" 
        name="title" 
        value={formData.title} 
        onChange={handleChange} 
        placeholder="e.g. Java Programming Fundamentals"
        style={inputStyle}
      />

      <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
        Issuing Organization *
      </label>
      <input 
        type="text" 
        name="issuer" 
        value={formData.issuer} 
        onChange={handleChange} 
        placeholder="e.g. Oracle Academy"
        style={inputStyle}
      />

      <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
        Year Issued *
      </label>
      <input 
        type="text" 
        name="dateIssued" 
        value={formData.dateIssued} 
        onChange={handleChange} 
        placeholder="e.g. 2023"
        style={inputStyle}
      />

      <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
        Image URL / Mockup badge path
      </label>
      <input 
        type="text" 
        name="imageUrl" 
        value={formData.imageUrl} 
        onChange={handleChange} 
        placeholder="e.g. /favicon.svg"
        style={inputStyle}
      />

      <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
        Verification URL / Credential Link
      </label>
      <input 
        type="text" 
        name="certificateLink" 
        value={formData.certificateLink} 
        onChange={handleChange} 
        placeholder="e.g. https://freecodecamp.org/verify/..."
        style={inputStyle}
      />

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
        <button type="button" onClick={onCancel} className="btn btn-secondary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary" style={{ padding: '8px 24px', fontSize: '0.9rem' }}>
          {initialData ? 'Save Changes' : 'Create Certificate'}
        </button>
      </div>
    </form>
  );
}
