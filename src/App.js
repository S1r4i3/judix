import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import InfoSection from './components/InfoSection';
import FeaturesSection from './components/FeaturesSection';
import ExpertConsultationSection from './components/ExpertConsultationSection';
import TestimonialSection from './components/TestimonialSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <InfoSection />
      <FeaturesSection />
      <ExpertConsultationSection />
      <TestimonialSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default App;
