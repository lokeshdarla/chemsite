import React from 'react';
import {
  HeroSection,
  CurrentResearch,
  AreaOfResearch,
  FAQSection,
  PublicationsHome,
  ContactHome
} from '../components/Home-Components';

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <CurrentResearch/>
      <AreaOfResearch/>
      <PublicationsHome />
      <FAQSection />
      <ContactHome/>
    </>
  );
};

export default HomePage;
