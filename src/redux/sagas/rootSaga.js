import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "../actions";
import { getData } from "../apis";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    // do api call
    const axiosData = yield call(getData);
    yield put(receiveApiData(axiosData.data.data));
  } catch (e) {
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
  yield takeLatest(REQUEST_API_DATA, getApiData);
}