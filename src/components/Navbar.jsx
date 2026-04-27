import React, { useState, useEffect, useRef } from 'react';
import { Menu, Search, Settings, Puzzle, X, Sun, Moon, Languages, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatedUserIcon } from './AnimatedIcons';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const { theme, toggleTheme, language, changeLanguage, t, toggleSidebar } = useAppContext();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
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
    setShowMobileSearch(false);

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
        <div className="menu-button mobile-only" onClick={toggleSidebar}>
          <Menu size={20} color={theme === 'dark' ? '#eaecf0' : '#202122'} />
        </div>
        <a href="/" className="wiki-logo-container">
          <div className="wiki-logo-text">
            <span>WIKIPEDIA</span>
            <Puzzle size={18} color="#3366cc" fill="#3366cc" style={{ marginLeft: '-2px' }} />
            <sup style={{ fontSize: '0.6rem', color: '#3366cc', marginLeft: '-4px' }}>25</sup>
          </div>
          <span className="wiki-logo-subtext">{t('logoSubtext')}</span>
        </a>
      </div>

      <div className={`header-center ${showMobileSearch ? 'mobile-visible' : ''}`}>
        <div className="wiki-search-wrapper" ref={searchRef}>
          <div className="wiki-search-container">
            <div className="wiki-search-input-wrapper">
              <Search size={18} color="#72777d" />
              <input
                type="text"
                className="wiki-search-input"
                placeholder={t('search')}
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
              {t('searchBtn')}
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
                  {t('noResults')} "{query}"
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="header-right">
        <div className="mobile-only" onClick={() => setShowMobileSearch(!showMobileSearch)}>
          <Search size={20} color={theme === 'dark' ? '#eaecf0' : '#54595d'} style={{ cursor: 'pointer' }} />
        </div>

        <div className="lang-toggle" onClick={() => changeLanguage(language === 'en' ? 'id' : 'en')}>
          <Languages size={16} />
          <span>{language === 'en' ? 'ID' : 'EN'}</span>
        </div>

        <div className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </div>

        <a href="#" className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <AnimatedUserIcon />
          <span>{t('login')}</span>
        </a>
        <a href="#" className="desktop-only">{t('createAccount')}</a>
        <Settings size={18} color={theme === 'dark' ? '#eaecf0' : '#54595d'} style={{ cursor: 'pointer' }} />
      </div>
    </header>
  );
};

export default Navbar;
