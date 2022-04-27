import React from 'react';
// CSS
import { PostCardWrapper } from '../style/PostCard';
// componenets
import PostCardEntry from './PostCardEntry';

const PostCard = () => {
  return (
    <PostCardWrapper>
      <div id="post-box-empty"></div>
      <div id="post-card-wrapper">
        <PostCardEntry />
        <PostCardEntry />
        <PostCardEntry />
        <PostCardEntry />
        <PostCardEntry />
        <PostCardEntry />
        <PostCardEntry />
        <PostCardEntry />
        <PostCardEntry />
      </div>
    </PostCardWrapper>
  );
};

export default PostCard;
