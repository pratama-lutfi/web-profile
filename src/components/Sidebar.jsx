import React from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, MessageSquare, Eye, Code, History, Home, Shuffle, Info } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="wiki-sidebar">
      <div style={{ marginBottom: '2rem', fontSize: '1.2rem', fontStyle: 'italic', fontWeight: 'bold' }}>
        Portfolio
      </div>

      <div style={{ fontSize: '0.75rem', color: '#54595d', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        Navigation
      </div>
      <ul style={{ listStyle: 'none', marginLeft: 0, fontSize: '0.85rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <NavLink
            to="/article"
            style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            <FileText size={14} style={{ marginRight: '8px' }} />
            Article
          </NavLink>
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <NavLink
            to="/talk"
            style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            <MessageSquare size={14} style={{ marginRight: '8px' }} />
            Talk
          </NavLink>
        </li>
      </ul>

      {/* <div style={{ fontSize: '0.75rem', color: '#54595d', textTransform: 'uppercase', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
        Contribute
      </div>
      <ul style={{ listStyle: 'none', marginLeft: 0, fontSize: '0.85rem' }}>
        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
          <Eye size={14} style={{ marginRight: '8px' }} />
          <a href="#">Read</a>
        </li>
        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
          <Code size={14} style={{ marginRight: '8px' }} />
          <a href="#">View source</a>
        </li>
        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
          <History size={14} style={{ marginRight: '8px' }} />
          <a href="#">View history</a>
        </li>
      </ul>

      <div style={{ fontSize: '0.75rem', color: '#54595d', textTransform: 'uppercase', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
        Tools
      </div>
      <ul style={{ listStyle: 'none', marginLeft: 0, fontSize: '0.85rem' }}>
        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
          <Home size={14} style={{ marginRight: '8px' }} />
          <a href="#">Main page</a>
        </li>
        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
          <Shuffle size={14} style={{ marginRight: '8px' }} />
          <a href="#">Random article</a>
        </li>
        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
          <Info size={14} style={{ marginRight: '8px' }} />
          <a href="#">About</a>
        </li>
      </ul> */}

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
