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
  USER_ID_NAME_CHECK_REQUEST,
  USER_ID_NAME_CHECK_SUCCESS,
  USER_ID_NAME_CHECK_FAILURE,
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

// userIdNameCheck
function userIdNameCheckAPI(data) {
  console.log('data', data);
  return axios.post('/user/userIdName', data);
}

function* userIdNameCheck(action) {
  try {
    // api 통신할때는 call(동기)
    const result = yield call(userIdNameCheckAPI, action.data);
    console.log('result.data:', result.data);
    yield put({
      type: USER_ID_NAME_CHECK_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: USER_ID_NAME_CHECK_FAILURE,
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

function* watchUserIdNameCheck() {
  yield takeLatest(USER_ID_NAME_CHECK_REQUEST, userIdNameCheck);
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchSignup), fork(watchUserIdNameCheck), fork(watchLogin)]);
}
