import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
// antd, CSS
import { Avatar, Image } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { AddPostWrapper } from '../style/NavMenu/AddPost';
// custom hooks
import useInput from '../hooks/useInput';
// config
import { backURL } from '../config/config';
// redux
import {
  ADD_POST_REQUEST,
  UPLOAD_IMAGES_REQUEST,
  REMOVE_IMAGE,
  REMOVE_ALL_IMAGE,
  ADD_POST_STATE_RESET,
} from '../reducers/post';

const AddPost = ({ setAddPostToggle }) => {
  const dispatch = useDispatch();
  const imageInput = useRef(); // 실제 DOM에 접근
  const [content, onChangeContent, setText] = useInput('');
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  console.log('imagePaths:', imagePaths.length);

  // react-slick
  const settings = {
    dots: true,
    infinite: false,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (addPostDone) {
      setAddPostToggle((prevState) => !prevState);
      dispatch({
        type: ADD_POST_STATE_RESET, // 상태 리셋
      });
    }
  }, [addPostDone]);

  const addPostToggleClick = useCallback(() => {
    if (confirm('작성중인 게시글은 저장되지 않습니다. 게시글 작성을 취소하시겠습니까?')) {
      dispatch({
        type: REMOVE_ALL_IMAGE,
      });
      setAddPostToggle((prevState) => !prevState); // props: setAddPostToggle in NavBar.js
    }
  }, []);

  // useRef()
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  // 이미지 업로드
  const onChangeImages = useCallback((e) => {
    console.log('e.target.file:', e.target.files);
    // 받아온 이미지를 reducer의 imagePaths에 담는다.
    // new FormData()에 contents와 묶는다.
    const imageFormData = new FormData(); // 멀티파트 형식으로 서버에 보낼수 있다
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f); // key: 'image', value(값): f
    }); // key: 'image'와 routes/post.js에 router.post('./images', upload.array('image'))가 일치해야 그대로 받을 수가 있다
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  // 업로드 이미지 취소(제거)
  const onRemoveImage = useCallback(
    (index) => () => {
      console.log('backURL:', backURL);
      dispatch({
        type: REMOVE_IMAGE,
        data: index,
      });
    },
    []
  );

  // 게시글 생성
  const onClickSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // 이미지와 게시글이 작성이 되어있는지 검사
      if (imagePaths.length === 0) {
        return alert('이미지를 추가하세요');
      }
      if (!text || !text.trim()) {
        return alert('게시글을 작성하세요');
      }
      if (confirm('작성한 게시글을 업로드 하시겠습니까?')) {
        // 데이터를 멀티파트 형식으로 전송, new FormData(), append를 통해 보낼 정보를 묶는다.
        const formData = new FormData();
        imagePaths.forEach((p) => {
          formData.append('image', p);
        });
        formData.append('content', content);
        // dispatch, new FormData()에 합친 이미지와 contents를 ADD_POST_REQUEST 요청한다.
        return dispatch({
          type: ADD_POST_REQUEST,
          data: formData,
        });
      }
    },
    [content, imagePaths]
  );

  return (
    <AddPostWrapper>
      <h3 className="blind">닫기 버튼</h3>
      <div onClick={addPostToggleClick}>
        <svg
          aria-label="닫기"
          id="closed"
          color="#ffffff"
          fill="#ffffff"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24">
          <polyline
            fill="none"
            points="20.643 3.357 12 12 3.353 20.647"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"></polyline>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            x1="20.649"
            x2="3.354"
            y1="20.649"
            y2="3.354"></line>
        </svg>
      </div>
      <h3 className="blind">게시글 작성 Box</h3>
      <form id="add-post-box-wrapper" type="submit" onSubmit={onClickSubmit}>
        <div id="add-post-title">
          <span>새 게시물 만들기</span>
          <button type="submit">공유하기</button>
        </div>
        <div id="add-post-wrapper">
          <div id="add-post-img">
            <h3 className="blind">이미지</h3>
            {imagePaths.length === 0 ? (
              <>
                <div id="addImg-Icon-btn">
                  <svg
                    aria-label="이미지나 동영상과 같은 미디어를 나타내는 아이콘"
                    className="addPostIcon"
                    color="#262626"
                    fill="#262626"
                    height="77"
                    role="img"
                    viewBox="0 0 97.6 77.3"
                    width="96">
                    <path
                      d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                      fill="currentColor"></path>
                    <path
                      d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                      fill="currentColor"></path>
                    <path
                      d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                      fill="currentColor"></path>
                  </svg>
                  <h3 className="blind">이미지 추가</h3>
                  <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
                  <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
                  <button type="button" onClick={onClickImageUpload}>
                    컴퓨터에서 선택
                  </button>
                </div>
              </>
            ) : imagePaths.length > 1 ? (
              <Slider {...settings}>
                {imagePaths.map((image, idx) => {
                  return (
                    <div id="add-img-box-wrapper">
                      {/* <Image width={790} src={`${backURL}/${image}`} alt={image} key={image} /> */}
                      <img src={`${backURL}/${image}`} alt={image} key={image} />
                    </div>
                  );
                })}
              </Slider>
            ) : (
              imagePaths.map((image, idx) => {
                return (
                  <div id="add-img-box-wrapper">
                    {/* <Image width={790} height={840} src={`${backURL}/${image}`} alt={image} key={image} /> */}
                    <img src={`${backURL}/${image}`} alt={image} key={image} />
                  </div>
                );
              })
            )}
          </div>
          <div id="add-post-text-box">
            <div id="addPost-user-info">
              <Avatar id="avatar" src={<img className="user-img" src="/images/self.png" />} size={28} />
              <span className="user-id">kyh0506</span>
            </div>
            <textarea
              className="addPost-textarea"
              value={content}
              onChange={onChangeContent}
              placeholder="문구 입력..."
            />
            <div className="limit-text-info">{content.length}/2,200</div>
            <div id="addPost-img-list">
              <h2>이미지 목록</h2>
              <div id="img-list-box">
                {imagePaths.map((image, idx) => {
                  return (
                    <div id="remove-img-btn-wrapper" key={image}>
                      <span id="img-num">{idx + 1}</span>
                      <span id="remove-img-btn">
                        <DeleteOutlined onClick={onRemoveImage(idx)} />
                      </span>
                      <img src={`${backURL}/${image}`} alt={image} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </form>
    </AddPostWrapper>
  );
};

export default AddPost;
// 사진: 높이가 839px 한정인 box 안에 사진을 넣는다. width는 사진 크기에 맞게 auto로 맞춘다.
