import {
	GET_USER_DATA,
	CLEAR_STATE,
	USER_INPUT,
	RECEIVED_USER_DATA_SUCCESS,
	RECEIVED_USER_DATA_FAILED,
	GIT_ENDPOINT
} from "../constants";
import axios from "axios";

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

export const dataReceivedError = () => ({
	type: RECEIVED_USER_DATA_FAILED
});

export const dataReceivedSuccess = data => ({
	type: RECEIVED_USER_DATA_SUCCESS,
	payload: data
});

export const getUserData = async username => {
	let request = await axios.get(GIT_ENDPOINT + username).catch(e => e.response);
	return request;
};
