import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ArticlePage from './pages/ArticlePage';
import TalkPage from './pages/TalkPage';
import { useAppContext } from './context/AppContext';

const AppContent = () => {
  const { isSidebarOpen, toggleSidebar } = useAppContext();
  
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div className="wiki-container">
          <Sidebar />
          {isSidebarOpen && (
            <div 
              className="mobile-only" 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 999
              }}
              onClick={toggleSidebar}
            />
          )}
          <div style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/article" element={<ArticlePage />} />
              <Route path="/talk" element={<TalkPage />} />
              <Route path="/" element={<Navigate to="/article" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <AppContent />
  );
};

export default App;
