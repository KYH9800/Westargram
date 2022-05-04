// configureStore.js
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit'; // redux의 createStore 메서드는 더이상 사용되지 않음
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log('loggerMiddleware(redux-thunk): ', action);
    return next(action);
  };

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const devMode = process.env.NODE_ENV === 'development';

  // process.env.NODE_ENV를 development와 production을 나누기
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, loggerMiddleware],
    devTools: devMode,
  });
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

// process.env.NODE_ENV === 'development',
export const wrapper = createWrapper(createStore, {
  debug: process.env.NODE_ENV !== 'development',
});

/*
const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(sagaMiddleware))
    : composeWithDevTools(applyMiddleware(sagaMiddleware, loggerMiddleware));
*/
