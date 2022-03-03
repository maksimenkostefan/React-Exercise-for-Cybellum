import { all } from 'redux-saga/effects';

import loginUserWatcher from './loginSaga';

export default function* rootSaga() {
  yield all([
    loginUserWatcher(),
  ]);
}
