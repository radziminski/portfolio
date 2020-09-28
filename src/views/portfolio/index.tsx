import React, { useContext } from 'react';
import TextContentContext from 'services/text-content';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

const PortfolioView: React.FC = () => {
  const {
    text: { sectionTitles }
  } = useContext(TextContentContext);

  return (
    <Section variant='dark' withLinker>
      <SectionTitle type='left'>{sectionTitles.projects}</SectionTitle>
    </Section>
  );
};

export default PortfolioView;
