import React from 'react';
// CSS
import { MainWrapper } from '../style/index';
// components
import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <MainWrapper>
        <div id="home-wrapper">
          <div id="main">
            <section id="section">
              <div class="wrap-vertical">
                <span>쇼츠</span>
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
