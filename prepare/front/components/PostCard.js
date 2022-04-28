import React from 'react';
// CSS
import { PostCardWrapper } from '../style/PostCard';
// componenets
import PostCardEntry from './PostCardEntry';

const PostCard = () => {
  return (
    <PostCardWrapper>
      <div id="post-box-empty"></div>
      <PostCardEntry />
      <PostCardEntry />
      <PostCardEntry />
      <PostCardEntry />
      <PostCardEntry />
      <PostCardEntry />
      <PostCardEntry />
    </PostCardWrapper>
  );
};

export default PostCard;
