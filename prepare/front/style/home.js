import styled from 'styled-components';

export const MainWrapper = styled.div`
  #home-wrapper {
    position: relative;
  }

  #main-wrapper {
    display: flex;
  }

  #user-info-wrapper {
    margin-top: 22px;
    // 고정하기 위한 box size 설정
    margin-left: 32px;
    width: 100%;
    height: auto;
    // position 고정
    position: absolute;
    left: 607px;
  }

  #user-info-wrapper .user-info {
    position: fixed;
    // border: 1px solid wheat;
  }

  @media (max-width: 1000px) {
    #user-info-wrapper {
      display: none;
    }

    #main-wrapper {
      margin: 0 auto;
      display: table;
    }
  }
`;

/*
#section.shortsForm-section {
    display: block;
  } //! 이거 지워도 무관 (필요에 따라, 확인)

  #section.post-card {
    display: block;
  }
*/
