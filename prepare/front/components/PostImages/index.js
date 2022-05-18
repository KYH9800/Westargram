import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
// CSS
import { PostImagesWrapper } from './styles';
// component
import { backURL } from '../../config/config';

// imagePaths in PostCardEntry, post.Images
const PostImages = ({ imagePaths }) => {
  // console.log('이미지패스:', imagePaths);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // 이미지가 1장 이상이면 react-slick 적용
  if (imagePaths.length > 1) {
    return (
      <PostImagesWrapper>
        <Slider {...settings}>
          {imagePaths.map((image, idx) => {
            // console.log('image:', image);
            return <img id="post-img" key={idx} src={`${backURL}/${image.src}`} alt="게시글 이미지" />;
          })}
        </Slider>
      </PostImagesWrapper>
    );
    // 이미지가 1장이면 1장만 출력
  } else {
    return (
      <PostImagesWrapper>
        <img id="post-img" src={`${backURL}/${imagePaths[0].src}`} alt="게시글 이미지" />
      </PostImagesWrapper>
    );
  }
};

PostImages.prototype = {
  imagePaths: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
    })
  ).isRequired,
};

export default PostImages;
