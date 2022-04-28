import React from 'react';
// CSS
import { UserInfoWrapper } from '../style/UserInfo';
// antd
import { Avatar } from 'antd'; // import { UserOutlined } from '@ant-design/icons';
// components
import UserRecommendationList from '../components/UserRecommendationList';

const UserInfo = () => {
  return (
    <UserInfoWrapper>
      <div id="my-info-wrapper">
        <div id="my-avatar">
          <a>
            <Avatar size={56} icon={<img class="my-img" src="/images/self.png" />} />
          </a>
        </div>
        <div id="my-id-name">
          <div className="my-id">
            <a>
              <span>kyh_0506</span>
            </a>
          </div>
          <div className="my-name">
            <p>고윤혁</p>
          </div>
        </div>
        <button id="change-id">
          <a>전환</a>
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
