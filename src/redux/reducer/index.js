import { GET_USER_DATA, RECEIVED_USER_DATA, USER_INPUT } from "../constants";

export const initialState = {
	data: {},
	username: "",
	loading: false,
	error: false
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_USER_DATA:
			return { ...state, loading: true };
		case RECEIVED_USER_DATA:
			console.log("test2");
			return { ...state, data: payload, loading: false };
		case USER_INPUT:
			console.log("hitting change user > ", payload);
			return { ...state, username: payload };
		default:
			return state;
	}
};

export default userReducer;
