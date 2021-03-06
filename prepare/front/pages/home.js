import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
// getServerSideProps
import axios from 'axios';
import { END } from 'redux-saga';
import wrapper from '../store/configureStore';
// CSS
import { MainWrapper } from '../style/home';
// components
import Layout from '../components/Layout';
import ShortsForm from '../components/ShortsForm';
import PostCard from '../components/PostCard';
import UserInfo from '../components/UserInfo';
// redux
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // useSelector
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);

  useEffect(() => {
    if (!me) {
      alert('서비스 이용을 위해 로그인이 필요합니다.');
      router.push('/');
    }
  }, [me]);

  // 무한 스크롤
  useEffect(() => {
    // comopnentDidMount()
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    // componentWillUnmount()
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);

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
                <UserInfo me={me} />
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </Layout>
  );
};

// getServerSideProps
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : ''; // req가 있다면 cookie에 요청에 담겨진 cookie를 할당한다.
  axios.defaults.headers.Cookie = ''; // 요청이 들어올 때마다 초기화 시켜주는 것이다. 여기는 클라이언트 서버에서 실행되므로 이전 요청이 남아있을 수 있기 때문이다
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie; // 서버일때랑 cookie를 써서 요청을 보낼 때만 headers에 cookie를 넣어준다
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST, // user
  });
  store.dispatch({
    type: LOAD_POSTS_REQUEST, // post
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;
