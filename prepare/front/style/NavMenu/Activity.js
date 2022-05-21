import styled from 'styled-components';

// ActivityWrapper
export const ActivityWrapper = styled.div`
  #activity-box-point {
    position: absolute;
    top: 36px;
    right: 52px;
    width: 14px;
    height: 14px;
    background-color: #fff;
    box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
    transform: rotate(45deg);
  }

  #activity-list {
    user-select: none;
    border-radius: 5px;
    box-shadow: 0 0 5px 1px rgba(var(--jb7, 0, 0, 0), 0.0975);
    background-color: #fff;
    text-align: left;
    width: 500px;
    height: 362px;
    overflow-x: hidden;
    overflow-y: auto;
    /* position */
    position: absolute;
    top: 43px;
    right: -7px;
  }
  #activity-list .list-keyword {
    padding: 7px 10px 0px 11px;
    color: #262626;
    font-weight: 600;
  }

  #activity-br {
    border-top: 1px solid #dbdbdb;
  }

  #activity-list .list-item {
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    padding-top: 11px;
    padding-bottom: 11px;
    width: 230px;
    vertical-align: middle;
  }
  #activity-list .list-item:hover {
    background-color: #f2f2f2;
  }
`;

// ActivityEntryWrapper
export const ActivityEntryWrapper = styled.div`
  #activity-list-item {
    width: 483px;
    padding: 12px;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  #activity-list-item .activity-news {
    width: 343px;
    margin: 0 10px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    color: #262626;
  }

  #activity-list-item .activity-userId {
    font-weight: 600;
  }

  #activity-list-item .activity-upload-time {
    color: rgba(var(--f52, 142, 142, 142), 1);
  }

  #activity-list-item > button {
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;
    width: 56.55px;
    height: 30.21px;
    margin-left: 10px;
  }

  // 팔로우 버튼
  #activity-follow-btn {
    background-color: #0095f6;
    border: 0;
    color: #fff;
  }
  #activity-follow-btn:active {
    color: #fff;
    background-color: #68c3ff;
  }
  // 팔로잉 버튼
  #activity-follwing-btn {
    background-color: transparent;
    border: 1px solid rgba(var(--jb7, 0, 0, 0), 0.0975);
    color: #262626;
  }
  #activity-follwing-btn:active {
    color: #8d8d8d;
  }
`;
