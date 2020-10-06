import React, { useContext } from 'react';
import TextContentContext from 'services/text-content';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import Box from 'components/Box';
import GridPicker from 'components/GridPicker';

const LEFT_PADDING = 150;

const SkillsView: React.FC = () => {
  const {
    text: { sectionTitles }
  } = useContext(TextContentContext);

  return (
    <Section variant='light' withLinker>
      <Box paddingLeft={LEFT_PADDING} position='relative'>
        <Box
          position='absolute'
          top='50%'
          left='0'
          transform='rotate(-90deg) translate(10px, -60%)'
        >
          <SectionTitle type='left'>{sectionTitles.skills}</SectionTitle>
        </Box>
        <GridPicker />
      </Box>
    </Section>
  );
};

export default SkillsView;
