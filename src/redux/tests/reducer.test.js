import userReducer, { initialState } from "../reducer";
import { changUserInput, clearState, dataReceivedError, dataReceivedSuccess, getUser } from "../actions";

describe("Reducer Tests", () => {
	let state;
	beforeEach(() => {
		state = JSON.parse(JSON.stringify(initialState));
	});

	it("should return initial state", () => {
		const expectedState = state;
		expect(userReducer(undefined, {})).toEqual(expectedState);
	});

	it("should handle getUser action successfully", () => {
		const expectedState = { ...state, loading: true, error: false, data: initialState.data };
		expect(userReducer(state, getUser())).toEqual(expectedState);
	});

	it("should handle success user data action successfully", () => {
		const dataResult = { message: "this is some test data" };

		const expectedState = {
			...state,
			data: dataResult,
			loading: false
		};
		expect(userReducer(state, dataReceivedSuccess(dataResult))).toEqual(expectedState);
	});

	it("should handle error user data action successfully", () => {
		const expectedState = {
			...state,
			loading: false,
			error: true
		};
		expect(userReducer(state, dataReceivedError())).toEqual(expectedState);
	});

	it("should handle user input action successfully", () => {
		const username = "Test User";
		const expectedState = {
			...state,
			username
		};
		expect(userReducer(state, changUserInput(username))).toEqual(expectedState);
	});
});
