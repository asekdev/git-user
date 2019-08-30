import React from "react";
import Home from "../Home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import UserReducer, { initialState } from "../../redux/reducer";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

function renderWithRedux(
  ui,
  { initialState, store = createStore(UserReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

test("testing home comp", () => {
  const { getByTestId, getByPlaceholderText } = renderWithRedux(<Home />);

  expect(getByPlaceholderText("Enter a github username")).toBeTruthy();
});
