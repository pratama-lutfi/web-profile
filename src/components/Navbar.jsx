import React from 'react';
import { Menu, Search, Settings, Puzzle } from 'lucide-react';
import { AnimatedUserIcon } from './AnimatedIcons';

const Navbar = () => {
  return (
    <header className="wiki-header">
      <div className="header-left">
        <div className="menu-button">
          <Menu size={20} color="#202122" />
        </div>
        <a href="/" className="wiki-logo-container">
          <div className="wiki-logo-text">
            <span>WIKIPEDIA</span>
            <Puzzle size={18} color="#3366cc" fill="#3366cc" style={{ marginLeft: '-2px' }} />
            <sup style={{ fontSize: '0.6rem', color: '#3366cc', marginLeft: '-4px' }}>25</sup>
          </div>
          <span className="wiki-logo-subtext">25 years of the free encyclopedia</span>
        </a>
      </div>

      <div className="header-center">
        <div className="wiki-search-container">
          <div className="wiki-search-input-wrapper">
            <Search size={18} color="#72777d" />
            <input 
              type="text" 
              className="wiki-search-input" 
              placeholder="Search Wikipedia" 
            />
          </div>
          <button className="wiki-search-button">Search</button>
        </div>
      </div>

      <div className="header-right">
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <AnimatedUserIcon />
          <span>Log in</span>
        </a>
        <a href="#">Create account</a>
        <Settings size={18} color="#54595d" style={{ cursor: 'pointer' }} />
      </div>
    </header>
  );
};

export default Navbar;
