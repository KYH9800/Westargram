import styled from 'styled-components';

// PostCard
export const PostCardWrapper = styled.div`
  #post-box-empty {
    height: 113px;
  }
`;

// PostCard-Entry
export const PostCardEntryWrapper = styled.div`
  #post-box {
    margin-top: 22px;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius: 3px;
    background-color: #fff;
  }

  #post-header-wrapper {
    display: inline-flex;
    border-bottom: 1px solid #eeeeee;
    width: 100%;
    align-items: center;
    vertical-align: middle;
  }

  // img copy 방지
  #post-img-wrapper .post-img {
    user-select: none;
    pointer-events: none;
  }

  //* left
  #post-header-wrapper .header-left {
    display: inline-flex;
    padding: 15px 10px;
    vertical-align: middle;
  }

  #post-header-wrapper .header-left .user-icon {
    margin-right: 7px;
    user-select: none;
  }

  #avatar .user-img {
    pointer-events: none;
  }

  #post-header-wrapper .header-left .userId {
    user-select: none;
    margin: 0 7px;
    padding-top: 6px;
    width: 485px;
    font-size: 14px;
    font-weight: 600;
    font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    vertical-align: middle;
  }

  #post-header-wrapper .header-left .userId > span {
    cursor: pointer;
  }

  //* right
  #post-header-wrapper .header-right {
    display: inline-flex;
    vertical-align: middle;
  }

  #post-header-wrapper .header-right .menu-bar {
    cursor: pointer;
  }

  .anticon.anticon-ellipsis svg {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  //* content-img
  #post-img-wrapper {
    max-width: 611.99px;
  }

  #icon-wrapper {
    display: inline-flex;
    justify-content: center;
    position: relative;
    padding-left: 8px;
    padding-right: 8px;
    margin-top: 7px;
  }

  #icon-wrapper .like {
    padding: 8px;
  }

  #icon-wrapper .like svg {
    cursor: pointer;
  }

  #icon-wrapper .comment {
    padding: 8px;
  }

  #icon-wrapper .comment .comment-icon {
    cursor: pointer;
  }

  #icon-wrapper .comment .comment-icon:hover {
    color: gray;
  }

  #icon-wrapper .share {
    padding: 8px;
  }

  #icon-wrapper .share .content-share-icon {
    cursor: pointer;
    padding-top: 1px;
  }

  #icon-wrapper .share .content-share-icon:hover {
    polygon,
    line {
      color: gray;
    }
  }

  #icon-wrapper .save-post {
    padding: 8px;
    position: absolute;
    left: 560px;
  }

  #icon-wrapper .save-post .save-post-icon {
    cursor: pointer;
    padding-top: 1px;
  }

  #icon-wrapper .save-post .save-post-icon:hover {
    polygon {
      color: gray;
    }
  }

  //* post-content
  #post-content-wrapper {
    user-select: none;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 20px;
  }

  // 좋아요 개수
  #like-count-wrapper {
    // todo
  }

  #like-count-wrapper > a {
    color: black;
    font-size: 14px;
    font-weight: 600;
  }

  #like-count-wrapper > a:active {
    color: gray;
  }

  // User: 게시글
  #user-info-content-wrapper {
    margin-top: 6px;
    font-size: 14px;
  }

  #user-info-content-wrapper .user-info > a {
    margin-right: 7px;
    font-weight: 600;
    color: black;
  }

  #user-info-content-wrapper .user-content {
    width: 570px;
  }

  // 댓글 개수 모두보기
  #comment-count-wrapper > a {
    color: gray;
  }

  // 작성일자
  #momment-wrapper {
    color: gray;
    font-size: 10px;
    font-weight: 400;
    margin-top: 5px;
  }

  // comments
  #comment-form-wrapper {
    display: flex;
    border-top: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  }

  .anticon.anticon-smile {
    padding: 13px 16px 13px 19px;
  }

  .anticon.anticon-smile svg {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }

  #comment-form-wrapper .comment-form {
    vertical-align: middle;
    margin: 13px 0;
  }

  #comment-form-wrapper .comment-form .comment-input {
    vertical-align: middle;
    ::placeholder {
      user-select: none;
      font-size: 14px;
      font-weight: 400;
    }
    flex-grow: 1;
    font-size: 14px;
    border: 0;
    height: 22px !important;
    width: 500px;
    max-height: 80px;
    outline: 0;
    resize: none;
  }

  #comment-form-wrapper .comment-form .comment-btn {
    cursor: pointer;
    user-select: none;
    border: 0;
    background-color: #fff;
    color: #0095f6;
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
    vertical-align: middle;
    margin-top: 2px;
  }

  #comment-form-wrapper .comment-form .comment-btn:active {
    color: #0095f673;
  }
`;
