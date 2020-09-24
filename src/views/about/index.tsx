import React from 'react';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

const AboutView: React.FC = () => {
  return (
    <Section variant='dark' withLinker>
      <SectionTitle type='left'>About Me</SectionTitle>
    </Section>
  );
};

export default AboutView;
