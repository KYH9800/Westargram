import styled from 'styled-components';

export const ProfileNavWrapper = styled.div`
  text-align: center;
  margin-top: 15px;
  vertical-align: middle;

  #profile-nav-list a {
    padding: 17.7px 7.9px;
    margin: 0 22px;
  }

  #profile-nav-list a > svg {
    vertical-align: middle;
    margin-right: 5px;
  }

  #profile-nav-list a > span {
    font-size: 12px;
    font-weight: 600;
    color: #8e8e8e;
    letter-spacing: 1px;
    vertical-align: middle;
  }

  // 모바일
  @media (max-width: 735px) {
    width: 650px;
    margin: 0 auto;

    #profile-nav-list a {
      margin: 0 22px;
    }

    #profile-nav-list a > span {
      display: none;
    }
    #profile-nav-list a > svg {
      width: 24px;
      height: 24px;
      margin: 10px 50px;
    }
    #profile-nav-list {
      border-bottom: 1px solid rgba(var(--jb7, 0, 0, 0), 0.0975);
    }
  }
`;

export const UserPostWrapper = styled.div`
  margin-top: 15px;
  background-color: #fff;

  #null-user-post-wrapper {
    display: flex;
    height: 380px;
  }

  #null-user-post-img {
    width: 380px;
    height: 380px;
  }

  #post-explanation {
    width: 320px;
    margin: 155px auto;
  }

  // 모바일
  @media (max-width: 935px) {
    width: 100%;
    margin: 20px auto;

    #null-user-post-wrapper {
      position: relative;
      display: block;
      height: 100%;
    }

    #null-user-post-img {
      width: 100%;
      height: 100%;
      margin-top: 300px;
      /* position: absolute;
      margin: auto; */
      /* right: 45px; */
    }

    #post-explanation {
      margin: 115px auto;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }
  }
`;
