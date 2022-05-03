// sagas/user.js
import { all, fork, put, call, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

import { ACTION_REQUEST, ACTION_LOADING, ACTION_FAILURE } from '../reducers/user';

function loginAPI(data) {
  return axios.post('user/login', data);
}

function* login(action) {
  try {
    // api 통신할때는 call(동기)
    // const result = yield call(loginAPI, action.data);
    yield delay(1000);
    yield put({
      type: ACTION_LOADING,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: ACTION_FAILURE,
      // error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(ACTION_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
