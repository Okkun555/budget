import entriesTypes from "../store/entries/actions";
import { take } from "redux-saga/effects";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log("I need to get the entries here");
}
