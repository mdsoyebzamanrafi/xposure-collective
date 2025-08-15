import React from 'react';
import { Link } from 'react-router-dom';
import './ProcessSection.css';

const processes = [
  {
    title: 'Pre-Production',
    description: 'Develop a detailed strategy that ensures every video project not only tells a compelling story, but also aligns with your brand\'s larger goals.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Production',
    description: 'Our production team handles every detail from scripting, casting, scheduling, filming, and everything in between so you don\'t have to, giving you confidence that your project is in expert hands.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Post-Production',
    description: 'Our in-house team of editors will refine every aspect of your video ensuring the final cut is exactly what you envisioned.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="process-header">
          <h2 className="section-title">From Ideation To Creation</h2>
          <p className="process-subtitle">We take care of everything you need to bring your vision to life</p>
          <Link to="/how-it-works" className="process-button">View Our Process</Link>
        </div>

        <div className="process-cards">
          {processes.map((process) => (
            <div key={process.title} className="process-card">
              <div className="card-image" style={{ backgroundImage: `url(${process.image})` }}></div>
              <div className="card-overlay">
                <div className="card-content">
                  <h3 className="card-title">{process.title}</h3>
                  <p className="card-description">{process.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
