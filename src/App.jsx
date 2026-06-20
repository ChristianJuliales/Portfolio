import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certification from './pages/Certification';
import Resume from './pages/Resume';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './context/AuthContext';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');

  // Smooth scroll to top when changing tabs
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      justifyContent: 'space-between'
    }}>
      <div>
        {/* Navigation Header */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Dynamic Main Page Content */}
        <main style={{ paddingBottom: '60px' }}>
          {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'certifications' && <Certification />}
          {activeTab === 'resume' && <Resume />}
          {activeTab === 'admin-login' && <AdminLogin setActiveTab={setActiveTab} />}
          {activeTab === 'admin' && <AdminDashboard setActiveTab={setActiveTab} />}
        </main>
      </div>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
