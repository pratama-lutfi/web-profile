import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Tabs = () => {
  const location = useLocation();
  
  return (
    <div className="wiki-tabs">
      <NavLink 
        to="/article" 
        className={({ isActive }) => `wiki-tab ${isActive ? 'active' : ''}`}
      >
        Article
      </NavLink>
      <NavLink 
        to="/talk" 
        className={({ isActive }) => `wiki-tab ${isActive ? 'active' : ''}`}
      >
        Talk
      </NavLink>
    </div>
  );
};

const PageLayout = ({ children }) => {
  return (
    <>
      <Tabs />
      <main className="wiki-main">
        {children}
        <footer className="wiki-footer">
          <p>This page was last edited on 24 April 2026, at 10:08 (UTC).</p>
          <p>Text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply.</p>
        </footer>
      </main>
    </>
  );
};

export default PageLayout;
