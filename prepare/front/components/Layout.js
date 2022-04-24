import React from 'react';
// components
import NavBar from './NavBar';
// CSS
import { GlobalStyle } from '../style/Layout';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
