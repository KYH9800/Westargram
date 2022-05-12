import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
// CSS
import { PostImagesWrapper } from './styles';

// image가 1개 이상이면 react-slick을 적용한다.
// if(imagePaths.length > 1) { return ... };
// 사진을 넘겨볼수 있게 한다.
const PostImages = ({ imagePaths }) => {
  const settings = {
    dots: true,
    infinite: true,
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
            console.log('image:', image);
            return <img id="post-img" key={idx} src={image.src} alt="게시글 이미지" />;
          })}
        </Slider>
      </PostImagesWrapper>
    );
    // 이미지가 1장이면 1장만 출력
  } else {
    return (
      <PostImagesWrapper>
        <img id="post-img" src={imagePaths[0].src} alt="게시글 이미지" />
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
