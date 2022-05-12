// sagas/index.js
import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import { backURL } from '../config/config';

import userSaga from './user';
import postSaga from './post';

axios.defaults.baseURL = backURL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
