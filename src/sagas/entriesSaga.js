import entriesTypes from "../store/entries/actions";
import { take, call } from "redux-saga/effects";
import axios from "axios";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log("I need to get the entries here");
  const res = yield call(axios, "http://localhost:3005/entries");
  console.log(res);
}
