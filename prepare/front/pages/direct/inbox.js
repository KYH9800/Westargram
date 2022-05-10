import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
// getServerSideProps
import axios from 'axios';
import { END } from 'redux-saga';
import wrapper from '../../store/configureStore';
// CSS
import { ImboxWrapper } from '../../style/inbox';
// components
import Layout from '../../components/Layout';
import DirectUserList from '../../components/DirectUserList';
// redux
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';

const Direct = () => {
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
      <Head>
        <title>받은 메세지함 | Direct</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImboxWrapper>
        <div id="inbox-wrapper">
          <div id="direct-list-wrapper">
            <div id="direct-my-name-wrapper">
              <div className="direct-my-name">
                <a className="change-my-id">
                  <h2>kyh0506</h2>
                  <div className="down-outline">
                    <svg className="v-icon" role="img" viewBox="0 0 24 24">
                      <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                    </svg>
                  </div>
                </a>
                <div className="new-massege">
                  <a>
                    <svg className="new-massege" role="img" viewBox="0 0 24 24">
                      <path
                        d="M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"></path>
                      <path
                        d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"></path>
                      <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="16.848"
                        x2="20.076"
                        y1="3.924"
                        y2="7.153"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div id="chat-list-wrapper">
              <div className="direct-users-list">
                {true ? (
                  <>
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                    <DirectUserList />
                  </>
                ) : (
                  <div id="directListLoading-image">
                    <img src="/images/directLoading-image.png" />
                    <img src="/images/directLoading-image.png" />
                    <img src="/images/directLoading-image.png" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div id="message-wrapper">
            <div className="null-item">
              <div>
                <svg
                  aria-label="Direct"
                  className="direct-icon"
                  color="#262626"
                  fill="#262626"
                  height="96"
                  role="img"
                  viewBox="0 0 96 96"
                  width="96">
                  <circle
                    cx="48"
                    cy="48"
                    fill="none"
                    r="47"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"></circle>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="69.286"
                    x2="41.447"
                    y1="33.21"
                    y2="48.804"></line>
                  <polygon
                    fill="none"
                    points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"></polygon>
                </svg>
              </div>
              <div id="null-massege-box">
                <h2>내 메시지</h2>
                <p>친구나 그룹에 비공개 사진과 메시지를 보내보세요.</p>
                <button>메시지 보내기</button>
              </div>
            </div>
          </div>
        </div>
      </ImboxWrapper>
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
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Direct;
