import React from 'react';
import './App.css';
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

function App() {
  return (
    <div className="App">
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
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
