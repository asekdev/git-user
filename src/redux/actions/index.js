import {
	GET_USER_DATA,
	CLEAR_STATE,
	USER_INPUT,
	RECEIVED_USER_DATA_SUCCESS,
	RECEIVED_USER_DATA_FAILED
} from "../constants";

export const getUser = () => ({
	type: GET_USER_DATA
});

export const clearState = () => ({
	type: CLEAR_STATE
});

export const changUserInput = username => ({
	type: USER_INPUT,
	payload: username
});

export const dataReceivedError = error => ({
	type: RECEIVED_USER_DATA_FAILED
});

export const dataReceivedSuccess = data => ({
	type: RECEIVED_USER_DATA_SUCCESS,
	payload: data
});
