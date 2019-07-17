import { put, takeLatest, all, select } from "redux-saga/effects";
import { GIT_ENDPOINT, GET_USER_DATA } from "../constants";
import { usernameSelector } from "../selectors";

function* fetchUser() {
	//work out how to include the username here from the state
	const username = yield select(usernameSelector);
	const json = yield fetch(`${GIT_ENDPOINT}/${username}`).then(response => response.json());

	console.log(json);

	yield put({ type: "NEWS_RECEIVED", payload: json });
}

//watches for the GET_USER_DATA action to be called - then executes accordingly
function* actionWatcher() {
	//calls reducer GET_USER_DATA action (sets loading to true)
	//then calls the fetchUser() function to get the data
	yield takeLatest(GET_USER_DATA, fetchUser);
}

export default function* rootSaga() {
	yield all([actionWatcher()]);
}
