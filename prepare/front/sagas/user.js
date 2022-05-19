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
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  USER_PROFILE_CHANGE_REQUEST,
  USER_PROFILE_CHANGE_SUCCESS,
  USER_PROFILE_CHANGE_FAILURE,
  USER_INFO_CHANGE_REQUEST,
  USER_INFO_CHANGE_SUCCESS,
  USER_INFO_CHANGE_FAILURE,
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

// loadMyInfo
function loadMyInfoAPI(data) {
  return axios.get('/user', data);
}

function* loadMyInfo(action) {
  try {
    // api 통신할때는 call(동기)
    const result = yield call(loadMyInfoAPI, action.data);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

// logout
function logoutAPI() {
  return axios.post('/user/logout');
}

function* logout(action) {
  try {
    // api 통신할때는 call(동기)
    yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

//* 유저 정보 변경, user in model
function changeUserAPI(data) {
  console.log('이거 어떻게 받아오는지 봐라:', data);
  return axios.patch('/user/userProfile', data);
}

function* changeUser(action) {
  try {
    // api 통신할때는 call(동기)
    const result = yield call(changeUserAPI, action.data);
    yield put({
      type: USER_PROFILE_CHANGE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: USER_PROFILE_CHANGE_FAILURE,
      error: err.response.data,
    });
  }
}
//* 유저 정보 변경, userInfo in model
function changeUserInfoAPI(data) {
  console.log('이거 어떻게 받아오는지 봐라2:', data);
  return axios.patch('/user/userInfo', data);
}

function* changeUserInfo(action) {
  try {
    // api 통신할때는 call(동기)
    console.log('이거 어떻게 받아오는지 봐라3:', action.data);
    const result = yield call(changeUserInfoAPI, action.data);
    yield put({
      type: USER_INFO_CHANGE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: USER_INFO_CHANGE_FAILURE,
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

function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchChangeUser() {
  yield takeLatest(USER_PROFILE_CHANGE_REQUEST, changeUser);
}

function* watchChangeUserInfo() {
  yield takeLatest(USER_INFO_CHANGE_REQUEST, changeUserInfo);
}

export default function* userSaga() {
  yield all([
    fork(watchSignup),
    fork(watchUserIdNameCheck),
    fork(watchLogin),
    fork(watchLogout),
    fork(watchLoadMyInfo),
    fork(watchChangeUser),
    fork(watchChangeUserInfo),
  ]);
}
