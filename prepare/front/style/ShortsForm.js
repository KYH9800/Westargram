import styled from 'styled-components';
import Slider from 'react-slick';

// ShortsForm.js
export const ShortsFormWrapper = styled.section`
  #shorts-box {
    background-color: #fff;
    float: left;
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

  @media (max-width: 640px) {
    #shorts-box {
      margin-top: 0px;
    }
  }
`;

//* react-slick customizing
export const StyledSlider = styled(Slider)`
  height: 90%; //슬라이드 컨테이너 영역

  .slick-track {
    margin: 0;
  }

  //슬라이드 스크린
  .slick-list {
    width: 613px;
    height: 110px;
    margin: 0 auto;
    overflow-x: hidden;
    vertical-align: middle;
  }

  //슬라이더 컨텐츠
  .slick-slide div {
    /* background-color: yellow; */
  }

  .slick-track {
    width: 100%;
  }

  .slick-slide.slick-active.slick-current {
    display: block;
  }

  // 슬라이더 버튼
  .slick-prev,
  .slick-next {
    box-shadow: 0 0px 7px rgb(0 0 0 / 29%);
    border-radius: 50%;
    background-color: #3838384d;
    line-height: 0%;

    position: absolute;
    top: 50%;

    display: block;

    width: 25px;
    height: 25px;
    padding: 0px;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    border: none;
    outline: none;
    color: transparent;
    /* color: -internal-light-dark(black, white); */
    /* background: transparent; */

    margin: 0 33px;
    z-index: 1;
  }

  // 슬라이더 버튼:before
  .slick-prev:before,
  .slick-next:before {
    /* color: white; */
    position: absolute;
    top: 0px;
    right: -2.6px;
    font-size: 30px;
    opacity: 1; // hover 효과 죽이기
  }

  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before,
  .slick-arrow.slick-next.slick-disabled,
  .slick-arrow.slick-prev.slick-disabled {
    display: none !important; // important: 강제 적용
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

/* 터치패트를 통한 스크롤
.slick-list {
  overflow: auto;
  white-space: nowrap;
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
}
.slick-list::-webkit-scrollbar {
  display: none; // 스크롤바 숨기기
} */

/* 슬라이더 버튼 hover, focus
.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  TODO HERE: hover && focus
} */
