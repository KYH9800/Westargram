import React from 'react';
import { useSelector } from 'react-redux';
// CSS
import { PostCardWrapper } from '../style/PostCard';
// componenets
import PostCardEntry from './PostCardEntry';

const PostCard = () => {
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <PostCardWrapper>
      <div id="post-box-empty"></div>
      {mainPosts.map((post) => (
        <PostCardEntry key={post.id} post={post} />
      ))}
    </PostCardWrapper>
  );
};

export default PostCard;
