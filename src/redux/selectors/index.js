import { initialState } from "../reducer";
import { createSelector } from "reselect";

export const selectStateFromRedux = state => state || initialState;

export const usernameSelector = () =>
  createSelector(
    selectStateFromRedux,
    state => state.username
  );

export const dataSelector = () =>
  createSelector(
    selectStateFromRedux,
    state => state.data
  );

export const loadingSelector = () =>
  createSelector(
    selectStateFromRedux,
    state => state.loading
  );

export const errorSelector = () =>
  createSelector(
    selectStateFromRedux,
    state => state.error
  );
