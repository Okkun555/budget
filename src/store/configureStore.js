import { applyMiddleware, combineReducers, createStore } from "redux";
import entriesReducer from "./entries/reducers";
import modalsReducer from "./modals/reducers";
import createSagaMiddleware from "redux-saga";
import { testSaga } from "../sagas/testSaga";

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(testSaga);
  return store;
};

export default configureStore;
