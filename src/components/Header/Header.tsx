import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-text">
              <span className="logo-text-main">XPOSURE</span>
              <span className="logo-text-sub">COLLECTIVE</span>
            </div>
          </div>
          
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#branding" className="nav-link">Branding</a></li>
              <li><a href="#advertising" className="nav-link">Advertising</a></li>
              <li><a href="#marketing" className="nav-link">Marketing</a></li>
            </ul>
            <div className="header-cta">
              <button className="btn btn-primary">Contact Us</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
