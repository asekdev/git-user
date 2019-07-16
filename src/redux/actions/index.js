import { GET_USER_DATA, CLEAR_STATE } from "../constants";

export const getUser = username => ({
	type: GET_USER_DATA,
	payload: username
});

export const clearState = () => ({
	type: CLEAR_STATE
});
