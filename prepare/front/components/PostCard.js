import React from 'react';
// CSS
import { PostCardWrapper } from '../style/PostCard';
// componenets
import PostCardEntry from './PostCardEntry';

const PostCard = ({ posts }) => {
  console.log('posts:', posts);
  return (
    <PostCardWrapper>
      <div id="post-box-empty"></div>
      {posts.map((post) => (
        <PostCardEntry key={post.id} post={post} />
      ))}
    </PostCardWrapper>
  );
};

export default PostCard;
