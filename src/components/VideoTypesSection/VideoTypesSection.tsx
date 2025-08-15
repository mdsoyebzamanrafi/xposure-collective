import React from 'react';
import './VideoTypesSection.css';

const videoTypes = [
  { name: 'Product Videos', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'About Us Videos', image: 'https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Explainer Videos', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Testimonial Videos', image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Video Ads', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Animated Videos', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Crowdfunding Videos', image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Event Videos', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Tutorial Videos', image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const VideoTypesSection: React.FC = () => {
  return (
    <section className="video-types-section">
      <div className="container">
        <div className="video-types-header">
          <h2 className="section-title">Create any video, with one partner.</h2>
          <p className="section-subtitle">View our past work to find inspiration for your own video content.</p>
        </div>
        <div className="video-types-grid">
          {videoTypes.map((video) => (
            <div key={video.name} className="video-type-card" style={{ backgroundImage: `url(${video.image})` }}>
              <div className="card-overlay">
                <h3>{video.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTypesSection;
