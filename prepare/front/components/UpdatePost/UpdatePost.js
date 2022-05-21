import React, { useCallback } from 'react';
import Slider from 'react-slick';
import { useDispatch } from 'react-redux';
// custom hooks
import useInput from '../../hooks/useInput';
// config
import { backURL } from '../../config/config';
// CSS
import { Avatar } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { UpdatePostWrapper, UpdatePostEditorForm } from '../../style/UpdatePost/UpdatePost';
// reducer
import { UPDATE_POST_REQUEST } from '../../reducers/post';

// console.log('업데이트에서 받아온 mainPosts:', post);
const UpdatePost = ({ post, setUpdatePostToggle }) => {
  const dispatch = useDispatch();
  // useState
  const [content, onChangeContent, setText] = useInput(post.content || ``);

  // react-slick
  const settings = {
    dots: false,
    infinite: false,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const closeUpdate = () => {
    if (confirm(`내용은 저장되지 않습니다.\n게시글 수정을 취소하시겠습니까?`)) {
      setUpdatePostToggle((state) => !state);
    }
  };

  // Submit
  const onClickUpdateSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (confirm('이 글을 수정하시겠습니까?')) {
        dispatch({
          type: UPDATE_POST_REQUEST,
          data: {
            PostId: post.id,
            content: content,
          },
        });
        setUpdatePostToggle((state) => !state);
      }
    },
    [content]
  );

  return (
    <UpdatePostWrapper>
      <div id="close-btn">
        <CloseOutlined onClick={closeUpdate} />
      </div>
      <UpdatePostEditorForm onSubmit={onClickUpdateSubmit}>
        <div id="add-post-title">
          <div>게시글 수정</div>
          <button type="submit">수정하기</button>
        </div>

        <div id="add-post-wrapper">
          <h3 className="blind">이미지</h3>
          <div id="add-post-img">
            <Slider {...settings}>
              {post.Images.map((image, idx) => {
                return (
                  <div id="add-img-box-wrapper">
                    <img id="post-img" key={idx} src={`${backURL}/${image.src}`} alt="게시글 이미지" />
                  </div>
                );
              })}
            </Slider>
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
          </div>
        </div>
      </UpdatePostEditorForm>
    </UpdatePostWrapper>
  );
};

export default UpdatePost;
