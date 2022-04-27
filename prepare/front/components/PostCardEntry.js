import React from 'react';
// CSS
import { PostCardEntryWrapper } from '../style/PostCard';

const PostCardEntry = () => {
  return (
    <PostCardEntryWrapper>
      <div id="post-box">
        <div id="post-header-wrapper">
          <div className="user-icon">User</div>
          <div className="userId">kyh0506_2</div>
          <div className="menu-bar">menu-bar</div>
        </div>

        <div id="post-img-wrapper">
          <img className="post-img" src="" alt="게시글 이미지" />
        </div>

        <div id="post-content-wrapper">
          <div id="icon-wrapper">
            <div className="like">like</div>
            <div className="comment">comment</div>
            <div className="share">share</div>
            <div className="save-post">save-post</div>
          </div>

          <div id="like-count-wrapper">
            <p>
              좋아요 <span className="like-count">1,212,123</span>개
            </p>
          </div>

          <div id="user-info-content-wrapper">
            <span className="user-info">고윤혁</span>
            <span className="user-content">이것은 테스트 게시글 입니다.</span>
          </div>

          <div id="comment-count-wrapper">
            <a>
              댓글 <span className="comment-count">1,340</span>개 모두 보기
            </a>
          </div>

          <div id="momment-wrapper">
            <span>1일 전</span>
          </div>
        </div>

        <div id="comment-form-wrapper">
          <div className="comment-icon">ICON</div>
          <form className="comment-form">
            <input className="comment-input" type="text" placeholder="댓글 달기..." />
            <button className="comment-btn">게시</button>
          </form>
        </div>
      </div>
    </PostCardEntryWrapper>
  );
};

export default PostCardEntry;
