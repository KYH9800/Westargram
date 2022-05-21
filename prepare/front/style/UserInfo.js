import styled from 'styled-components';

// UserInfo.js
export const UserInfoWrapper = styled.div`
  #my-info-wrapper {
    user-select: none;
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    margin: 19px 5px;
  }

  // my-avatar
  #my-avatar {
    vertical-align: middle;
  }

  #my-avatar .my-img {
    user-select: none;
    pointer-events: none;
  }

  // my-id-name
  #my-id-name {
    margin-top: 13px;
    margin-left: 15px;
    margin-right: 15px;
    vertical-align: middle;
  }

  #my-id-name .my-id > a {
    color: black;
    font-weight: 600;
  }

  #my-id-name .my-name {
    color: #8e8e8e;
    font-weight: 400;
    width: 155.23px;
  }

  // change-id-btn
  #change-id {
    border: 0;
    background-color: #80808000;
    font-size: 12px;
    font-weight: 600;
    color: #0095f6;
    vertical-align: middle;
    margin: 26px 0;
    margin-left: 8px;
  }

  // users-list-wrapper
  #list-title {
    user-select: none;
    position: relative;
    display: inline-flex;
    margin: 0px 5px;
  }

  #list-title > h2 {
    width: 248px;
    color: #8e8e8e;
    font-weight: 600;
    font-size: 14px;
  }

  #list-title > a {
    color: #262626;
    font-size: 12px;
    font-weight: 600;
  }

  // users-list
  #users-list {
    user-select: none;
    margin: 0px 5px;
  }

  // explanation
  #explanation {
    margin: 0px 5px;
    margin-top: 30px;
    font-size: 12px;
    font-weight: 400;
  }
  #explanation .explanation-keyword,
  #explanation .explanation-keyword02 {
    user-select: none;
  }

  #explanation .explanation-keyword02 {
    margin-bottom: 30px;
  }

  #explanation .explanation-keyword a,
  #explanation .explanation-keyword02 a {
    margin-right: 7px;
    color: #c7c7c7;
  }

  #explanation .made-in {
    color: #c7c7c7;
  }
`;

// UserRecommendationList.js
export const UserRecommendationListWrapper = styled.div`
  // user-select: none;

  #user-recommendation-list-wrapper {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    height: 47px;
  }

  // user-avatar
  #user-avatar {
    vertical-align: middle;
  }

  #user-avatar .user-img {
    user-select: none;
    pointer-events: none;
  }

  // user-id-name
  #user-id-name {
    margin-top: 13px;
    margin-left: 11px;
    margin-right: 15px;
    vertical-align: middle;
  }

  #user-id-name .user-id > a {
    color: black;
    font-weight: 600;
  }

  #user-id-name .recommendation-purpose {
    color: #8e8e8e;
    font-weight: 400;
    font-size: 12px;
    width: 191.23px;
  }

  // change-id-btn
  #follow-btn {
    border: 0;
    background-color: #80808000;
    font-size: 12px;
    font-weight: 600;
    color: #0095f6;
    vertical-align: middle;
    margin: 26px 0;
    margin-left: 8px;
  }
`;
