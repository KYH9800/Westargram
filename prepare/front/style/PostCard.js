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
    pointer-events: none;
  }

  #post-header-wrapper .header-left .userId {
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
  #post-img-wrapper .post-img {
    max-width: 611.99px;
  }
`;
