import React, { useEffect, useState } from 'react';
import './StatsTitle.css';

const StatsTitle: React.FC = () => {
  const [paddingTop, setPaddingTop] = useState(120);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newPaddingTop = Math.max(20, 120 - scrollPosition / 2);
      setPaddingTop(newPaddingTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="stats-title-container"
      style={{ paddingTop: `${paddingTop}px` }}
    >
      <h2 className="stats-title-text">
        We <span className="highlight-golden">clarify</span> your brand
        messaging and help you{' '}
        <span className="highlight-golden">reach the right audience</span>
      </h2>
    </div>
  );
};

export default StatsTitle;
