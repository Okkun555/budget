import { take, put, delay, call } from "redux-saga/effects";

const double = (number) => number * 2;

export function* testSaga() {
  while (true) {
    console.log("Starting saga");
    const state = yield take("TEST_MESSAGE");
    const a = yield call(double, 2);
    const b = yield double(3);
    console.log(a);
    console.log(b);
    console.log("Finish saga function");
  }
}

export function* dispatchTest() {
  while (true) {
    yield delay(1000);
    yield put({ type: "TEST_MESSAGE", payload: 1000 });
  }
}
