import React from 'react';
// CSS
import { MainWrapper } from '../style/index';
// components
import Layout from '../components/layout';
import ShortsForm from '../components/ShortsForm';

const Home = () => {
  return (
    <Layout>
      <MainWrapper>
        <div id="home-wrapper">
          <div id="main-wrapper">
            <section id="section">
              <div className="shortsForm-section">
                <ShortsForm />
              </div>
              <div className="post-card">
                <div className="post-form">Hello, Instagram</div>
              </div>
            </section>
            <div id="user-info-wrapper">
              <div className="user-info">User Info</div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </Layout>
  );
};

export default Home;
