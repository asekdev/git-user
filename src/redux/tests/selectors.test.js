import { dataSelector, selectStateFromRedux, usernameSelector, loadingSelector, errorSelector } from "../selectors";
import { initialState } from "../reducer";

describe("Test state selectors", () => {
	it("Should select the state", () => {
		const state = {
			data: {},
			username: "test user",
			loading: false,
			error: false
		};
		const mockedState = state;

		expect(selectStateFromRedux(mockedState)).toEqual(state);
	});

	it("Should select initial state", () => {
		const state = null;
		const mockedState = state;

		expect(selectStateFromRedux(mockedState)).toEqual(initialState);
	});
});

describe("Test state selectors - data", () => {
	it("Should select the data attribute", () => {
		const selectorData = dataSelector();
		const data = { name: "Andy", type: "test" };
		const mockedState = {
			data
		};

		expect(selectorData(mockedState)).toEqual(data);
	});
});

describe("Test state selectors - username", () => {
	it("Should select the data attribute", () => {
		const selectorUsername = usernameSelector();
		const username = "Andy";
		const mockedState = {
			username
		};

		expect(selectorUsername(mockedState)).toEqual(username);
	});
});

describe("Test state selectors - loading", () => {
	it("Should select the data attribute", () => {
		const selectorLoading = loadingSelector();
		const loading = false;
		const mockedState = {
			loading
		};

		expect(selectorLoading(mockedState)).toEqual(loading);
	});
});

describe("Test state selectors - error", () => {
	it("Should select the data attribute", () => {
		const selectError = errorSelector();
		const error = false;
		const mockedState = {
			error
		};

		expect(selectError(mockedState)).toEqual(error);
	});
});
