import styled from 'styled-components';

export const ImboxWrapper = styled.div`
  position: fixed;
  width: 935px;
  height: 100%;

  #inbox-wrapper {
    background-color: #fff;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius: 4px;
    width: 100%;
    height: 91.5%;
    display: flex;
    position: relative;
    top: 13px;
  }

  #direct-list-wrapper {
    user-select: none;
    border-right: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    height: 100%;
    width: 348px;
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

  #chat-list-wrapper {
    height: 100%;
  }

  #chat-list-wrapper .direct-users-list {
    height: 93.7%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (max-height: 900px) {
    #chat-list-wrapper {
      height: 100%;
    }

    #chat-list-wrapper .direct-users-list {
      height: 92%;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }

  // none-list-loading-images
  #directListLoading-image > img {
    margin-top: 12px;
    margin-left: 15px;
    width: 312px;
  }

  // null-box
  #message-wrapper {
    position: relative;
    text-align: center;
    user-select: none;
    width: 586px;
  }

  #message-wrapper .null-item {
    position: absolute;
    top: 370px;
    right: 0;
    left: 0;
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
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;

    #inbox-wrapper {
      display: block;
      height: 100%;
      top: 0;
    }

    #direct-my-name-wrapper .direct-my-name {
      width: 495px;
    }

    #direct-my-name-wrapper .direct-my-name .change-my-id {
      display: flex;
      width: auto;
      position: relative;
      top: 0px;
      left: 0px;
      padding: 0px;
      justify-content: center;
    }

    #direct-list-wrapper {
      width: auto;
    }

    #message-wrapper {
      display: none;
    }

    #message-wrapper .null-item {
      top: 290px;
    }

    #direct-my-name-wrapper .direct-my-name .change-my-id {
    }
  }

  @media (max-height: 900px) {
    height: 100%;

    #inbox-wrapper {
      height: 89%;
    }

    #message-wrapper .null-item {
      position: absolute;
      top: 290px;
      right: 0;
      left: 0;
    }
  }
`;

export const DirectUserListWrapper = styled.div`
  cursor: pointer;

  #user-recommendation-list-wrapper {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    width: 348px;
    height: 73px;
    padding: 0 20px;
  }

  #user-recommendation-list-wrapper:hover {
    background-color: #f8f8f8;
  }

  #user-recommendation-list-wrapper:active {
    background-color: #f1f1f1;
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

  // 모바일
  @media (max-width: 1000px) {
    #user-recommendation-list-wrapper {
      width: auto;
    }
  }
`;
