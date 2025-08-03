import React from 'react';
import './ProcessSection.css';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: "Let's dive into your business. We start by understanding your goals, challenges, and vision. Let's build a strategy that works for you."
    },
    {
      number: '02',
      title: 'Customized Strategy',
      description: 'Stop wasting money. We build a strategy that speaks to your audience and drives real, measurable results.'
    },
    {
      number: '03',
      title: 'Watch Your Business Grow',
      description: 'Implement the plan and watch your business scale. Our strategies are driven by data, refined by experience.'
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
