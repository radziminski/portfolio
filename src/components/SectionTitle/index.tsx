import styled from 'styled-components';

interface Props {
  type?: 'left' | 'center' | 'right';
}

export const SectionTitle = styled.h2<Props>(({ theme, type = 'left' }) => ({
  fontSize: theme.fontSizes[8],
  paddingLeft: type === 'left' ? '55px' : type === 'center' ? '45px' : 0,
  paddingRight: type === 'right' ? '55px' : type === 'center' ? '45px' : 0,
  margin: 0,
  textAlign: type,
  position: 'relative',
  fontWeight: 500,
  color: theme.colors.primary100,
  display: type === 'center' ? 'inline-block' : 'block',

  '::after': {
    // eslint-disable-next-line quotes
    content: `''`,
    display: 'block',
    position: 'absolute',
    left: type !== 'right' ? 0 : 'auto',
    right: type === 'right' ? 0 : 'auto',
    top: '50%',
    transform: 'translate(0, -50%)',
    backgroundColor: theme.colors.primary100,
    height: '3px',
    width: type === 'center' ? '35px' : '40px'
  },

  '::before':
    type === 'center'
      ? {
          // eslint-disable-next-line quotes
          content: `''`,
          display: 'block',
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translate(0, -50%)',
          backgroundColor: theme.colors.primary100,
          height: '3px',
          width: '35px'
        }
      : undefined
}));

export default SectionTitle;
