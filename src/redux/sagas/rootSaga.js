import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_DATA, receiveApiData } from '../actions';
import getData from '../../services/apis';

function* getDueExamsData() {
  try {
    // do api call
    const dueExamsData = yield call(getData);
    yield put(receiveApiData(dueExamsData.data.data));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getDueExamsData);
}
