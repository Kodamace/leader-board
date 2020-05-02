import * as types from './action-types'

export const logIn = (username, password) => ({
  password,
  type: types.LOG_IN,
  username,
})
export const logOut = () => ({ type: types.LOG_OUT })
