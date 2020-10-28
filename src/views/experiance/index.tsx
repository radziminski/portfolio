import React, { useContext } from 'react';
import TextContentContext from 'services/text-content';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import Box from 'components/Box';
import Timeline from 'components/Timeline';

const ExperienceView: React.FC = () => {
  const {
    text: { sectionTitles },
    eduAndExp
  } = useContext(TextContentContext);

  return (
    <Section variant='light' withLinker>
      <SectionTitle type='left'>{sectionTitles.experience} </SectionTitle>
      <Box paddingY={12}>
        <Timeline points={eduAndExp} />
      </Box>

      <Box display='flex' justifyContent='flex-end'>
        <SectionTitle type='left'>{sectionTitles.education} </SectionTitle>
      </Box>
    </Section>
  );
};

export default ExperienceView;
