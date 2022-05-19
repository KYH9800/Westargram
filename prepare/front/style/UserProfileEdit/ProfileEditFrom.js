import styled from 'styled-components';

export const ProfileEditFromWrapper = styled.div`
  #userIdName {
    font-size: 24px;
    font-weight: 400;
    line-height: 25px;
  }

  .change-img,
  .change-name,
  .change-userId-name,
  .website-info,
  .user-intro,
  .user-email,
  .user-phone-num,
  .user-sex {
    display: flex;
    margin: 20px;
  }

  .user-profile-id-name > a {
    cursor: pointer;
    border: 0;
    background-color: #fff;
    color: #0095f6;
    font-size: 14px;
    font-weight: 600;
    :active {
      color: #7ac6f8;
    }
  }

  #user-img-icon {
    text-align: end;
    width: 139px;
    margin: auto 0px;
    margin-right: 20px;
  }

  #profile-input-title {
    text-align: end;
    width: 139px;
    margin-right: 20px;
    margin-top: 5px;
    font-size: 16px;
    font-weight: 600;
    /* margin: auto 20px; */
  }

  #user-info-input-wrapper {
    width: 355px;
  }

  #user-info-input-wrapper input {
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    width: 355px;
    height: 32px;
    outline: none;
    padding: 0 10px;
  }

  #user-sex-input {
    caret-color: transparent;
    font-size: 15px;
    font-weight: 500;
    color: black;
  }

  #user-sex-input:active {
    color: #636363;
  }

  #user-info-input-wrapper textarea {
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    width: 355px;
    height: 60px;
    outline: none;
    padding: 5px 10px;
  }

  #user-info-input-wrapper > p {
    font-size: 12px;
    font-weight: 400;
    color: #8e8e8e;
  }

  .userProfile-submit-btn {
    button {
      cursor: pointer;
      margin: 70px 110px 30px 2px; // top, right, bottom, left
      background-color: #0095f6;
      color: #fff;
      border: 0;
      border-radius: 3px;
      width: 45px;
      height: 30px;
    }
    button:active {
      background-color: #73c6fc;
    }
    a {
      cursor: pointer;
      color: #0095f6;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
