import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ArticlePage from './pages/ArticlePage';
import TalkPage from './pages/TalkPage';

const App = () => {
  return (
    <Router>
      <div className="wiki-container">
        <Sidebar />
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <Routes>
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/talk" element={<TalkPage />} />
            <Route path="/" element={<Navigate to="/article" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
