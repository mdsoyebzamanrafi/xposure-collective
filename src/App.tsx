import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './styles/global.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import StatsTitle from './components/StatsTitle/StatsTitle';
import StatsSection from './components/StatsSection/StatsSection';
import GridSection from './components/GridSection/GridSection';
import SolutionsSection from './components/SolutionsSection/SolutionsSection';
import ProcessSection from './components/ProcessSection/ProcessSection';
import StudioSection from './components/StudioSection/StudioSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import BuildReachGrowSection from './components/BuildReachGrowSection/BuildReachGrowSection';
import FAQSection from './components/FAQSection/FAQSection';
import Footer from './components/Footer/Footer';
import HowItWorksPage from './components/HowItWorksPage/HowItWorksPage';
import { ModalProvider, useModal } from './contexts/ModalContext';
import ContactFormModal from './components/ContactFormModal/ContactFormModal';

const AppContent: React.FC = () => {
  const { isContactModalOpen, closeContactModal } = useModal();

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main>
                <HeroSection />
                <StatsTitle />
                <StatsSection />
                <GridSection />
                <SolutionsSection />
                <ProcessSection />
                <StudioSection />
                <PortfolioSection />
                <BuildReachGrowSection />
                <FAQSection page="main" />
              </main>
              <Footer />
            </>
          } />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
        </Routes>
      </div>
      
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </Router>
  );
}

export default App;
