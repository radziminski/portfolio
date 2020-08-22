import styled from 'styled-components';
import { SocialsBarOrientation } from '.';

export interface SocialsListProps {
  orientation: SocialsBarOrientation;
}
export const SocialsList = styled.ul<SocialsListProps>(
  ({ theme, orientation }) => ({
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',

    '&:hover >:not(:hover)': {
      transform: 'scale(0.86)'
    }
  })
);

export const SocialsItem = styled.li<SocialsListProps>(
  ({ theme, orientation }) => ({
    margin: orientation === 'vertical' ? '14px 0' : ' 0 14px',
    transition: 'all 0.15s ease-in-out',

    '&:hover': {
      color: theme.colors.primary100,

      transform: 'scale(1.2)'
    }
  })
);
