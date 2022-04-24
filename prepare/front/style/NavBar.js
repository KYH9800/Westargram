import styled from 'styled-components';

// component
export const Wrapper = styled.div`
  #navWrapper {
    margin: 0 auto;
    max-width: 975px;
  }
  #navWrapper > nav {
    padding: 0 20px;
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: space-between;
  }
  #main-logo {
    margin-top: 7px;
  }
  #main-logo .logo-img {
    max-height: 100px;
    max-width: 100px;
  }
  #search-input {
    position: relative;
    display: inline-flex;
    align-items: center;
    background-color: #efefef;
    width: 268px;
    height: 36px;
    border-radius: 7px;
    vertical-align: middle;
  }
  #search-input > span {
    /* position: absolute;
    left: 10px; */
  }
  #search-input input {
    background-color: #efefef;
    border: none;
    width: 220px;
    height: 30px;
    outline: none;
    padding: 0 2%;
    vertical-align: middle;
  }
  #icon-button {
  }
`;
