import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './XposureSection.css';
import outlineImg from '../../assets/outline.png';
import xxImg from '../../assets/XX.png';

const textContent = [
  {
    title: 'Hourglass & Playhead',
    description: 'Symbolizing time & precision in production.',
  },
  {
    title: 'Exposure is a triangle:',
    description: 'Shutter speed, aperture, ISO Balancing each element.',
  },
  {
    title: 'Negative Space X',
    description: 'Where the guides, art, and X meet.',
  },
  {
    title: 'At Xposure Collective, our name is no coincidence',
    description: 'The "X" in our symbol marks the intersection where creativity, precision, and vision converge.',
  },
];

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.5 },
  },
};

const outlineVariants = {
  hidden: { opacity: 0, x: -200, rotateY: -90 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 1, ease: 'easeOut' as const },
  },
};

const xxVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, delay: 1, ease: 'easeOut' as const },
  },
};

const XposureSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="xposure-section" ref={ref}>
      <div className="xposure-content">
        <motion.div
          className="xposure-text"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {textContent.map((item) => (
            <div key={item.title} className="text-item">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </motion.div>
        <div className="xposure-image-container">
          <motion.img
            src={outlineImg}
            alt="Outline"
            className="outline-image"
            variants={outlineVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          />
          <motion.img
            src={xxImg}
            alt="XX"
            className="xx-image"
            variants={xxVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          />
        </div>
      </div>
    </section>
  );
};

export default XposureSection;
