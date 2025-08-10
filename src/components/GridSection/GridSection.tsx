import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './GridSection.css';
import outline from '../../assets/outline.png';
import outline2 from '../../assets/outline2.png';
import xx from '../../assets/XX.png';
import marker from '../../assets/marker.png';
import pillars from '../../assets/pillars.png';

const GridSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const item2Ref = useRef<HTMLDivElement>(null);
  const item1Ref = useRef<HTMLDivElement>(null);
  const item3Ref = useRef<HTMLDivElement>(null);
  const item4Ref = useRef<HTMLDivElement>(null);
  const item5Ref = useRef<HTMLDivElement>(null);
  const item6Ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(item2Ref, { once: true });
  const isItem1InView = useInView(item1Ref, { once: true });
  const isItem4InView = useInView(item4Ref, { once: true });
  const isItem5InView = useInView(item5Ref, { once: true });

  const [positions, setPositions] = useState({
    pos2: { x: 0, y: 0 },
    pos3: { x: 0, y: 0 },
    pos6: { x: 0, y: 0 },
  });

  useLayoutEffect(() => {
    if (item2Ref.current && item3Ref.current && item6Ref.current && gridContainerRef.current) {
      const containerRect = gridContainerRef.current.getBoundingClientRect();
      const rect2 = item2Ref.current.getBoundingClientRect();
      const rect3 = item3Ref.current.getBoundingClientRect();
      const rect6 = item6Ref.current.getBoundingClientRect();
      setPositions({
        pos2: { x: rect2.left - containerRect.left, y: rect2.top - containerRect.top },
        pos3: { x: rect3.left - containerRect.left, y: rect3.top - containerRect.top },
        pos6: { x: rect6.left - containerRect.left, y: rect6.top - containerRect.top },
      });
    }
  }, []);

  const x = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.9], [positions.pos2.x, positions.pos3.x, positions.pos3.x, positions.pos6.x]);
  const y = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.9], [positions.pos2.y, positions.pos3.y, positions.pos3.y, positions.pos6.y]);
  const rotateY = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.9], [0, 180, 180, 360]);
  const xxOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.8, 0.9], [1, 0, 0, 0, 0]);
  const markerOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.7, 0.9], [0, 1, 1, 0.6, 0]);
  const pillarsOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  const overlayVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 2 } },
  };

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  const textVariantsRight = {
    hidden: { x: 100, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  const gridItems = [
    {
      id: 1,
      color: 'transparent',
      text: (
        <div className="grid-item-text-container">
          <motion.div custom={0} initial="hidden" animate={isItem1InView ? 'visible' : 'hidden'} variants={textVariants}>
            <p className="text-gold">Hourglass & Playhead</p>
            <p className="text-white">Symbolizing time & precision in production.</p>
          </motion.div>
          <motion.div custom={1} initial="hidden" animate={isItem1InView ? 'visible' : 'hidden'} variants={textVariants}>
            <p className="text-gold">Exposure is a triangle:</p>
            <p className="text-white">Shutter speed, aperture, ISO<br />Balancing each element.</p>
          </motion.div>
          <motion.div custom={2} initial="hidden" animate={isItem1InView ? 'visible' : 'hidden'} variants={textVariants}>
            <p className="text-gold">Negative Space X</p>
            <p className="text-white">Where the guides, art, and X meet.</p>
          </motion.div>
          <motion.div custom={3} initial="hidden" animate={isItem1InView ? 'visible' : 'hidden'} variants={textVariants}>
            <p className="text-gold">At Xposure Collective, our name is no coincidence</p>
            <p className="text-white">The "X" in our symbol marks the intersection where creativity, precision, and vision converge.</p>
          </motion.div>
        </div>
      ),
      ref: item1Ref,
    },
    { id: 2, color: 'transparent', text: 'Row 1, Col 2', ref: item2Ref },
    { id: 3, color: 'transparent', text: 'Row 2, Col 1', ref: item3Ref },
    {
      id: 4,
      color: 'transparent',
      text: (
        <div className="grid-item-text-container">
          <motion.div custom={0} initial="hidden" animate={isItem4InView ? 'visible' : 'hidden'} variants={textVariantsRight}>
            <p className="text-gold">Timeline Marker</p>
            <p className="text-white">The moment of choice, where cuts are made, stories shift, and the vision moves forward.</p>
          </motion.div>
          <motion.div custom={1} initial="hidden" animate={isItem4InView ? 'visible' : 'hidden'} variants={textVariantsRight}>
            <p className="text-gold">The Chevron Shield</p>
            <p className="text-white">The shield represents a creative alliance, where editors, designers, filmmakers, and storytellers meet under one vision.</p>
          </motion.div>
        </div>
      ),
      ref: item4Ref,
    },
    {
      id: 5,
      color: 'transparent',
      text: (
        <div className="grid-item-text-container">
          <motion.div custom={0} initial="hidden" animate={isItem5InView ? 'visible' : 'hidden'} variants={textVariants}>
            <p className="text-gold">Foundation Pillars</p>
            <p className="text-white">At the base of our identity, these lines show the unseen strength of Xposure Collective. They support every idea, cut, and frame with purpose.</p>
          </motion.div>
          <motion.div custom={1} initial="hidden" animate={isItem5InView ? 'visible' : 'hidden'} variants={textVariants}>
            <p className="text-gold">Team Structure</p>
            <p className="text-white">As support beams, these pillars represents the team structure and collaboration (collective).</p>
          </motion.div>
          <motion.div custom={2} initial="hidden" animate={isItem5InView ? 'visible' : 'hidden'} variants={textVariants}>
            <p className="text-gold">The Warriors Helmet</p>
            <p className="text-white">Symbolized for the strength and unity at Xposure Collective.</p>
          </motion.div>
        </div>
      ),
      ref: item5Ref,
    },
    { id: 6, color: 'transparent', text: 'Row 3, Col 2', ref: item6Ref },
  ];

  return (
    <div className="grid-section" ref={scrollRef}>
      <div className="grid-container" ref={gridContainerRef}>
        {gridItems.map((item) => (
          <div
            key={item.id}
            ref={item.ref}
            className="grid-item"
            style={{ backgroundColor: item.color }}
          >
            {item.text}
          </div>
        ))}
        <motion.div
          className="overlay-container"
          style={{ x, y }}
          variants={overlayVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="image-stack"
            style={{ rotateY }}
          >
            <img src={outline2} alt="outline back" className="overlay-image-back" />
            <img src={outline} alt="outline front" className="overlay-image-front" />
            <motion.img 
              src={xx} 
              alt="xx overlay" 
              className="overlay-image-xx" 
              style={{ opacity: xxOpacity }}
            />
            <motion.img
              src={marker}
              alt="marker overlay"
              className="overlay-image-marker"
              style={{ opacity: markerOpacity }}
            />
            <motion.img
              src={pillars}
              alt="pillars overlay"
              className="overlay-image-pillars"
              style={{ opacity: pillarsOpacity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GridSection;
