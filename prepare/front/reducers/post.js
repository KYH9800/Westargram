// initialState
export const initialState = {
  postState: true,
};

// action 정의, action 함수 정의
export const ACTION_REQUEST = 'ACTION_REQUEST';

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_REQUEST:
      return {
        ...state,
        postState: false,
      };
    default:
      return state;
  }
};

export default reducer;
