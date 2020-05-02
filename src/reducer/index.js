import * as types from './action-types'
import { logIn } from './helpers'

const initialState = {
  isLoggedIn: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return logIn(state, action)

    case types.LOG_OUT:
      return { ...state, isLoggedIn: false }

    default:
      return state
  }
}

export default reducer
