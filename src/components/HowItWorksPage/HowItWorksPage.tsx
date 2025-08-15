import React from 'react';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import BenefitsSection from '../BenefitsSection/BenefitsSection';
import ProductionProcessSection from '../ProductionProcessSection/ProductionProcessSection';
import VideoTypesSection from '../VideoTypesSection/VideoTypesSection';
import CtaSection from '../CtaSection/CtaSection';
import FAQSection from '../FAQSection/FAQSection';
import './HowItWorksPage.css';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="how-it-works-page">
      <Header />
      <HeroSection 
        title="Creating videos has never been easier"
        description="We handle the hard work, so you don’t have to. From concept to completion, our production process makes creating videos easy and effective."
        primaryButtonText="Get in Touch"
        showTag={true}
        tagText="How-It-Works"
      />
      <BenefitsSection />
      <ProductionProcessSection />
      <VideoTypesSection />
      <CtaSection />
      <FAQSection page="how-it-works" />
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
