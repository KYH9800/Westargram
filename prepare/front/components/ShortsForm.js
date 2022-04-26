import React, { useRef } from 'react';
// CSS
import { ShortsFormWrapper, StyledSlider } from '../style/ShortsForm';
// components
import ShortsAvatar from './ShortsAvatar';

const ShortsForm = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <ShortsFormWrapper>
      <div id="shorts-box">
        <button className="slick-btn">{'<'}</button>
        <li className="li" />
        <ShortsAvatar />
        <ShortsAvatar />
        <ShortsAvatar />
        <ShortsAvatar />
        <ShortsAvatar />
        <ShortsAvatar />
        <ShortsAvatar />
        <StyledSlider {...settings}></StyledSlider>
        <button className="slick-btn">{'>'}</button>
      </div>
    </ShortsFormWrapper>
  );
};

export default ShortsForm;
