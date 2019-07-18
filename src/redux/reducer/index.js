import { GET_USER_DATA, RECEIVED_USER_DATA_SUCCESS, USER_INPUT, RECEIVED_USER_DATA_FAILED } from "../constants";

export const initialState = {
	data: {},
	username: "",
	loading: false,
	error: false
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_USER_DATA:
			return { ...state, loading: true, error: false, data: initialState.data };
		case RECEIVED_USER_DATA_SUCCESS:
			return { ...state, data: payload, loading: false };
		case RECEIVED_USER_DATA_FAILED:
			return { ...state, loading: false, error: true };
		case USER_INPUT:
			return { ...state, username: payload };
		default:
			return state;
	}
};

export default userReducer;
