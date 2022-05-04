// sagas/user.js
import { all, fork, put, call, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducers/user';

function loginAPI(data) {
  console.log('data', data);
  return axios.post('/user', data);
}

function* login(action) {
  try {
    // api 통신할때는 call(동기)
    const result = yield call(loginAPI, action.data);
    // yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(SIGN_UP_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
