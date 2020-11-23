import React, { useContext, useMemo } from 'react';
import TextContentContext from 'services/text-content';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import Box from 'components/Box';
import GridPicker from 'components/GridPicker';
import {
  getValueForDevice,
  LAYOUT_ORIENTATION_BREAKPOINT
} from 'styles/breakpoints';

const columns = ['Web Technologies:', 'Other Technologies:'];

const SkillsView: React.FC = () => {
  const {
    text: { sectionTitles },
    skills
  } = useContext(TextContentContext);

  const leftPadding = getValueForDevice({
    desktopLarge: 150,
    laptopLarge: 125,
    laptopSmall: 110,
    tabLarge: 100,
    tabSmall: 0
  });

  const titleY = getValueForDevice({
    desktopLarge: '-60%',
    laptopSmall: '-60%',
    tabLarge: '-90%'
  });

  const titleX = getValueForDevice({
    desktopLarge: '-25%',
    laptopSmall: '-25%',
    tabLarge: '-30%',
    tabMedium: '-38%'
  });

  const rotatedTitle = useMemo(
    () => (
      <Box
        position='absolute'
        top='50%'
        left='0'
        transform={`translate(${titleX}, ${titleY})`}
      >
        <Box transform={'rotate(-90deg)'}>
          <SectionTitle type='left'>{sectionTitles.skills}</SectionTitle>
        </Box>
      </Box>
    ),
    [sectionTitles.skills, titleX, titleY]
  );
  const normalTitle = useMemo(
    () => (
      <Box marginBottom={8}>
        <SectionTitle type='left'>{sectionTitles.skills}</SectionTitle>
      </Box>
    ),
    [sectionTitles.skills]
  );

  return (
    <Section variant='light' withLinker name='section-skills'>
      <Box paddingLeft={leftPadding} position='relative'>
        {window.innerWidth > LAYOUT_ORIENTATION_BREAKPOINT
          ? rotatedTitle
          : normalTitle}
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
