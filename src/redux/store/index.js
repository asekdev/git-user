import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import userReducer from "../reducer";
import rootSaga from "../sagas";
import { composeWithDevTools } from "redux-devtools-extension";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
