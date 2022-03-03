import createSagaMiddleware from 'redux-saga';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from '../sagas/rootSaga';
import rootReducer from '../reducers/rootReducer';
import App from '../../App';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export const ConnectedApp = connect((state) => state)(App);
