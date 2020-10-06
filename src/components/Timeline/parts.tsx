import styled from 'styled-components';

export const TimelinePoint = styled.div<{ size?: number }>(
  ({ theme, size }) => ({
    display: 'flex',
    borderRadius: theme.borderRadius.fullCircle,
    width: size,
    height: size,
    backgroundColor: theme.colors.primary90
  })
);

export const TimelineLine = styled.div(({ theme }) => ({
  display: 'flex'
}));
