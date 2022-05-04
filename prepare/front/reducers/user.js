import produce from 'immer';

// initialState
export const initialState = {
  //* 회원가입 시도중
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
};

// action 정의, action 함수 정의
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

// reducer
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      //* SIGNUP
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
    }
  });

export default reducer;
