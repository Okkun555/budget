import { take, put, delay, call, fork } from "redux-saga/effects";

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

function* doNoting() {
  console.log("I have been called");
  yield delay(500);
  console.log("I am doing nothing");
}

export function* testSagaFork() {
  while (true) {
    yield take("TEST_MESSAGE_2");
    yield fork(doNoting);
    yield fork(doNoting);
    yield fork(doNoting);
  }
}

export function* dispatchTest() {
  while (true) {
    yield delay(5000);
    yield put({ type: "TEST_MESSAGE_2", payload: 1000 });
  }
}
