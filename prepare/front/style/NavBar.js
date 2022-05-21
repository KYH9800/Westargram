import styled from 'styled-components';

// component
export const Wrapper = styled.div`
  #navWrapper {
    margin: 0 auto;
    max-width: 990px;
  }

  #navWrapper > nav {
    padding: 0 26px;
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: space-between;
  }

  #main-logo {
    position: relative;
    margin-top: 7px;
    margin-right: 20px;
    flex: 0.65 0 auto;
    vertical-align: middle;
  }

  #main-logo .logo-img {
    position: absolute;
    top: -27px;
    left: 1px;
    max-height: 135px;
    max-width: 135px;
    margin-top: 4px;
  }

  #search-input-wrapper {
    width: 450px;
    text-align: end;
  }

  #search-input {
    display: inline-flex;
    align-items: center;
    background-color: #efefef;
    margin-right: 10px;
    width: 268px;
    height: 36px;
    border-radius: 7px;
    vertical-align: middle;
  }

  @media (max-width: 777px) {
    #search-input {
      display: none;
    }
  }

  #search-input > span {
    color: #8e8e8e;
    padding: 0 16px;
  }

  #search-icon svg {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 21.7px;
  }

  #search-input input {
    background-color: #efefef;
    border: none;
    width: 220px;
    height: 30px;
    outline: none;
    padding: 0 2%;
    vertical-align: middle;
    font-weight: 400;
    font-size: 16px;
    padding-left: 12px;
    // placeholder
    :placeholder-shown {
      font-weight: 300;
    }
  }

  #icon-button {
    position: relative;
    display: flex;
    padding-left: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

  #menu-list-item > svg {
    cursor: pointer;
  }

  #menu-list-item:active {
    svg {
      color: #969696;
    }
    #findperson,
    #nav-heart {
      fill: #969696;
    }
  }

  #avatar {
    cursor: pointer;
    margin-left: 10px;
    margin-top: 1px;
    align-items: center;
    vertical-align: middle;
    width: 24px;
    height: 24px;
  }

  #icon-button > a > span {
    margin-left: 24px;
  }

  // img copy 방지
  #icon-button .user-img {
    user-select: none;
    pointer-events: none;
  }

  //! <--- [User 모달 창] --->
  #box-point {
    position: absolute;
    top: 36px;
    right: 5px;
    width: 14px;
    height: 14px;
    background-color: #fff;
    box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
    transform: rotate(45deg);
  }

  #user-list {
    user-select: none;
    border-radius: 5px;
    box-shadow: 0 0 5px 1px rgba(var(--jb7, 0, 0, 0), 0.0975);
    background-color: #fff;
    text-align: left;
    /* position */
    position: absolute;
    top: 43px;
    left: 93px;
  }

  #user-list .list-item {
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    padding-top: 11px;
    padding-bottom: 11px;
    width: 230px;
    vertical-align: middle;
    svg {
      margin: 0 12px;
    }
  }
  #user-list .list-item:hover {
    background-color: #f2f2f2;
  }

  #user-list .list-item > svg {
    vertical-align: middle;
  }

  #logout-line {
    background-color: #dbdbdb;
    background-color: rgba(var(--b38, 219, 219, 219), 1);
    border: 0;
    height: 1px;
    margin: 0;
    width: 100%;
  }

  #user-list .logout-btn {
    cursor: pointer;
    /* border-top: 1px solid gray; */
    padding-top: 12px;
    padding-bottom: 11px;
    padding-left: 15px;
    font-size: 14px;
    font-weight: 400;
  }
  #user-list .logout-btn:hover {
    background-color: #f2f2f2;
  }

  #user-list .list-keyword {
    vertical-align: middle;
  } //! <--- [User 모달 창] --->
`;
