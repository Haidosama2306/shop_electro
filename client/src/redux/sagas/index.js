import { all } from 'redux-saga/effects';
import authSaga from './authSaga/index'

function* rootSaga() {
    yield all([authSaga()]);
  }
  
  export default rootSaga;