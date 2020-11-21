import React, { useContext } from 'react';
import TextContentContext from 'services/text-content';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import Box from 'components/Box';
import GridPicker from 'components/GridPicker';
import { getValueForDevice } from 'styles/breakpoints';

const LEFT_PADDING = getValueForDevice({
  desktopLarge: 150,
  laptopLarge: 125,
  laptopSmall: 110
});

const TITLE_LEFT = getValueForDevice({
  desktopLarge: '-60%',
  laptopSmall: '-60%',
  tabLarge: '-100%'
});

const columns = ['Web Technologies:', 'Other Technologies:'];

const SkillsView: React.FC = () => {
  const {
    text: { sectionTitles },
    skills
  } = useContext(TextContentContext);

  return (
    <Section variant='light' withLinker>
      <Box paddingLeft={LEFT_PADDING} position='relative'>
        <Box
          position='absolute'
          top='50%'
          left='0'
          transform={`rotate(-90deg) translate(10px, ${TITLE_LEFT})`}
        >
          <SectionTitle type='left'>{sectionTitles.skills}</SectionTitle>
        </Box>
        <GridPicker
          columns={columns}
          gridItems={skills.main.map((skill) => ({
            ...skill,
            column: skill.type === 'web' ? columns[0] : columns[1]
          }))}
          initiallySelectedElement={5}
        />
      </Box>
    </Section>
  );
};

export default SkillsView;
