import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './XposureSection.css';
import outlineImg from '../../assets/outline.png';
import xxImg from '../../assets/XX.png';

const XposureSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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

  return (
    <section className="xposure-section" ref={ref}>
      <div className="xposure-content">
        <motion.div
          className="xposure-text"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {textContent.map((item, index) => (
            <div key={index} className="text-item">
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
            initial={{ opacity: 0, x: -200, rotateY: -90 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <motion.img
            src={xxImg}
            alt="XX"
            className="xx-image"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
          />
        </div>
      </div>
    </section>
  );
};

export default XposureSection;
