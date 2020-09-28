import React, { useContext } from 'react';
import TextContentContext from 'services/text-content';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

const SkillsView: React.FC = () => {
  const {
    text: { sectionTitles }
  } = useContext(TextContentContext);

  return (
    <Section variant='light' withLinker>
      <SectionTitle type='left'>{sectionTitles.skills}</SectionTitle>
    </Section>
  );
};

export default SkillsView;
