import { GET_USER_DATA, RECEIVED_USER_DATA } from "../constants";

const initialState = {
	data: {},
	username: "",
	loading: false,
	error: false
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_USER_DATA:
			return { ...state, loading: true, username: payload };
		case RECEIVED_USER_DATA:
			return { ...state, data: payload, loading: false };
		default:
			return state;
	}
};

export default userReducer;
