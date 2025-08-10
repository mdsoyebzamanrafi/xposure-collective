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
      gridArea: '',
    },
    {
      icon: <SettingsIcon />,
      title: 'Rapid Setup & Flexibility',
      description: 'Pre-configured lighting setups and modular sets allow for quick transitions between different shooting scenarios.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop',
      gridArea: '',
    },
    {
      icon: <LayersIcon />,
      title: 'Cost-Effective Solutions',
      description: 'Eliminate location scouting and weather dependencies while maintaining premium production value.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
      gridArea: '',
      layout: 'default',
    },
    {
      icon: <CheckCircleIcon />,
      title: 'Expert Support & Analysis',
      description: 'Dedicated technical crew and creative consultants available throughout your production process.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop',
      gridArea: '',
    },
  ];

  return (
    <section className="studio-section">
      <div className="studio-container">
        

        {/* Features Grid */}
        <div className="features-section">
          <div className="section-header">
            <h3>Why Choose Exposure?</h3>
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
