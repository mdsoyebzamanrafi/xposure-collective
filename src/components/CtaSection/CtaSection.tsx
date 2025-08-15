import React from 'react';
import './CtaSection.css';

const CtaSection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="section-title">Join Over 4,500 Satisfied Clients</h2>
          <p className="section-subtitle">Get started now and see how simple video production can be with the right partner.</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
