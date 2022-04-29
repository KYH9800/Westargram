import React from 'react';
// CSS
import { ShortsAvatarWrapper } from '../style/ShortsForm';
// antd
import { Avatar, Image } from 'antd';

const ShortsAvatar = () => {
  const onClick = () => {
    console.log('User-Shots-Click');
  };

  return (
    <ShortsAvatarWrapper>
      <div className="user-avatar">
        <a onClick={onClick}>
          <Avatar src={<img className="ant-image-img" src={`/images/self.png`} />} size="large" />
          <p className="userId">kyh_0506</p>
        </a>
      </div>
    </ShortsAvatarWrapper>
  );
};

export default ShortsAvatar;
