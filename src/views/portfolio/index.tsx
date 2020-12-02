import React, { useContext, useState } from 'react';
import TextContentContext from 'services/text-content';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import ProjectCard from 'components/ProjectCard';
import { FlexBox } from 'components/Box';
import Button from 'components/Button';
import { LAYOUT_ORIENTATION_BREAKPOINT } from 'styles/breakpoints';

const PortfolioView: React.FC = () => {
  const {
    text: { sectionTitles },
    projects
  } = useContext(TextContentContext);
  const [shownProjectsNum, setShownProjectsNum] = useState(3);

  const showMoreProjects = () => {
    setShownProjectsNum((projectsNum) => projectsNum + 3);
  };

  const isMobile = window.innerWidth <= LAYOUT_ORIENTATION_BREAKPOINT;

  return (
    <Section variant='dark' withLinker name='section-projects'>
      <FlexBox justifyContent='center' marginBottom={!isMobile ? 20 : 0}>
        <SectionTitle type='center'>{sectionTitles.projects}</SectionTitle>
      </FlexBox>
      {projects.slice(0, shownProjectsNum).map((project, index) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          codeLink={project.githubLink}
          liveLink={project.liveLink}
          side={index % 2 ? 'right' : 'left'}
          image={project.image}
        />
      ))}
      {shownProjectsNum < projects.length && (
        <FlexBox justifyContent='center' marginTop={!isMobile ? 50 : 0}>
          <Button onClick={showMoreProjects}>Show More</Button>
        </FlexBox>
      )}
    </Section>
  );
};

export default PortfolioView;
