import { put, takeLatest, call } from 'redux-saga/effects';

import { approveLogin, declineLogin } from '../actions/actionCreators';
import { LOGIN_REQUESTED } from '../actions/actionTypes';

import api from '../../api';
import type { IActionType } from '../../types/types';
import type { ILoginResponse } from '../../types/types';

function* loginUser(action: IActionType) {
  try {
    const response: ILoginResponse = yield call([api, 'post'], 'login/', action.payload);
    yield put(approveLogin());
    yield document.cookie = `access_token=${response.access_token}`
    yield document.cookie = `refresh_token=${response.refresh_token}`
  } catch (error) {
    if (error instanceof Error) yield put(declineLogin(error));
  }
  
}

function* loginUserWatcher() {
  yield takeLatest(LOGIN_REQUESTED, loginUser);
}

export default loginUserWatcher;
