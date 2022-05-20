import styled from 'styled-components';

// 기본 배경 설정
export const UpdatePostWrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000d9;
  // 닫기 버튼
  #close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    color: #fff;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

// 업데이트 포스트 에디터
export const UpdatePostEditor = styled.div`
  // box 전체 설정
  position: absolute;
  top: 100px;
  right: 0;
  left: 0;
  margin: auto;
  background-color: #fff;
`;
