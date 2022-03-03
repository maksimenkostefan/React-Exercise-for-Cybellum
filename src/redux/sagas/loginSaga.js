import { put, takeLatest } from 'redux-saga/effects';

import { approveLogin, declineLogin } from '../actions/actionCreators';
import { LOGIN_REQUESTED } from '../actions/actionTypes';

import api from '../../api';

function* loginUser(action) {
  try {
    const response = yield api.post('login/', action.payload);
    yield put(approveLogin(response.status));
  } catch (error) {
    yield put(declineLogin(error));
  }
}

function* loginUserWatcher() {
  yield takeLatest(LOGIN_REQUESTED, loginUser);
}

export default loginUserWatcher;
