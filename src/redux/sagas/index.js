import { put, takeLatest, all, select } from "redux-saga/effects";
import { GIT_ENDPOINT, GET_USER_DATA } from "../constants";
import { usernameSelector } from "../selectors";
import axios from "axios";
import { dataReceivedError, dataReceivedSuccess } from "../actions";

export function* fetchUser() {
	//work out how to include the username here from the state
	let json;
	try {
		const username = yield select(usernameSelector());
		yield axios.get(GIT_ENDPOINT + username).then(res => {
			json = res;
		});
		yield put(dataReceivedSuccess(json.data));
	} catch (err) {
		yield put(dataReceivedError());
	}
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
