import styled, { createGlobalStyle } from 'styled-components';

// Global
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #fafafa;
    align-items: center;
    width: 500px;
    margin: 0 auto;
  }
`;

export const LoginWrapper = styled.div`
  position: relative; // position 기준

  // 감추기
  #blind {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    margin: -1px;
    width: 1px;
    height: 1px;
  }

  // 로그인 form
  #login-form-wrapper {
    position: relative;
    top: 180px;
    margin: 0 auto;
    background-color: #fff;
    text-align: center;
    border: 1px solid rgba(var(--jb7, 0, 0, 0), 0.0975);
    box-shadow: 0 0 5px 1px rgba(var(--jb7, 0, 0, 0), 0.0975);
    border-radius: 5px;
    width: 450px;
    height: 490px;
  }

  // westargram 이미지
  #login-form-wrapper .logo-img {
    user-select: none;
    pointer-events: none;
    width: 200px;
    margin-top: 10%;
  }

  #alert-text {
    position: absolute;
    top: 150px;
    right: 0;
    left: 0;
    font-size: 12px;
    font-weight: 400;
    color: red;
  }

  // 로그인, 패그워드 input
  #login-input-wrapper {
    margin-top: 20%;
  }

  // 이메일, 패스워드 input
  #email-input,
  #password-input {
    user-select: none;
    border: 1px solid rgba(var(--jb7, 0, 0, 0), 0.0975);
    border-radius: 5px;
    background-color: #fafafa;
    width: 60%;
    height: 35px;
    margin: 5px 0;
    padding: 0 10px;
    outline: 0;
  }

  // 로그인 버튼
  #login-btn {
    cursor: pointer;
    margin-top: 5px;
    border: 0;
    border-radius: 5px;
    background-color: #0095f6; // #0095f659
    color: #fff;
    width: 60%;
    height: 35px;
  }
  #login-btn:active {
    background-color: #0067a9;
  }

  // 비밀번호 찾기
  #enter-signup {
    cursor: pointer;
    user-select: none;
    color: #0095f6;
    margin-bottom: 20px;
    // position
    position: absolute;
    left: 0;
    right: 0;
    bottom: 110px;
  }
  #enter-signup:active {
    color: #0067a9;
  }
`;
