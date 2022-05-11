import React from 'react';
// components
import NavBar from './NavBar';
// CSS
import { GlobalStyle } from '../style/Layout';
// component
import AddPost from './AddPost';

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
