import React, { useEffect, useState } from 'react';
import './StatsTitle.css';

const StatsTitle: React.FC = () => {
  const [paddingTop, setPaddingTop] = useState(window.innerWidth < 768 ? 60 : 120);

  useEffect(() => {
    const handleScroll = () => {
      const initialPadding = window.innerWidth < 768 ? 60 : 120;
      const scrollPosition = window.scrollY;
      const newPaddingTop = Math.max(20, initialPadding - scrollPosition / 2);
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
        We <span className="highlight-craft">craft</span> visuals that connect, marketing that converts, and{' '}
        <span className="highlight-stories">stories that leave a <span className="highlight-legacy">legacy</span></span>
      </h2>
    </div>
  );
};

export default StatsTitle;
