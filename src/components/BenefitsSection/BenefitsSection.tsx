import React from 'react';
import './BenefitsSection.css';

const benefits = [
  {
    icon: 'fas fa-lightbulb',
    title: 'Align strategy with production',
    description: 'We’ve united creative strategy and production under one roof, ensuring your videos align perfectly with your goals and vision.',
  },
  {
    icon: 'fas fa-tachometer-alt',
    title: 'Get high-quality videos – fast',
    description: 'Produce high-quality videos on tight timelines, to ensure you meet every deadline without having to compromise on your standards.',
  },
  {
    icon: 'fas fa-expand-arrows-alt',
    title: 'Scale your content needs effortlessly',
    description: 'Whether it’s a single video or assets for an entire campaign, our services scale to meet your brand’s growing needs for content.',
  },
  {
    icon: 'fas fa-shopping-cart',
    title: 'Only pay for what you need',
    description: 'Customize our offerings to fit your project. Choose only the services you need, ensuring you pay for exactly what you use.',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="benefits-header">
          <p className="benefits-subtitle">Xposure Benefits</p>
          <h2 className="benefits-title">Create any video with a single partner.</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">
                <i className={benefit.icon}></i>
              </div>
              <h3 className="benefit-card-title">{benefit.title}</h3>
              <p className="benefit-card-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
