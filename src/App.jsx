import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ArticlePage from './pages/ArticlePage';
import TalkPage from './pages/TalkPage';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div className="wiki-container">
          <Sidebar />
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

export default App;
