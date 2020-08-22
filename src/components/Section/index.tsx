import styled from 'styled-components';

export type SectionVariant = 'dark' | 'light';

export interface Props {
  variant: SectionVariant;
}

const Section = styled.div<Props>(({ theme, variant }) => ({
  padding: '50px 400px 110px 400px',
  backgroundColor:
    variant === 'light' ? theme.colors.dark50 : theme.colors.dark80
}));

export default Section;
