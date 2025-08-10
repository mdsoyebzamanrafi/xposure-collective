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
      question: "What video production services does Xposure Collective offer?",
      answer: "We offer comprehensive video production services including pre-production strategy, professional filming, post-production editing, motion graphics, corporate videos, marketing content, and brand storytelling to help businesses create compelling visual narratives."
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
      question: "What makes Xposure Collective different from other video production companies?",
      answer: "Our streamlined process and global coverage set us apart. We bring strategy and production under one roof, offer services in 80+ cities worldwide, and focus on scalable solutions with transparent communication and measurable results."
    },
    {
      question: "Can you help improve our existing video content?",
      answer: "Absolutely! We offer video content audits and enhancement services to improve your existing materials. We'll analyze your current video performance and provide actionable recommendations to boost engagement and conversion rates."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on scope, timeline, and specific requirements. We offer transparent pricing with no hidden fees and provide detailed proposals outlining all costs upfront."
    },
    {
      question: "Do you provide ongoing support after video project completion?",
      answer: "Yes, we offer various support packages including video updates, performance monitoring, content optimization, and ongoing video marketing consultation to ensure your content continues delivering results."
    },
    {
      question: "How do you measure video project success?",
      answer: "We establish clear KPIs and success metrics at the project start, including video engagement rates, view completion rates, conversion metrics, and brand awareness impact. We provide detailed analytics and reports showing your video's performance."
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