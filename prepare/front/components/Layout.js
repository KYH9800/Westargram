import React from 'react';
// components
import NavBar from './NavBar';
// CSS
import styled, { GlobalStyle } from '../style/Layout';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
