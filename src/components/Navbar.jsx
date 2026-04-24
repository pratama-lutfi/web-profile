import React from 'react';
import { AnimatedUserIcon } from './AnimatedIcons';
import { Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="wiki-header">
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <AnimatedUserIcon />
          <span>Log in</span>
        </a>
        <a href="#">Create account</a>
        <Settings size={16} color="#54595d" style={{ cursor: 'pointer' }} />
      </div>
    </header>
  );
};

export default Navbar;
