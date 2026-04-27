import React from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, MessageSquare, Eye, Code, History, Home, Shuffle, Info } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Sidebar = () => {
  const { t, isSidebarOpen } = useAppContext();

  return (
    <aside className={`wiki-sidebar ${isSidebarOpen ? 'mobile-open' : ''}`}>
      <div style={{ marginBottom: '2rem', fontSize: '1.2rem', fontStyle: 'italic', fontWeight: 'bold', color: 'var(--wiki-text)' }}>
        Portfolio
      </div>

      <div style={{ fontSize: '0.75rem', color: '#54595d', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        {t('navigation')}
      </div>
      <ul style={{ listStyle: 'none', marginLeft: 0, fontSize: '0.85rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <NavLink
            to="/article"
            style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            <FileText size={14} style={{ marginRight: '8px' }} />
            {t('article')}
          </NavLink>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <NavLink
            to="/talk"
            style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            <MessageSquare size={14} style={{ marginRight: '8px' }} />
            {t('talk')}
          </NavLink>
        </li>
      </ul>

      <style dangerouslySetInnerHTML={{
        __html: `
        .active-link {
          font-weight: bold;
          color: var(--wiki-text) !important;
          text-decoration: none !important;
        }
      `}} />
    </aside>
  );
};

export default Sidebar;
