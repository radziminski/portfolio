import React, { useContext } from 'react';
import TextContentContext from 'services/text-content';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

const ExperienceView: React.FC = () => {
  const {
    text: { sectionTitles }
  } = useContext(TextContentContext);

  return (
    <Section variant='light' withLinker>
      <SectionTitle type='left'>{sectionTitles.experience}</SectionTitle>
    </Section>
  );
};

export default ExperienceView;
