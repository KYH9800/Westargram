import styled from 'styled-components';

// 기본 배경 설정
export const UpdatePostWrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000d9;
  // 닫기 버튼
  #close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    color: #fff;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

// 업데이트 포스트 에디터
export const UpdatePostEditorForm = styled.form`
  // box 전체 설정
  position: relative;
  top: 7%;
  margin: 0 auto;
  max-width: 1168px; // 80%;
  max-height: 87%;
  background-color: #fff;
  border-radius: 15px;

  #add-post-title {
    position: relative;
    user-select: none;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0px 8px 0px;
    border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  }

  #add-post-title > button {
    position: absolute;
    top: 12px;
    right: 16px;
    cursor: pointer;
    border: 0;
    background-color: #fff;
    color: #0095f6;
    font-size: 14px;
    font-weight: 600;
  }

  #add-post-title > button:active {
    color: #4db9ff;
  }

  // editor wrapper
  #add-post-wrapper {
    display: flex;
    height: 80vh;
  }

  #add-img-box-wrapper {
    width: 100%;
    height: 839px; // 839
    /* height: 100%; */
    img {
      margin: auto;
      width: auto;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
    }
  }

  #add-post-img {
    border-right: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    text-align: center;
    width: 830px;
  }

  #post-img {
    width: 100%;
  }

  #add-post-text-box {
    position: relative;
    width: 338px;
    border-left: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  }

  #addPost-user-info {
    /* background-color: yellow; */
    margin: 15px 7px;
  }

  #addPost-user-info > span {
    font-size: 16px;
    font-weight: 600;
    margin-left: 10px;
  }

  #add-post-text-box .addPost-textarea {
    width: 91%; // 307px;
    height: 168px;
    margin: 0 15px;
    border: none;
    resize: none;
    outline: none;
  }

  #add-post-text-box .limit-text-info {
    border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    padding: 12px 15px;
    text-align: right;
    color: #c7c7c7;
    font-size: 12px;
    font-weight: 400;
  }

  // react-slick prev btn, react-slick next btn
  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    cursor: pointer;
    // position
    position: absolute;
    top: 50%;
    // custom
    line-height: 0%;
    display: block;
    width: 25px;
    height: 25px;
    background-color: black;
    border-radius: 50%;
    padding: 0px;
    border: none;
    outline: none;
    margin: 0 33px;
    z-index: 1;
  }
`;
