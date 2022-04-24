import React from 'react';
// CSS
import { Wrapper } from '../style/NavBar';

const NavBar = () => {
  return (
    <Wrapper>
      <div id="navWrapper">
        <nav>
          <div id="main-logo">
            <h3 className="blind">로고</h3>
            <a>
              <img className="logo-img" src="/images/instagram_logo.png" />
            </a>
          </div>
          <div id="search-input">
            <h3 className="blind">검색창</h3>
            <span id="search-icon">아이콘</span>
            <input type="text" />
          </div>
          <div id="icon-button">
            <h3 className="">아이콘 버튼</h3>
          </div>
        </nav>
      </div>
    </Wrapper>
  );
};

export default NavBar;
