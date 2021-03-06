import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// CSS
import { PostCardEntryWrapper, OptionsWrapper } from '../style/PostCard';
// antd
import { EllipsisOutlined, SmileOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
// components
import PostImages from './PostImages';
import UpdatePost from './UpdatePost/UpdatePost';
// reducer
import { REMOVE_POST_REQUEST } from '../reducers/post';

// props: mainPosts in postCard.js
const PostCardEntry = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { removePostError } = useSelector((state) => state.post);

  const [liked, setLiked] = useState(false);
  const [optionToggle, setOptionToggle] = useState(false);
  const [updatePostToggle, setUpdatePostToggle] = useState(false);

  const onLike = () => {
    setLiked((prevState) => !prevState);
    console.log('prevState: ', liked);
  }; // onLike !== onUnLike

  // 게시글 작성, Submit
  const onClickSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('onSubmitClick');
  }, []);

  // 게시글 기능 버튼 toggle
  const onClickOption = () => {
    setOptionToggle((state) => !state);
    // console.log('optionToggle:', optionToggle);
  };

  // 게시글 삭제
  const onRemovePost = useCallback(() => {
    if (!id) {
      alert('로그인이 필요합니다.');
    }
    if (confirm('게시글을 삭제하시겠습니까?')) {
      dispatch({
        type: REMOVE_POST_REQUEST,
        data: post.id,
      });
    }
    if (!removePostError) {
      setOptionToggle((state) => !state);
    } else {
      console.error(removePostError);
    }
  }, [id]);

  // 게시글 수정, Toggle Button
  const onClickPostUpdate = () => {
    if (confirm('게시글을 수정하시겠습니까?')) {
      setUpdatePostToggle((state) => !state);
      setOptionToggle(false);
    }
  };

  return (
    <PostCardEntryWrapper>
      <div id="post-box">
        <h3 className="blind">게시글 머리</h3>
        <div id="post-header-wrapper">
          <div className="header-left">
            <div className="user-icon">
              <a>
                {post.User.UserProfileImage ? (
                  <Avatar
                    id="avatar"
                    size={32}
                    src={<img className="user-img" src={post.User.UserProfileImage[0]} />}
                  />
                ) : (
                  <Avatar size={32} icon={<UserOutlined />} />
                )}
              </a>
            </div>
            <div className="userId">
              <span>{post.User.userIdName}</span>
            </div>
          </div>
          <div className="header-right">
            <div className="menu-bar">
              <EllipsisOutlined onClick={onClickOption} />
            </div>
          </div>
        </div>

        <h3 className="blind">게시글 이미지</h3>
        <div id="post-img-wrapper">
          <PostImages imagePaths={post.Images} />
        </div>

        <div id="icon-wrapper">
          <h3 className="blind">좋아요 버튼</h3>
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

          <h3 className="blind">댓글 버튼</h3>
          <div className="comment">
            <svg className="comment-icon" style={{ height: '24px', width: '24px' }}>
              <path
                d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"></path>
            </svg>
          </div>

          <h3 className="blind">공유하기 버튼</h3>
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

          <h3 className="blind">게시글 저장하기 버튼</h3>
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

        <h3 className="blind">좋아요 갯수</h3>
        <div id="post-content-wrapper">
          <div id="like-count-wrapper">
            <a>
              좋아요 <span className="like-count">1,212,123</span>개
            </a>
          </div>

          <div id="user-info-content-wrapper">
            <h3 className="blind">작성자 아이디</h3>
            <span className="user-info">
              <a href="">{post.User.userIdName}</a>
            </span>
            <h3 className="blind">게시글 내용</h3>
            <div className="user-content">
              {post.content.split('\n').map((line, i) => {
                return (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                );
              })}
            </div>
          </div>

          <h3 className="blind">댓글 모두 보기</h3>
          <div id="comment-count-wrapper">
            <a>
              댓글 <span className="comment-count">1,340</span>개 모두 보기
            </a>
          </div>

          <h3 className="blind">작성된 날짜</h3>
          <div id="momment-wrapper">
            <span>1일 전</span>
          </div>
        </div>

        <h3 className="blind">댓글 Input 창</h3>
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
      {/* 게시글 설정 버튼 */}
      {optionToggle ? (
        id && post.User.id === id ? (
          <OptionsWrapper>
            <div id="post-option-box-wrapper">
              <div id="closeIt-btn">
                <CloseOutlined onClick={onClickOption} />
              </div>
              <div className="post-option-box">
                <button className="top" onClick={onClickPostUpdate}>
                  수정
                </button>
                <button onClick={onRemovePost} style={{ color: '#ed4956', fontWeight: '600' }}>
                  삭제
                </button>
                <button className="bottom" onClick={onClickOption}>
                  취소
                </button>
              </div>
            </div>
          </OptionsWrapper>
        ) : (
          <OptionsWrapper>
            <div id="post-option-box-wrapper">
              <div id="closeIt-btn">
                <CloseOutlined onClick={onClickOption} />
              </div>
              <div className="post-option-box">
                <button className="top">신고</button>
                <button>공유하기</button>
                <button className="bottom" onClick={onClickOption}>
                  취소
                </button>
              </div>
            </div>
          </OptionsWrapper>
        )
      ) : null}
      {/* 게시글 업데이트 */}
      {updatePostToggle ? <UpdatePost post={post} setUpdatePostToggle={setUpdatePostToggle} /> : null}
    </PostCardEntryWrapper>
  );
};

export default PostCardEntry;
