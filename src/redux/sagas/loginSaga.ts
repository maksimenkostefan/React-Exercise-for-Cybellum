import { put, takeLatest, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { approveLogin } from '../actions/actionCreators';
import { LOGIN_REQUESTED } from '../actions/actionTypes';

import api from '../../api';


interface IActionType {
  type: string,
  payload?: {email: string, password: string}
}

interface ILoginResponse {
  status_code: number,
  access_token?: string,
  refresh_token?: string,
  error?: string
}

function* loginUser(action: IActionType) {
  const response: AxiosResponse<ILoginResponse> = yield call([api, 'post'], 'login/', action.payload);
  yield put(approveLogin(response.status));
}

function* loginUserWatcher() {
  yield takeLatest(LOGIN_REQUESTED, loginUser);
}

export default loginUserWatcher;
