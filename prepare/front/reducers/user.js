import produce from 'immer';

// initialState
export const initialState = {
  // 로그인
  logInLoading: false,
  logInDone: false,
  logInError: null,
  // 로그아웃
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  // 내 정보 가져오기(로그인 유지)
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  // 회원가입
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  // 내 로그인 정보
  me: null,
  // user 정보
  userInfo: null,
};

/* action 정의, action 함수 정의 */
// 회원가입 상태 초기화
export const RESET_SIGN_UP_STATES = 'RESET_SIGN_UP_STATES';
// 회원가입
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
// 로그인
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
// 로그아웃
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
// 로그인 정보 가져오기
export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

// reducer
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      //SIGNUP
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      // 회원가입 상태 초기화
      case RESET_SIGN_UP_STATES:
        draft.signUpLoading = false;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
    }
  });

export default reducer;
