// sagas/user.js
import { all, fork, put, call, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
} from '../reducers/user';

// signup
function signupAPI(data) {
  console.log('data', data);
  return axios.post('/user', data);
}

function* signup(action) {
  try {
    // api 통신할때는 call(동기)
    const result = yield call(signupAPI, action.data);
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

// login
function loginAPI(data) {
  console.log('data', data);
  return axios.post('/user/login', data);
}

function* login(action) {
  try {
    // api 통신할때는 call(동기)
    const result = yield call(loginAPI, action.data);
    console.log('result.data:', result.data);
    // yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signup);
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchSignup), fork(watchLogin)]);
}
