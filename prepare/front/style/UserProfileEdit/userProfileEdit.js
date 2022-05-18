import styled from 'styled-components';

export const UserProfileEditWrapper = styled.div`
  #userProfile-edit-wrapper {
    display: inline-flex;
    margin: 30px auto;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  }

  #side-menu-nav {
    border-right: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    background-color: #fff;
  }

  #side-menu-nav > ul {
    list-style: none;
    margin-bottom: 0;
    width: 237px;
  }

  #side-menu-nav > ul > li {
    cursor: pointer;
    font-size: 16px;
    padding: 12px 5px 12px 32px;
    /* font-weight: 600; */
  }
  #side-menu-nav > ul > li:hover {
    background-color: #f2f2f2ab;
  }

  #side-menu-nav > ul > li > a {
    color: black;
  }

  #side-menu-nav .propational-id-change {
    border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    height: 150px;
  }

  #side-menu-nav .propational-id-change > div {
    cursor: pointer;
    padding: 12px 5px 12px 32px;
    font-size: 14px;
    font-weight: 600;
  }

  #side-menu-nav .propational-id-change > div:hover {
    background-color: #f2f2f2ab;
  }

  // nav footer
  #profile-edit-nav-footer {
    margin: 11% 12%;
  }

  #profile-edit-nav-footer > a {
    display: block;
    color: #1890ff;
    margin-top: 1px;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 600;
  }

  #profile-edit-nav-footer > p {
    color: #8e8e8e;
    font-size: 12px;
    font-weight: 400;
    line-height: 5px;
  }

  // 아직 구현이 안된 기능은 밑줄표시
  .un-using-func {
    color: #8e8e8e !important;
    text-decoration: line-through;
  }

  // user 정보 입력란
  #change-user-info-wrapper {
    background-color: #fff;
    width: 695px;
  }
`;
