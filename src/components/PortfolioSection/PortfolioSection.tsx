import React, { useState, useEffect, useRef, useMemo } from 'react';
import './PortfolioSection.css';

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Retail & Ecommerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop',
    category: 'retail'
  },
  {
    id: 2,
    title: 'Professional Services',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
    category: 'professional'
  },
  {
    id: 3,
    title: 'Software & Tech',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
    category: 'tech'
  },
  {
    id: 4,
    title: 'Medical & Biotech',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
    category: 'medical'
  },
  {
    id: 5,
    title: 'Education',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
    category: 'education'
  },
  {
    id: 6,
    title: 'Health & Fitness',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
    category: 'fitness'
  },
  {
    id: 7,
    title: 'Travel & Hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop',
    category: 'travel'
  },
  {
    id: 8,
    title: 'Beauty & Fashion',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop',
    category: 'beauty'
  },
  {
    id: 9,
    title: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop',
    category: 'food'
  },
  {
    id: 10,
    title: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop',
    category: 'realestate'
  },
  {
    id: 11,
    title: 'Automotive',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=200&fit=crop',
    category: 'automotive'
  },
  {
    id: 12,
    title: 'Media & Tape Production',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=200&fit=crop',
    category: 'media'
  }
];

const PortfolioSection: React.FC = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const itemRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);

  // Memoize the duplicated items array for performance
  const duplicatedItems = useMemo(() => [...portfolioItems, ...portfolioItems, ...portfolioItems], []);

  // Effect to dynamically measure the item width + gap
  useEffect(() => {
    if (itemRef.current && scrollContainerRef.current) {
      const containerStyle = window.getComputedStyle(scrollContainerRef.current);
      const gap = parseFloat(containerStyle.gap) || 20; // Fallback to 20 if gap is not readable
      setItemWidth(itemRef.current.offsetWidth + gap);
    }
  }, [duplicatedItems]);

  // Auto-scroll animation
  useEffect(() => {
    if (isAutoPlaying && !isDragging && itemWidth > 0) {
      const animate = () => {
        setTranslateX(prev => {
          const newTranslateX = prev - 0.5; // Slow motion speed
          // Reset when we've scrolled through one full set
          if (Math.abs(newTranslateX) >= portfolioItems.length * itemWidth) {
            return 0;
          }
          return newTranslateX;
        });
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoPlaying, isDragging, itemWidth, portfolioItems.length]);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(e.clientX);
    setCurrentX(translateX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setTranslateX(currentX + deltaX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoPlaying(true), 2000); // Resume after 2 seconds
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(e.touches[0].clientX);
    setCurrentX(translateX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setTranslateX(currentX + deltaX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoPlaying(true), 2000); // Resume after 2 seconds
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2>We've delivered results for companies in every industry.</h2>
        </div>

        <div 
          className="portfolio-slideshow"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            ref={scrollContainerRef}
            className="portfolio-scroll-container"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: isDragging ? 'none' : 'transform 0.1s ease-out'
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="portfolio-item"
                ref={index === 0 ? itemRef : null}
              >
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <span className="portfolio-category">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default PortfolioSection;
