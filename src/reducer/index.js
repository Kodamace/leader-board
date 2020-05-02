import * as types from './action-types'
import {
  logIn,
  refreshContestants,
  refreshPoints,
  removeContestant,
  submitContestants,
} from './helpers'

const initialState = {
  isLoggedIn: false,
  name: '',
  points: '',

  // Remove this (not being used)
  contestants: [],
  username: '',
  password: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.name }
    case types.SET_POINTS:
      return { ...state, points: action.points }
    case types.CLEAR_CONTESTANT_INPUTS:
      return { ...state, name: '', points: '' }

    // TODO: Remove ALL THIS
    case types.SET_USERNAME:
      return { ...state, username: action.username }
    case types.SET_PASSWORD:
      return { ...state, password: action.password }

    case types.SUBMIT_CONTESTANT:
      return submitContestants(state)

    case types.REFRESH_CONTESTANTS:
      return refreshContestants(state)

    case types.REFRESH_POINTS:
      return refreshPoints(state)

    case types.REMOVE_CONTESTANT:
      return removeContestant(state, action.name)
    // UP UNTIL HERE

    case types.LOG_IN:
      return logIn(state, action)

    case types.LOG_OUT:
      return { ...state, isLoggedIn: false }

    default:
      return state
  }
}

export default reducer
