import React from 'react';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

const SkillsView: React.FC = () => {
  return (
    <Section variant='light' withLinker>
      <SectionTitle type='left'>My Skills</SectionTitle>
    </Section>
  );
};

export default SkillsView;
