import React from 'react';
// CSS
import { UserRecommendationListWrapper } from '../style/UserInfo';
// antd
import { Avatar } from 'antd'; // import { UserOutlined } from '@ant-design/icons';

const UserRecommendationList = () => {
  return (
    <UserRecommendationListWrapper>
      <div id="user-recommendation-list-wrapper">
        <div id="user-avatar">
          <a>
            <Avatar size={36} icon={<img className="user-img" src="/images/self.png" />} />
          </a>
        </div>
        <div id="user-id-name">
          <div className="user-id">
            <a>
              <span>kyh_0506</span>
            </a>
          </div>
          <div className="recommendation-purpose">
            <p>회원님을 위한 추천</p>
          </div>
        </div>
        <button id="follow-btn">
          <a>팔로우</a>
        </button>
      </div>
    </UserRecommendationListWrapper>
  );
};

export default UserRecommendationList;
