import styled from 'styled-components';

export const MainWrapper = styled.div`
  #main-wrapper {
    display: flex;
  }
  @media (max-width: 1000px) {
    #user-info-wrapper {
      display: none;
    }
  }
`;
