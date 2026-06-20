const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:5000/api'
  : '/api';

// Helper to get headers with authorization token
const getHeaders = (contentType = 'application/json') => {
  const token = localStorage.getItem('cdnj_admin_token');
  const headers = {};
  if (contentType) {
    headers['Content-Type'] = contentType;
  }
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

export const api = {
  // Authentication
  login: async (apiKey) => {
    try {
      // Validate against the basic endpoint checking access
      const res = await fetch(`${API_BASE_URL}/projects`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });
      if (res.ok) {
        localStorage.setItem('cdnj_admin_token', apiKey);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error', error);
      return false;
    }
  },

  // Projects CRUD
  getProjects: async () => {
    const res = await fetch(`${API_BASE_URL}/projects`);
    if (!res.ok) throw new Error('Failed to retrieve projects');
    return res.json();
  },

  createProject: async (projectData) => {
    const res = await fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(projectData)
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Failed to create project');
    }
    return res.json();
  },

  updateProject: async (id, projectData) => {
    const res = await fetch(`${API_BASE_URL}/projects/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(projectData)
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Failed to update project');
    }
    return res.json();
  },

  deleteProject: async (id) => {
    const res = await fetch(`${API_BASE_URL}/projects/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Failed to delete project');
    }
    return res.json();
  },

  // Certificates CRUD
  getCertificates: async () => {
    const res = await fetch(`${API_BASE_URL}/certificates`);
    if (!res.ok) throw new Error('Failed to retrieve certificates');
    return res.json();
  },

  createCertificate: async (certData) => {
    const res = await fetch(`${API_BASE_URL}/certificates`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(certData)
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Failed to create certificate');
    }
    return res.json();
  },

  updateCertificate: async (id, certData) => {
    const res = await fetch(`${API_BASE_URL}/certificates/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(certData)
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Failed to update certificate');
    }
    return res.json();
  },

  deleteCertificate: async (id) => {
    const res = await fetch(`${API_BASE_URL}/certificates/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Failed to delete certificate');
    }
    return res.json();
  },

  // Resume CRUD
  getResume: async () => {
    const res = await fetch(`${API_BASE_URL}/resume`);
    if (!res.ok) throw new Error('Failed to retrieve resume');
    return res.json();
  },

  updateResume: async (resumeData) => {
    const res = await fetch(`${API_BASE_URL}/resume`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(resumeData)
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Failed to update resume');
    }
    return res.json();
  }
};
