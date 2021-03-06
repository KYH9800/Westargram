// create your reducer
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux'; // 여러 리듀서들을 하나로 합쳐준다.

import user from './user';
import post from './post';

// HYDRATE가 동작할 때 initStates들이 index user post 자체를 덮어씌울 수 있도록 구조를 작성
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload; // { ...state, ...action.payload } // console.log('HYDRATE', action);
    default: {
      const combineReducer = combineReducers({
        user,
        post,
      });
      return combineReducer(state, action); // combineReducer(state, action)
    }
  }
};

export default rootReducer; // _app.js에서 reducer로 사용된다!

/* rootReducer의 구조 설명
state, action 인자는 rootReducer = (state, action) => 여기의 state, action을 그대로 combineReducer에 넣는 겁니다.
combineReducers는 (...reducers) => (state, action) => state의 고차 함수이고
combineReducer는 (state, action) => state 함수 꼴입니다.
combineReducer(state, action)로 호출하면 완성된 state가 나오게 됩니다.
*/
