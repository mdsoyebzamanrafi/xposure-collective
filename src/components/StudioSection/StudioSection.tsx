import React from 'react';
import './StudioSection.css';

// Define the props for the FeatureCard component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  gridArea: string;
  layout?: 'default' | 'wide';
}

// SVG Icon Components
const CameraIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const HomeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
  </svg>
);

const LayersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ZapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

// Reusable FeatureCard Component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, image, gridArea, layout = 'default' }) => {
  const cardClassName = `feature-card ${gridArea}`;

  const content = (
    <>
      <div className="feature-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="feature-image">
        <img src={image} alt={title} />
      </div>
    </>
  );

  const wideLayoutContent = (
    <>
      <div className="feature-content">
        <div className="feature-icon">{icon}</div>
        <div className="feature-text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="feature-image">
        <img src={image} alt={title} />
      </div>
    </>
  );

  return (
    <div className={cardClassName}>
      {layout === 'wide' ? wideLayoutContent : content}
    </div>
  );
};

// Main StudioSection Component
const StudioSection: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: <CameraIcon />,
      title: 'Professional Equipment',
      description: 'Cinema-grade cameras, professional lighting rigs, and high-end audio equipment ready for immediate use.',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=300&h=200&fit=crop',
      gridArea: 'large-feature',
    },
    {
      icon: <HomeIcon />,
      title: 'Versatile Set Designs',
      description: 'Multiple themed environments including modern offices, cozy living spaces, and customizable backdrops.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop',
      gridArea: 'medium-feature',
    },
    {
      icon: <SettingsIcon />,
      title: 'Rapid Setup & Flexibility',
      description: 'Pre-configured lighting setups and modular sets allow for quick transitions between different shooting scenarios.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop',
      gridArea: 'medium-feature',
    },
    {
      icon: <LayersIcon />,
      title: 'Cost-Effective Solutions',
      description: 'Eliminate location scouting, permits, and weather dependencies while maintaining premium production value.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
      gridArea: 'wide-feature',
      layout: 'wide',
    },
    {
      icon: <CheckCircleIcon />,
      title: 'Expert Support',
      description: 'Dedicated technical crew and creative consultants available throughout your production process.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop',
      gridArea: 'tall-feature',
    },
    {
      icon: <ZapIcon />,
      title: 'High-Speed Workflow',
      description: 'Streamlined processes for rapid content delivery.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop',
      gridArea: 'compact-feature',
    },
  ];

  return (
    <section className="studio-section">
      <div className="studio-container">
        {/* Hero Header */}
        <div className="studio-hero">
          <div className="hero-content">
            <span className="hero-badge">Xposure Collective Studio</span>
            <h2 className="hero-title">Where Creative Vision Meets Professional Excellence</h2>
            <p className="hero-description">
              Step into our state-of-the-art production facility designed for creators who demand nothing less than perfection. From concept to completion, we provide the tools and environment to bring your boldest ideas to life.
            </p>
            <div className="hero-actions">
              <button className="primary-btn">Book Studio Tour</button>
              <button className="secondary-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                </svg>
                Watch Virtual Tour
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-section">
          <div className="section-header">
            <h3>Why Choose Our Studio</h3>
            <p>Everything you need for professional content creation under one roof</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
