import styled from 'styled-components';

export const MainWrapper = styled.div`
  #home-wrapper {
    margin: 0 auto;
    max-width: 990px;
  }

  #main {
    padding: 0 20px;
    align-items: center;
    display: inline-flex;
    height: 60px;
    justify-content: space-around;
  }

  #section {
    margin-top: 65px;
  }

  #section .wrap-vertical {
    width: 617px;
    padding: 16px 0;
    border: 1px solid #000;
  }

  #user-info-wrapper .user-info {
    width: 293px;
    vertical-align: middle;
  }

  @media (max-width: 1000px) {
    #user-info-wrapper {
      display: none;
    }
  }
`;
