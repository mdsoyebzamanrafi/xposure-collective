import React, { useState } from 'react';
import './FAQSection.css';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What services does Creativision offer?",
      answer: "We offer comprehensive digital marketing services including branding, web development, social media marketing, SEO, content creation, advertising campaigns, and strategic consulting to help businesses grow their online presence."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A basic website might take 2-4 weeks, while comprehensive branding and marketing campaigns can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes! We work with startups, small businesses, and large enterprises. Our scalable solutions are designed to meet the unique needs and budgets of businesses at every stage of growth."
    },
    {
      question: "What makes Creativision different from other agencies?",
      answer: "Our data-driven approach combined with creative excellence sets us apart. We focus on measurable results, transparent communication, and building long-term partnerships with our clients rather than just completing projects."
    },
    {
      question: "Can you help improve our existing marketing efforts?",
      answer: "Absolutely! We offer marketing audits and optimization services to improve your existing campaigns. We'll analyze your current performance and provide actionable recommendations to boost your ROI."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on scope, timeline, and specific requirements. We offer transparent pricing with no hidden fees and provide detailed proposals outlining all costs upfront."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various maintenance and support packages to ensure your digital assets continue performing optimally. This includes updates, monitoring, and ongoing optimization services."
    },
    {
      question: "How do you measure success?",
      answer: "We establish clear KPIs and success metrics at the project start, including website traffic, conversion rates, engagement metrics, and ROI. We provide regular reports showing progress against these goals."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Got questions? We've got <span className="highlight">answers</span>
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <div className="faq-icon">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none"
                    className={activeIndex === index ? 'rotated' : ''}
                  >
                    <path 
                      d="M5 7.5L10 12.5L15 7.5" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              
              <div className="faq-answer">
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have questions?</p>
          <button className="contact-btn">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;