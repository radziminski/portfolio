import { animations } from './animations';
import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const baseFontFamily = 'Poppins';

const globalStyles = css`
  html {
    font-size: 100%;
    background-color: ${({ theme }) => theme.colors.dark50};
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${baseFontFamily}, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.dark50};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

const defaultStylesReset = css`
  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  input,
  textarea,
  button,
  select {
    font-family: ${baseFontFamily}, sans-serif;
    border-radius: 0;
    box-sizing: border-box;
  }

  button {
    padding: 0;
    font-size: 14px;
    cursor: pointer;
    background: none;
    border: 0;
    &:focus,
    &:active {
      outline: 0;
    }
  }

  a,
  input,
  textarea,
  select {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    &:focus,
    &:active {
      outline: 0;
    }
    text-decoration: none;
    color: inherit;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${globalStyles}
  ${defaultStylesReset}
  ${animations}
`;
