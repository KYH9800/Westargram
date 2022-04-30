import React from 'react';
// CSS
import { UserPostWrapper } from '../../style/ProfileNav/ProfileNav';

const UserPost = () => {
  return (
    <UserPostWrapper>
      {false ? (
        <>
          <div>게시물 있음</div>
        </>
      ) : (
        <>
          <div id="null-user-post-wrapper">
            <img
              id="null-user-post-img"
              src="https://www.instagram.com/static/images/mediaUpsell.jpg/6efc710a1d5a.jpg"
            />
            <div id="post-explanation">
              <h3>소중한 순간을 포착하여 공유해보세요.</h3>
              <p>앱을 다운로드하고 첫 사진이나 동영상을 공유해보세요.</p>
            </div>
          </div>
        </>
      )}
    </UserPostWrapper>
  );
};

export default UserPost;
