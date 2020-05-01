import { history } from 'core'

const logIn = (state, { password, username }) => {
  if (username !== 'admin') {
    alert('Username does not exist!')
    return state
  }
  if (password !== 'admin') {
    alert('Password incorrect!')
    return state
  }

  history.push('/')
  return { ...state, isLoggedIn: true }
}

export default logIn
