import React from 'react';
import './HeroSection.css';
import heroVideo from '../../assets/Rainbow_Motion_Video_Revision.mp4';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="nectar__bg-video">
        <video autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-tag">
              <span></span>Full-Service
            </div>
            <h1 className="hero-title">
              Professional Video Production<br></br>Made Simple for You
            </h1>
            
            <div className="hero-subtitle">
              <p className="hero-description">
                Xposure Collective helps brands create any type of video with one trusted partner. Our fast, simple, and transparent process makes video production easier than ever.
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
