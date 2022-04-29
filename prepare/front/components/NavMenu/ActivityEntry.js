import React from 'react';
// antd
import { Avatar } from 'antd';
// CSS
import { ActivityEntryWrapper } from '../../style/NavMenu/Activity';

const ActivityEntry = () => {
  return (
    <ActivityEntryWrapper>
      <a>
        <div id="activity-list-item">
          <div>
            <Avatar id="activity-avatar" src={<img className="user-img" src="/images/self.png" />} size={44} />
          </div>
          <p className="activity-news">
            <span className="activity-userId">yeon_ji</span>님이 회원님을 팔로우하기 시작했습니다.{' '}
            <span className="activity-upload-time">1시간</span>
          </p>
          {false ? (
            <button id="activity-follwing-btn">팔로잉</button>
          ) : (
            <button id="activity-follow-btn">팔로우</button>
          )}
        </div>
      </a>
    </ActivityEntryWrapper>
  );
};

export default ActivityEntry;
