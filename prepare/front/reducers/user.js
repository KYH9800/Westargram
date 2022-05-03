// initialState
export const initialState = {
  request: false,
  loading: false,
  failure: false,
};

// action 정의, action 함수 정의
export const ACTION_REQUEST = 'ACTION_REQUEST';
export const ACTION_LOADING = 'ACTION_LOADING';
export const ACTION_FAILURE = 'ACTION_FAILURE';

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_REQUEST:
      return {
        ...state,
        request: true,
        loading: false,
        failure: false,
      };
    case ACTION_LOADING:
      return {
        ...state,
        request: false,
        loading: true,
        failure: false,
      };
    case ACTION_FAILURE:
      return {
        ...state,
        request: false,
        loading: false,
        failure: true,
      };
    default:
      return state;
  }
};

export default reducer;
