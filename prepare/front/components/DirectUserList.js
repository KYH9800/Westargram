import React from 'react';
// CSS
import { DirectUserListWrapper } from '../style/inbox';
// antd
import { Avatar } from 'antd';

const DirectUserList = () => {
  return (
    <DirectUserListWrapper>
      <div id="user-recommendation-list-wrapper">
        <div id="direct-user-avatar">
          <Avatar size={56} icon={<img className="user-img" src="/images/self.png" />} />
        </div>
        <div id="user-id-name">
          <div className="user-id">
            <span>kyh_0506</span>
          </div>
          <div className="recommendation-purpose">
            {/* 20글자 제한 */}
            <p>대화의 내용이 조금은 나오...</p>
            <div className="direct-momment">10주</div>
          </div>
        </div>
      </div>
    </DirectUserListWrapper>
  );
};

export default DirectUserList;
