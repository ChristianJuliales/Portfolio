import React, { createContext, useState, useEffect, useContext } from 'react';
import { api } from '../utils/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('cdnj_admin_token');
    if (token) {
      // Validate token on startup
      api.login(token).then((success) => {
        setIsAdmin(success);
        if (!success) {
          localStorage.removeItem('cdnj_admin_token');
        }
        setLoading(false);
      });
    } else {
      setIsAdmin(false);
      setLoading(false);
    }
  }, []);

  const login = async (apiKey) => {
    const success = await api.login(apiKey);
    setIsAdmin(success);
    return success;
  };

  const logout = () => {
    localStorage.removeItem('cdnj_admin_token');
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
