import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
// CSS
import { MainWrapper } from '../style/index';
// components
import Layout from '../components/layout';
import ShortsForm from '../components/ShortsForm';
import PostCard from '../components/PostCard';
import UserInfo from '../components/UserInfo';

const Home = () => {
  const router = useRouter();
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!me) {
      alert('서비스 이용을 위해 로그인이 필요합니다.');
      router.push('/');
    }
  }, [me]);

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
                <PostCard />
              </div>
            </section>
            <div id="user-info-wrapper">
              <div className="user-info">
                <UserInfo />
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </Layout>
  );
};

export default Home;
