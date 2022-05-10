import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
// getServerSideProps
import axios from 'axios';
import { END } from 'redux-saga';
import wrapper from '../store/configureStore';
// CSS
import { GlobalStyle, LoginWrapper } from '../style/login';
// redux
import { RESET_SIGN_UP_STATES, LOG_IN_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';
// custom hooks
import useInput from '../hooks/useInput';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { me, logInError } = useSelector((state) => state.user);

  const [email, onChangeEmail] = useInput(''); // req.body
  const [password, onChangetPassword] = useInput(''); // req.body

  useEffect(() => {
    dispatch({
      type: RESET_SIGN_UP_STATES, // 회원가입 상태 초기화
    });
  }, []);

  useEffect(() => {
    console.log('me', me);
    if (me) {
      router.push('/home');
    }
  });

  const onClickSignupRouter = () => {
    if (confirm('회원가입 페이지로 이동합니다.')) {
      router.push('/signup');
    }
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('서버로 보낼 email:', email, 'password:', password);
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password },
    });
  };

  return (
    <LoginWrapper>
      <GlobalStyle />
      <form id="login-form-wrapper" type="submit" onSubmit={onClickSubmit}>
        <div>
          <h2 id="blind">로그인</h2>
          <img className="logo-img" src="/images/Westagram.png" />

          <div>{true ? <span id="alert-text">{logInError}</span> : null}</div>

          <div id="login-input-wrapper">
            <h2 id="blind">이메일</h2>
            <input
              id="email-input"
              type="email"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={email}
              onChange={onChangeEmail}
            />

            <h2 id="blind">패스워드</h2>
            <input
              id="password-input"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={onChangetPassword}
            />
          </div>

          <h2 id="blind">로그인 버튼</h2>
          <button id="login-btn">로그인</button>

          <h2 id="blind">계정 만들기</h2>
          <a onClick={onClickSignupRouter}>
            <p id="enter-signup">계정 만들기</p>
          </a>
        </div>
      </form>
    </LoginWrapper>
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

export default Login;
