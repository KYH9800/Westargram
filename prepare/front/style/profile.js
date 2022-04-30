import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  @media (min-width: 736px) {
    body {
      height: 0;
    }

    padding: 30px 20px 0;

    // header
    #profile-header {
      border-bottom: 1px solid rgba(var(--jb7, 0, 0, 0), 0.0975);
    }

    #profile-header .profile-line {
      display: flex;
      vertical-align: middle;
    }

    // 프로필 이미지
    #profile-img {
      text-align: center;
      width: 292px;
      margin-right: 22px;
      margin-bottom: 44px;
    }

    #profile-img .user-img {
      cursor: pointer;
    }

    #profile-img > span {
      width: 150px;
      height: 150px;
    }

    #profile-user-info {
      vertical-align: middle;
    }

    // ID, 프로필 편집, 설정 아이콘
    #profile-user-info .profile-title {
      display: flex;
      width: 260px;
      align-items: center;
      justify-content: space-between;
    }

    #profile-user-info .profile-title > h1 {
      font-weight: 300;
      font-size: 28px;
      color: #262626;
    }

    #profile-user-info .profile-title .profile-edit-btn {
      cursor: pointer;
      width: 84px;
      height: 30.3px;
      background-color: #fff;
      border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
      border-radius: 3px;
      font-size: 14px;
      font-weight: 600;
      color: #262626;
      margin-bottom: 13px;
    }
    #profile-user-info .profile-title .profile-edit-btn:active {
      color: #737373;
    }
    #profile-mobile-edit-btn {
      display: none; // PC 화면 시 사라짐
    }

    #profile-user-info .profile-title .options-icon {
      margin-bottom: 8px;
    }

    // 게시물, 팔로워, 팔로우
    #profile-user-info .profile-post-follow {
      display: flex;
    }

    #profile-user-info .profile-post-follow > span {
      margin-right: 57px;
      margin-bottom: 20px;
      color: #262626;
      font-size: 16px;
      font-weight: 400;
    }

    #profile-follow {
      color: #262626;
    }

    #profile-post-count {
      color: #262626;
      font-weight: 600;
    }

    // 이름
    #profile-user-info .profile-user-name {
      color: #262626;
      font-size: 16px;
      font-weight: 600;
    } // PC
    #profile-user-info .mobile-profile-user-name {
      display: none; // PC에서 모바일 CSS는 사라짐
    }

    // nav
    #profile-nav {
      // todo
    }

    #user-post-wrapper {
      // todo
    }
  }

  //* 모바일 width: 735px, 사진의 width는 고정
  @media (max-width: 735px) {
    // header
    #profile-header {
      border-bottom: 1px solid rgba(var(--jb7, 0, 0, 0), 0.0975);
      min-width: 650px;
    }

    // 프로필 이미지
    #profile-img > span {
      width: 77px;
      height: 77px;
      margin: 16px 16px;
    }

    #mobile-profile-user-info {
      position: absolute;
      top: 72px;
      left: 124px;
    }

    // ID, 프로필 편집, 설정 아이콘
    #mobile-profile-user-info .profile-title {
      display: inline-flex;
      margin-bottom: 8px;
    }

    #profile-user-info .profile-title > h1 {
      font-size: 28px;
      font-weight: 300;
      margin-bottom: 0;
    }

    #profile-user-info .profile-title {
      align-items: center;
    }

    #profile-user-info .profile-title .options-icon {
      margin-top: 7px;
      margin-left: 12px;
    }

    #profile-user-info .profile-title .profile-edit-btn {
      display: none; // Mobile 화면 시 사라짐
    }
    #profile-mobile-edit-btn {
      cursor: pointer;
      display: block;
      width: 250px;
      height: 30px;
      background-color: #fff;
      border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
      border-radius: 3px;
      font-size: 14px;
      font-weight: 600;
      color: #262626;
      margin-bottom: 13px;
    }
    #profile-mobile-edit-btn:active {
      color: #737373;
    }

    // 게시물, 팔로워, 팔로우
    #profile-user-info .profile-post-follow {
    }

    // 이름
    #profile-user-info .profile-user-name {
      display: none; // 모바일에서 PC CSS는 사라짐
    }
    #profile-user-info .mobile-profile-user-name {
      border-bottom: 1px solid rgba(var(--jb7, 0, 0, 0), 0.0975);
      padding: 0 16px 21px;
      color: #262626;
      font-size: 14px;
      font-weight: 600;
    } // 모비일

    // 게시물, 팔로워, 팔로우
    #profile-user-info .profile-post-follow {
      display: flex;
      width: 410px;
      text-align: center;
      margin: 12px auto;
      justify-content: space-between;
      color: #8e8e8e;
      font-size: 14px;
      font-weight: 400;
    }

    #profile-user-info .profile-post-follow .count {
      display: block;
      color: #262626;
      font-weight: 600;
    }
  }
`;
