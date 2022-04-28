import styled from 'styled-components';

export const ImboxWrapper = styled.div`
  width: 935px;

  #inbox-wrapper {
    top: 13px;
    background-color: #fff;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius: 4px;
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
  }

  #direct-list-wrapper {
    user-select: none;
    border-right: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    height: 100%;
  }

  #direct-my-name-wrapper {
    padding: 10px 72px;
    margin-top: 5px;
    border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    position: relative;
  }

  #direct-my-name-wrapper .direct-my-name .change-my-id {
    display: flex;
    position: relative;
    top: 2px;
    left: 55px;
    // padding: 0px 51px;
  }

  #direct-my-name-wrapper .direct-my-name .change-my-id:active {
    h2,
    .down-outline .v-icon > path {
      color: gray;
      fill: gray;
    }
  }

  #direct-my-name-wrapper .direct-my-name .change-my-id h2 {
    font-size: 16px;
    font-weight: 600;
  }

  #direct-my-name-wrapper .down-outline {
    margin-left: 8px;
  }

  #direct-my-name-wrapper .down-outline .v-icon {
    transform: rotate(180deg); // 180도 회전
    color: #262626;
    fill: #262626;
    height: 20px;
    width: 20px;
    margin-top: 2px;
  }

  #direct-my-name-wrapper .new-massege {
    color: #262626;
    fill: #262626;
    height: 24px;
    width: 24px;
    flex: auto;
    position: absolute;
    top: 6.5px;
    right: 10px;
  }

  #direct-my-name-wrapper .new-massege > a:active {
    path,
    line {
      color: gray;
    }
  }

  // null-box
  #message-wrapper {
    text-align: center;
    user-select: none;
    width: 586px;
  }

  #null-massege-box > h2 {
    color: #262626;
    font-weight: 300;
    font-size: 22px;
    margin-bottom: 0;
  }

  #null-massege-box > p {
    color: #8e8e8e;
    font-weight: 400;
    font-size: 14px;
  }

  #null-massege-box > button {
    cursor: pointer;
    background-color: #0095f6;
    border: 1px solid transparent;
    border-radius: 5px;
    color: #fff;
    padding: 4px 9px;
  }

  #null-massege-box > button:active {
    background-color: #44b4fc;
  }

  // 모바일
  @media (max-width: 1000px) {
    max-width: 640px;
    margin: 0 auto;
    #inbox-wrapper {
      display: block;
      top: 0;
    }

    #direct-my-name-wrapper .direct-my-name {
      width: 495px;
    }

    #direct-my-name-wrapper .direct-my-name .change-my-id {
      display: flex;
      width: 300px;
      position: relative;
      top: 2px;
      left: 210px;
      // padding: 0px 51px;
    }

    #message-wrapper {
      display: none;
    }
  }
`;

export const DirectUserListWrapper = styled.div`
  cursor: pointer;
  padding: 8px 0px;
  #user-recommendation-list-wrapper {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    width: 348px;
    height: 72px;
    padding: 0 20px;
  }

  #user-recommendation-list-wrapper:hover {
    background-color: #f2f2f2;
  }

  #user-recommendation-list-wrapper:active {
    background-color: #e8e8e8;
  }

  // user-avatar
  #direct-user-avatar {
    vertical-align: middle;
  }

  #direct-user-avatar .user-img {
    user-select: none;
    pointer-events: none;
  }

  // user-id-name
  #user-id-name {
    margin-top: 11px;
    margin-left: 11px;
    margin-right: 15px;
    vertical-align: middle;
  }

  #user-id-name .user-id > a {
    color: black;
    font-weight: 400;
  }

  #user-id-name .recommendation-purpose {
    display: inline-flex;
    color: #8e8e8e;
    font-weight: 400;
    font-size: 14px;
    // width: 191.23px;
  }

  #user-id-name .recommendation-purpose > p {
    margin-right: 10px;
    width: 165px;
    min-width: 0;
    flex: 1 1 auto;
  }

  #user-id-name .recommendation-purpose .direct-momment {
    font-weight: 500;
    width: 50px;
  }

  // change-id-btn
  #follow-btn {
    border: 0;
    background-color: #80808000;
    font-size: 14px;
    font-weight: 600;
    color: #0095f6;
    vertical-align: middle;
    margin: 26px 0;
    margin-left: 8px;
  }
`;
