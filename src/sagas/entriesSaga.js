import entriesTypes, {
  getAllEntriesSuccess,
  getEntryDetailsSuccess,
} from "../store/entries/actions";
import { take, call, put, fork } from "redux-saga/effects";
import axios from "axios";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  const { data } = yield call(axios, "http://localhost:3005/entries");
  yield put(getAllEntriesSuccess(data));
}

export function* getEntriesDetails(id) {
  const { data } = yield call(axios, `http://localhost:3005/values/${id}`);
  yield put(getEntryDetailsSuccess(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.GET_ENTRIES_SUCCESS);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getEntriesDetails, entry.id);
  }
}
