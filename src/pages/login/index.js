import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
// import { history } from 'core'

import { logIn } from 'reducer/actions'

const LoginPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUsernameChange(e) {
    setUsername(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleLoginClick() {
    dispatch(logIn(username, password))
  }

  useEffect(() => {
    if (isLoggedIn) history.push('/')
  }, [history, isLoggedIn])

  return (
    <>
      <h1>Login</h1>
      <input
        onChange={handleUsernameChange}
        placeholder="username"
        value={username}
      />
      <input
        onChange={handlePasswordChange}
        placeholder="password"
        type="password"
        value={password}
      />
      <button onClick={handleLoginClick}>Login</button>
      <br />
      <br />
      <button onClick={() => history.push('/')}>Back</button>
    </>
  )
}

export default LoginPage
