import React from 'react';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

const PortfolioView: React.FC = () => {
  return (
    <Section variant='dark' withLinker>
      <SectionTitle type='left'>Projects</SectionTitle>
    </Section>
  );
};

export default PortfolioView;
