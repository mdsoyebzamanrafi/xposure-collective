import React from 'react';
import './ProcessSection.css';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Get in touch with our experts to understand your digital marketing needs and goals with comprehensive analysis.'
    },
    {
      number: '02',
      title: 'Customized Strategy',
      description: 'We create a tailored strategy to reach your audience and drive your business growth with innovative approaches.'
    },
    {
      number: '03',
      title: 'Watch Your Business Grow',
      description: 'Implement our proven strategies and watch as your business reaches new heights with measurable results.'
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="process-header">
          <h2 className="section-title">3 simple steps to grow your business</h2>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;