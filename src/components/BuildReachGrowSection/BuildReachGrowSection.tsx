import React from 'react';
import './BuildReachGrowSection.css';

const BuildReachGrowSection: React.FC = () => {
  return (
    <section className="build-reach-grow-section">
      <div className="brg-background">
        <div className="brg-gradient"></div>
        <div className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
          <div className="floating-element element-4"></div>
          <div className="floating-element element-5"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="brg-content">
          <div className="brg-text">
            <div className="brg-words">
              <div className="brg-word build">
                <span className="word-text">Build</span>
                <div className="word-3d">
                  <div className="cube">
                    <div className="face front">B</div>
                    <div className="face back">B</div>
                    <div className="face right">U</div>
                    <div className="face left">I</div>
                    <div className="face top">L</div>
                    <div className="face bottom">D</div>
                  </div>
                </div>
              </div>
              
              <div className="brg-word reach">
                <span className="word-text">Reach</span>
                <div className="word-3d">
                  <div className="sphere">
                    <div className="sphere-inner"></div>
                  </div>
                </div>
              </div>
              
              <div className="brg-word grow">
                <span className="word-text">Grow</span>
                <div className="word-3d">
                  <div className="pyramid">
                    <div className="pyramid-face face1"></div>
                    <div className="pyramid-face face2"></div>
                    <div className="pyramid-face face3"></div>
                    <div className="pyramid-face face4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="brg-description">
            <p>Transform your digital presence with our comprehensive approach to brand building, audience expansion, and sustainable growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildReachGrowSection;