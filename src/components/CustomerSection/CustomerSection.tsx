import React from 'react';
import './CustomerSection.css';

const CustomerSection: React.FC = () => {
  return (
    <section className="customer-section">
      <div className="container">
        <div className="customer-content">
          <div className="customer-text">
            <h2 className="customer-title">
              Stop missing out on
              <br />
              <span className="highlight">potential customers</span>
            </h2>
            
            <p className="customer-description">
              Your audience is out there. Let's
              <br />
              help them find you.
            </p>
          </div>
          
          <div className="customer-visual">
            <div className="customer-stats">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-info">
                  <div className="stat-number">2.5M+</div>
                  <div className="stat-label">Potential Reach</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">📈</div>
                <div className="stat-info">
                  <div className="stat-number">85%</div>
                  <div className="stat-label">Conversion Rate</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-info">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Active Campaigns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;