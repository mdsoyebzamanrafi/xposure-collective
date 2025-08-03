import React, { useState, useEffect, useRef } from 'react';
import './StatsSection.css';

const StatsSection: React.FC = () => {
  const [revenue, setRevenue] = useState(0);
  const [projects, setProjects] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateValue = (setter: React.Dispatch<React.SetStateAction<number>>, start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setter(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const node = statsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateValue(setRevenue, 0, 3, 2000);
            animateValue(setProjects, 0, 40, 2000);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number">${revenue}m+</div>
          <div className="stat-label">Client Revenue Generated</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{projects}+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
