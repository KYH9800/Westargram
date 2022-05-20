import React from 'react';
// CSS
import { CloseOutlined } from '@ant-design/icons';
import { UpdatePostWrapper, UpdatePostEditor } from '../../style/UpdatePost/UpdatePost';

const UpdatePost = ({ post, setUpdatePostToggle }) => {
  console.log('업데이트에서 받아온 mainPosts:', post);

  const closeUpdate = () => {
    if (confirm(`내용은 저장되지 않습니다.\n게시글 수정을 취소하시겠습니까?`)) {
      setUpdatePostToggle((state) => !state);
    }
  };

  return (
    <UpdatePostWrapper>
      <div id="close-btn">
        <CloseOutlined onClick={closeUpdate} />
      </div>
      <UpdatePostEditor>
        <div>게시글 수정</div>
        <div>
          <div>사진</div>
          <div>게시글 라인</div>
        </div>
      </UpdatePostEditor>
    </UpdatePostWrapper>
  );
};

export default UpdatePost;
