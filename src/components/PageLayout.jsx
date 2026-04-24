import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Tabs = () => {
  const { t } = useAppContext();
  
  return (
    <div className="wiki-tabs">
      <NavLink 
        to="/article" 
        className={({ isActive }) => `wiki-tab ${isActive ? 'active' : ''}`}
      >
        {t('article')}
      </NavLink>
      <NavLink 
        to="/talk" 
        className={({ isActive }) => `wiki-tab ${isActive ? 'active' : ''}`}
      >
        {t('talk')}
      </NavLink>
    </div>
  );
};

const PageLayout = ({ children }) => {
  const { t, theme } = useAppContext();
  return (
    <>
      <Tabs />
      <main className="wiki-main" style={{ backgroundColor: 'var(--wiki-bg)', color: 'var(--wiki-text)' }}>
        {children}
        <footer className="wiki-footer" style={{ borderTop: '1px solid var(--wiki-border)', color: 'var(--wiki-text)', opacity: 0.6 }}>
          <p>This page was last edited on 24 April 2026, at 11:08 (UTC).</p>
          <p>Text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply.</p>
        </footer>
      </main>
    </>
  );
};

export default PageLayout;
