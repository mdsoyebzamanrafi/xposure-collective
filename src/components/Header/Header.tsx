import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import xLogo from '../../assets/X.png';

const navLinks = [
  { href: '/how-it-works', text: 'How It Works' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 900;

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Show/hide header based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    setIsScrolled(currentScrollY > 50);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Handle click outside and escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const handleGetStartedClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header ref={headerRef} className={`header ${isScrolled ? 'header-scrolled' : ''} ${!isVisible ? 'header-hidden' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" style={{ cursor: 'pointer', textDecoration: 'none' }}>
            <img src={xLogo} alt="Xposure Collective Logo" className="logo-image" />
            <div className="logo-text">
              <span className="logo-text-main">XPOSURE<br />COLLECTIVE</span>
            </div>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="header-cta" style={isMobile ? { width: '100%', display: 'flex', justifyContent: 'center' } : {}}>
              <button className="btn btn-primary" onClick={handleGetStartedClick}>Get Started</button>
            </div>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
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
