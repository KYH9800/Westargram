import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
// CSS
import { GlobalStyle, LoginWrapper } from '../style/login';

const Login = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log(toggle);
    if (toggle) {
      // Router.push('/home');
    }
  }, [toggle]);

  const onToggleClick = () => {
    setToggle((prevState) => !prevState);
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('onClickSubmit');
  };

  return (
    <LoginWrapper>
      <GlobalStyle />
      <form id="login-form-wrapper" type="submit" onSubmit={onClickSubmit}>
        <div>
          <h2 id="blind">로그인</h2>
          <img className="logo-img" src="/images/Westagram.png" />

          <div>{true ? <span id="alert-text">계정 또는 비밀번호가 올바르지 않습니다.</span> : null}</div>

          <div id="login-input-wrapper">
            <h2 id="blind">이메일</h2>
            <input id="email-input" type="email" placeholder="전화번호, 사용자 이름 또는 이메일" />

            <h2 id="blind">패스워드</h2>
            <input id="password-input" type="password" placeholder="비밀번호" />
          </div>

          <h2 id="blind">로그인 버튼</h2>
          <button id="login-btn" onClick={onToggleClick}>
            로그인
          </button>

          <h2 id="blind">비밀번호 찾기</h2>
          <Link href="/signup">
            <a>
              <p id="enter-signup">계정 만들기</p>
            </a>
          </Link>
        </div>
      </form>
    </LoginWrapper>
  );
};

export default Login;
