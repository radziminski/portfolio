import React, { useContext } from 'react';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import TextContentContext from 'services/text-content';

const AboutView: React.FC = () => {
  const {
    text: { sectionTitles }
  } = useContext(TextContentContext);

  return (
    <Section variant='dark' withLinker>
      <SectionTitle type='left'>{sectionTitles.about}</SectionTitle>
    </Section>
  );
};

export default AboutView;
