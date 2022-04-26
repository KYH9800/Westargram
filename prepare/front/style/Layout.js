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
    z-index: 100;
    border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }

  main {
    max-width: 935px;
    margin: 0 auto;
    margin-top: 61px;
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
