import entriesTypes from "../store/entries/actions";
import { take, call, put } from "redux-saga/effects";
import axios from "axios";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log("I need to get the entries here");
  const result = yield call(axios, "http://localhost:3005/entries");
  yield put({ type: entriesTypes.GET_ENTRIES_SUCCESS, payload: result.data });
}
