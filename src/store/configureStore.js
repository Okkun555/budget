import { applyMiddleware, combineReducers, createStore } from "redux";
import entriesReducer from "./entries/reducers";
import modalsReducer from "./modals/reducers";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    applyMiddleware(sagaMiddleware)
  );
};

export default configureStore;
