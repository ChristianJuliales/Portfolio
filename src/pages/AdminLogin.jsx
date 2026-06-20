import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { KeyRound, ShieldAlert } from 'lucide-react';

export default function AdminLogin({ setActiveTab }) {
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!apiKey) {
      setError('Please enter your API Key');
      return;
    }

    const success = await login(apiKey);
    if (success) {
      setActiveTab('admin');
    } else {
      setError('Invalid Access Key. Access Denied.');
    }
  };

  return (
    <div className="container flex-center" style={{ minHeight: '60vh', padding: '40px 24px' }}>
      <div className="card-glass" style={{ width: '100%', maxWidth: '420px', padding: '40px 32px', textAlign: 'center' }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'rgba(168, 85, 247, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-primary)',
          margin: '0 auto 24px auto',
          border: '1px solid rgba(168, 85, 247, 0.2)'
        }}>
          <KeyRound size={26} />
        </div>

        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '10px' }}>Admin Portal</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '32px' }}>
          Please enter your secure administrative key to access the portfolio manager.
        </p>

        {error && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            color: '#ef4444',
            padding: '12px 16px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            marginBottom: '24px',
            textAlign: 'left'
          }}>
            <ShieldAlert size={16} style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Secret Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '12px 16px',
              color: 'var(--color-text-main)',
              fontSize: '0.95rem',
              marginBottom: '24px',
              outline: 'none',
              textAlign: 'center',
              letterSpacing: '0.1em'
            }}
          />

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
            Authenticate Key
          </button>
        </form>
      </div>
    </div>
  );
}
