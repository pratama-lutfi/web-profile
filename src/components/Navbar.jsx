import React, { useState, useEffect, useRef } from 'react';
import { Menu, Search, Settings, Puzzle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatedUserIcon } from './AnimatedIcons';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const searchableItems = [
    { title: 'Muhammad Lutfi Pratama', description: 'Main profile page and introduction', path: '/article' },
    { title: 'About Me', description: 'Professional background and experience', path: '/article#about' },
    { title: 'Projects', description: 'Showcase of mobile and web development projects', path: '/article#projects' },
    { title: 'Skills & Tools', description: 'Technical expertise in Flutter, React, and Cloud', path: '/article#skills' },
    { title: 'Contact', description: 'How to reach Lutfi via email and social media', path: '/article#contact' },
    { title: 'Experience', description: 'Work history at Bank Rakyat Indonesia and others', path: '/article#about' },
    { title: 'Qlola IB Token', description: 'Mobile application developed for BRI', path: '/article#projects' },
    { title: 'Flutter Development', description: 'Experience in cross-platform mobile development', path: '/article#skills' },
    { title: 'ReactJS Development', description: 'Web development expertise', path: '/article#skills' },
    { title: 'Talk Page', description: 'Discussion and collaboration area', path: '/talk' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim().length > 0) {
      const filtered = searchableItems.filter(item => 
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (path) => {
    navigate(path);
    setQuery('');
    setShowResults(false);
    
    // If it's a hash link, handle scrolling
    if (path.includes('#')) {
      const id = path.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (results.length > 0) {
      handleResultClick(results[0].path);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

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
        <div className="wiki-search-wrapper" ref={searchRef}>
          <div className="wiki-search-container">
            <div className="wiki-search-input-wrapper">
              <Search size={18} color="#72777d" />
              <input 
                type="text" 
                className="wiki-search-input" 
                placeholder="Search Wikipedia" 
                value={query}
                onChange={handleSearch}
                onFocus={() => query && setShowResults(true)}
                onKeyDown={handleKeyDown}
              />
              {query && (
                <X 
                  size={16} 
                  color="#72777d" 
                  style={{ cursor: 'pointer' }} 
                  onClick={handleClear}
                />
              )}
            </div>
            <button 
              className="wiki-search-button"
              onClick={handleSearchSubmit}
            >
              Search
            </button>
          </div>

          {showResults && (
            <div className="wiki-search-results">
              {results.length > 0 ? (
                results.map((result, index) => (
                  <div 
                    key={index} 
                    className="search-result-item"
                    onClick={() => handleResultClick(result.path)}
                  >
                    <span className="search-result-title">{result.title}</span>
                    <span className="search-result-description">{result.description}</span>
                  </div>
                ))
              ) : (
                <div className="search-no-results">
                  No results found for "{query}"
                </div>
              )}
            </div>
          )}
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
