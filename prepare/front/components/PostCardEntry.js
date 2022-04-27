import React, { useState } from 'react';
// CSS
import { PostCardEntryWrapper } from '../style/PostCard';
// antd
import { EllipsisOutlined, SmileOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const PostCardEntry = () => {
  const [liked, setLiked] = useState(false);

  const onLike = () => {
    setLiked((prevState) => !prevState);
    console.log('prevState: ', liked);
  }; // onLike !== onUnLike

  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmitClick');
  };

  return (
    <PostCardEntryWrapper>
      <div id="post-box">
        <div id="post-header-wrapper">
          <div className="header-left">
            <div className="user-icon">
              <a>
                <Avatar id="avatar" src={<img className="user-img" src="/images/self.png" />} />
              </a>
            </div>
            <div className="userId">
              <span>clean_0828</span>
            </div>
          </div>
          <div className="header-right">
            <div className="menu-bar">
              <EllipsisOutlined />
            </div>
          </div>
        </div>

        <div id="post-img-wrapper">
          <img className="post-img" src="/images/my-picture.png" alt="게시글 이미지" />
        </div>

        <div id="icon-wrapper">
          <div className="like">
            {liked ? (
              <svg
                id="unLiked"
                viewBox="0 0 48 48"
                style={{ color: '#ed4956', height: '24px', width: '24px', fill: '#ed4956' }}
                onClick={onLike}>
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            ) : (
              <svg
                id="liked "
                style={{
                  color: '#262626',
                  height: '24px',
                  width: '24px',
                  fill: '#262626',
                  role: 'img',
                  viewBox: '0 0 24 24',
                }}
                onClick={onLike}>
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
              </svg>
            )}
          </div>

          <div className="comment">
            <svg className="comment-icon" style={{ height: '24px', width: '24px' }}>
              <path
                d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"></path>
            </svg>
          </div>

          <div className="share">
            <svg
              className="content-share-icon"
              role="img"
              style={{ width: '24', height: '24', color: '#262626', fill: '#262626', viewBox: '0 0 24 24' }}>
              <line
                style={{ fill: 'none', strokeWidth: '2', strokeLinejoin: 'round', stroke: 'currentColor' }}
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"></line>
              <polygon
                style={{
                  fill: 'none',
                  strokeWidth: '2',
                  strokeLinejoin: 'round',
                  stroke: 'currentColor',
                }}
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"></polygon>
            </svg>
          </div>
          <div className="save-post">
            <svg className="save-post-icon" style={{ color: '#262626', fill: '#262626', height: '24', width: '24' }}>
              <polygon
                style={{
                  fill: 'none',
                  strokeWidth: '2',
                  strokeLinejoin: 'round',
                  strokeLinecap: 'round',
                  stroke: 'currentColor',
                }}
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"></polygon>
            </svg>
          </div>
        </div>

        <div id="post-content-wrapper">
          <div id="like-count-wrapper">
            <a>
              좋아요 <span className="like-count">1,212,123</span>개
            </a>
          </div>

          <div id="user-info-content-wrapper">
            <span className="user-info">
              <a href="">clean_0828</a>
            </span>
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
          <div className="comment-icon">
            <SmileOutlined />
          </div>
          <form className="comment-form" onSubmit={onClickSubmit}>
            <textarea className="comment-input" type="text" placeholder="댓글 달기..." />
            <button className="comment-btn">게시</button>
          </form>
        </div>
      </div>
    </PostCardEntryWrapper>
  );
};

export default PostCardEntry;
