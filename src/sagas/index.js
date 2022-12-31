// import * as testSage from "./testSaga";
import * as entriesSaga from "./entriesSaga";

export const initSagas = (sagaMiddleware) => {
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
