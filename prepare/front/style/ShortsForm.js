import styled from 'styled-components';
import Slider from 'react-slick';

// ShortsForm.js
export const ShortsFormWrapper = styled.section`
  #shorts-box {
    margin-top: 22px;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    width: 613.99px;
    border-radius: 5px;
    display: inline-flex;
    /* overflow: auto;
    white-space: nowrap; */
  }

  // user-image의 왼쪽 공간 여백
  #shorts-box .li {
    list-style: none;
    margin-left: 7px;
  }

  .slick-btn {
    width: 30px;
    height: 30px;
  }
`;

//* react-slick
export const StyledSlider = styled(Slider)`
  height: 90%; //슬라이드 컨테이너 영역

  .slick-list {
    //슬라이드 스크린
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
  }

  .slick-slide div {
    //슬라이더  컨텐츠
    /* cursor: pointer; */
  }

  .slick-dots {
    //슬라이드의 위치
    bottom: 20px;
    margin-top: 200px;
  }

  .slick-track {
    width: 100%;
  }

  .slick-slide.slick-active.slick-current {
    display: block;
  }
`;

// ShortsAvatar.js
export const ShortsAvatarWrapper = styled.div`
  .user-avatar {
    padding: 15px 11px 6px 11px;
    text-align: center;
    align-items: center;
  }

  .user-avatar p {
    padding: 5px 0;
    margin: 0;
    font-size: 12px;
  }

  // antd
  .ant-avatar.ant-avatar-lg.ant-avatar-circle.ant-avatar-image {
    cursor: pointer;
    width: 60px;
    height: 60px;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  }

  .ant-image-img {
    border-radius: 50%;
    width: 56px;
    height: 56px;
  }

  .userId {
    color: #9e9e9e;
  }
`;
