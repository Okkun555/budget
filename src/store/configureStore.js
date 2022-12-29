import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import entriesReducer from "./entries/reducers";
import modalsReducer from "./modals/reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    composeWithDevTools()
  );
};

export default configureStore;
