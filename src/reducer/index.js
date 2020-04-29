import * as types from "./action-types";
import {
  logIn,
  refreshContestants,
  refreshPoints,
  removeContestant,
  submitContestants
} from "./helpers";

const initialState = {
  contestants: [],
  isLoggedIn: false,
  name: "",
  points: "",

  username: "",
  password: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NAME:
      return { ...state, name: action.name };
    case types.SET_POINTS:
      return { ...state, points: action.points };

    case types.SET_USERNAME:
      return { ...state, username: action.username };
    case types.SET_PASSWORD:
      return { ...state, password: action.password };

    case types.SUBMIT_CONTESTANT:
      return submitContestants(state);

    case types.REFRESH_CONTESTANTS:
      return refreshContestants(state);

    case types.REFRESH_POINTS:
      return refreshPoints(state);

    case types.REMOVE_CONTESTANT:
      return removeContestant(state, action.name);

    case types.TOGGLE_LOGGED_IN:
      return { ...state, isLoggedIn: !state.isLoggedIn };

    case types.LOG_IN:
      return logIn(state, action);

    default:
      return state;
  }
};

export default reducer;
