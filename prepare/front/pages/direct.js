import React from 'react';
import Head from 'next/head';
// components
import Layout from '../components/layout';

const Direct = () => {
  return (
    <Layout>
      <Head>
        <title>받은 메세지함 | Direct</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>direct</div>
    </Layout>
  );
};

export default Direct;
