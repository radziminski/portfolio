import React, { useContext } from 'react';
import TextContentContext from 'services/text-content';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import Box from 'components/Box';
import Timeline from 'components/Timeline';
import AnimatedInView from 'components/AnimatedInView';
import { REGULAR_ANIMATION_TIME_S } from 'app-constants/animations';

const ExperienceView: React.FC = () => {
  const {
    text: { sectionTitles },
    eduAndExp
  } = useContext(TextContentContext);

  return (
    <Section variant='light' withLinker name='section-experience'>
      <AnimatedInView
        animation={`move-in-right-short ${REGULAR_ANIMATION_TIME_S}s ease-out`}
      >
        <SectionTitle type='left'>{sectionTitles.experience}</SectionTitle>
      </AnimatedInView>
      <Box paddingY={12}>
        <AnimatedInView
          animation={`fade-in ${REGULAR_ANIMATION_TIME_S}s ease-out`}
          rootMarginY={0}
        >
          <Timeline points={eduAndExp} />
        </AnimatedInView>
      </Box>

      <Box display='flex' justifyContent='flex-end'>
        <AnimatedInView
          animation={`move-in-left-short ${REGULAR_ANIMATION_TIME_S}s ease-out`}
          rootMarginY={0}
        >
          <SectionTitle type='left'>{sectionTitles.education} </SectionTitle>{' '}
        </AnimatedInView>
      </Box>
    </Section>
  );
};

export default ExperienceView;
