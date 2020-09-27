import React from 'react';
import HomeView from 'views/home';
import AboutView from 'views/about';
import SkillsView from 'views/skills';
import PortfolioView from 'views/portfolio';
import ExperienceView from 'views/experiance';
import ContactView from 'views/contact';
import Footer from 'views/footer';

const LandingPage: React.FC = () => {
  return (
    <>
      <HomeView />
      <AboutView />
      <SkillsView />
      <PortfolioView />
      <ExperienceView />
      <ContactView />
      <Footer />
    </>
  );
};

export default LandingPage;
