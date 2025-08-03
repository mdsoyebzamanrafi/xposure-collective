import React from 'react';
import './StatsSection.css';

const StatsSection: React.FC = () => {
  return (
<section className="stats-section">
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number">$3m+</div>
          <div className="stat-label">Client Revenue Generated</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">40+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
