import React from 'react'
import { useHistory } from 'react-router-dom'

import { errHandler } from 'helpers'
import { useUser } from 'hooks'
import { auth } from 'services'

const AuthButton = () => {
  const history = useHistory()
  const user = useUser()

  function handleClick() {
    if (user) return auth.signOut().catch((err) => errHandler(err))
    return history.push('/login')
  }

  return <button onClick={handleClick}>{user ? 'Log Out' : 'Log In'}</button>
}

export default AuthButton
