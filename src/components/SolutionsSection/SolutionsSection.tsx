import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SolutionsSection.css';

const SolutionsSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['80%', '0%']
  );

  const rotateTransform = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-15, 0]
  );

  const gapTransform = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['80px', '15px']
  );

  return (
    <section
      ref={targetRef}
      id="solutions"
      className="solutions-section"
    >
      <div className="solutions-header-container">
        <div className="solutions-header">
          <h2>
            Your Trusted Partner for <span style={{ color: '#fde047' }}>Fast & Reliable</span><br />Video Production
          </h2>
          <div className="header-cta">
            <button className="btn">Get in Touch</button>
          </div>
        </div>
      </div>
      <div className="solutions-sticky-container">
        <motion.div
          className="solutions-grid"
          style={{
            x: xTransform,
            gap: gapTransform,
          }}
        >
          <motion.div
            className="solution-mockup branding-mockup"
            style={{ rotate: rotateTransform }}
          >
            <div className="mockup-header">
              <div className="mockup-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <path d="M20 12H9" />
                  <path d="M17 17l3-5-3-5" />
                </svg>
              </div>
              <div className="mockup-title">Streamlined process</div>
            </div>
            <div className="mockup-content">
              <p>
                We bring strategy and production under one roof, keeping your
                brand's voice consistent and strong. Our integrated approach saves you time and ensures a cohesive final product, from initial concept to final delivery.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="solution-mockup analytics-mockup"
            style={{ rotate: rotateTransform }}
          >
            <div className="mockup-header">
              <div className="mockup-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="mockup-title">Global coverage</div>
            </div>
            <div className="mockup-content">
              <p>
                Our crew covers 80+ cities worldwide, offering accessible,
                convenient services to clients everywhere. No matter where you are, we have a team ready to bring your vision to life with local expertise and global quality standards.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="solution-mockup marketing-mockup"
            style={{ rotate: rotateTransform }}
          >
            <div className="mockup-header">
              <div className="mockup-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                </svg>
              </div>
              <div className="mockup-title">Scalable solutions</div>
            </div>
            <div className="mockup-content">
              <p>
                Our scalable solutions ensure your content stays top-tier,
                whether you need one video or a hundred. We adapt to your needs, providing the same high-quality production for single projects or large-scale video campaigns.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
