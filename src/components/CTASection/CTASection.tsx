import React from 'react';
import './CTASection.css';

const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-background">
        <div className="cta-gradient"></div>
        <div className="cta-particles"></div>
      </div>
      
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to grow your
            <br />
            <span className="highlight">business?</span>
          </h2>
          
          <div className="cta-button-wrapper">
            <button className="btn btn-primary btn-large">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;