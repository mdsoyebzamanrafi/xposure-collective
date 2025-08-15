import React, { useState } from 'react';
import './ProductionProcessSection.css';

const ProductionProcessSection: React.FC = () => {
  const [openProcess, setOpenProcess] = useState('Pre-Production');
  const [imageOpacity, setImageOpacity] = useState(1);

  const processes = [
    {
      title: 'Pre-Production',
      description: 'We start by gathering your insights, discussing goals, and setting a clear direction to ensure alignment with everyone involved to set the stage for a successful project.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Production',
      description: 'Once the concept is finalized, we handle every aspect of the production—from scheduling to filming and everything in between. All you have to do is watch your vision come to life.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Post-Production',
      description: 'After filming, our in-house editors transform the raw footage into a polished final product that aligns perfectly with your vision and goals.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleProcessClick = (title: string) => {
    setImageOpacity(0);
    setTimeout(() => {
      setOpenProcess(title);
      setImageOpacity(1);
    }, 500);
  };

  return (
    <section className="production-process-section">
      <div className="container">
        <div className="production-process-header">
          <p className="seamless-experience">Seamless Experience</p>
          <h2 className="section-title">Our simplified production process.</h2>
        </div>
        <div className="production-process-content">
          <div className="process-list">
            {processes.map((process, index) => (
              <div key={process.title} className="process-item">
                <div className="process-item-header" onClick={() => handleProcessClick(process.title)}>
                  <h3>{`0${index + 1}. ${process.title}`}</h3>
                  <span>{openProcess === process.title ? '▲' : '▼'}</span>
                </div>
                  <div className={`process-item-content ${openProcess === process.title ? 'open' : ''}`}>
                    <p>{process.description}</p>
                  </div>
              </div>
            ))}
          </div>
          <div className="process-image">
            <img 
              src={processes.find(p => p.title === openProcess)?.image} 
              alt={openProcess} 
              style={{ opacity: imageOpacity }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcessSection;
