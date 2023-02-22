import { SET_CURRENT_USER, CLEAR_CURRENT_USER } from "../types/authTypes";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const clearCurrentUser = (user) => ({
  type: CLEAR_CURRENT_USER,
});
