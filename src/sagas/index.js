import * as testSage from "./testSaga";

export const initSagas = (sagaMiddleware) => {
  Object.values(testSage).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
