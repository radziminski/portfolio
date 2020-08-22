import styled, { CSSProperties, DefaultTheme } from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  system,
  textShadow,
  TextShadowProps,
  typography,
  TypographyProps as TypographyPropsStyledSystem,
  variant
} from 'styled-system';

export type TextProps = TypographyPropsStyledSystem &
  SpaceProps &
  LayoutProps &
  BorderProps &
  TextShadowProps &
  ColorProps<DefaultTheme> &
  Pick<
    CSSProperties,
    'whiteSpace' | 'textOverflow' | 'direction' | 'textTransform'
  >;

const composed = compose(
  border,
  textShadow,
  typography,
  space,
  color,
  layout,
  system({
    textOverflow: true,
    whiteSpace: true,
    direction: true,
    textTransform: true
  })
);

const Text = styled.div<TextProps>(
  (props) => composed(props),
  variant({ scale: 'textVariants' })
);

export default Text;
