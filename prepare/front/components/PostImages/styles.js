import styled from 'styled-components';

export const PostImagesWrapper = styled.div`
  // react-slick prev btn, react-slick next btn
  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    cursor: pointer;
    // position
    position: absolute;
    top: 50%;
    // custom
    line-height: 0%;
    display: block;
    width: 25px;
    height: 25px;
    padding: 0px;
    border: none;
    outline: none;
    margin: 0 33px;
    z-index: 1;
  }

  #post-img {
    max-width: 100%;
  }
`;

/* background-color: #3838384d; */
/* border-radius: 50%; */
/* color: transparent; */
/* color: -internal-light-dark(black, white); */
/* background: transparent; */
