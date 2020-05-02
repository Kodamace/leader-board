import React from 'react'
import { useSelector } from 'react-redux'

import {
  AuthButton,
  ContestantsDisplay,
  ContestantInput,
  Header,
} from 'components'

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  return (
    <>
      <Header />
      <ContestantsDisplay />
      {isLoggedIn && <ContestantInput />}
      <br />
      <br />
      <AuthButton />
    </>
  )
}

export default HomePage
