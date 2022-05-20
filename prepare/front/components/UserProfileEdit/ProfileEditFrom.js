import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
// CSS
import { ProfileEditFromWrapper } from '../../style/UserProfileEdit/ProfileEditFrom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// components
import useInput from '../../hooks/useInput';
// redux
import {
  USER_PROFILE_CHANGE_REQUEST,
  USER_INFO_CHANGE_REQUEST,
  USER_INFO_UPDATE_STATE_RESET,
} from '../../reducers/user';

const ProfileEditFrom = ({ me, sex, setOnSexToggle }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userProfileImageInput = useRef();
  // useSelector
  const { userInfoChangeError } = useSelector((state) => state.user);
  // useInput
  const [name, onChangeName] = useInput(me?.name || ``); // 이름
  const [userIdName, onChangeUserIdName] = useInput(me?.userIdName || ``); // 사용자 이름
  const [webSite, onChangeWebSite] = useInput(me?.UserInfo?.webSite || ``); // 웹 사이트
  const [introduce, onChangeIntroduce] = useInput(me?.UserInfo?.introduce || ``); // 소개
  const [userEmail, onChangeUserEmail] = useInput(me?.UserInfo?.userEmail || ``); // 사용자 이메일
  const [phoneNum, onChangePhoneNum] = useInput(me?.UserInfo?.phoneNum || ``); // 전화번호

  useEffect(() => {
    if (!me) {
      router.push('/');
    }
  }, [me]);

  const onClickImageUpload = useCallback(() => {
    userProfileImageInput.current.click();
  }, [userProfileImageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log('onChangeImages Click:', e.target.files);
    // todo: img 업로드
  }, []);

  // 성별
  const onClickToggle = () => {
    setOnSexToggle((prevState) => !prevState);
  };

  // 업데이트, submit
  const onClickSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        // ...PATCH user/userProfile, 유저정보
        type: USER_PROFILE_CHANGE_REQUEST,
        data: {
          name: name,
          userIdName: userIdName,
        },
      });
      dispatch({
        // ...PATCH user/userInfo, 유저 프로필 정보
        type: USER_INFO_CHANGE_REQUEST,
        data: {
          webSite: webSite,
          introduce: introduce,
          userEmail: userEmail,
          phoneNum: phoneNum,
          sex: sex,
        },
      });
      dispatch({
        type: USER_INFO_UPDATE_STATE_RESET,
      });
      if (!userInfoChangeError) {
        alert('회원님의 정보가 수정되었습니다.');
      }
    },
    [name, userIdName, webSite, introduce, userEmail, phoneNum, sex]
  );

  return (
    <>
      <ProfileEditFromWrapper>
        <div className="change-img">
          <div id="user-img-icon">
            {me?.UserProfileImage ? (
              <Avatar id="avatar" size={37} src={<img className="user-img" src={me.UserProfileImage[0]} />} />
            ) : (
              <Avatar size={37} icon={<UserOutlined />} />
            )}
          </div>
          <div className="user-profile-id-name">
            <div id="userIdName">{me?.userIdName}</div>
            <input
              type="file"
              name="userProfileImage"
              multiple
              hidden
              ref={userProfileImageInput}
              onChange={onChangeImages}
            />
            <a onClick={onClickImageUpload}>프로필 사진 바꾸기</a>
          </div>
        </div>
        <form onSubmit={onClickSubmit}>
          <div className="change-name">
            <label id="profile-input-title">이름</label>
            <div id="user-info-input-wrapper">
              <input type="text" placeholder="이름" value={name} onChange={onChangeName} required />
              <p>
                사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록
                도와주세요.
              </p>
            </div>
          </div>
          <div className="change-userId-name">
            <label id="profile-input-title">사용자 이름</label>
            <div id="user-info-input-wrapper">
              <input type="text" placeholder="사용자 이름" value={userIdName} onChange={onChangeUserIdName} required />
              <p>사용자 이름을 변경할 수 있습니다.</p>
            </div>
          </div>
          <div className="website-info">
            <label id="profile-input-title">웹 사이트</label>
            <div id="user-info-input-wrapper">
              <input type="text" placeholder="웹 사이트" value={webSite} onChange={onChangeWebSite} required />
            </div>
          </div>
          <div className="user-intro">
            <label id="profile-input-title">소개</label>
            <div id="user-info-input-wrapper">
              <textarea
                type="text"
                placeholder={me?.UserInfo?.introduce}
                value={introduce}
                onChange={onChangeIntroduce}
                required
              />
              <p>개인정보</p>
              <p>
                비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의 개인정보를 입력하세요. 공개 프로필에는 포함되지
                않습니다. 이메일
              </p>
            </div>
          </div>
          <div className="user-email">
            <label id="profile-input-title">이메일</label>
            <div id="user-info-input-wrapper">
              <input type="email" placeholder="이메일" value={userEmail} onChange={onChangeUserEmail} required />
            </div>
          </div>
          <div className="user-phone-num">
            <label id="profile-input-title">전화번호</label>
            <div id="user-info-input-wrapper">
              <input type="text" placeholder="전화번호" value={phoneNum} onChange={onChangePhoneNum} required />
            </div>
          </div>
          <div className="user-sex">
            <label id="profile-input-title">성별</label>
            <div id="user-info-input-wrapper">
              <input
                id="user-sex-input"
                type="text"
                placeholder="성별"
                value={sex}
                onClick={onClickToggle}
                readOnly
                required
              />
              <div className="userProfile-submit-btn">
                <button type="submit">제출</button>
                <a type="button">계정을 일시적으로 비활성화</a>
              </div>
            </div>
          </div>
        </form>
      </ProfileEditFromWrapper>
    </>
  );
};

export default ProfileEditFrom;
