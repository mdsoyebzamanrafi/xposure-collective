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
            <span className="title-gradient">Our Solutions</span>
          </h2>
          <p>
            We know what it takes to build a{' '}
            <span className="text-gradient">strong</span> brand presence
          </p>
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
              <div className="mockup-title">Branding</div>
            </div>
            <div className="mockup-content">
              <div className="brand-item">
                <div className="brand-color"></div>
                <div className="brand-text">Primary Brand Color</div>
              </div>
              <div className="brand-item">
                <div className="brand-color secondary"></div>
                <div className="brand-text">Secondary Color</div>
              </div>
              <div className="brand-item">
                <div className="brand-color accent"></div>
                <div className="brand-text">Accent Color</div>
              </div>
              <div className="brand-item">
                <div className="brand-color neutral"></div>
                <div className="brand-text">Neutral Color</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="solution-mockup analytics-mockup"
            style={{ rotate: rotateTransform }}
          >
            <div className="mockup-header">
              <div className="mockup-title">Analytics</div>
            </div>
            <div className="mockup-content">
              <div className="analytics-chart">
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar" style={{ height: '80%' }}></div>
                <div className="chart-bar" style={{ height: '45%' }}></div>
                <div className="chart-bar" style={{ height: '90%' }}></div>
                <div className="chart-bar" style={{ height: '70%' }}></div>
              </div>
              <div className="analytics-stats">
                <div className="stat-row">
                  <span>Conversion Rate</span>
                  <span>12.5%</span>
                </div>
                <div className="stat-row">
                  <span>Click Through Rate</span>
                  <span>8.2%</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="solution-mockup marketing-mockup"
            style={{ rotate: rotateTransform }}
          >
            <div className="mockup-header">
              <div className="mockup-title">Marketing</div>
            </div>
            <div className="mockup-content">
              <div className="campaign-item">
                <div className="campaign-icon"></div>
                <div className="campaign-details">
                  <div className="campaign-name">Social Media Campaign</div>
                  <div className="campaign-status active">Active</div>
                </div>
              </div>
              <div className="campaign-item">
                <div className="campaign-icon"></div>
                <div className="campaign-details">
                  <div className="campaign-name">Email Marketing</div>
                  <div className="campaign-status pending">Pending</div>
                </div>
              </div>
              <div className="campaign-item">
                <div className="campaign-icon"></div>
                <div className="campaign-details">
                  <div className="campaign-name">Content Strategy</div>
                  <div className="campaign-status completed">Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
