import { put, takeLatest, all, select, call } from "redux-saga/effects";
import { GET_USER_DATA } from "../constants";
import { usernameSelector } from "../selectors";
import { dataReceivedError, dataReceivedSuccess, getUserData } from "../actions";

export function* fetchUser() {
	const username = yield select(usernameSelector());
	const apiCall = yield call(getUserData, username);
	const { data, status } = apiCall;
	const outcome = status === 200 ? yield put(dataReceivedSuccess(data)) : yield put(dataReceivedError());

	return outcome;
}

//watches for the GET_USER_DATA action to be called - then executes accordingly
export function* actionWatcher() {
	//calls reducer GET_USER_DATA action (sets loading to true)
	//then calls the fetchUser() function to get the data
	yield takeLatest(GET_USER_DATA, fetchUser);
}

export default function* rootSaga() {
	yield all([actionWatcher()]);
}
