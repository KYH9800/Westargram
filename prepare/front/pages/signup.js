import React, { useState } from 'react';
import Link from 'next/link';
// CSS
import { GlobalStyle, LoginWrapper } from '../style/signup';

const Signup = () => {
  const [email, setEmail] = useState(''); // req.body.email
  const [password, setPassword] = useState(''); // req.body.password
  const [name, setName] = useState(''); // req.body.name
  const [userIdName, setUserIdName] = useState(''); // req.body.userIdName
  const warning = true;

  return (
    <LoginWrapper>
      <GlobalStyle />
      <form id="login-form-wrapper" type="submit">
        <div id="info-wrapper">
          <h2 id="blind">회원가입</h2>
          <img className="logo-img" src="/images/Westagram.png" />

          <div id="login-input-wrapper">
            <div id="input-title-wrapper">
              <h3 id="input-title">
                이메일
                {warning ? <span id="alert-text">이미 존재하는 XXX입니다.</span> : null}
              </h3>
              <input id="email-input" type="email" placeholder="전화번호, 사용자 이름 또는 이메일" />
            </div>

            <div id="input-title-wrapper">
              <h3 id="input-title">패스워드{warning ? <span id="alert-text">이미 존재하는 XXX입니다.</span> : null}</h3>
              <input id="password-input" type="password" placeholder="비밀번호" />
            </div>

            <div id="input-title-wrapper">
              <h3 id="input-title">
                패스워드 확인{warning ? <span id="alert-text">이미 존재하는 XXX입니다.</span> : null}
              </h3>
              <input id="password-check-input" type="password" placeholder="비밀번호 확인" />
            </div>

            <div id="input-title-wrapper">
              <h3 id="input-title">이름{warning ? <span id="alert-text">이미 존재하는 XXX입니다.</span> : null}</h3>
              <input id="name" type="text" placeholder="이름" />
            </div>

            <div id="input-title-wrapper">
              <h3 id="input-title">
                사용자 아이디{warning ? <span id="alert-text">이미 존재하는 XXX입니다.</span> : null}
              </h3>
              <input id="user-name" type="text" placeholder="사용자 아이디" />
            </div>
          </div>

          <h2 id="blind">가입하기</h2>
          <div id="signup-btn">
            <Link href="/">
              <a>
                <span id="login">로그인</span>
              </a>
            </Link>
            <span id="signup">가입하기</span>
          </div>
        </div>
      </form>
    </LoginWrapper>
  );
};

export default Signup;
