import React from 'react';
// CSS
import { ProfileWrapper } from '../style/profile';
// antd
import { Avatar } from 'antd';
// component
import Layout from '../components/Layout';
import ProfileNav from '../components/ProfileNav/ProfileNav';

const Profile = () => {
  return (
    <Layout>
      <ProfileWrapper>
        <div id="header-nav-wrapper">
          <div id="profile-header">
            <div className="profile-line">
              <div id="profile-img">
                <Avatar id="avatar" src={<img className="user-img" src="/images/self.png" />} />
              </div>

              <div id="profile-user-info">
                <div id="mobile-profile-user-info">
                  <div className="profile-title">
                    <h1>kyh0506_</h1>
                    <button className="profile-edit-btn">프로필 편집</button>
                    <div>
                      <h2 className="blind">option-icon</h2>
                      <a>
                        <svg
                          className="options-icon"
                          color="#262626"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24">
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
                      </a>
                    </div>
                  </div>
                  <button id="profile-mobile-edit-btn">프로필 편집</button>
                </div>

                <div className="mobile-profile-user-name">
                  <span>고윤혁</span>
                </div>

                <div className="profile-post-follow">
                  <span>
                    게시물 <span id="profile-post-count">0</span>
                  </span>
                  <span>
                    <a id="profile-follow">
                      팔로워 <span id="profile-post-count">0</span>
                    </a>
                  </span>
                  <span>
                    <a id="profile-follow">
                      팔로우 <span id="profile-post-count">0</span>
                    </a>
                  </span>
                </div>

                <div className="profile-user-name">
                  <span>고윤혁</span>
                </div>
              </div>
            </div>
          </div>

          <nav id="profile-nav">
            <ProfileNav />
          </nav>
        </div>
        <div id="user-post-wrapper">
          {false ? (
            <>
              <div>게시물 있음</div>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
        </div>
      </ProfileWrapper>
    </Layout>
  );
};

export default Profile;