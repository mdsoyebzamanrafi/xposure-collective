import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import heroVideo from '../../assets/Rainbow_Motion_Video_Revision.mp4';

const HeroSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div
        className="nectar__bg-video"
        style={{
          transform: `translateY(${offset * 0.4}px)`,
        }}
      >
        <video autoPlay loop muted playsInline style={{ zIndex: 0 }}>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div
          className="hero-content"
          style={{
            opacity: 1 - offset / 250,
          }}
        >
          <div className="hero-text">
            <div className="hero-tag">
              <span></span>Full-Service
            </div>
            <h1 className="hero-title">
              Prenium Creative Agency
            </h1>
            
            <div className="hero-subtitle">
              <p className="hero-description">
                Elevating Brands With Cinematic Precision
              </p>
            </div>
            <div className="hero-cta">
              <button className="btn btn-primary btn-large">
                Start Your Vision
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
