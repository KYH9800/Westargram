import React, { useRef } from 'react';
// CSS
import { ShortsFormWrapper, StyledSlider } from '../style/ShortsForm';
// components
import ShortsAvatar from './ShortsAvatar';

const ShortsForm = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    // nextArrow: true,
    // prevArrow: true,
  };

  return (
    <ShortsFormWrapper>
      <div id="shorts-empty-box"></div>
      <div id="shorts-box">
        <StyledSlider {...settings}>
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
          <ShortsAvatar />
        </StyledSlider>
      </div>
    </ShortsFormWrapper>
  );
};

export default ShortsForm;
