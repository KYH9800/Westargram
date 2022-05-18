import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
// CSS
import { ProfileEditFromWrapper } from '../../style/UserProfileEdit/ProfileEditFrom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// components
import useInput from '../../hooks/useInput';

const ProfileEditFrom = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userProfileImageInput = useRef();
  // useSelector
  const { me } = useSelector((state) => state.user);
  // useInput
  const [name, onChangeName] = useInput(''); // 이름
  const [userIdName, onChangeUserIdName] = useInput(''); // 사용자 이름
  const [webSite, onChangeWebSite] = useInput(''); // 웹 사이트
  const [introduce, onChangeIntroduce] = useInput(''); // 소개
  const [userEmail, onChangeUserEmail] = useInput(''); // 사용자 이메일
  const [phoneNum, onChangePhoneNum] = useInput(''); // 전화번호
  const [sex, setSex] = useState(''); // 성별

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
  const onClickTest = () => {
    console.log('click sex');
    // setSex()
  };

  return (
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
          <div id="userIdName">{me.userIdName}</div>
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
      <div className="change-name">
        <label id="profile-input-title">이름</label>
        <div id="user-info-input-wrapper">
          <input type="text" placeholder={me.name} value={name} onChange={onChangeName} required />
          <p>
            사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록
            도와주세요.
          </p>
        </div>
      </div>
      <div className="change-userId-name">
        <label id="profile-input-title">사용자 이름</label>
        <div id="user-info-input-wrapper">
          <input type="text" placeholder={me.userIdName} value={userIdName} onChange={onChangeUserIdName} required />
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
          <textarea type="text" value={introduce} onChange={onChangeIntroduce} required />
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
          <input id="user-sex-input" type="text" value={sex} onClick={onClickTest} readOnly required />
          <div className="userProfile-submit-btn">
            <button type="submit">제출</button>
            <a type="button">계정을 일시적으로 비활성화</a>
          </div>
        </div>
      </div>
    </ProfileEditFromWrapper>
  );
};

export default ProfileEditFrom;
