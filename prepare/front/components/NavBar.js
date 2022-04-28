import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
// CSS
import { Wrapper } from '../style/NavBar';
// antd
import { Avatar } from 'antd';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const onToggleClick = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <div id="navWrapper">
        <nav>
          <div id="main-logo">
            <h3 className="blind">로고</h3>
            <Link href="/">
              <a>
                <img className="logo-img" src="/images/Westagram.png" />
              </a>
            </Link>
          </div>
          <form id="search-input">
            <h3 className="blind">검색창</h3>
            <span id="search-icon">
              <svg
                aria-label="검색"
                className="_8-yf5 "
                color="#8e8e8e"
                fill="#8e8e8e"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16">
                <path
                  d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="16.511"
                  x2="22"
                  y1="16.511"
                  y2="22"></line>
              </svg>
            </span>
            <input type="text" placeholder="검색" />
          </form>
          <div id="icon-button">
            <h3 className="blind">아이콘 버튼</h3>
            <h4 className="blind">홈</h4>
            <Link href="/">
              <a id="menu-list-item">
                <svg
                  aria-label="홈"
                  className="_8-yf5 "
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24">
                  <path
                    d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"></path>
                </svg>
              </a>
            </Link>
            <h4 className="blind">다이렉트 메세지</h4>
            <Link href="/direct/inbox">
              <a id="menu-list-item">
                <svg
                  className="nav-direct"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24">
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="22"
                    x2="9.218"
                    y1="3"
                    y2="10.083"></line>
                  <polygon
                    fill="none"
                    points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"></polygon>
                </svg>
              </a>
            </Link>
            <h4 className="blind">새로운 게시물</h4>
            <a id="menu-list-item">
              <svg
                aria-label="새로운 게시물"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24">
                <path
                  d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="6.545"
                  x2="17.455"
                  y1="12.001"
                  y2="12.001"></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="12.003"
                  x2="12.003"
                  y1="6.545"
                  y2="17.455"></line>
              </svg>
            </a>
            <h4 className="blind">사람 찾기</h4>
            <Link href="/search">
              <a id="menu-list-item">
                <svg
                  aria-label="사람 찾기"
                  id="findperson"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24">
                  <polygon
                    fill="none"
                    points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"></polygon>
                  <polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon>
                  <circle
                    cx="12.001"
                    cy="12.005"
                    fill="none"
                    r="10.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"></circle>
                </svg>
              </a>
            </Link>
            <h4 className="blind">활동 피드</h4>
            <a id="menu-list-item">
              <svg
                aria-label="활동 피드"
                id="nav-heart"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24">
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
              </svg>
            </a>
            <h4 className="blind">User</h4>
            <Avatar
              id="avatar"
              src={<img className="user-img" src="/images/self.png" />}
              onClick={onToggleClick}
              size="small"
            />
            {toggle ? (
              <>
                <div id="box-point"></div>
                <div id="user-list">
                  <div className="list-item">
                    <svg
                      aria-label="프로필"
                      className="_8-yf5 "
                      color="#262626"
                      fill="#262626"
                      height="16"
                      role="img"
                      viewBox="0 0 24 24"
                      width="16">
                      <circle
                        cx="12.004"
                        cy="12.004"
                        fill="none"
                        r="10.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"></circle>
                      <path
                        d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"></path>
                      <circle
                        cx="12.006"
                        cy="9.718"
                        fill="none"
                        r="4.109"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"></circle>
                    </svg>
                    <span className="list-keyword">프로필</span>
                  </div>
                  <div className="list-item">
                    <svg
                      aria-label="저장됨"
                      className="_8-yf5 "
                      color="#262626"
                      fill="#262626"
                      height="16"
                      role="img"
                      viewBox="0 0 24 24"
                      width="16">
                      <polygon
                        fill="none"
                        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"></polygon>
                    </svg>
                    <span className="list-keyword">저장됨</span>
                  </div>
                  <div className="list-item">
                    <svg
                      aria-label="설정"
                      className="_8-yf5 "
                      color="#262626"
                      fill="#262626"
                      height="16"
                      role="img"
                      viewBox="0 0 24 24"
                      width="16">
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="8.635"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"></circle>
                      <path
                        d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"></path>
                    </svg>
                    <span className="list-keyword">설정</span>
                  </div>
                  <div className="list-item">
                    <svg
                      aria-label="계정 전환"
                      className="_8-yf5 "
                      color="#262626"
                      fill="#262626"
                      height="16"
                      role="img"
                      viewBox="0 0 24 24"
                      width="16">
                      <path d="M8 8.363a1 1 0 00-1-1H4.31a8.977 8.977 0 0114.054-1.727 1 1 0 101.414-1.414A11.003 11.003 0 003 5.672V3.363a1 1 0 10-2 0v5a1 1 0 001 1h5a1 1 0 001-1zm14 6.274h-5a1 1 0 000 2h2.69a8.977 8.977 0 01-14.054 1.727 1 1 0 00-1.414 1.414A11.004 11.004 0 0021 18.33v2.307a1 1 0 002 0v-5a1 1 0 00-1-1z"></path>
                    </svg>
                    <span className="list-keyword">계정 전환</span>
                  </div>
                  <hr id="logout-line" />
                  <div className="logout-btn">로그아웃</div>
                </div>
              </>
            ) : null}
          </div>
        </nav>
      </div>
    </Wrapper>
  );
};

export default NavBar;
