import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SolutionsSection.css';
import { useModal } from '../../contexts/ModalContext';

interface Solution {
  id: string;
  title: string;
  description: string;
  mockupClass: string;
}

const solutions: Solution[] = [
  {
    id: 'streamlined',
    title: 'Streamlined process',
    description: "We bring strategy and production under one roof, keeping your brand's voice consistent and strong. Our integrated approach saves you time and ensures a cohesive final product, from initial concept to final delivery.",
    mockupClass: 'branding-mockup',
  },
  {
    id: 'global',
    title: 'Global coverage',
    description: 'Our crew covers 80+ cities worldwide, offering accessible, convenient services to clients everywhere. No matter where you are, we have a team ready to bring your vision to life with local expertise and global quality standards.',
    mockupClass: 'analytics-mockup',
  },
  {
    id: 'scalable',
    title: 'Scalable solutions',
    description: 'Our scalable solutions ensure your content stays top-tier, whether you need one video or a hundred. We adapt to your needs, providing the same high-quality production for single projects or large-scale video campaigns.',
    mockupClass: 'marketing-mockup',
  },
];

const Icon: React.FC<{ id: string }> = ({ id }) => {
  const icons: { [key: string]: React.ReactNode } = {
    streamlined: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7h-9" />
        <path d="M14 17H5" />
        <path d="M20 12H9" />
        <path d="M17 17l3-5-3-5" />
      </svg>
    ),
    global: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    scalable: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
  };
  return <div className="mockup-logo">{icons[id]}</div>;
};

const SolutionsSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { openContactModal } = useModal();

  const handleGetInTouchClick = () => {
    openContactModal();
  };
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const xTransform = useTransform(scrollYProgress, [0, 0.5], ['80%', '0%']);
  const rotateTransform = useTransform(scrollYProgress, [0, 0.5], [-15, 0]);
  const gapTransform = useTransform(scrollYProgress, [0, 0.5], ['80px', '15px']);

  return (
    <section ref={targetRef} id="solutions" className="solutions-section">
      <div className="solutions-header-container">
        <div className="solutions-header">
          <h2>
            Your Trusted Partner for <span style={{ color: '#9e8960' }}>Fast & Reliable</span><br />Video Production & Marketing
          </h2>
          <div className="header-cta">
            <button className="btn" onClick={handleGetInTouchClick}>Get in Touch</button>
          </div>
        </div>
      </div>
      <div className="solutions-sticky-container">
        {isMobile ? (
          <div className="solutions-grid">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className={`solution-mockup ${solution.mockupClass}`}
              >
                <div className="mockup-header">
                  <Icon id={solution.id} />
                  <div className="mockup-title">{solution.title}</div>
                </div>
                <div className="mockup-content">
                  <p>{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div className="solutions-grid" style={{ x: xTransform, gap: gapTransform }}>
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                className={`solution-mockup ${solution.mockupClass}`}
                style={{ rotate: rotateTransform }}
              >
                <div className="mockup-header">
                  <Icon id={solution.id} />
                  <div className="mockup-title">{solution.title}</div>
                </div>
                <div className="mockup-content">
                  <p>{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

    </section>
  );
};

export default SolutionsSection;
