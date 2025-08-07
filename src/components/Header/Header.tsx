import React, { useState, useEffect } from 'react';
import './Header.css';
import xLogo from '../../assets/X.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={xLogo} alt="Xposure Collective Logo" className="logo-image" />
            <div className="logo-text">
              <span className="logo-text-main">XPOSURE</span>
              <span className="logo-text-sub">COLLECTIVE</span>
            </div>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#branding" className="nav-link">Branding</a></li>
              <li><a href="#advertising" className="nav-link">Advertising</a></li>
              <li><a href="#marketing" className="nav-link">Marketing</a></li>
            </ul>
            <div className="header-cta">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? 'is-active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
