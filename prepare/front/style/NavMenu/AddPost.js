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
    top: 84px;
    margin: 0 auto;
    width: 80%;
    max-width: 1169px;
    /* height: 873px; */
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

  #add-post-title > a {
    position: absolute;
    right: 16px;
    font-size: 14px;
    font-weight: 600;
  }

  #add-post-wrapper {
    display: inline-flex;
  }

  #add-post-img {
    user-select: none;
    text-align: center;
    margin-top: 29%;
    margin-bottom: 29%;
    width: 830px;
    /* height: 873px; */
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

  #add-post-text-box {
    position: relative;
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
    width: 307px;
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
`;
