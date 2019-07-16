//this file is for the store of the application

//TODO
/* 
    - add middleware (thunk or saga - tbd)
    - combine reducers 
*/
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import userReducer from "../reducer";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
