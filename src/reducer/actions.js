import * as types from "./action-types";

export const setName = name => ({ name, type: types.SET_NAME });
export const setPoints = points => ({ points, type: types.SET_POINTS });

export const setUsername = username => ({ type: types.SET_USERNAME, username });
export const setPassword = password => ({ password, type: types.SET_PASSWORD });

export const submitContestant = () => ({ type: types.SUBMIT_CONTESTANT });

export const refreshContestants = () => ({ type: types.REFRESH_CONTESTANTS });
export const refreshPoints = () => ({ type: types.REFRESH_POINTS });

export const removeContestant = name => ({
  name,
  type: types.REMOVE_CONTESTANT
});

export const toggleLoggedIn = () => ({ type: types.TOGGLE_LOGGED_IN });
export const logIn = (username, password) => ({
  password,
  type: types.LOG_IN,
  username
});
