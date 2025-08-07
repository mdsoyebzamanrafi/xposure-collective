import React from 'react';
import './ProcessSection.css';

const processes = [
  {
    title: 'Pre-Production',
    description: 'Develop a detailed strategy that ensures every video project not only tells a compelling story, but also aligns with your brand’s larger goals.'
  },
  {
    title: 'Production',
    description: 'Our production team handles every detail from scripting, casting, scheduling, filming, and everything in between so you don’t have to, giving you confidence that your project is in expert hands.'
  },
  {
    title: 'Post-Production',
    description: 'Our in-house team of editors will refine every aspect of your video ensuring the final cut is exactly what you envisioned.'
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="process-header">
          <h2 className="section-title">From Ideation To Creation</h2>
          <p className="process-subtitle">We take care of everything you need to bring your vision to life.</p>
          <button className="process-button">View Our Process</button>
        </div>

        <div className="process-cards">
          {processes.map((process) => (
            <div key={process.title} className="process-card">
              <div className="card-content">
                <h3 className="card-title">{process.title}</h3>
                <p className="card-description">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
