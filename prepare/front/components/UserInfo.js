import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
// CSS
import { UserInfoWrapper } from '../style/UserInfo';
// antd
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// components
import UserRecommendationList from '../components/UserRecommendationList';
// reducer
import { LOG_OUT_REQUEST } from '../reducers/user';

// props: me in home.js
const UserInfo = ({ me }) => {
  const dispatch = useDispatch();

  // 로그아웃
  const onClickLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <UserInfoWrapper>
      <div id="my-info-wrapper">
        <div id="my-avatar">
          <a>
            {me?.UserProfileImage ? (
              <Avatar size={56} icon={<img className="my-img" src={me.UserProfileImage[0]} />} />
            ) : (
              <Avatar size={56} icon={<UserOutlined />} />
            )}
          </a>
        </div>
        <div id="my-id-name">
          <div className="my-id">
            <a>
              <span>{me?.userIdName}</span>
            </a>
          </div>
          <div className="my-name">
            <p>{me?.name}</p>
          </div>
        </div>
        <button id="change-id">
          <a onClick={onClickLogout}>로그아웃</a>
        </button>
      </div>

      <div id="users-list-wrapper">
        <div id="list-title">
          <h2>회원님을 위한 추천</h2>
          <a>모두 보기</a>
        </div>

        <div id="users-list">
          <UserRecommendationList />
          <UserRecommendationList />
          <UserRecommendationList />
          <UserRecommendationList />
          <UserRecommendationList />
        </div>
      </div>

      <div id="explanation">
        <div className="explanation-keyword">
          <a href="" target="blank">
            <span>소개</span>
          </a>
          <a href="" target="blank">
            <span>도움말</span>
          </a>
          <a href="" target="blank">
            <span>홍보</span>
          </a>
          <a href="" target="blank">
            <span>API</span>
          </a>
          <a href="" target="blank">
            <span>기술 정보</span>
          </a>
        </div>
        <div className="explanation-keyword02">
          <a href="" target="blank">
            <span>개인정보처리방침</span>
          </a>
          <a href="" target="blank">
            <span>약관</span>
          </a>
          <a href="" target="blank">
            <span>위치</span>
          </a>
          <a href="" target="blank">
            <span>인기 계정</span>
          </a>
          <a href="" target="blank">
            <span>해시태그</span>
          </a>
          <a href="" target="blank">
            <span>언어</span>
          </a>
        </div>
        <div className="made-in">@ 2022 WESTARGRAM FROM KYH</div>
      </div>
    </UserInfoWrapper>
  );
};

export default UserInfo;
