import React from 'react';
import Layout from '../components/layout';
// CSS
import '../style/global.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
