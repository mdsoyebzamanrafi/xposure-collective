import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import heroVideo from '../../assets/Rainbow_Motion_Video_Revision.mp4';

interface HeroSectionProps {
  title?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showTag?: boolean;
  tagText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = <>Professional Video Production<br />Made Simple for You</>,
  description = "Xposure Collective helps brands create any type of video with one trusted partner. Our fast, simple, and transparent process makes video production easier than ever.",
  primaryButtonText = "Start Your Vision",
  secondaryButtonText,
  showTag = true,
  tagText = "Full-Service",
}) => {
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroTextRef.current) {
        const scrollY = window.scrollY;
        const heroHeight = window.innerHeight * 0.75; // 75vh
        const fadeStart = 50; // Start fading after 50px scroll
        const fadeEnd = heroHeight * 0.5; // Complete fade at 50% of hero height
        
        let opacity = 1;
        if (scrollY > fadeStart) {
          opacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
        }
        
        heroTextRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="nectar__bg-video">
        <video autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" ref={heroTextRef}>
            {showTag && (
              <div className="hero-tag">
                <span></span>{tagText}
              </div>
            )}
            <h1 className="hero-title">{title}</h1>
            
            <div className="hero-subtitle">
              <p className="hero-description">{description}</p>
            </div>
            <div className="hero-cta">
              <button className="btn btn-primary btn-large">
                {primaryButtonText}
              </button>
              {secondaryButtonText && (
                <button className="btn btn-secondary btn-large">
                  {secondaryButtonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
