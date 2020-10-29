import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    background-color: #fff5f2;
    overflow-x: hidden;
    margin: 0;
    font-family: "Quicksand", 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

`;

const breakpoints = {
  xs: 320,
  sm: 480,
  md: 600,
  lg: 801,
  xl: 1025,
  xxl: 1525,
};

export const mediaUntil = Object.entries(breakpoints).reduce(
  (acc, [label, size]) => {
    return {
      ...acc,
      [label]: (breakpointCss) => css`
        @media (max-width: ${size}px) {
          ${breakpointCss}
        }
      `,
    };
  },
  {}
);

export const mediaFrom = Object.entries(breakpoints).reduce(
  (acc, [label, size]) => {
    return {
      ...acc,
      [label]: (breakpointCss) => css`
        @media (min-width: ${size}px) {
          ${breakpointCss}
        }
      `,
    };
  },
  {}
);

export const LayeredBoxShadow = css`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12),
    0 64px 64px rgba(0, 0, 0, 0.12), 0 128px 128px rgba(0, 0, 0, 0.12);
`;
