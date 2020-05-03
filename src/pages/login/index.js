import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { errHandler } from 'helpers'
import { useUser } from 'hooks'
import { auth } from 'services'

const LoginPage = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const user = useUser()

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleLoginClick() {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => errHandler(err))
  }

  useEffect(() => {
    if (user) history.push('/')
  }, [history, user])

  return (
    <>
      <h1>Login</h1>
      <input onChange={handleEmailChange} placeholder="email" value={email} />
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
