import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import StatsTitle from './components/StatsTitle/StatsTitle';
import StatsSection from './components/StatsSection/StatsSection';
import XposureSection from './components/XposureSection/XposureSection';
import SolutionsSection from './components/SolutionsSection/SolutionsSection';
import ProcessSection from './components/ProcessSection/ProcessSection';
import CTASection from './components/CTASection/CTASection';
import CustomerSection from './components/CustomerSection/CustomerSection';
import TeamSection from './components/TeamSection/TeamSection';
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
      <XposureSection />
      <SolutionsSection />
      <ProcessSection />
        <CTASection />
        <CustomerSection />
        <TeamSection />
        <BuildReachGrowSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
