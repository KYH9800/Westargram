import styled from 'styled-components';

export const AddPostWrapper = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-color: #000000d9;

  #closed {
    position: absolute;
    right: 0;
    margin: 15px;
    cursor: pointer;
  }

  #add-post-box-wrapper {
    position: relative;
    top: 7%;
    margin: 0 auto;
    max-width: 1168px; // 80%;
    max-height: 87%;
    background-color: #fff;
    border-radius: 15px;
  }

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

  #add-post-wrapper {
    display: flex;
    height: 80vh;
  }

  #add-post-img {
    position: relative;
    user-select: none;
    text-align: center;
    width: 71%;
    p {
      font-size: 22px;
      font-weight: 300;
    }
    button {
      cursor: pointer;
      background-color: #0095f6;
      border: 1px solid transparent;
      border-radius: 4px;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      padding: 2px 9px;
    }
    button:active {
      background-color: #66c3ff;
    }
  }

  #addImg-Icon-btn {
    position: absolute;
    right: 0;
    left: 0;
    top: 35%;
  }

  #add-img-box-wrapper {
    width: 829px;
    height: 755px; // 839
    vertical-align: middle;
    img {
      margin: auto;
      width: auto;
      max-width: 100%;
      max-height: 100%;
      vertical-align: middle;
    }
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

  #addPost-img-list {
    border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    h2 {
      font-size: 16px;
      font-weight: 400;
      margin: 5px 17px;
    }
  }

  #img-list-box {
    height: 430px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  #remove-img-btn-wrapper {
    position: relative;
  }

  #remove-img-btn-wrapper img {
    width: 100%;
    border-bottom: 1px solid #fff;
  }

  #remove-img-btn {
    display: block;
    text-align: end;
    font-size: 22px;
    font-weight: 600;
    color: #fff;
    background-color: #000000cc;
    padding-right: 4%;
    padding-left: 4%;
    // 삭제 버튼
    svg:hover {
      color: red;
    }
  }

  #img-num {
    padding-left: 4%;
    line-height: 33px;
    float: left;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
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

  /* #add-post-img .slick-arrow.slick-next,
  #add-post-img .slick-arrow.slick-prev {
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #fff0;
    background-color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    padding: 2px 9px;
  } */
`;
