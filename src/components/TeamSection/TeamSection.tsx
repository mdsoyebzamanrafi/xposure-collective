import React from 'react';
import './TeamSection.css';

const TeamSection: React.FC = () => {
  const testimonials = [
    {
      text: "Working with Creativision has been transformative for our business. Their strategic approach and creative solutions helped us reach new heights in our digital marketing efforts.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      avatar: "SJ"
    },
    {
      text: "The team's expertise in brand development and digital strategy is unmatched. They understood our vision and brought it to life in ways we never imagined possible.",
      author: "Michael Chen",
      position: "Founder, InnovateLab",
      avatar: "MC"
    },
    {
      text: "Creativision delivered exceptional results that exceeded our expectations. Their data-driven approach and creative execution made all the difference for our campaigns.",
      author: "Emily Rodriguez",
      position: "Marketing Director, GrowthCo",
      avatar: "ER"
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="team-header">
          <p className="team-intro">
            The Creativision team has worked alongside top
            <br />
            brands globally and are an <span className="highlight">extension</span> to your team
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.avatar}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-position">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;