import React from "react";
import renderer from "react-test-renderer";
import Error from "../Error";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("testing error", () => {
  const component = renderer.create(<Error error="Found an error!" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("error prop gets passed successfully", () => {
  const { getByText } = render(<Error error="Found an error!" />);
  expect(getByText(/Found an error!/)).toBeTruthy();
});

test("error prop gets passed successfully", () => {
  const { getByTestId } = render(<Error error="Found an error!" />);
  expect(getByTestId("error-text")).toBeTruthy();
});
