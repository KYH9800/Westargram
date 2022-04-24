import styled, { createGlobalStyle } from 'styled-components';

// Global
export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  header {
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  }

  .blind {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    margin: -1px;
    width: 1px;
    height: 1px;
  }
}
`;
