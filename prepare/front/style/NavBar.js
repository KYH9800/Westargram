import styled from 'styled-components';

// component
export const Wrapper = styled.div`
  #navWrapper {
    margin: 0 auto;
    max-width: 990px;
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
    margin-right: 20px;
    flex: 0.65 0 auto;
    vertical-align: middle;
  }
  #main-logo .logo-img {
    max-height: 102px;
    max-width: 102px;
    margin-top: 4px;
  }
  #search-input {
    /* position: relative;
    right: 16px; */
    display: inline-flex;
    align-items: center;
    background-color: #efefef;
    width: 268px;
    height: 36px;
    border-radius: 7px;
    vertical-align: middle;
  }

  @media (max-width: 640px) {
    #search-input {
      display: none;
    }
  }

  #search-input > span {
    color: #8e8e8e;
    padding: 0 16px;
  }

  #search-input span svg {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 21.7px;
  }

  #search-input input {
    background-color: #efefef;
    border: none;
    width: 220px;
    height: 30px;
    outline: none;
    padding: 0 2%;
    vertical-align: middle;
    font-weight: 100;
    font-size: 16px;
    padding-left: 12px;
  }
  #icon-button {
    display: flex;
    padding-left: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

  #icon-button svg {
    margin: 0 12px;
  }

  #icon-button .user-img {
    width: 24px;
    margin-left: 10px;
    border-radius: 50%;
    background-color: gray;
  }
`;
