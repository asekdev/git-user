import { GET_USER_DATA, CLEAR_STATE, USER_INPUT } from "../constants";

export const getUser = username => ({
  type: GET_USER_DATA,
  payload: username
});

export const clearState = () => ({
  type: CLEAR_STATE
});

export const changUserInput = username => ({
  type: USER_INPUT,
  payload: username
});
