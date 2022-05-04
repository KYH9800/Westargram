import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
// CSS
import { GlobalStyle, LoginWrapper } from '../style/signup';
// redux
import { SIGN_UP_REQUEST } from '../reducers/user';
// custom hooks
import useInput from '../hooks/useInput';

const Signup = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { signUpDone, signUpError } = useSelector((state) => state.user);

  const [email, onChangeEmail] = useInput(''); // req.body
  const [password, onChangetPassword] = useInput(''); // req.body
  const [passwordCheck, onChangetPasswordCheck] = useInput(''); // req.body
  const [name, onChangetName] = useInput(''); // req.body
  const [userIdName, onChangetUserIdName] = useInput(''); // req.body

  let pswCondition = false; // 가입조건 충족 여부
  const warning = true;

  // useEffect
  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    } else if (signUpDone) {
      alert('가입이 완료되었습니다. 로그인을 해주세요.');
      router.push('/');
    }
  }, [signUpDone, signUpError]);

  // 비밀번호 조건 검사
  const passwordCondition = useCallback((password) => {
    const blank_pattern = /^\s+|\s+$/g; //공백만 입력된 경우
    const string_with_blank_pattern = /[\s]/g; //문자열에 공백이 있는 경우
    const special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi; //특수문자가 있는 경우

    if (password.length < 8) {
      pswCondition = false;
      return <span id="alert-text">비밀번호는 8자리 이상이어야 합니다.</span>;
    } else if (password.replace(blank_pattern, '') === '') {
      pswCondition = false;
      return <span id="alert-text">공백만 입력되었습니다.</span>;
    } else if (string_with_blank_pattern.test(password) === true) {
      pswCondition = false;
      return <span id="alert-text">문자 사이에 공백이 존재합니다.</span>;
    } else if (special_pattern.test(password) === false) {
      pswCondition = false;
      return <span id="alert-text">비밀번호는 특수문자가 포함되어야 합니다.</span>;
    } else {
      pswCondition = true;
    }
  });

  // 가입하기
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); // 기본 동작 방지
      console.log('이거 비번: ', password, passwordCheck);
      // 가입조건이 갖춰져야 가입하기가 가능하다
      if (!pswCondition) {
        return alert('가입조건이 갖춰지지 않았습니다.');
      } else if (password !== passwordCheck) {
        return alert('패스워드가 일치하지 않습니다.');
      }
      // 가입 조건 완료, 가입 완료, 로그인 페이지 이동
      console.log('email:', email, 'password:', password, 'name:', name, 'userIdName:', userIdName, '을 보냄');
      dispatch({
        type: SIGN_UP_REQUEST,
        data: { email, password, name, userIdName },
      });
    },
    [email, password, passwordCheck, name, userIdName, signUpDone, signUpError]
  );

  return (
    <LoginWrapper>
      <GlobalStyle />
      <form id="login-form-wrapper" type="submit" onSubmit={onSubmit}>
        <div id="info-wrapper">
          <h2 id="blind">회원가입</h2>
          <img className="logo-img" src="/images/Westagram.png" />

          <div id="login-input-wrapper">
            <div id="input-title-wrapper">
              <h3 id="input-title">
                이메일
                {email.length > 0 && warning ? <span id="alert-text">{signUpError}</span> : null}
              </h3>
              <input
                id="email-input"
                type="email"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={email}
                onChange={onChangeEmail}
                required
              />
            </div>

            <div id="input-title-wrapper">
              <h3 id="input-title">패스워드 {password.length > 0 ? passwordCondition(password) : null}</h3>
              <input
                id="password-input"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={onChangetPassword}
                required
              />
            </div>

            <div id="input-title-wrapper">
              <h3 id="input-title">
                패스워드 확인
                {passwordCheck.length > 0 && password !== passwordCheck ? (
                  <span id="alert-text">비밀번호가 일치하지 않습니다.</span>
                ) : null}
              </h3>
              <input
                id="password-check-input"
                type="password"
                placeholder="비밀번호 확인"
                value={passwordCheck}
                onChange={onChangetPasswordCheck}
                required
              />
            </div>

            <div id="input-title-wrapper">
              <h3 id="input-title">이름{warning ? <span id="alert-text">이미 존재하는 XXX입니다.</span> : null}</h3>
              <input id="name" type="text" placeholder="이름" value={name} onChange={onChangetName} required />
            </div>

            <div id="input-title-wrapper">
              <h3 id="input-title">
                사용자 아이디{warning ? <span id="alert-text">이미 존재하는 XXX입니다.</span> : null}
              </h3>
              <input
                id="user-name"
                type="text"
                placeholder="사용자 아이디"
                value={userIdName}
                onChange={onChangetUserIdName}
                required
              />
            </div>
          </div>

          <h2 id="blind">가입하기</h2>
          <div id="signup-btn">
            <Link href="/">
              <a>
                <span id="login">로그인</span>
              </a>
            </Link>
            <span id="signup">
              <button id="submit-btn" type="submit" form="login-form-wrapper">
                가입하기
              </button>
            </span>
          </div>
        </div>
      </form>
    </LoginWrapper>
  );
};

export default Signup;
