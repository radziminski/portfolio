import React, { useContext } from 'react';
import TextContentContext from 'services/text-content';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import ProjectCard from 'components/ProjectCard';
import { FlexBox } from 'components/Box';

const PortfolioView: React.FC = () => {
  const {
    text: { sectionTitles }
  } = useContext(TextContentContext);

  return (
    <Section variant='dark' withLinker name='section-projects'>
      <FlexBox justifyContent='center'>
        <SectionTitle type='center'>{sectionTitles.projects}</SectionTitle>
      </FlexBox>
      <ProjectCard />
    </Section>
  );
};

export default PortfolioView;
